import './App.css';
import backgroundImage from './components/images/Oficina-de-carro.jpg';

function App() {
  return (
    <div 
      className="App" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="header">
        <h1>STOP CAR</h1>
      </div>
      <div className="header">
        <p>Marque um horário com a gente!</p>

      </div>
      
      <form>
        <div className="form-group">
          <label htmlFor="name">Seu nome completo</label>
          <input type="text" id="name" name="name" placeholder="Seu nome" />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Seu E-mail</label>
          <input type="email" id="email" name="email" placeholder="Seu e-mail" />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Telefone</label>
          <input type="tel" id="phone" name="phone" placeholder="Seu telefone" />
        </div>
        
        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}

export default App;
