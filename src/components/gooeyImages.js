import React from 'react'
//import * as THREE from 'three';
import StretchEffect from '../helpers/StretchEffect';

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

export default class GooeyImages extends React.Component {
  constructor() {
    super()
    this.gooeyRef = React.createRef()
  }
 
  componentDidMount() {
    console.log('Mount Up Gooey!')
    const container = document.body
    //const container = document.querySelector('.canvas-wrapper')
    //const container = document.querySelector('.home-page')
    const itemsWrapper = document.querySelector('.project-list')
    this.effect = new StretchEffect(container, itemsWrapper)
  }
  componentWillUnmount() {
    console.log('Unount Gooey!')
    if (this.effect) this.effect.destroy()
  }
  render() {
    return <div ref={this.gooeyRef} />
  }
}