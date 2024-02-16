import '../../assets/styles/nav.css';
import Avatar from '../../assets/img/profileAvatar.png'

function Navbar() {
  const language = 'العربية'
    return (
      <div className="navContainer">
        <div className='languageContainer'>{language}</div>
        <div className='navMenu'>
          <img src='http://bigramyweb.inovaeg.com/static/media/main-logo.d37fd44b1dd3dfb263bfdd977c7cef90.svg' alt='Big Ramy'></img>
          <div className='loginDetails'>
            <img src={Avatar} alt=''></img>
            <p>Hello Testy</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;