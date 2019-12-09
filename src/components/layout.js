import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Spring } from 'react-spring'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Archive from './archive'
import './layout.css'

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: {
          regex: "/bg/"
        }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'data.site.siteMetadata.description' },
            { name: 'clark newell, web development, software development, fitness journey', content: 'portfolio, blog' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring
          from={{ height: location.pathname === '/' ? 200 : 400 }}
          to={{ height: location.pathname === '/' ? 400 : 200 }}
        >
          {styles => (
            <div style={{overflow: 'hidden', ...styles}}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>
        <MainLayout>
          <div>
            {children}
          </div>
          <Archive />
        </MainLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
