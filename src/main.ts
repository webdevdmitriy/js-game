import './style.css'

const canvas = (document.getElementById('game') as HTMLCanvasElement) || null

if (!canvas) throw new Error('Canvas not found')

const ctx = canvas.getContext('2d') // реализуем интерфейс рисования
