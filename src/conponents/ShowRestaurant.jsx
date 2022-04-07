import { useEffect, useState } from "react"
import axios from 'axios'

export const ShowRestaurent = ()=>{
     const [tdata,setData] = useState([]);
     const [page,setPage] = useState();
     useEffect(()=>{
        getData();
     },[])
     const getData = ()=>{
        axios.get('http://localhost:8080/get-restaurants').then((res)=>{setData(res.data)});
     }
     
    console.log(tdata)
    

    return (
        <div>
            <div className="sorting">
                <div className="rating">
                    <div>Ratings</div>
                    <div style={{width:'100%',display:'flex',justifyContent:'space-evenly'}}>
                        <button onClick={()=>{axios.get('http://localhost:8080/get-restaurants').then((res)=>{setData(res.data.filter((e)=>{if (e.rating>=4) {return true} else{return false}}))})}}>4 and above</button>
                        <button onClick={()=>{axios.get('http://localhost:8080/get-restaurants').then((res)=>{setData(res.data.filter((e)=>{if ((e.rating>=3)&&(e.rating<4)) {return true} else{return false}}))})}}>3 and above</button>
                        <button onClick={()=>{axios.get('http://localhost:8080/get-restaurants').then((res)=>{setData(res.data.filter((e)=>{if ((e.rating>=2)&&(e.rating<3)) {return true} else{return false}}))})}}>2 and above</button>
                        <button onClick={()=>{axios.get('http://localhost:8080/get-restaurants').then((res)=>{setData(res.data.filter((e)=>{if ((e.rating>=1)&&(e.rating<1)) {return true} else{return false}}))})}}>1 and above</button>
                    <button onClick={()=>{axios.get('http://localhost:8080/get-restaurants').then((res)=>{setData(res.data)})}}>All</button>
                    </div>
                </div>
                <div>
                    <div>Payments</div>
                    <div style={{width:'100%',display:'flex',justifyContent:'space-evenly'}}>
                        <button onClick={()=>{axios.get('http://localhost:8080/get-restaurants').then((res)=>{setData(res.data.filter((e)=>{if (e.payment_methods.cash===true) {return true} else{return false}}))})}}>cash</button>
                        <button onClick={()=>{axios.get('http://localhost:8080/get-restaurants').then((res)=>{setData(res.data.filter((e)=>{if (e.payment_methods.card===true) {return true} else{return false}}))})}}>card</button>
                        <button onClick={()=>{axios.get('http://localhost:8080/get-restaurants').then((res)=>{setData(res.data.filter((e)=>{if ((e.payment_methods.cash===true)&& (e.payment_methods.card===true)) {return true} else{return false}}))})}}>all</button>
                    </div>
                    
                </div>
                <div>
                    <div>sort</div>
                    <div style={{width:'100%',display:'flex',justifyContent:'space-evenly'}}>
                        <button onClick={()=>{axios.get('http://localhost:8080/get-restaurants').then((res)=>{setData(res.data.sort((a,b)=>(a.costForTwo-b.costForT)))})}}>asc</button>
                        <button onClick={()=>{axios.get('http://localhost:8080/get-restaurants').then((res)=>{setData(res.data.sort((a,b)=>(a.costForTwo-b.costForT)))})}}>desc</button>
                    </div>
                    
                </div>
                <div></div>
                <div></div>
            </div>
            <div></div>
           <div className="main">
             {tdata.map((e)=>
                 <div key={e.id} style={{border:'1px solid gray', padding:"20px 20px 0px", borderRadius:'10px'}}>
                    <div style={{display:'flex', gap:'20px', justifyContent:'space-between'}}>
                        <div style={{display:'flex', gap:'20px'}}>
                            <div style={{height:'200px', width:'300px'}}>
                                <img style={{height:'100%', width:'100%', borderRadius:'10px'}} src={e.src} alt="" />
                            </div>
                            <div>
                                <div style={{fontSize:'20px', fontWeight:'800', color:'red'}}>{e.name}</div>
                                <div>
                                    {e.cuisine.map((el,i)=>
                                    <div key={i}>{el}</div>
                                    )}
                                </div>
                                <div>cost for two: {e.costForTwo}</div>
                                <div style={{display:'flex', gap:'10px'}}>
                                    <div>min ₹ {e.minOrder}</div>
                                    <div>-upto {e.deliveryTime} min</div>
                                </div>
                                <div>accepts: 
                                    {e.payment_methods.card?' card':''}
                                    {e.payment_methods.cash?' cash':''}
                                    {e.payment_methods.all?' all':''}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{color:'white', background:'green',fontWeight:'700', padding:'4px 6px', borderRadius:'5px' }}>{e.rating}</div>
                            <div>{e.votes} votes</div>
                            <div>{e.reviews} reviews</div>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'flex-end', borderTop:'1px solid gray', margin:'5px 0px 10px'}}>
                        <div style={{color:'green', fontWeight:'600', display:'flex'}}>order online <span style={{marginLeft:'10px'}} className="material-icons-outlined">east</span></div>
                    </div>
                 </div>
             )}
           </div>
           <div className="pages">
              
           </div>
        </div>
    )
}