import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
  home_background_image,
  home_text,
  we_are,
  google,
  home_pros
} from '../components/layout.module.css'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className={home_background_image}>
      </div>
      <div>
        <p Text style={{ textTransform: 'uppercase'}} className={we_are}><b>We are</b></p>
        <h1 Text style={{ textTransform: 'uppercase'}}><b>E Acad</b></h1>        

      </div>        
      <div className={home_text}>
        <p style={{color:' rgba(224, 127, 132, 0.884)'}}>Providing digital solutions to schools and coaching institutes across India and helping to transform schools for 21st century learning</p>     

        <StaticImage className={google}
                alt="Google Play logo"
                src="../images/google.png"
        />
      </div>
    </Layout>
  )
}

export default IndexPage

/*rgba(224, 127, 132, 0.884) Pink*/
/*rgba(73, 112, 240, 0.932) Blue*/