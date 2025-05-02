"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SuccessModal from "@/components/SuccessModal";

export default function PaymentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    country: "United States",
    postalCode: "",
  });
  const [errors, setErrors] = useState<{
    email?: string;
    cardNumber?: string;
    expiry?: string;
    cvc?: string;
    postalCode?: string;
    submit?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
      setFormData({ ...formData, [name]: formatted });
      return;
    }

    if (name === "expiry") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/\//g, "")
        .replace(/^(\d{2})(\d)/, "$1/$2");
      setFormData({ ...formData, [name]: formatted });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: {
      email?: string;
      cardNumber?: string;
      expiry?: string;
      cvc?: string;
      postalCode?: string;
      submit?: string;
    } = {};

    // Email validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    // Card number validation
    if (
      !formData.cardNumber ||
      formData.cardNumber.replace(/\s/g, "").length !== 16
    ) {
      newErrors.cardNumber = "Valid card number is required";
    }

    // Expiry validation
    if (!formData.expiry || !/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      newErrors.expiry = "Valid expiry date (MM/YY) is required";
    }

    // CVC validation
    if (!formData.cvc || !/^\d{3,4}$/.test(formData.cvc)) {
      newErrors.cvc = "Valid CVC is required";
    }

    // Postal code validation
    if (!formData.postalCode) {
      newErrors.postalCode = "Postal code is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate payment processing
    try {
      // In a real app, you would call your payment API here
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setShowSuccessModal(true);
      // Redirect to success page or show success message
      //   router.push("/payment/success");
    } catch (error) {
      console.error("Payment failed:", error);
      setErrors({ submit: "Payment failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // router.push("/");
  };

  return (
    <main className='min-h-screen w-full bg-gray-50 flex items-center justify-center p-4'>
      <div className='w-full max-w-[671px] mx-auto bg-white rounded-lg shadow-lg p-6 md:p-12'>
        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Pay button */}
          <button
            type='button'
            className='w-full py-3 bg-[#20474E] text-[#FAFAFA] text-xl font-medium rounded-md hover:bg-teal-700 transition-colors'
          >
            Pay
          </button>

          <div className='text-center text-xs text-[#6E7A8A]'>
            Or Pay With Card
          </div>

          {/* Card type selector */}
          <div className='flex gap-2'>
            <div className='flex-1'>
              <div className='relative border border-gray-300 rounded-md'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <svg
                    className='h-5 w-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 2h12v1H6V6zm0 3h12v1H6V9zm0 3h6v1H6v-1z' />
                  </svg>
                </div>
                <select
                  className='block w-full pl-10 pr-3 py-3 border-0 text-[#20474E] bg-transparent focus:ring-0 focus:outline-none'
                  defaultValue='Card'
                >
                  <option>Card</option>
                </select>
              </div>
            </div>
            <button
              type='button'
              className='px-4 py-2 border border-gray-300 rounded-md text-[#20474E]'
            >
              ...
            </button>
          </div>

          {/* Email field */}
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-[#20474E] mb-1'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              className={`block w-full px-3 py-3 border text-[#20474E] placeholder:text-[#20474E] ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500`}
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
            )}
          </div>

          {/* Card number field */}
          <div>
            <label
              htmlFor='cardNumber'
              className='block text-sm font-medium text-[#20474E] mb-1'
            >
              Card number
            </label>
            <div className='relative'>
              <input
                type='text'
                id='cardNumber'
                name='cardNumber'
                placeholder='1234 1234 1234 1234'
                value={formData.cardNumber}
                onChange={handleChange}
                maxLength={19}
                className={`block w-full px-3 py-3 border text-[#20474E] placeholder:text-[#20474E] ${
                  errors.cardNumber ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500`}
              />
              <div className='absolute inset-y-0 -right-6 flex items-center'>
                <Image
                  src='/payment-method.svg'
                  alt='Credit card icons'
                  width={200}
                  height={50}
                  className='h-5'
                />
              </div>
            </div>
            {errors.cardNumber && (
              <p className='mt-1 text-sm text-red-500'>{errors.cardNumber}</p>
            )}
          </div>

          {/* Expiry and CVC */}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='expiry'
                className='block text-sm font-medium text-[#20474E] mb-1'
              >
                Expiry
              </label>
              <input
                type='text'
                id='expiry'
                name='expiry'
                placeholder='MM / YY'
                value={formData.expiry}
                onChange={handleChange}
                maxLength={5}
                className={`block w-full px-3 py-3 border text-[#20474E] placeholder:text-[#20474E] ${
                  errors.expiry ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500`}
              />
              {errors.expiry && (
                <p className='mt-1 text-sm text-red-500'>{errors.expiry}</p>
              )}
            </div>
            <div>
              <label
                htmlFor='cvc'
                className='block text-sm font-medium text-[#20474E] mb-1'
              >
                CVC
              </label>
              <input
                type='text'
                id='cvc'
                name='cvc'
                placeholder='CVC'
                value={formData.cvc}
                onChange={handleChange}
                maxLength={4}
                className={`block w-full px-3 py-3 border text-[#20474E] placeholder:text-[#20474E] ${
                  errors.cvc ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500`}
              />
              {errors.cvc && (
                <p className='mt-1 text-sm text-red-500'>{errors.cvc}</p>
              )}
            </div>
          </div>

          {/* Country and Postal code */}
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='country'
                className='block text-sm font-medium text-[#20474E] mb-1'
              >
                Country
              </label>
              <select
                id='country'
                name='country'
                value={formData.country}
                onChange={handleChange}
                className='block w-full px-3 py-3 text-[#20474E] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500'
              >
                <option value='United States'>United States</option>
                <option value='Canada'>Canada</option>
                <option value='United Kingdom'>United Kingdom</option>
                <option value='Australia'>Australia</option>
                <option value='Germany'>Germany</option>
                <option value='France'>France</option>
              </select>
            </div>
            <div>
              <label
                htmlFor='postalCode'
                className='block text-sm font-medium text-[#20474E] mb-1'
              >
                Postal code
              </label>
              <input
                type='text'
                id='postalCode'
                name='postalCode'
                placeholder='90210'
                value={formData.postalCode}
                onChange={handleChange}
                className={`block w-full px-3 py-3 border text-[#20474E] placeholder:text-[#20474E] ${
                  errors.postalCode ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500`}
              />
              {errors.postalCode && (
                <p className='mt-1 text-sm text-red-500'>{errors.postalCode}</p>
              )}
            </div>
          </div>

          {/* Submit button */}
          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full py-3 bg-[#F99F04] text-[#FAFAFA] text-lg font-medium rounded-md hover:bg-amber-600 transition-colors disabled:opacity-70'
          >
            {isSubmitting ? "Processing..." : "Subscribe"}
          </button>

          {errors.submit && (
            <div className='p-3 bg-red-100 text-red-700 rounded-md text-sm'>
              {errors.submit}
            </div>
          )}
        </form>
      </div>

      <SuccessModal isOpen={showSuccessModal} onClose={handleCloseModal} />
    </main>
  );
}
