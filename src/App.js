import './app.css'
import HeadePage from './Pages/HeaderPage'
import { ContainerLayout } from './Styles/Layouts';

function App() {
  return (
    <div className="App">
      <ContainerLayout>
          <HeadePage />
      </ContainerLayout>     
    </div>
   
  );
}

export default App;
