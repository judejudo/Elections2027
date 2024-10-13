import React from "react";
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
  return (
<div className="space-y-1">
  <Route Icon={FiHome} selected={true} title="Dashboard" />
  <Route Icon={FiMap} selected={false} title="Provinces" />
  <Route Icon={FiMapPin} selected={false} title="Counties" />
  <Route Icon={FiTarget} selected={false} title="Constituencies" />
  <Route Icon={FiFlag} selected={false} title="Wards" />
  <Route Icon={FiAward} selected={false} title="Position" />
  <Route Icon={FiUsers} selected={false} title="Candidates" />
  <Route Icon={FiBriefcase} selected={false} title="Parties" />
  <Route Icon={FiCpu} selected={false} title="Bots" />
  <Route Icon={FiBook} selected={false} title="Subjects" />
  <Route Icon={FiTag} selected={false} title="Categories" />
  <Route Icon={FiFileText} selected={false} title="Content Types" />
  <Route Icon={FiFileText} selected={false} title="Content" />
  <Route Icon={FiMessageSquare} selected={false} title="User Messages" />
  <Route Icon={FiCreditCard} selected={false} title="Accounts" />
  <Route Icon={FiBarChart2} selected={false} title="Analytics" />
</div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
}) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </button>
  );
};
