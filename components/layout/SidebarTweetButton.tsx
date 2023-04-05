import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaFeather } from "react-icons/fa";

import useLoginModal from "@/hooks/useLoginModal";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div onClick={onClick}>
      <div className="mt-6 lg:hidden rounded-full h-12 w-12 p-4 flex items-center justify-center bg-[#1a8cd8] hover:bg-opacity-80 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 hidden lg:block px-4 py-3 rounded-full bg-[#1a8cd8] hover:bg-opacity-90 cursor-pointer transition">
        <p className="hidden lg:block text-center font-bold text-white text-[16px]">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
