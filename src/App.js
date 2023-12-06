import React from 'react'
import {useRoutes} from "react-router-dom"

import routes from './routes'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/topbar/sidebar/Sidebar'

export default function App() {

  let routers = useRoutes(routes)

  return (
    <div>
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        {routers}
      </div>
    </div>
  )
}
