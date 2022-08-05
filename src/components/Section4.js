import React from 'react'
import Card6 from './common/Card6.js'

export default function Section4() {
  return (
   <div className='m-auto' style={{width:1100}}>
<div className='my-4'>
<a href="#" className='text-xl pb-2 font-semibold border-b border-b-red-700'>
Podcasts
</a>
</div>
     <div className='flex flex-row gap-4'>
        <div className='border-r-2 pr-2'>
        <Card6/>
        </div>
        <div className='border-r-2 pr-2'>
        <Card6/>
        </div>
        <div className=''>
        <Card6/>
        </div>
       
     </div>
   </div>
  )
}
