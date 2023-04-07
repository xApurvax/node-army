import React from 'react'
import Navbar from '../global/Navbar'

type childProps = {
    children : JSX.Element
  }

const Layout = ({children} : childProps) => {
  return (
    <section className='h-full w-full'>
        <Navbar />
        {children}
    </section>
  )
}

export default Layout