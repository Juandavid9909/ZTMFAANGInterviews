// Given a string, find the length of the longest substring without repeating characters

// Constraints
// Is the substring contiguous?: Yes, look for a substring not a subsequence

// Test cases
// string = "abccabb"    3
// string = "cccccc"     1
// string = ""           0
// string "abcbda"       4

// O(n^2) - O(n)
const bruteLengthOfLongestSubstring = (s) => {
    if (s.length < 2) {
        return s.length;
    }

    let longest = 0;

    for (let left = 0; left < s.length; left++) {
        let seenChars = {};
        let currentLength = 0;

        for (let right = left; right < s.length; right++) {
            const currentChar = s[right];

            if (!seenChars[currentChar]) {
                currentLength++;
                seenChars[currentChar] = true;
                longest = Math.max(currentLength, longest);
            } else {
                break;
            }
        }
    }

    return longest;
}

const lengthOfLongestSubstring = (s) => {
    if (s.length < 2) {
        return s.length;
    }

    const seenCharacters = {};
    let left = 0;
    let longest = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        const prevSeenChar = seenCharacters[currentChar];

        if (prevSeenChar >= left) {
            left = prevSeenChar + 1;
        }

        seenCharacters[currentChar] = right;

        longest = Math.max(longest, right - left + 1);
    }

    return longest;
}

console.log(lengthOfLongestSubstring("abccabb"));
console.log(lengthOfLongestSubstring("cccccc"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("abcbda"));