"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { RandomUserResponse, RandomUser } from "@/types/randomUser";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  picture: string;
}

const FetchTeam = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const res = await fetch("https://randomuser.me/api/?results=6"); // fetch 6 random people
      const data: RandomUserResponse = await res.json();

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

      const members = data.results.map((person: RandomUser, i: number) => ({
        name: `${person.name.first} ${person.name.last}`,
        role: roles[i],
        bio: bios[i],
        picture: person.picture.large,
      }));

      setTeam(members);
    };

    fetchTeam();
  }, []);

  return (
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
          <p className="text-sm text-red-600 font-medium mb-2">{member.role}</p>
          <p className="text-gray-600 text-sm">{member.bio}</p>
        </div>
      ))}
    </div>
  );
};
export default FetchTeam;
