import ReactDOM from "react-dom";

import App from './App'
import {createRoot} from 'react-dom/client'

let root = document.getElementById("root")
root=createRoot(root)
root.render(
    <>
    <App />
    </>
)