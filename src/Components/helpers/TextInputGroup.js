import { render } from '@testing-library/react';
import React from 'react'
import classnames from'classnames';

export default function TextInputGroup(props) {
    const {name,type,label,value,onChange,errors}=props;

    
    return  (  
                    
                    <div className="form-group">
                    <label htmlFor={name}> {label} </label>
                    <input type={type} className={classnames('form-control',
                    { 'is-invalid':errors}
                    )}
                    value={value} name={name}  onChange={onChange}  
                                     />
                      <div className="invalid-feedback">
                        {props.errors}
                        </div> 
                     </div>
                

                )
    
}
