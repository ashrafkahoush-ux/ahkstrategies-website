"use client";

import { useRouter } from "next/navigation";

type BackButtonProps = {
  label?: string;
};

export default function BackButton({ label = "BACK" }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        px-6 py-2 rounded-md
        bg-[#F5C623] text-[#06132A]
        font-semibold tracking-wide
        shadow-[0_0_25px_rgba(245,198,35,0.7)]
        hover:shadow-[0_0_35px_rgba(245,198,35,1)]
        border border-[#f5e089]
        transition-transform duration-200
        hover:-translate-y-0.5
      "
    >
      ← {label}
    </button>
  );
}
