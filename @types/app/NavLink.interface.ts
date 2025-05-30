import { NavbarProps } from '@/app/components/navbar/data';

export interface NavLinkProps {
  pathname: string;
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
  NavbarData: NavbarProps[];
}
