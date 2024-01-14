import React from 'react'
import AboutNavbar from '../components/AboutNavbar'
import { Card } from 'flowbite-react'

function AboutRequest() {
  return (
    <div className="container mx-auto py-10 px-4">
        <Card>
            <div className="flex gap-4">
                <AboutNavbar />
                <div className="w-full">
                    <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none">Request podcast </h1>
                    <h2 class="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">Is there a podcast or specific episode that is missing from txtpods? Use the form below to send in a request.</h2>
                    <hr/>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdu6bUe4PRNX9Kn3a51ya4tnVI9dE_1zo3TIbtgNq1R9yO4NQ/viewform?embedded=true" width="100%" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
        </Card>
    </div>
  )
}

export default AboutRequest