function commonChild(s1, s2) {
    // S1 = HARRY
    // S2 = SALLY
    // let s3 = []
    // let count = 0
    // for(let i=0;i<s1.length;i++) {
    //     if(s1.includes(s2[i])) {
    //         s3.push(s2[i])
    //         count += 1
    //     }
    // }
    // console.log(s3, ">>>>............", s2)
    // return count
    let current = Array(s1.length + 1);
    let prev = Array(s1.length + 1);
    for(let x = 0; x <= s1.length; x++){
        for(let y = 0; y <= s2.length; y++){
            if(x === 0 || y === 0)
                current[y] = 0;
            else if(s1[x - 1] === s2[y - 1])
                current[y] = prev[y - 1] + 1;
            else
                current[y] = Math.max(current[y - 1],prev[y]);  
        }
        prev = [...current];
    }
    return current[s1.length]; 
}

console.log(commonChild('AA', 'BB'))
