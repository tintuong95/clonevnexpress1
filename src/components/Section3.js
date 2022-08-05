import React from 'react'
import Card5 from './common/Card5.js'

export default function Section3() {
  return (
    <div className='flex flex-row m-auto gap-4 bg-orange-50' style={{width:1100}}>
      <div className='p-4'>
      <iframe width="720" height="340" src="https://www.youtube.com/embed/u6Dg411Hiuk" title="Nhịp Sống : Chàng Trai Thu Phế Liệu Kiếm Trăm Triệu Mỗi Tháng | VnExpress" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h3 className='font-bold text-2xl my-2'> Cây cầu cổ có dáng thuyền nan úp ngược </h3>
      </div>
     
       <div  className='flex flex-col overflow-auto' style={{height:400}}>
            <Card5/>
            <hr />
            <Card5/>
            <hr />
            <Card5/>
            <hr />
            <Card5/>
            <hr />
            <Card5/>
            <hr />
            <Card5/>
            <hr />
            <Card5/>
            <hr />
       </div>
    </div>
  )
}
