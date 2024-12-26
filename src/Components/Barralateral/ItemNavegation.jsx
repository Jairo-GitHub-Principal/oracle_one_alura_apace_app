import { styled } from "styled-components"




const ItemNavegationStyle = styled.li`
   font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display: flex;
    align-items: center;
    gap: 22px;
`

const ItenNavegation = ({ children, linkAtivo, linkInativo , ativo = false }) => {
    return (
        <ItemNavegationStyle $ativo ={ativo}> {/**aqui nos vamos passar props para o styled component não confundir o styled component com o component normal, obs.: para passar props para o styledComponent usamos marcamos a Props com o "$" exemplo: $props" */}
            <img src={ativo ? linkAtivo : linkInativo} alt="" /> {/* pra importar da pasta public*/}
            {children}

        </ItemNavegationStyle>

    )
}

export default ItenNavegation