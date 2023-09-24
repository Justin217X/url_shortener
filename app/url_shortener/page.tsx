"use client"
import React, { useState } from 'react'

const Page = () => {
  const [originalURL, setOriginalURL] = useState("");
  const [shortenedURL, setShortenedURL] = useState("");

  const shortenURL = () => {
    // Generate random short key
    const shortKey = Math.random().toString(36).substring(2, 8);

    // Create shortened URL
    const newShortenedURL = `http://tinyURL.com/${shortKey}`

    // Update the state w/ the new URL
    setShortenedURL(newShortenedURL)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    shortenURL();

    setOriginalURL("");
  }

  return (
    <div className='flex flex-col items-center justify-between h-screen p-24'>
      {/* <div className='border'>Page</div> */}

      <div onSubmit={handleSubmit} className='border flex flex-col bg-white h-1/2 w-3/4 max-w-3/4'>
        <form className='border bg-red-400 flex flex-col justify-evenly items-center h-full'>
          <h1 className=''>URL Shortener</h1>
          <input 
            type="text" 
            value={originalURL}
            onChange={(e) => setOriginalURL(e.target.value)}
            placeholder="Enter URL"
            className='p-4 rounded-lg text-black'
          />
          <button 
            type='submit'
            className='bg-blue-300 p-2 rounded-lg'>Shorten</button>
        </form>

        <div className='flex justify-center text-black'>
          {shortenedURL && (
            <p>
              `${shortenedURL}`
            </p>
          )}
        </div>

      </div>

      <div className='flex flex-col justify-center bg-gray-500 p-3 w-full'>
        
        <div className='flex items-center'>
          <div className='border flex items-center justify-center w-3/5'>
            Original URL
          </div>
          <div className='border flex items-center justify-center w-1/5'>
            Short URL
          </div>
          <div className='border flex items-center justify-center w-1/5'>
            Clicks 
          </div>
        </div>

        <div className='bg-blue-500 flex'>

          <div className='border flex items-center justify-center text-clip p-3 w-3/5'>
            www.google.com/WhereItAt?dddw/sdsf
          </div>
          <div className='border flex items-center justify-center p-3 w-1/5'>
            sHoRTuRL
          </div>
          <div className='border flex items-center justify-center p-3 w-1/5'>
            31
          </div>

        </div>
        
      </div>



    </div>
  )
}

export default Page