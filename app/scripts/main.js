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



var contacts = [
  {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
  {key: 2, name: "Jim", email: "jim@example.com"},
  {key: 3, name: "Joe"},
];
var newContact = {name: "", email: "", description:""};


var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  },
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
    contact: React.PropTypes.object.isRequired
  },
  render(){

    return(
      <form className="ContactForm">
        <input className="ContacForm-name" type="text" name="name" placeholder="name (required)" value={this.props.contact.name}></input>
        <input className="ContacForm-email" type="text" name="email" placeholder="email" value={this.props.contact.email}></input>
        <textarea className="ContacForm-description" name="description" id="" cols="30" rows="5"
        placeholder="description" value={this.props.contact.description}></textarea>
        <button className="ContacForm-button" type="submit">add contact</button>
      </form>
    )
  }
})
//filter the contact by whether they have an email
//var stuff= contacts.filter(c)=>c.email;----this is the shorthand of the below function
//console.log(stuff)
var listElements = contacts
  .filter(function(contact){return contact.email;})
  .map(function(contact) {
    //this is a spread operator, it is a faster way of calling the contact required attributes
    return <ContactItem {...contact} />;
  });

var rootElement =(
  <div className="ContactView">
    <h1 className="ContactView-title">Contacts</h1>
    <ulclassName="ContactView-list">
      {listElements}
    </ul>
    <ContactForm contact={newContact} />
  </div>
);


ReactDOM.render(rootElement, document.getElementById("react-app"))
