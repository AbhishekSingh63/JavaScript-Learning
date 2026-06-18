const accountId=144553
let accountEmail="abhi123@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState

// accountId=2 // re-assignment not allowed

accountEmail="abcd.com"
accountPassword="21212121"
accountCity="Bengaluru"

console.log(accountId)

// Prefer not to use var, because of issue in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // to print multiple variables at once