import React from 'react'
import { LayoutProps } from '../../pages/models/Layout'
import FooterClient from '../Footer'
import Header from '../Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type Props = {}

const LayoutClient = ({ children }: LayoutProps) => {
  return (
    <div className=''>
      <Header />
      {children}
      <ToastContainer autoClose={3000} />
      <FooterClient/>
    </div>
  )
}

export default LayoutClient