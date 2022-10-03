import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import SocialNetwork from '../SocialNetwork'
import Hamburger from './Hamburger'
import Logo from './Logo'
import MobileSearch from './MobileSearch'
import NaviLinks from './NaviLinks'
import SearchBar from './SearchBar'
import SideNav from './SideNav'
import UserLink from './UserLinks'
import VerticalLines from './VerticalLine'

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  return (
    <NavContainer>
      <HeaderLeft>
        <Logo />
        <BurgerContainer ref={node}>
          <MobileSearch />
          <Hamburger open={open} setOpen={setOpen} />
        </BurgerContainer>
        <InnerLeft>
          <NaviLinks />
          <SearchBar />
        </InnerLeft>
      </HeaderLeft>

      <HeaderRight>
        <SocialNetwork />

        <VerticalLines />

        <UserLink />
      </HeaderRight>
      <SideNavContainer ref={node}>
        <SideNav open={open} setOpen={setOpen} />
      </SideNavContainer>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10rem;
  box-shadow: 1.5px 1.5px 5px var(--theme-golden);
  background: var(--theme-midnightdark);
  border: 1px solid var(--theme-golden);

  @media (max-width: 1300px) {
    flex-direction: column;
    height: 7rem;
  }
`

const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 51rem;
  height: inherit;
  margin-left: 2rem;
  @media (max-width: 1300px) {
    justify-content: space-between;
    width: 100%;
  }
`

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height: relative;
  margin-right: 2rem;
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    margin: 0;
  }
`

const InnerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
  @media (max-width: 1300px) {
    display: none;
  }
`

const SideNavContainer = styled.div`
  @media (min-width: 1300px) {
    display: none;
  }
`
const BurgerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1300px) {
    display: none;
  }
`

export default Header
