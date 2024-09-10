import React from 'react'
import Layout from '../../component/layout/Layout'
import Hero from '../../component/hero/Hero'
import About from '../../component/about/About'
import Product from '../../component/product/Product'
import NewUpdate from '../../component/newupdate/NewUpdate'
import Map from '../../component/map/Map'
import Contact from '../../component/contact/Contact'

const HomePage = () => {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Product/>
      <NewUpdate/>
      <Map/>
      <Contact/>
    </Layout>
  )
}

export default HomePage
