import Link from "next/link";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 15px;
    width: 100vw;
  }
`;

const NavigationBar = () => {
  return (
    <StyledNavBar>
      <ul>
        <li>
          <Link href={"/"}>Spotlight</Link>
        </li>
        <li>
          <Link href={"/art-pieces"}>Pieces</Link>
        </li>
      </ul>
    </StyledNavBar>
  );
};

export default NavigationBar;
