import React from 'react'
import styled from "styled-components";
import GoogleLogo from "../images/google-logo.png";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  flex:1;
`;

const LogoSection = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:25vh;
`;

const SearchSection = styled.div`
  padding:0.1px 15px;
  display:flex;
  justify-content:center;
  flex-direction:column;
`;
const Form = styled.div``;

const Search = styled.div`
  display:flex;
  align-items:center;
  padding:0 14px;
  background:#fff;
  border:1px solid #dfe1e5;
  border-radius:24px;
  height:44px;
  margin: 0 auto;
  max-width:584px;
`;
const SearchIcon = styled.div`
  height:22px;
  width:22px;
  padding:0 5px;
  align-items:center;

  svg{
      fill:#9aa0a6;
  }
`;
const SearchInput = styled.input`
  display:flex;
  flex:1;
  height:40px;
  outline:none;
  background-color:transparent;
  border:none;
  color:rgba(0,0,0,0.87);
  word-wrap:break-word;
  font-size:16px;
  padding-left:7px;
`;
const MicIcon = styled.div`
  height:25px;
  width:25px;
  padding:0 5px;
  align-items:center;

  svg{
      vertical-align:middle;
  }
`;
const ButtonSection = styled.div`
  display:flex;
  justify-content:center;
  height:60px;
  padding:10px 10px 0px;
  top:53px;

  button {
      background-color:#f8f9fa;
      border:1px solid #f8f9fa;
      border-radius:4px;
      color:#3c4043;
      font-family:Roboto,arial,sans-serif;
      font-size:14px;
      margin:11px 4px;
      padding: 0 16px;
      height:36px;
      min-width:54px;
      text-align:center;
      cursor:pointer;
  }
`;

const LanguageSection = styled.div`
  display:flex;
  justify-content:center;

  p{
  text-align:center;    
  font-size:13px;
  font-family:arial,sans-serif;
  }
`;

const HomePage = () => {
    return (
        <Container>
          <LogoSection>
              <img src={GoogleLogo} alt="Google"></img>
          </LogoSection>
          <SearchSection>
              <Form action="/" method="GET">
                  <Search>
                      <SearchIcon>
                          <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                      </SearchIcon>
                      <SearchInput type="text" />
                      <MicIcon>
                          <svg class="goxjub" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
                      </MicIcon>
                  </Search>
              </Form>
              <ButtonSection>
                  <button>Google Search</button>
                  <button>I'm Feeling Lucky</button>
              </ButtonSection>
              <LanguageSection>
            <p>Google offered in:  <a href="https://www.google.com/setprefs?sig=0_me9FOjhlFZJbv31Gg5zMh1LsGcM%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjD-_mJ86HxAhWkxjgGHe1fDD8Q2ZgBCA4">हिन्दी</a>    <a href="https://www.google.com/setprefs?sig=0_me9FOjhlFZJbv31Gg5zMh1LsGcM%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjD-_mJ86HxAhWkxjgGHe1fDD8Q2ZgBCA8">বাংলা</a>    <a href="https://www.google.com/setprefs?sig=0_me9FOjhlFZJbv31Gg5zMh1LsGcM%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjD-_mJ86HxAhWkxjgGHe1fDD8Q2ZgBCBA">తెలుగు</a>    <a href="https://www.google.com/setprefs?sig=0_me9FOjhlFZJbv31Gg5zMh1LsGcM%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjD-_mJ86HxAhWkxjgGHe1fDD8Q2ZgBCBE">मराठी</a>    <a href="https://www.google.com/setprefs?sig=0_me9FOjhlFZJbv31Gg5zMh1LsGcM%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjD-_mJ86HxAhWkxjgGHe1fDD8Q2ZgBCBI">தமிழ்</a>    <a href="https://www.google.com/setprefs?sig=0_me9FOjhlFZJbv31Gg5zMh1LsGcM%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjD-_mJ86HxAhWkxjgGHe1fDD8Q2ZgBCBM">ગુજરાતી</a>    <a href="https://www.google.com/setprefs?sig=0_me9FOjhlFZJbv31Gg5zMh1LsGcM%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjD-_mJ86HxAhWkxjgGHe1fDD8Q2ZgBCBQ">ಕನ್ನಡ</a>    <a href="https://www.google.com/setprefs?sig=0_me9FOjhlFZJbv31Gg5zMh1LsGcM%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjD-_mJ86HxAhWkxjgGHe1fDD8Q2ZgBCBU">മലയാളം</a>    <a href="https://www.google.com/setprefs?sig=0_me9FOjhlFZJbv31Gg5zMh1LsGcM%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjD-_mJ86HxAhWkxjgGHe1fDD8Q2ZgBCBY">ਪੰਜਾਬੀ</a></p>
            </LanguageSection>
          </SearchSection>
        </Container>
    )
}

export default HomePage
