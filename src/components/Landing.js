import { BsFillArrowRightCircleFill } from "react-icons/bs";
export const Landing = () => {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-b from-[#dbfbf1] to-[#f8f9f9] ">
        <div className="container h-full mx-auto flex flex-col items-center pt-[150px]">
          <h1 className="text-[100px] text-center font-bold">
            ТАНЫ ОНЛАЙН ТУСЛАХ
          </h1>
          <p className="text-lg">
            Бид танд болон танай компанид мэдээлэл технологийн бүх төрлийн
            үйлчилгээг санал болгож байна.{" "}
          </p>
          <div className=" grid  place-content-center gap-10 grid-cols-4 mt-[90px] h-fit w-fit">
            <div className="bg-[#dbecff] h-[200px] w-[300px] rounded-md py-9 px-9  flex flex-col  ">
              <h1 className="text-3xl font-bold ">ДУУДЛАГА ӨГӨХ</h1>
              <p className="text-[12px] mb-3 ">үйлчилгээний захиалга үүсгэх</p>
              <div className=" justify-self-end ">
                {" "}
                <BsFillArrowRightCircleFill size={35} />
              </div>
            </div>
            <div className="bg-[#dbecff] h-[200px] w-[300px] rounded-md py-9 px-9  flex flex-col  ">
              <h1 className="text-3xl font-bold ">ПРОГРАМ ХАНГАМЖ</h1>
              <p className="text-[12px] mb-3 ">
                танд хэрэг болон онлайн програмууд
              </p>
              <div className=" justify-self-end ">
                {" "}
                <BsFillArrowRightCircleFill size={35} />
              </div>
            </div>
            <div className="bg-[#dbecff] h-[200px] w-[300px] rounded-md py-9 px-9 flex flex-col ">
              <h1 className="text-3xl font-bold  ">МЭДЛЭГИЙН САН</h1>
              <p className="text-[12px] mb-3 ">зөвлөгөө мэдээлэл</p>
              <div className=" justify-self-end ">
                {" "}
                <BsFillArrowRightCircleFill size={35} />
              </div>
            </div>
            <div className="bg-[#dbecff] h-[200px] w-[300px] rounded-md py-9 px-9  flex flex-col ">
              <h1 className="text-3xl font-bold ">НЭГДСЭН ФАЙЛЫН САН</h1>
              <p className="text-[12px] mb-3">Танд хэрэгтэй</p>
              <div className=" justify-self-end ">
                {" "}
                <BsFillArrowRightCircleFill size={35} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
