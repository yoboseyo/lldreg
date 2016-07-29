import {store} from './util.js';
let app = {
  dataArr: [],
  info: function(){
    store('todo', app.dataArr);
  },
  addItem: function(value){
    app.dataArr.push({
      id: Date.now(),
      content: value,
      done: false,
    });
    app.render(app.dataArr);
    app.info();
  },
  toggleAll: function(b){
  /*  app.dataArr.forEach((item)=>{
      item.done = b;
    });*/
    app.dataArr.map(function(item, index){
      item.done = b;
    });
    app.render(app.dataArr);
    app.info();
  },
  toggle: function(id){
    app.dataArr.map((item, index)=>{
      if(item.id == id){
        item.done = !item.done;
      }
    });
    app.render(app.dataArr);
    app.info();
  },
  delete: function(id){
    app.dataArr.map((item, index)=>{
      if(item.id == id){
        app.dataArr.splice(index,1);
      }
    });
    app.render(app.dataArr);
    app.info();
  }
};
app.dataArr = store('todo') || [];
export default app;