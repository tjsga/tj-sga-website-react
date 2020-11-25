/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-light text-dark">
        <Navbar></Navbar>

        <main id="page">
          { children }
        </main>
        <hr />

        <Footer />
      </div>
    </>
  )
}

