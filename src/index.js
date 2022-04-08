import ReactDOM from "react-dom";
import  './Index.css'
import App from './App'
import {createRoot} from 'react-dom/client'

let root = document.getElementById("root")
root=createRoot(root)
root.render(
    <>
    <App />
    </>
)