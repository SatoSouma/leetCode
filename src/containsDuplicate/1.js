/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    /**
    * 現在の比べる番号を右辺にポインタ移動していく  
    */
    for(let right = 0; right < nums.length; right++){
        /**
        * 左辺の比べるべき番号がいくつあるか、右辺のポインタの位置で判断する
        */
        for(let left = 0; left < right; left++){
            /**
            * 現在のポインタの値と今までの値を比べて、同じものがあれば　true を返す
            */
            if(nums[left] === nums[right]) return true
        }
    }
    return false
};

console.log(containsDuplicate([1,2,4,5,2,4]))