// lib/community.ts
import { supabase } from "./supabaseClient";

/** Get current user or throw */
async function requireUser() {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) throw new Error("Not signed in");
  return data.user;
}

/* -------------------- POSTS -------------------- */

export async function createPost(content: string) {
  const user = await requireUser();
  const payload = {
    content,
    user_id: user.id,
    // optional "snapshot" of public info from metadata:
    author_name:
      user.user_metadata?.full_name ??
      user.user_metadata?.name ??
      user.email?.split("@")[0],
    author_avatar_url: user.user_metadata?.avatar_url ?? null,
  };

  const { data, error } = await supabase
    .from("posts")
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export type ListedPost = {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  author_name: string | null;
  author_avatar_url: string | null;
  like_count: number;
  comment_count: number;
  has_liked: boolean;
};

export async function listPosts(search?: string): Promise<ListedPost[]> {
  // 1) base list with aggregate counts
  let query = supabase
    .from("posts")
    .select(
      `
      id, content, created_at, user_id, author_name, author_avatar_url,
      likes:likes(count),
      comments:comments(count)
    `
    )
    .order("created_at", { ascending: false });

  if (search && search.trim()) {
    query = query.ilike("content", `%${search.trim()}%`);
  }

  const { data, error } = await query;
  if (error) throw error;

  const posts = (data ?? []).map((p: any) => ({
    id: p.id,
    content: p.content,
    created_at: p.created_at,
    user_id: p.user_id,
    author_name: p.author_name ?? null,
    author_avatar_url: p.author_avatar_url ?? null,
    like_count: p.likes?.[0]?.count ?? 0,
    comment_count: p.comments?.[0]?.count ?? 0,
    has_liked: false, // fill below
  }));

  // 2) mark which ones the current user liked
  const { data: userData } = await supabase.auth.getUser();
  const uid = userData?.user?.id;
  if (uid && posts.length) {
    const { data: myLikes } = await supabase
      .from("likes")
      .select("post_id")
      .eq("user_id", uid)
      .in(
        "post_id",
        posts.map((p) => p.id)
      );

    const likedSet = new Set((myLikes ?? []).map((r) => r.post_id));
    for (const p of posts) p.has_liked = likedSet.has(p.id);
  }

  return posts;
}

export async function toggleLikePost(postId: string) {
  const user = await requireUser();

  // already liked?
  const { data: existing } = await supabase
    .from("likes")
    .select("id")
    .eq("user_id", user.id)
    .eq("post_id", postId)
    .maybeSingle();

  if (existing) {
    const { error } = await supabase.from("likes").delete().eq("id", existing.id);
    if (error) throw error;
    return { liked: false };
  } else {
    const { error } = await supabase
      .from("likes")
      .insert({ user_id: user.id, post_id: postId });
    if (error) throw error;
    return { liked: true };
  }
}

/* -------------------- COMMENTS -------------------- */

export async function addComment(postId: string, content: string) {
  const user = await requireUser();
  const payload = {
    post_id: postId,
    content,
    user_id: user.id,
    author_name:
      user.user_metadata?.full_name ??
      user.user_metadata?.name ??
      user.email?.split("@")[0],
    author_avatar_url: user.user_metadata?.avatar_url ?? null,
  };

  const { data, error } = await supabase
    .from("comments")
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export type ListedComment = {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  author_name: string | null;
  author_avatar_url: string | null;
  like_count: number;
  has_liked: boolean;
};

export async function listComments(postId: string): Promise<ListedComment[]> {
  // latest first (change ascending: true if you want oldest first)
  const { data, error } = await supabase
    .from("comments")
    .select(
      `
      id, content, created_at, user_id, author_name, author_avatar_url,
      likes:likes(count)
    `
    )
    .eq("post_id", postId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  const comments = (data ?? []).map((c: any) => ({
    id: c.id,
    content: c.content,
    created_at: c.created_at,
    user_id: c.user_id,
    author_name: c.author_name ?? null,
    author_avatar_url: c.author_avatar_url ?? null,
    like_count: c.likes?.[0]?.count ?? 0,
    has_liked: false,
  }));

  const { data: userData } = await supabase.auth.getUser();
  const uid = userData?.user?.id;
  if (uid && comments.length) {
    const { data: myLikes } = await supabase
      .from("likes")
      .select("comment_id")
      .eq("user_id", uid)
      .in(
        "comment_id",
        comments.map((c) => c.id)
      );
    const likedSet = new Set((myLikes ?? []).map((r) => r.comment_id));
    for (const c of comments) c.has_liked = likedSet.has(c.id);
  }

  return comments;
}

export async function toggleLikeComment(commentId: string) {
  const user = await requireUser();

  const { data: existing } = await supabase
    .from("likes")
    .select("id")
    .eq("user_id", user.id)
    .eq("comment_id", commentId)
    .maybeSingle();

  if (existing) {
    const { error } = await supabase.from("likes").delete().eq("id", existing.id);
    if (error) throw error;
    return { liked: false };
  } else {
    const { error } = await supabase
      .from("likes")
      .insert({ user_id: user.id, comment_id: commentId });
    if (error) throw error;
    return { liked: true };
  }
}
