var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = React.createClass({
  render: function(){
    return (
      <h1>hello world</h1>
    )
  }
});
var div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(
  <HelloWorld />,
  div
);