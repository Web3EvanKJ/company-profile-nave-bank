"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  picture: string;
}

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const res = await fetch("https://randomuser.me/api/?results=6"); // fetch 6 random people
      const data = await res.json();

      const roles = [
        "Software Engineer",
        "Product Manager",
        "UI/UX Designer",
        "Marketing Specialist",
        "Data Analyst",
        "DevOps Engineer",
      ];

      const bios = [
        "Passionate about building scalable software and improving performance.",
        "Loves working with people and turning ideas into real products.",
        "Designs user-friendly experiences that make technology feel human.",
        "Focuses on branding, campaigns, and growth strategies.",
        "Enjoys making sense of complex data and finding insights.",
        "Ensures smooth deployment pipelines and system reliability.",
      ];

      const members = data.results.map((person: any, i: number) => ({
        name: `${person.name.first} ${person.name.last}`,
        role: roles[i % roles.length],
        bio: bios[i % bios.length],
        picture: person.picture.large,
      }));

      setTeam(members);
    };

    fetchTeam();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-gray-600 mb-12">
          The people who drive our company forward with their expertise and
          passion.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <Image
                src={member.picture}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-red-600 font-medium mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
