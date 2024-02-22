import React from "react";

function Home() {
  return (
    <div className="mt-[20px] ">
      <div className="flex justify-between items-center px-[5px] sm:px-[0] mb-[10px]">
        <p className="font-crimsonPro  text-[35px] font-medium sm:text-[40px]">
          Manage Your Recipes
        </p>
        <button className="px-[20px] py-[10px] bg-[#373538] font-crimsonPro text-white">
          Add a Recipe
        </button>
      </div>
      <div className="sm:grid sm:grid-cols-4 gap-x-2 gap-y-4">
        <div className="sm rounded-md border-2 ">
          <div>
            <div className="relative w-full pt-[100%]">
              <img
                src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-sm"
              />
            </div>
            <div className="flex flex-col px-[5px] pb-[10px]">
              <p className="font-crimsonPro text-[20px] flex-1]">
                Pancake breakfast tacos
              </p>
              <div className="flex justify-between font-crimsonPro mt-2  pc-[10x]">
                <button className="px-[20px] py-[5px] bg-[#373538] text-white">
                  Edit
                </button>
                <button className="px-[20px] py-[5px] bg-[#373538] text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="sm rounded-md border-2 ">
          <div>
            <div className="relative w-full pt-[100%]">
              <img
                src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-sm"
              />
            </div>
            <div className="flex flex-col px-[5px] pb-[10px]">
              <p className="font-crimsonPro text-[20px] flex-1]">
                Pancake breakfast tacos
              </p>
              <div className="flex justify-between font-crimsonPro mt-2  pc-[10x]">
                <button className="px-[10px] py-[5px] bg-[#373538] text-white">
                  Edit
                </button>
                <button className="px-[10px] py-[5px] bg-[#373538] text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="sm rounded-md border-2 ">
          <div>
            <div className="relative w-full pt-[100%]">
              <img
                src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-sm"
              />
            </div>
            <div className="flex flex-col px-[5px] pb-[10px]">
              <p className="font-crimsonPro text-[20px] flex-1]">
                Pancake breakfast tacos
              </p>
              <div className="flex justify-between font-crimsonPro mt-2  pc-[10x]">
                <button className="px-[10px] py-[5px] bg-[#373538] text-white">
                  Edit
                </button>
                <button className="px-[10px] py-[5px] bg-[#373538] text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sm rounded-md border-2 ">
          <div>
            <div className="relative w-full pt-[100%]">
              <img
                src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-sm"
              />
            </div>
            <div className="flex flex-col px-[5px] pb-[10px]">
              <p className="font-crimsonPro text-[20px] flex-1]">
                Pancake breakfast tacos
              </p>
              <div className="flex justify-between font-crimsonPro mt-2  pc-[10x]">
                <button className="px-[10px] py-[5px] bg-[#373538] text-white">
                  Edit
                </button>
                <button className="px-[10px] py-[5px] bg-[#373538] text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sm rounded-md border-2 ">
          <div>
            <div className="relative w-full pt-[100%]">
              <img
                src="https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover rounded-t-sm"
              />
            </div>
            <div className="flex flex-col px-[5px] pb-[10px]">
              <p className="font-crimsonPro text-[20px] flex-1]">
                Pancake breakfast tacos
              </p>
              <div className="flex justify-between font-crimsonPro mt-2  pc-[10x]">
                <button className="px-[10px] py-[5px] bg-[#373538] text-white">
                  Edit
                </button>
                <button className="px-[10px] py-[5px] bg-[#373538] text-white">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
