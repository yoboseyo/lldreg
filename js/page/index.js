var FormApp = React.createClass({
  render: function(){
    return <form className="row text-center form-sign-up" method="" action="">
      <div className="form-group col-xs-10 col-xs-offset-1">
        <input className="form-control" type="text" placeholder="请输入用户名"/>
      </div>
      <div className="form-group col-xs-10 col-xs-offset-1">
        <input className="form-control" type="text" placeholder="请输入密码"/>
      </div>
      <VerifySec/>
      <div className="col-xs-10 col-xs-offset-1">
        <button className="col-xs-12 btn btn-primary" type="submit">注册</button>
      </div>

    </form>
  }
});
var VerifySec = React.createClass({
  render: function(){
    return <div className="form-group col-xs-10 col-xs-offset-1 verify">
      <input className="form-control" type="text" placeholder="请输入验证码"/>
      <button className="btn btn-primary" type="button">获取验证码</button>
    </div>
  }
});

ReactDOM.render(
  <FormApp />,
  document.getElementById('wrapper')
);