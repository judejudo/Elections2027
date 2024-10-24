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
    // Perform your save logic here, e.g., send the data to an API or update state
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
          <h3 className="text-lg font-semibold">Edit User Details</h3>
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

          {/* Status */}
          <div className="flex flex-col">
            <label className="text-sm text-stone-600">Constituency</label>
            <div className="flex items-center border p-2 rounded">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="flex-1 focus:outline-none appearance-none"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>
              <FiChevronDown className="ml-2 text-stone-400" />
            </div>
          </div>

          {/* Channel */}
          <div className="flex flex-col">
            <label className="text-sm text-stone-600">Channel</label>
            <div className="flex items-center border p-2 rounded">
              <select
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                className="flex-1 focus:outline-none appearance-none"
              >
                <option value="General">General</option>
                <option value="Support">Support</option>
                <option value="Marketing">Marketing</option>
              </select>
              <FiChevronDown className="ml-2 text-stone-400" />
            </div>
          </div>

          {/* Language */}
          <div className="flex flex-col">
            <label className="text-sm text-stone-600">Language</label>
            <div className="flex items-center border p-2 rounded">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="flex-1 focus:outline-none appearance-none"
              >
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
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
            Delete user
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