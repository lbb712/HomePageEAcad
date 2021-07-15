import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  home_background_image,
  home_text,
  we_are
} from '../components/layout.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={home_background_image}>
      </div>
      <div>
        <p Text style={{ textTransform: 'uppercase'}} className={we_are}><b>We are</b></p>
        <p>E Acad</p>
      </div>        
      <div className={home_text}>
          <p>Providing digital solutions to schools and coaching institutes across India and helping to transform schools for 21st century learning</p>
      </div>
    </Layout>
  )
}

export default IndexPage
