import { FooterDataOne, FooterDataTwo } from '@/data/footerData'
import Link from 'next/link'
import React from 'react'
import NewsLetter from '@/components/molecules/newsletter/NewsLetter'

/**
 * Footer Component
 * - Displays about info, quick links, categories, newsletter, and legal links
 *
 * 🔧 Change logo: replace /public/logo.png with your own logo file.
 */
const Footer = () => {
  return (
    <footer className="bg-base-200 px-5 md:px-0 font-sans">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-12 gap-5 py-16">
          {/* About Section */}
          <div className="col-span-12 lg:col-span-3">
            <h5 className="text-lg font-semibold text-base-content">About</h5>
            <p className="mt-3 text-base text-base-content/70 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div>
              <a
                href="mailto:info@brandora.com"
                className="font-semibold text-base-content text-base"
              >
                Email:{' '}
                <span className="text-base-content/70 font-normal hover:text-primary transition">
                  info@brandora.com
                </span>
              </a>
            </div>
            <div className="mt-1">
              <a
                href="tel:880123456789"
                className="font-semibold text-base-content text-base"
              >
                Phone:{' '}
                <span className="text-base-content/70 font-normal hover:text-primary transition">
                  880 123 456 789
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links + Categories */}
          <div className="flex justify-between lg:justify-center lg:gap-20 col-span-12 lg:col-span-5">
            <div>
              <h5 className="text-base-content text-lg font-semibold">Quick Links</h5>
              <div className="flex flex-col gap-y-2 mt-6">
                {FooterDataOne.map((item: any, index: number) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-base text-base-content/70 hover:text-primary transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-base-content text-lg font-semibold">Categories</h5>
              <div className="flex flex-col gap-y-2 mt-6">
                {FooterDataTwo.map((item: any, index: number) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="text-base text-base-content/70 hover:text-primary transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-12 lg:col-span-4">
            <NewsLetter />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 md:flex-row items-center justify-between py-8 border-t border-base-content/10">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-2.5">
            <Link href="/">
              {/* 🔧 Change logo.png in public folder */}
              <img
                src="/LogoDark.png"
                alt="Brandora Logo"
                className="h-8 w-auto"
              />
            </Link>
            <div>
              <h4 className="text-xl text-base-content font-sans">Brandora</h4>
              <p className="mt-0.5 text-base-content/70 text-base">
                © {new Date().getFullYear()} Brandora. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-base-content/70">
            <Link href="/" className="text-base border-r pr-4 hover:text-primary">
              Terms of Use
            </Link>
            <Link href="/" className="text-base border-r pr-4 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/" className="text-base hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
