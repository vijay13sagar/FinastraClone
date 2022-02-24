import styled, { keyframes } from "styled-components";
import * as palette from './Variables.js';

export const moveRight = keyframes`
     from {
    margin-left: -100%;
  }
  to {
    margin-left: 0%;
  }
`
export const HomeContainer = styled.div`
    width: 100vw-8px;
    height: fit-content;
    margin: 0;
    padding: 0; 
    background-image: url(${props => props.pic});
    background-position-x: left ;
    background-position-y: center;
    background-size: cover;
    word-wrap: break-word;
    scrollbar-width:thin;
    display: ${props => props.row ? 'flex' : ''};
    justify-content: ${props => props.row ? 'space-between' : ''};
    @media (max-width: 1030px) {
      display: ${props => props.row ? 'block' : ''};
  }
`
export const Logo = styled.img`
  width: 150px;
  margin: ${props => props.nomar ? '0vw 0vw 5vw' : '2vw 3vw 8vw'};
  @media (max-width: 1030px) {
   width: 120px;
  }
`;
export const HeadCont = styled.div`
  width: 80vw;
  margin: 0 8vw 0;
`
export const Header = styled.h1`
    font-family: Roboto,Arial,sans-serif;//'Roboto',Arial,sans-serif
    font-weight: 800;
    font-size: ${props => props.greater ? palette.greater : palette.large};
    line-height: 1em;
    margin: 0 0 0 0 ;
    color:${props => props.black ? palette.TextBlack : palette.TextWhite};
    margin-bottom: 5vh;
    width: 85%;
    @media (max-width: 640px) {
      font-size: ${props => props.greater ? palette.greater : palette.big};
  }
`;
export const HeadSpan = styled.span`
    background: -webkit-linear-gradient(180deg, #B13BA4,#6C50D3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
 `;
export const SubHead = styled.p`
  font-family: ${props => props.bold ? 'Roboto,Arial,sans-serif' : 'PT Sans', 'sans-serif'};
  font-size: ${palette.medium};
  color: ${palette.Whitegrey};
  font-weight: ${props => props.bold ? palette.bold : palette.regular};
  width: ${props => props.wid ? 40 : 80}%;
  line-height: 2em;
  @media (max-width: 1030px) {
   width: ${props => props.wid ? 100 : 80}%;
  }
  `;
export const CardCont = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10vh;
  margin-left:10vw ;
  @media (max-width: 1030px) {
    display: block;
    margin-top: 0;
  }
`;
export const Card = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  width: ${props => props.width ? props.width : 26}vw;
  height: 225px;
  margin-bottom: 0;
  &:hover{
    border-top: 3px ${props => props.fut ? 'no-border' : 'solid'} ;
    border-top-color: ${palette.pink};
  }
  @media (max-width: 1030px) {
    height: 200px;
    width: ${props => props.fut ? 45 : 80}%;
    margin-top: 20px;
    padding-top: 5px;
    padding-bottom:30px;
  }
  @media (max-width: 640px) {
    height: 300px;
  }
  @media (max-width: 400px) {
    height: 350px;
  }
`;
export const CardText = styled.p`
  font-family: Roboto,Arial,sans-serif;//'Roboto',Arial,sans-serif
  font-weight: 800;
  font-size: ${palette.regular};
  color: ${props => props.clr ? palette.TextBlack : palette.TextWhite};
  width: 80%;
  margin: 10% ${props => props.nomar ? props.nomar : 8}% 5%;
`;
export const CardLink = styled.a`
  font-family: Roboto,Arial,sans-serif;//'Roboto',Arial,sans-serif
  font-weight: 600;
  font-size: ${palette.regular};
  color: ${palette.Whitegrey};
  text-decoration: underline ;
  width: 80%;
  margin: 10% ${props => props.nomar ? props.nomar : 8}% 0;
  &:hover{
    text-decoration: ${props => props.fut ? 'none' : 'underline'};
  }
`;
export const ServiceContainer = styled.div`
    width: 100vw-8px;
    height: fit-content;
    margin: 0;
    padding: 0; 
    background-color: ${palette.GreyBg} ;
    word-wrap: break-word;
`
export const ServInCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin-left: 10vw;
  padding-top: 20vh;
  /* margin-right: 10vw; */
`;
export const ServHead = styled.p`
  font-family: 'PT Sans', sans-serif;
  font-size: ${palette.greater};
  color: ${props => props.white ? palette.TextWhite : palette.lytblack};
  font-weight: 700;
  margin-top: 0;
  align-self: center;
  &:hover{
    color: ${props => props.news ? palette.pink : palette.lytblack};
  }
  @media (max-width: 1030px) {
    font-size: ${props => props.news ? palette.medium : palette.greater};
  }
`;
export const LogoCardCont = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  @media (max-width: 1030px) {
  }
`;
export const Logocard = styled.div`
  width: 140px;
  height: 100px;
  margin-top:10px;
  margin-right: 10px;
  background-color: white;
  border-radius: 1vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1030px) {
   width: 200px;
  }
  @media (max-width: 640px) {
   width: 45%;
  }
`;
export const LogImg = styled.img`
  width: 80%;
`;
export const LargeText = styled.p`
  font-family: 'PT Sans', sans-serif;
  font-size: ${palette.big};
  color: ${palette.lytblack};
  font-weight: 600;
  width: 70%;
  @media (max-width: 640px) {
    font-size: ${palette.greater};
  }
`
export const DrawHeadCont = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-bottom: 0;
  padding-bottom: 0;
  @media (max-width: 1030px) {
    width: 550px;
  }
  @media (max-width: 640px) {
    width: 100%;
  }
