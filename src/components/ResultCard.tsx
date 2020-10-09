import React from 'react'

interface ResultCardProps {
  kataKey: string;
  value: boolean;
}

export const ResultCard: React.FC<ResultCardProps> = ({ kataKey, value }) => {
  return (
    <div className="resultCard">
      <div className="whiteText">
        <p className="noMargin">{kataKey}</p>
      </div>
      <div className="flex">
        {value ? (
          <input type="radio" />
        ) : (
          <div className="whiteText">x: 1</div>
        )}
      </div>
    </div>
  )
}
