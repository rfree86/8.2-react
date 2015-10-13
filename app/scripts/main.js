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

var contact = [
  {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
  {key: 2, name: "Jim", email: "jim@example.com"},
  {key: 3, name: "Joe"},
];

var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
  },
  render(){
    return(
      <li>
        <h2>{this.props.name}</h2>
        <a href={"mailto:" + this.props.email}>{this.props.email}</a>
        <p>(this.props.description)</p>
      </li>
    )
  }
})

var listElements = contact
  .filter(function(contact){return contact.email;})
  .map(function(contact) {
    return <ContactItem {...contact} />;
  });

var rootElement =(
  <div>
    <h1>Contacts</h1>
    <ul>
      {listElements}
    </ul>
  </div>
);

ReactDOM.render(rootElement, document.getElementById("react-app"))
