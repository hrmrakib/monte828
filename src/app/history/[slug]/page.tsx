"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <div className='max-w-6xl mx-auto py-12'>
      <div className='flex flex-col h-full'>
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

        <div className='relative w-[95%] mx-auto md:w-full min-h-[150px] rounded-lg p-2 border-2 border-[#6E7A8A] shadow-sm'>
          <div className='flex items-center gap-2'>
            <Input
              placeholder='How Can I Help You...'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className='flex-1 border-0 text-2xl  shadow-none focus-visible:ring-0 placeholder:text-[#20474E]'
            />
            <div className='absolute right-2 bottom-2'>
              <Button variant='ghost' size='icon'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.1725 6.99998L8.58651 13.586C8.39549 13.7705 8.24312 13.9912 8.13831 14.2352C8.03349 14.4792 7.97831 14.7416 7.97601 15.0072C7.9737 15.2727 8.0243 15.5361 8.12486 15.7819C8.22543 16.0277 8.37393 16.251 8.56172 16.4388C8.7495 16.6266 8.97281 16.7751 9.2186 16.8756C9.46439 16.9762 9.72775 17.0268 9.99331 17.0245C10.2589 17.0222 10.5213 16.967 10.7653 16.8622C11.0093 16.7574 11.23 16.605 11.4145 16.414L17.8285 9.82798C18.5571 9.07357 18.9603 8.06316 18.9512 7.01438C18.9421 5.96559 18.5214 4.96234 17.7798 4.22071C17.0381 3.47907 16.0349 3.0584 14.9861 3.04928C13.9373 3.04017 12.9269 3.44335 12.1725 4.17198L5.75751 10.757C4.63219 11.8823 4 13.4085 4 15C4 16.5914 4.63219 18.1177 5.75751 19.243C6.88282 20.3683 8.40907 21.0005 10.0005 21.0005C11.5919 21.0005 13.1182 20.3683 14.2435 19.243L20.5005 13'
                    stroke='#20474E'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </Button>
              <Button variant='ghost' size='icon'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M9.24853 3.95162C9.4735 4.17666 9.59988 4.48183 9.59988 4.80002C9.59988 5.11822 9.4735 5.42339 9.24853 5.64842L6.49693 8.40002H13.2001C15.428 8.40002 17.5645 9.28502 19.1398 10.8603C20.7151 12.4356 21.6001 14.5722 21.6001 16.8V19.2C21.6001 19.5183 21.4737 19.8235 21.2487 20.0486C21.0236 20.2736 20.7184 20.4 20.4001 20.4C20.0819 20.4 19.7766 20.2736 19.5516 20.0486C19.3266 19.8235 19.2001 19.5183 19.2001 19.2V16.8C19.2001 15.2087 18.568 13.6826 17.4428 12.5574C16.3176 11.4322 14.7914 10.8 13.2001 10.8H6.49693L9.24853 13.5516C9.36315 13.6623 9.45456 13.7947 9.51746 13.9411C9.58035 14.0875 9.61345 14.245 9.61483 14.4043C9.61622 14.5637 9.58586 14.7217 9.52552 14.8692C9.46518 15.0166 9.37608 15.1506 9.26341 15.2633C9.15074 15.376 9.01675 15.4651 8.86928 15.5254C8.7218 15.5857 8.56379 15.6161 8.40445 15.6147C8.24512 15.6133 8.08765 15.5802 7.94125 15.5173C7.79484 15.4545 7.66243 15.363 7.55173 15.2484L2.75173 10.4484C2.52677 10.2234 2.40039 9.91822 2.40039 9.60002C2.40039 9.28183 2.52677 8.97666 2.75173 8.75163L7.55173 3.95162C7.77677 3.72666 8.08194 3.60028 8.40013 3.60028C8.71833 3.60028 9.0235 3.72666 9.24853 3.95162Z'
                    fill='#20474E'
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
