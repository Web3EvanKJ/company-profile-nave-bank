"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuthStore from "@/store/authStore";

export default function LoginPage() {
  const { login } = useAuthStore();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
    router.push("/blog");
  };

  return (
    <div className="p-10 max-w-md min-h-screen mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white w-full"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
