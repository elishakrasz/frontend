import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';

export const Layout = () => {
  return (
    <div>
      <Header />
      <div
        style={{
            height: '50vh'
        }}
      >
          Body
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}
