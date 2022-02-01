// var isValid = function (s) {
//   let st = [];
//   const legend = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
//       st.push(s[i]);
//     } else if (legend[st.pop()] !== s[i]) {
//       return false;
//     }
//   }
//   return st.length ? 0 : 1;
// };
// var findTheDifference = function (s, t) {
//   var result = "";

//   var hash = {};
//   for (var i = 0; i < s.length; i++) {
//     hash[s[i]] = hash[s[i]] + 1 || 1;
//   }

//   for (var i = 0; i < t.length; i++) {
//     if (!hash[t[i]] || hash[t[i]] - 1 < 0) {
//       result = t[i];
//       break;
//     } else {
//       hash[t[i]]--;
//     }
//   }

//     return result;
    
// };
var generateParenthesis = function (n) {
    // Resultant list
    const result = [];
    // Recursively generate parentheses
    generate(result, "", 0, 0, n);
    return result;
};

function generate(result, s, open, close, n) {
    // Base condition
    if (open === n && close === n) {
        result.push(s);
        return;
    }
    // If the number of _open parentheses is less than the given n
    if (open < n) {
        generate(result, s + "(", open + 1, close, n);
    }
    // If we need more close parentheses to balance
    if (close < open) {
        generate(result, s + ")", open, close + 1, n);
    }
};
console.log(
generateParenthesis(2));