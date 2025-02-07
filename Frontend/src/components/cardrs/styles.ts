// ----- Cards Component Styles----- //
export const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #2f3336',
  borderRadius: '20px',
  minWidth: '18.75rem',
  minHeight: '21.75rem',
  maxHeight: '25.5rem',
  width: 'fit-content',
  height: 'fit-content',
  justifyContent: 'end',
  '& span:nth-of-type(2)': {
    color: '#1e9bf0',
    padding: '10px 0',
    paddingLeft: '10px',
    width: '96.6%',
    cursor: 'pointer',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    '&:hover': {
      backgroundColor: '#1e1e1e',
    }
  },
  '@media (max-width: 1030px)': {
    minWidth: '15.75rem',
  },
  '@media (max-width: 985px)': {
    minWidth: '10.75rem',
    width: '100%',
  },
};

export const trendingBox = {
  display: 'flex',
  flexDirection: 'column',
  '& label': {
    color: '#71767b',
    fontSize: '14px',
  }
};

export const trendingMainBox = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px 10px',
  '&:hover': {
    backgroundColor: '#1e1e1e',
    cursor: 'pointer'
  }
};

// ----- CardColumn Component Styles----- //
export const columStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

export const inputStyles = {
  width: '96%',
  "& .MuiInputBase-input::placeholder": {
    color: "#63676c",
    opacity: 1,
  },
  "& .MuiInputBase-root": {
    backgroundColor: '#transparent',
    borderRadius: '2rem',
    border: '2px solid #2f3336',
    display: "flex",
    alignItems: "center",
    padding: "0.5rem",
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputBase-root.Mui-focused": {
    border: '2px solid #1e9bf0',
    borderRadius: '2rem',
  }
};

export const columBoxStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 960px)': {
    display: 'none',
  }
};