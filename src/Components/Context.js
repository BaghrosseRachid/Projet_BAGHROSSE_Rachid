import React, { Component } from 'react'
import axios from'axios';
const Context= React.createContext(); // création de component context
const reducer = (state,action)=>{
    switch(action.type){

    case 'DELETE_CONTACT' :
        return {
            
         contacts: state.contacts.filter((contact)=> contact.id!==action.payload)
            
          };
          case 'ADD_CONTACT' :
            return {
                
             contacts: [action.payload,...state.contacts]
                
              };
              case 'UPDATE_CONTACT' :
            return {
                
             contacts: state.contacts.map(contact=> contact.id===action.payload.id ? contact=action.payload : contact)
                
              };
     default : return state;
    }
 }
export  class Provider extends Component {

    state= {
        contacts:[
          {id:"1", name:"rachid baghrosse", phone:"0610203010" ,email:"rachid98@gmail.com"},
          {id:"2", name:"achraf baghrosse", phone:"0610203011", email:"achraf98@gmail.com"},
         {id:"3", name:"taoufik baghrosse" ,phone:"0610203012" ,email:"tapoufik98@gmail.com"},
         {id:"4", name:"abdou baghrosse" ,phone:"0610203013", email:"abdou98@gmail.com"},
         {id:"4", name:"yassine alaoui" ,phone:"0610203013", email:"yassine98@gmail.com"},

      ],
        dispatch : action => this.setState(state => reducer(state,action))
      
      }
      
      async componentDidMount(){
        try{
        const res = await axios.get('http://jsonplaceholder.typicode.com/users')
            this.setState({
          contacts:res.data
        })
      }
      catch(e){
        console.log(e.error)
      }
      }
    render() {
        return (
            
             <Context.Provider value={this.state} >
                {this.props.children} 
                 </Context.Provider> 
            
        )
    }
}

 export const Consumer=Context.Consumer; // indique que le provider sera consommer ailleur