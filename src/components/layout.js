import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    button
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <Link to="/" className={button}>
            Home
        </Link>
        <Link to="/about" className={button}>
            About Us
        </Link>
        <Link to="/404" className={button}>
            New Page
        </Link>
      </nav>
      <h1>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout