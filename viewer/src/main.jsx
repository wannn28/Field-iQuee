import { createElement, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Bounds, Center, OrbitControls, useGLTF } from '@react-three/drei'

function Model({ url }) {
  const { scene } = useGLTF(url)
  return createElement('primitive', { object: scene })
}

function Stage({ url }) {
  return createElement(
    Canvas,
    { camera: { position: [3, 2, 4], fov: 32 }, dpr: [1, 1.75] },
    createElement('color', { attach: 'background', args: ['#e7dfd1'] }),
    createElement('ambientLight', { intensity: 0.85 }),
    createElement('directionalLight', { position: [4, 6, 3], intensity: 1.35 }),
    createElement(
      Suspense,
      { fallback: null },
      createElement(
        Bounds,
        { fit: true, clip: true, observe: true, margin: 1.25 },
        createElement(Center, null, createElement(Model, { url }))
      )
    ),
    createElement(OrbitControls, { makeDefault: true, enablePan: false, minDistance: 1.2, maxDistance: 12 })
  )
}

for (const el of document.querySelectorAll('[data-viewer]')) {
  const url = el.getAttribute('data-src')
  if (!url) continue
  createRoot(el).render(createElement(Stage, { url }))
}
