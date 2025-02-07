// ----- MiniUser Component Styles ----- //

export const textBox = {
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
};

export const avAndtext = {
  display: 'flex',
};

export const verifiedBox = {
  display: 'flex', 
  alignItems: 'center', 
  height: '20px',
  '& strong': {
    lineHeight: '20px', 
    fontSize: '14px'
  }
};

export const miniUser = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  borderRadius: '30px',
  padding: '6px',
  '&:hover': {
    backgroundColor: '#1e1e1e',
    cursor: 'pointer'
  }
};

export const cardStyles = {
  display: 'flex',
  width: '100%',
  '&:hover': {
    backgroundColor: '#1e1e1e',
    cursor: 'pointer'
  }
};

export const miniUserBox = { 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between', 
  width: '100%', 
};

export const cardVariant = { 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between', 
  width: '100%', 
  padding: '10px',
};

export const spaceBox = {
  width: '18px', 
  height: '18px'
};

export const button = {
  padding: '3px 14px',
  backgroundColor: '#fff',
  color: 'black',
  borderRadius: '20px',
  textTransform: 'none',
  fontSize: '0.9rem',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: '#d7dbdc',
  },
};

export const followButton = {
  padding: '3px 14px',
  backgroundColor: 'transparent',
  color: '#FFF',
  borderRadius: '20px',
  textTransform: 'none',
  fontSize: '0.9rem',
  fontWeight: '600',
  border: '2px solid rgba(255, 0, 0, 0.59)',
  '&:hover': {
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
  },
};