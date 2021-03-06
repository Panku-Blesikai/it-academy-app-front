var express = require('express');
var compression = require('compression');
var proxy = require('http-proxy-middleware');
var API_HOST = 'https://it-academy-app-back.herokuapp.com';
var PORT = process.env.PORT || 8080

var buildPath = 'dist/panku-blesikai'

// Initialize
var app = express();

// Serve static resources from 'build' folder
app.use(express.static(buildPath));

// Enable gzip response compression
app.use(compression());

// Enable proxy to api
app.use('/api', proxy({
    target: API_HOST,
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    }
}));

// Otherwise serve index.html
app.get('*', function (req, res) {
    res.sendFile(__dirname + "/" + buildPath + "/index.html");
});

app.listen(PORT);
