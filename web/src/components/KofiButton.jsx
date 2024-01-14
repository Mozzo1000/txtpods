import { Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function KofiButton() {
  return (
    <Link to="https://ko-fi.com/" target="_blank" rel="noopener noreferrer">
        <Button size="sm" className="bg-[#13C3FF] enabled:hover:bg-[#13C3FF]/80">
            <img src="/Logo_white_stroke@2x.png" width={22} className="mr-2"/>
            Support on Ko-fi
        </Button>
    </Link>
  )
}

export default KofiButton