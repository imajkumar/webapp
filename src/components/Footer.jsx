import React from 'react';
import styled from 'styled-components';

import { Container, Flex } from 'styled-minimal';

const FooterWrapper = styled.footer`
  border-top: 0.1rem solid #ddd;
  .ajay{
    color:#16426b;
    display:inline-block;
  }
  
`;

const Footer = () => (
  <FooterWrapper>
    <Container py={3}>
      <Flex justifyContent="space-between">
       <ul className="ajay">
         <li>About</li>
         <li>About</li>
         <li>About</li>
       </ul>
      </Flex>
    </Container>
  </FooterWrapper>
);

export default Footer;
