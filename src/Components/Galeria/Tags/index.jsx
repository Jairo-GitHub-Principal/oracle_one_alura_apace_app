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
cursor: pointer;
border: none;
background:rgba(251, 251, 251, 0.2);
border-radius: 10px;
color: aliceblue;
padding: 10px;
font-family: 'AlegreyaSans';
font-size: 24px;

&:active{
  transform: scale(0.95); /* Efeito de "pressionado" */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra ao pressionar */

}
`




// Definindo a fonte globalmente

const TagTextInfo = styled.h3`
margin: 5px 20px 5px 5px;
color: #f6f6f6;
font-family: 'AlegreyaSans';
font-size: 24px;

`


const Tags = ({aoTagClicada}) => {
  return (
    <TagContainer>

      <TagTextInfo>Busque por tags:</TagTextInfo>

      {tags.map(tag => <TagButton
        key={tag.id}
        onClick={() => aoTagClicada(tag.id)}
      >
        {tag.title}</TagButton>)}

    </TagContainer>
  )
}

export default Tags