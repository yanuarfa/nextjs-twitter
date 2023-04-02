import { useRouter } from "next/router";
import { BsTwitter } from "react-icons/bs";

export default function SidebarLogo() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="rounded-full h-12 w-12 p-1 flex items-center justify-center hover:bg-gray-100 hover:bg-opacity-10 cursor-pointer transition"
    >
      <BsTwitter size={27} color="white" />
    </div>
  );
}
