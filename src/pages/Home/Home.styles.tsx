import styled from "styled-components";

export const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "nav nav nav"
    "asideLeft main asideRight"
    "footer footer footer";
  grid-template-rows: 1fr 9fr 1fr;
  grid-template-columns: 1fr 6fr 1fr;
`;

export const Nav = styled.nav`
  grid-area: nav;
  background: blue;
`;
export const AsideLeft = styled.aside`
  grid-area: asideLeft;
  background: red;
`;
export const AsideRight = styled.aside`
  grid-area: asideRight;
  background: green;
`;
export const Main = styled.main`
  grid-area: main;
  background: gold;
`;
export const Footer = styled.footer`
  grid-area: footer;
  background: silver;
`;
