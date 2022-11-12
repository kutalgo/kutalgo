const prn = console.log;

const testCases = [
    [[1, 1, 2], [1, 2]],
    [[1], [1]],
    [[1, 2, 3], [1, 2, 3]],
    [[1, 1, 3], [1, 3]],
    [[1, 3, 3], [1, 3]],
];

function removeDuplicates(nums: number[]): number {
    let i = 0, j = 1;
    while ((j < nums.length) && (i < nums.length)) {
        for (; nums[i] === nums[j]; j++) { }
        nums[++i] = nums[j];
    }
    return i || 1;
}

for (const tc of testCases) {
    prn(tc, removeDuplicates(tc[0]));
}
