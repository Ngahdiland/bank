'use client'

import React from 'react'
import CountUp from "@/node_modules/react-countup";

const AnimatedCounter = ({amount}: {amount: numder } ) => {
  return (
    <div className='w-full'>
      <CountUp end={amount} decimal="," prefix="$" decimals={2} duration={1.5}/>
    </div>
  )
}

export default AnimatedCounter
