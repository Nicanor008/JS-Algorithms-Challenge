//  Time Conversion
// https://www.hackerrank.com/challenges/time-conversion/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: Midnight is 12: 00: 00AM on a 12 - hour clock, and 00: 00: 00 on a 24 - hour clock.Noon is 12: 00: 00PM on a 12 - hour clock, and 12: 00: 00 on a 24 - hour clock.

function timeConversion(s) {
    const arr = s.slice(0, 8).split(":");
    console.log("ARR", arr);
    arr[0] =
        s.indexOf("PM") > -1
            ? arr[0] == 12
                ? "12"
                : Number(arr[0]) + 12
            : arr[0] == 12
                ? "00"
                : arr[0];
    return arr.join(":");
}

console.log(timeConversion("07:05:45PM"));
