/**
 * Let's make a game 🕹
 */
const position = { x: 0, y: 0 };
console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}


type Dereaction = 'up' | 'down' | 'left' | 'right';

function move(direction:Dereaction) {
    if (direction === 'up') {
        position.x++;
    } else if (direction === 'down') {
        position.x--;
    } else if (direction === 'left') {
        position.y--;
    } else if (direction === 'right') {
        position.y++;
    }
}