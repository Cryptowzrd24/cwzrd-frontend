export interface ProfileMenuProps {
  handleAuthClick: (event: any) => void;
  handleLogout: () => void;
  handleClose: () => void;
  open: boolean;
  anchorEl: any;
  name: string;
  pathname: string;
}
