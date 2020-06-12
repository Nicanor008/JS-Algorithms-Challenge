function isValid(s) {
    let arr = {};
    [...s].forEach(x => arr[x] = x in arr ? arr[x]+1 : 1);
    let arr2 = {};
    Object.values(arr).forEach(x => arr2[x] = x in arr2 ? arr2[x]+1 : 1);
    let keys = Object.keys(arr2);
    let vals = Object.values(arr2);
    switch (keys.length) {
        case 1: return "YES";
        case 2: if ((keys[0]-keys[1]==1 && vals[0]==1) ||
                    (keys[1]-keys[0]==1 && vals[1]==1)) {return "YES"}
                if ((keys[0]==1 && vals[0]==1) ||
                    (keys[1]==1 && vals[1]==1)) {return "YES"}
        default: return "NO";
    }
}

console.log(isValid('aabbcd'))
