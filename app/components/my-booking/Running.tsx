import React from 'react'
import BookedCarCard from './BookedCarCard'

export default function Running() {
  return (
        <>
          <div className="flex flex-col gap-8 max-w-[1100px]">
            <BookedCarCard />
            <BookedCarCard />
            <BookedCarCard />
          </div>
        </>
  )
}
