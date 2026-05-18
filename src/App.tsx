import { useEffect, useState } from 'react'
import './App.css'
import type { ComponentType } from "react"

type PageModule = {
  default: ComponentType
}


const pages = import.meta.glob("./pages/**/index.tsx", { eager: true }) as Record<string, PageModule>

function normalizePath(filePath: string) {
  return filePath
    .replace("./pages", "")
    .replace("/home", "")
    .replace("index.tsx", "") || "/"
  }

function App() {
const [path, setPath] = useState(window.location.pathname)

    useEffect(() => {
        const onPopState = () => setPath(window.location.pathname)
        window.addEventListener("popstate", onPopState)
        return () => window.removeEventListener("popstate", onPopState)
    }, [])

    const Page = Object.entries(pages).find(
        ([file]) => {
          const no_file_path = normalizePath(file)
          console.log(`Comparing ${no_file_path} with ${path}`)
          return no_file_path === path 
        }
        
    )?.[1].default

    return Page ? <Page/> : <h1>エラー</h1>
}

export default App
