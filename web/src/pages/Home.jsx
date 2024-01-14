import React, {useRef} from 'react'
import { Button } from 'flowbite-react'
import UnDrawExam from '../undraw_podcast.svg';
import { Link } from 'react-router-dom';
import { FaArrowDown } from "react-icons/fa";

function Home() {
  const feature_ref = useRef(null);

  return (
    <div className="container mx-auto py-10">
        <section>
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Listen with your eyes</h1>
                    <p class="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl">Txtpods lets you read along with your favorite shows. Whether you are hard of hearing, want to learn a new language, or just prefer reading over listening, full transcripts are available for you with a single click of a button.</p>
                    <div className="flex gap-4">
                        <Button as={Link} to="/podcasts" color="primary">Get started!</Button>
                        <Button as={Link} to="/about" color="secondary">Learn more</Button>
                    </div>
                </div>
                <div class="flex mt-20 lg:mt-0 lg:col-span-5">
                    <img src={UnDrawExam} alt="mockup"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home