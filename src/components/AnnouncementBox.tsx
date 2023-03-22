import React from 'react'

interface Props {

}

export default function AnnouncementBox(props: Props) {
  return (
    <div className='wrapper'>
      <div className="text--center header-box">
        <h1 className='headline'>🎉 <span className='gradient-text'>Syringe is out now!</span> 🥳</h1>
        <h2>Dependency Injection in Swift has never been simpler</h2>
      </div>
    </div>
  )
}