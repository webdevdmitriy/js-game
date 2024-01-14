import './style.css'
import mWalkPath from './assets/M-walk.png'

const canvas = (document.getElementById('game') as HTMLCanvasElement) || null

if (!canvas) throw new Error('Canvas not found')

const ctx = canvas.getContext('2d') // реализуем интерфейс рисования

const CANVAS_WIDTH = canvas.width
const CANVAS_HEIGHT = canvas.height

if (ctx) {
  const img = document.createElement('img')
  img.src = mWalkPath

  img.onload = () => {
    let step = 0
    setInterval(() => {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      ctx.drawImage(img, 48 * step, 0, 48, 48, 100, 100, 64, 64)
      if (step === 2) step = 0
      else step++
    }, 120)
  }
}
