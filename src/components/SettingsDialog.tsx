"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  const [dataRetention, setDataRetention] = useState(true);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader className='flex flex-row items-center justify-between border-b pb-2'>
          <DialogTitle className='text-xl'>Settings</DialogTitle>
          {/* <Button
            variant='ghost'
            size='icon'
            onClick={() => onOpenChange(false)}
          >
            <X className='h-4 w-4' />
            <span className='sr-only'>Close</span>
          </Button> */}
        </DialogHeader>
        <div className='space-y-6 py-4'>
          <div className='flex items-center justify-between'>
            <label htmlFor='language' className='text-sm font-medium'>
              Display Language
            </label>
            <Select defaultValue='english'>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select language' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='english'>English (English)</SelectItem>
                <SelectItem value='spanish'>Spanish (Español)</SelectItem>
                <SelectItem value='french'>French (Français)</SelectItem>
                <SelectItem value='german'>German (Deutsch)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='h-px bg-gray-200' />

          <div className='flex items-center justify-between'>
            <label htmlFor='data-retention' className='text-sm font-medium'>
              All Data Retention
            </label>
            <Switch
              id='data-retention'
              checked={dataRetention}
              onCheckedChange={setDataRetention}
              className='data-[state=checked]:bg-orange-500'
            />
          </div>

          <p className='text-sm text-gray-600'>
            I&apos;d be happy to create your presentation, but I still need some
            basic information to make it relevant. Could you please tell me at
            least what industry your company is in and a brief description of
            your company&apos;s vision or sales focus? This would help me create
            a more tailored and effective presentation for you.
          </p>

          <Button
            variant='ghost'
            className='h-auto p-0 text-sm font-normal text-red-600 hover:bg-transparent hover:text-red-800'
          >
            Delete User
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
