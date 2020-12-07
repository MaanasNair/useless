let x = 20
let y = x

console.log(x, y)
x = 30
console.log(x, y)

let a = { value: 20 }
let b = a
console.log(a, b)
a.value = 23
console.log(a, b)



//as string(a) isn't storing any value by taking in mind that string(a) => Address#234 and string(b) => Address#234 both come in a value val(Address#234) which is {value:20}

//Examples =>
let user = { name: "Adam" }
function message(user) {
    user.name = "Peter"
    console.log("user inside function", user.name)
}
message(user)
console.log(user.name)






console.error("Convert Data Types to String!")
//convert data typed to strings
//number to string
val = 999
val = String(val)
//boolean to string
val = true
val = String(val)
//date to String
val = new Date()
val = String(val)
val = val.toString()
//array to string
val = [1, 2, 3]
val = val.toString()



console.log(val)
console.log(typeof val)
console.log(val.length)

console.error("Convert to numbers!")
//Convert to numbers!
//String to number
val = '8'
val = Number(val)
//boolean to number
val = false //false and null have same values rather than val(true)
val = Number(val)
val = 'Alan'
val = [1, 2, 3]
val = Number(val)//NaN means Not a Number
val = parseInt('12.34')
val = parseFloat('12.34')


console.error("Sum1")
const num1 = 8 //try converting to a string type i.e, '8'
const num2 = 18
const sum = num1 + num2
console.log(sum)
console.error("Sum2")

console.log(val)
console.log(typeof val)
console.log(val.toFixed(2))