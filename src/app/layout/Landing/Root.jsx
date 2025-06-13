
import React, { useState } from 'react';
import Header from '../../../components/common/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../../components/common/Footer';
import { usePageTimeTracker } from '../../../core/hooks/usePageTimeTracker';
import SuggestedPagesModal from '../../../components/common/SuggestedPagesModal';

const Root = () => {
  usePageTimeTracker();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Header openSuggestedPagesModal={openModal} /> 
      
      <main className="">
        <Outlet />
      </main>
      <div className='px-10'>
        <Footer/>
      </div>
      <SuggestedPagesModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Root;