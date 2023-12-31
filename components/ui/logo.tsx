import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="InterWallet">
      <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="none"/>

        <defs>
          <linearGradient id="fullGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{'stopColor':'#14b8a6', 'stopOpacity':1}} />
            <stop offset="100%" style={{
              'stopColor': '#2563eb',
              'stopOpacity':1
              }} />
          </linearGradient>
          <linearGradient id="lGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style  ={{'stopColor':'#2563eb', 'stopOpacity': 1}} />
            <stop offset="100%" style={{'stopColor':'#1D8EC9', 'stopOpacity': 1}} />
          </linearGradient>
          <linearGradient id="rGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{'stopColor':'#1D8EC9', 'stopOpacity':1}} />
            <stop offset="100%" style={{'stopColor':'#14b8a6', 'stopOpacity':1}} />
          </linearGradient>
        </defs>

        <path d="M10,20 Q25,150 50,45" stroke="url(#lGradient)" stroke-width="15" fill="none" stroke-linecap="round"/>
        <path d="M50,45 Q75,150 90,20" stroke="url(#rGradient)" stroke-width="15" fill="none" stroke-linecap="round"/>
        <circle cx="50" cy="17.5" r="13" fill="#1D8EC9"/>
      </svg>

    </Link>
  )
}
