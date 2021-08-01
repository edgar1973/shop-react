import React from 'react';

function App() {
  return (
    <div className="body-wrapper">
      <div className="header">
        <div className="container">
          <div className="header-inner">
            <div className="header-logo">Some shop</div>
            <nav className="header-nav">
              <ul>
                <li><a>главная</a></li>
                <li><a>магазин</a></li>

              </ul>
            </nav>
            <img src={"img/basket.png"} />
          </div>
        </div>
      </div>

      <div className="shop">
        <div className="container">
          <div className="shop-inner">
            <div className="shop-item">
              <div className="item-img"></div>
              <div className="item-name">Product</div>
              <div className="item-price">20 $</div>
              <button>В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
