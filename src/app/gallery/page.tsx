"use client";

import { useRef, useState, useEffect } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";
import { supabase } from "../../../lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { RefObject } from "react";

type GalleryRow = {
  id: string;
  user_id: string;
  file_url: string;      // storage path, e.g. "<uid>/123.jpg"
  file_type: "photo" | "video";
  upload_date: string;   // yyyy-mm-dd from DB
  is_shared: boolean;
  shared_url: string | null;
};

type GalleryItem = GalleryRow & { signedUrl: string | null };

const BUCKET = "gallery-media";
const SIGNED_SECONDS = 60 * 60; // 1 hour per view

export default function UploadGallery() {
  // ===== existing upload refs/buttons =====
  const pickRef = useRef<HTMLInputElement>(null);   // gallery/documents
  const photoRef = useRef<HTMLInputElement>(null);  // camera photo
  const videoRef = useRef<HTMLInputElement>(null);  // camera video

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // ===== calendar + media state =====
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [media, setMedia] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(false);

  function open(ref: RefObject<HTMLInputElement | null>) {
  ref.current?.click();
}

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    if (f) setFile(f);
    e.target.value = ""; // allow re-selecting same file
  };

  // ---------------- Upload (unchanged) ----------------
  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const { data: userData } = await supabase.auth.getUser();
    const user = userData.user;
    if (!user) {
      setUploading(false);
      return alert("Please log in first.");
    }

    const ext =
      file.name.split(".").pop() ||
      (file.type.startsWith("image/") ? "jpg" : "mp4");
    const filePath = `${user.id}/${Date.now()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(filePath, file, { cacheControl: "3600", upsert: false });

    if (uploadError) {
      console.error(uploadError);
      setUploading(false);
      return alert(uploadError.message);
    }

    const fileType = file.type.startsWith("image/") ? "photo" : "video";

    const { error: dbError } = await supabase.from("gallery").insert({
      user_id: user.id,
      file_url: filePath,  // keep path in DB
      file_type: fileType,
      is_shared: false,
    });

    if (dbError) {
      console.error(dbError);
      alert(`DB error: ${dbError.message}`);
    } else {
      alert("Uploaded successfully ✅");
      setFile(null);
      if (selectedDate) fetchMedia(selectedDate); // refresh list
    }

    setUploading(false);
  };

  // ---------------- Fetch + Signed URLs ----------------
  useEffect(() => {
    if (selectedDate) fetchMedia(selectedDate);
  }, [selectedDate]);

  async function fetchMedia(date: Date) {
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setLoading(false);
      return;
    }

    const day = date.toISOString().split("T")[0];

    const { data, error } = await supabase
      .from("gallery")
      .select(
        "id, user_id, file_url, file_type, upload_date, is_shared, shared_url"
      )
      .eq("user_id", user.id)
      .eq("upload_date", day)
      .order("upload_date", { ascending: false });

    if (error) {
      console.error(error);
      setMedia([]);
      setLoading(false);
      return;
    }

    // generate signed URL for each row
    const withUrls: GalleryItem[] = await Promise.all(
      (data as GalleryRow[]).map(async (row) => {
        const { data: signed, error: signErr } = await supabase.storage
          .from(BUCKET)
          .createSignedUrl(row.file_url, SIGNED_SECONDS);

        if (signErr) console.error("sign error", signErr);

        return { ...row, signedUrl: signed?.signedUrl ?? null };
      })
    );

    setMedia(withUrls);
    setLoading(false);
  }

  // ---------------- UI ----------------
  return (
    <ProtectedRoute>
      <div className="flex flex-col gap-6 p-6 justify-center items-center">
        <h1 className="text-2xl font-bold text-white pt-20">Your Fitness Journey</h1>

        {/* Upload controls (unchanged) */}
        <div className="flex flex-wrap gap-3">
          <Button className="bg-white text-black rounded-2xl" onClick={() => open(pickRef)}>Pick from device</Button>
          <Button className="bg-white text-black rounded-2xl" onClick={() => open(photoRef)}>Take photo (camera)</Button>
          <Button className="bg-white text-black rounded-2xl" onClick={() => open(videoRef)}>Record video (camera)</Button>
        </div>

        {/* Hidden inputs */}
        <input
          ref={pickRef}
          type="file"
          accept="image/*,video/*"
          className="hidden"
          onChange={onChange}
        />
        <input
          ref={photoRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={onChange}
        />
        <input
          ref={videoRef}
          type="file"
          accept="video/*"
          capture="environment"
          className="hidden"
          onChange={onChange}
        />

        {file && (
          <p className="text-sm text-gray-300">
            Selected: <span className="font-medium">{file.name}</span>
          </p>
        )}
        <Button className="bg-gradient-to-r from-orange-300 to-pink-500 rounded-full" onClick={handleUpload} disabled={!file || uploading}>
          {uploading ? "Uploading..." : "Upload"}
        </Button>

        {/* Calendar + day picker */}
        <div className="mt-8 justify-center items-center text-center">
          <h2 className="text-xl text-white font-semibold mb-2">
            View by Date
          </h2>
          <Calendar
            className="rounded-3xl"
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
          <p className="text-sm text-white mt-2">
            {selectedDate?.toISOString().split("T")[0]}
          </p>
        </div>

        {/* Media grid using SIGNED URLS */}
        <div className="mt-4">
          {loading ? (
            <p className="text-gray-300">Loading…</p>
          ) : media.length === 0 ? (
            <p className="text-gray-300">No uploads for this date.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {media.map((m) => (
                <div
                  key={m.id}
                  className="rounded-lg overflow-hidden bg-slate-800/60 p-2"
                >
                  {m.file_type === "video" ? (
                    <video
                      src={m.signedUrl ?? ""}
                      controls
                      className="w-full h-64 object-contain bg-black"
                    />
                  ) : (
                    <img
                      src={m.signedUrl ?? ""}
                      alt="uploaded"
                      className="w-full h-64 object-contain bg-black"
                    />
                  )}
                  <div className="text-xs text-gray-400 mt-1">
                    {m.upload_date}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <p className="text-xs text-gray-400">
          Note: Camera capture opens on mobile over HTTPS/localhost. Desktops
          always show a file picker (browser limitation).
        </p>
      </div>
    </ProtectedRoute>
  );
}
