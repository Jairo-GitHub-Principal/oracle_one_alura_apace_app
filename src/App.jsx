import { styled } from 'styled-components'
import ExtilosGlobais from './Components/EstilosGlobais'
import Header from './Components/Header'
import BarraLateral from './Components/Barralateral'
import Banner from './Components/Banner'
import Galeria from './Components/Galeria'
import { useState } from 'react'
import fotos from './fotos.json'
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

  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  function SetFotoSelecionada(foto) {
    setFotoSelecionada(foto)
    // console.log("App AoFotoSelecionada", foto)
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
        <Header />
        <MainContainer>
          <BarraLateral />

          <ConteudoGaleria>
            <Banner backgroundImage="../../public/imagens/banner.png"
              texto="A galeria mais completa de fotos do espaço!" />
            <Galeria
              fotos={fotosDaGaleria}
              aoFotoSelecionada={SetFotoSelecionada}
              aoAlternarFavorito={aoAlternarFavorito}
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
