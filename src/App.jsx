import { styled } from 'styled-components'
import ExtilosGlobais from './Components/EstilosGlobais'
import Header from './Components/Header'
import BarraLateral from './Components/Barralateral'
import Banner from './Components/Banner'
import Galeria from './Components/Galeria'
import { useState } from 'react'
import fotos from './fotos.json'
import ModalZoom from './Components/ModalZoom'



const FundoGradiente = styled.div`
background: linear-gradient(174.61deg, #041833 4.15%, #04244f 48%,#04244f 48%, #154580 96.76%);
width: 100%;
height: 100%;
`


const AppContainer = styled.div`

width: 1440px;
max-width: 100%;
min-width: 400px;
margin: 0 auto;
`

const MainContainer = styled.main`
 display: flex;
    
    gap: 24px;
    width: 100%;
    margin-top:70px ;
    box-sizing: border-box;

`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  padding:24px;
  box-sizing: border-box;
  flex-grow: 1;

`
function App() {

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  function SetFotoSelecionada(foto) {
    setFotoSelecionada(foto)
    console.log("App",foto)
  }

  return (
    <FundoGradiente >

      <ExtilosGlobais />
      <AppContainer>
        <Header />
        <MainContainer>
          <BarraLateral />

          <ConteudoGaleria>
            <Banner bakcgroundImage="../../public/imagens/banner.png"
              texto="A galeria mais completa de fotos do espaço!" />
            <Galeria
              fotos={fotosDaGaleria}
              aoFotoSelecionada={SetFotoSelecionada}
            />
          </ConteudoGaleria>

        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} />
    </FundoGradiente>
  )
}

export default App
