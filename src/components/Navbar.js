import { styled } from "styled-components";

function Navbar() {
  const Navbar = styled.div`
    background-color: #121212;
  `;

  return (
    <Navbar className="navbar">
      <div className="navbar_top">
        <h3>Navbar</h3>
      </div>
    </Navbar>
  );
}

export default Navbar;
