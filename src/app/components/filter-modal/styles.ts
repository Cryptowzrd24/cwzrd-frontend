const styles = {
  modalFilterMain: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '496px',
    height: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },

  filterHeading: {
    textAlign: 'center',
    fontSize: '18px',
    fontFamily: 'Sf Pro Display',
    fontWeight: 600,
    flexGrow: 2,
    marginLeft: '100px',
  },

  accordian: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },

  accordianSummaryHeader: {
    fontSize: '14px',
    fontFamily: 'Sf Pro Display',
    fontWeight: 700,
    letterSpacing: '1px',
  },

  divider: {
    marginTop: '25px',
  },

  filterFooterBtns: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginTop: '10px',
  },

  priceRangeBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  accordianHeaderText: {
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: 'Sf Pro Display',
  },
  textField: {
    width: '450px',
    '& .MuiInputBase-input': {
      fontSize: '14px',
    },
    '& .MuiInputLabel-root': {
      fontSize: '14px',
    },
    '& .MuiFormHelperText-root': {
      fontSize: '14px',
    },
  },
  mostSearchedBox: {
    // marginTop: '45px',
    // backgroundColor: 'green',
  },
  mostSearchedHeading: {
    marginTop: '25px',
    fontSize: '12px',
    color: 'grey',
  },
  minableAuditedText: {
    fontSize: '14px',
    fontFamily: 'Sf Pro Display',
    fontWeight: 700,
    letterSpacing: '1px',
    marginLeft: '15px',
  },
  switch: {
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#7248F7',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#7248F7',
    },
  },
  applyBtn: {
    backgroundColor: '#7248F7',
    color: '#ffff',
    '&:hover': {
      backgroundColor: '#613dd9',
    },
  },
};

export default styles;
