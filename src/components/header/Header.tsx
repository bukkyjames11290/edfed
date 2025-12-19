'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative flex items-center justify-center bg-white px-[15px] py-10 pb-3">
      <Image src="https://i.postimg.cc/1tDCNNJs/modal-login-1760730361.png" width={209} height={80} alt="logo" className="w-[180px] h-20 object-contain" />
    </div>
  );
}
