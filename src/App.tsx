import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Article from "./components/Article.tsx";

const jsonData = [
    {
        "_t": "Token",
        "original": "Towards",
        "token": "toward"
    },
    " the ",
    {
        "_t": "Token",
        "original": "end",
        "token": "end"
    },
    " of ",
    {
        "_t": "Token",
        "original": "November",
        "token": "novemb"
    },
    ", ",
    {
        "_t": "Token",
        "original": "during",
        "token": "dure"
    },
    " a ",
    {
        "_t": "Token",
        "original": "thaw",
        "token": "thaw"
    },
    ", at "
    ]

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>

    <Article data={jsonData} />

        <div>
            Some text <span>xx</span> is here

        </div>

      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
