import React from 'react'
import Card1 from './Card1.js'
import Card3 from './Card3.js'
import Card4 from './Card4.js'

export default function BoxCategory() {
  return (
    <div>
    <div className="nav-child1 flex flex-row gap-4">
        <a href="#" className="font-semibold ">
          Kinh doanh
        </a>
        <a href="#">Quốc tế</a>
        <a href="#">Doanh nghiệp</a>
        <a href="#">Chứng khoáng</a>
        <a href="#">Bất động sản</a>
        <a href="#">Bảo hiểm</a>
      </div>
      <div className="flex flex-row " style={{ width: 700 }}>
        <div className="w-2/3">
          <Card3 />
        </div>
        <div className="w-1/3 border-l-2 pl-4">
          <Card1 />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-row gap-4" style={{ width: 700 }}>
        <div className="w-1/3">
          <Card4 />
        </div>

        <div className="w-1/3">
          <Card4 />
        </div>
        <div className="w-1/3">
          <Card4 />
        </div>
      </div>
    </div>
  )
}