`;
export const DrawHead = styled.p`
  font-family: 'PT Sans', sans-serif;
  cursor: pointer;
  font-size: ${palette.greater};
  color: ${props => props.active ? palette.violet : palette.grey};
  font-weight: 700;
  margin-top: 0;
  padding-bottom:  ${props => props.active ? 2.2 : 3}vh;
  border-bottom: 0.8vh  ${props => props.active ? 'solid' : 'hidden'} ;
  border-bottom-color: ${palette.violet};
  align-self: center;
  margin-bottom: 0;
  /* width: 22%; */
  &:hover{
    color: ${palette.violet};
  }
  @media (max-width: 1030px) {
    font-size: ${palette.medium};
  }
 `;
export const Drawer = styled.div`
 background-image: url(${props => props.image});
 background-size:cover;
  width: fit-content;
  height: auto;
  margin-top: 0;
  margin-bottom: 10vh;
  display: flex;
  object-fit:contain;
  padding-top:40px;
  padding-bottom: 40px;
  @media (max-width: 1030px) {
    display: block;
    padding-top:20px;
    padding-bottom: 20px;
  }
 `
export const DrawHalf = styled.div`
  width: ${props => props.width ? props.width : 45}%;
  margin-top: 0;
  margin-left: ${props => props.width ? 10 : 10}%;
  padding-top: 1%;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  justify-content: center;
  @media (max-width: 1030px) {
    width: 100%;
  }
 `;
export const DrawImage = styled.img`
  height: auto;
  width: 85%;
  border-radius: 60%;
  margin-right: 20%;
  
  @media (max-width: 1030px) {
    width: 80%;
    margin-top: 10px;
    margin-bottom:30px;
    align-self: center;
  }
 `;
export const LearnBtn = styled.a`
  background-color: ${palette.pink};
  border: 0px none;
  border-radius: 5vh;
  text-align: center;
  width: ${props => props.learn ? '25%' : 'auto'};
  padding-left: 1em ;
  padding-right: 1em;
  text-decoration: none;
  display: flex;
  align-items:center ;
  justify-content: center;
  height: 2em;
  font-family: 'PT Sans', sans-serif;
  font-weight: ${palette.bold};
  font-size: 1.2em;
  color: white;
  &:hover{
    background-color: hotpink;
  }
 `;
export const NewsContainer = styled.div`
  background-color: ${palette.TextWhite};
  height: 50vh;
  width: 100vw-8px;
  padding: 10vw;
  display: flex;
  flex-direction: column;
 `;
export const NewsCardCont = styled.div`
  display: flex;
  justify-content: space-between;
 `;
export const NewsCard = styled.div`
  width: 24vw;
  height: fit-content;
  @media (max-width: 1030px) {
    width: ${props => props.vid ? '60%' : '24vw'};
  }
 `;
export const NewsImg = styled.img`
  width: 100%;
  height: auto;
 `;
export const DateTag = styled.p`
  font-family: 'Bebas Neue', cursive;
  font-size: 1.2em;
  color: ${palette.violet};
  margin-bottom: 1%;
  margin-top: 2%;
 `;
export const FutureHead = styled.p`
 font-family: Roboto,Arial,sans-serif;//'Roboto',Arial,sans-serif
    font-weight: 800;
    font-size: 2.5em;
    line-height: 1em;
    color:${props => props.black ? palette.TextBlack : palette.TextWhite};
    margin-bottom: 5vh;
 `;
export const VideoCont = styled.div`
  width: 35vw;
  height: auto;
  padding-top: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 2%;
  @media (max-width: 1030px) {
    width: 80%;
  }
 `;
export const FutHalf = styled.div`
  width: 45vw;
  height:auto;
  padding-top: 8%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (max-width: 1030px) {
    width: 100%;
  }
 `;

export const ContactCont = styled.div`
  width: 100vw-8px;
  background-color: ${palette.TextWhite};
  height: auto;
  padding-top: 10vh;
  padding-bottom: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

 `;

export const ContactHead = styled.p`
  font-family: Roboto,Arial,sans-serif;//'Roboto',Arial,sans-serif
  font-weight: 800;
  font-size: 3em;
  width: 900px;
  line-height: 1em;
  margin: 0 0 0 0 ;
  color:${palette.TextBlack};
  margin-bottom: 5vh;
  text-align: center;
  @media (max-width: 1030px) {
   font-size: 2em;
   width: 80%;
  }
`;
export const FlexHor = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10vh;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: red;
  @media (max-width: 640px) {
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: center;
  }
 `;
export const ArtCont = styled.div`
  text-align: left;
  height: auto;
  width: 12.5%;
  flex-wrap: wrap;
  @media (max-width: 640px) {
    width: 60%;
  }
 `;
export const ArtText = styled.p`
   font-family: Roboto,Arial, Helvetica, sans-serif,;
   font-size: 0.9em;
   font-weight: 600;
   color: ${palette.lytblack};
   &:hover{
    color: ${palette.pink};
   }
 `;
export const PolicyCont = styled.div`
  width: 100vw-8px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${palette.GreyBg};
  @media (max-width: 640px) {
    flex-wrap: wrap;
    width: auto;
  }
 `;
export const TermText = styled.p`
  font-family: ${props => props.bold ? 'Roboto,Arial,sans-serif' : 'PT Sans', 'sans-serif'};
  font-size: 0.9em;
  color: ${palette.lytblack};
  font-weight: ${palette.regular};
  line-height: 1em;
`;
export const PolicyText = styled.p`
font-family: Roboto,Arial, Helvetica, sans-serif,;
font-size: 0.9em;
font-weight: 700;
color: ${palette.lytblack};
text-decoration: underline;
&:hover{
  text-decoration: none;
}
`;
export const IconCont = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
