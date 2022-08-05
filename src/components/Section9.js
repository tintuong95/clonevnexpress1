import React from "react";
import Card12 from "./common/Card12.js";
import Card13 from "./common/Card13.js";

export default function Section9() {
  return (
    <div className="m-auto flex flex-row" style={{ width: 1100 }}>
      <div style={{ width: 720 }}>
        <a
          href="#"
          className=" font-semibold text-base border-b pb-1 border-b-red-700 "
        >
          Infographics
        </a>
        <div className="flex flex-row w-full gap-5 mt-4">
          <div className="w-1/2">
            <Card12 />
          </div>
          <div className="w-1/2">
            <Card12 />
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex p-4 rounded-sm bg-gray-100 flex-row w-full flex-wrap  mt-4">
          <div className="w-1/2 px-2">
            <Card13 />
          </div>
          <div className="w-1/2 px-2">
            <Card13 />
          </div>
          <div className="w-1/2 px-2">
            <Card13 />
          </div>
          <div className="w-1/2 px-2">
            <Card13 />
          </div>
        </div>

        <div>
          <a
            href="#"
            className=" font-semibold text-base border-b pb-1 border-b-red-700 "
          >
            Xem nhiều
          </a>
        </div>
        <div className="flex flex-row w-full mt-4">
          <div className="w-1/2 flex flex-col border-r-2">
            <div className="flex flex-row border-b-2 my-2">
              <h1 className="font-semibold text-5xl ml-2 ml-2">1</h1>
              <p className=" ml-4">
                Trung Quốc điều hơn 100 máy bay ngày đầu tập trận gần Đài Loan{" "}
              </p>
            </div>

            <div className="flex flex-row border-b-2 my-2">
              <h1 className="font-semibold text-5xl ml-2">2</h1>
              <p className=" ml-4">
                Trung Quốc điều hơn 100 máy bay ngày đầu tập trận gần Đài Loan{" "}
              </p>
            </div>

            <div className="flex flex-row border-b-2 my-2">
              <h1 className="font-semibold text-5xl ml-2">3</h1>
              <p className=" ml-4">
                Trung Quốc điều hơn 100 máy bay ngày đầu tập trận gần Đài Loan{" "}
              </p>
            </div>

            <div className="flex flex-row border-b-2 my-2">
              <h1 className="font-semibold text-5xl ml-2">4</h1>
              <p className=" ml-4">
                Trung Quốc điều hơn 100 máy bay ngày đầu tập trận gần Đài Loan{" "}
              </p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col \">
            <div className="flex flex-row border-b-2 my-2">
              <h1 className="font-semibold text-5xl ml-2">5</h1>
              <p className=" ml-4">
                Trung Quốc điều hơn 100 máy bay ngày đầu tập trận gần Đài Loan{" "}
              </p>
            </div>

            <div className="flex flex-row border-b-2 my-2">
              <h1 className="font-semibold text-5xl ml-2">6</h1>
              <p className=" ml-4">
                Trung Quốc điều hơn 100 máy bay ngày đầu tập trận gần Đài Loan{" "}
              </p>
            </div>

            <div className="flex flex-row border-b-2 my-2">
              <h1 className="font-semibold text-5xl ml-2">7</h1>
              <p className=" ml-4">
                Trung Quốc điều hơn 100 máy bay ngày đầu tập trận gần Đài Loan{" "}
              </p>
            </div>

            <div className="flex flex-row border-b-2 my-2">
              <h1 className="font-semibold text-5xl ml-2">8</h1>
              <p className=" ml-4">
                Trung Quốc điều hơn 100 máy bay ngày đầu tập trận gần Đài Loan{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
