"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface MessageProps {
  content: ReactNode;
  isUser?: boolean;
  showCopy?: boolean;
  avatar?: string;
  timestamp?: string;
}

export function Message({
  content,
  isUser = false,
  showCopy = false,
  avatar,
  timestamp,
}: MessageProps) {
  const copyToClipboard = () => {
    if (typeof content === "string") {
      navigator.clipboard.writeText(content);
    }
  };

  return (
    <div
      className={cn(
        "mb-4 flex w-full",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "flex max-w-[80%] gap-3",
          isUser ? "flex-row-reverse" : "flex-row"
        )}
      >
        {!isUser && (
          <Avatar className='h-8 w-8 shrink-0'>
            <AvatarImage
              src={avatar || "/placeholder.svg?height=32&width=32"}
              alt='AI'
            />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        )}
        <div
          className={cn(
            "relative rounded-lg p-4",
            isUser
              ? "bg-gray-100 text-gray-900"
              : "bg-white text-gray-900 shadow-sm"
          )}
        >
          <div className='prose prose-sm max-w-none'>{content}</div>
          {showCopy && (
            <div className='mt-2 flex justify-end'>
              <Button
                variant='ghost'
                size='sm'
                onClick={copyToClipboard}
                className='h-8 gap-1 text-xs text-gray-500'
              >
                <Copy className='h-3 w-3' />
                copy
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
