"use client";

import React, { useState } from "react";
import { FiCommand, FiSearch } from "react-icons/fi";
import { CommandMenu } from "../Dashboard/CommandMenu";

export const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-stone-200 mt-2 relative rounded flex items-center px-2 py-1.5 text-sm">
        <FiSearch className="mr-2" />
        <input
          onClick={(e) => {
            setOpen(true);
          }}
          type="text"
          placeholder="Search"
          className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
        />

      </div>
    </>
  );
};
