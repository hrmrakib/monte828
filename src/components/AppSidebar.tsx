"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserProfileDropdown } from "./UserProfileDropdown";
import Image from "next/image";
const Home = () => (
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
);
const FileText = () => (
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
);
const LayoutDashboard = () => (
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
);
const BookOpen = () => (
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
);
const HistoryIcon = () => (
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
);

const navItems = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "Presentation",
    href: "/presentation",
    icon: FileText,
  },
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Magazine",
    href: "/magazine",
    icon: BookOpen,
  },
  {
    title: "History",
    href: "/history",
    icon: HistoryIcon,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Menu Button - Fixed in the top-left corner */}
      <div className='fixed left-4 top-4 z-50 block md:hidden'>
        <SidebarTrigger className='h-10 w-10 rounded-full border bg-white shadow-sm' />
      </div>

      {/* Sidebar - Responsive for both mobile and desktop */}
      <Sidebar className='border-r'>
        <SidebarHeader className='flex items-center px-4 py-4 mb-6'>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/logo.svg'
              alt='DesignDoc Logo'
              width={250}
              height={250}
            />
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href} className='mb-2 ml-8'>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  className={
                    pathname === item.href
                      ? "bg-orange-500 text-white hover:bg-orange-600 hover:text-white"
                      : ""
                  }
                >
                  <Link href={item.href} className='flex items-center gap-2'>
                    <item.icon />
                    <span className='text-base text-[#20474E]'>
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className='p-4'>
          <UserProfileDropdown
            trigger={
              <button className='flex h-16 w-16 items-center justify-center rounded-md hover:bg-gray-100'>
                <LayoutGrid className='h-12 w-12' />
              </button>
            }
          />
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
