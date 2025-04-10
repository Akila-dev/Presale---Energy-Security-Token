import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className={`block text-gradien text-white`}>
      <div className="flex-center">
        {/* <div className="w-4 h-4 bg-gradient-to-r from-[--neon-from] via-[--neon-via] to-[--neon-to] rounded-full shadow-neon" /> */}
        <span className="icon-text font-black">Energy Security Token</span>
      </div>
    </Link>
  );
};

export default Logo;
