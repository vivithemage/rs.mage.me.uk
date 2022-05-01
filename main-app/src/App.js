import logo from './avatar.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Reza Snowdon</h1>
        <p>
          Hello there, welcome to my personal site 😄
        </p>
        <p>I live and work in Darlington, England. In my spare time I work on various projects and experiments.</p>
        <p>Details can be found on my <a
            className="App-link"
            href="https://blog.vixre.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          > blog</a>,
          <a
            className="App-link"
            href="https://gitlab.com/vivithemage"
            target="_blank"
            rel="noopener noreferrer"
          >
          gitlab</a> and 
          <a
            className="App-link"
            href="https://github.com/vivithemage"
            target="_blank"
            rel="noopener noreferrer"
          >github</a> accounts. </p>
        <p>I've also started cycling rather than driving to work! &#128690;. </p>
        <p>
          <a
            className="Email-link"
            href="mailto:ribqhev9t@mozmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >          
            Get in Touch
          </a>                    
        </p>
      </header>
    </div>
  );
}

export default App;
