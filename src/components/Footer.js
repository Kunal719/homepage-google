import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Footer=styled.div`
   display:flex;
   flex-direction:column;
   flex-wrap:wrap;
   justify-content:space-between;
   background:#f2f2f2;
`;

const FirstFooter=styled.div`
   display:flex;
   padding: 0px 30px;
   flex-wrap:wrap;
   border-bottom: 1px solid #dadce0;
   font-size: 14.5px;
   color: rgba(0,0,0,.54);
`;

const SecondFooter=styled.div`
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   padding:14px 15px;
   font-size:14.5px;
   align-items:center;
`;

const LeftLinks = styled.div`
   display:flex;
   align-items:center;
   @media only screen and (max-width: 665px) {
      justify-content:center;
      padding-bottom:25px;
   }
   flex:1;
`

const RightLinks=styled.div`
   display:flex;
   align-items:center;
`
const FooterLink = styled(Link)`
   text-decoration:none;
   padding:0 15px;
   color: rgba(0,0,0,.54);
   font-family:arial,sans-serif;
   align-items:center;
`;

const FooterComponent = () => {
    return (
        <Footer>
            <FirstFooter>
              <p>India</p>  
            </FirstFooter>
            <SecondFooter>
               <LeftLinks>
                  <FooterLink to="/about">About</FooterLink> 
                  <FooterLink to="/advertising">Advertising</FooterLink> 
                  <FooterLink to="/business">Business</FooterLink> 
                  <FooterLink to="/searchWorks">How Search Works</FooterLink> 
               </LeftLinks>
               <RightLinks>
                  <FooterLink to="/privacy">Privacy</FooterLink>    
                  <FooterLink to="/terms">Terms</FooterLink>    
                  <FooterLink to="/settings">Settings</FooterLink>    
               </RightLinks>    
            </SecondFooter> 
        </Footer>
    )
}

export default FooterComponent
