// Dates

// https://tc39.es/proposal-temporal/docs/

// Date : Date is an object in javascript.
// JavaScript stores dates as number of milliseconds since January 01, 1970

let myDate = new Date();
console.log(myDate); // 2024-01-23T00:22:53.693Z
console.log(myDate.toString()); // Tue Jan 23 2024 00:22:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Tue Jan 23 2024
console.log(myDate.toISOString()); // 2024-01-23T00:22:53.693Z
console.log(myDate.toJSON()); // 2024-01-23T00:22:53.693Z
console.log(myDate.toLocaleDateString()); // 1/23/2024
console.log(myDate.toLocaleString()); // 1/23/2024, 12:22:53 AM
console.log(myDate.toUTCString()); // eg: Tue, 23 Jan 2024 01:14:36 GMT

console.log(typeof myDate);

console.log("----------");

let myCreadtedDate = new Date(2023, 0, 23); // 0 is a month - Month starts from 0
console.log(myCreadtedDate.toString()); // Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(myCreadtedDate.toLocaleString()); // 1/23/2023, 12:00:00 AM
console.log(myCreadtedDate.toLocaleDateString()); // 1/23/2023

console.log("----------");

let anotherDate = new Date(2023, 5, 30);
console.log(anotherDate); // 2023-06-30T00:00:00.000Z
console.log(anotherDate.toString()); // Fri Jun 30 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(anotherDate.toLocaleString()); // 6/30/2023, 12:00:00 AM
console.log(anotherDate.toLocaleString('en-IN')); // 30/6/2023, 12:00:00 am
console.log(anotherDate.toDateString()); // Fri Jun 30 2023

console.log('----------');

let customDate = new Date(2023, 5, 30, 13, 4);
console.log(customDate.toLocaleString()); // 6/30/2023, 1:04:00 PM

let customDate2 = new Date("2023-01-14"); // YY-MM-DD
console.log(customDate2.toLocaleString()); // 1/14/2023, 12:00:00 AM

let customDate3 = new Date("01-14-2023"); // MM-DD-YY
console.log(customDate3.toLocaleString());

console.log("----------");

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1705971187302 - Miliseconds

console.log(customDate2.getTime()); // 1673654400000
console.log(Math.floor(Date.now() / 1000)); // 1705971595 - Miliseconds to Seconds

console.log("----------");

let newDate = new Date();
console.log(newDate); // 2024-01-23T01:01:28.784Z
console.log(newDate.getDate()); // returns the current date
console.log(newDate.getDay()); // The getDay() method returns the day of the week (0 to 6) of a date. Sunday = 0;
console.log(newDate.getFullYear()); // returns current year - eg. 2024
console.log(newDate.getMonth()); // Starts from 0 - January = 0


let customiseDate = newDate.toLocaleString('default', {
    weekday: "long"
})
console.log(customiseDate);

