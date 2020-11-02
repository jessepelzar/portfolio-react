import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../../../assets/Cursor/Cursor.json'

export const LogoAnimation = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className="spacing-bottom-sm">
        <Lottie options={defaultOptions}
              height={70}
              width={70}
              isStopped={false}
              isPaused={false}/>
        </div>
    )
}
