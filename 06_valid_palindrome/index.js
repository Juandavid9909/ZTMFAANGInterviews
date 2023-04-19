// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignorig case sensitivity.

// Constraints
// Do we consider a palindrome as almost a palindrome?: Yes, return true if the string is already a palindrome

// Test cases
// string = "aabaa"                             true
// string = "aabbaa"                            true
// string = "abc"                               false
// string "a"                                   true
// string = ""                                  true
// string = "A man, a plan, a canal: Panama"    true

const isValidPalindrome = (s) => {
    s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

    // Initialize left/right pointers at start and end of string respectively
    let left = 0;
    let right = s.length - 1;

    // Loop through string characters while comparing them, then move the pointers closer to the center
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// Test cases almost palindrome
// string = "race a car"    true
// string = "abccdba"       true
// string = "abcdefdba"     false
// string = ""              true
// string = "a"             true
// string = "ab"            true

const validSubPalindrome = (s, left, right) => {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

const isAlmostPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return validSubPalindrome(s, left + 1, right) || validSubPalindrome(s, left, right - 1);
        }

        left++;
        right--;
    }

    return true;
}

console.log(isValidPalindrome("aabaa"));
console.log(isValidPalindrome("aabbaa"));
console.log(isValidPalindrome("abc"));
console.log(isValidPalindrome("a"));
console.log(isValidPalindrome(""));
console.log(isValidPalindrome("A man, a plan, a canal: Panama"));

console.log(isAlmostPalindrome("race a car"));
console.log(isAlmostPalindrome("abccdba"));
console.log(isAlmostPalindrome("abcdefdba"));
console.log(isAlmostPalindrome(""));
console.log(isAlmostPalindrome("a"));
console.log(isAlmostPalindrome("ab"));