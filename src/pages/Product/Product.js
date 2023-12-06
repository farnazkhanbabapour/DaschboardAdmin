import React from 'react'
import { Link } from 'react-router-dom'
import "./Product.css";

import Charts from '../../components/charts/Charts';
import {productsData} from "../../Data";

import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h1 className='productTitle'>Product</h1>
            <Link to="/newProduct">
                <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className='productTop'>
          <div className='productTopLeft'>
            <Charts grid title="Sale In Month" data={productsData} dataKey="sales"/> 
          </div>
          <div className='productTopRight'>
            <div className='productInfoTop'>
              <img className='productInfoImg ' src="/image/dell.jpg"/>
              <spa className="productName">Dell Laptop</spa> 
            </div> 
            <div className='productInfoBottom'>
              <div className='productInfoItem'>
                <span className='productInfoKey'>ID:</span>
                <span className='productInfoValue'>132</span>
              </div> 
              <div className='productInfoItem'>
                <span className='productInfoKey'>Name:</span>
                <span className='productInfoValue'>Dell Laptop</span>
              </div> 
              <div className='productInfoItem'>
                <span className='productInfoKey'>Sales:</span>
                <span className='productInfoValue'>$9000</span>
              </div> 
              <div className='productInfoItem'>
                <span className='productInfoKey'>Active:</span>
                <span className='productInfoValue'>Yes</span>
              </div> 
              <div className='productInfoItem'>
                <span className='productInfoKey'>In Stock:</span>
                <span className='productInfoValue'>No</span>
              </div> 
            </div> 
          </div>
        </div> 
        <div className='productBottom'>
          <div className='productForm'>
            <div className='productFormLeft'>
              <label>Product Name</label> 
              <input type='text' placeholder='Dell Laptop' />
              <label>In Stock</label>
              <select>
                <option label='Yes'>Yes</option>
                <option label='No' >No</option>
              </select>
              <label>Active</label>
              <select>
                <option label='Yes'>Yes</option>
                <option label='No' >No</option>
              </select>

            </div>
            <div className='productFormRight'>
              <div className='productUploader'>
                <img src='/image/dell.jpg' className='productUploaderImg'/>
                <PublishIcon/>
                <input style={{display:"none"}}/>
              </div>
              <button className='productButton'>Upload(Edit)</button>
            </div>
          </div>
        </div>
      </div>

       

  )
}
