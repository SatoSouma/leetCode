function containsDuplicate2(nums: number[]): boolean {
    for(let arrayLength = 0; arrayLength < nums.length; arrayLength++){
        for(let count = 0; count < nums.length - 1; count++){
            if(nums[count] > nums[count + 1]){
                const nextNum = nums[count + 1]
                nums[count + 1] = nums[count]
                nums[count] = nextNum
            }
        }
    }

    for(let count = 0; count < nums.length - 1; count++){
        if(nums[count] === nums[count + 1]){
            return true
        }
    }

    return false
};