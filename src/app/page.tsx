"use client";

import { useState } from "react";
import Link from "next/link";
import { Paperclip, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='container mx-auto px-4 py-8 md:py-16'>
        <h1 className='mb-8 text-center text-3xl font-bold text-teal-700 md:text-4xl lg:text-5xl'>
          Get DesignDoc Presentations
        </h1>

        <div className='mb-8 flex flex-wrap justify-center gap-2'>
          <Button
            variant='outline'
            className='flex items-center gap-2 rounded-full border border-[#6E7A8A]'
            asChild
          >
            <Link href='/presentation'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H12C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5V15C14 15.5304 14.2107 16.0391 14.5858 16.4142C14.9609 16.7893 15.4696 17 16 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5ZM5 6H11V10H5V6ZM11 12H5V14H11V12Z'
                  fill='#20474E'
                />
                <path
                  d='M15 7H16C16.5304 7 17.0391 7.21071 17.4142 7.58579C17.7893 7.96086 18 8.46957 18 9V14.5C18 14.8978 17.842 15.2794 17.5607 15.5607C17.2794 15.842 16.8978 16 16.5 16C16.1022 16 15.7206 15.842 15.4393 15.5607C15.158 15.2794 15 14.8978 15 14.5V7Z'
                  fill='#20474E'
                />
              </svg>

              <span className='text-[#20474E]'>Presentation</span>
            </Link>
          </Button>
          <Button
            variant='outline'
            className='flex items-center gap-2 rounded-full border border-[#6E7A8A]'
            asChild
          >
            <Link href='/dashboard'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V13C17 13.5304 16.7893 14.0391 16.4142 14.4142C16.0391 14.7893 15.5304 15 15 15H12.78L12.903 15.489L13.707 16.293C13.8468 16.4329 13.942 16.611 13.9806 16.805C14.0192 16.9989 13.9993 17.2 13.9237 17.3827C13.848 17.5654 13.7199 17.7215 13.5555 17.8314C13.391 17.9413 13.1978 18 13 18H7C6.80225 18 6.60895 17.9413 6.44454 17.8314C6.28013 17.7215 6.15199 17.5654 6.07632 17.3827C6.00065 17.2 5.98085 16.9989 6.01942 16.805C6.05798 16.611 6.15319 16.4329 6.293 16.293L7.097 15.489L7.22 15H5C4.46957 15 3.96086 14.7893 3.58579 14.4142C3.21071 14.0391 3 13.5304 3 13V5ZM8.771 12H5V5H15V12H8.771Z'
                  fill='#20474E'
                />
              </svg>

              <span className='text-[#20474E]'>Dashboard</span>
            </Link>
          </Button>
          <Button
            variant='outline'
            className='flex items-center gap-2 rounded-full border border-[#6E7A8A]'
            asChild
          >
            <Link href='/magazine'>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M9 4.80401C7.90971 4.27317 6.71265 3.99819 5.5 4.00001C4.245 4.00001 3.057 4.29001 2 4.80401V14.804C3.0903 14.2732 4.28736 13.9982 5.5 14C7.169 14 8.718 14.51 10 15.385C11.3261 14.4802 12.8947 13.9975 14.5 14C15.755 14 16.943 14.29 18 14.804V4.80401C16.9097 4.27317 15.7126 3.99819 14.5 4.00001C13.245 4.00001 12.057 4.29001 11 4.80401V12C11 12.2652 10.8946 12.5196 10.7071 12.7071C10.5196 12.8947 10.2652 13 10 13C9.73478 13 9.48043 12.8947 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12V4.80401Z'
                  fill='#20474E'
                />
              </svg>

              <span className='text-[#20474E]'>Magazine</span>
            </Link>
          </Button>
        </div>

        <div className='relative mx-auto max-w-[832px] min-h-[150px] rounded-lg p-2 border-2 border-[#6E7A8A] shadow-sm'>
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
