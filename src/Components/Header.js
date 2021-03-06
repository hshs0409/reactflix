import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(20, 20, 20, 0.5);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
  margin-left: 20px;
`;

const Item = styled.li`
  width: 70px;
  height: 50px;
  border-bottom: 3px solid
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <SHeader>
      <List>
        <Item current={pathname === "/"}>
          <SLink to="/">Home</SLink>
        </Item>
        <Item current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Item>
        <Item current={pathname === "/search"}>
          <SLink to="/search">Search</SLink>
        </Item>
      </List>
    </SHeader>
  );
};

export default withRouter(Header);
