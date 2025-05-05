"use client";

import { useState, type FormEvent } from "react";
import { Paperclip, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSend: (message: string) => void;
  placeholder?: string;
}

export function ChatInput({
  onSend,
  placeholder = "How Can I Help You...",
}: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='relative'>
      <div className='flex items-end rounded-lg border bg-white p-2'>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className='min-h-[60px] flex-1 resize-none border-0 bg-transparent p-2 focus-visible:ring-0'
        />
        <div className='flex items-center gap-2 self-end'>
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='h-8 w-8 rounded-full'
          >
            <Paperclip className='h-5 w-5 text-gray-500' />
            <span className='sr-only'>Attach file</span>
          </Button>
          <Button
            type='button'
            variant='ghost'
            size='icon'
            className='h-8 w-8 rounded-full'
          >
            <RotateCcw className='h-5 w-5 text-gray-500' />
            <span className='sr-only'>Reset</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
