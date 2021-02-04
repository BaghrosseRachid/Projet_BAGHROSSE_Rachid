import React, { Component } from 'react'
import {Consumer} from './Context'
import TextInputGroup from './helpers/TextInputGroup';
import axios from 'axios'

class EditContact extends Component {
    state={
        name : '',
        phone:'',
        email:'',
        error :{}
    }
     async componentDidMount(){
         const id= this.props.match.params.id
         const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        this.setState({
        name:res.data.name,
        email:res.data.email,
        phone:res.data.phone

        })

     }
    onChangeInput=(e) =>this.setState({[e.target.name]:e.target.value})
    
     submit= async (dispatch,size,e)=>{
         const{name,email,phone,error}=this.state;
       e.preventDefault();
       if(name==""){
           this.setState({
            error:{name:"the name  is required!"}
           })
           return;
       }
       if(email==""){
        this.setState({
         error:{email: "the email is required!"}

        })
        return;
    }
    if(phone==""){
        this.setState({
         error:{phone:"the phone is required!"}

        })
        return;
    }
    const UpDateContact = {
        name,
        email,
        phone
    }
    const id= this.props.match.params.id;
    try{
      const res= await axios.put(`http://jsonplaceholder.typicode.com/users/${id}`,UpDateContact)
        dispatch({     
        type: "UPDATE_CONTACT",
        payload:res.data
        
                })
            }
            catch(e){
                console.log(e.error)
              }
        

    this.setState({
        name : '',
        phone:'',
        email:'',
        error:{} 
    })
    this.props.history.push('/');
     }

    render() {
       const{name,phone,email,error}=this.state;
       return(
        <Consumer>
          {value=>{
                     const {dispatch}= value;

              return (
               
                    <div>
                    <form onSubmit={this.submit.bind(this,dispatch,value.contacts.length)}>
                    <div className="card">
                        <div class="card-body">
                            <h4 class="card-title">Modifier contact</h4>
                            <div class="card-text">
                            <TextInputGroup 
                                    label="Name"
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={this.onChangeInput} 
                                    errors={error.name}
                                    />

                         <TextInputGroup 
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={this.onChangeInput}
                                    errors={error.email}

                           />
                         <TextInputGroup 
                                    label="phone"
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    onChange={this.onChangeInput}
                                    errors={error.phone}

                           />
                            <button className="btn-danger btn-block">Update contact</button>

                            </div>
                        </div>
                    </div>
                    </form>                               
                </div>
                

    

)
              
          }
          
          
          }

        </Consumer>

       )
       
    }
}
export default EditContact;
