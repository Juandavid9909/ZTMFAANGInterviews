// Given two strings S and T, return if they equal when both are typed out. Any "#" that appears in the string counts as a backspace

// Constraints
// What happens when two #'s appear beside each other?: Delete the two values before the first #
// What happens to # when there is no character to remove?: It deletes nothing then, just like backspace would
// Are two empty strings equal to each other?: Yes, consider two empty strings as equal
// Does case sensitivity mater?: Yes it does, "a" does not equal "A"

// Test cases
// S = "ab#z"    T = "az#z"    true
// S = "abc#d"   T = "acc#c"   false
// S = "x#y#z#"  T = "a#"      true
// S = "a###b"   T = "b"       true
// S = "Ab#z"    T = "ab#z"    false

const builtBruteString = (string) => {
    const builtArray = [];

    for (let p = 0; p < string.length; p++) {
        if (string[p] !== "#") {
            builtArray.push(string[p]);
        } else {
            builtArray.pop();
        }
    }

    return builtArray;
}

// O(n + m) / O(n + m)
const bruteBackspaceCompare = (S, T) => {
    const finalS = builtBruteString(S);
    const finalT = builtBruteString(T);

    if (finalS.length !== finalT.length) {
        return false;
    }

    for (let p = 0; p < finalS.length; p++) {
        if (finalS[p] !== finalT[p]) {
            return false;
        }
    }

    return true;
}

// O(n + m) - O(1)
const backspaceCompare = (S, T) => {
    let p1 = S.length - 1;
    let p2 = T.length - 1;

    while (p1 >= 0 || p2 >= 0) {
        if (S[p1] === "#" || T[p2] === "#") {
            if (S[p1] === "#") {
                let backCount = 2;

                while (backCount > 0) {
                    p1--;
                    backCount--;

                    if (S[p1] === "#") {
                        backCount += 2;
                    }
                }
            }
            if (T[p2] === "#") {
                let backCount = 2;

                while (backCount > 0) {
                    p2--;
                    backCount--;

                    if (T[p2] === "#") {
                        backCount += 2;
                    }
                }
            }
        } else {
            if (S[p1] !== T[p2]) {
                return false;
            }

            p1--;
            p2--;
        }
    }

    return true;
}

console.log(backspaceCompare("ab#z", "az#z"));
console.log(backspaceCompare("abc#d", "acc#c"));
console.log(backspaceCompare("x#y#z#", "a#"));
console.log(backspaceCompare("a###b", "b"));
console.log(backspaceCompare("Ab#z", "ab#z"));