const styles = {
  searchContainer: {
    padding: '5px',
    border: '1px solid #1111111A',
    paddingInline: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    margin: '8px',
    borderRadius: '7px',
  },
  searchInput: {
    outline: 'none',
    border: 'none',
    background: 'transparent',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20.8px',
    fontFamily: 'Sf Pro Display',
    color: '#111111',
    width: '100%',
  },
  dropdownSubheading: {
    fontSize: '12px',
    fontFamily: 'Sf Pro Display',
    color: 'grey',
    fontWeight: 400,
  },
  menuItem: {
    fontWeight: 600,
    fontSize: '15px',
    fontFamily: 'Sf Pro Display',
    padding: '15px 20px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
      cursor: 'pointer',
    },
  },
};
export default styles;
