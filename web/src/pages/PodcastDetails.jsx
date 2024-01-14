import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Button, Badge, Card } from 'flowbite-react';
import PodcastService from "../services/podcasts.service";
import { Spinner } from 'flowbite-react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { IoIosCloseCircle } from "react-icons/io";
import ReactCountryFlag from "react-country-flag"
import { getCountryCode } from "language-flag-colors";

function PodcastDetails() {
    let { id } = useParams();
    const [content, setContent] = useState();
    const [transcriptContent, setTranscriptContent] = useState();
    const [transcriptSelectedEpisode, setTranscriptSelectedEpisode] = useState(0);
    const [playPod, setPlayPod] = useState();

    useEffect(() => {
        PodcastService.get(id).then(
          response => {
              setContent(response.data);
          },
          error => {
              const resMessage = 
                  (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                  error.message ||
                  error.toString();
              console.log(resMessage);
          }
        )
    
      }, [id])

      useEffect(() => {
        PodcastService.getTranscript(id, transcriptSelectedEpisode).then(
          response => {
              setTranscriptContent(response.data);
          },
          error => {
              const resMessage = 
                  (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                  error.message ||
                  error.toString();
              console.log(resMessage);
          }
        )
    
      }, [transcriptSelectedEpisode])
    
      const sortDesc = (arr, field) => {
        return arr.sort((a, b) => {
          if (a[field] > b[field]) { return -1; }
          if (b[field] > a[field]) { return 1; }
          return 0;
        })
      }

    return (
        <>
        <div className="container mx-auto py-10 px-4">
            <div className="grid grid-cols-1 gap-8">
                <Card>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-2">
                        {content &&
                        <>
                        <div className="lg:row-span-2">
                            <img height="486" width="486" src={content.poster_url} />
                        </div>
                        <div>
                            <p className="text-3xl font-medium text-black inline-flex items-center gap-2 ">{content.name} <ReactCountryFlag countryCode={getCountryCode(content.language)} svg /></p>
                            <Badge className="mt-2 w-fit">{content.genre}</Badge>
                            <p className="pt-6">{content.description}</p>
                        </div>
                        <div className="lg:col-start-2">
                            <Button color="primary">RSS</Button>
                        </div>
                        </>
                        }
                    </div>
                </Card>
                <Card>
                    <div className="mb-4">
                        <h1 className="text-xl font-bold leading-none">Episodes</h1>
                    </div>
                    <div className="flow-root">
                <ul>
                    {content && sortDesc(content.episodes, "order").map((item) => (
                        <li key={item.id} className="py-3 sm:py-4">
                            <div className="grid grid-cols-2 grid-rows-1 gap-4">
                                <div className="col-span-2 lg:col-span-1 flex items-center space-x-4">
                                    <div className={`flex shrink-0 ${item.transcript[0]?.id ? 'grayscale-0' : 'grayscale'}`}>
                                        <img height="48" width="48" src={content?.poster_url} />
                                    </div>
                                    <div className="flex-col ">
                                        <p className="truncate font-medium text-gray-900">{item.order + ". " + item.name}</p>
                                        <p className="truncate text-sm text-gray-500">{new Date(item.release_date).toDateString()}</p>
                                        <p className="truncate text-sm text-gray-500">{item.runtime_min} min</p>
                                    </div>
                                </div>

                                <div className="justify-start lg:justify-end inline-flex gap-2 items-center text-base font-semibold text-gray-900">
                                    <Button color="primary" onClick={() => setPlayPod(item.source_url)}>Play</Button>
                                    
                                    {transcriptSelectedEpisode <= 0 && item.transcript[0]?.id && 
                                        <Button color="primary" onClick={() => (setTranscriptSelectedEpisode(item.id))}>Show transcript</Button>
                                    }
                                    {transcriptSelectedEpisode >= 1 && transcriptSelectedEpisode == item.id && item.transcript[0]?.id &&
                                        <Button color="primary" onClick={() => (setTranscriptContent({}), setTranscriptSelectedEpisode(0))}>Close transcript</Button>
                                    }
                                    {transcriptSelectedEpisode >= 1 && transcriptSelectedEpisode != item.id && item.transcript[0]?.id &&
                                        <Button color="primary" onClick={() => (setTranscriptSelectedEpisode(item.id))}>Show transcript</Button>
                                    }

                                    {!item.transcript[0]?.id &&
                                        <p>No transcript available</p>
                                    }
                                </div>
                            </div>
                            <hr className="mt-4"/>

                            {transcriptSelectedEpisode == item.id && transcriptContent &&
                                <div className="max-h-56 overflow-auto border border-black">
                                    <pre>
                                        {transcriptContent.transcript ? (
                                            transcriptContent.transcript
                                        ): (
                                            <Spinner />
                                        )}
                                    </pre>
                                </div>
                            }
                        </li>
                    ))}
                    {content?.episodes.length < 1 &&
                        <p>There are currently no episodes available for this podcast. Please check back later!</p>
                    }
                </ul>
            </div>
                </Card>
            </div>
            
        </div>
        {playPod &&
            <AudioPlayer className="fixed bottom-0 z-30" autoPlay src={playPod} showJumpControls={false} layout='horizontal' customAdditionalControls={[
                <Button className="bg-transparent outline-none focus:ring-0 border-none enabled:hover:bg-transparent"
                 onClick={() => setPlayPod()}><IoIosCloseCircle className="h-10 w-10 fill-[#868686] hover:fill-[#929292]"/></Button>]} />
        }
        </>
    )
}

export default PodcastDetails