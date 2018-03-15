import styled, { css } from 'styled-components'


const sizes = {
  desktop: 992,
  tablet: 800,
  phone: 450
}

// iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})



export const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #222;
  color: rgb(192,192,192);
  display: flex;
  flex-direction: column;
`

export const WelcomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    ${media.phone`
      font-size: 1.5rem;
    `}
  }
`
export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  font-weight: 800;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  background: #000;
  a {
    font-size: 1.5rem;
    cursor: pointer;
  }
  ${media.tablet`
    justify-content: space-between;
  `}
`
export const NavImg = styled.img`
  max-height: 120px;
  max-width: 120px;
  ${media.tablet`
    align-self: flex-start;
  `}
`
export const NavContents = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  ${media.tablet`
    display: ${p => p.open ? 'flex' :'none'};
    position: absolute;
    top: 5.8rem;
    background: #000;
    width: 100%;
    height: 4rem;
    align-items: center;
    box-shadow:  0 0 6px 3px black;
  `}
  }
`

export const MobileTrigger = styled.i.attrs({ className:"material-icons" })`
  display: none;
  cursor: pointer;
  ${media.tablet`
    display: block;
    margin-right: 2rem;
    font-size: 2.5rem;
  `}
`

export const WelcomeImg = styled.img`
  max-width:90%;
  max-height: 70%;
 
  justify-self: center;
  border-radius: 3px;
  box-shadow: 0 0 20px 1px black;
  
`
export const Footer = styled.footer`
  width: 100%;
  display: flex;
  font-weight: 400;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  background: #000;
  a {
    font-size: 1.5rem;
    cursor: pointer;
  }
  ${media.tablet`
    justify-content: space-between;
  `}
`
