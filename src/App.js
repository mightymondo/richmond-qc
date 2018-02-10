import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'

import { WelcomeWrapper, PageWrapper, NavBar, NavImg, NavContents, WelcomeImg, MobileTrigger } from './components/common/styledComponents'
import welcome from './img/welcomeImg.jpg'

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
            <NavImg src="https://7izuga-dm2305.files.1drv.com/y4meApLTXoCRkcbIPk_fisdOVrJq73p_-mYSEOXL2wnPWEDtAYoldyUVPZLqbaig4XamnlL9z5W4oAScE0Rdv4Q5_1w7psiep-qYLeROqeDbt3FTvMutRETvglONDzv1YDK0Smqrs8zz9yEeV_UVHOaMETgo0XUNO1YFR1nv9UuNx7-ev62AXg_jB7Z0s5HgawG0jbe5BnNVtpQA-GTB8sJ9g?width=300&height=232&cropmode=none" />
            <NavContents open={open}>
              <a>about</a>
              //
              <a>contact</a>
              //
              <a>store</a>
            </NavContents>
            <MobileTrigger onClick={this.toggleMenu}>dehaze</MobileTrigger>
          </NavBar>
         <h1>Welcome to Quirky Coasters</h1>
          <WelcomeImg src={welcome} />
        </WelcomeWrapper>
      </PageWrapper>
    )
  }
}

export default App
