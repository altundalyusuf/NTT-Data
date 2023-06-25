import { lazy } from 'react'
const Searchbar = lazy(() => import('../components/Searchbar.jsx'))
const Navbar = lazy(() => import('../components/Navbar.jsx'))
const SlideShow = lazy(() => import('../components/SlideShow.jsx'))
const Products = lazy(() => import('../components/Products.jsx'))
const HomePage = () => {
  return (
    <>
     <Searchbar/>
     <Navbar/>
     <SlideShow/>
     <Products/>
    </>
  )
}

export default HomePage
