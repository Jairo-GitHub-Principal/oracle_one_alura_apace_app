import {styled} from "styled-components"
import { RiFindReplaceLine } from "react-icons/ri";
import search from './search.png'

const ContainerSearchEstilizado = styled.div`
    position: relative;
    display: inline-block;
`

const InputStyle = styled.input`
    width: 400px;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 5px 10px;
    text-align: left;
    color: #f6f6f6;
    background-color: #000000;
    margin-right: 24px;
    font-size: 30px;
    
    `

const IconeLupa= styled.img`
top: 10px;
right: 10px;
width: 38px;
height: 38px;
position: absolute;
right: 50px;
`

const CampoTexto = (props) => {

    return (
        <ContainerSearchEstilizado>           
            <InputStyle  type="text" placeholder="Digite sua busca" />
            <IconeLupa src={search} alt="lupa" />
        </ContainerSearchEstilizado>
    )
}

export default CampoTexto