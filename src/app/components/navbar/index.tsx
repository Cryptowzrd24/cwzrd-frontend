'use client';
import React, { useState } from 'react';
import Logo from '../../../../public/icons/logo';
import { NavbarData } from './data';
import LightmodeIcon from '../../../../public/icons/Navbar-Section/lightmode';
import DarkmodeIcon from '../../../../public/icons/Navbar-Section/darkmode';
import ProfileIcon from '../../../../public/icons/Navbar-Section/profile';
import SearchIcon from '../../../../public/icons/Navbar-Section/search';
import Link from 'next/link';

function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isActive, setIsActive] = useState<string | null>('light');

  return (
    <div className="flex justify-between items-center mt-8 max-w-[1440px] mx-auto p-3 ">
      <Link href="/" className="pr-24">
        <Logo />
      </Link>
      <div className="flex items-center justify-between gap-8 pr-9 ">
        {NavbarData.map((item) => (
          <div
            key={item.id}
            className={`p-2 cursor-pointer ${
              activeId === item.id ? 'text-[#7248F7] font-[500]' : ''
            }`}
            onClick={() => setActiveId(item.id)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between gap-8 cursor-pointer">
        <div className="p-1 border-[0.5px] rounded-[100px] flex cursor-pointer">
          <div onClick={() => setIsActive('light')}>
            <LightmodeIcon isActive={isActive === 'light'} />
          </div>
          <div onClick={() => setIsActive('dark')}>
            <DarkmodeIcon isActive={isActive === 'dark'} />
          </div>
        </div>

        <SearchIcon />
        <ProfileIcon />
      </div>
    </div>
  );
}

export default Navbar;
