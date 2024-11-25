"use client";
import { CommandMenu } from "@/components/CommandMenus/CommandMenuDashboard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";

export default function Page() {
  const [open, setOpen] = useState(false);

  const data = [
    {
      candidateName: "Jane Doe",
      position: "MP",
      category: "Plan",
      title: "Water Supply Initiative",
      region: "Nairobi North",
      uploadedOn: "15th November, 2024",
    },
    {
      candidateName: "Mark Smith",
      position: "Governor",
      category: "Achievement",
      title: "Improved Healthcare Access",
      region: "Mombasa County",
      uploadedOn: "10th October, 2024",
    },
    {
      candidateName: "Emily Brown",
      position: "MCA",
      category: "Promise",
      title: "Road Expansion in East Ward",
      region: "Kisumu East",
      uploadedOn: "1st November, 2024",
    },
    {
      candidateName: "John Doe",
      position: "President",
      category: "Plan",
      title: "National Infrastructure Overhaul",
      region: "Countrywide",
      uploadedOn: "5th November, 2024",
    },
    {
      candidateName: "Alice Green",
      position: "Senator",
      category: "Achievement",
      title: "University Scholarship Program",
      region: "Kiambu County",
      uploadedOn: "8th November, 2024",
    },
  ];

  return (
    <div className="p-4">
      <Table className="w-full border-collapse border border-gray-200">
        <TableCaption>A list of content uploaded by candidates.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Candidate Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-center">Title</TableHead>
            <TableHead className="text-center">Region</TableHead>
            <TableHead className="text-center">Uploaded On</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{row.candidateName}</TableCell>
              <TableCell>{row.position}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell className="text-left">{row.title}</TableCell>
              <TableCell className="text-left">{row.region}</TableCell>
              <TableCell className="text-left">{row.uploadedOn}</TableCell>
              <TableCell className="text-left">
                <button
                  className="hover:bg-stone-200 mx-auto transition-colors grid place-content-center rounded text-sm size-8"
                  onClick={() => setOpen((prev) => !prev)}
                  aria-label="More actions"
                  title="More actions"
                >
                  <FiMoreHorizontal />
                </button>
                {open && <CommandMenu open={open} setOpen={setOpen} />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
