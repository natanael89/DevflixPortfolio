'use client'

import { useEffect } from 'react'

export default function BodyAttributesCleaner() {
  useEffect(() => {
    const body = document.querySelector('body')
    if (body) {
      body.removeAttribute('cz-shortcut-listen')
    }
  }, [])

  return null
}
