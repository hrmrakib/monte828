"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  content: string;
  sender: "user" | "ai";
  options?: string[];
  showCopyButton?: boolean;
  showCreateButton?: boolean;
  showPresentationTool?: boolean;
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "I want to make",
      sender: "user",
    },
    {
      id: "2",
      content:
        "I am a sales executive I need a presentation for my company vision and sales, make a magazine with relevant image and data",
      sender: "user",
    },
    {
      id: "3",
      content:
        "I'd be happy to help you create a presentation for your company vision and sales, to make this presentation visually appealing with relevant images and data. I'll need to use a tool that can generate slides, however, creating a presentation will take some time and credits. would you like me to proceed with creating this presentation for you? also, to make the presentation more tailored to your needs, could you provide a bit more information about:\n1. what industry your company is in\n2. any specific aspects of your vision you want to highlight\n3. any key sales metrics or goals you'd like to include\nthis information will help me create a more relevant and effective presentation for you.",
      sender: "ai",
      showCopyButton: true,
      showCreateButton: true,
    },
    {
      id: "4",
      content:
        "I'll create a general sales executive presentation for you that focuses on company vision and sales strategy. since you haven't provided specific details about your industry or company, I'll design a versatile presentation that you can later customize with your specific information. this process will take several minutes and will use credits. I'll proceed with creating this presentation now.",
      sender: "ai",
      showPresentationTool: true,
    },
    {
      id: "5",
      content:
        "I'll create a general sales executive presentation for you that focuses on company vision and sales strategy. since you haven't provided specific details about your industry or company.",
      sender: "ai",
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [showUpdatePrompt, setShowUpdatePrompt] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I'll update the presentation based on your input. Let me work on that for you.",
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleCreatePresentation = () => {
    setShowUpdatePrompt(true);
  };

  return (
    <div className='flex flex-col h-full border-4 border-blue-500'>
      <div className='flex-1 overflow-y-auto p-4 space-y-4'>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                message.sender === "user"
                  ? "bg-gray-200 text-gray-800"
                  : "bg-white border border-gray-200 text-gray-800"
              }`}
            >
              <p className='whitespace-pre-line'>{message.content}</p>

              {message.showCopyButton && (
                <div className='mt-2'>
                  <button className='inline-flex items-center gap-1 text-gray-500 border border-gray-300 rounded-md px-2 py-1 text-xs'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <rect
                        x='9'
                        y='9'
                        width='13'
                        height='13'
                        rx='2'
                        ry='2'
                      ></rect>
                      <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
                    </svg>
                    copy
                  </button>
                </div>
              )}

              {message.showCreateButton && (
                <div className='mt-4'>
                  <button
                    onClick={handleCreatePresentation}
                    className='bg-gray-800 text-white rounded-md px-4 py-2 text-sm'
                  >
                    create my presentation
                  </button>
                </div>
              )}

              {message.showPresentationTool && (
                <div className='mt-4 border border-gray-200 rounded-lg overflow-hidden'>
                  <div className='flex items-center gap-2 p-3 border-b border-gray-200'>
                    <div className='text-sm text-gray-600'>Using Tool</div>
                    <div className='flex items-center gap-1 bg-gray-100 rounded-md px-2 py-1 text-sm'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      >
                        <rect
                          x='2'
                          y='3'
                          width='20'
                          height='14'
                          rx='2'
                          ry='2'
                        ></rect>
                        <line x1='8' y1='21' x2='16' y2='21'></line>
                        <line x1='12' y1='17' x2='12' y2='21'></line>
                      </svg>
                      Presentation
                    </div>
                    <div className='text-sm text-gray-600'>With 5 Slides</div>
                    <div className='ml-auto'>
                      <button className='bg-yellow-500 text-white rounded-md px-3 py-1 text-sm'>
                        Next
                      </button>
                    </div>
                  </div>

                  <div className='p-4 bg-gray-800 text-white'>
                    <div className='flex items-center gap-3'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <rect
                            x='2'
                            y='3'
                            width='20'
                            height='14'
                            rx='2'
                            ry='2'
                          ></rect>
                          <line x1='8' y1='21' x2='16' y2='21'></line>
                          <line x1='12' y1='17' x2='12' y2='21'></line>
                        </svg>
                      </div>
                      <div>
                        <div className='text-sm font-medium'>
                          Sales Executive Vision & Strategy
                        </div>
                        <div className='text-xs'>Presentation</div>
                      </div>
                      <div className='ml-auto'>
                        <button className='flex items-center gap-1 border border-gray-600 rounded-md px-3 py-1 text-sm'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
                            <polyline points='7 10 12 15 17 10'></polyline>
                            <line x1='12' y1='15' x2='12' y2='3'></line>
                          </svg>
                          Export
                        </button>
                      </div>
                    </div>

                    <div className='mt-3 text-xs text-gray-400 text-center'>
                      Click To Open
                    </div>

                    <div className='mt-4'>
                      <button className='bg-yellow-500 text-white rounded-full px-4 py-2 text-sm flex items-center gap-2'>
                        Edit All Slides
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <polyline points='9 18 15 12 9 6'></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {showUpdatePrompt && (
          <div className='border border-gray-200 rounded-xl p-4 mx-auto max-w-md'>
            <p className='text-center text-gray-800'>
              Please Continue The Presentation Update Now
            </p>
            <div className='flex justify-center gap-4 mt-4'>
              <button className='text-blue-500 p-2 rounded-full hover:bg-gray-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
                  <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
                </svg>
              </button>
              <button className='text-blue-500 p-2 rounded-full hover:bg-gray-100'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M1 4v6h6'></path>
                  <path d='M3.51 15a9 9 0 1 0 2.13-9.36L1 10'></path>
                </svg>
              </button>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className='border-t border-gray-200 p-4'>
        <form onSubmit={handleSendMessage} className='flex gap-2'>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Type your message...'
            className='flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            type='submit'
            className='bg-blue-500 text-white rounded-full p-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <line x1='22' y1='2' x2='11' y2='13'></line>
              <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
