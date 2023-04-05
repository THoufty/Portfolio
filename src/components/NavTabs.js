import summer from './images/summer.png'
import spring from './images/spring.png'
import fall from './images/fall.png'
import winter from './images/winter.png'

const styles = {
  btnFloating: {
    borderRadius: '40px',
    width: '180px',
    height: '180px',
    display: 'flex',
  },
  
  btnFloatingImg: {
    width: '100%',
    height: '100%',
  }
}


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="fixed-action-btn">
      <a href="#home" className={`btn-floating btn-large blue ${currentPage === 'Home' ? 'nav-link active' : 'nav-link'}`} style={styles.btnFloating}>
        <img
          src={winter}
          alt="Home"
          onClick={() => handlePageChange('Home')}
          style={styles.btnFloatingImg}
        />
      </a>
      <a href="#about" className={`btn-floating btn-large blue ${currentPage === 'About' ? 'nav-link active' : 'nav-link'}`} style={styles.btnFloating}>
        <img
          src={spring}
          alt="About"
          onClick={() => handlePageChange('About')}
          style={styles.btnFloatingImg}
        />
      </a>
      <a href="#work" className={`btn-floating btn-large blue ${currentPage === 'Work' ? 'nav-link active' : 'nav-link'}`} style={styles.btnFloating}>
        <img
          src={summer}
          alt="Work"
          onClick={() => handlePageChange('Work')}
          style={styles.btnFloatingImg}
        />
      </a>
      <a href="#contact" className={`btn-floating btn-large blue ${currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}`} style={styles.btnFloating}>
        <img
          src={fall}
          alt="Contact"
          onClick={() => handlePageChange('Contact')}
          style={styles.btnFloatingImg}
        />
      </a>
    </div>
  );
}

export default NavTabs;
