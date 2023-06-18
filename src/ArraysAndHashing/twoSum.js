/**
 * 整数配列numsの中で、二つの数値を組み合わせて与えられたtargetになるものの添字を配列で返却する
 */

/**
 * @param {num[]} nums
 * @param {num} target
 * @return {num[]}
 */
const twoSum = (nums,target) => { 
    /**
     * TODO: targetまでの数値をループさせる
     */
    for(let pointer = 0; pointer < nums.length; pointer++){
        /**
         * TODO: targetから現在のポインタの要素を引いて、足し算してtargetにするために必要な値を記憶する
         */
        const complement = target - nums[pointer]
        for(let next = (pointer + 1); next < nums.length; next++){
            /**
             * TODO: 足し算してtargetにするために必要な値だったら return で添字の組み合わせを返す
             */
            if(nums[next] === complement) return [pointer,next]
        }
    }
}

console.log(twoSum([5,0,2,6,12,24,0],0))