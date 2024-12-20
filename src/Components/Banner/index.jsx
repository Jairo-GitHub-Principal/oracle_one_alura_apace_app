import styled from "styled-components"

const StyledBanner = styled.div`
display: flex;
justify-content: start;
align-items: center;
flex-grow: 1;
height: 300px;
border-radius:20px ;
margin: 0;
background-image: ${props => `url(${props.$bakcgroundImage})`};
background-repeat: no-repeat;
background-position: center;
font-family: 'GandhiSansBold';
color: #f6f6f6;
`

const TituloEstilizadoStyle = styled.h1`
width: 100%;
    font-family: 'GandhiSansBold';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: start;
    color: #f6f6f6;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`
const Banner = (props) => {
    return (
        <StyledBanner $bakcgroundImage={props.bakcgroundImage} >
            <TituloEstilizadoStyle>{props.texto}</TituloEstilizadoStyle>
        </StyledBanner>
    )
}


export default Banner