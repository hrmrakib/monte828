"use client";

import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PresentationCardProps {
  title: string;
  slideCount: number;
  onExport?: () => void;
  onEdit?: () => void;
}

export function PresentationCard({
  title,
  slideCount,
  onExport,
  onEdit,
}: PresentationCardProps) {
  return (
    <div className='flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm'>
      <div className='flex items-center gap-4 border-b p-4'>
        <div className='flex h-12 w-12 items-center justify-center rounded bg-teal-50'>
          <FileText className='h-6 w-6 text-teal-700' />
        </div>
        <div className='flex-1'>
          <h3 className='text-sm font-medium'>{title}</h3>
          <p className='text-xs text-gray-500'>Click To Open</p>
        </div>
      </div>
      <div className='flex items-center justify-between p-3'>
        <span className='text-xs text-gray-500'>With {slideCount} Slides</span>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='sm'
            className='h-7 text-xs'
            onClick={onEdit}
          >
            Edit All Slides
          </Button>
          <Button
            variant='outline'
            size='sm'
            className='h-7 text-xs'
            onClick={onExport}
          >
            Export
          </Button>
        </div>
      </div>
    </div>
  );
}
