const name = "Samuel"
const weight = 99
const size = 1.75

const imc = weight / (size * size)

if (imc >= 30){
    console.log(`${name} você está acima do peso`)
} else {
    console.log(`${name} você não esta acima do peso`)
}