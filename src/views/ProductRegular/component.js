import 'rxjs'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../../components/topNavigation'
import Footer from '../../components/footerNavigation'

const StyledRegular = styled.div`
  // Styles go here
`

export default class ProductRegular extends Component {

  productInfo() {
    $('html, body').animate({
        scrollTop: $("#coffee-info").offset().top
    }, 1000);
  }

  render() {

    return (
    <StyledRegular>
      <Header {...this.props}/>
      <div id="top" className="product-section w-container">
        <div className="rowproduct w-row">
          <div className="columnimage w-col w-col-6 w-col-stack">
            <div data-animation="cross" data-duration="500" className="slider w-slider">
              <div className="w-slider-mask">
                <div className="slide w-slide"></div>
                <div className="slide-2 w-slide"></div>
              </div>
              <div className="w-slider-arrow-left"></div>
              <div className="w-slider-arrow-right"></div>
              <div className="w-slider-nav w-round"></div>
            </div>
          </div>
          <div className="columninfo w-col w-col-6 w-col-stack">
            <div className="row w-row">
              <div className="column-8 w-col w-col-6 w-col-small-6 w-col-tiny-6">
                <h1 className="h1product">French Press</h1>
              </div>
              <div className="column-3 w-clearfix w-col w-col-6 w-col-small-6 w-col-tiny-6"><a style={{cursor: 'pointer'}} onClick={this.productInfo} className="link-block-3 w-inline-block"><img src="img/info.svg" width="40" className="image-8"/></a></div>
            </div>
            <div className="pdesc">Easy to brew and super consistent, the French Press is really reliable, brewing a textural and heavy-bodied cup in 4 minutes. Its classic and well-engineered design hasn’t changed much since its invention in the ‘50s.</div>
            <div className="order-section">
              <div className="w-row">
                <div className="column-7 w-clearfix w-col w-col-6 w-col-stack">
                  <div className="input-amount">0</div>
                  <div className="formorderinfo">
                    <div className="infoprice-single">$25.00</div>
                  </div>
                </div>
                <div className="column-9 w-clearfix w-col w-col-6 w-col-stack"><a href="#" className="buttonpurple">Get it now</a></div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div id="coffee-info" className="info-section w-container"/>
        <div className="info-section2 w-container">
        <div className="infodetail w-row">
          <div className="columndetailleft2-copy w-col w-col-6 w-col-stack">
            <h2 className="h2product h2padding">About the product</h2>
            <div className="rowinfo">
              <div className="infogrey">About Question</div>
              <div className="infogrey infowhite">Answer</div>
            </div>
            <div className="rowinfo">
              <div className="infogrey">About Question</div>
              <div className="infogrey infowhite">Answer</div>
            </div>
            <div className="rowinfo">
              <div className="infogrey">About Question</div>
              <div className="infogrey infowhite">Answer</div>
            </div>
          </div>
          <div className="columndetailright2 w-col w-col-6 w-col-stack">
            <div className="rowinfo">
              <div className="infogrey">About Question</div>
              <div className="infogrey infowhite">Answer</div>
            </div>
            <div className="rowinfo">
              <div className="infogrey">About Question</div>
              <div className="infogrey infowhite">Answer</div>
            </div>
            <div className="rowinfo">
              <div className="infogrey">About Question</div>
              <div className="infogrey infowhite">Answer</div>
            </div>
            <div className="rowinfo">
              <div className="infogrey">About Question</div>
              <div className="infogrey infowhite">Answer</div>
            </div>
          </div>
        </div>
        <div className="infodetail_bottom w-row">
          <div className="columndetailleft w-col w-col-6 w-col-stack"></div>
          <div className="columndetailright w-col w-col-6 w-col-stack"></div>
        </div>
        </div>
      <Footer {...this.props}/>
    </StyledRegular>
    )
  }
}
