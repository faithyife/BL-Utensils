import React from 'react'

const HeroOne = () => {
  return (
    <>
    <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div class="flex flex-col lg:flex-row justify-center item-start py-12 px-6">
    <div class="lg:w-1/2 lg:pr-8 mb-6 lg:mb-0 bg-[#CEB0FA]">
        <h1 class="text-4xl lg:text-5xl font-bold mb-4">Quality and affordable</h1>
        <h1 class="text-4xl lg:text-5xl font-bold mb-4 text-purple-800">cookwares</h1>
        <p class="text-lg lg:text-xl text-gray-700">Search no further, we’ve got you covered</p>
        <button className="btn btn-primary bg-[#7C3AED]">Buy Now</button></div>
    <div class="lg:w-1/2">
        <img src="public/images/image1.png" alt="ImageOne" class="rounded-lg shadow-lg"/>
    </div>
</div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      
    </>
  )
}

export default HeroOne
