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
     * TODO:配列をソートする
     */
    const reorderNums = nums.sort((a,b) => a - b)
    console.log(reorderNums)
    /**
     * TODO: targetまでの数値をループさせる
     */
    for(let pointer = 0; reorderNums[pointer] < target; pointer++){
        /**
         * TODO: 低い値にポインタを置いて、全部足して比較していく
         */
        for(let compare = 1; reorderNums[compare] < target; compare++){
            /**
             * TODO: targetになる組み合わせの添字を配列化して返す
             */
            if(reorderNums[pointer] + reorderNums[compare] === target) return [pointer,compare]
        }
    }
}

console.log(twoSum([2,3,4,7,12,24,60],11))