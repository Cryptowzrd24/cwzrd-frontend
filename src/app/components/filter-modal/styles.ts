const styles = {
  modalFilterMain: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'space-between',
    overflowY: 'auto',
  },

  filterHeading: {
    textAlign: 'center',
    fontSize: {
      xs: '16px',
      sm: '18px',
    },
    fontFamily: 'Sf Pro Display',
    fontWeight: 600,
    flexGrow: 2,
    marginLeft: {
      xs: '20px',
      sm: '40px',
    },
  },

  accordian: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },

  accordianSummaryHeader: {
    fontSize: {
      xs: '13px',
      sm: '14px',
    },
    fontFamily: 'Sf Pro Display',
    fontWeight: 700,
    minHeight: {
      xs: '40px !important',
      sm: '46px !important',
    },
    maxHeight: {
      xs: '40px !important',
      sm: '46px !important',
    },
    letterSpacing: '1px',
    padding: '0 4px !important',
    '& .MuiAccordionSummary-content': {
      justifyContent: 'space-between !important',
    },
  },

  divider: {
    marginTop: {
      xs: '20px',
      sm: '25px',
    },
  },

  filterFooterBtns: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    marginTop: {
      xs: '8px',
      sm: '10px',
    },
    gap: {
      xs: '8px',
      sm: '10px',
    },
  },

  priceRangeBox: {
    display: 'flex',
    alignItems: 'center',
    gap: {
      xs: '8px',
      sm: '10px',
    },
    marginTop: '10px !important',
  },
  accordianHeaderText: {
    fontSize: {
      xs: '13px',
      sm: '14px',
    },
    fontWeight: 500,
    fontFamily: 'Sf Pro Display',
  },
  textField: {
    width: {
      xs: '100%',
      sm: '450px',
    },
    '& .MuiInputBase-input': {
      borderRadius: '8px',
      fontSize: {
        xs: '13px',
        sm: '14px',
      },
      '&[type="number"]': {
        MozAppearance: 'textfield', // Firefox
        WebkitAppearance: 'none', // Chrome, Safari, and Opera
        appearance: 'none', // Standard
        margin: 0, // Remove default margin
      },
    },
    '& .MuiInputLabel-root': {
      fontSize: {
        xs: '13px',
        sm: '14px',
      },
    },
    '& .MuiFormHelperText-root': {
      fontSize: {
        xs: '13px',
        sm: '14px',
      },
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
    marginTop: {
      xs: '20px',
      sm: '25px',
    },
    fontSize: {
      xs: '11px',
      sm: '12px',
    },
    color: 'grey',
    paddingBottom: {
      xs: '12px',
      sm: '15px',
    },
  },
  minableAuditedText: {
    fontSize: {
      xs: '13px',
      sm: '14px',
    },
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
    height: {
      xs: '40px',
      sm: '48px',
    },
    borderRadius: '8px',
    padding: {
      xs: '0 16px',
      sm: '0 24px',
    },
    fontSize: {
      xs: '13px',
      sm: '14px',
    },
    marginRight: {
      xs: '8px',
      sm: '10px',
    },
  },
  applyBtn: {
    height: {
      xs: '40px',
      sm: '48px',
    },
    borderRadius: '8px',
    padding: {
      xs: '0 16px',
      sm: '0 24px',
    },
    fontSize: {
      xs: '13px',
      sm: '14px',
    },
    backgroundColor: '#7248F7',
    color: '#ffff',
    '&:hover': {
      backgroundColor: '#613dd9',
    },
  },
};

export default styles;
