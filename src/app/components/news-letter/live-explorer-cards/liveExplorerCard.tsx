import Image from 'next/image';
import React from 'react';
import img1 from '../../../public/images/news-letter/img1.png';
interface LiveCardProps {
  id: string;
  title: string;
  desc: string;
  image: string;
}

function LiveExplorerCard({ title, desc, image }: LiveCardProps) {
  return (
    <div className="bg-[#fff] p-1  rounded-[16px] shadow-md  mb-2 ">
      <div className="flex gap-2 p-1 rounded-[16px] text-[#fff]  ">
        <div>
          <Image
            src={image}
            alt="picture"
            width={141}
            height={100}
            className="w-[152px] min-w-[152px] object-cover"
          />
        </div>
        <div className="flex flex-col ">
          <p className="font-bold text-[14px] text-[#111111]">{title}</p>
          <p
            className=" text-[11px] "
            style={{ color: 'rgba(17, 17, 17, 0.8)' }}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default LiveExplorerCard;
