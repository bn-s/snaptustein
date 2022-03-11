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

function CardCenterNumberedCol({ n, suit }) {
  const inversionPoint = n - parseInt(n / 2, 10)
  const justifyAround = n === 1 || n % 2 === 0
  return (
    <div
      className={`inline-flex flex-col w-full ${
        justifyAround ? 'justify-around' : 'justify-between'
      }`}
    >
      {[...Array(n)].map((_, i) => {
        // eslint-disable-next-line react/no-array-index-key
        return <CardSuit invert={i >= inversionPoint} suit={suit} key={i} />
      })}
    </div>
  )
}

function CardCenterNumbered({ value, suit }) {
  const outerColumnValue = cardConstants[value].columns.outerColumn
  const centerColumnValue = cardConstants[value].columns.centerColumn
  return (
    <div className="flex justify-between w-4/6 h-full py-8">
      <CardCenterNumberedCol n={outerColumnValue} suit={suit} />
      <CardCenterNumberedCol n={centerColumnValue} suit={suit} />
      <CardCenterNumberedCol n={outerColumnValue} suit={suit} />
    </div>
  )
}

function CardCenterRest({ value, suit }) {
  return (
    <div className="flex flex-col justify-around w-4/6 h-full py-8">
      <div className="flex justify-between w-full">
        {value === 0 ? (
          ''
        ) : (
          <>
            <CardSuit suit={suit} />
            <CardSuit suit={suit} />
          </>
        )}
      </div>
      <div className="flex justify-center">
        {value === 0 ? (
          <CardSuit suit={suit} large />
        ) : (
          <p className="text-9xl font-roboto">
            {cardConstants[value].stringValue}
          </p>
        )}
      </div>
      <div className="flex justify-between w-full -rotate-180">
        {value === 0 ? (
          ''
        ) : (
          <>
            <CardSuit suit={suit} />
            <CardSuit suit={suit} />
          </>
        )}
      </div>
    </div>
  )
}

function CardCenter({ value, suit }) {
  const isNumberedCard = value > 0 && value < 10
  return isNumberedCard ? (
    <CardCenterNumbered value={value} suit={suit} />
  ) : (
    <CardCenterRest value={value} suit={suit} />
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
        <CardCenter value={value} suit={suit} />
      </CardSides>
    </div>
  )
}
