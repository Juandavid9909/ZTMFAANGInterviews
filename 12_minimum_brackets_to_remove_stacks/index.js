// Given a string only containing round brackets '(' and ')' and lowercase characters, remove the lest amount of brackets so the string is valid.

// A string is considered valid if it is empty or if there are brackets, they all close.

// Constraints
// What do we return from our algorithm?: Return a valid string with the fewest brackets removed
// Will there be spaces in the string?: No, the string only contains lowercase characters, '(' and ')'
// Is a string containing only lowercase characters valid?: Yes, you don't need any brackets for a string to be valid

// Test cases
// a)bc(d)    abc(d)
// (ab(c)d    ab(c)d || (abc)d
// ))((       ""

// O(n) - O(n)
const minRemoveToMakeValid = (str) => {
    const res = str.split("");
    const stack = [];

    for (let i = 0; i < res.length; i++) {
        if (res[i] === "(") {
            stack.push(i);
        } else if (res[i] === ")" && stack.length) {
            stack.pop();
        } else if (res[i] === ")") {
            res[i] = "";
        }
    }

    while (stack.length) {
        const currentIdx = stack.pop();
        res[currentIdx] = "";
    }

    return res.join("");
}