import Link from "next/link";

const Error = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className=" mt-[200px]">
        <img className="sm:h-[500px]" src="/error.png" />
        <Link href="/">
          <div className="text-center py-20">
            <button className="dark:text-white text-[#B5986D] hover:text-[white] border-[#B5986D] hover:bg-[#B5986D]   dark:border-white border-[1.6px] px-14 py-4 rounded-2xl font-bold bookNow">
              Bakc To Home
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error;
