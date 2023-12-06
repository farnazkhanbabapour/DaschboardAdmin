import {React, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {Link} from "react-router-dom";
import {products} from "../../Data";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


export default function Products() {
  const[productDatas, setProductDatas]= useState(products);

  const productDelete= (userId) =>{
    setProductDatas(productDatas.filter(productData=>productData.id !== userId))

  }


  

  const columns=[
    {
      field: 'id',
      headerName: 'ID',
      width: 200
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      renderCell:(params)=>{
        return(
          <Link to={`/product/${params.row.id}`}  className="link">
          <div className='userListUser'>
            <img src={params.row.avatar} className="userListImg" />
            {params.row.title}
          </div>
        </Link>
       
        )
      }
    },
    {
      field: 'price',
      headerName: 'Preice',
      width: 200
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell:(params)=>{
        return(
          <>
            <Link to={`/product/${params.id}`} className="link">
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon 
              className="userListDelete"
              onClick={()=>productDelete(params.row.id)}/>
          </>

        )
      }
    },
    
    
  ]

  return (
    <div className='userList'>
        <DataGrid
        rows={productDatas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />

    </div>
  
    
  )
}
