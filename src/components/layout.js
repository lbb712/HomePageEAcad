import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    container,
    button,
    image_button,
    header,
    shop_icon,
    login,
    register,
    copyright,
    rectangle,
    footer,
    lms_teacher,
    partners,
    socials,
    icons,
    privacy,
    left,
    mid,
    right,
    icons_2
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <body>
      <header className={header}>
      <Link to="/404" >      
            <StaticImage className={shop_icon}
              alt="Shopping Basket"
              src="../images/shop.png"
            />
          </Link>
        <Link to="/404"  className={login}>      
          Login
        </Link>  
        <Link to="/404"  className={register}>      
          Register
        </Link>  
      </header>
      <main className={container}>
        <title>{pageTitle}</title>
        <nav>
          <Link to="/" >      
            <StaticImage className={image_button}
              alt="E Acad logo"
              src="../images/eacad-logo.jpg"
            />
          </Link>
          <p className={button}>About Us</p>
          <p className={button}>Student Zone</p>
          <Link to="/contact" className={button}>
              Contact Us
          </Link>
          <p className={button}>Blog</p>
          <div className={rectangle}></div>
        </nav>
        <div>
          {children}
        </div>
        <div className={footer}>
          <div className={left}>
            <div className={lms_teacher}>
              <p style={{color:'whitesmoke'}}><u>E Acad Lms</u></p>
              <p style={{color:'whitesmoke'}}><u>Become a Teacher</u></p>
              <p></p>
              <p style={{color:'whitesmoke'}}><u>Our Partners</u></p>
              <p style={{color:'whitesmoke'}}><u>Testimonials</u></p>
              <p style={{color:'whitesmoke'}}><u>FAQs</u></p>
            </div>
          </div>
          <div className={mid}>  
              <div className={socials}>
              <p style={{color:'whitesmoke'}}><u>Follow us on social media:</u></p>
              <StaticImage  className={icons}
              alt="Facebook logo"
              src="../images/facebook.png"
              />
              <StaticImage  className={icons}
              alt="Linked In logo"
              src="../images/linked.png"
              />
              <StaticImage  className={icons}
              alt="Youtube logo"
              src="../images/yt.png"
              />
            </div>
          </div>  
          <div className={right}>
            <div className={privacy}>
              <p style={{color:'whitesmoke'}}><u>Contact Us</u></p>
              <StaticImage  className={icons_2}
              alt="Phone icon"
              src="../images/phone2.png"
              />
              <StaticImage  className={icons_2}
              alt="Mail icon"
              src="../images/mail.png"
              />
              <p style={{color:'whitesmoke'}}><u>Privacy Note</u></p>
              <p style={{color:'whitesmoke'}}><u>Cookies Notice</u></p>
              <p style={{color:'whitesmoke'}}><u>Terms and Conditions</u></p>
            </div>
          </div>

        </div>
      </main>
      <div className={copyright}>
        <p style={{color: 'whitesmoke'}}><b>Copyright: eacad.org, 2021</b></p>
      </div>
    </body>
  )
}

export default Layout