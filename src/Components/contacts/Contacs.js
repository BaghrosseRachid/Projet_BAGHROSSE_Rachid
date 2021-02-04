import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer} from '../Context'

class Contacs extends Component {
supprimer(id) {
const {contacts}=this.state;
  const newContacts=contacts.filter((contact)=>contact.id!==id)
this.setState({
  contacts:newContacts
})

}
    render() {

      return (
        <Consumer>
        {value =>(
                  <div>
                  {value.contacts.map((contact)=>(   // fonction map((variable qui prend a chaque fois les infos d'un ligne))
                      <Contact key={contact.id} data={contact}
                      onDeleteOrder={this.supprimer.bind(this,contact.id)}
               /*  name={contact.name}
                 tel={contact.tel}
                 email={contact.email}*/
                 />
    
                  ) )}  
                </div>

        )
    }


        </Consumer>
      )
        
    }
}
export default Contacs;