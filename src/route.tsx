import { FC } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from '/app'

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
)

const addRoot= (): Element => {
  const element = document.createElement('div')
  element.setAttribute('id', 'app')
  document.body.appendChild(element)
  return element
}

createRoot(document.getElementById('app') || addRoot()).render(<Router />)
