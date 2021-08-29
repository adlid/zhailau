import './app.css'
import FooterPage from './Pages/FooterPage';
import HeadePage from './Pages/HeaderPage'
import MainPage from './Pages/MainPage';
import { ContainerLayout } from './Styles/Layouts';

function App() {
  return (
    <div className="App">
       <HeadePage />
      <ContainerLayout>
          <MainPage/>
          <FooterPage/>
      </ContainerLayout>     
    </div>
   
  );
}

export default App;
