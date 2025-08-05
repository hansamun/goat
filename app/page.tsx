"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [backgroundColor, setBackgroundColor] = useState("from-blue-600 to-blue-700")
  const [currentPage, setCurrentPage] = useState("home") // home, about, tokenomics, memes
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [audioRef, setAudioRef] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const grassElements = [
    { id: 1, bottom: "0%", left: "5%", size: "w-32 h-16", duration: "20s", delay: "0s" },
    { id: 2, bottom: "0%", left: "15%", size: "w-28 h-14", duration: "25s", delay: "2s" },
    { id: 3, bottom: "0%", left: "25%", size: "w-36 h-18", duration: "18s", delay: "4s" },
    { id: 4, bottom: "0%", left: "35%", size: "w-30 h-15", duration: "22s", delay: "6s" },
    { id: 5, bottom: "0%", left: "45%", size: "w-34 h-17", duration: "24s", delay: "8s" },
    { id: 6, bottom: "0%", left: "55%", size: "w-32 h-16", duration: "19s", delay: "10s" },
    { id: 7, bottom: "0%", left: "65%", size: "w-38 h-19", duration: "26s", delay: "12s" },
    { id: 8, bottom: "0%", left: "75%", size: "w-30 h-15", duration: "21s", delay: "14s" },
    { id: 9, bottom: "0%", left: "85%", size: "w-36 h-18", duration: "23s", delay: "16s" },
    { id: 10, bottom: "0%", left: "95%", size: "w-32 h-16", duration: "20s", delay: "18s" },
    { id: 11, bottom: "0%", left: "-5%", size: "w-34 h-17", duration: "27s", delay: "20s" },
    { id: 12, bottom: "0%", left: "105%", size: "w-30 h-15", duration: "25s", delay: "22s" },
  ]

  const colorCircles = [
    {
      color: "bg-yellow-400",
      gradient: "from-yellow-300 to-yellow-500",
      name: "yellow",
    },
    {
      color: "bg-red-500",
      gradient: "from-red-400 to-red-600",
      name: "red",
    },
    {
      color: "bg-purple-500",
      gradient: "from-purple-400 to-purple-600",
      name: "purple",
    },
    {
      color: "bg-gray-400",
      gradient: "from-gray-300 to-gray-500",
      name: "gray",
    },
    {
      color: "bg-pink-400",
      gradient: "from-pink-300 to-pink-500",
      name: "pink",
    },
    {
      color: "bg-orange-500",
      gradient: "from-orange-400 to-orange-600",
      name: "orange",
    },
    {
      color: "bg-green-500",
      gradient: "from-green-400 to-green-600",
      name: "green",
    },
    {
      color: "bg-blue-600",
      gradient: "from-blue-600 to-blue-700",
      name: "blue",
    },
  ]

  const memes = [
    { id: 1, src: "/memes/meme1.jpeg", title: "Legendary Goat" },
    { id: 2, src: "/memes/meme2.jpeg", title: "Champion Goat" },
    { id: 3, src: "/memes/meme3.jpeg", title: "GOAT Mode" },
    { id: 4, src: "/memes/meme4.jpeg", title: "Space GOAT" },
    { id: 5, src: "/memes/meme5.jpeg", title: "Astronaut GOAT" },
    { id: 6, src: "/memes/meme6.jpeg", title: "Rich GOAT" },
    { id: 7, src: "/memes/meme7.jpeg", title: "Super GOAT" },
    { id: 8, src: "/memes/meme8.jpeg", title: "Green Candle GOAT" },
    { id: 9, src: "/memes/meme9.jpeg", title: "Bull Market GOAT" },
    { id: 10, src: "/memes/meme10.jpeg", title: "Street GOAT" },
    {
      id: 11,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_6093852341942994278_x.jpg-ZboyvGp6PJVP2OcIfyUGaGdbrhY4r6.jpeg",
      title: "UFO GOAT",
    },
    {
      id: 12,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_6093852341942994281_y.jpg-t3G4a6uw7RmYCx1Vxc86O2xOYd8vwx.jpeg",
      title: "Chart Climbing GOAT",
    },
    {
      id: 13,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_6093852341942994279_y.jpg-No6MOcZQhb6PKwKvzR3Z7hQcG33rom.jpeg",
      title: "Money Bag GOAT",
    },
    {
      id: 14,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_6093852341942994282_y.jpg-6fFrmbpdB8Sp7dXKGxQ4TcfaP2IqBh.jpeg",
      title: "Super Strong GOAT",
    },
  ]

  const handleColorChange = (gradient: string) => {
    setBackgroundColor(gradient)
  }

  const handleNavigation = (page: string) => {
    setCurrentPage(page)
  }

  const initializeAudio = () => {
    if (!audioRef) {
      const audio = new Audio(
        "https://jwolkiasgvkwmuqgqjmz.supabase.co/storage/v1/object/sign/song/song.mp3?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80YTY1YjE2ZC0yZGU5LTQ5ZjMtOGMwMi1lYzQ0ZmIwNjJhMmMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzb25nL3NvbmcubXAzIiwiaWF0IjoxNzUzOTczOTc4LCJleHAiOjE3ODU1MDk5Nzh9.s4mbXeMigHAAK_qfJMd9or3hUBEuG_Y0e20V5CaxyvY",
      )
      audio.crossOrigin = "anonymous"
      audio.volume = volume
      audio.preload = "metadata"

      audio.addEventListener("loadedmetadata", () => {
        setDuration(audio.duration)
        console.log("Audio loaded successfully, duration:", audio.duration)
      })

      audio.addEventListener("timeupdate", () => {
        setCurrentTime(audio.currentTime)
      })

      audio.addEventListener("ended", () => {
        setIsPlaying(false)
        setCurrentTime(0)
      })

      audio.addEventListener("error", (e) => {
        console.error("Audio loading error:", e)
        console.error("Audio error details:", audio.error)
      })

      audio.addEventListener("canplay", () => {
        console.log("Audio can start playing")
      })

      setAudioRef(audio)
      return audio
    }
    return audioRef
  }

  const togglePlayPause = () => {
    const audio = initializeAudio()
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
          console.log("Audio started playing successfully")
        })
        .catch((error) => {
          console.error("Error playing audio:", error)
          setIsPlaying(false)
        })
    }
  }

  const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = initializeAudio()
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newTime = (clickX / rect.width) * duration
    audio.currentTime = newTime
    setCurrentTime(newTime)
  }

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = initializeAudio()
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const newVolume = clickX / rect.width
    audio.volume = newVolume
    setVolume(newVolume)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const renderHomePage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 relative z-10">
      {/* Logo */}
      <div className="text-center mb-6 md:mb-8 px-2">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-white mb-2 md:mb-4 tracking-wider drop-shadow-lg"
          style={{
            fontFamily: "Fredoka One, cursive",
            textShadow: "2px 2px 0px #1E40AF, 4px 4px 0px #1E3A8A",
          }}
        >
          <span className="inline-block transform hover:scale-105 transition-transform duration-300">
            PAUL THE GOAT
          </span>
        </h1>
        <p
          className="text-blue-600 text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-widest px-4"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          THE GREATEST OF ALL TIME
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8 px-4">
        {[
          { label: "BUY", action: () => {} },
          { label: "TG", action: () => {} },
          { label: "X", action: () => {} },
          { label: "DEX", action: () => {} },
          { label: "ABOUT", action: () => handleNavigation("about") },
          { label: "TOKENOMIC", action: () => handleNavigation("tokenomics") },
          { label: "MEMES", action: () => handleNavigation("memes") },
          { label: "MUSIC", action: () => handleNavigation("music") },
        ].map((item) => (
          <Button
            key={item.label}
            onClick={item.action}
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-sm sm:text-base md:text-lg border-2 md:border-4 border-black shadow-lg transform hover:scale-105 transition-all duration-200 hover:shadow-xl cursor-pointer"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: "600",
            }}
          >
            {item.label}
          </Button>
        ))}
      </div>

      {/* Interactive Color Circles */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-8 md:mb-16 px-4">
        {colorCircles.map((circle, index) => (
          <div
            key={index}
            onClick={() => handleColorChange(circle.gradient)}
            className={`w-5 h-5 sm:w-6 sm:h-6 ${circle.color} rounded-full border-2 border-white shadow-lg cursor-pointer transform hover:scale-125 transition-all duration-200 hover:shadow-xl active:scale-110`}
            title={`Change to ${circle.name} theme`}
          />
        ))}
      </div>

      {/* Secondary Text */}
      <div className="text-center px-4">
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white/80 tracking-wider"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          LEGENDARY GREATNESS AWAITS
        </h2>
      </div>
    </div>
  )

  const renderAboutPage = () => (
    <div className="min-h-screen px-4 py-8 relative z-10">
      {/* Back Button - Move to right side */}
      <Button
        onClick={() => handleNavigation("home")}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-20 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm text-sm md:text-base px-3 py-2 md:px-4 md:py-2"
      >
        <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Back</span>
      </Button>

      <div className="max-w-4xl mx-auto flex items-center justify-center min-h-screen">
        {/* About Header */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-6 md:mb-8 tracking-wider drop-shadow-lg px-4"
            style={{
              fontFamily: "Fredoka One, cursive",
              textShadow: "2px 2px 0px #1E40AF, 4px 4px 0px #1E3A8A",
            }}
          >
            ABOUT PAUL THE GOAT
          </h1>

          {/* Single About Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 max-w-3xl mx-auto mx-4">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <p
                className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed text-left"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <strong className="text-yellow-400">PAUL THE GOAT</strong> is the ultimate meme cryptocurrency built on
                the <strong className="text-blue-400">Base Network</strong>. Born from legendary greatness, PAUL THE
                GOAT represents excellence, achievement, and the relentless pursuit of being the greatest of all time in
                the crypto space.
                <br />
                <br />
                As the most legendary meme taking the crypto world by storm, PAUL THE GOAT combines the spirit of
                champions with cutting-edge blockchain technology. Our community-driven approach ensures that every
                holder is part of the legend, working together to achieve greatness.
                <br />
                <br />
                You can find PAUL THE GOAT listed on <strong className="text-green-400">Ape Store</strong> and other
                major platforms, making it easy for everyone to join our legendary community. Whether you're a seasoned
                crypto veteran or new to the space, PAUL THE GOAT welcomes all champions.
                <br />
                <br />
                Join the legend and experience <strong className="text-purple-400">THE GREATEST OF ALL TIME</strong>{" "}
                that only PAUL THE GOAT can provide. Together, we're not just building a cryptocurrency – we're building
                a legacy that celebrates excellence and legendary achievements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderTokenomicsPage = () => (
    <div className="min-h-screen px-4 py-8 relative z-10">
      {/* Back Button - Move to right side */}
      <Button
        onClick={() => handleNavigation("home")}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-20 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm text-sm md:text-base px-3 py-2 md:px-4 md:py-2"
      >
        <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Back</span>
      </Button>

      <div className="max-w-4xl mx-auto flex items-center justify-center min-h-screen">
        {/* Tokenomics Header */}
        <div className="text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-8 md:mb-12 tracking-wider drop-shadow-lg px-4"
            style={{
              fontFamily: "Fredoka One, cursive",
              textShadow: "2px 2px 0px #1E40AF, 4px 4px 0px #1E3A8A",
            }}
          >
            TOKENOMICS
          </h1>

          {/* Single Tokenomics Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 max-w-2xl mx-auto mx-4">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                {/* Supply */}
                <div className="text-center p-4 md:p-6 bg-white/10 rounded-xl border border-white/20">
                  <h3
                    className="text-white text-base md:text-lg mb-2 font-semibold"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    SUPPLY
                  </h3>
                  <p
                    className="text-2xl md:text-3xl font-bold text-yellow-400"
                    style={{ fontFamily: "Fredoka One, cursive" }}
                  >
                    1B
                  </p>
                </div>

                {/* Taxes */}
                <div className="text-center p-4 md:p-6 bg-white/10 rounded-xl border border-white/20">
                  <h3
                    className="text-white text-base md:text-lg mb-2 font-semibold"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    TAXES
                  </h3>
                  <p
                    className="text-2xl md:text-3xl font-bold text-green-400"
                    style={{ fontFamily: "Fredoka One, cursive" }}
                  >
                    0%
                  </p>
                </div>

                {/* Liquidity */}
                <div className="text-center p-4 md:p-6 bg-white/10 rounded-xl border border-white/20">
                  <h3
                    className="text-white text-base md:text-lg mb-2 font-semibold"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    LIQUIDITY
                  </h3>
                  <p
                    className="text-2xl md:text-3xl font-bold text-red-400"
                    style={{ fontFamily: "Fredoka One, cursive" }}
                  >
                    BURNT
                  </p>
                </div>
              </div>

              {/* Contract Address */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/20">
                <div className="text-center">
                  <p className="text-white/70 text-sm mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Contract Address:
                  </p>
                  <p
                    className="text-xl md:text-2xl font-bold text-yellow-400"
                    style={{ fontFamily: "Fredoka One, cursive" }}
                  >
                    COMING SOON
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderMemesPage = () => (
    <div className="min-h-screen px-4 py-8 relative z-10">
      {/* Back Button - Move to right side */}
      <Button
        onClick={() => handleNavigation("home")}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-20 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm text-sm md:text-base px-3 py-2 md:px-4 md:py-2"
      >
        <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Back</span>
      </Button>

      <div className="max-w-7xl mx-auto">
        {/* Memes Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-4 md:mb-6 tracking-wider drop-shadow-lg px-4"
            style={{
              fontFamily: "Fredoka One, cursive",
              textShadow: "2px 2px 0px #1E40AF, 4px 4px 0px #1E3A8A",
            }}
          >
            MEMES GALLERY
          </h1>
          <p
            className="text-blue-600 text-base sm:text-lg md:text-xl font-medium"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            The Best PAUL THE GOAT Memes Collection
          </p>
        </div>

        {/* Memes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {memes.map((meme) => (
            <Card
              key={meme.id}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
            >
              <CardContent className="p-3 md:p-4">
                <div className="aspect-square relative overflow-hidden rounded-lg mb-3">
                  <img
                    src={meme.src || "/placeholder.svg"}
                    alt={meme.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3
                  className="text-white text-sm md:text-base font-semibold text-center"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {meme.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderMusicPage = () => (
    <div className="min-h-screen px-4 py-8 relative z-10">
      {/* Back Button */}
      <Button
        onClick={() => handleNavigation("home")}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-20 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50 backdrop-blur-sm text-sm md:text-base px-3 py-2 md:px-4 md:py-2"
      >
        <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Back</span>
      </Button>

      <div className="max-w-4xl mx-auto flex items-center justify-center min-h-screen">
        <div className="text-center w-full">
          {/* Music Header */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-8 md:mb-12 tracking-wider drop-shadow-lg px-4"
            style={{
              fontFamily: "Fredoka One, cursive",
              textShadow: "2px 2px 0px #1E40AF, 4px 4px 0px #1E3A8A",
            }}
          >
            PAUL THE GOAT BEATS
          </h1>

          {/* Music Player Card */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 max-w-2xl mx-auto mx-4">
            <CardContent className="p-6 md:p-8">
              {/* Song Title */}
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-1"
                style={{ fontFamily: "Fredoka One, cursive" }}
              >
                LEGENDARY VIBES
              </h2>
              <p className="text-white/80 text-lg mb-8" style={{ fontFamily: "Poppins, sans-serif" }}>
                PAUL THE GOAT OFFICIAL
              </p>

              {/* Album Art Section */}
              <div className="flex items-center justify-center mb-8">
                {/* Album Art with blue dog and headphones */}
                <div className="w-48 h-48 md:w-56 md:h-56 bg-gray-200 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl relative flex items-center justify-center">
                  <img
                    src="/music-dog-headphones.jpeg"
                    alt="Blue Dog with Headphones"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <Button
                  className="w-12 h-12 rounded-full bg-white/30 hover:bg-white/40 border-0 text-white"
                  size="icon"
                  onClick={() => {
                    const audio = initializeAudio()
                    audio.currentTime = 0
                    setCurrentTime(0)
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6h-4z" />
                  </svg>
                </Button>

                <Button
                  className="w-16 h-16 rounded-full bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg transform hover:scale-105 transition-all border-0"
                  size="icon"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </Button>

                <Button
                  className="w-12 h-12 rounded-full bg-white/30 hover:bg-white/40 border-0 text-white"
                  size="icon"
                  onClick={() => {
                    const audio = initializeAudio()
                    audio.currentTime = Math.min(audio.currentTime + 10, duration)
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                  </svg>
                </Button>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white text-sm font-medium">{formatTime(currentTime)}</span>
                  <div
                    className="flex-1 bg-white/30 rounded-full h-1.5 relative cursor-pointer"
                    onClick={handleProgressChange}
                  >
                    <div
                      className="bg-white h-1.5 rounded-full relative transition-all duration-100"
                      style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                    >
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
                    </div>
                  </div>
                  <span className="text-white text-sm font-medium">{formatTime(duration)}</span>
                </div>
              </div>

              {/* Volume Control */}
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                </svg>
                <div
                  className="flex-1 bg-white/30 rounded-full h-1.5 relative cursor-pointer"
                  onClick={handleVolumeChange}
                >
                  <div
                    className="bg-white h-1.5 rounded-full relative transition-all duration-100"
                    style={{ width: `${volume * 100}%` }}
                  >
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>

              {/* Now Playing Status */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white/90 transition-all">
                  <div
                    className={`w-2 h-2 rounded-full ${isPlaying ? "bg-green-400 animate-pulse" : "bg-white/70"}`}
                  ></div>
                  <span className="text-sm font-medium">{isPlaying ? "Now Playing" : "Paused"}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${backgroundColor} relative overflow-hidden custom-cursor transition-all duration-1000 ease-in-out`}
    >
      {/* Google Fonts Import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:wght@400;500;600&family=Montserrathttps://fonts.googleapis.com/css2?family=Fredoka+One&family=Poppins:wght@400;500;600&family=Montserrat:wght@600;700&family=Nunito:wght@700;800&display=swap"
        rel="stylesheet"
      />

      {/* Dog Logo - Top Left Corner */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
        <img
          src="/paul-goat-mascot.png"
          alt="PAUL THE GOAT - Official Mascot"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:w-20 hover:scale-110 transition-transform duration-300 cursor-pointer"
          style={{ filter: "drop-shadow(0 0 0 transparent)" }}
          onClick={() => handleNavigation("home")}
        />
      </div>

      {/* Floating Grass Elements - Only show on home page */}
      {currentPage === "home" &&
        grassElements.map((grass, index) => (
          <div
            key={grass.id}
            className={`fixed ${grass.size} opacity-80 animate-sway ${index > 6 ? "hidden sm:block" : ""}`}
            style={{
              bottom: grass.bottom,
              left: grass.left,
              animationDuration: grass.duration,
              animationDelay: grass.delay,
              zIndex: 1,
            }}
          >
            <img src="/grass.png" alt="Grass" className="w-full h-full object-contain drop-shadow-sm" />
          </div>
        ))}

      {/* Page Content */}
      <div className="transition-all duration-500 ease-in-out">
        {currentPage === "home" && renderHomePage()}
        {currentPage === "about" && renderAboutPage()}
        {currentPage === "tokenomics" && renderTokenomicsPage()}
        {currentPage === "memes" && renderMemesPage()}
        {currentPage === "music" && renderMusicPage()}
      </div>

      {/* Custom Cursor Styles */}
      <style jsx>{`
        .custom-cursor {
          cursor: url('/dog-cursor.png') 16 16, auto;
        }
        
        .custom-cursor * {
          cursor: url('/dog-cursor.png') 16 16, auto;
        }
        
        .cursor-pointer {
          cursor: url('/dog-cursor.png') 16 16, pointer;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes sway {
          0%, 100% { 
            transform: translateX(0px) rotate(0deg); 
          }
          25% { 
            transform: translateX(2px) rotate(1deg); 
          }
          75% { 
            transform: translateX(-2px) rotate(-1deg); 
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-sway {
          animation: sway ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
