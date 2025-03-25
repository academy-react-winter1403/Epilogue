import React from 'react'
import Header from '../../../components/common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../../components/common/Footer'

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <main className="mt-[21px]">
        <Outlet />
      </main>
      <div className='px-10'>
      <Footer/>
      </div>
    </div>
  )
}

export default Root
