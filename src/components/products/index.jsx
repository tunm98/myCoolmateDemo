import "./styles.css"
import Data from "./products.json"
import Types from "./types.jsx"

export default function Products() {
  const basics = Data.products.basics
  const choices = Data.products.choices

  return (
    <div className="products flex">
      <div className="basics flex">
        <p>Coolmate Basics</p>
        <div className="basics-holder flex">
          {basics.map((product, index) => (
            <div key={index} className="basic-item">
              <img src={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="exp-holder">
        <p className="text">
          Dòng sản phảm mặc cơ bản <span>chất lượng tốt</span> và{" "}
          <span>giá rẻ</span> của Coolmate
        </p>
        <button className="flex middle">Trải nghiệm</button>
      </div>
      <div className="choices-holder flex">
        {choices.map((choice, index) => (
          <Types choice={choice} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}
