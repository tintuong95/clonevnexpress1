import React from "react";
import logo from "../assets/logo.svg";
export default function Footer() {
  return (
    <>
      <div className="m-auto flex flex-row" style={{ width: 1100 }}>
        <div className="flex flex-col" style={{ width: 170 }}>
          <a href="#" className="my-2 font-semibold">
            Trang chủ
          </a>
          <a href="#" className="my-2 font-semibold">
            Video
          </a>
          <a href="#" className="my-2 font-semibold">
            Podcasts
          </a>
          <a href="#" className="my-2 font-semibold">
            Ảnh
          </a>
          <a href="#" className="my-2 font-semibold">
            Infographics
          </a>
          <hr />
          <a href="#" className="my-2 font-semibold">
            Mới nhất
          </a>
          <a href="#" className="my-2 font-semibold">
            Xem nhiều
          </a>
          <a href="#" className="my-2 font-semibold">
            Tin nóng
          </a>
        </div>
        <div className="flex flex-col" style={{ width: 170 }}>
          <a href="#" className="my-2 ">
            Thời sự
          </a>
          <a href="#" className="my-2 ">
            Góc nhìn
          </a>
          <a href="#" className="my-2 ">
            Thế giới
          </a>
          <a href="#" className="my-2 ">
            Kinh doanh
          </a>
          <a href="#" className="my-2 ">
            Giải trí
          </a>
        </div>
        <div className="flex flex-col" style={{ width: 170 }}>
          <a href="#" className="my-2 ">
            Thể thao
          </a>
          <a href="#" className="my-2 ">
            Pháp luật
          </a>
          <a href="#" className="my-2 ">
            Giáo dục
          </a>
          <a href="#" className="my-2 ">
            Sức khỏe
          </a>
          <a href="#" className="my-2 ">
            Đời sống
          </a>
          <a href="#" className="my-2 ">
            Du lịch
          </a>
        </div>
        <div className="flex flex-col" style={{ width: 170 }}>
          <a href="#" className="my-2 ">
            Khoa học
          </a>
          <a href="#" className="my-2 ">
            Số hóa
          </a>
          <a href="#" className="my-2 ">
            Xe
          </a>
          <a href="#" className="my-2 ">
            Ý kiến
          </a>
          <a href="#" className="my-2 ">
            Tâm sự
          </a>
          <a href="#" className="my-2 ">
            Hài
          </a>
        </div>
        <div className="flex flex-col" style={{ width: 170 }}>
          <a href="#" className="my-2 ">
            Rao vặt
          </a>
          <a href="#" className="my-2 ">
            Startup
          </a>
          <a href="#" className="my-2 ">
            Mua ảnh VnExpress
          </a>
          <a href="#" className="my-2 ">
            Vhome
          </a>
          <a href="#" className="my-2 ">
            eBox
          </a>
          <a href="#" className="my-2 ">
            eWork
          </a>
        </div>
        <div className="flex flex-col" style={{ width: 250 }}>
          <a href="#" className="my-2 ">
            Tải ứng dụng
          </a>
          <div className="flex flex-row">
            <button className="border py-1 px-2 rounded-sm mr-4">
              Vnexpress
            </button>
            <button className="border py-1 px-2 rounded-sm mr-4">
              International
            </button>
          </div>
          <a href="#" className="my-2 ">
            Liên hệ
          </a>
          <div className="flex flex-row flex-wrap">
            <div className="w-1/2">
              <a href="#">
                <i className="fa fa-envelope mr-2 text-slate-500"></i>Tòa soạn
              </a>
            </div>
            <div className="w-1/2">
              <a href="#">
                <i className="fa fa-envelope mr-2 text-slate-500"></i>Quảng cáo
              </a>
            </div>
            <div className="w-2/3 mt-2">
              <a href="#">
                <i className="fa fa-envelope mr-2 text-slate-500"></i>Hợp tác
                bản quyền
              </a>
            </div>
          </div>
          <hr className="my-2" />
          <a href="#" className="my-2 ">
            Đường dây nóng
          </a>
          <div className="flex flex-row">
            <div className="w-1/2 flex flex-col">
              <h3 className="font-semibold">083.888.0123</h3>
              <p>(Hà nội)</p>
            </div>
            <div className="w-1/2 flex flex-col">
              <h3 className="font-semibold">083.888.1243</h3>
              <p>(Hồ Chí Minh)</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-auto my-3" style={{ width: 1100 }} />
      <div
        className="flex -flex-row m-auto justify-between"
        style={{ width: 1100 }}
      >
        <div className="flex flex-row">
          <p className="mt-1 mr-2">Báo điện tử</p>
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-row">
          <p className="mt-1 mr-2">
            RSS | Theo dõi VnExpress trên 
            <i class="fab fa-facebook-square border rounded-3xl px-2 py-1 mx-1"></i>
            <i class="fab fa-facebook-square border rounded-3xl px-2 py-1 mx-1"></i>
            <i class="fab fa-facebook-square border rounded-3xl px-2 py-1 mx-1"></i>
          </p>
        </div>
      </div>
      <hr className="m-auto my-3" style={{ width: 1100 }} />
      <div
        className="flex -flex-row m-auto justify-between gap"
        style={{ width: 1100 }}
      >
        <div className="w-1/3">
            <div className="flex flex-col ">
                <h3 className="font-semibold">Báo tiếng Việt nhiều người xem nhất</h3>
                <p>Thuộc Bộ Khoa học Công nghệ</p>
                <p>Số giấy phép: 548/GP-BTTTT ngày 24/08/2021</p>
            </div>
        </div>
        <div className="w-1/3">
            <div className="flex flex-col ">
               
                <p>Tổng biên tập: Phạm Hiếu</p>
                <p>Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội</p>
                <p>Điện thoại: 024 7300 8899 - máy lẻ 4500</p>
            </div>
        </div>
        <div className="w-1/3">
            <div className="flex flex-col pl-4">
                
                <p>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</p>
              
            </div>
        </div>
      </div>
    </>
  );
}
