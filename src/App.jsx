import { styled } from 'styled-components'
import ExtilosGlobais from './Components/EstilosGlobais'
import Header from './Components/Header'
import BarraLateral from './Components/Barralateral'
import Banner from './Components/Banner'
import Galeria from './Components/Galeria'
import { useState,useEffect } from 'react'
import fotos from './fotos.json'
import fotosPopulares from './Components/Galeria/Populares/fotos-populares.json'
import fotoVejaMais from "./Components/Galeria/Populares/foto-vejamais.json"

import ModalZoom from './Components/ModalZoom'
import Footer from './Components/Footer'



const FundoGradiente = styled.div`
background: linear-gradient(174.61deg, #041833 4.15%, #04244f 48%,#04244f 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`


const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;


`

const MainContainer = styled.main`

 display: flex;
 max-width: 1500px;
 margin: 0 auto; 
 padding: 40px 20px;

 `

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

`
function App() {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos) // listar as fotos na galeria
  const [fotosPopularesGaleria, setFotosPopularesGaleria] = useState(fotosPopulares) // listar as fotos na galeria de populares
  const [fotosVejaMaisGaleria, setFotosVejaMaisGaleria] = useState(fotoVejaMais) // listar as fotos na galeria de populares
  const [fotoSelecionada, setFotoSelecionada] = useState(null) // selecionar uma foto na galeria para exibir no modal zoom


  function SetFotoSelecionada(foto) {
    console.log("App SetFotoSelecionada", foto)
    setFotoSelecionada(foto)
  }

  

  const AoTagClicada = (tag) => { /** aqui selecionaremos as fotos de acordo com a tag clicada */
    console.log("App aoTagClicada", tag)
    
    if(tag === 0){
              setFotosDaGaleria(fotos)
    }else {
      
      const fotosFiltradas = fotos.filter(foto => foto.tagId === tag)
      
      setFotosDaGaleria(fotosFiltradas)
      console.log("fotosFiltradas",fotosFiltradas)

    }
  
     
  }

  const FotoSearch = (pesquisa) => {
    console.log("App aoTagClicada", pesquisa)
    
    const fotosFiltradas = fotos.filter(foto => foto.titulo.toLowerCase().includes(pesquisa.toLowerCase()))
    setFotosDaGaleria(fotosFiltradas)
    console.log("fotosFiltradas",fotosFiltradas)

  }
  

  const aoAlternarFavorito = (foto) => {
    if(foto.id===fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(f => {
      return {
        ...f,
        favorita:f.id === foto.id ? !foto.favorita : f.favorita
      }
      
    }))
    console.log("App aoAlternarFavorito",foto.favorita, foto.id)

  }
  return (
    <FundoGradiente >

      <ExtilosGlobais />
      <AppContainer>
        <Header FotoSearch={FotoSearch}/>
        <MainContainer>
          <BarraLateral />

          <ConteudoGaleria>
            <Banner backgroundImage="../../public/imagens/banner.png"
              texto="A galeria mais completa de fotos do espaço!" 
              FotoSearch={FotoSearch}
              />
            <Galeria
              fotosPopulares={fotosPopularesGaleria}/** fotos populares */
              fotoVejaMais={fotosVejaMaisGaleria}
              aoFotoSelecionada={SetFotoSelecionada} /** usado para selecionar foto tanto em galeria quanto em populares */
              fotos={fotosDaGaleria} /** fotos da galeria */
              aoAlternarFavorito={aoAlternarFavorito} /** função usado para alternar favorito */
              aoTagClicada={AoTagClicada}
            />
          </ConteudoGaleria>

        </MainContainer>
        <Footer />

      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
        // aoFechar={() => setFotoSelecionada(null)} por hora esse metodo de fechar o modal não esta sendo usado

      />

    </FundoGradiente>
  )
}

export default App
