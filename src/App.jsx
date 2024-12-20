import { styled } from 'styled-components'
import ExtilosGlobais from './Components/EstilosGlobais'
import Header from './Components/Header'
import BarraLateral from './Components/Barralateral'
import Banner from './Components/Banner'
import Galeria from './Components/Galeria'

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
  flex-grow: 1;
`
function App() {


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
          <Galeria />
          </ConteudoGaleria>
         
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
