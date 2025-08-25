"use client";
import useBlogStore from "@/store/blogStore";
import useAuthStore from "@/store/authStore";
import { BlogFormDialog } from "@/components/BlogFromDialog";
import Link from "next/link";
import Image from "next/image";

const BlogPreview = () => {
  const { posts } = useBlogStore();
  const { user } = useAuthStore();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        {user && <BlogFormDialog mode="add" />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <div
              key={post.id}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              {post.image && (
                <Image
                  src={post?.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg mb-6 w-full h-48 object-cover"
                />
              )}
              <h2 className="text-2xl font-semibold text-red-600">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-2 line-clamp-4">{post.body}</p>
              <p className="text-sm text-gray-400 mt-2">
                By {post.author} on {post.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default BlogPreview;
