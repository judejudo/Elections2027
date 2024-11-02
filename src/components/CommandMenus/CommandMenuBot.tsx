"use client";
import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiEye, FiCheck, FiChevronDown, FiEdit, FiLink, FiLogOut, FiPhone, FiPlus } from "react-icons/fi";

export const CommandMenuBot = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState("");
  const [username, setUsername] = useState("");
  const [bot, setBot] = useState("");
  const [status, setStatus] = useState("");
  const [channel, setChannel] = useState("");
  const [language, setLanguage] = useState("");
  const handleSave = () => {
    // Perform your save logic here.
    console.log({
      username,
      bot,
      status,
      channel,
      language,
    });
  };


  return open ? (
    <div className="fixed inset-0 bg-stone-950/50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-stone-400"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Edit Bot Details</h3>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Username */}
          <div className="flex flex-col">
            <label className="text-sm text-stone-600">Bot Name</label>
            <div className="flex items-center border p-2 rounded">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 focus:outline-none"
              />
              <FiCheck className="text-violet-500 ml-2" />
            </div>
          </div>

          {/* Bot Name */}
          <div className="flex flex-col">
            <label className="text-sm text-stone-600">Candidate Name</label>
            <div className="flex items-center border p-2 rounded">
              <input
                type="text"
                value={bot}
                onChange={(e) => setBot(e.target.value)}
                className="flex-1 focus:outline-none"
              />
              <FiEdit className="text-stone-400 ml-2" />
            </div>
          </div>
          <div className="mb-6">
          <h3 className="text-lg font-semibold">Select Bot Webhooks</h3>
        </div>
         
          {/* Channel */}
          <div className="flex flex-col">
            <button  className="text-sm text-stone-600">Channel</button>
            <div className="flex items-center border p-2 rounded">
              <select
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                className="flex-1 focus:outline-none appearance-none"
              >
                <div className= "p-5"></div>
                <option value="webhook1">webhook1</option>
                <option value="webhook2">webhook2</option>
                <option value="webwook3">Webhook3</option>
              </select>
              <FiChevronDown className="ml-2 text-stone-400" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between mt-6">
          <button
            className="text-red-500 border border-red-500 px-4 py-2 rounded"
            onClick={() => console.log("Delete user")}
          >
            Delete Bot
          </button>
          <div className="flex gap-2">
            <button
              className="border border-stone-400 px-4 py-2 rounded"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              className="bg-violet-500 text-white px-4 py-2 rounded"
              onClick={handleSave}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};