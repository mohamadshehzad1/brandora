'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { headerData } from '@/data/headerData'
import useMode from '@/utils/themeMode'
import MobileNav from './MobileNav'

/**
 * Header Component
 * - Shows logo, nav links, search bar, theme switcher, and mobile menu.
 *
 * 🔧 Change logo: replace /public/logo.png with your logo file.
 */
const Header = () => {
  const { theme, setTheme, themes, hydrationError } = useMode()
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false)

  return (
    <header className="py-5 border-b border-gray-200 bg-white">
      <div className="container mx-auto font-work">
        <div className="navbar grid grid-cols-12 items-center">
          {/* Logo */}
          <div className="col-span-3">
            <Link href="/">
              {/* 👇 Replace logo.png with your own file in /public */}
              <Image
                src="/LogoDark.png"
                alt="Brandora Logo"
                width={160}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden xl:block col-span-6">
            <div className="flex items-center justify-center gap-10">
              {headerData.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="text-base text-gray-700 hover:text-primary transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Side */}
          <div className="flex items-center justify-end xl:justify-center gap-6 col-span-9 xl:col-span-3">
            {/* Search */}
            <div className="hidden sm:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
              <input
                type="text"
                className="bg-gray-100 outline-none w-28 placeholder:font-work text-gray-700"
                placeholder="Search"
              />
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>

            {/* Theme Switcher */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-7 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a9.931 9.931 0 00-7.071 2.929A9.931 9.931 0 002 12a9.931 9.931 0 002.929 7.071A9.931 9.931 0 0012 22a9.931 9.931 0 007.071-2.929A9.931 9.931 0 0022 12a9.931 9.931 0 00-2.929-7.071A9.931 9.931 0 0012 2z" />
                  </svg>
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content p-3 shadow-lg mt-5 bg-white rounded-lg w-52 max-h-80 overflow-y-auto"
              >
                {themes.map((item) => (
                  <li
                    key={item}
                    onClick={() => setTheme(item)}
                    className="capitalize flex justify-between items-center px-2 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      {hydrationError && theme === item && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.285 2L8.999 13.285 3.714 8.274 0 12l9 9 15-15z" />
                        </svg>
                      )}
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Icon */}
            <svg
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="cursor-pointer w-8 h-8 xl:hidden text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <MobileNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
    </header>
  )
}

export default Header
