
import Navbar from './navbar';
import Footer from './footer';
import Main from './main';
import '../../assets/styles/home.css';

function Home() {
    return (
        <div className='homeContainer'>
        <Navbar></Navbar>
        <Main></Main>
        <Footer></Footer>
        </div>
    );
  }
  
  export default Home;