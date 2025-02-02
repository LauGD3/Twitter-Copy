// ----- NavBar Component Styles ----- //

export const main = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '230px',  
  height: '100vh'
};

export const navBar = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  top: '0',
  left: '0',
  gap: '6px'
};

export const navItem = {
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
};

export const button = {
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
};

// ----- TopBar Component Styles ----- //

export const tabs = {
  minWidth: '150px',
  width: '300px',
  textTransform: 'none',
  transition: '.3s',
  '&:hover': {
    backgroundColor: 'rgba(37, 37, 37, 0.64)',
  },
};

export const topNavBar = {
  width: '100%',           
  maxWidth: '598px',
  top: '0', 
  border: '1px solid #2f3336',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  height: '100%',
  minHeight: '10rem',
  maxHeight: '13rem',
};