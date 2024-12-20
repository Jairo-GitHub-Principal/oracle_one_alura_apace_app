import { styled } from "styled-components"




const ItemNavegationStyle = styled.li`
   width: 100%;
   /* border: solid 1px #7B78E5; */
    list-style: none;
    display: flex;
    margin: 30px 0 30px 30px ;
    gap: 20px;
    align-items: center;
    line-height: 24px;
    cursor: pointer;
    font-size: 24px; 
    font-family: ${props => props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
    color: ${props => props.$ativo ? "#7B78E5" : "#f6f6f6"}; /**obs.: a props passada para o styled component pode ser passada para o component 
    usa uma sintaxe de marcar a props com o "$" obs.: $ativo, ou props.$ativo
    
    Quando você passa uma prop para um Styled Component, a anotação com $ serve para diferenciar quais props são realmente utilizadas no estilo e quais não devem ser repassadas como atributos HTML para o elemento DOM. Essa anotação é específica para bibliotecas como o styled-components ou Emotion, e ajuda a evitar problemas de compatibilidade com o HTML.
    */ 
`

const ItenNavegation = ({ children, ativo = false, linkAtivo, linkInativo }) => {
    return (
        <ItemNavegationStyle $ativo ={ativo}> {/**aqui nos vamos passar props para o styled component não confundir o styled component com o component normal, obs.: para passar props para o styledComponent usamos marcamos a Props com o "$" exemplo: $props" */}
            <img src={ativo ? linkAtivo : linkInativo} alt="" /> {/* pra importar da pasta public*/}
            {children}

        </ItemNavegationStyle>

    )
}

export default ItenNavegation