import { FC } from 'react'
import { hydrate, render } from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from '/app'

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
)

const root = document.getElementById('app')

if (root?.hasChildNodes()) {
  render(<Router />, root)
} else {
  hydrate(<Router />, root)
}
