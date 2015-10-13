var App=React.createClass({
  render(){
    return(

  <div>
    <h1>Contacts</h1>
    <ul>
      <li>
        <h2>James Nelson</h2>
        <a href="mailto:james@jamesknelson.com">james@jamesknelson.com</a>
      </li>
      <li>
        <h2>Joe Citizen</h2>
        <a href="mailto:joe@example.com">joe@example.com</a>
      </li>
    </ul>
  </div>
);
}
});
ReactDOM.render(<App/>, document.getElementById('react-app'));
