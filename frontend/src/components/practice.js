function fin(ops) {
    var result = 0;
  let score = [];
  for (let i = 0; i < ops.length; i++) {
    if (!isNaN(ops[i])) {
      score.push(parseInt(ops[i]));
    } else if (ops[i] == "+") {
      score.push(parseInt(score[score.length - 2]) + parseInt(score[score.length - 1]));
    } else if (ops[i] == "D") {
      score.push(2 * parseInt(score[score.length - 1]));
    } else if (ops[i] == "C") {
      score.pop();
    } else {
      console.log("undefined");
    }
    }
     result = score.reduce((a, b) => a + b, 0);
    return result;
}
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
// console.log(fin(["5", "2","C","D","+"]));
