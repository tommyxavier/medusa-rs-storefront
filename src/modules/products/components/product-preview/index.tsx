// src/modules/products/components/product-preview/product-preview.tsx
import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products" // Assuming this path is correct
import { getProductPrice } from "@lib/util/get-product-price" // Assuming this path is correct
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper">
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="flex txt-compact-medium mt-4 justify-between">
          <Text
            // Mobile-first: start with a very small font, then scale up
            className="text-ui-fg-subtle text-[10px] xs:text-xs sm:text-sm md:text-base truncate max-w-[calc(100%-20px)]"
            data-testid="product-title"
          >
            {product.title}
          </Text>
        </div>
         <div className="flex txt-compact-medium justify-between">
          <div className="flex items-center gap-x-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}