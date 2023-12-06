import React from 'react'
import Features from '../../components/features/Features';
import Charts from '../../components/charts/Charts';
import {xAxisData} from "../../Data";
import WidgetSm from '../../components/features/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

import "./Home.css"


export default function Home() {
  return (
    <div className='home'>
      <Features/>
      <Charts grid data={xAxisData} title="Month Sale" dataKey="Sale" />
      <div className='widget'>
        <WidgetSm /> 
        <WidgetLg />
      </div> 

    </div>
  )
}
