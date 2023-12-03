import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex px-5 items-center justify-center min-h-[50vh]">
      <div className="max-w-6xl md:p-5 p-3">
        <h1 className="md:text-4xl text-3xl font-extrabold">REO ARTS</h1>
        <div className="flex space-x-1 font-semibold">
          <span>by</span>
          <Link
            className="hover:underline underline-offset-4"
            href="https://srajan.vercel.app/"
            target="_blank"
          >
            @srajan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
