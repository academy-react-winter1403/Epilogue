import React from 'react'
import Header from '../../../components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../../components/common/Footer'

const Root = () => {
  return (
    <div className="bg-bg-primary text-[color:var(--color-text-primary)] max-w-screen-xl mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
      <div className='px-10'>
      <Footer/>
      </div>
    </div>
  )
}

export default Root
