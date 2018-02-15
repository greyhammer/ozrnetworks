module.exports = function(app, sh) {
    app.post('/deploy', (req, res) => {
        console.log('deploy post');
        sh.exec("/var/www/ozrnetworks/bash/deploy-ozrnetworks.sh");
        res.send('deploy post');
    });
};
