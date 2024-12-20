import React from 'react'

function Result() {
  return (
    <div className='py-5 px-8 bg-dark-gray font-bold text leading-10 flex items-center'>
        <input className='font-bold text-32 leading-10' type="text" placeholder='P4$5W0rD!' value="hello" readOnly/>
        <button className='inline-flex' type='button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" fill="none"><path fill="#A4FFAF" fillRule="evenodd" d="m17.909.659 2.432 2.432c.422.422.659.994.659 1.591V17.25a2.25 2.25 0 0 1-2.25 2.25H15v2.25A2.25 2.25 0 0 1 12.75 24H2.25A2.25 2.25 0 0 1 0 21.75v-15A2.25 2.25 0 0 1 2.25 4.5H6V2.25A2.25 2.25 0 0 1 8.25 0h8.068a2.25 2.25 0 0 1 1.591.659ZM2.531 21.75h9.938a.282.282 0 0 0 .281-.281V19.5h-4.5A2.25 2.25 0 0 1 6 17.25V6.75H2.531a.281.281 0 0 0-.281.281V21.47a.281.281 0 0 0 .281.281Zm15.938-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm-2.719-12h3v-.452a.282.282 0 0 0-.082-.198L16.4 2.332a.281.281 0 0 0-.199-.082h-.451v3Z" clipRule="evenodd"/></svg>
        </button>
    </div>
  )
}

export default Result