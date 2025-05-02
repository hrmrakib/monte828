"use client";

import { useState } from "react";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState("Basic");

  const plans = [
    {
      name: "Basic",
      price: "$9.99",
      features: ["Create Presentation", "Design Visual Story"],
    },
    {
      name: "Standard",
      price: "$9.99",
      features: [
        "Create Presentation",
        "Design Visual Story",
        "Generate Infographics",
        "Build Dashboard",
      ],
    },
    {
      name: "Premium",
      price: "$9.99",
      features: [
        "Create Presentation",
        "Design Visual Story",
        "Generate Infographics",
        "Build Dashboard",
        "Convert To Social Stories",
        "Create Digital Magazines",
      ],
    },
  ];

  return (
    <main className='min-h-screen w-full bg-[#FFFDF7] text-gray-800 p-4 md:p-8'>
      <div className='max-w-6xl mx-auto'>
        {/* Mobile Menu Icon */}
        <div className='flex items-center justify-between mb-8'>
          <button className='text-gray-700 md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>

        {/* Heading */}
        <h1 className='text-3xl md:text-4xl font-bold text-center text-[#20474E] mb-8'>
          Upgrade Your Plan
        </h1>

        {/* Plan Selector */}
        <div className='relative mx-auto mb-12 max-w-md'>
          <div className='bg-[#20474E] rounded-full p-1 flex'>
            {plans.map((plan) => (
              <button
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`flex-1 py-2 px-4 rounded-full text-center transition-all duration-200 ${
                  selectedPlan === plan.name
                    ? "bg-amber-500 text-white font-medium"
                    : "text-white"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className='flex flex-col border border-[#6E7A8A] rounded-lg p-6 hover:shadow-lg transition-shadow'
            >
              <h2 className='text-2xl font-medium text-[#20474E] mb-1.5'>
                {plan.name}
              </h2>
              <div className='mb-4'>
                <span className='text-[40px] font-semibold text-[#20474E]'>
                  {plan.price}
                </span>
                <span className='text-[30px] font-medium text-[#20474E]'>
                  /mo
                </span>
              </div>
              <ul className='flex-1 mb-8 space-y-3'>
                {plan.features.map((feature, index) => (
                  <li key={index} className='flex items-start'>
                    <span className='text-amber-500 mr-2'>•</span>
                    <span className='text-lg text-[#20474E]'>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className='w-full py-3 px-4 bg-[#F99F04] hover:bg-[#f99f04c4] text-[#FAFAFA] font-medium rounded-md transition-colors'>
                Upgrade to Plus
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
