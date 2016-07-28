
var fn = () => {
  console.log('es6');
};
fn();
class student {
  hello(){
    console.log('student');
  };
}
var s = new student;
s.hello();
class leo extends student {

}
var l = new leo;
l.hello();