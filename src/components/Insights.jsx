import React from 'react'

const Insights = ({tag,num}) => {
  return (
    <div>
        <div className="insights">
            <div className="text-insight flex flex-col">
                <h5 className="font-medium text-[#333333]">{tag}</h5>
                <h1 className="text-3xl text-white">{num}</h1>
            </div>
        </div>
    </div>
  )
}

export default Insights
