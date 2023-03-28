import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center mt-10 mx-32">
      <Image src={require("../../assets/Logo.png")} alt="logo" />
      <div className="flex gap-6 items-center justify-center">
        <Link
          href="/"
          className="py-2 px-4 rounded-[32px] border-white/30 font-semibold text-sm leading-[18px] text-white border bg-white/10"
        >
          About Us
        </Link>
        <Link
          href="/"
          className="py-2 px-4 rounded-[32px] border-white/30 font-semibold text-sm leading-[18px] text-white border bg-white/10"
        >
          Article
        </Link>
        <Link
          href="/"
          className="py-2 px-4 rounded-[32px] border-white/30 font-semibold text-sm leading-[18px] text-white border bg-white/10"
        >
          Property
        </Link>
        <Link
          href="/"
          className="py-3 px-6 rounded-[32px] border-white  font-semibold text-sm leading-[18px] text-[#047857] bg-[#D1FAE5] ml-14"
        >
          Sign Up!
        </Link>
      </div>
    </div>
  );
}
