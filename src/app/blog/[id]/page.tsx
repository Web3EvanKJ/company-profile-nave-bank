"use client";

import { useParams } from "next/navigation";
import useBlogStore, { BlogPost } from "@/store/blogStore";
import { BlogFormDialog } from "@/components/BlogFromDialog";
import useAuthStore from "@/store/authStore";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

export default function BlogDetailPage() {
  const { id } = useParams();
  const { posts, deletePost } = useBlogStore();
  const { user } = useAuthStore();

  const post = posts.find((p: BlogPost) => p.id === Number(id));

  if (!post)
    return (
      <p className="text-center py-20 text-gray-500 text-lg">Post not found</p>
    );

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Blog Header */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-4 leading-snug">
        {post.title}
      </h1>

      <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
        <span className="flex items-center gap-1">
          <User size={16} /> {post.author}
        </span>
        <span className="flex items-center gap-1">
          <Calendar size={16} /> {post.date}
        </span>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="relative w-full sm:h-[200px] sm:mb-10 md:h-[500px] md:mb-20">
          <Image
            src={post?.image}
            alt={post.title}
            width={300}
            height={200}
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
        </div>
      )}
      {/* Blog Content */}
      <article className="leading-relaxed text-gray-800">{post.body}</article>

      {/* Admin Controls */}
      {user?.role === "admin" && (
        <div className="flex gap-3 mt-10">
          <BlogFormDialog mode="edit" post={post} />
          <Button
            variant="destructive"
            size="sm"
            className="shadow-md hover:scale-105 transition"
            onClick={() => deletePost(post.id)}
          >
            Delete Post
          </Button>
        </div>
      )}
    </div>
  );
}
