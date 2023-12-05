"use client";

import Irwin from '@/components/irwin'
import { useState } from 'react'

const tailwindColors = {
  
}

export default function Home() {
  type irwinProps = {
    height: number;
    size: number;
    left: string;
    right: string;
    legs: boolean;
  }
  const initIrwin = {
    height: 250,
    size: 250,
    left: '#6d28d9',
    right: '#db2777',
    legs: true
  }

  const [irwinProps, setIrwinProps] = useState<irwinProps>(initIrwin);

  return (
    <>
      {/* Inputs to alter the rendered Irwin */}
    <div className='flex'>

      <div className="flex flex-col w-1/3 mt-20">
        

      <div className="flex flex-col w-1/3 mt-20">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="height">
          Height
        </label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="height"
          type="number"
          placeholder="Height"
          value={irwinProps.height}
          onChange={(e) => setIrwinProps({ ...irwinProps, height: parseInt(e.target.value) })}
        />
        </div>
        <div className="flex flex-col w-1/3">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="size">
          Size
        </label>
        <input
          className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="size"
          type="number"
          placeholder="Size"
          value={irwinProps.size}
          onChange={(e) => setIrwinProps({ ...irwinProps, size: parseInt(e.target.value) })}
          />
        </div>
        <div className="flex flex-col w-1/3">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="left">
          Left Color
        </label>
        <input
          className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="left"
          type="color"
          placeholder="Left Color"
          value={irwinProps.left}
          onChange={(e) => setIrwinProps({ ...irwinProps, left: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-1/3">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="right">
          Right Color
        </label>
        <input
          className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="right"
          type="color"
          placeholder="Right Color"
          value={irwinProps.right}
          onChange={(e) => setIrwinProps({ ...irwinProps, right: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-1/3">
        <label className="text-gray-700 text-sm font-bold mb-2" htmlFor="legs">
          Legs
        </label>
        <input
          className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="legs"
          type="checkbox"
          placeholder="Legs"
          checked={irwinProps.legs}
          onChange={(e) => setIrwinProps({ ...irwinProps, legs: e.target.checked })}
          />
        </div>
      </div>
        {/* End Inputs */}
      

          <div className="center">
            <div className="max-w-3xl mx-auto">
              <h1 className="mx-auto text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">InterWallet</span></h1>
            </div>
            <div className="max-w-3xl mx-auto">
              <Irwin {...irwinProps} />
            </div>
          </div>

        </div>
    </>
  )
}
