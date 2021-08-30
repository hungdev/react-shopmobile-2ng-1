import React from 'react'
import { Link, useHistory } from "react-router-dom";

export default function Product() {
  const history = useHistory();

  const onMoveToDetail = (e) => {
    //do something here before pushing
    e.preventDefault()
    history.push({ pathname: "/detail/1", state: { id: 1 } });
  }

  return (
    <>
      <div class="products">
        <h3>Sản phẩm nổi bật</h3>
        <div class="product-list card-deck">
          <div class="product-item card text-center">
            <Link to='/detail/1'><img src="images/product-1.png" /></Link>
            <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
            <p>Giá Bán: <span>32.990.000đ</span></p>
          </div>
          <div class="product-item card text-center" onClick={onMoveToDetail}>
            <a href="#"><img src="images/product-2.png" /></a>
            <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
            <p>Giá Bán: <span>32.990.000đ</span></p>
          </div>
          <div class="product-item card text-center">
            <a href="#"><img src="images/product-3.png" /></a>
            <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
            <p>Giá Bán: <span>32.990.000đ</span></p>
          </div>
        </div>
        <div class="product-list card-deck">
          <div class="product-item card text-center">
            <a href="#"><img src="images/product-4.png" /></a>
            <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
            <p>Giá Bán: <span>32.990.000đ</span></p>
          </div>
          <div class="product-item card text-center">
            <a href="#"><img src="images/product-5.png" /></a>
            <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
            <p>Giá Bán: <span>32.990.000đ</span></p>
          </div>
          <div class="product-item card text-center">
            <a href="#"><img src="images/product-6.png" /></a>
            <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
            <p>Giá Bán: <span>32.990.000đ</span></p>
          </div>
        </div>
      </div>
      {/* <!--	End Feature Product	--> */}

      {/* <!--	Latest Product	--> */}
      <div class="products">
        <h3>Sản phẩm mới</h3>
        <div class="product-list card-deck">
          <div class="product-item card text-center">
            <a href="#"><img src="images/product-7.png" /></a>
            <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
            <p>Giá Bán: <span>32.990.000đ</span></p>
          </div>
          <div class="product-item card text-center">
            <a href="#"><img src="images/product-8.png" /></a>
            <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
            <p>Giá Bán: <span>32.990.000đ</span></p>
          </div>
          <div class="product-item card text-center">
            <a href="#"><img src="images/product-9.png" /></a>
            <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
            <p>Giá Bán: <span>32.990.000đ</span></p>
          </div>
        </div>
        <div class="product-list card-deck">
          <div class="product-item card text-center">
            <a href="#"><img src="images/product-10.png" /></a>
            <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
            <p>Giá Bán: <span>32.990.000đ</span></p>
          </div>
          <div class="product-item card text-center">
            <a href="#"><img src="images/product-11.png" /></a>
            <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
            <p>Giá Bán: <span>32.990.000đ</span></p>
          </div>
          <div class="product-item card text-center">
            <a href="#"><img src="images/product-12.png" /></a>
            <h4><a href="#">iPhone Xs Max 2 Sim - 256GB</a></h4>
            <p>Giá Bán: <span>32.990.000đ</span></p>
          </div>
        </div>
      </div>
    </>
  )
}
