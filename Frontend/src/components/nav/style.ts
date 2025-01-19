export const navStyles = {
  navItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 20px',
    cursor: 'pointer',
    gap: '12px',
    '&:hover': {
      backgroundColor: '#1e1e1e',
      borderRadius: '30px',
    },
    '& span': {
      marginLeft: '10px',
      color: '#fff',
      fontSize: '1.3rem',
    },
  },
  navBar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    top: '0',
    left: '0',
    gap: '6px'
  },
  button: {
    width: '100%',
    margin: '20px auto',
    padding: '10px',
    backgroundColor: '#fff',
    color: 'black',
    borderRadius: '30px',
    textTransform: 'none',
    fontSize: '1.1rem',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#d7dbdc',
    }
  },
  main: {
    left: '16.3%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '230px',
    height: '100vh',
    position: 'fixed',
  },
  topNavBar: {
    position: 'fixed',
    width: '100%',           
    maxWidth: '598px',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',  
    border: '1px solid #2f3336',    
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  tabs: {
    minWidth: '150px',
    width: '300px',
    textTransform: 'none',
    transition: '.3s',
    '&:hover': {
      backgroundColor: 'rgba(37, 37, 37, 0.8)',
    },
  }
}

