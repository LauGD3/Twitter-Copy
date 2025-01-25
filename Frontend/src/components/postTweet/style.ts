export const styles = {
  background: {
    backgroundColor: 'rgba(36, 45, 52, 0.48)',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000
  },
  modal: {
    position: 'absolute',
    top: '19%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
    bgcolor: '#000000',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '.2rem',
    borderRadius: 6,
  },
  modalHeader: {
    top: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  icon: {
    borderRadius: '50%',
    cursor: 'pointer',
    padding: '6px',
    '&:hover': {
      bgcolor: '#1e1e1e'
    }
  },
  textFieldContainer: {
    flex: 1,
    display: "flex",
    alignItems: "start",
    height: '3rem',
  },
  textField: {
    flex: 1,
    "& .MuiInputBase-root": {
      display: "flex",
      alignItems: "start",
      padding: "0.5rem 0",
    },
    "& .MuiInputBase-input": {
      color: "white",
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#63676c",
      opacity: 1,
      fontSize: "1.5rem",
    },
    backgroundColor: "transparent",
    border: "none",
  },
  bodyModal: {
    display: 'flex',
    alignItems: 'start',
    gap: '1rem',
    padding: '0 1rem'
  },
  replyOptionsIcon: {
    color: "#FFF",
    width: '18px',
    height: '18px',
    padding: '10px',
    borderRadius: '50%',
    bgcolor: '#1e9bf0'
  },
  replyOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    '&:hover': {
      bgcolor: '#1e1e1e',
    },
    color: '#FFF'
  },
  replyPopover: {
    with: '19rem',
    padding: '1rem 0 ',
    bgcolor: '#000',
    maxWidth: '19rem',
    width: '100%',
    borderRadius: '5%',
    height: 'auto'
  },
  button: {
    padding: '4px 20px',
    backgroundColor: '#fff',
    color: 'black',
    borderRadius: '20px',
    textTransform: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#d7dbdc',
    },
  },
  buttomIcons: {
    color: '#1e9bf0',
    padding: '8px',
    borderRadius: '50%',
    '&:hover': {
      bgcolor: 'rgba(36, 45, 52, 0.48)',
      cursor: 'pointer'
    }
  },
  buttomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem',
    marginTop: '0.5rem'
  },
  buttonPopover: {
    borderRadius: 30,
    textTransform: "none",
    padding: "2px 20px",
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center'
  },
  iconPopOver: {
    width: '15px', 
    marginRight: '5px'
  }
};