import React from 'react'
// import updatedTotalScore from './Resultpage'

function ResultInfo({updatedTotalScore, currentColor}) {
  
  
    return (
    <div className='ml-4 fw-bold ' id="titles" >
      
        <div>
        {currentColor}
        {/* {updatedTotalScore} */}
        
        {/* {console.log(updatedTotalScore)}     */}
        </div>
       
    </div>
    
  )
}

export default ResultInfo