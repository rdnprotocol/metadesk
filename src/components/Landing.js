import { BsFillArrowRightCircleFill } from "react-icons/bs";
export const Landing = () => {
  return (
    <>
      <div className="w-full h-[960px] bg-gradient-to-b from-[#dbfbf1] to-[#f8f9f9] ">
        <div className="container h-full mx-auto flex flex-col items-center pt-[150px]">
          <h1 className="text-[100px] text-center font-bold">
            ТАНЫ ОНЛАЙН ТУСЛАХ
          </h1>
          <p>
            Бид танд болон танай компанид мэдээлэл технологийн бүх төрлийн
            үйлчилгээг санал болгож байна.{" "}
          </p>
          <div className=" grid  place-content-center gap-10 grid-cols-4 mt-[90px] h-fit w-fit">
            <div className="bg-[#dbecff] h-[200px] w-[300px] rounded-md py-9 px-9 ">
              <h1 className="text-3xl font-bold mb-6">ДУУДЛАГА ӨГӨХ</h1>
              <BsFillArrowRightCircleFill size={40} />
            </div>
            <div className="bg-[#dbecff] h-[200px] w-[300px] rounded-md py-9 px-9 ">
              <h1 className="text-3xl font-bold mb-6">ДУУДЛАГА ӨГӨХ</h1>
              <BsFillArrowRightCircleFill size={40} />
            </div>
            <div className="bg-[#dbecff] h-[200px] w-[300px] rounded-md py-9 px-9 ">
              <h1 className="text-3xl font-bold mb-6">ДУУДЛАГА ӨГӨХ</h1>
              <BsFillArrowRightCircleFill size={40} />
            </div>
            <div className="bg-[#dbecff] h-[200px] w-[300px] rounded-md py-9 px-9 ">
              <h1 className="text-3xl font-bold mb-6">ДУУДЛАГА ӨГӨХ</h1>
              <BsFillArrowRightCircleFill size={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
