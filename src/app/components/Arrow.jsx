'use client';
import Link from 'next/link';
import React, { useRef } from 'react';

const Arrow = () => {

  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
      <Link href="#experience">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Arrow;