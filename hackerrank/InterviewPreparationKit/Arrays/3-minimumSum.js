// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let swap=0
    for(let i=0;i<arr.length;i++) {
        if(i+1 !== arr[i]){
                let t=i;
                while(arr[t] !== i+1){
                    t++;  
                }
                let temp=arr[t];
                arr[t]=arr[i];
                arr[i]=temp;
                swap++;
            }
    }
    console.log(swap)
}

const arr = [4, 4, 3, 1, 2]
minimumSwaps(arr)
