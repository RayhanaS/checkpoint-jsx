
import './App.css';
import NavBar from './component/NavBar/NavBar';
import Main from './component/main/Main';
import Footer from './component/footer/Footer';
import imageInSrc from './imageInSrc.jpg';

function App() {
  return (
    <div className="App">
      <div className="checkpoint" style={{border:"solid 1px black", maxWidth:"100vw"}}>
        <h1 className={"title"}> hello everyone</h1>
        <br />
        <NavBar/>
        <img src={imageInSrc} alt='image in the src folder'/>
        <br />
            <img src="/imageInPublic.jpg" alt='image in the public folder'/>
      </div>
      <iframe width="853" height="480" src="https://www.youtube.com/embed/9OJLxDxyNg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      );   
}
export default App;
