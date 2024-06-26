import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar1 from "@/app/assets/images/avatar1.png"
import Avatar2 from "@/app/assets/images/avatar2.png"
import Avatar3 from "@/app/assets/images/avatar3.png"
import Avatar4 from "@/app/assets/images/avatar4.png"
import PlusIcon from "@/app/assets/images/iconPlusRound.png"



const Avatars = () => {
    return (
        <AvatarGroup
            // sx={{ '& .MuiAvatar-root': { zIndex: (theme) => theme.zIndex.drawer + 1, order: -1 } }}
        >
            <Avatar alt="Remy Sharp" src={Avatar1.src} sx={{ '&.MuiAvatar-root': { border: 'none' } }} />
            <Avatar alt="Travis Howard" src={Avatar2.src} sx={{ '&.MuiAvatar-root': { border: 'none' } }} />
            <Avatar alt="Agnes Walker" src={Avatar3.src} sx={{ '&.MuiAvatar-root': { border: 'none' } }} />
            <Avatar alt="Trevor Henderson" src={Avatar4.src} sx={{ '&.MuiAvatar-root': { border: 'none' } }} />
            <Avatar alt="plus" src={PlusIcon.src} sx={{ '&.MuiAvatar-root': { border: 'none' } }} />
        </AvatarGroup>
    )
}

export default Avatars
