import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"


const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
const Hero = () => {
  const {
    file:{
      childImageSharp:{fluid}
    },
   } = useStaticQuery(query);

  return <header className="hero">
    <div className="section-center hero-center">
      <article className="">
        <div>
          <div className="underline">
            <h1>Jonas Eriksson</h1>
            <h4>Systemutvecklare med lite gott & blandat</h4>
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            <SocialLinks />
          </div>
        </div>

      </article>
      <Image fluid={fluid} className="hero-img"/>
    </div>
  </header>
}

export default Hero
