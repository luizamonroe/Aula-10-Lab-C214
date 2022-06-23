require('./src/infrastructure/database');
const app = require('./src/infrastructure/rest_server');
const port = 5000

app.listen(port, () => {
    console.log('Use http://localhost:' + port);
    console.log('REST server running on port ' + port + '...');

});