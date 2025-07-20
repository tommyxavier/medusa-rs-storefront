// src/modules/products/components/product-preview/price.tsx
import { Text, clx } from "@medusajs/ui"
import { VariantPrice } from "types/global"

export default async function PreviewPrice({ price }: { price: VariantPrice }) {
  if (!price) {
    return null
  }

  return (
    <>
      {price.price_type === "sale" && (
        <Text
          // Mobile-first: start with a very small font, then scale up
          className="line-through text-ui-fg-muted text-[10px] xs:text-xs sm:text-sm" // Using 'xs' if defined, otherwise remove
          data-testid="original-price"
        >
          {price.original_price}
        </Text>
      )}
      <Text
        className={clx("text-ui-fg-muted text-[10px] xs:text-xs sm:text-sm", { // Using 'xs' if defined, otherwise remove
          "text-ui-fg-interactive": price.price_type === "sale",
        })}
        data-testid="price"
      >
        {price.calculated_price}
      </Text>
    </>
  )
}