import React, { PureComponent } from 'react'
import PropTypes from "prop-types"

export default class FooterNavigation extends React.Component {

  smoothScroll() {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1000);
  }

  render() {
    
    return (
        <div>
        <div className="footertop">
        <div className="product-section">
          <div className="rowfootertop w-row">
            <div className="footertopleft w-col w-col-6 w-col-stack"><img src="/img/from-a-better-place.jpg" width="600" srcSet="/img/from-a-better-place-p-500.jpeg 500w, /img/from-a-better-place-p-800.jpeg 800w, /img/from-a-better-place-p-1080.jpeg 1080w, /img/from-a-better-place.jpg 1200w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 87vw, (max-width: 991px) 90vw, 44vw" className="photo4"/></div>
            <div className="footertopright w-clearfix w-col w-col-6 w-col-stack">
              <h1 className="h3footer">From a better place.</h1>
              <div className="pdesc ppadding">Want to know exactly how we source?</div><a style={{cursor:'pointer'}} className="buttonpurple">Learn More</a></div>
          </div>
        </div>
      </div>
      <div className="footerspacer"></div>
      <div className="scrollup">
        <div className="footerbottomfirst">
          <div className="product-section">
            <div className="w-row">
              <div className="w-col w-col-6 w-col-stack">
                <h4 className="h4footer">Quality and transparency<br/>delivered for less.</h4>
              </div>
              <div className="w-col w-col-6 w-col-stack"><a onClick={()=> this.smoothScroll()} style={{cursor:'pointer'}} className="buttonfooter">Get it now</a></div>
            </div>
          </div>
        </div>
      </div>

      <div className="footerbottom-2">
        <div className="container">
          <div className="footerbottomsecond w-row">
            <div className="footercolumn w-col w-col-2 w-col-medium-4 w-col-small-4 w-col-tiny-tiny-stack"><img src="/img/dispatch-footer-logo.svg" width="134" className="footerlogo"/></div>
            <div className="footercolumn w-col w-col-2 w-col-medium-4 w-col-small-4 w-col-tiny-tiny-stack">
              <div className="footertitle">Our Products</div><a  className="footerlink">Build a plan</a><a className="footerlink">Coffee</a><a  className="footerlink">Equipment</a></div>
            <div className="footercolumn w-col w-col-2 w-col-medium-4 w-col-small-4 w-col-tiny-tiny-stack">
              <div className="footertitle">About us</div><a  className="footerlink">Worldview</a><a  className="footerlink">Services</a><a  className="footerlink">Stores</a></div>
            <div className="footercolumn w-col w-col-2 w-col-medium-4 w-col-small-4 w-col-tiny-tiny-stack">
              <div className="footertitle">Help</div><a  className="footerlink">FAQ</a><a  className="footerlink">My Account</a></div>
            <div className="footercolumn w-col w-col-2 w-col-medium-4 w-col-small-4 w-col-tiny-tiny-stack">
              <div className="footertitle">Learn</div><a  className="footerlink">Brewing</a><a  className="footerlink">Events</a></div>
            <div className="w-col w-col-2 w-col-medium-4 w-col-small-4 w-col-tiny-tiny-stack">
              <div className="footertitle">Social</div><a  className="footerlink">Facebook</a><a  className="footerlink">Instagram</a></div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}