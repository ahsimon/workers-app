const fs = require('fs')
const now = Date.now();
setTimeout(() => {
  console.log('hello');
}, 50);
fs.readFile(__filename, () => {
  console.log('world');
});
setImmediate(() => {
  console.log('immediate');
});
while(Date.now() - now < 2000) 

{} // 2 second blockxc