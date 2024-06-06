function isAnagram2(s: string, t: string): boolean {
    return sortChar(s) === sortChar(t)
};

const sortChar = (inputValue:string) => {

    const splitInputValue: string[] = []
    for(let count = 0; count < inputValue.length; count++){
       splitInputValue.push(inputValue[count])
    }

    for(let count = 0; count < splitInputValue.length - 1; count++){
        for(let count = 0; count < splitInputValue.length - 1; count++){
            const changedUnicodeCurrentValue = splitInputValue[count].codePointAt(0)
            const changedUnicodeNextValue = splitInputValue[count + 1].codePointAt(0)

            if(changedUnicodeCurrentValue === undefined || changedUnicodeNextValue === undefined) {
                throw new Error("This value can`t process!!")
            }

            if(changedUnicodeCurrentValue > changedUnicodeNextValue){
                const nextValue = splitInputValue[count+1]
                splitInputValue[count + 1] = splitInputValue[count]
                splitInputValue[count] = nextValue
            }
        }
    }

    return connectArray(splitInputValue)
}

const connectArray = (array:string[]) => {
    let connectedString = ""
    for(let count = 0; count < array.length; count++){
        connectedString = connectedString + array[count]
    }

    return connectedString
}