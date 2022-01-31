function fin(ops) {
  let score = [];
  for (let i = 0; i < score.length; i++) {
    if (!isNaN(ops[i])) {
      score.push(ops[i]);
    } else if (ops[i] == "+") {
      score.push(parseInt(score.length - 2) + parseInt(score.length - 1));
    } else if (ops[i] == "D") {
      score.push(2 * parseInt(score.length - 2));
    } else if (ops[i] == "C") {
      score.pop();
    } else {
      console.log("undefined");
    }
  }
}
