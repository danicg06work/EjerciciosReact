// src/Welcome.jsx
import React from 'react';

const Welcome = () => {
  // Estilos inline
  const styles = {
    color: 'white',
    backgroundColor: '#6f35f777',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px'
  };

  return <h1 style={styles}>¡Bienvenido a mi primera app en React!</h1>;
};

export default Welcome;
