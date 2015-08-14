var nopt = require('nopt');
var request = require('request-promise');

// CLI options we care about.
var known = {
    'port': Number,
    'host': String,
    'client-id': String,
    'client-secret': String,
    'grant-type': String,
    'token-endpoint': String
};

var aliases = {
    p: '--port',
    h: '--host',
    ci: '--client-id',
    cs: '--client-secret',
    g: '--grant-type',
    t: '--token-endpoint'
};

// Parse them and return an options object.
var options = nopt(known, aliases);
var authTokenRequest = {
    url: options.host + options['token-endpoint'],
    auth: {
        user: options['client-id'],
        pass: options['client-secret']
    },
    qs: {
        'grant_type': options['grant-type']
    }

};

request.post(authTokenRequest).then(function (body) {
    console.log(body);
}).catch(function (err) {
    console.log(err);
});