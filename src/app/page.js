import React from 'react'
import Header from './Header/Header'
import Uploadfiles from './Uploadfiles/Uploadfiles'
import Customequestions from './Customquestions/Customequestions'

const page = () => {
  return (
    <div>
    <Header/>
    <Uploadfiles/>
      
    <Customequestions/>
    </div>
  )
}

export default page
