import "./ProductsButton.css";


function ProductsButton() {

    return (
        <>
             <div className="getaround-container">
        <div className="getaround-button">
          <span className="getaround-text">Products</span>
        </div>
        <div className="getaround-tooltip">
          <div className="getaround-icons">
            <button className="getaround-icon-btn">
              <p>MSFS</p>
            </button>
            <button className="getaround-icon-btn">
              <p>XPLANE</p>
            </button>
          </div>
        </div>
      </div>
        </>
    )

}

export default ProductsButton;