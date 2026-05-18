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
        ([file]) => normalizePath(file) === path
    )?.[1].default

    const NotFound = pages["./pages/notFound/index.tsx"].default

    return Page ? <Page/> : <NotFound/>
}

export default App
