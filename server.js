/**
 * Created by askrypai on 11/22/16.
 */
var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(__dirname));
app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/app/');
});