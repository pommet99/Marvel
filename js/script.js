var api = require('marvel-api.json');
 
var marvel = api.createClient({
  publicKey: '61cb3c599072a3a4623eb40887c3a07e'
});

marvel.characters.findAll()
  .then(console.log)
  .fail(console.error)
  .done();

  marvel.characters.findAll()
  .then(console.log)
  .fail(console.error)
  .done();