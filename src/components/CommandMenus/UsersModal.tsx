"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function UsersModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return open ? (
    <div className="inset-0 fixed flex z-50 justify-center bg-stone-800/50 items-center">
      <div className="bg-white flex-col rounded-sm shadow-lg w-full max-w-lg p-1 relative overflow-y-auto h-[600px]">
        <div className="bg-gray-200  ">
          <div className="flex-col">
            <Avatar className=" w-24 h-24  right-48 top-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="relative right-44 top-12 font-bold text-xl ">
          Jude Ang'edu
        </div>
        <div className="relative right-44 top-12 text-gray-500 font-light">
          ocomilj@gmail.com
        </div>
        <div className="relative top-20 right-[120px] font-bold text-xl ">Add Content here</div>
        <Tabs defaultValue="" className="mt-20">
          <TabsList className="relative bottom-[70px] left-40">
            <TabsTrigger value="english">English</TabsTrigger>
            <TabsTrigger value="swahili">Swahili</TabsTrigger>
          </TabsList>
          <TabsContent value="english">
          <div className="relative bottom-6 right-20 text-lg font-semibold">Please upload your text in English</div>
            <div className="flex justify-around">
              <div>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Content Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-5 flex justify-around">
              <div>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="County" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="constituency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Ward" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex p-2">
              <div className="p-2">Title</div>
              <Input className="w-[500px] ml-8" />
            </div>
            <div className="flex p-2">
              <div className="p-2">Message</div>
              <Textarea className="w-[500px]" />
            </div>
          </TabsContent>
          <TabsContent value="swahili">
          <div className="relative bottom-6 right-20 text-lg font-semibold">Please upload your text in Swahili</div>
          <div className="flex justify-around">
              <div>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Content Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="mt-5 flex justify-around">
              <div>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="County" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="constituency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Ward" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex p-2">
              <div className="p-2">Title</div>
              <Input className="w-[500px] ml-8" />
            </div>
            <div className="flex p-2">
              <div className="p-2">Message</div>
              <Textarea className="w-[500px]" />
            </div>
          </TabsContent>
          <div className="items-center m-5">
          <div className="flex-col ">
            <div className=" ">Upload photo with caption if any</div>
            <input  type="file" className="m-5" />
            <Input className="w-" />
          </div>
          <div className="flex-col ">
            <div className=" ">Upload a Video with caption if any</div>
            <input  type="file" className="m-5" />
            <Input className="w-" />
          </div>
          <div className="flex-col ">
            <div className=" ">Upload document with caption if any</div>
            <input  type="file" className="m-5" />
            <Input className="w-" />
          </div>
          <div className="flex-col pt-5">
            <div className=" ">Upload a link to your youtube video with caption if any</div>
            <Input className="m-1" />
          </div>

        </div>
        </Tabs>


        <div className=" justify-around p-5 flex">
          {" "}
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="outline" className="" onClick={() => setOpen(false)}>
            update
          </Button>
        </div>

        <div className="bg-yellow-500"></div>
      </div>
    </div>
  ) : null;
}

export default UsersModal;
