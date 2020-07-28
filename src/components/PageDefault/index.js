import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

function PageDefault({children}) {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5% 0;
`;

export default PageDefault;