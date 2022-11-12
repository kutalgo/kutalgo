const prn = console.log;

const testCases = [
    [[1, 1, 2], [1, 2]],

];

function removeDuplicates(nums: number[]): number {
    // look at the previous element
    // if it's the same, then "remove" the current one 
    let i = 0, j = 1, k = 2, newLength = nums.length;

    while (j < newLength) {
        // prn(util.format('LOOP1: i= %d; j= %d, arr= %s', i, j, nums));

        if (nums[i] !== nums[j]) {
            if (i+1 === j) {
                i++
            } else {
                nums[i] = nums[j]
            }
            j++; continue;
        }
        while (k < newLength) {

            // prn(util.format('LOOP2: k= %d;',  k));

            if (nums[j] !== nums[k]) {
                break;
            }
            k++;
        }
        nums[j] = nums[k];
        j = k;
        i++;
    }
    
    return ((j-i) === 1) ? i : i+1;

}


for (const tc of testCases) {
    prn(tc, removeDuplicates(tc[0]));
}

