import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"
import NosePoint from "../components/nose-point"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center", maxWidth: "75%" }}>There’s a better way to shop for everything parent and child.</h1>
    <p style={{ textAlign: "center", maxWidth: "75%" }}>
    It takes a lot of products to raise a child today. 
    Most of those products go to waste and cost you a whole lot of money in the meantime. 
    Why buy all of these items when you could pay a fraction of the price to use them for only the the time you need.
    We source our products from the highest-quality, safest brands so you can shop easy. Products arrive on your doorstep when you need them and when you’re done just send them back. Simple as that.  

    </p>
    <div style={{
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
    }}>
      <NosePoint 
        number={1}
        title="We do the research"
        description="Based on data across thousands of families, we advise you on what products are needed and when. We do the work so you don’t have to."
      />
      <NosePoint
        number={2}
        title="Pay a fraction of the price"
        description="You pick the options that best suit your and your child’s needs today and pay a fraction of the price to use them for only the time you need."
      />
      <NosePoint
        number={3}
        title="Try without committing"
        description="Because you can change items whenever you like, get the benefit of trying products without ever needing to commit."
     />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
