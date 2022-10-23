import React from "react"
import { useParams } from "react-router-dom"
import Data from "../../components/detailCategories/categories"
import DetailItem from "../../components/detailProduct"

export default function DetailProduct() {
  const { productId, selectedIndex } = useParams()
  const thisProduct = Data.categories[selectedIndex].children1

  const productDetail = thisProduct.find(
    (product) => product.id.toString() === productId.toString()
  )

  return (
    <div>
      <DetailItem data={productDetail} />
    </div>
  )
}
