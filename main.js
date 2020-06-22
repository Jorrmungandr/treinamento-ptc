// ============ Global Variables ============ //

const ballPos = {
  top: 15,
  left: 15,
};

let speed = 2;
let ballSize = 20;
let ballOffSet = 5;
const ballArray = [];

const friction = 0.4;

// ============ Generate Food ============ //

for (let i = 0; i < 10; i++) {
  const randomHeight = Math.floor(Math.random() * window.innerHeight - (ballSize + 10));
  const randomWidth = Math.floor(Math.random() * window.innerWidth - (ballSize + 10));
  const food = document.createElement('div');
  food.id = `food-${Math.floor(Math.random() * 10 ** 10)}`;
  food.className = 'food';
  food.style.top = randomHeight + 'px';
  food.style.left = randomWidth + 'px';
  ballArray.push({
    id: food.id,
    top: randomHeight,
    left: randomWidth,
    active: true,
  });
  document.body.appendChild(food);
};

// ============ Ball Movement ============ //

const movementVector = [0, 0];

const keys = [];

// Add key pressed to keys
window.addEventListener('keydown', (event) => {
  const { key } = event;

  if (keys.indexOf(key) === -1) keys.push(key);
});

// Remove key pressed from keys
window.addEventListener('keyup', (event) => {
  const { key } = event;

  const index = keys.indexOf(key);

  if (index !== -1) keys.splice(index, 1);
});

setInterval(() => {
  const up = keys.includes('w');
  const left = keys.includes('a');
  const down = keys.includes('s');
  const right = keys.includes('d');

  const forceVector = [+up, +left, +down, +right];

  movementVector[0] += forceVector[3] * 0.1;
  movementVector[1] += forceVector[0] * 0.1;
  movementVector[0] -= forceVector[1] * 0.1;
  movementVector[1] -= forceVector[2] * 0.1;
}, 10);

// ============ Apply Movement Vector ============ //

setInterval(() => {
  const ball = document.querySelector('.ball');
}, 10)