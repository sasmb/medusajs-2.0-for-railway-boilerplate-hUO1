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
      <header className="relative h-12 mx-auto bg-transparent">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full h-full">
          {/* Left - Brand Logo Only */}
          <div className="flex items-center">
            <LocalizedClientLink
              href="/"
              className="text-white text-xl font-bold tracking-wider hover:text-gray-300 transition-colors"
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' }}
              data-testid="nav-store-link"
            >
              LUXURY HAIR
            </LocalizedClientLink>
          </div>

          {/* Right - Navigation + Icons */}
          <div 
            className="flex items-center space-x-8 px-6 py-2 rounded-sm"
            style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' }}
          >
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <LocalizedClientLink
                href="/store"
                className="text-black hover:text-gray-600 transition-colors"
                style={{
                  fontFamily: 'ABCPermanent, Arial, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '11px',
                  lineHeight: '13px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
                data-testid="nav-shop-link"
              >
                SHOP
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/about"
                className="text-black hover:text-gray-600 transition-colors"
                style={{
                  fontFamily: 'ABCPermanent, Arial, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '11px',
                  lineHeight: '13px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
                data-testid="nav-about-link"
              >
                ABOUT US
              </LocalizedClientLink>
            </div>

            {/* User Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              <LocalizedClientLink
                href="/account"
                className="text-black hover:text-gray-600 transition-colors"
                style={{ filter: 'none' }}
                data-testid="nav-account-link"
              >
                <User size={16} />
              </LocalizedClientLink>
              <Suspense
                fallback={
                  <LocalizedClientLink
                    className="text-black hover:text-gray-600 transition-colors"
                    href="/cart"
                    data-testid="nav-cart-link"
                  >
                    <ShoppingBag size={16} />
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
