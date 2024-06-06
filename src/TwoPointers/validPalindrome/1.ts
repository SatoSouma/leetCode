/**
 * 自分の力だと解けず、冷静に考えればわかるはず
 */
function isPalindrome(s: string): boolean {
    const targrtAlphaNumeric = s.toUpperCase().replace(/[^A-Za-z0-9]/g, "").replace(/\s/g, "")

    console.log(targrtAlphaNumeric)

    for(let pointer = 0; pointer < targrtAlphaNumeric.length; pointer++){
        const frontLetter = targrtAlphaNumeric[pointer]
        const backLetter = targrtAlphaNumeric[targrtAlphaNumeric.length - 1 - pointer]

        if(frontLetter !== backLetter){
            return false
        }
    }

    return true
};