import { NavLink as NavLinkReactRouter } from "react-router-dom";

export // eslint-disable-next-line react/prop-types
  const NavLink = ({ to, children, ...props }) => {
    return (
      <NavLinkReactRouter
        {...props}
        className={({ isActive }) => {
          return isActive ? 'is-active' : undefined
        }}
        to={to}>
        {children}
      </NavLinkReactRouter >

    )
  }
