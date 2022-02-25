import React from 'react'


// const initialFormValues = {
//     name: '',
//     size: '',
//     password: '',
//     topping1: false,
//     topping2: false,
//     topping3: false,
//     topping4: false
//   }





const OrderForm = (props) =>{
    const{errors, values, change, submit, disabled} = props
   
    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked }= evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return(
            
                <form id = 'pizza-form'>

             <div className='errors'>
                <div>{errors.name}</div>
             </div>  
           

                    <label>
                        Name
                        <input
                            id='name-input'
                            type="text"
                            value={values.name}
                            name='name'
                            onChange={onChange}
                        />
                    </label>
                    
                    <label>
                        Size
                          <select
                            id='size-dropdown'
                            name='size'
                            value={values.size}
                            onChange={onChange}
                            >
                            <option value=''>- selection -</option>
                            <option value= 'small'> Small </option>
                            <option value= 'medium'> Medium </option>
                            <option value= 'large'> Large </option>
                            <option value= 'x-large'> Extra Large </option>
                          </select>
                    </label>
                       
{/*
                            // value={values.name}
                            // onChange={onChange} */}
                        
                   
                    <label>
                        Pepperoni
                        <input
                            type="checkbox"
                            checked={values.topping1}
                            name='topping1'
                            onChange={onChange}
                          />
                    </label>
                    <label>
                        Sausage
                        <input
                            type="checkbox"
                            checked={values.topping2}
                            name='topping2'
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Bacon
                        <input
                            type="checkbox"
                            checked={values.topping3}
                            name='topping3'
                            onChange={onChange}
                          />
                    </label>
                    <label>
                        Extra Cheese
                        <input
                            type="checkbox"
                            checked={values.topping4}
                            name='topping4'
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Special Instructions
                        <input 
                            id="special-text"
                            type="text"
                            name="instructions"
                            onChange={onChange}
                            value={values.instructions}
                        />
                    </label>
                    <label>
                        Add to Order
                        <input 
                             disabled = {disabled}
                             id="order-button"
                             type="submit"
                             name="submit"
                        />
            </label>
                        
                   
                    
                </form>
            
    )
}

export default OrderForm