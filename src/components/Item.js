import React from 'react'
import { Link, useHistory } from "react-router-dom";

export default function Item(props) {
  return (
    <div class="product-item card text-center">
      <Link to='/detail/1'><img src="images/product-1.png" /></Link>
      <h4><a href="#">{props.data.name}</a></h4>
      <p>Giá Bán: <span>{props.data.price} $</span></p>
    </div>
  )
}
