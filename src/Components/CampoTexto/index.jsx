import {styled} from "styled-components"
import { RiFindReplaceLine } from "react-icons/ri";
import search from './search.png'

const ContainerSearchEstilizado = styled.div`
    position: relative;
    display: inline-block;
`

const InputStyle = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    
    `

const IconeLupa= styled.img`
 position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
    cursor: pointer;
    &:active{
  transform: scale(1.15); /* Efeito de "pressionado" */
    }
`

const CampoTexto = ({FotoSearch, ...props}) => {

    return (
        <ContainerSearchEstilizado>           
            <InputStyle  
                type="text" 
                placeholder="Digite sua busca" 
                onClick={(eventes)=> FotoSearch(eventes.target.value)}
                onKeyDown={(eventes)=> FotoSearch(eventes.target.value)}
                {...props}/> 
            <IconeLupa src={search} alt="lupa"   />
        </ContainerSearchEstilizado>
    )
}

export default CampoTexto