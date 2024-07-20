const styles = {
  searchContainer: {
    border: '1px solid rgba(17, 17, 17, 0.05)',
    paddingInline: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '56px',
    width: '250px',
    height: '46px',
  },
  searchInput: {
    outline: 'none',
    border: 'none',
    background: 'transparent',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20.8px',
    fontFamily: 'Sf Pro Display',
    color: 'rgba(17, 17, 17, 0.4)',
    width: '100%',
  },
  dropdownSubheading: {
    fontSize: '12px',
    fontFamily: 'Sf Pro Display',
    color: 'grey',
    fontWeight: 400,
    paddingBottom: '10px',
  },
  menuItem: {
    color: 'rgba(17, 17, 17, 1)',
    fontWeight: 500,
    fontSize: '16px',
    fontFamily: 'Sf Pro Display',
    padding: '15px 10px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      cursor: 'pointer',
    },
  },
};
export default styles;
