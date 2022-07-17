const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()

    const height = Number(event.target.height.value)
    const weight = Number(event.target.weight.value)

    const imc = getIMC(weight, height)
    const imcValue = getIMCValue(imc)

    if (height === '' || height === 0) {
        setResult('Por favor, informe sua altura', false)
        return
    } else if (weight === '' || weight === 0) {
        setResult('Por favor, informe seu peso', false)
        return
    }
    setResult(`IMC: ${imc} - (${imcValue})`, true)
})
const getIMC = (weight, height) => {
    const imc = (weight / (height * height)).toFixed(2)
    return imc
}
const getIMCValue = imc => {
    const value = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau I',
        'Obesidade grau II',
        'Obesidade grau III'
    ]
    if (imc > 39.9) return value[5]

    if (imc > 34.9) return value[4]

    if (imc > 29.9) return value[3]

    if (imc > 24.9) return value[2]

    if (imc > 18.4) return value[1]

    if (imc < 18.5) return value[0]
}

const setResult = (message, isValid) => {
    const result = document.querySelector('#result')
    const paragraph = document.createElement('p')
    paragraph.innerHTML = message
    result.appendChild(paragraph)

    if (isValid) {
        result.classList.add('success')
    } else {
        result.classList.add('error')
    }
}
