const form = document.querySelector('form')
const result = document.querySelector('#result')

const imcResult = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obesidade grau I',
    'Obesidade grau II',
    'Obesidade grau III'
]

const calculateIMC = event => {
    event.preventDefault()

    const height = form.querySelector('#height').value
    const weight = form.querySelector('#weight').value

    const imc = (weight / (height * height)).toFixed(1)

    if (imc < 18.5) {
        result.innerHTML = `Seu imc é de ${imc}, você está ${imcResult[0]}`
    } else if (imc >= 18.5 && imc < 24.9) {
        result.innerHTML = `Seu imc é de ${imc}, você está com o ${imcResult[1]}`
    } else if (imc >= 25 && imc < 29.9) {
        result.innerHTML = `Seu imc é de ${imc}, você está com ${imcResult[2]}`
    } else if (imc >= 30 && imc < 34.9) {
        result.innerHTML = `Seu imc é de ${imc}, você está com ${imcResult[3]}`
    } else if (imc >= 35 && imc < 39.9) {
        result.innerHTML = `Seu imc é de ${imc}, você está com ${imcResult[4]}`
    } else if (imc >= 40) {
        result.innerHTML = `Seu imc é de ${imc}, você está com ${imcResult[5]}`
    }
}
form.addEventListener('submit', calculateIMC)
