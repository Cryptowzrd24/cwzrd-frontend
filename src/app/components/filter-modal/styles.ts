const styles = {
  modalFilterMain: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '496px',
    height: '550px !important',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'space-between',
    overflowY: 'scroll',
  },

  filterHeading: {
    textAlign: 'center',
    fontSize: '18px',
    fontFamily: 'Sf Pro Display',
    fontWeight: 600,
    flexGrow: 2,
    marginLeft: '40px',
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
    minHeight: '46px !important',
    maxHeight: '46px !important',
    letterSpacing: '1px',
    padding: '0 4px !important',
    '& .MuiAccordionSummary-content': {
      justifyContent: 'space-between !important',
    },
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
    marginTop: '10px !important',
  },
  accordianHeaderText: {
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: 'Sf Pro Display',
  },
  textField: {
    width: '450px',
    '& .MuiInputBase-input': {
      borderRadius: '8px',
      fontSize: '14px',
      '&[type="number"]': {
        MozAppearance: 'textfield', // Firefox
        WebkitAppearance: 'none', // Chrome, Safari, and Opera
        appearance: 'none', // Standard
        margin: 0, // Remove default margin
      },
    },
    '& .MuiInputLabel-root': {
      fontSize: '14px',
    },
    '& .MuiFormHelperText-root': {
      fontSize: '14px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'defaultColor',
      },
      '&:hover fieldset': {
        borderColor: 'rgba(114, 72, 247, 1)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(114, 72, 247, 1)',
      },
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
    paddingBottom: '15px',
  },
  minableAuditedText: {
    fontSize: '14px',
    fontFamily: 'Sf Pro Display',
    fontWeight: 700,
    letterSpacing: '1px',
  },
  switch: {
    width: '44px !important',
    height: '24px !important',
    padding: '0 !important',
    borderRadius: '25px',
    '& .MuiSwitch-switchBase': {
      top: '-7px !important',
      left: '-7px !important',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: '#fff',
      backgroundColor: '#7248F7',
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#7248F7',
      opacity: 1,
    },
  },
  closeCancelBtn: {
    height: '48px',
    borderRadius: '8px',
    padding: '0 24px',
    fontSize: '14px',
    marginRight: '10px',
  },
  applyBtn: {
    height: '48px',
    borderRadius: '8px',
    padding: '0 24px',
    fontSize: '14px',
    backgroundColor: '#7248F7',
    color: '#ffff',
    '&:hover': {
      backgroundColor: '#613dd9',
    },
  },
};

export default styles;
