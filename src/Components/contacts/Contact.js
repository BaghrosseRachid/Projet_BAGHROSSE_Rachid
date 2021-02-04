import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Consumer} from '../Context'
import axios from 'axios'
//import './contact.css';
import {Link} from 'react-router-dom'

 class Contact extends Component {
state = {
    changeSt : true
}

    myfonction(contac) {
        //window.alert('hello  '+ contac);
        this.setState({
            changeSt: !this.state.changeSt
        })
    }
     deleteCon =  async (id,dispatch)=> {
         try{
        const res =  await axios.delete('http://jsonplaceholder.typicode.com/users/'+id)
                     dispatch({
                     type:'DELETE_CONTACT',
                    payload: id
             })
            }
            catch(e){
                console.log(e.error)
              }
            

     
      
    }
    render() {
        const {id,name,phone,email}=this.props.data;
       return(
        <Consumer>
        {value =>{
            const { dispatch }= value;
        return(
           <div className="card">
           <div className="card-body">
               <h4 className="card-title">
                   
                   {name} <i onClick={this.myfonction.bind(this,name)} style={{cursor:"pointer"}}  className="fa fa-sort-desc" ></i>

                   <Link to={`/contact/edit/${id}`}>  
                   <i class="fa fa-pencil" aria-hidden="true"
                   style={{
                        color:"yellow",
                        float:"right",
                        cursor:"pointer",
                        marginLeft:"5px"
                   }}
                   
                   ></i>
                   </Link>
                   <i onClick={this.deleteCon.bind(this,id,dispatch)} style={{ color:"red", float:"right", cursor:"pointer", marginRight:"7px" }} className="fa fa-times" aria-hidden="true"></i>

                   </h4>
               <p className="card-text">
                   {(this.state.changeSt)?(
                       <ul className="list-group">
                     
                     <li className="list-group-item">{phone}</li>
                     <li className="list-group-item">{email}</li>
                    
                 </ul>
       
                   ):null}
                   
                </p>
            </div>
            </div>
        )
                   }
              }   
             </Consumer>
       )
    }
    
    }       

Contact.defaultProps= {
name: "default name",
phone:"0000000000",
email:"defaultemail@gmail.com"

}
Contact.propTypes={
    data : PropTypes.object.isRequired,

}

export default Contact; 
