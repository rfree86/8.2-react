// var App=React.createClass({
//   render(){
//     return(
//
//   <div>
//     <h1>Contacts</h1>
//     <ul>
//       <li>
//         <h2>James Nelson</h2>
//         <a href="mailto:james@jamesknelson.com">james@jamesknelson.com</a>
//       </li>
//       <li>
//         <h2>Joe Citizen</h2>
//         <a href="mailto:joe@example.com">joe@example.com</a>
//       </li>
//     </ul>
//   </div>
// );
// }
// });
// ReactDOM.render(<App/>, document.getElementById('react-app'));

///PART 2///




var newContact = {name: "", email: "", description:""};

//////componets//////
var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  },
//////like itemview in backbone//////
  render(){
    return(
      <li className="ContactItem">
        <h2 className="ContactItem-name">{this.props.name}</h2>
        <a className="ContactItem-email" href={"mailto:" + this.props.email}>{this.props.email}</a>
        <div className="ContactItem-description">{this.props.description}</div>
      </li>
    )
  }
})


var ContactForm = React.createClass({
  propTypes: {
    initialContact: React.PropTypes.object.isRequired,
    onSaveContact: React.PropTypes.func.isRequired,
  },

  getInitialState(){
    return {
      contact: this.props.initialContact
    }
  },

  handleChange(prop, event) {
    ///this create a new object that grabs the prop='name', email, etc and e.target.value is the current value inside the input
    var newData = _.object([prop], [event.target.value]);
    console.log(newData);
    this.setState({
      ///take whatever in currently in the input and combine into new object with properties types in the value field on the page UI
      contact: _.extend({}, this.state.contact, newData)
    })
  },

  ////this function take the typed in value on input boxes, runs it through onSaveContact
  ///which overwrites the changed values and sets that to the new initialContact
  saveContact(e){
    e.preventDefault();
    this.props.onSaveContact(this.state.contact)
    this.setState({contact: this.props.initialContact})
  },

  render(){
    ///onSubmit and onChange are built in methods
    ///bind is telling it to bind the input's name, email, or description to the [prop] of handleChange//
    return(


      <form onSubmit={this.saveContact} className="ContactForm">
        <input onChange={this.handleChange.bind(this, 'name')} className="ContacForm-name" type="text" name="name" placeholder="name (required)" value={this.state.contact.name} />
        <input onChange={this.handleChange.bind(this, 'email')} className="ContacForm-email" type="text" name="email" placeholder="email" value={this.state.contact.email} />
        <textarea onChange={this.handleChange.bind(this, 'description')} className="ContacForm-description" name="description" id="" cols="30" rows="5"
        placeholder="description" value={this.state.contact.description}></textarea>
        <button className="ContacForm-button" type="submit">add contact</button>
      </form>
    );
  }
});

///think collection view in backbone-it is a container for the list items to go in--this is the highest level "view/object on the page. everything goes inside of this"
var ContactsComponent = React.createClass ({
  propTypes: {
    initialContacts: React.PropTypes.array.isRequired
  },

  ///this is a bulit in function/////
  getInitialState(){
    return{
      newContact: {name: "", email: "", description:""},
      contacts: this.props.initialContacts
    }
  },
  submitNewContact(contact){
    contact.key= Date.now();
    console.log(contact);
///setState is a built in fucntion that works with getInitialState
    this.setState({
      ///you are adding an individual line to the ContactsComponent array
      contacts: this.state.contacts.concat([contact])
    })
  },
  render(){
    //filter the contact by whether they have an email
    //var stuff= contacts.filter(c)=>c.email;----this is the shorthand of the below function
    //console.log(stuff)
    var listElements = this.state.contacts
      .filter(function(contact){return contact.email;})
      .map(function(contact) {
        //this is a spread operator, it is a faster way of calling the contact required attributes
        return <ContactItem {...contact} />
      });

      return (
        <div>
          <h1>Contacts</h1>
          <ul>
            {listElements}
          </ul>
          <ContactForm initialContact={this.state.newContact} onSaveContact={this.submitNewContact} />
        </div>
      )
  }
});

var contacts = [
  {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
  {key: 2, name: "Jim", email: "jim@example.com"},
  {key: 3, name: "Joe"},
];




ReactDOM.render(<ContactsComponent initialContacts={contacts} />, document.getElementById("react-app"));




/////part 2 ex 1//////
