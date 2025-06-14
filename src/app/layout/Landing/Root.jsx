import React, { useState } from 'react'
import Header from '../../../components/common/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../../components/common/Footer'
import { AnimatePresence } from 'framer-motion'
import PageTransition from '../../../components/common/PageTransition'

const Root = () => {
  const location = useLocation();

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <PageTransition />
      <AnimatePresence mode="wait">
        <main key={location.pathname}>
          <Outlet />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};


export default Root
