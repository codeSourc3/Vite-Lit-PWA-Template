/// <reference types="vite/client" />
import { registerSW } from 'virtual:pwa-register'
import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

const updateSW = registerSW({
  onNeedRefresh() {
    const confirmation = confirm('New content available. Reload?');
    if (confirmation) {
      updateSW(confirmation);
    }
  },
  onOfflineReady() {
    alert('Ready to work offline!');
  }
});


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${import.meta.env.BASE_URL}/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
