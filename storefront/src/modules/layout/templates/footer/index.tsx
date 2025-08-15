import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import { Text } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Our Products */}
            <div>
              <h3 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
                OUR PRODUCTS
              </h3>
              <ul className="space-y-3">
                <li>
                  <LocalizedClientLink
                    href="/store"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    All Products
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/collections"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Hair Extensions
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/categories"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Wigs & Hairpieces
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/store"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Hair Care
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
                CONTACT
              </h3>
              <ul className="space-y-3">
                <li>
                  <LocalizedClientLink
                    href="/contact"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Contact Us
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/account"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    My Account
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/search"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Find a Salon
                  </LocalizedClientLink>
                </li>
                <li>
                  <a
                    href="tel:+905338671466"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    +90 533 867 1466
                  </a>
                </li>
              </ul>
            </div>

            {/* Affiliates */}
            <div>
              <h3 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
                AFFILIATES
              </h3>
              <ul className="space-y-3">
                <li>
                  <LocalizedClientLink
                    href="/affiliate"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Become an Affiliate
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/wholesale"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Wholesale Program
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/careers"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Careers
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/partnership"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Partnership
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
                ABOUT US
              </h3>
              <ul className="space-y-3">
                <li>
                  <LocalizedClientLink
                    href="/about"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Our Story
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/faq"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    FAQ
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/terms"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/privacy"
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.542-3.293-1.445-.845-.903-1.293-2.1-1.293-3.397s.448-2.494 1.293-3.397c.845-.903 1.996-1.445 3.293-1.445s2.448.542 3.293 1.445c.845.903 1.293 2.1 1.293 3.397s-.448 2.494-1.293 3.397c-.845.903-1.996 1.445-3.293 1.445zm7.138 0c-1.297 0-2.448-.542-3.293-1.445-.845-.903-1.293-2.1-1.293-3.397s.448-2.494 1.293-3.397c.845-.903 1.996-1.445 3.293-1.445s2.448.542 3.293 1.445c.845.903 1.293 2.1 1.293 3.397s-.448 2.494-1.293 3.397c-.845.903-1.996 1.445-3.293 1.445z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <Text className="text-sm text-gray-400">
                © {new Date().getFullYear()} Luxury Hair Cyprus. All rights reserved.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
