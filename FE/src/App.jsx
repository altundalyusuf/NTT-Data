import { lazy, Suspense } from 'react'
const HomePage = lazy(() => import('./pages/HomePage.jsx'))


function App() {

  return (
    <>
    <Suspense fallback={<div>Yükleniyor...</div>}>
        <HomePage />  
    </Suspense>   
    </>
  )
}

export default App
