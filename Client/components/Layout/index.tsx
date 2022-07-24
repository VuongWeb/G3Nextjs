import React from 'react'
import { LayoutProps } from '../../pages/models/Layout'
import FooterClient from '../Footer'
import Header from '../Header'

type Props = {}

const LayoutClient = ({ children }: LayoutProps) => {
  return (
    <div className=''>
      <Header />
      {children}
      <FooterClient/>
    </div>
  )
}

export default LayoutClient