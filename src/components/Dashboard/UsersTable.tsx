"use client";

import React, { useState } from "react";
import { FiArrowUpRight, FiUser, FiMoreHorizontal, FiMoreVertical } from "react-icons/fi";
import { Search } from "../Sidebar/Search";
import { CommandMenu } from "../CommandMenus/CommandMenuDashboard";
import { ReusableTable } from "../reusableTable";
import { TopBar } from "./TopBar";

// Dummy data simulating users fetched from a database
const headers = ['User Name','Bot','Language','Channel','Status',];
const data = [
  { name: "Jude Ang'edu", bot: "ODMPartyBot", language: "English", channel: "WhatsApp", status: "Active", },
  { name: "John Doe", bot: "ANCPartyBot", language: "Swahili", channel: "Telegram", status: "Inactive", },
  { name: "Sarah Wanjiku", bot: "JubileePartyBot", language: "English", channel: "WhatsApp", status: "Active", },
  { name: "Peter Otieno", bot: "ODMPartyBot", language: "Swahili", channel: "Telegram", status: "Active", },
  { name: "Alex Mwangi", bot: "ANCPartyBot", language: "English", channel: "WhatsApp", status: "Active", },
  { name: "Fatuma Hassan", bot: "JubileePartyBot", language: "Swahili", channel: "Telegram", status: "Active", }
];

export const UsersTable = () => {

  return (
    <div className="bg-white rounded-lg pb-4 shadow ">
      <TopBar/>
      <ReusableTable 
        headers={headers}
        data={data}
        title="Users management"
        description="Manage your Users" 
        CommandMenu={CommandMenu}/>
    </div>
  );
};

{/* <td className=" flex space-x-4">
<button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8"
        onClick={(e) => { setOpen(true)}}>
  <FiMoreHorizontal />
</button>
// </td>cd
// <CommandMenu open={open} setOpen={setOpen} /> */}