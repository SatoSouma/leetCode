function twoSum2(nums: number[], target: number): number[] | void {
    for(let initialPointer = 0; initialPointer < nums.length; initialPointer++){
        const requiredNum = target - nums[initialPointer]
        for(let nextPointer = initialPointer + 1; nextPointer < nums.length; nextPointer++){
            if(nums[nextPointer] === requiredNum){
                return [initialPointer, nextPointer]
            }
        }
    }
};