'use client'

import React from 'react'

// import from heroui
import { Tabs, Tab } from "@heroui/react";

export default function TabsMovies() {
    return (
        <div className='max-w-5xl mx-auto px-6 py-12 flex gap-8'>
            <div className='mb-4'>
                <div>
                    <p>Selection</p>
                    <h2>A best movie just for you</h2>
                </div>
                <div className='flex w-full flex-col '>
                    <Tabs variant='underlined' aria-label="Options">
                        <Tab key="Now Playing" title="Now Playing">
                            <>

                            </>
                        </Tab>
                        <Tab key="popular" title="Popular">
                            <>

                            </>
                        </Tab>
                        <Tab key="top-rated" title="Top Rated">
                            <>

                            </>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
