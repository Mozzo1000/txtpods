import React from 'react'
import AboutNavbar from '../components/AboutNavbar'
import { Card } from 'flowbite-react'

function AboutAPI() {
  return (
    <div className="container mx-auto py-10 px-4">
        <Card>
            <div className="flex gap-4">
                <AboutNavbar />
                <div className="w-full">
                    <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none">API</h1>
                    <h2 class="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">Documentation for version 1 of txtpods API.</h2>
                    <hr/>
                    <h3 className="mb-4 text-2xl font-semibold tracking-tight leading-none mt-4">Usage of API</h3>
                    <p>The API is free to use by anyone however the following rules apply,</p>
                    <ul className="list-disc ml-10 mb-2">
                        <li>You may only do one request every second. This as to not overload the server.</li>
                        <li>You may not use the API to continuously scrape all content. If you would like access to a database dump, get in <a className="underline" href="https://andreasbackstrom.se">contact</a> and we will help you out.</li>
                    </ul>
                    <p>We may at any point change the usage agreement of the API without notice.</p>
                    <hr className="mb-4 mt-2"/>
                    <h3 className="mb-4 text-2xl font-semibold tracking-tight leading-none mt-4">Get all podcasts</h3>
                    <p>GET <code>https://api.txtpods.org/v1/podcasts</code></p>
                    <p>Returns all podcasts</p>

                    <h3 className="mb-4 text-2xl font-semibold tracking-tight leading-none mt-4">Get specific podcast</h3>
                    <p>GET <code>https://api.txtpods.org/v1/podcasts/id</code></p>
                    <p>Returns information about a specific podcast. Replace id with the id number of the podcast you want to retrieve</p>

                    <h3 className="mb-4 text-2xl font-semibold tracking-tight leading-none mt-4">Get episode transcript</h3>
                    <p>GET <code>https://api.txtpods.org/v1/podcasts/id/episodes/e_id/transcript</code></p>
                    <p>Returns transcript for a specific episode in a podcast. Replace id with the id number of the podcast and e_id with the id of the episode you want to retrieve.</p>

                    <h3 className="mb-4 text-2xl font-semibold tracking-tight leading-none mt-4">Get podcast RSS feed</h3>
                    <p>GET <code>https://api.txtpods.org/v1/podcasts/id/rss</code></p>
                    <p>Returns information about a specific podcast formatted as XML RSS. Replace id with the id number of the podcast you want to retrieve.</p>

                </div>
            </div>
        </Card>
    </div>
  )
}

export default AboutAPI