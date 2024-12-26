import {styled} from "styled-components";


const Titulo = styled.h2`
margin: 10px;
    color:#7B78E6; 
    font-size:32px;
    text-align: ${props => props.$alinhamento?props.$alinhamento:"left"};
    padding: 20px 0;
`

export default Titulo