import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { getMovie, getProducts } from '../services/Api'
import ClipLoader from "react-spinners/ClipLoader";
import ProductItem from '../components/Item'

export default function Product() {
  const history = useHistory();

  const [loading, setLoading] = useState(false)
  const [productList, setProductList] = useState([])


  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      try {
        const result = await getProducts()
        setLoading(false)
        setProductList(result.data.data)
        console.log('result', result)
      } catch (error) {
        setLoading(false)
      }
    }

    getProduct()
  }, [])


  const onMoveToDetail = (e) => {
    //do something here before pushing
    e.preventDefault()
    history.push({ pathname: "/detail/1", state: { id: 1 } });
  }

  return (
    <>
      <div class="products">
        <div className="sweet-loading">
          <ClipLoader color={'green'} loading={loading} size={50} />
        </div>
        <h3>Sản phẩm nổi bật</h3>
        <div class="product-list card-deck">
          {productList?.map(e => <ProductItem data={e} />)}
        </div>
      </div>
    </>
  )
}
