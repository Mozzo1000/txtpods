import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Flowbite } from 'flowbite-react';

const customTheme = {
  card: {
    root: {
      base: "border-r-8 border-b-8 border-slate-700 border-t-0 border-l-0 flex rounded-lg bg-white shadow-md",
    }
  },
  button: {
    base: "font-medium border border-black border-r-4 border-b-4 ease-out active:translate-y-1 active:border-r-2 active:border-b-2 active:translate-x-1 transition-all",
    color: {
      primary: "bg-primary hover:bg-primary/90",
      secondary: "font-normal bg-secondary hover:bg-secondary/40"
    }
  },
  navbar: {
    link: {
      active: {
        on: "underline decoration-4 decoration-[#fc7b53]",
        off: "pb-[2px] hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-[#fc7b53] before:absolute before:left-0 before:bottom-0"
      },
    }
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Flowbite theme={{theme: customTheme}}>
        <App />
      </Flowbite>
    </BrowserRouter>
  </React.StrictMode>,
)
