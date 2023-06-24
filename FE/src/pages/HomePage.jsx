import { lazy } from 'react'
// import Deneme from '../components/Deneme.jsx'
// import Deneme2 from '../components/Deneme2.jsx'
const Searchbar = lazy(() => import('../components/Searchbar.jsx'))
const Navbar = lazy(() => import('../components/Navbar.jsx'))

const HomePage = () => {
  return (
    <>
     <Searchbar/>
     <Navbar/>
     {/* <Deneme/>
     <Deneme2/> */}
    </>
  )
}

export default HomePage
