import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app

import run from './gen'

let isRunning = false;

const init = () => {
  listen()
  play();
}

function listen() {
  document.getElementById('head').addEventListener('click', function () {
    if (isRunning) return
    play()
  })
}

function play() {
  const head = document.getElementById('head')
  const history = run("I won't ignore my life anymore.").history
  isRunning = true;
  let i = 0;
  history.forEach((text, i) => {
    setTimeout(function () {
      head.innerText = text
      if (++i === history.length) isRunning = false;
    }, i * 30)
  })
}

init()