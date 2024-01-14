import React from 'react'
import { Footer as FFooter } from 'flowbite-react';

function Footer() {
  return (
    <FFooter container className="bg-transparent sticky top-[100vh] z-10">
      <FFooter.Copyright href="/" by="txtpods" year={2023} />
    </FFooter>
  )
}

export default Footer