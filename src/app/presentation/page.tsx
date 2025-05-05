"use client";

import { useState } from "react";
import { ArrowLeft, Plus, Download, FileText, X, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Message } from "@/components/chat/Message";
import { TabbedContent } from "@/components/chat/TabbedContent";
import { ChatInput } from "@/components/chat/ChatInput";
import { PresentationCard } from "@/components/presentation/PresentationCard";

// Sample data for the chat messages
const initialMessages = [
  {
    id: 1,
    content: "I want to make",
    isUser: true,
  },
  {
    id: 2,
    content:
      "I am a sales executive I need a presentation for my company vision and sales make a presentation with relevant image and data",
    isUser: true,
  },
  {
    id: 3,
    content: (
      <div>
        <p>
          I&apos;d be happy to help you create a presentation for your company
          vision and sales, to make this presentation visually appealing with
          relevant images and data. I need to use a tool that can generate
          slides. However, creating a presentation will take some time and
          credits. Would you like me to proceed with creating this presentation
          for your sales vision? To create a more tailored presentation, could
          you provide me with a bit more information about:
        </p>
        <ol className='list-decimal pl-5 mt-2'>
          <li>what industry your company is in</li>
          <li>any specific aspects of your vision you want to highlight</li>
          <li>any key sales metrics or goals you&apos;d like to include</li>
        </ol>
        <p className='mt-2'>
          This will help me create a more relevant and effective presentation
          for you.
        </p>
      </div>
    ),
    showCopy: true,
  },
  {
    id: 4,
    content: "okay update and need more details",
    isUser: true,
  },
  {
    id: 5,
    content: (
      <div>
        <p>
          I&apos;d be happy to create a presentation for you, but I need more
          specific details to make it relevant and effective for your needs as a
          sales executive. Could you please provide the following information:
        </p>
        <ol className='list-decimal pl-5 mt-2'>
          <li>
            What industry or sector is your company in? (e.g., technology,
            healthcare, retail, etc.)
          </li>
          <li>
            What are the key elements of your company&apos;s vision you want to
            emphasize?
          </li>
          <li>
            What type of sales data would you like to include? (e.g., current
            performance, targets, market trends)
          </li>
          <li>
            Who is the target audience for this presentation? (e.g., team
            members, potential clients, stakeholders)
          </li>
          <li>How many slides would you prefer for this presentation?</li>
          <li>Are there any specific design preferences you have?</li>
        </ol>
        <p className='mt-2'>
          Once you provide these details, I can create a customized presentation
          with relevant images and data that effectively communicates your
          company&apos;s vision and sales strategy.
        </p>
      </div>
    ),
    showCopy: true,
  },
  {
    id: 6,
    content: "okay create now my presentation",
    isUser: true,
  },
  {
    id: 7,
    content: "using tool 1: clarification",
    isUser: true,
  },
  {
    id: 8,
    content: (
      <div>
        <p>
          I&apos;d be happy to create your presentation, but I still need some
          basic information to make it relevant. Could you please tell me at
          least what industry your company is in and a brief description of your
          company&apos;s vision or sales focus? This would help me create a more
          tailored and effective presentation for you.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    content: "create my presentation",
    isUser: true,
  },
  {
    id: 10,
    content: (
      <div>
        <p>
          I&apos;ll create a general sales executive presentation focused on
          company vision and sales strategy, since you haven&apos;t provided
          specific details about your industry or company. I&apos;ll design a
          versatile presentation that you can later customize with your specific
          information. This process will take several minutes and will use
          credits. I&apos;ll proceed with creating this presentation now.
        </p>
        <div className='mt-4'>
          <p className='font-medium mb-2'>Using Tool</p>
          <div className='flex items-center gap-2'>
            <FileText className='h-5 w-5 text-teal-700' />
            <span>Presentation</span>
            <span className='text-sm text-gray-500'>With 8 Slides</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    content: (
      <div>
        <PresentationCard
          title='Sales Executive Vision & Strategy Presentation'
          slideCount={8}
        />
        <div className='mt-4'>
          <p>
            I&apos;ve created a professional sales executive vision & strategy
            presentation for you, the presentation consists of 8 slides that
            cover the essential aspects of company vision and sales strategy,
            you can view and download the complete presentation from the link
            above.
          </p>
          <p className='mt-2 font-medium'>Presentation overview:</p>
          <p>The presentation includes:</p>
          <ol className='list-decimal pl-5 mt-2'>
            <li>
              Title slide: Introduction to the presentation with a professional
              business theme
            </li>
            <li>
              Company vision: outlining the core vision and mission of your
              organization
            </li>
            <li>
              Market analysis: overview of market trends and opportunities
            </li>
            <li>
              Sales strategy: key strategic approaches to achieve sales targets
            </li>
            <li>
              Team structure: organizational framework for the sales department
            </li>
            <li>
              Product/service: specific information about the key sales
              offerings
            </li>
            <li>
              Success metrics: how performance will be measured and tracked
            </li>
            <li>Call to action: next steps and implementation plan</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    content:
      "I am a university student I have a presentation my topics is environment pollution make a perfect presentation for me with relevant information",
    isUser: true,
  },
];

// Sample data for the tabbed content
const tabbedContentData = [
  {
    thinking: `I need to create an HTML slide for a Sales Executive Presentation. This is Page 1 of 6. Which would typically be a Title/Introduction Slide.

1. I'll use Tailwind CSS for styling this CSS.
2. The slide should be 1280px wide with a Minimum Height of 720px
3. I should follow a Modern Corporate Presentation Style With Blue Color Scheme
4. This being a Title Slide, it should include:
   - Company Name (Generic Since No Specifics Provided)
   - Presentation Title like "Company Vision & Sales Strategy"
   - Subtitle With Presenter Role (Sales Executive)
   - A Professional Background Image
   - Perhaps A Tagline Or Brief Introduction
   - Here's How I'll Structure The HTML:
     - A Container Div With Fixed Width 1280px And Min-Height 720px
     - A Background With Subtle Gradient Or Pattern
     - Company Name/Logo Section At The Top
     - Title In The Center, Made Prominent
     - Subtitle And Presenter Info Below The Title`,
    code: `<div class="slide-container" style="width: 1280px; min-height: 720px; background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);">
  <div class="slide-content p-16 flex flex-col items-center justify-center h-full text-center">
    <div class="company-info mb-8">
      <h3 class="text-2xl font-semibold text-blue-800">ACME CORPORATION</h3>
    </div>
    <div class="title-section mb-12">
      <h1 class="text-5xl font-bold text-blue-900 mb-4">Company Vision & Sales Strategy</h1>
      <h2 class="text-3xl font-medium text-blue-700">Strategic Roadmap 2023-2024</h2>
    </div>
    <div class="presenter-info mt-auto">
      <p class="text-xl text-blue-800">Presented by: John Smith</p>
      <p class="text-lg text-blue-600">Sales Executive</p>
    </div>
  </div>
</div>`,
    preview: (
      <div className='bg-blue-50 p-8 rounded-lg'>
        <div className='text-center'>
          <h3 className='text-xl font-semibold text-blue-800 mb-4'>
            ACME CORPORATION
          </h3>
          <h1 className='text-4xl font-bold text-blue-900 mb-2'>
            Company Vision & Sales Strategy
          </h1>
          <h2 className='text-2xl font-medium text-blue-700 mb-8'>
            Strategic Roadmap 2023-2024
          </h2>
          <div className='mt-12'>
            <p className='text-lg text-blue-800'>Presented by: John Smith</p>
            <p className='text-md text-blue-600'>Sales Executive</p>
          </div>
        </div>
      </div>
    ),
    index: 1,
    total: 6,
  },
  {
    thinking: `I need to create an HTML slide for a Sales Executive Presentation. This is Page 2 of 6. Which would typically be a Company Vision slide.

1. I'll use Tailwind CSS for styling this CSS.
2. The slide should be 1280px wide with a Minimum Height of 720px
3. I should follow a Modern Corporate Presentation Style With Blue Color Scheme
4. This being a Vision Slide, it should include:
   - A clear section title "Our Vision"
   - A compelling vision statement
   - Perhaps 2-3 key pillars or principles that support the vision
   - Visual elements to enhance understanding
   - Here's How I'll Structure The HTML:
     - A Container Div With Fixed Width 1280px And Min-Height 720px
     - A Background With Subtle Gradient Or Pattern
     - Section Title At The Top
     - Vision Statement In A Highlighted Box
     - Supporting Elements Below In Columns`,
    code: `<div class="slide-container" style="width: 1280px; min-height: 720px; background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);">
  <div class="slide-content p-16 h-full">
    <div class="section-header mb-10">
      <h2 class="text-3xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2">Our Vision</h2>
    </div>
    
    <div class="vision-statement bg-white p-6 rounded-lg shadow-md mb-10 border-l-4 border-blue-500">
      <p class="text-2xl font-medium text-blue-800 italic">"To be the industry leader in providing innovative solutions that drive exceptional value for our customers while maintaining the highest standards of excellence and integrity."</p>
    </div>
    
    <div class="vision-pillars grid grid-cols-3 gap-8">
      <div class="pillar bg-blue-50 p-6 rounded-lg shadow-sm">
        <h3 class="text-xl font-semibold text-blue-700 mb-3">Innovation</h3>
        <p class="text-gray-700">Continuously developing cutting-edge solutions that address evolving market needs.</p>
      </div>
      
      <div class="pillar bg-blue-50 p-6 rounded-lg shadow-sm">
        <h3 class="text-xl font-semibold text-blue-700 mb-3">Customer Value</h3>
        <p class="text-gray-700">Delivering exceptional products and services that exceed customer expectations and provide measurable ROI.</p>
      </div>
      
      <div class="pillar bg-blue-50 p-6 rounded-lg shadow-sm">
        <h3 class="text-xl font-semibold text-blue-700 mb-3">Excellence</h3>
        <p class="text-gray-700">Upholding the highest standards in all aspects of our operations, from product quality to customer service.</p>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className='bg-blue-50 p-8 rounded-lg'>
        <h2 className='text-2xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2 mb-6'>
          Our Vision
        </h2>

        <div className='bg-white p-4 rounded-lg shadow-md mb-6 border-l-4 border-blue-500'>
          <p className='text-xl font-medium text-blue-800 italic'>
            &quot;To be the industry leader in providing innovative solutions
            that drive exceptional value for our customers while maintaining the
            highest standards of excellence and integrity.&quot;
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-blue-50 p-4 rounded-lg shadow-sm'>
            <h3 className='text-lg font-semibold text-blue-700 mb-2'>
              Innovation
            </h3>
            <p className='text-sm text-gray-700'>
              Continuously developing cutting-edge solutions that address
              evolving market needs.
            </p>
          </div>

          <div className='bg-blue-50 p-4 rounded-lg shadow-sm'>
            <h3 className='text-lg font-semibold text-blue-700 mb-2'>
              Customer Value
            </h3>
            <p className='text-sm text-gray-700'>
              Delivering exceptional products and services that exceed customer
              expectations and provide measurable ROI.
            </p>
          </div>

          <div className='bg-blue-50 p-4 rounded-lg shadow-sm'>
            <h3 className='text-lg font-semibold text-blue-700 mb-2'>
              Excellence
            </h3>
            <p className='text-sm text-gray-700'>
              Upholding the highest standards in all aspects of our operations,
              from product quality to customer service.
            </p>
          </div>
        </div>
      </div>
    ),
    index: 2,
    total: 6,
  },
  {
    thinking: `I need to create an HTML slide for a Sales Executive Presentation. This is Page 3 of 6. Which would typically be a Sales Strategy slide.

1. I'll use Tailwind CSS for styling this CSS.
2. The slide should be 1280px wide with a Minimum Height of 720px
3. I should follow a Modern Corporate Presentation Style With Blue Color Scheme
4. This being a Sales Strategy Slide, it should include:
   - A clear section title "Sales Strategy"
   - Key strategic approaches or pillars
   - Perhaps some metrics or goals
   - Visual elements to enhance understanding
   - Here's How I'll Structure The HTML:
     - A Container Div With Fixed Width 1280px And Min-Height 720px
     - A Background With Subtle Gradient Or Pattern
     - Section Title At The Top
     - Strategy Elements In A Clear Layout
     - Supporting Visuals Or Icons`,
    code: `<div class="slide-container" style="width: 1280px; min-height: 720px; background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);">
  <div class="slide-content p-16 h-full">
    <div class="section-header mb-10">
      <h2 class="text-3xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2">Sales Strategy</h2>
    </div>
    
    <div class="grid grid-cols-2 gap-10">
      <div class="strategy-overview">
        <h3 class="text-2xl font-semibold text-blue-800 mb-4">Strategic Approach</h3>
        <ul class="space-y-4">
          <li class="flex items-start">
            <div class="bg-blue-600 rounded-full p-1 mt-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p class="font-medium text-blue-900">Customer-Centric Selling</p>
              <p class="text-gray-700">Focus on understanding and addressing specific customer needs</p>
            </div>
          </li>
          <li class="flex items-start">
            <div class="bg-blue-600 rounded-full p-1 mt-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p class="font-medium text-blue-900">Value-Based Positioning</p>
              <p class="text-gray-700">Emphasize ROI and long-term value over initial cost</p>
            </div>
          </li>
          <li class="flex items-start">
            <div class="bg-blue-600 rounded-full p-1 mt-1 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p class="font-medium text-blue-900">Consultative Approach</p>
              <p class="text-gray-700">Position sales team as trusted advisors rather than vendors</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div class="key-metrics">
        <h3 class="text-2xl font-semibold text-blue-800 mb-4">Key Performance Targets</h3>
        <div class="space-y-6">
          <div class="metric">
            <div class="flex justify-between mb-1">
              <span class="font-medium text-blue-900">Revenue Growth</span>
              <span class="font-bold text-blue-700">25%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-blue-600 h-2.5 rounded-full" style="width: 25%"></div>
            </div>
          </div>
          
          <div class="metric">
            <div class="flex justify-between mb-1">
              <span class="font-medium text-blue-900">Customer Retention</span>
              <span class="font-bold text-blue-700">90%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-blue-600 h-2.5 rounded-full" style="width: 90%"></div>
            </div>
          </div>
          
          <div class="metric">
            <div class="flex justify-between mb-1">
              <span class="font-medium text-blue-900">New Client Acquisition</span>
              <span class="font-bold text-blue-700">50+</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-blue-600 h-2.5 rounded-full" style="width: 65%"></div>
            </div>
          </div>
          
          <div class="metric">
            <div class="flex justify-between mb-1">
              <span class="font-medium text-blue-900">Sales Cycle Reduction</span>
              <span class="font-bold text-blue-700">15%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-blue-600 h-2.5 rounded-full" style="width: 15%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    preview: (
      <div className='bg-blue-50 p-8 rounded-lg'>
        <h2 className='text-2xl font-bold text-blue-900 border-b-2 border-blue-300 pb-2 mb-6'>
          Sales Strategy
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <h3 className='text-xl font-semibold text-blue-800 mb-3'>
              Strategic Approach
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-start'>
                <div className='bg-blue-600 rounded-full p-1 mt-1 mr-2 flex-shrink-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3 w-3 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <div>
                  <p className='font-medium text-blue-900 text-sm'>
                    Customer-Centric Selling
                  </p>
                  <p className='text-gray-700 text-xs'>
                    Focus on understanding and addressing specific customer
                    needs
                  </p>
                </div>
              </li>
              <li className='flex items-start'>
                <div className='bg-blue-600 rounded-full p-1 mt-1 mr-2 flex-shrink-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3 w-3 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <div>
                  <p className='font-medium text-blue-900 text-sm'>
                    Value-Based Positioning
                  </p>
                  <p className='text-gray-700 text-xs'>
                    Emphasize ROI and long-term value over initial cost
                  </p>
                </div>
              </li>
              <li className='flex items-start'>
                <div className='bg-blue-600 rounded-full p-1 mt-1 mr-2 flex-shrink-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-3 w-3 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <div>
                  <p className='font-medium text-blue-900 text-sm'>
                    Consultative Approach
                  </p>
                  <p className='text-gray-700 text-xs'>
                    Position sales team as trusted advisors rather than vendors
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-semibold text-blue-800 mb-3'>
              Key Performance Targets
            </h3>
            <div className='space-y-4'>
              <div>
                <div className='flex justify-between mb-1'>
                  <span className='font-medium text-blue-900 text-sm'>
                    Revenue Growth
                  </span>
                  <span className='font-bold text-blue-700 text-sm'>25%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div
                    className='bg-blue-600 h-2 rounded-full'
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className='flex justify-between mb-1'>
                  <span className='font-medium text-blue-900 text-sm'>
                    Customer Retention
                  </span>
                  <span className='font-bold text-blue-700 text-sm'>90%</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div
                    className='bg-blue-600 h-2 rounded-full'
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <div className='flex justify-between mb-1'>
                  <span className='font-medium text-blue-900 text-sm'>
                    New Client Acquisition
                  </span>
                  <span className='font-bold text-blue-700 text-sm'>50+</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div
                    className='bg-blue-600 h-2 rounded-full'
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    index: 3,
    total: 6,
  },
  {
    thinking: `I need to create an HTML slide for a Sales Executive Presentation. This is Page 1 of 6. Which would typically be a Title/Introduction Slide.

1. I'll use Tailwind CSS for styling this CSS.
2. The slide should be 1280px wide with a Minimum Height of 720px
3. I should follow a Modern Corporate Presentation Style With Blue Color Scheme
4. This being a Title Slide, it should include:
   - Company Name (Generic Since No Specifics Provided)
   - Presentation Title like "Company Vision & Sales Strategy"
   - Subtitle With Presenter Role (Sales Executive)
   - A Professional Background Image
   - Perhaps A Tagline Or Brief Introduction
   - Here's How I'll Structure The HTML:
     - A Container Div With Fixed Width 1280px And Min-Height 720px
     - A Background With Subtle Gradient Or Pattern
     - Company Name/Logo Section At The Top
     - Title In The Center, Made Prominent
     - Subtitle And Presenter Info Below The Title`,
    code: `<div class="slide-container" style="width: 1280px; min-height: 720px; background: linear-gradient(135deg, #f0f9ff 0%, #e1f5fe 100%);">
  <div class="slide-content p-16 flex flex-col items-center justify-center h-full text-center">
    <div class="company-info mb-8">
      <h3 class="text-2xl font-semibold text-blue-800">ACME CORPORATION</h3>
    </div>
    <div class="title-section mb-12">
      <h1 class="text-5xl font-bold text-blue-900 mb-4">Company Vision & Sales Strategy</h1>
      <h2 class="text-3xl font-medium text-blue-700">Strategic Roadmap 2023-2024</h2>
    </div>
    <div class="presenter-info mt-auto">
      <p class="text-xl text-blue-800">Presented by: John Smith</p>
      <p class="text-lg text-blue-600">Sales Executive</p>
    </div>
  </div>
</div>`,
    preview: (
      <div className='bg-blue-50 p-8 rounded-lg'>
        <div className='text-center'>
          <h3 className='text-xl font-semibold text-blue-800 mb-4'>
            ACME CORPORATION
          </h3>
          <h1 className='text-4xl font-bold text-blue-900 mb-2'>
            Company Vision & Sales Strategy
          </h1>
          <h2 className='text-2xl font-medium text-blue-700 mb-8'>
            Strategic Roadmap 2023-2024
          </h2>
          <div className='mt-12'>
            <p className='text-lg text-blue-800'>Presented by: John Smith</p>
            <p className='text-md text-blue-600'>Sales Executive</p>
          </div>
        </div>
      </div>
    ),
    index: 1,
    total: 6,
  },
];

export default function Home() {
  const [messages, setMessages] = useState(initialMessages);

  const handleSendMessage = (message: string) => {
    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      content: message,
      isUser: true,
    };

    // Add a placeholder response
    const newAIMessage = {
      id: messages.length + 2,
      content: "I'm processing your request...",
      isUser: false,
    };

    setMessages([...messages, newUserMessage, newAIMessage]);
  };

  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header */}
      <header className='flex items-center justify-between border-b p-4'>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon' className='md:hidden'>
            <ArrowLeft className='h-5 w-5' />
          </Button>
          <h1 className='text-xl font-bold text-teal-700 md:text-2xl'>
            Get DesignDoc Presentations
          </h1>
        </div>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='icon'>
            <Plus className='h-5 w-5' />
          </Button>
          <Button variant='ghost' size='icon'>
            <Download className='h-5 w-5' />
          </Button>
        </div>
      </header>

      {/* Two-column layout for large screens, single column for mobile */}
      <div className='flex flex-col lg:flex-row flex-1 overflow-hidden'>
        {/* Chat column */}
        <div className='flex flex-col w-full lg:w-1/2 border-r'>
          {/* Chat messages */}
          <div className='flex-1 overflow-y-auto p-4'>
            <div className='mx-auto max-w-3xl'>
              {messages.map((message) => (
                <Message
                  key={message.id}
                  content={message.content}
                  isUser={message.isUser}
                  showCopy={message.showCopy}
                />
              ))}
            </div>
          </div>

          {/* Input area */}
          <div className='border-t p-4'>
            <div className='mx-auto max-w-3xl'>
              <ChatInput onSend={handleSendMessage} />
            </div>
          </div>
        </div>

        {/* Preview column - hidden on mobile, visible on large screens */}
        <div className='flex lg:w-1/2 flex-col overflow-y-auto bg-gray-50'>
          <div className='p-4 overflow-y-auto'>
            {/* Tabbed content examples */}
            <div className='space-y-6'>
              {tabbedContentData.map((content, index) => (
                <div
                  key={`tabbed-${index}`}
                  className='bg-white rounded-lg shadow-sm overflow-hidden'
                >
                  <div className='flex items-center justify-between bg-white p-3 border-b'>
                    <div className='flex items-center gap-2'>
                      <FileText className='h-5 w-5 text-teal-700' />
                      <span className='font-medium'>
                        Sales Executive Presentation
                      </span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Button
                        size='sm'
                        className='bg-[#20474E] hover:bg-[#20474ecc] text-white'
                      >
                        Add Animations
                      </Button>
                      <Button variant='ghost' size='icon' className='h-6 w-6'>
                        <Maximize className='h-4 w-4' />
                      </Button>
                      <Button variant='ghost' size='icon' className='h-6 w-6'>
                        <X className='h-4 w-4' />
                      </Button>
                    </div>
                  </div>
                  <TabbedContent
                    thinking={content.thinking}
                    code={content.code}
                    preview={content.preview}
                    index={content.index}
                    total={content.total}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
