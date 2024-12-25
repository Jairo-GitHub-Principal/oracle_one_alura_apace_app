import tags from './tags.json'
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import AlegreyaSansRegular from "./fontes/Alegreya_Sans/AlegreyaSans-Regular.ttf"



const FontStyle = createGlobalStyle`
  @font-face {
    font-family: 'AlegreyaSans';
    src: local('AlegreyaSans'),
         url(${AlegreyaSansRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

const TagContainer = styled.button`
display: flex;
align-items: center;
background-color:transparent;
margin-top: 56px;
border: none;
gap: 24px;
`
const TagButton = styled.button`
display: flex;
border: none;

background:rgba(251, 251, 251, 0.2);
border-radius: 10px;
color: aliceblue;
padding: 10px;
font-family: 'AlegreyaSans';
font-size: 24px;
`


// Definindo a fonte globalmente

const TagTextInfo = styled.h3`
margin: 5px 20px 5px 5px;
color: #f6f6f6;
font-family: 'AlegreyaSans';
font-size: 24px;

`


const  Tags = () => {
    return (
        <TagContainer>

            <TagTextInfo>Busque por tags:</TagTextInfo>
          
                {tags.map(tag => <TagButton key={tag.id}>{tag.title}</TagButton>)}
        </TagContainer>
    )
}

export default Tags