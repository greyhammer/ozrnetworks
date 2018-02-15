module.exports = function(app, sh) {
    app.post('/deploy', (req, res) => {
        console.log('deploy post');
        sh.echo('hello world');
        sh.exec(../../../bash/deploy-ozrnetworks.sh);
        res.send('deploy post');
    });
};
