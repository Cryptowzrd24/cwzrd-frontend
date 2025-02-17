import { NavbarProps } from '@/app/components/navbar/data';

export interface OptionMenuProps {
  pathname: string;
  token: string;
  name: string;
  handleOpenAuth: () => void;
  handleAuthClick: (event: any) => void;
  handleLogout: () => void;
  handleClose: () => void;
  open: boolean;
  anchorEl: HTMLElement | null;
  isActive: string | null;
  setIsActive: React.Dispatch<React.SetStateAction<string | null>>;
  NavbarData: NavbarProps[];
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
}
