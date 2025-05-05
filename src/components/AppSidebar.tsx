"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  LayoutDashboard,
  BookOpen,
  History,
  LayoutGrid,
} from "lucide-react";

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
    icon: History,
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
              <SidebarMenuItem key={item.href} className="mb-2 ml-8">
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
                    <item.icon className='h-5 w-5' />
                    <span>{item.title}</span>
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
                dvdv
              </button>
            }
          />
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
