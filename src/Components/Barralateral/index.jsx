import { styled } from "styled-components"
import ItemNavegation from "./ItemNavegation"


const ListaStyle = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 236px;
`





const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaStyle>
                    <ItemNavegation
                        linkAtivo="../../../public/icones/home-ativo.png"
                        linkInativo="../../../public/icones/home-inativo.png"
                        ativo={true}
                    >   Inicio

                    </ItemNavegation>


                    <ItemNavegation
                        linkAtivo="../../../public/icones/mais-vistas-ativo.png"
                        linkInativo="../../../public/icones/mais-vistas-inativo.png"
                        
                    >   Mais vistos

                    </ItemNavegation>

                    <ItemNavegation
                        linkAtivo="../../../public/icones/novas-ativo.png"
                        linkInativo="../../../public/icones/novas-inativo.png"
                    >   Novas

                    </ItemNavegation>
                    <ItemNavegation
                        linkAtivo="../../../public/icones/surpreenda-me-ativo.png"
                        linkInativo="../../../public/icones/surpreenda-me-inativo.png"
                    >   Surpreenda-me

                    </ItemNavegation>
                </ListaStyle>
            </nav>

        </aside>
    )
}

export default BarraLateral