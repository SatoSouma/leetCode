/**
 * 二つの異なる文字列が渡された時、それがアナグラムであれば true そうでなければ false を返す
 */

/**
 * @param {string} t
 * @param {string} s
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    /**
    * TODO: 文字列の長さが同じでなければ false　を返す
    */
	if (s.length !== t.length) return false;

	/**
	 * TODO: 二つの文字をソートする
	 */
    /**
     * TODO:ソートした二つの文字列を比較する
     */
    if(reorder(s) === reorder(t)) return true

    return false
};

/**
 * @param {string} str
 * @return {string}
 */
const reorder = (str) => {
    /**
     * TODO:クオーテーションを削除
     */
	/**
	 * TODO:文字列をソートする
	 */
	/**
	 * TODO:クオーテーションを付与する
	 */
	return str
		.split("")
		.sort((a, b) => a.localeCompare(b))
		.join("");
};

/**
 * コンソールで実行してもいいけど、折角ファイルに書いたし
 */
console.log(isAnagram("anagram","nagaram"))