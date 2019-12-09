import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
;
import cnLogo from '../images/OgLogoTrans-cropped.png'

const HeaderWrapper = styled.div`
  background: white;
  marginBottom: 1.45rem;
  img {
    margin-bottom: 0;
  }
`
const HeaderContainer = styled.div `
    margin: 0 auto;
    maxWidth: 960px;
    padding: 0.5rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            style={{
              width: '250px',
              padding: '1rem'
            }}
            src={ cnLogo }
            alt='Clark Newell Logo' />
            
        </Link>
      </h1>
      </HeaderContainer>
    </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
