import {React, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from "../../Data";
import {Link} from "react-router-dom"
import "./UserList.css"

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function UserList() {

  const [userDatas,setUserDatas]= useState(userRows)

  const userDelet= (userId)=>{
    setUserDatas(userDatas.filter((userData)=>{
      return(userData.id != userId)
    }))
  }

  const columns= [
    {
      field: 'id',
      headerName: 'ID',
      width: 200
    },
    {
      field: 'User',
      headerName: 'User',
      width: 200,
      renderCell:(params)=>{
        return(
          <Link to="/" className='link'>
            <div className='userListUser'>
              <img src={params.row.avatar} className="userListImg" />
              <spa>{params.row.username}</spa>
            </div>
          </Link>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 200
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell:(params)=>{
        console.log(params)
        return(
          <>
            <Link to={`user/${params.row.id}`} className="link"> 
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineIcon 
                className="userListDelete"
                onClick={() => userDelet(params.row.id)} />
          </>
        )
      }
    },
  ]

  return (
    <div className='userList'>
      <DataGrid
      rows={userDatas}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 3,
          },
        }
      }}  
      />

    </div>

   
  )
}
