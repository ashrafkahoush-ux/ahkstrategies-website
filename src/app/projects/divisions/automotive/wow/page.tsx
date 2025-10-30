'use client';

import Image from 'next/image';

export default function WowPage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      {/* Teaser Section */}
      <div className="text-center p-8 bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Wow Electric Motorbikes – Investor Inquiries Open Soon!
        </h1>
        <p className="text-gray-700 mb-6">Sign up for details on MENA opportunities.</p>
        <form className="max-w-md mx-auto flex gap-2">
          <input 
            type="email" 
            placeholder="Your email" 
            className="border border-gray-300 p-2 rounded flex-1 text-gray-900" 
            required
          />
          <button 
            type="submit"
            className="bg-blue-500 text-white p-2 px-6 rounded hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      {/* WOW MENA Infographic */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            WOW MENA 5-Year Infographic Summary
          </h2>
          <div className="relative w-full bg-white rounded-lg shadow-2xl overflow-hidden p-4">
            <Image
              src="/assets/wow/infographic.png"
              alt="Wow Summary - MENA 5-Year Infographic"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
