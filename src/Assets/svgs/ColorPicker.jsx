import React from 'react'

export default function ColorPicker({color}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
  <circle cx="21" cy="21" r="16" fill={color}/>
  <circle cx="21" cy="21" r="20" stroke="url(#paint0_angular_1261_899)" stroke-width="2"/>
  <defs>
    <radialGradient id="paint0_angular_1261_899" cx="0.8" cy="0.5" r="2" gradientUnits="userSpaceOnUse" gradientTransform="translate(21 21) rotate(90) scale(21 21)">
      <stop offset="0.142857" stop-color="#800080"/>
      <stop offset="0.285714" stop-color="#4B0082"/>
      <stop offset="0.428571" stop-color="#0000FF"/>
      <stop offset="0.571429" stop-color="#008000"/>
      <stop offset="0.714286" stop-color="#F9F906"/>
      <stop offset="0.857143" stop-color="#FF8C00"/>
      <stop offset="1" stop-color="#FF0000"/>
    </radialGradient>
  </defs>
</svg>
  )
}
