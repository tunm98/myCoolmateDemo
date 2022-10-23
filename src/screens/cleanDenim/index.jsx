import React from "react"
import cleanDenimData from ".././cleanDenim/data.json"
import CategoryItem from "../../components/detailCategories/categoryItem"
import "./styles.css"

const CleanDenim = () => {
  return (
    <div className="cleanDenim">
      <h1>Quần Jeans Nam</h1>
      <div className="jeans-container flex">
        <div className="jeans-holder flex">
          <div className="jeans">
            <img src="https://media.coolmate.me/cdn-cgi/image/quality=80/uploads/June2022/jeans.jpg" />
          </div>
          {cleanDenimData.cleanDenim.map((product, index) => (
            <div key={JSON.stringify(product)} className="jeans-item">
              <CategoryItem child1={product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CleanDenim
