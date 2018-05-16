import 'rxjs'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../../components/topNavigation'
import Footer from '../../components/footerNavigation'

const StyledNoPrice = styled.div`
  // Styles go here
`

export default class ProductNoPrice extends Component {

  productInfo() {
    $('html, body').animate({
        scrollTop: $("#coffee-info").offset().top
    }, 1000);
  }

  render() {

    return (
    <StyledNoPrice>
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
                <h1 className="h1product">Buhorwa</h1>
              </div>
              <div className="column-3 w-clearfix w-col w-col-6 w-col-small-6 w-col-tiny-6"><a style={{cursor: 'pointer'}} onClick={this.productInfo} className="link-block-3 w-inline-block"><img src="/img/info.svg" width="40" className="image-8"/></a></div>
            </div>
            <div className="pdesc">The Buhorwa coffee washing station is in the Muramyva province of Burundi, East Africa. It’s a place many farmers come to improve the quality of their coffee by washing it with natural processes. That includes the 631 smallholder farmers who produced this coffee. This is our second year buying from them. We’re drawn to this relationship because it gives us an opportunity to support community projects. Plus, it yields some of Burundi’s best coffee.</div>
            <div className="order-section">
              <div className="w-row">
                <div className="column-7 w-clearfix w-col w-col-6 w-col-stack">
                  <div className="input-amount">0</div>
                  <div className="formorderinfo">
                    <div className="infog">333g bags</div>
                    <div className="infoprice">$25.00</div>
                  </div>
                </div>
                <div className="column-9 w-clearfix w-col w-col-6 w-col-stack"><a className="buttonpurple">Get it now</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="coffee-info" className="info-section w-container">
      <div className="infodetail w-row">
        <div className="columndetailleft w-col w-col-6 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack">
          <h2 className="h2product">Tasting Notes</h2>
          <div className="rowinfo">
            <div className="infogrey">Taste</div>
            <div className="infogrey infowhite">Black Tea, Golden Raisin, Tangerine</div>
          </div>
          <div className="rowinfo">
            <div className="infogrey">Aroma</div>
            <div className="infogrey infowhite">Orange Blossom, Citrus Fruit</div>
          </div>
          <div className="rowinfo">
            <div className="infogrey">Acidity</div>
            <div className="infogrey infowhite">Lively like crisp white wine</div>
          </div>
          <div className="rowinfo">
            <div className="infogrey">Mouthfeel</div>
            <div className="infogrey infowhite">Orange Blossom, Citrus Fruit</div>
          </div>
        </div>
        <div className="columndetailright w-col w-col-6 w-col-stack w-col-small-small-stack w-col-tiny-tiny-stack"><img src="img/product-2.jpg" width="456" srcSet="img/product-2-p-500.jpeg 500w, img/product-2-p-800.jpeg 800w, img/product-2.jpg 912w" sizes="(max-width: 991px) 100vw, 48vw" className="photo"/></div>
      </div>
      <div className="infodetail2 w-row">
        <div className="columndetailleft2 w-col w-col-6 w-col-stack"><img src="img/product-2.jpg" width="456" srcSet="img/product-2-p-500.jpeg 500w, img/product-2-p-800.jpeg 800w, img/product-2.jpg 912w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 87vw, (max-width: 991px) 92vw, 48vw" className="photo"/></div>
        <div className="columndetailright2 w-col w-col-6 w-col-stack">
          <h2 className="h2impact">Social, Ecological &amp; Economic Impacts</h2>
          <div className="pdesc">This year, we’re making a small contribution towards Projet
          Vache, a sustainability program by the community, and our importers Crop to Cup.
          The program aims to increase coffee quality, grow healthier farms and increase
          farmers’ profitability next year. It will impact the livelihoods of the over 2500
          farmers in the area. The project involves agriculture and farm organization
          training, the building of a coffee tree plant nursery, gender gap training
          facilitated by the International Women’s Coffee Alliance, and establishing a dairy
          farm.</div>
        </div>
      </div>
    </div>

    <div className="info-section2 w-container">
    <div className="infodetail w-row">
      <div className="columndetailleft2 w-col w-col-6 w-col-stack">
        <h2 className="h2product h2padding">Who it's From</h2>
        <div className="rowinfo">
          <div className="infogrey">Produced by</div>
          <div className="infogrey infowhite">Buhorwa Washing Station</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Number of Members</div>
          <div className="infogrey infowhite">Smallholder Farmers</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Producer Model</div>
          <div className="infogrey infowhite">Crop to Cup</div>
        </div>
      </div>
      <div className="columndetailright2 w-col w-col-6 w-col-stack">
        <div className="rowinfo">
          <div className="infogrey">Importer</div>
          <div className="infogrey infowhite">Buhorwa Washing Station</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Exporter</div>
          <div className="infogrey infowhite">Buhorwa Washing Station</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Processed at/by</div>
          <div className="infogrey infowhite">Year 2</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Relationship with Us</div>
          <div className="infogrey infowhite">Crop to Cup</div>
        </div>
      </div>
    </div>
    <div className="infodetail_bottom w-row">
      <div className="columndetailleft w-col w-col-6 w-col-stack">
        <h2 className="h2product h2padding">Where it’s From</h2>
        <div className="rowinfo">
          <div className="infogrey">Country</div>
          <div className="infogrey infowhite">Burundi</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">N/E/S/W/Central</div>
          <div className="infogrey infowhite">Bukeye</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Region</div>
          <div className="infogrey infowhite">Muramvya Province</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Town or Sub-Region</div>
          <div className="infogrey infowhite">Muramvya Province</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Elevation</div>
          <div className="infogrey infowhite">5800 – 6200 MASL</div>
        </div>
      </div>
      <div className="columndetailright w-col w-col-6 w-col-stack">
        <h2 className="h2product h2padding">Production</h2>
        <div className="rowinfo">
          <div className="infogrey">Farm Size</div>
          <div className="infogrey infowhite">Buhorwa Washing Station</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Varietal</div>
          <div className="infogrey infowhite">Smallholder Farmers</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Processing Method</div>
          <div className="infogrey infowhite">Crop to Cup</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Harvest Period</div>
          <div className="infogrey infowhite">Buhorwa Washing Station</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Arrival date</div>
          <div className="infogrey infowhite">Year 2</div>
        </div>
        <div className="rowinfo">
          <div className="infogrey">Certifications</div>
          <div className="infogrey infowhite">Crop to Cup</div>
        </div>
      </div>
    </div>
  </div>
      
  <Footer {...this.props}/>
  </StyledNoPrice>
    )
  }
}
