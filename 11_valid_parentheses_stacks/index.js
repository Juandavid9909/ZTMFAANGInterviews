// Given a string containing only parentheses, determine if it is valid. The String is valid if all parentheses close.

// Constraints
// Does an empty string count as valid?: Yes, return true if empty string

// Test cases
// {([])}    true
// {([]      false
// {[(])}    false
// {[]()}    true

// O(n) - O(n)
const isValidParentheses = (s) => {
    if (s.length === 0) {
        return true;
    }

    const parens = {
        "(": ")",
        "[": "]",
        "{": "}"
    };

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (parens[s[i]]) {
            stack.push(s[i]);
        } else {
            const leftBracket = stack.pop();
            const correctBracket = parens[leftBracket];

            if (s[i] !== correctBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}