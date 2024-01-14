import React from 'react'
import AboutNavbar from '../components/AboutNavbar'
import { Card } from 'flowbite-react'

function About() {
  return (
    <div className="container mx-auto py-10 px-4">
        <Card>
            <div className="flex gap-4">
                <AboutNavbar />
                <div className="w-full">
                    <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none">About txtpods</h1>
                    <h2 class="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">Txtpods lets you read along with your favorite shows. Whether you are hard of hearing, want to learn a new language, or just prefer reading over listening, full transcripts are available for you with a single click of a button.</h2>
                    <hr/>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default About