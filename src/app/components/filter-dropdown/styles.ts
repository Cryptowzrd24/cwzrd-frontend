const styles = {
  searchContainer: {
    border: '1px solid rgba(17, 17, 17, 0.05)',
    paddingInline: {
      xs: '16px',
      sm: '20px',
    },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: {
      xs: '6px',
      sm: '8px',
    },
    borderRadius: '56px',
    width: {
      xs: '220px',
      sm: '250px',
    },
    height: {
      xs: '40px',
      sm: '46px',
    },
  },
  searchInput: {
    outline: 'none',
    border: 'none',
    background: 'transparent',
    fontSize: {
      xs: '13px',
      sm: '14px',
    },
    fontWeight: '500',
    lineHeight: {
      xs: '18px',
      sm: '20.8px',
    },
    fontFamily: 'Sf Pro Display',
    color: 'rgba(17, 17, 17, 0.4)',
    width: '100%',
  },
  dropdownSubheading: {
    fontSize: {
      xs: '11px',
      sm: '12px',
    },
    fontFamily: 'Sf Pro Display',
    color: 'grey',
    fontWeight: 400,
    paddingBottom: {
      xs: '8px',
      sm: '10px',
    },
  },
  menuItem: {
    color: 'rgba(17, 17, 17, 1)',
    fontWeight: 500,
    fontSize: {
      xs: '14px',
      sm: '16px',
    },
    fontFamily: 'Sf Pro Display',
    padding: {
      xs: '12px 8px',
      sm: '15px 10px',
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      cursor: 'pointer',
    },
  },
};
export default styles;
