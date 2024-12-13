const leftPaddle = document.querySelector('.left');
const rightPaddle = document.querySelector('.right');
const ball = document.querySelector('.ball');

let leftPaddleY = 150;
let rightPaddleY = 150;
let ballX = 295;
let ballY = 195;
let ballSpeedX = 3;
let ballSpeedY = 3;

const paddleSpeed = 20;
const ballSpeed = 3;

function movePaddles() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && rightPaddleY > 0) {
      rightPaddleY -= paddleSpeed;
    }
    if (e.key === 'ArrowDown' && rightPaddleY < 340) {
      rightPaddleY += paddleSpeed;
    }
    if (e.key === 'w' && leftPaddleY > 0) {
      leftPaddleY -= paddleSpeed;
    }
    if (e.key === 's' && leftPaddleY < 340) {
      leftPaddleY += paddleSpeed;
    }
  });
}

function moveBall() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // تصادم الكرة مع الحواف
  if (ballY <= 0 || ballY >= 390) {
    ballSpeedY = -ballSpeedY;
  }

  // تصادم الكرة مع المضارب
  if (ballX <= 10 && ballY >= leftPaddleY && ballY <= leftPaddleY + 60) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballX >= 580 && ballY >= rightPaddleY && ballY <= rightPaddleY + 60) {
    ballSpeedX = -ballSpeedX;
  }

  // إعادة الكرة إذا تخطت الحدود
  if (ballX <= 0 || ballX >= 590) {
    ballX = 295;
    ballY = 195;
    ballSpeedX = 3;
    ballSpeedY = 3;
  }

  // تحديث موقع الكرة
  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';
}

function update() {
  moveBall();
  leftPaddle.style.top = leftPaddleY + 'px';
  rightPaddle.style.top = rightPaddleY + 'px';
  requestAnimationFrame(update);
}

movePaddles();
update();
