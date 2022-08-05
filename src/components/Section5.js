import React from 'react'
import BoxCategory2 from './common/BoxCategory2.js'
import Card1 from './common/Card1.js'
import Card7 from './common/Card7.js'

export default function Section5() {
  return (
    <div className='m-auto flex flex-row gap-8' style={{width:1100}}>
        <div className='w-1/3 '>
            <BoxCategory2/>
            <Card7/>
            <hr className='my-3'/>
            <Card1/>
        </div>
        <div className='w-1/3'>
        <BoxCategory2/>
            <Card7/>
            <hr className='my-3'/>
            <Card1/>
        </div>
        <div className='w-1/3'>
        <BoxCategory2/>
            <Card7/>
            <hr className='my-3'/>
            <Card1/>
        </div>
    </div>
  )
}
