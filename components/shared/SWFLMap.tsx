export function SWFLMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 600"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="swfl-water" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1B3550" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#04211B" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="swfl-land" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#241F1B" />
          <stop offset="100%" stopColor="#17130F" />
        </linearGradient>
      </defs>

      {/* Water */}
      <rect width="400" height="600" fill="url(#swfl-water)" />

      {/* Latitude/longitude graticule for a chart-like feel */}
      <g stroke="#C9A24B" strokeOpacity="0.12" strokeWidth="1">
        {[0, 100, 200, 300, 400, 500, 600].map((y) => (
          <line key={`h-${y}`} x1="0" y1={y} x2="400" y2={y} />
        ))}
        {[0, 80, 160, 240, 320, 400].map((x) => (
          <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="600" />
        ))}
      </g>

      {/* Mainland coastline */}
      <path
        d="M190,0
           C200,20 150,40 165,75
           C130,90 140,115 175,120
           C200,150 175,180 185,205
           C195,215 150,225 140,245
           C130,260 175,265 180,290
           C185,320 165,350 170,370
           C175,385 150,390 155,410
           C160,425 180,420 180,445
           C180,460 165,470 160,485
           C155,495 175,495 175,510
           C178,530 172,560 175,600
           L400,600 L400,0 Z"
        fill="url(#swfl-land)"
        stroke="#C9A24B"
        strokeOpacity="0.6"
        strokeWidth="2"
      />

      {/* Pine Island */}
      <path
        d="M100,140 C115,160 110,200 105,225 C95,235 75,225 78,200 C70,175 85,150 100,140 Z"
        fill="url(#swfl-land)"
        stroke="#C9A24B"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />

      {/* Captiva */}
      <path
        d="M65,205 C70,215 55,225 40,220 C38,212 50,203 65,205 Z"
        fill="url(#swfl-land)"
        stroke="#C9A24B"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />

      {/* Sanibel */}
      <path
        d="M105,240 C90,235 60,240 45,250 C55,258 90,258 105,250 Z"
        fill="url(#swfl-land)"
        stroke="#C9A24B"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />

      <text x="200" y="30" textAnchor="middle" fill="#C9A24B" fillOpacity="0.5" fontSize="12" letterSpacing="4">
        GULF OF MEXICO
      </text>
    </svg>
  );
}
