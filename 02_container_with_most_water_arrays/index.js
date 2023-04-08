// You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold.

// Constraints
// Does the thickness of the lines affect the area: No, assume they take up no space
// Do the left and right sies of the graph count as walls?: No, the sides cannot be used to form a container
// Does a higher line inside our container affect our area?: No, lines inside a container don't affect the area

// Test cases
// [7, 1, 2, 3, 9]    28
// []                 0
// [7]                0
// [6, 9, 3, 4, 5, 8] 32

// O(n^2) - O(1)
const getBruteMaxWaterContainer = (heights) => {
    let maxArea = 0;

    for (let p1 = 0; p1 < heights.length; p1++) {
        for (let p2 = p1 + 1; p2 < heights.length; p2++) {
            const height = Math.min(heights[p1], heights[p2]);
            const width = p2 - p1;
            const area = height * width;

            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
}

// O(n) - O(1)
const getMaxWaterContainer = (heights) => {
    let p1 = 0;
    let p2 = heights.length - 1;
    let maxArea = 0;

    while (p1 < p2) {
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;

        maxArea = Math.max(maxArea, area);

        if (heights[p1] <= heights[p2]) {
            p1++;
        } else {
            p2--;
        }
    }

    return maxArea;
}