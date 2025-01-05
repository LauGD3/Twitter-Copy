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
    backgroundColor: '#000',
    width: '230px',
    height: '100vh',
    position: 'fixed',
    top: '0',
    left: '0',
    gap: '6px'
  },
  buttom: { 
    width: '100%',
    margin: '20px auto',
    padding: '10px',
    backgroundColor: '#fff',
    color: 'black',
    borderRadius: '30px',
    textTransform: 'none',
    fontSize: '1.1rem',
    '&:hover': {
      backgroundColor: '#d7dbdc',
    }
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}
