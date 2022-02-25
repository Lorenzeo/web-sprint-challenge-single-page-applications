import React, {useState, useEffect} from 'react'


const OrderForm = () =>{

    const [form, setForm] = useState({
        name: "",
        size: "",
        topping1: false,
        topping2: false,
        special: "",
    })

    return(
            <article>
                <p>Pizza Order Form</p>
                <form>

                    <label>
                        Name
                        <input
                            id='name-input'
                            type="text"
                            // value={values.name}
                            name='name'
                            // onChange={onChange}
                        />
                    </label>
                    <label>
                        Size
                        <input
                            id='size-dropdown'
                            type="text"
                            // value={values.name}
                            name='name'
                            // onChange={onChange}
                        />
                    </label>
                    <label>
                        Topping One
                        <input
                            type="text"
                            // value={values.name}
                            name='name'
                            // onChange={onChange}
                          />
                    </label>
                    <label>
                        Topping Two
                        <input
                            type="text"
                            // value={values.name}
                            name='name'
                            // onChange={onChange}
                        />
                    </label>
                    <label>
                        Special Instructions
                        <input 
                            id="special-text"
                            type="text"
                            name="submit"
                            // onChange={onChange}
                        />
                    </label>
                    <label>
                        Submit
                        <input 
                             id="order-button"
                             type="submit"
                             name="submit"
                             
                          // onChange={onChange}
                        />
            </label>
                        
                   
                    
                </form>
            </article>
    )
}

export default OrderForm