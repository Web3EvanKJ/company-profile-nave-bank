"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useBlogStore, { BlogPost } from "@/store/blogStore";
import useAuthStore from "@/store/authStore";

type BlogFormDialogProps = {
  mode: "add" | "edit";
  post?: BlogPost;
};

export function BlogFormDialog({ mode, post }: BlogFormDialogProps) {
  const { addPost, editPost } = useBlogStore();
  const { user } = useAuthStore();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (mode === "edit" && post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [mode, post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    if (mode === "add") {
      addPost({
        title,
        body,
        author: user.username,
        date: new Date().toLocaleDateString(),
      });
    } else if (mode === "edit" && post) {
      editPost(post.id, { title, body });
    }

    setTitle("");
    setBody("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {mode === "add" ? (
          <Button>+ Add Blog</Button>
        ) : (
          <Button variant="outline" size="sm">
            Edit
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Create Blog Post" : "Edit Blog Post"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <Input
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Textarea
            placeholder="Blog Content..."
            rows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">
            {mode === "add" ? "Publish" : "Update"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
