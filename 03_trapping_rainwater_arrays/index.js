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
// currentWater = min(maxL, maxR) - currentHeight

// O(n^2) - O(1)
const getBruteTrappetRainwater = (heights) => {
    let totalWater = 0;

    for (let p = 0; p < heights.length; p++) {
        let leftP = p;
        let rightP = 0;
        let maxLeft = 0;
        let maxRight = 0;

        while (leftP >= 0) {
            maxLeft = Math.max(maxLeft, heights[leftP]);
            leftP--;
        }

        while (rightP < heights.length) {
            maxRight = Math.max(maxRight, heights[rightP]);
            rightP++;
        }

        const currentWater = Math.min(maxLeft, maxRight) - height[p];

        if (currentWater >= 0) {
            totalWater += currentWater;
        }
    }

    return totalWater;
}

// 1. Identify pointer with lesser value
// 2. Is this pointer lesser than or equal to max on that side
//      yes -> update max on that side
//      no -> get water for pointer value, add to total
// 3. Move pointer inwards
// 4. Repeat for other pointer

// O(n) - O(1)
const getTrappetRainwater = (heights) => {
    let left = 0;
    let right = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let total = 0;

    while (left < right) {
        if (heights[left] <= heights[right]) {
            if (heights[left] >= leftMax) {
                leftMax = heights[left];
            } else {
                total += leftMax - heights[left];
            }

            left++;
        } else {
            if (heights[right] >= rightMax) {
                rightMax = heights[right];
            } else {
                total += rightMax - heights[right];
            }

            right--;
        }
    }

    return total;
}