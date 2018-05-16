import React, { PureComponent } from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'

const HeaderFixed = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
`

export default class TopNavigation extends React.Component {

  render() {

    return (

        <HeaderFixed data-collapse="medium" data-animation="over-right" data-duration="400" className="navbar w-nav">
          <div className="product-section containermobile w-hidden-medium w-hidden-small w-hidden-tiny w-container"><a href="javascript:void(0)"  className="brand w-nav-brand"><img src="img/dispatch-coffee-icon-logo.svg" width="126" className="image-9"/></a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="menuopen w-nav-button">
                <div className="iconsecond w-icon-nav-menu"></div>
              </div><a href="#" className="navlink w-hidden-main w-nav-link">HOME</a><a href="#" className="navlink w-nav-link">HOW IT WORKS</a><a href="#" className="navlink w-nav-link">ABOUT US</a><a href="#" className="navlink w-nav-link">OUR PRODUCTS</a><a href="#" className="navlink w-nav-link">LEARN</a>
              <a href="#" className="navlink w-nav-link">MY ACCOUNT</a><a href="#" className="navbutton w-nav-link">Build A Plan</a></nav>
            <div className="menu-button w-nav-button">
              <div className="icon w-icon-nav-menu"></div>
            </div>
          </div>
        </HeaderFixed>

    );
  }
}
