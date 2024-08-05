// import { Box, Modal, Typography } from '@mui/material'
// import React from 'react'

// const NameModal = () => {
//   return (
//     <>
    
//     <Modal
//         open={active}
//         onClose={handleClose}
//         aria-labelledby="modal-title"
//         aria-describedby="modal-description"
//       >
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: 400,
//             bgcolor: 'background.paper',
//             boxShadow: 24,
//             p: 4,
//             borderRadius: 2,
//           }}
//         >
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               mb: '24px',
//             }}
//           >
//             <Typography
//               id="modal-title"
//               variant="body1"
//               component="h2"
//               sx={{ fontSize: '24px', fontWeight: 'bold', lineHeight: '34px' }}
//             >
//               New Watchlist
//             </Typography>
//             <IconButton
//               onClick={handleClose}
//               sx={{
//                 '&:hover': {
//                   backgroundColor: 'transparent',
//                 },
//               }}
//             >
//               <CloseIcon
//                 sx={{
//                   fontSize: '24px',
//                   color: 'GrayText',
//                   opacity: '0.5',
//                 }}
//               />
//             </IconButton>
//           </Box>
//           <Typography
//             id="modal-title"
//             variant="body1"
//             component="h2"
//             sx={{ fontSize: '12px', mb: '4px', fontWeight: '500' }}
//           >
//             Watchlist Email
//           </Typography>
//           <TextField
//             placeholder="Watchlist Email"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             variant="outlined"
//             size="small"
//             fullWidth
//             sx={{
//               mb: '16px',
//               '& .MuiOutlinedInput-root': {
//                 borderRadius: '8px',
//                 backgroundColor: 'rgba(255, 255, 255, 0.3)', 
//                 '& fieldset': {
//                   borderRadius: '8px',
//                   borderColor: '#eff2ff5', 
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#eff2ff5', 
//                 },
//                 '&.Mui-focused': {
//                   '& fieldset': {
//                     borderColor: '#eff2ff5', 
//                   },
//                 },
//               },
//               '& .MuiOutlinedInput-input': {
//                 color: 'black', 
//                 fontSize: '12px', 
//               },
//               '& .MuiInputBase-input': {
//                 color: 'black', 
//               },
//             }}
//           />
//           <Button
//             variant="contained"
//             sx={{
//               fontSize: '14px',
//               mt: '48px',
//               height: '40px',
//             }}
//             fullWidth
//             onClick={handleCreateWatchlist}
//           >
//             Create Watchlist
//           </Button>
//         </Box>
//       </Modal>
//     </>
//   )
// }

// export default NameModal