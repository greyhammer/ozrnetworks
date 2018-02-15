module.exports = function(app) {
    app.get('/deploy', (req, res) => {
        console.log('deploy get');
        res.send('deploy get');
    });
    app.post('/deploy', (req, res) => {
        console.log('deploy post');
        res.send('deploy post');
    });
    app.put('/deploy', (req, res) => {
        console.log('deploy post');
        res.send('deploy post');
    });
};
