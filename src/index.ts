import './mystyles.css'
import env from './env'
import styles from "./styles.module.css"

const user = "John Doe"

const num1: number = 1
const num2: number = 2

console.log(`Hello ${user}!`)
console.log(num1 + num2)
console.log ("this app is using Vite")

console.log("Modo:", env.MODE)
console.log("Mensaje:", env.APP_TITLE)
console.log("API:", env.API_URL)
console.log("DEV:", env.DEV)
console.log("PROD:", env.PROD)

const h1= document.createElement("h1")
h1.textContent = " Soy el h1 personalizado con CSS Modules"
h1.className = styles.title

document.body.appendChild(h1)

const h2 = document.createElement("h2");
h2.textContent = `
Modo: ${env.MODE}
Mensaje: ${env.APP_TITLE}
`

document.body.appendChild(h2)
