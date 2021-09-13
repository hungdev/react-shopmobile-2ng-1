import React, { useEffect, useState } from 'react'
import { getCategories } from '../services/Api'

export default function Menu() {
  const [listCategories, setListCategories] = useState([])

  useEffect(() => {
    const getCategory = async () => {
      const result = await getCategories()
      setListCategories(result.data.data)
    }
    getCategory()
  }, [])

  return (
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <nav>
          <div id="menu" class="collapse navbar-collapse">
            <ul>
              {listCategories.map(e => <li class="menu-item"><a href="#">{e.name}</a></li>)}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}
