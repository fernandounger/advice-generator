const idAdvice = document.querySelector('.id__advice')
const textAdvice = document.querySelector('h2')

async function newAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const { slip } = await response.json()
    idAdvice.innerText = `#${slip.id}`
    textAdvice.innerHTML = `"${slip.advice}"`
}