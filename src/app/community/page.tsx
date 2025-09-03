// app/community/page.tsx
"use client";
import { useEffect, useState } from "react";
import {
  createPost,
  listPosts,
  toggleLikePost,
  listComments,
  addComment,
} from "../../../lib/community";
import ProtectedRoute from "../../../components/ProtectedRoute";

export default function CommunityPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [openComments, setOpenComments] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [comments, setComments] = useState<{ [key: string]: any[] }>({});
  const [commentText, setCommentText] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    (async () => setPosts(await listPosts()))();
  }, []);

  async function submit() {
    if (!text.trim()) return;
    await createPost(text.trim());
    setText("");
    setPosts(await listPosts());
  }

  async function toggleComments(postId: string) {
    // Toggle open/close
    setOpenComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));

    // If opening and not loaded, fetch comments
    if (!openComments[postId]) {
      const data = await listComments(postId);
      setComments((prev) => ({ ...prev, [postId]: data }));
    }
  }

  async function submitComment(postId: string) {
    if (!commentText[postId]?.trim()) return;
    await addComment(postId, commentText[postId].trim());
    setCommentText((prev) => ({ ...prev, [postId]: "" }));
    const data = await listComments(postId);
    setComments((prev) => ({ ...prev, [postId]: data }));
    setPosts(await listPosts()); // refresh counts
  }

  return (
    <ProtectedRoute>
      <div className="max-w-2xl mx-auto p-4 pt-30">
        {/* Post input */}
        
        <div className="flex flex-row gap-3 items-center justify-between">
          <textarea
            className="w-full border rounded p-2 mb-2 text-white"
            placeholder="Share something…"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={submit}
            className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
          >
            Post
          </button>
        </div>

        {/* Posts */}
        <div className="mt-6 space-y-4">
          {posts.map((p) => (
            <div key={p.id} className="rounded border p-3 bg-white/70">
              {/* Header */}
              <div className="flex items-center gap-2 mb-2">            



                <img
                  src={p.author_avatar_url ?? "/default-avatar.png"}
                  className="w-8 h-8 rounded-full object-cover cursor-pointer"
                  alt=""
                />
                <div className="font-medium text-black cursor-pointer">
                  {p.author_name ?? "User"}
                </div>
                <div className="ml-auto text-sm text-black opacity-60">
                  {new Date(p.created_at).toLocaleString()}
                </div>
              </div>

              {/* Content */}
              <p className="mb-2 text-black">{p.content}</p>

              {/* Like + Comment button */}
              <div className="flex items-center gap-4 text-sm text-black">
                <button
                  onClick={async () => {
                    await toggleLikePost(p.id);
                    setPosts(await listPosts());
                  }}
                  className="cursor-pointer"
                >
                  {p.has_liked ? "♥ Unlike" : "♡ Like"} · {p.like_count}
                </button>

                <button onClick={() => toggleComments(p.id)} className="cursor-pointer">
                  💬 Comments: {p.comment_count}
                </button>
              </div>

              {/* Comments section */}
              {openComments[p.id] && (
                <div className="mt-3 pl-6 space-y-2">
                  {/* List comments */}
                  {comments[p.id]?.map((c) => (
                    <div key={c.id} className="flex gap-2 text-sm text-black">
                      <img
                        src={c.author_avatar_url ?? "/default-avatar.png"}
                        className="w-6 h-6 rounded-full object-cover cursor-pointer"
                        alt=""
                      />
                      <div>
                        <span className="font-medium cursor-pointer">{c.author_name}</span>:{" "}
                        {c.content}
                      </div>
                    </div>
                  ))}

                  {/* Add comment */}
                  <div className="flex gap-2 mt-2">
                    <input
                      className="flex-1 border rounded p-1 text-black"
                      placeholder="Write a comment..."
                      value={commentText[p.id] ?? ""}
                      onChange={(e) =>
                        setCommentText((prev) => ({
                          ...prev,
                          [p.id]: e.target.value,
                        }))
                      }
                    />
                    <button
                      onClick={() => submitComment(p.id)}
                      className="px-2 bg-blue-500 text-white rounded cursor-pointer"
                    >
                      Send
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
