import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex justify-between mx-auto py-6 content-center items-center container">
      <img
        className="h-[60px] w-[100px] object-contain"
        src="/White.png

      "
      />
      <div className="flex gap-8 text-lg ">
        <div>Үнийн санал</div>
        <Link href="">
          <div>Холбоо барих</div>{" "}
        </Link>

        <Link href="">
          <div>Туслах</div>
        </Link>
      </div>
      <div className="flex gap-3 ">
        <div
          className="bg-[#407ce8] text-sm text-center text-white w-[90px] h-fit py-1 px-1 rounded-md

"
        >
          Нэвтрэх
        </div>
        {/* <div
          className="bg-blue-400 text-sm text-white w-fit h-fit py-1 px-1 rounded-md

"
        >
          Бүртгүүлэх
        </div> */}
      </div>
    </div>
  );
};
