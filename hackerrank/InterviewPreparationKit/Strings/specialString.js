// Complete the substrCount function below.
function substrCount(n, s) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        let str1 = '';
        let middleStr = '';
        let str2 = '';
        for (let j = i; j < n; j++) {
            if(middleStr.length === 0  && s[j] ===s[i]){
                str1 += s[j];
                count++;
            } else if(middleStr.length === 0  && s[j] !==s[i]){
                middleStr += s[j];
            } else if(middleStr.length === 1  && s[j] ===s[i] && str2.length < str1.length){
                str2 += s[j];
                if(str1 === str2){
                    count++;
                }    
            } else {
                break;
            }
        }
    }
    return count;
}

console.log(substrCount(4, 'aaaa'))