'use client'

import { useState } from 'react'

type FounderPhotoProps = {
  imageSrc: string
  alt: string
  linkedinUrl: string
  imageClassName: string
}

export default function FounderPhoto({ imageSrc, alt, linkedinUrl, imageClassName }: FounderPhotoProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group">
      <button
        type="button"
        aria-label={`Show LinkedIn link for ${alt}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="block w-full"
      >
        <img src={imageSrc} alt={alt} className={imageClassName} />
      </button>

      <div className={`absolute inset-0 md:hidden ${isOpen ? 'flex' : 'hidden'} items-center justify-center bg-fair-dark/70`}>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xs uppercase font-bold tracking-[0.05em]"
        >
          LinkedIn
        </a>
      </div>

      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 hidden md:group-hover:flex md:group-focus-within:flex items-center justify-center bg-fair-dark/70 text-white text-xs uppercase font-bold tracking-[0.05em]"
      >
        LinkedIn
      </a>
    </div>
  )
}
