import React from 'react';
import "../styles/Section1.css"
import Card1 from './common/Card1.js';

const Section1 = () => {
    return (
        <div className='section1 flex flex-col m-auto my-5'>
            <div className="part1 flex flex-row ">
                <img className='image1' src="https://picsum.photos/510/312" alt="" />
                <div className='p-4 bg-gray-50'>
                    <h3 className='font-semibold text-xl mb-2'>Đề xuất xây bãi đậu xe 3.500 m2 cho Tân Sơn Nhất</h3>
                    <p>Tổng công ty Cảng không miền Nam và Sở Giao thông Vận tải đề xuất xây thêm bãi đậu xe rộng 3.500 m2 cho sân bay Tân Sơn Nhất trên đường Hồng Hà.</p>
                </div>
            </div>
            <div className="part2 flex flex-row mt-5">
                <div className="part-child1 flex flex-row ">
                    <Card1/>
                    <Card1/>
                </div>
                <div className="part-child2 flex flex-col pl-4 border-l-2">
                    <a href="#" className='font-semibold text-rose-700'>Góc nhìn</a>
                    <h3 className='font-semibold mb-3'>Mắc mớ giá đất</h3>
                    <p>Chỉ cần xác định giá đất của Nhà nước bằng 70-80% giá đất thị trường là đủ mức cần thiết.</p>

                </div>
            </div>
        </div>
    );
};




export default Section1;
