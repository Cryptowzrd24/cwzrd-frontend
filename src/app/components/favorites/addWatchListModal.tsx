import {
  Box,
  IconButton,
  Modal,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const AddWatchListModal = ({
  active,
  handleClose,
  // emailStored,
  watchlistName,
  handleWatchlistNameChange,
  // handleSearchChange,
  // searchTerm,
  // emailExistError,
  handleCreateWatchlist,
}: any) => {
  return (
    <Modal
      open={active}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: ' 16px 24px',
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '24px',
          }}
        >
          <Typography
            id="modal-title"
            variant="body1"
            component="h2"
            sx={{
              fontSize: '24px',
              fontWeight: 'bold',
              lineHeight: '34px',
            }}
          >
            Create New Watchlist
          </Typography>
          <IconButton
            onClick={handleClose}
            sx={{
              '&:hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            <CloseIcon
              sx={{
                fontSize: '24px',
                color: 'GrayText',
                opacity: '0.5',
              }}
            />
          </IconButton>
        </Box>
        <TextField
          color="secondary"
          placeholder={'Watchlist Name'}
          value={watchlistName}
          onChange={handleWatchlistNameChange}
          inputProps={{ maxLength: 32, color: '#674CFB' }}
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mb: '8px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              '& fieldset': {
                borderRadius: '8px',
                borderColor: '#eff2ff5',
              },
              '&:hover fieldset': {
                borderColor: '#674CFB',
              },
              '&.Mui-focused': {
                '& fieldset': {
                  borderColor: '#674CFB',
                },
              },
            },
            '& .MuiOutlinedInput-input': {
              color: 'black',
              fontSize: '12px',
            },
            '& .MuiInputBase-input': {
              color: 'black',
            },
          }}
        />

        {/* {emailStored && (
          <Typography
            variant="caption"
            sx={{
              color: '#A6B0C3',
              fontSize: '12px',
              textAlign: 'end',
              display: emailExistError === '' ? 'block' : 'none',
            }}
          >
            {`${watchlistName.length}/32`}
          </Typography>
        )} */}
        {/* <Typography
          variant="caption"
          sx={{
            color: 'red',
            fontSize: '12px',
            display: emailExistError !== '' ? 'block' : 'none',
          }}
        >
          {emailExistError}
        </Typography> */}

        <Button
          variant="contained"
          sx={{
            fontSize: '14px',
            mt: '24px',
            borderRadius: '56px',
            padding: '11px 16px',
          }}
          fullWidth
          onClick={handleCreateWatchlist}
          disabled={watchlistName.trim().length === 0}
        >
          Create
        </Button>
      </Box>
    </Modal>
  );
};

export default AddWatchListModal;
