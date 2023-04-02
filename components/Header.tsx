import { useRouter } from "next/router";
import React, { useCallback } from "react";

import { BiArrowBack } from "react-icons/bi";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({ label, showBackArrow }) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <div className="p-2 rounded-full hover:bg-[#181919] cursor-pointer transition">
            <BiArrowBack onClick={handleBack} color="white" size={20} />
          </div>
        )}
        <h1 className="text-white text-lg font-bold">{label}</h1>
      </div>
    </div>
  );
};

export default Header;
