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
    footer,
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
          <Link to="/about" className={button}>
              About Us
          </Link>
          <Link to="/contact" className={button}>
              Contact Us
          </Link>
        </nav>
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
      <Link to="/404"  className={login}>      
          Login
        </Link>  
      </footer>
    </body>
  )
}

export default Layout