import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { styled } from "styled-components";
function Layout({ children }) {
  const Wrapper = styled.div`
    width: 100%;
    background-color: #000;
  `;
  return (
    <>
      <Wrapper className="wrapper no-gutters row">
        <div className="col p-3">
          <Navbar />
        </div>
        <div className="container col p-9">
          <Header />
          <div className="content">{children}</div>
        </div>
      </Wrapper>
    </>
  );
}

export default Layout;
