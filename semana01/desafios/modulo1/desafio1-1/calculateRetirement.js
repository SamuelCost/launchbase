const name = "Samuel"
const gender = "M"
const age = 35
const contribution = 10

if (gender == "M"){
    if (((gender === "M") && ((contribution >= 35 ) || ((contribution + age) >= 95))) || ((gender === "F") && ((contribution >= 30 ) || ((contribution + age) >= 85)))){
        console.log(`${age}, você pode se aposentar`)
    }else{
        console.log(`${age}, você não pode se aposentar`)
    }
}