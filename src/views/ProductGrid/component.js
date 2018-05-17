import 'rxjs'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'

import Header from '../../components/topNavigation'
import Footer from '../../components/productGridFooter'

const StyledRegular = styled.div`
  // Styles go here
`

export default class ProductGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: Array.from({ length: 20 }),
      hasMore: true
    }
  }

  fetchMoreData = () => {
    if (this.state.items.length >= 500) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 5 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 5 }))
      });
    }, 1000);
  };

  render() {

    return (
    <StyledRegular>
      <Header {...this.props}/>
        <div className="container w-container">
        <div className="righthp1-2 w-row">
          <div className="columnimage w-clearfix w-col w-col-6 w-col-stack"><img src="/img/placeholder_calltoaction.jpg" width="600" srcSet="/img/placeholder_calltoaction-p-500.jpeg 500w, /img/placeholder_calltoaction-p-800.jpeg 800w, /img/placeholder_calltoaction-p-1080.jpeg 1080w, /img/placeholder_calltoaction.jpg 1200w" sizes="(max-width: 479px) 90vw, (max-width: 767px) 87vw, (max-width: 991px) 92vw, 49vw" className="image-13"/></div>
          <div className="columninfo-2 w-col w-col-6 w-col-stack">
            <div className="rtb-pages w-richtext">
              <h1><strong>This is dynamic - This is a dynamic product as hero</strong></h1>
              <p>‍</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div><a href="#" className="buttonpurple-2">Get it Now</a></div>
        </div>
      </div>
      <div className="filter w-clearfix grid-dropdrown-md">
        <div className="text-block-8">Sort by: </div>
        <div className="sort">Coffee</div>
        <div className="sort">Grindes</div>
        <div className="sort">Accessories</div>
        <div className="sort">Kits</div>
        <div className="sort">Merch</div>
      </div>

      <div className="filter w-clearfix grid-dropdrown-xs">
        <div className="dropdown">
          <button   className="dropbtn">Sort by <img src="/img/down-arrow.png" /></button>
          <div id="myDropdown" className="dropdown-content">
            <a href="#">Coffee</a>
            <a href="#">Grindes</a>
            <a href="#">Accessories</a>
            <a href="#">Kits</a>
            <a href="#">Merch</a>
          </div>
        </div>
      </div>

      <div className="section_cards">
        <div className="card-row w-row">
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
          >
          {this.state.items.map((i, index) => (
            <div key={index} className="card-column-2 w-col w-col-4 w-col-stack">
            <div className="card-wrapper-2"><a href="javascript:void(0)" className="link-block-4  w-inline-block"></a>
              <div ><a href="javascript:void(0)" className="link-img  w-inline-block"></a> </div>
                <div className="product-card-description-2">
                  <div>
                    <h3 className="product-name-title">V60</h3>
                    <h3 className="product-brand">name of brand or country</h3>
                  </div>
                  <div className="price-wrapper">
                    <h2 className="product-price">$199</h2>
                  </div>
                </div>
             
            </div>
          </div>
          ))}
        </InfiniteScroll>
        </div>
      </div>
      <Footer {...this.props}/>
    </StyledRegular>
    )
  }
}
