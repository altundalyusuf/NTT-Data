import { lazy, Suspense } from 'react'
import Loading from './pages/Loadig.jsx';
const HomePage = lazy(() => import('./pages/HomePage.jsx'))


function App() {

  return (
    <>
      <Suspense fallback={<Loading/>}>
          <HomePage />  
      </Suspense>   
    </>
  )
}

export default App
