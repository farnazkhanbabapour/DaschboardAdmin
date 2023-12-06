import {React,useEffect,useState} from 'react'



import "./widgetLg.css"

export default function () {

    const[getData,setGetData]= useState(false)
    const [transactions,setTransactions]= useState([])

    const Button = ({type})=>{
        return <button className={`widgetLgButton ${type}`}>{type}</button>
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://daschboard-25118-default-rtdb.firebaseio.com/transactions.json");
            const data = await response.json();
            setTransactions(Object.entries(data));
        };
    
        fetchData();
      }, [getData]);

  return (
    <div className='widgetLg'> 
        <h3 className='widgetLgTitle'>Latest TransActions</h3>
        <table className='widgetLgTable'>
            <tr className='widgetLgTr'>
               <th className='widgetLgTh'>Customer</th>
               <th className='widgetLgTh'>Date</th> 
               <th className='widgetLgTh'>Amout</th> 
               <th className='widgetLgTh'>Status</th>  
            </tr>
            
   
            {transactions.map((transaction)=>{
                     return(
                         <tr key={transaction[1].id} className='widgetLgTr'>
                         <td className='widgetLgUser'>
                             <img src={transaction[1].img} className='widgetLgImg'/>
                             <span className='widgetLgName'>{transaction[1].customer}</span> 
                         </td> 
                         <td className='widgetLgDate'>{transaction[1].date}</td> 
                         <td className='widgetLgAmount'>{transaction[1].amount}</td> 
                         <td className='widgetLgStatus'>
                            <Button type={transaction[1].status}/>
                         </td> 
                     </tr>
                      
                     )
                })}
         
        </table> 

    </div>
  )
}
