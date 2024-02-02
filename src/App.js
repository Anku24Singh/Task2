
import './App.css';
import CenteredContent from './CenteredContent';
import Ci from './Ci';
// import CircularIcons from './CircularIcons';
import Footer from './Footer';
// import SocialMediaIcons from './SocialMediaIcons';
import Logo from './Logo'


function App() {
  return (
    <div className="App">
      <CenteredContent></CenteredContent>
      <Ci></Ci>
       {/* <CircularIcons></CircularIcons> */}
      <Logo></Logo>
      <Footer></Footer>
      {/* <SocialMediaIcons></SocialMediaIcons>  */}
    </div>
  );
}

export default App;
