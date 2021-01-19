import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  const {colors} = props

  const draw = ctx => {
    for (let i = 0; i < colors.length; i++) {
        ctx.fillStyle = colors[i]
        ctx.fillRect(100*i, 0, 100, 150)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    
    draw(context)

  }, [draw])
  
  return <canvas ref={canvasRef} {...props} width={100*colors.length} height="150" />

}

export default Canvas