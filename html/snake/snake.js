window.onload = function() {
    var cvs = document.getElementById('canvas');
    var ctx = cvs.getContext('2d');
    var cvsW = cvs.width;
    var cvsH = cvs.height;
    var snakeW = 10;
    var snakeH = 10;
    var score = 4;
    var direction = 'right';
    var len = 4;
    var snake = [];
    var food = {
        x : 20,
        y : 20
    };
    var speed = 90;

    document.addEventListener('keydown', getDirection);

    for (var i = len-1; i>=0; i--){
        snake.push(
            {x:i,
                y:0
            }
        );
    }

    function getDirection(e){
        if (e.keyCode === 37 && direction !== 'right') {
            direction = 'left';
        } else if (e.keyCode === 38 && direction !== 'down') {
            direction = 'up';
        } else if (e.keyCode === 39 && direction !== 'left') {
            direction = 'right';
        } else if (e.keyCode === 40 && direction !== 'up') {
            direction = 'down';
        }
    }

    function drawSnake(x,y) {
        ctx.fillStyle = '#fff';
        ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);

        ctx.fillStyle = '#000';
        ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
    }

    function newFood() {
        food = {
            x : Math.floor(Math.random() * (cvsW / snakeW) - 1) + 1,
            y : Math.floor(Math.random() * (cvsH / snakeH) - 1) + 1
        }
    }

    function drawFood(x,y) {
        ctx.fillStyle = '#ffff00';
        ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);

        ctx.fillStyle = '#000';
        ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
    }

    function checkCollision (x, y, array){
        for (var i = 1; i < array.length; i++) {
            if (x === array[i].x && y === array[i].y) {
                return true;
            }
        }
        return false;
    }

    function drawScore(x) {
        ctx.fillStyle = '#ffff00';
        ctx.font = '15px Open Sans';
        ctx.fillText('score : ' + x, 5, cvsH - 5);
    }

    function draw(){
        ctx.clearRect(0,0,cvsW,cvsH);
        for(var i=0; i<snake.length; i++) {
            var x = snake[i].x;
            var y = snake[i].y;
            drawSnake(x,y);
        }

        drawFood (food.x, food.y);

        var snakeX = snake[0].x;
        var snakeY = snake[0].y;

        if (snakeX < 0 || snakeY < 0 || snakeX >= cvsW/snakeW || snakeY >= cvsH/snakeH || checkCollision (snakeX, snakeY, snake)) {
            setTimeout(function(){
                window.location.reload();
            },100);
        }

        if (direction === 'left') snakeX--;
        else if (direction === 'up') snakeY--;
        else if (direction === 'right') snakeX++;
        else if (direction === 'down') snakeY++;

        var newHead = {};

        if (snakeX === food.x && snakeY === food.y){
            newFood();
            newHead = {
                x : snakeX,
                y : snakeY
            };
            score++;
        } else {
            snake.pop();

            newHead = {
                x : snakeX,
                y : snakeY
            };
        }

        snake.unshift(newHead);
        drawScore(score);
    }

    setInterval(draw, speed);
};
