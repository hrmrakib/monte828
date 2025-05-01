"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  LayoutDashboard,
  BookOpen,
  History,
  Menu,
  Paperclip,
  RotateCcw,
  Grid,
  X,
  Settings,
  LogOut,
  Edit,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("home");
  const [activeFilter, setActiveFilter] = useState("presentation");
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [dataRetention, setDataRetention] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleProfileModal = () => {
    setProfileModalOpen(!profileModalOpen);
  };

  const openSettingsModal = () => {
    setSettingsModalOpen(true);
  };

  const closeSettingsModal = () => {
    setSettingsModalOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    console.log("Filter selected:", filter);
    // Implement filter functionality here
  };

  const toggleDataRetention = () => {
    setDataRetention(!dataRetention);
  };

  return (
    <div className='flex h-screen bg-white'>
      {/* Mobile sidebar toggle */}
      <div className='fixed top-4 left-4 z-50 md:hidden'>
        <button
          onClick={toggleSidebar}
          className='p-2 rounded-md bg-white shadow-md'
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:relative z-40 h-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          sidebarOpen
            ? "w-64 translate-x-0"
            : "w-0 -translate-x-full md:w-20 md:translate-x-0"
        }`}
      >
        <div className='flex flex-col h-full'>
          {/* Logo */}
          <div className='p-4 flex items-center justify-center md:justify-start'>
            <div
              className={`flex items-center ${
                !sidebarOpen && "md:justify-center"
              }`}
            >
              <Image
                src='/logo.svg'
                alt='DesignDoc Logo'
                width={400}
                height={400}
                className='mr-2'
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className='flex-1 px-2 py-4'>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-full ${
                    activeTab === "home"
                      ? "bg-[#F99F04] text-white"
                      : "text-[#20474E] hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveTab("home")}
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill={activeTab === "home" ? "white" : "#20474E"}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M10.7064 2.29303C10.5189 2.10556 10.2646 2.00024 9.99943 2.00024C9.73427 2.00024 9.47996 2.10556 9.29243 2.29303L2.29243 9.29303C2.11027 9.48163 2.00948 9.73423 2.01176 9.99643C2.01403 10.2586 2.1192 10.5094 2.30461 10.6948C2.49002 10.8803 2.74083 10.9854 3.00303 10.9877C3.26523 10.99 3.51783 10.8892 3.70643 10.707L3.99943 10.414V17C3.99943 17.2652 4.10479 17.5196 4.29232 17.7071C4.47986 17.8947 4.73421 18 4.99943 18H6.99943C7.26465 18 7.519 17.8947 7.70654 17.7071C7.89407 17.5196 7.99943 17.2652 7.99943 17V15C7.99943 14.7348 8.10479 14.4805 8.29232 14.2929C8.47986 14.1054 8.73421 14 8.99943 14H10.9994C11.2646 14 11.519 14.1054 11.7065 14.2929C11.8941 14.4805 11.9994 14.7348 11.9994 15V17C11.9994 17.2652 12.1048 17.5196 12.2923 17.7071C12.4799 17.8947 12.7342 18 12.9994 18H14.9994C15.2646 18 15.519 17.8947 15.7065 17.7071C15.8941 17.5196 15.9994 17.2652 15.9994 17V10.414L16.2924 10.707C16.481 10.8892 16.7336 10.99 16.9958 10.9877C17.258 10.9854 17.5088 10.8803 17.6942 10.6948C17.8797 10.5094 17.9848 10.2586 17.9871 9.99643C17.9894 9.73423 17.8886 9.48163 17.7064 9.29303L10.7064 2.29303Z' />
                  </svg>

                  {sidebarOpen && <span>Home</span>}
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-full ${
                    activeTab === "presentation"
                      ? "bg-[#F99F04] text-white"
                      : "text-[#20474E] hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveTab("presentation")}
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill={activeTab === "presentation" ? "white" : "#20474E"}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M2 5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H12C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5V15C14 15.5304 14.2107 16.0391 14.5858 16.4142C14.9609 16.7893 15.4696 17 16 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5ZM5 6H11V10H5V6ZM11 12H5V14H11V12Z'
                    />
                    <path d='M15 7H16C16.5304 7 17.0391 7.21071 17.4142 7.58579C17.7893 7.96086 18 8.46957 18 9V14.5C18 14.8978 17.842 15.2794 17.5607 15.5607C17.2794 15.842 16.8978 16 16.5 16C16.1022 16 15.7206 15.842 15.4393 15.5607C15.158 15.2794 15 14.8978 15 14.5V7Z' />
                  </svg>

                  {sidebarOpen && <span>Presentation</span>}
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-full ${
                    activeTab === "dashboard"
                      ? "bg-[#F99F04] text-white"
                      : "text-[#20474E] hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill={activeTab === "dashboard" ? "white" : "#20474E"}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V13C17 13.5304 16.7893 14.0391 16.4142 14.4142C16.0391 14.7893 15.5304 15 15 15H12.78L12.903 15.489L13.707 16.293C13.8468 16.4329 13.942 16.611 13.9806 16.805C14.0192 16.9989 13.9993 17.2 13.9237 17.3827C13.848 17.5654 13.7199 17.7215 13.5555 17.8314C13.391 17.9413 13.1978 18 13 18H7C6.80225 18 6.60895 17.9413 6.44454 17.8314C6.28013 17.7215 6.15199 17.5654 6.07632 17.3827C6.00065 17.2 5.98085 16.9989 6.01942 16.805C6.05798 16.611 6.15319 16.4329 6.293 16.293L7.097 15.489L7.22 15H5C4.46957 15 3.96086 14.7893 3.58579 14.4142C3.21071 14.0391 3 13.5304 3 13V5ZM8.771 12H5V5H15V12H8.771Z'
                    />
                  </svg>

                  {sidebarOpen && <span>Dashboard</span>}
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-full ${
                    activeTab === "magazine"
                      ? "bg-[#F99F04] text-white"
                      : "text-[#20474E] hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveTab("magazine")}
                >
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill={activeTab === "magazine" ? "white" : "#20474E"}
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M9 4.80401C7.90971 4.27317 6.71265 3.99819 5.5 4.00001C4.245 4.00001 3.057 4.29001 2 4.80401V14.804C3.0903 14.2732 4.28736 13.9982 5.5 14C7.169 14 8.718 14.51 10 15.385C11.3261 14.4802 12.8947 13.9975 14.5 14C15.755 14 16.943 14.29 18 14.804V4.80401C16.9097 4.27317 15.7126 3.99819 14.5 4.00001C13.245 4.00001 12.057 4.29001 11 4.80401V12C11 12.2652 10.8946 12.5196 10.7071 12.7071C10.5196 12.8947 10.2652 13 10 13C9.73478 13 9.48043 12.8947 9.29289 12.7071C9.10536 12.5196 9 12.2652 9 12V4.80401Z' />
                  </svg>

                  {sidebarOpen && <span>Magazine</span>}
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className={`flex items-center gap-2.5 px-4 py-2 rounded-full ${
                    activeTab === "history"
                      ? "bg-[#F99F04] text-white"
                      : "text-[#20474E] hover:bg-slate-100"
                  }`}
                  onClick={() => setActiveTab("history")}
                >
                  <History
                    size={20}
                    className={`${
                      activeTab === "history" ? "text-white" : "text-[#20474E]"
                    }`}
                  />
                  {sidebarOpen && <span>History</span>}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Bottom icon */}
          <div className='p-4'>
            <button
              className='p-2 hover:bg-slate-100 rounded-md'
              onClick={toggleProfileModal}
            >
              <Grid size={80} className='text-[#20474E]' />
            </button>
          </div>
        </div>
      </div>

      {/* User Profile Modal */}
      {profileModalOpen && (
        <div className='fixed bottom-0 left-0 z-50 ml-4 mb-16 md:ml-20 md:mb-4'>
          <div className='bg-white rounded-lg shadow-lg w-[220px] overflow-hidden'>
            {/* User info */}
            <div className='p-4 flex items-center'>
              <Image
                src='/avatar.jpg'
                alt='User Avatar'
                width={40}
                height={40}
                className='rounded-full mr-3'
              />
              <div className='flex-1'>
                <p className='font-medium text-slate-800'>Arjun Mazumder</p>
              </div>
              <button className='text-slate-500 hover:text-[#20474E]'>
                <Edit size={16} />
              </button>
            </div>

            {/* Divider */}
            <div className='border-t border-slate-200 mx-4'></div>

            {/* Upgrade plan */}
            <div className='p-4 pt-3'>
              <button className='bg-[#F99F04] hover:bg-orange-600 text-white w-full py-2 px-4 rounded-full flex items-center justify-between'>
                <span>Upgrade Plan</span>
                <ArrowRight size={16} />
              </button>

              <div className='mt-2 bg-orange-100 text-orange-800 py-1 px-3 rounded-full text-sm flex items-center justify-center'>
                Credits: 0
              </div>
            </div>

            {/* Options */}
            <div className='p-2'>
              <button
                className='w-full flex items-center px-3 py-2 text-[#20474E] hover:bg-slate-100 rounded-md'
                onClick={openSettingsModal}
              >
                <Settings size={18} className='mr-3' />
                <span>Settings</span>
              </button>
              <button className='w-full flex items-center px-3 py-2 text-[#20474E] hover:bg-slate-100 rounded-md'>
                <LogOut size={18} className='mr-3' />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {settingsModalOpen && (
        <div className='fixed inset-0 bg-[#0000002a] bg-opacity-30 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg shadow-lg w-full max-w-md mx-4'>
            <div className='flex items-center justify-between p-4 border-b'>
              <h2 className='text-xl font-semibold text-slate-800'>Settings</h2>
              <button
                onClick={closeSettingsModal}
                className='text-slate-500 hover:text-[#20474E] cursor-pointer'
              >
                <X size={20} />
              </button>
            </div>

            <div className='p-6 space-y-6'>
              {/* Display Language */}
              <div className='space-y-2'>
                <label
                  htmlFor='language'
                  className='block text-sm font-medium text-[#20474E]'
                >
                  Display Language
                </label>
                <div className='relative'>
                  <select
                    id='language'
                    className='block w-full pl-3 pr-10 py-2 text-base border border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md appearance-none'
                    defaultValue='en'
                  >
                    <option value='en'>English (English)</option>
                    <option value='es'>Spanish (Español)</option>
                    <option value='fr'>French (Français)</option>
                    <option value='de'>German (Deutsch)</option>
                  </select>
                  <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#20474E]'>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              {/* Data Retention Toggle */}
              <div className='flex items-center justify-between'>
                <span className='text-sm font-medium text-[#20474E]'>
                  All Data Retention
                </span>
                <button
                  onClick={toggleDataRetention}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                    dataRetention ? "bg-[#F99F04]" : "bg-slate-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      dataRetention ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Explanation Text */}
              <div className='text-sm text-slate-600'>
                <p>
                  I&apos;d be happy to create your presentation, but I still
                  need some basic information to make it relevant. Could you
                  please tell me at least what industry your company is in and a
                  brief description of your company&apos;s vision or sales
                  focus? This would help me create a more tailored and effective
                  presentation for you.
                </p>
              </div>

              {/* Delete User */}
              <div className='pt-4'>
                <button className='text-red-600 hover:text-red-800 text-sm font-medium'>
                  Delete User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className='flex-1 overflow-auto p-4 md:p-8 ml-0 md:ml-20'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-bold text-slate-800 mb-8 text-center md:text-left'>
            Get DesignDoc Presentations
          </h1>

          {/* Filter buttons */}
          <div className='flex flex-wrap justify-center md:justify-start gap-2 mb-8'>
            <button
              onClick={() => handleFilterClick("presentation")}
              className={`flex items-center px-4 py-2 rounded-full border ${
                activeFilter === "presentation"
                  ? "bg-slate-100 border-slate-300"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              <FileText size={18} className='mr-2' />
              Presentation
            </button>
            <button
              onClick={() => handleFilterClick("dashboard")}
              className={`flex items-center px-4 py-2 rounded-full border ${
                activeFilter === "dashboard"
                  ? "bg-slate-100 border-slate-300"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              <LayoutDashboard size={18} className='mr-2' />
              Dashboard
            </button>
            <button
              onClick={() => handleFilterClick("magazine")}
              className={`flex items-center px-4 py-2 rounded-full border ${
                activeFilter === "magazine"
                  ? "bg-slate-100 border-slate-300"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              <BookOpen size={18} className='mr-2' />
              Magazine
            </button>
          </div>

          {/* Search input */}
          <form onSubmit={handleSearch} className='mb-8'>
            <div className='relative'>
              <input
                type='text'
                placeholder='How Can I Help You...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-full p-4 pr-20 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <div className='absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2'>
                <button
                  type='button'
                  className='p-2 text-slate-500 hover:text-[#20474E]'
                >
                  <Paperclip size={20} />
                </button>
                <button
                  type='button'
                  className='p-2 text-slate-500 hover:text-[#20474E]'
                >
                  <RotateCcw size={20} />
                </button>
              </div>
            </div>
          </form>

          {/* Content area - would be populated based on selected filter */}
          <div className='bg-white rounded-lg p-6 min-h-[300px]'>
            {activeFilter === "presentation" && (
              <div className='space-y-4'>
                <h2 className='text-xl font-semibold'>
                  Presentation Templates
                </h2>
                <p className='text-slate-600'>
                  Browse through our collection of professional presentation
                  templates. Create stunning slides with just a few clicks.
                </p>
                {/* Presentation content would go here */}
              </div>
            )}

            {activeFilter === "dashboard" && (
              <div className='space-y-4'>
                <h2 className='text-xl font-semibold'>Dashboard Templates</h2>
                <p className='text-slate-600'>
                  Visualize your data with our interactive dashboard templates.
                  Perfect for business analytics and reporting.
                </p>
                {/* Dashboard content would go here */}
              </div>
            )}

            {activeFilter === "magazine" && (
              <div className='space-y-4'>
                <h2 className='text-xl font-semibold'>Magazine Layouts</h2>
                <p className='text-slate-600'>
                  Create professional magazine layouts with our easy-to-use
                  templates. Perfect for digital and print publications.
                </p>
                {/* Magazine content would go here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
