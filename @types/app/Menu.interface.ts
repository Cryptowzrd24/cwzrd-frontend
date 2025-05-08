import { NavLinkProps } from './NavLink.interface';

export interface MenuProps extends NavLinkProps {
  token: string;
  handleOpenAuth: () => void;
  handleLogout: () => void;
}
