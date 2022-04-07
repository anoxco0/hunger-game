import './addRestaurant.css'

export const AddRestaurant = ()=>{
    
    return (
        <div>
            <form action="">
                <label htmlFor="">Restaurant Name</label>
                <input type="text" name="" id="name" />

                <div style={{marginBottom:'20px'}}>
                    <label htmlFor="">Cuisine</label>
                    <input type="checkbox" name="" id="cuisine" value="continental"  />
                    <input type="checkbox" name="" id="cuisine" value="Asian" />
                    <input type="checkbox" name="" id="cuisine" value="Pizza" />
                    <input type="checkbox" name="" id="cuisine" value="Deserts" />
                </div>
                
                <label htmlFor="">cost for two</label>
                <input type="text" name="" id="costForTwo" />

                <label htmlFor="">Min Order</label>
                <input type="text" name="" id="minOrder" />

                <label htmlFor="">Delivery Time</label>
                <input type="text" name="" id="deliveryTime" />

               <div style={{marginBottom:'20px'}}>
                    <label htmlFor="">Payment Mehods</label>
                    <input type="checkbox" name="" id="payment_methods" value='card'  />
                    <input type="checkbox" name="" id="payment_methods" value='cash' />
                    <input type="checkbox" name="" id="payment_methods" value='all' />
               </div>

                <label htmlFor="">Rating</label>
                <input type="text" name="" id="rating" />

                <label htmlFor="">votes</label>
                <input type="text" name="" id="votes" />

                <label htmlFor="">reviews</label>
                <input type="text" name="" id="reviews" />

                <label htmlFor="">Image</label>
                <input type="text" value="" id="src"  />

                <button>Submit</button>
            </form>
            

        </div>
    )
}