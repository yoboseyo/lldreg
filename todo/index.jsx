import React from 'react';
import ReactDOM from 'react-dom';

import app from './app.js';
import Item from './item.jsx';


require('./css/base.css');
require('./css/index.css');

var section = document.createElement('section');
section.className = 'todoapp'
document.body.appendChild(section);

/*class Main extends React.Component{
  render(){
    return (
      <div>
        hello
      </div>
    )
  }
}*/
var Main = React.createClass({
  render: function(){
    var dataArr = this.props.dataArr;
    var content,footer,num=0;
    dataArr.reduce((n,item)=>{
      num = item.done ? num : num + 1;
    },0);
    console.log(num);
    if(dataArr.length !== 0){
      content = <section className="main">
        <input className="toggle-all" type="checkbox" checked={num ==0} onChange={this.toggleAll}/>
        <ul className="todo-list">
          {
            dataArr.map(function(item,index){
              return <Item key={index} {...item} toggle={app.toggle.bind(this,item.id)}  delete={app.delete.bind(this,item.id)} />
            }.bind(this)) //修改this指向

          }
        </ul>
      </section>;
      footer = <footer className="footer">
        <span className="todo-count">
          <strong>{num}</strong>
          <span>条未选中</span>
        </span>
      </footer>;
    }
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="请输入内容" defaultValue=""  onKeyDown={this.keyDownHandle} />
        </header>
        {content}
        {footer}
      </div>
    )
  },
  keyDownHandle: function(e){
    if(e.keyCode == 13){
      app.addItem(e.target.value);
      e.target.value = '';
    }

  },
  toggleAll: function(e){
    app.toggleAll(e.target.checked)
  }
});
function render (dataArr) {
  ReactDOM.render(
    <Main dataArr={dataArr} />,
    section
  );
}
render(app.dataArr);
app.render = render;
