"use client"

import { useEffect, useRef } from 'react'
import Script from 'next/script'

export default function Home() {
  const viewerRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.pannellum) {
      window.pannellum.viewer(viewerRef.current, {
        type: 'equirectangular',
        panorama: '/parc-saint-pierre-amiens.jpg',
        autoLoad: true,
        autoRotate: -2,
        compass: true,
        showZoomCtrl: false,
        showFullscreenCtrl: false,
        mouseZoom: false,
      })
    }
  }, [])

  return (
    <div className="relative w-full h-screen">
      <Script
        src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"
        strategy="beforeInteractive"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css"
      />
      <div ref={viewerRef} className="w-full h-full" />
      <div className="absolute bottom-4 left-4 right-4 flex justify-center">
        <div className="bg-black bg-opacity-50 text-white p-2 rounded">
          Use mouse or touch to look around. Scroll to zoom.
        </div>
      </div>
    </div>
  )
}