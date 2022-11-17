let input = [1,2,3,4,5,6]
let target = 8;


function twoSum(nums: Array<number>, target: number) : Array<number> {
    let cache: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];

        let other = target - current;
        let idx = cache[other];

        if (idx !== undefined) {
            return [i, idx];
        }
        cache[current] =  i;
    }
}

console.log(twoSum(input, target));
