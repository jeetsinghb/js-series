const accountId = 13346;
let accountEmail = "johndoe@yahoo.com";
var accountPassword = "123JD78";
accountCity = "New York";
let accountState;

// accountId = 1556; // Not allowed - Cannot re-declare value to a const variable

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);