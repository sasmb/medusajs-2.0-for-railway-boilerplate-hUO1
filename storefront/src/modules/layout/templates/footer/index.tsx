import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Left - Social Media Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: 'ABCPermanent, Arial, sans-serif',
                fontWeight: 400,
                                            fontSize: '11px',
                            lineHeight: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              LINKEDIN
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: 'ABCPermanent, Arial, sans-serif',
                fontWeight: 400,
                                            fontSize: '11px',
                            lineHeight: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              INSTAGRAM
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: 'ABCPermanent, Arial, sans-serif',
                fontWeight: 400,
                                            fontSize: '11px',
                            lineHeight: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              FACEBOOK
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: 'ABCPermanent, Arial, sans-serif',
                fontWeight: 400,
                                            fontSize: '11px',
                            lineHeight: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              TIKTOK
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: 'ABCPermanent, Arial, sans-serif',
                fontWeight: 400,
                                            fontSize: '11px',
                            lineHeight: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              YOUTUBE
            </a>
          </div>

          {/* Right - Navigation Links */}
          <div className="flex items-center space-x-6">
            <LocalizedClientLink
              href="/store"
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: 'ABCPermanent, Arial, sans-serif',
                fontWeight: 400,
                                            fontSize: '11px',
                            lineHeight: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              OUR PRODUCTS
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/contact"
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: 'ABCPermanent, Arial, sans-serif',
                fontWeight: 400,
                                            fontSize: '11px',
                            lineHeight: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              CONTACT
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/affiliate"
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: 'ABCPermanent, Arial, sans-serif',
                fontWeight: 400,
                                            fontSize: '11px',
                            lineHeight: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              AFFILIATES
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/careers"
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: 'ABCPermanent, Arial, sans-serif',
                fontWeight: 400,
                                            fontSize: '11px',
                            lineHeight: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              CAREERS
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/about"
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: 'ABCPermanent, Arial, sans-serif',
                fontWeight: 400,
                                            fontSize: '11px',
                            lineHeight: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              ABOUT US
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/faq"
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: 'ABCPermanent, Arial, sans-serif',
                fontWeight: 400,
                                            fontSize: '11px',
                            lineHeight: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              FAQ
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/terms"
              className="text-white hover:text-gray-300 transition-colors"
              style={{
                fontFamily: 'ABCPermanent, Arial, sans-serif',
                fontWeight: 400,
                                            fontSize: '11px',
                            lineHeight: '13px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              TERMS & CONDITIONS
            </LocalizedClientLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
