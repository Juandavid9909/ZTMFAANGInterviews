// Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped

// Constraints
// Do the left and right sides of the graph count as walls?: No, the sides are not walls
// Will there be negative integers?: No, assume all integers are positive

// Test cases
// [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]    8
// []                                   0
// [3]                                  0
// [3, 4, 3]                            0

// Solution without code
// nums = [1(0), 3(1), 7(2), 9(3), 2(4)]    t = 11
// We can use the 2 pointer rule, this means that we will save some values an check them in each iteration
// numberToFinde = target - nums[p1]