import React from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const CodePreview = () => {
  return (
    <>
        <div className="side preview">
            <button className="button drag-up outline">
              show display <FaChevronUp className='circular' />
            </button>
            <p>
              Click <b>Run</b>
            </p>
        </div>
    </>
  )
}

export default CodePreview