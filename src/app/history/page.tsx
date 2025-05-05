"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface HistoryEntry {
  id: string;
  timestamp: Date;
  query: string;
  showMenu?: boolean; // Optional property to track menu visibility
}

interface GroupedEntries {
  [key: string]: HistoryEntry[];
}

export default function HistoryPage() {
  // Sample data - in a real app, this would come from an API or database
  const [entries, setEntries] = useState<HistoryEntry[]>([
    {
      id: "1",
      timestamp: new Date(),
      query: "I am a sales executive for my company vision.",
    },
    {
      id: "2",
      timestamp: new Date(),
      query:
        "I am a sales executive I need a presentation for my company vision and sales make...",
    },
    {
      id: "3",
      timestamp: new Date(),
      query: "super agent ai presentation.",
    },
    {
      id: "4",
      timestamp: new Date(),
      query: "create a website for magazine.",
    },
    {
      id: "5",
      timestamp: new Date(),
      query: "I need a presentation for my company vision and sales make",
    },
    {
      id: "6",
      timestamp: new Date(2025, 3, 22, 6, 15), // April 22, 2025
      query: "I am a sales executive for my company vision.",
    },
    {
      id: "7",
      timestamp: new Date(2025, 3, 22, 6, 15),
      query:
        "I am a sales executive I need a presentation for my company vision and sales make...",
    },
    {
      id: "8",
      timestamp: new Date(2025, 3, 22, 6, 15),
      query: "super agent ai presentation.",
    },
    {
      id: "9",
      timestamp: new Date(2025, 3, 22, 6, 15),
      query: "create a website for magazine.",
    },
    {
      id: "10",
      timestamp: new Date(2025, 3, 22, 6, 15),
      query: "I need a presentation for my company vision and sales make",
    },
    {
      id: "11",
      timestamp: new Date(2025, 3, 22, 6, 15),
      query: "I am a sales executive for my company vision.",
    },
    {
      id: "12",
      timestamp: new Date(2025, 3, 22, 6, 15),
      query:
        "I am a sales executive I need a presentation for my company vision and sales make...",
    },
    {
      id: "13",
      timestamp: new Date(2025, 3, 22, 6, 15),
      query: "super agent ai presentation.",
    },
    {
      id: "14",
      timestamp: new Date(2025, 3, 22, 6, 15),
      query: "create a website for magazine.",
    },
    {
      id: "15",
      timestamp: new Date(2025, 3, 22, 6, 15),
      query: "I need a presentation for my company vision and sales make",
    },
  ]);
  const router = useRouter();

  // Group entries by date
  const groupEntriesByDate = (entries: HistoryEntry[]): GroupedEntries => {
    const grouped: GroupedEntries = {};

    entries.forEach((entry) => {
      const date = entry.timestamp;
      const isToday = new Date().toDateString() === date.toDateString();
      const dateKey = isToday
        ? "Today"
        : date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }

      grouped[dateKey].push(entry);
    });

    return grouped;
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleRerunQuery = (query: string) => {
    // In a real app, this would trigger the query to be run again
    router.push("/history/hgjkhio329852-vdklzw");
  };

  const handleMenuToggle = (id: string) => {
    // Toggle menu visibility for the entry
    setEntries(
      entries.map((entry) =>
        entry.id === id
          ? { ...entry, showMenu: !entry.showMenu }
          : { ...entry, showMenu: false }
      )
    );
  };

  const groupedEntries = groupEntriesByDate(entries);

  return (
    <div className='max-w-3xl mx-auto px-4 py-8'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6'>History</h1>

      {Object.keys(groupedEntries).map((dateKey) => (
        <div key={dateKey} className='mb-8'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>
            {dateKey}
          </h2>

          <div className='space-y-2'>
            {groupedEntries[dateKey].map((entry) => (
              <div
                key={entry.id}
                className='flex items-center justify-between py-3 border-b border-gray-100'
              >
                <div className='flex items-center space-x-3'>
                  <span className='text-sm text-gray-500 w-10'>
                    {entry.timestamp.toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    })}
                  </span>

                  <div className='flex items-center'>
                    <svg
                      className='w-4 h-4 text-gray-400 mr-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      />
                    </svg>

                    <span
                      className='text-gray-800 cursor-pointer hover:text-blue-600'
                      onClick={() => handleRerunQuery(entry.query)}
                    >
                      {entry.query}
                    </span>
                  </div>
                </div>

                <div className='relative'>
                  <button
                    onClick={() => handleMenuToggle(entry.id)}
                    className='p-1 rounded-full hover:bg-gray-100'
                  >
                    <svg
                      className='w-5 h-5 text-gray-500'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                    </svg>
                  </button>

                  {entry.showMenu && (
                    <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200'>
                      <div className='py-1'>
                        <button
                          onClick={() => handleRerunQuery(entry.query)}
                          className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                        >
                          Run again
                        </button>
                        <button
                          onClick={() => handleDeleteEntry(entry.id)}
                          className='block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100'
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {Object.keys(groupedEntries).length === 0 && (
        <div className='text-center py-12'>
          <p className='text-gray-500'>No history found</p>
        </div>
      )}
    </div>
  );
}
