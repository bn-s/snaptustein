import { memo } from 'react'

import CardSuit from './CardSuit'

const cardConstants = [
  { stringValue: 'A', columns: null },
  { stringValue: '2', columns: { outerColumn: 0, centerColumn: 2 } },
  { stringValue: '3', columns: { outerColumn: 0, centerColumn: 3 } },
  { stringValue: '4', columns: { outerColumn: 2, centerColumn: 0 } },
  { stringValue: '5', columns: { outerColumn: 2, centerColumn: 1 } },
  { stringValue: '6', columns: { outerColumn: 3, centerColumn: 0 } },
  { stringValue: '7', columns: { outerColumn: 2, centerColumn: 3 } },
  { stringValue: '8', columns: { outerColumn: 3, centerColumn: 2 } },
  { stringValue: '9', columns: { outerColumn: 4, centerColumn: 1 } },
  { stringValue: '10', columns: { outerColumn: 4, centerColumn: 2 } },
  { stringValue: 'J', columns: null },
  { stringValue: 'Q', columns: null },
  { stringValue: 'K', columns: null },
]

function CardCenter({ suit }) {
  return (
    <div className="flex flex-col justify-around w-4/6 h-full py-8">
      <CardSuit suit={suit} />
    </div>
  )
}

function CardSides({ children, value }) {
  const valueString = cardConstants[value].stringValue

  const Side = memo(function MemoizedSide() {
    return (
      <div className="flex flex-col items-center justify-between w-1/6 h-full py-3">
        <p className="text-5xl font-roboto">{valueString}</p>
        <p className="text-5xl rotate-180 font-roboto">{valueString}</p>
      </div>
    )
  })

  return (
    <>
      <Side />
      {children}
      <Side />
    </>
  )
}

export default function PlayingCard({ value, suit }) {
  return (
    <div className="flex w-80 h-[28rem] rounded-3xl border bg-white shadow-xl overflow-hidden">
      <CardSides value={value}>
        <CardCenter suit={suit} />
      </CardSides>
    </div>
  )
}
