import _ from 'lodash';
import printMe from './print.js';
import '../stylesheets/index.css'
import '../views/index.pug'

function component() {
  var element = document.createElement('div');
 var btn = document.createElement('button');

  element.innerHTML = _.join(['XXX', 'webpack'], ' ');

 btn.innerHTML = 'Click me and check the console!';
 btn.onclick = printMe;

 element.appendChild(btn);

if (module.hot) {
  console.log('hhh');
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}

  return element;
}

document.body.appendChild(component());