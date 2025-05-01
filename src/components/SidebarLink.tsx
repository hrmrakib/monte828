"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  text: string;
  active: boolean;
  onClick: () => void;
  showText: boolean;
}

export default function SidebarLink({
  href,
  icon: Icon,
  text,
  active,
  onClick,
  showText,
}: SidebarLinkProps) {
  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 rounded-full ${
        active
          ? "bg-orange-500 text-white"
          : "text-slate-700 hover:bg-slate-100"
      }`}
      onClick={onClick}
    >
      <Icon size={20} className={showText ? "mr-3" : ""} />
      {showText && <span>{text}</span>}
    </Link>
  );
}
