"use client"
import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import useRouter hook
import { IconType } from "react-icons";
import { 
  FiHome, 
  FiMap, 
  FiMapPin, 
  FiTarget, 
  FiFlag, 
  FiAward, 
  FiUsers, 
  FiBriefcase, 
  FiCpu, 
  FiBook, 
  FiTag, 
  FiFileText, 
  FiMessageSquare, 
  FiCreditCard, 
  FiBarChart2 
} from "react-icons/fi";

export const RouteSelect = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <div className="space-y-1">
      <Route Icon={FiHome} selected={pathname === "/"} href="/" title="Dashboard" />
      <Route Icon={FiMap} selected={pathname === "/provinces"} href="#" title="Provinces" />
      <Route Icon={FiMapPin} selected={pathname === "/counties"} href="#" title="Counties" />
      <Route Icon={FiTarget} selected={pathname === "/constituencies"} href="#" title="Constituencies" />
      <Route Icon={FiFlag} selected={pathname === "/wards"} href="#" title="Wards" />
      <Route Icon={FiAward} selected={pathname === "/position"} href="#" title="Position" />
      <Route Icon={FiUsers} selected={pathname === "/candidates"} href="#" title="Candidates" />
      <Route Icon={FiBriefcase} selected={pathname === "/parties"} href="#" title="Parties" />
      <Route Icon={FiCpu} selected={pathname === "/bots"} href="/bots" title="Bots" />
      <Route Icon={FiBook} selected={pathname === "/subjects"} href="#" title="Subjects" />
      <Route Icon={FiTag} selected={pathname === "/categories"} href="#" title="Categories" />
      <Route Icon={FiFileText} selected={pathname === "/content-types"} href="#" title="Content Types" />
      <Route Icon={FiFileText} selected={pathname === "/content"} href="#" title="Content" />
      <Route Icon={FiMessageSquare} selected={pathname === "/user-messages"} href="#" title="User Messages" />
      <Route Icon={FiCreditCard} selected={pathname === "/accounts"} href="#" title="Accounts" />
      <Route Icon={FiBarChart2} selected={pathname === "/analytics"} href="#" title="Analytics" />
    </div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
  href,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
  href: string;
}) => {
  return (
   <Link href={href}>
    <button
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
          selected
            ? "bg-white text-stone-950 shadow"
            : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
        }`}
      >
        <Icon className={selected ? "text-green-500" : ""} />
        <span>{title}</span>
      </button>
   </Link> 
  );
};
