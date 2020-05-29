import React, { Component } from 'react'
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default class AnimatedBackground extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x09F8BF,
      backgroundColor: 0x00140E,
      showDots: true,
      THREE: THREE // use a custom THREE when initializing
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div className="animated-bg" ref={this.vantaRef} />
  }
}