"use client"
import React from "react";
import { ReusableTable } from "@/components/reusableTable";
import { TopBar } from "@/components/Dashboard/TopBar";
import  {CommandMenuBot}  from "@/components/CommandMenus/CommandMenuBot";

const BotsPage = () => {
  const headers = ['Bot Name', 'Candidate Name', 'Constituency', 'Users','Channel', 'Details'];
  const data = [
    { bot: "ODMPartyBot", candidate_name: "Jude Ang'edu" , constituency: "Teso ", users: 30000, channel: "WhatsApp", status: "Active" },
    { bot: "ANCPartyBot", candidate_name: "John Doe" , constituency: "Samburu", users: 0, channel: "Telegram", status: "Inactive" },
    // Add more data as needed
  ];
  return (

    <div className="bg-white rounded-lg pb-4 shadow">
      <TopBar/>
      <ReusableTable 
        headers={headers}
        data={data}
        title="Bot management"
        description="Manage your bots"
        CommandMenu={CommandMenuBot} />
        
    </div>
  );
};

export default BotsPage;