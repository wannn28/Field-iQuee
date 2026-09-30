import { createElement, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Bounds, Center, OrbitControls, useGLTF } from '@react-three/drei'

const FLOOR = '/assets/models/kitchen.glb'
const CABINET = '/assets/models/kenney-cabinet.glb'
const FRIDGE = '/assets/models/kenney-fridge.glb'
const STOVE = '/assets/models/kenney-stove.glb'

function Model({ url, position }) {
  const { scene } = useGLTF(url)
  return createElement('primitive', { object: scene, position })
}

function Kitchen() {
  return createElement(
    'group',
    null,
    createElement(Model, { url: FLOOR, position: [0, 0, 0] }),
    createElement(Model, { url: FRIDGE, position: [-0.95, 0, -0.7] }),
    createElement(Model, { url: STOVE, position: [-0.45, 0, -0.7] }),
    createElement(Model, { url: CABINET, position: [0.05, 0, -0.7] })
  )
}

function One({ url }) {
  return createElement(Model, { url })
}

function Stage({ url, scene }) {
  const subject = scene === 'kitchen'
    ? createElement(Kitchen)
    : createElement(One, { url })
  return createElement(
    Canvas,
    { camera: { position: [3, 2, 4], fov: 32 }, dpr: [1, 1.75] },
    createElement('color', { attach: 'background', args: ['#e7dfd1'] }),
    createElement('ambientLight', { intensity: 0.9 }),
    createElement('directionalLight', { position: [4, 6, 3], intensity: 1.35 }),
    createElement(
      Suspense,
      { fallback: null },
      createElement(Bounds, { fit: true, clip: true, observe: true, margin: 1.2 },
        createElement(Center, null, subject))
    ),
    createElement(OrbitControls, { makeDefault: true, enablePan: false, minDistance: 1.2, maxDistance: 14 })
  )
}

for (const el of document.querySelectorAll('[data-viewer]')) {
  const url = el.getAttribute('data-src')
  const scene = el.getAttribute('data-scene')
  if (!url && scene !== 'kitchen') continue
  createRoot(el).render(createElement(Stage, { url, scene }))
}
