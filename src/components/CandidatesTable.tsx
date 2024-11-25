"use client"
import React, { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { Search } from "@/components/Sidebar/Search";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


interface TableProps {
    headers: string[];
    data: Array<{ [key: string]: any }>; // Array of objects where each key-value pair represents a column's data
    title: string;
    description: string;
    CommandMenu: React.FC<{ open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }>;
}

export const CandidatesTable: React.FC<TableProps> = ({ headers, data, title, description, CommandMenu }) => {
    return (
        <div className="col-span-12 p-4 m-4 rounded border border-stone-300">
            <div className="mb-4 flex items-center justify-between">
                <div className="space-y-4">
                    <h3 className="flex items-center gap-1.5 font-bold">{title}</h3>
                    <p className="flex items-center gap-1.5 font-light">{description}</p>
                </div>
                <div className="flex flex-col">
                    <div className="font-medium text-black">
                        All users {data ? data.length : 0}
                    </div>
                    <Search />
                </div>
            </div>

            <table className="w-full table-auto">
                <TableHead headers={headers} />
                <tbody>
                    {data.map((item, index) => (
                        <TableRow key={item.id} item={item} index={index} CommandMenu={CommandMenu} />
                    ))}
                </tbody>
            </table>

            <div className="ml-[600px]">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

const TableHead: React.FC<{ headers: string[] }> = ({ headers }) => (
    <thead>
        <tr className="text-sm font-normal text-stone-500">
            {headers.map((header, index) => (
                <th key={index} className="text-center p-1.5">
                    {header}
                </th>
            ))}
            <th className="text-center p-1.5">View Details</th>
        </tr>
    </thead>
);

interface TableRowProps {
    item: { [key: string]: any };
    index: number;
    CommandMenu: React.FC<{ open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }>;
}

const TableRow: React.FC<TableRowProps> = ({ item, index, CommandMenu }) => {
    const [open, setOpen] = useState(false);

    return (
        
        <tr className={index % 2 ? "bg-stone-300 text-sm text-center" : "text-sm text-center"}>
            <td>{item.id}</td>
            <td >
                <Avatar>
                    <AvatarImage src={item.photo} alt={item.name} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </td>
            <td>{item.name}</td>
            <td>{item.position}</td>
            <td>{item.politicalParty}</td>
            <td>{item.location}</td>
            <td>{item.status}</td>
            <td className="flex space-x-4 ">
                <button
                    className="hover:bg-stone-200 mx-auto transition-colors grid place-content-center rounded text-sm size-8"
                    onClick={() => setOpen(true)}
                >
                    <FiMoreHorizontal />
                </button>
                <CommandMenu open={open} setOpen={setOpen} />
            </td>
        </tr>
        
    );
};
