import React from "react"
import "./styles.css"
import ProductData from ".././features/excoolData.json"
import CategoryItem from "../../../components/detailCategories/categoryItem"
const Products = () => {
  return (
    <div className="product-container-holder">
      <h1>Dòng sản phẩm Công nghệ Excool</h1>
      <div className="product-container flex">
        {ProductData.excool.products.map((product, index) => (
          <div className="product-holder" key={JSON.stringify(product)}>
            <CategoryItem child1={product} index={index} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
