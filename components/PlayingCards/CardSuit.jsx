function Heart({ large }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 600"
      className={`${large ? 'w-32' : 'w-16'}`}
    >
      <g transform="rotate(45,300,300)" fill="red">
        <rect x="150" y="150" height="350" width="350" />
        <circle cx="150" cy="325" r="175" />
        <circle cx="325" cy="150" r="175" />
      </g>
    </svg>
  )
}

function Club({ large }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      className={`${large ? 'w-32' : 'w-16'}`}
    >
      <circle cx="18" cy="35" r="14" />
      <circle cx="30" cy="15" r="14" />
      <circle cx="42" cy="35" r="14" />
      <path d="M30,30 Q 30,50 20,60 H40 Q30,50 30,30" />
    </svg>
  )
}

function Diamond({ large }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      className={`${large ? 'w-32' : 'w-16'}`}
    >
      <rect
        x="10"
        y="10"
        width="40"
        height="40"
        style={{ fill: 'red' }}
        transform="rotate(45,30,30)"
      />
    </svg>
  )
}

function Spade({ large }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      className={`${large ? 'w-32' : 'w-16'}`}
    >
      <g transform="rotate(225,30,30)">
        <rect width="30" height="30" x="20" y="20" />
        <circle cx="20" cy="35" r="15" />
        <circle cx="35" cy="20" r="15" />
      </g>
      <path d="M30,30 Q30,50 20,60 H40 Q30,50 30,30" />
    </svg>
  )
}

export default function CardSuit({ suit, invert = false, large = false }) {
  const normalizedSuit = suit[0].toUpperCase()

  return (
    <div className={`${invert ? 'rotate-180' : ''}`}>
      {
        {
          H: <Heart large={large} />,
          C: <Club large={large} />,
          D: <Diamond large={large} />,
          S: <Spade large={large} />,
        }[normalizedSuit]
      }
    </div>
  )
}
