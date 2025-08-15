import { Suspense } from "react"
import { User, ShoppingBag } from "@medusajs/icons"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto bg-black">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full h-full">
          {/* Left - Brand Logo */}
          <div className="flex items-center">
            <LocalizedClientLink
              href="/"
              className="text-white text-xl font-bold tracking-wider hover:text-gray-300 transition-colors"
              data-testid="nav-store-link"
            >
              LUXURY HAIR
            </LocalizedClientLink>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <LocalizedClientLink
              href="/store"
              className="text-white text-sm font-medium uppercase tracking-wider hover:text-gray-300 transition-colors"
              data-testid="nav-shop-link"
            >
              SHOP
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/collections"
              className="text-white text-sm font-medium uppercase tracking-wider hover:text-gray-300 transition-colors"
              data-testid="nav-treatments-link"
            >
              HAIR TREATMENTS
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/categories"
              className="text-white text-sm font-medium uppercase tracking-wider hover:text-gray-300 transition-colors"
              data-testid="nav-labs-link"
            >
              STYLING GUIDE
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/search"
              className="text-white text-sm font-medium uppercase tracking-wider hover:text-gray-300 transition-colors"
              data-testid="nav-locator-link"
            >
              SALON LOCATOR
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/about"
              className="text-white text-sm font-medium uppercase tracking-wider hover:text-gray-300 transition-colors"
              data-testid="nav-about-link"
            >
              ABOUT US
            </LocalizedClientLink>
          </div>

          {/* Right - User Actions */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <LocalizedClientLink
                href="/account"
                className="text-white hover:text-gray-300 transition-colors"
                data-testid="nav-account-link"
              >
                <User size={20} />
              </LocalizedClientLink>
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="text-white hover:text-gray-300 transition-colors"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    <ShoppingBag size={20} />
                  </LocalizedClientLink>
                }
              >
                <CartButton />
              </Suspense>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <SideMenu regions={regions} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
