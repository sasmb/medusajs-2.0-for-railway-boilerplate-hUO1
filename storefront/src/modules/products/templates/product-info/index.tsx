import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-ui-fg-muted hover:text-ui-fg-subtle"
            style={{
              fontFamily: 'ABCPermanent, Arial, sans-serif',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h2"
          className="text-ui-fg-base"
          data-testid="product-title"
          style={{
            fontFamily: 'TimesNow, Times New Roman, serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '32px',
            lineHeight: '36px',
            letterSpacing: '-0.01em'
          }}
        >
          {product.title}
        </Heading>

        <Text
          className="text-ui-fg-subtle whitespace-pre-line"
          data-testid="product-description"
          style={{
            fontFamily: 'ABCPermanent, Arial, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '18px',
            letterSpacing: '0.01em'
          }}
        >
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
