
import styled from "styled-components"
import imgFacebook from "./icons/facebook.png"
import imgTwitter from "./icons/twitter.png"
import imgInstagram from "./icons/instagram.png"



const ContainerFooter = styled.footer`
display: flex;
align-items: center;
justify-content: space-between;
box-sizing: border-box;
padding: 0 30px;
width: 100%;
height: 100px;
border: 1px solid #f6f6f6;
font-size: 25px;
font-family: 'GandhiSansRegular';
color: #f6f6f6;
background-color:rgba(1, 0, 47, 0.08);;
border: none;
`

const RedesSoiais = styled.div`
display: flex;
gap: 24px;
`

const IconsRedesSoiais = styled.img`
width: 30px;
height: 30px;
`

const Footer = () => {
    return (
        <ContainerFooter>
            <RedesSoiais>
                <IconsRedesSoiais src={imgFacebook} alt="icone do instagram" />
                <IconsRedesSoiais src={imgTwitter} alt="icone do facebook" />
                <IconsRedesSoiais src={imgInstagram} alt="icone do instagram" />
            </RedesSoiais>
            <div>
                <h4>Desenvolvido por Alura.</h4>
            </div>
        </ContainerFooter>
    )
}

export default Footer