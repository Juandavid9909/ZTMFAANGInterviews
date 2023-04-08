// Given an array of integers, return the indices of the two numbers that add up to a given target

// Constraints
// Are all the numbers positive or can there be negatives: All are positives
// Are there duplicate numbers in the array: No, there are no duplicates
// Will there always be a solution available?: No, there may not always be a solution
// What do we return if there's no solution?: Just return null
// Can there be multiple pairs that add up to the target?: No, only 1 pair of numbers will add up to the target

// Test cases
// [1, 3, 7, 9, 2]    t = 11    [3, 4]
// [1, 3, 7, 9, 2]    t = 25    null
// []                 t = 1     null
// [5]                t = 5     null
// [1, 6]             t = 7     [0, 1]

// Solution without code
// nums = [1(0), 3(1), 7(2), 9(3), 2(4)]    t = 11
// We can use the 2 pointer rule, this means that we will save some values an check them in each iteration
// numberToFinde = target - nums[p1]

// O(n) - O(1)
const findBruteTwoSum = (nums, target) => {
    for (let p1 = 0; p1 < nums.length; p1++) {
        const numberToFind = target - nums[p1];

        for (let p2 = p1 + 1; p2 < nums.length; p2++) {
            if (nums[p2] === numberToFind) {
                return [p1, p2];
            }
        }
    }

    return null;
}

// O(n) - O(n)
const findTwoSum = (nums, target) => {
    let numsMap = {};

    for (let i = 0; i < nums.length; i++) {
        const currentMapVal = numsMap[nums[i]];

        if (currentMapVal >= 0) {
            return [currentMapVal, i];
        }

        const numberToFind = target - nums[i];

        numsMap[numberToFind] = i;
    }

    return null;
}