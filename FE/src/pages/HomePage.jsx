import { lazy } from 'react'
const Searchbar = lazy(() => import('../components/Searchbar.jsx'))
const Navbar = lazy(() => import('../components/Navbar.jsx'))

const HomePage = () => {
  return (
    <>
     <Searchbar/>
     <Navbar/>
    </>
  )
}

export default HomePage
