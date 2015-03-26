var cb = function dataCallback(data) { // is good to give a name to the function even if it's assigned to a variable
    arguments[0] === data; // in functions you always have access to arguments array "like" object
}


/* ES6 new variable declarations
 let new variable type in javascript
 const constants

 node --harmony to use ES6 in node

 typeof 4; number
 typeof "Jordan"; string
 typeof (Number(4)); // object
 typeof dog; object
 typeof

= Module
In node the main object "Gobal" is not window, is "module"

as in the browser alert(); is assumed as window.alert();
in the same way require(); is equals to module.require();

= Export
Is what the module built for its consumers
module.exports

= NPM
package manager for javascript

Semantic Versioning
x.y.z
mayor.minor.fix

^1.2.4  = this will update this version or higher based in the less significant version in this case is the patch (4)
          so this will allow 1.2.5, 1.2.6, 1.2.6, but no 1.3.0
^1.2     = in this case the least significant is 2 , so 1.2.1, 1.2.8, 1.3.1, 1.3.4 are fine

jquery mockas = Ajax request mocking

require('mymodule') -> order to search for modules to include: "same folder" if not found searchs in "node_modules" and at the end in "node core"

= package.json
the main attibute is the attribute that node will call in order to include your module when you do require("mymodule")


= PROMISES

1 FULFILLED
2 REJECTED
3 PENDING
4 SETTLED

Node callback style cb(error) when there is an error, and cb(null, data) when no error

Q.denodify is to change the callback style

createServer accepts a callback with request and response parameters

"listen" method for server actually starts the server server.listen(port, cb);

*/
