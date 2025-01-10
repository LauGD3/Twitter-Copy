export const userStyles = {
  // MiniUser Component
  miniUser: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    margin: '20px auto',
    borderRadius: '30px',
    padding: '10px',
    '&:hover': {
      backgroundColor: '#1e1e1e',
      cursor: 'pointer'
    }
  },
  textBox: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    '& strong': {
      color: '#fff',
      fontSize: '14px',
    },
    '& span': {
      color: '#71767b',
      fontSize: '14px',
    },
  },
  avAndtext: {
    display: 'flex',
  },
  verifiedBox: {
    display: 'flex', 
    alignItems: 'center', 
    height: '20px',
    '& strong': {
      lineHeight: '20px', 
      fontSize: '14px'
    }
  },
  spaceBox: {
    width: '18px', 
    height: '18px'
  }
}