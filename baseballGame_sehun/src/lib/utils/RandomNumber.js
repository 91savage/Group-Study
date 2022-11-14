const answer = 3;

function pickRandomNumber(answer) {
  const list = [];
  const temp = 0;

  do {
    let randomNumber = Math.floor(Math.random() * 9 + 1);
    list.push(randomNumber);
  } while (list.length == 3);
}

console.log(pickRandomNumber());
export default pickRandomNumber;
