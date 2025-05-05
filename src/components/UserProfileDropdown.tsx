"use client";

import { useState } from "react";
import type * as React from "react";
import Link from "next/link";
import { Bookmark, LogOut, Settings, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { SettingsDialog } from "./SettingsDialog";

interface UserProfileDropdownProps {
  trigger: React.ReactNode;
}

export function UserProfileDropdown({ trigger }: UserProfileDropdownProps) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
        <DropdownMenuContent className='w-64' align='end' sideOffset={5}>
          <div className='flex items-center gap-3 p-3'>
            <Avatar className='h-10 w-10'>
              <AvatarImage
                src='/placeholder.svg?height=40&width=40'
                alt='User'
              />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            <div className='flex flex-1 flex-col'>
              <div className='flex items-center gap-1'>
                <span className='text-sm font-medium'>Arjun Mazumder</span>
                <button className='text-muted-foreground hover:text-foreground'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='12'
                    height='12'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M12 20h9' />
                    <path d='M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z' />
                  </svg>
                </button>
              </div>
              <span className='text-xs text-muted-foreground'>
                arjun01@gmail.com
              </span>
            </div>
          </div>
          <DropdownMenuSeparator />
          <div className='p-2'>
            <Button
              variant='outline'
              className='w-full justify-between bg-[#F99F04] text-[#FAFAFA] hover:bg-[#f99f04c7] rounded-full'
            >
              <span className='px-2'>Upgrade Plan</span>
              <ExternalLink className='ml-2 h-4 w-4' />
            </Button>
          </div>
          <div className='p-2'>
            <div className='bg-[#F99F04] text-[#FAFAFA] hover:bg-[#f99f04c7] rounded-full px-3 py-2'>
              <span className='text-sm font-medium text-[#FAFAFA]'>
                Credits: 0
              </span>
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link
              href='/bookmarks'
              className='flex cursor-pointer items-center gap-2'
            >
              <Bookmark className='h-4 w-4 text-teal-700' />
              <span>Bookmark</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setSettingsOpen(true);
            }}
          >
            <div className='flex cursor-pointer items-center gap-2'>
              <Settings className='h-4 w-4 text-teal-700' />
              <span>Settings</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href='/sign-out'
              className='flex cursor-pointer items-center gap-2'
            >
              <LogOut className='h-4 w-4 text-teal-700' />
              <span>Sign Out</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} />
    </>
  );
}
