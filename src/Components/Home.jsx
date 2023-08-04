import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'

const Home = () => {
  const sliderImages =[
    {
      url:"https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      url:"https://images.pexels.com/photos/2291070/pexels-photo-2291070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ]
  return (
    <div>
      <SimpleImageSlider
            width={1550}
            height={800}
            images={sliderImages}
            showNavs={true}/>


    </div>
  )
}

export default Home