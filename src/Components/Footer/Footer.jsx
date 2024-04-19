import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.logo}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDb Logo" style={styles.logoImg} />
        </div>
        <div style={styles.links}>
          <a href="#">About IMDb</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          {/* Add more links as needed */}
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
  },
  logoImg: {
    width: '100px',
  },
  links: {
    flex: 2,
    textAlign: 'right',
  },
};

export default Footer;
