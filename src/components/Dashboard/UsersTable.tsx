"use client";

import React, { useState } from "react";
import { FiArrowUpRight, FiUser, FiMoreHorizontal } from "react-icons/fi";
import { Search } from "../Sidebar/Search";
import { FiEdit, FiTrash } from 'react-icons/fi'; // FontAwesome icons
import { CommandMenu } from "./CommandMenu";

// Dummy data simulating users fetched from a database
const usersData = [
  { name: "Jude Ang'edu", bot: "ODMPartyBot", language: "English", channel: "WhatsApp", status: "Active", order: 1 },
  { name: "John Doe", bot: "ANCPartyBot", language: "Swahili", channel: "Telegram", status: "Inactive", order: 2 },
  { name: "Sarah Wanjiku", bot: "JubileePartyBot", language: "English", channel: "WhatsApp", status: "Active", order: 3 },
  { name: "Peter Otieno", bot: "ODMPartyBot", language: "Swahili", channel: "Telegram", status: "Active", order: 4 },
  { name: "Alex Mwangi", bot: "ANCPartyBot", language: "English", channel: "WhatsApp", status: "Active", order: 5 },
  { name: "Fatuma Hassan", bot: "JubileePartyBot", language: "Swahili", channel: "Telegram", status: "Active", order: 6 }
];

export const UsersTable = () => {

  

  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex items-center justify-between">
        <div className="space-y-4">
          <h3 className="flex items-center gap-1.5 font-bold">
            <FiUser /> Users Management
          </h3>
          <p className="flex items-center gap-1.5 font-light">
            Manage your users and their accounts permissions here.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="font-medium text-black">
            All users {usersData.length}
          </div>
          <Search />
        </div>
      </div>
      <table className="w-full table-auto">
        <TableHead />

        <tbody>
          {/* Use .map() to loop through the usersData array and create TableRow for each user */}
          {usersData.map((user, index) => (
            <TableRow
              key={index}
              name={user.name}
              bot={user.bot}
              language={user.language}
              channel={user.channel}
              status={user.status}
              order={user.order}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">User name</th>
        <th className="text-start p-1.5">Bot</th>
        <th className="text-start p-1.5">Language</th>
        <th className="text-start p-1.5">Channel</th>
        <th className="text-start p-1.5">Status</th>
        <th className="text-start p-1.5">Actions</th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  
  name,
  bot,
  language,
  channel,
  status,
  order,
}: {
  name: string;
  bot: string;
  language: string;
  channel: string;
  status: string;
  order: number;
}
) => {
  const [open, setOpen] = useState(false);
  return (
    <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
      <td className="p-1.5">{name}</td>
      <td className="p-1.5">{bot}</td>
      <td className="p-1.5">{language}</td>
      <td className="p-1.5">{channel}</td>
      <td className="p-1.5">{status}</td>
      <td className=" flex space-x-4">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8"
                onClick={(e) => { setOpen(true)}}>
          <FiEdit />
        </button>
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
          <FiTrash />
        </button>
      </td>
      <CommandMenu open={open} setOpen={setOpen} />
    </tr>
  );
};
