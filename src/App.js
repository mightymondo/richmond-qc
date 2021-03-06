import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'

import { WelcomeWrapper, PageWrapper, NavBar, NavImg, NavContents, WelcomeImg, MobileTrigger, Footer } from './components/common/styledComponents'
import welcome from './img/welcomeImg.jpg'
import nav from './img/navp.png'
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato';
  }
  a {
    text-decoration: none;
  }
`

class App extends Component {
  state = {
    open: false
  }

  toggleMenu = () => this.setState(s => ({ open: !s.open }))

  render() {
    const { open } = this.state
    return (
      <PageWrapper>
        <WelcomeWrapper>
          <NavBar>
            <NavImg src={nav} />
            <NavContents open={open}>
              <a>about</a>
              //
              <a> gallery </a>
              //
              <a href= "store.html ">store</a>
              //          
              <a href="mailto:contact@quirkycoasters.com">contact</a>
            </NavContents>
            <MobileTrigger onClick={this.toggleMenu}>dehaze</MobileTrigger>
          </NavBar>
         <h1>- Welcome to Quirky Coasters -</h1>
          <WelcomeImg src={welcome} />
        </WelcomeWrapper>
        <Footer>
          
           <a href="https://rstpottery.com"> RST Pottery</a>
            //
           <p> &copy; 2018 R. Thornley  </p>
            //
           <a href="mailto:contact@quirkycoasters.com"> contact</a>
           
          </Footer>
      </PageWrapper>
    )
  }
}

export default App
