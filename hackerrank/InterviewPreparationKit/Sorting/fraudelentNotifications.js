// calculate median
function median(values) {
  let half = Math.floor(values.length / 2);
  if (values.length % 2) return values[half];
  else return (values[half - 1] + values[half]) / 2.0;
}

// Complete the activityNotifications function below.
function activityNotifications(expenditure, d) {
  //   let result=0
  //   for(let i=0; i<expenditure.length;i++) {
  //       let newExpenditure = expenditure.sort().slice(i, d+i)

  //       // calculate median
  //       let medianValue = median(newExpenditure)
  //       let daysEarnings = expenditure[d+1+1]
  //       if(daysEarnings >= (medianValue*2)) {
  //           result += 1
  //       }
  //   }
  //   return result

  // effective solution
  // Number of notifications
  let n = 0;

  // Set midpoints for median calculation
  let [i1, i2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)];
  let m1, m2, m;

  // Initialize count sorted subarray
  let cs = new Array(201).fill(0);
  for (let i = d - 1; i >= 0; i--) cs[expenditure[i]]++;

  // Iterate through expenditures
  for (let i = d, l = expenditure.length; i < l; i++) {
    // Find median
    for (let j = 0, k = 0; k <= i1; k += cs[j], j++) m1 = j;
    for (let j = 0, k = 0; k <= i2; k += cs[j], j++) m2 = j;
    let m = (m1 + m2) / 2;

    // Check if notification is given
    if (expenditure[i] >= m * 2) n++;

    // Replace subarray elements
    cs[expenditure[i - d]]--;
    cs[expenditure[i]]++;
  }

  return n;
}

console.log(activityNotifications([1, 2, 3, 4, 4, 0, 4, 2, 4, 6, 6], 3));
