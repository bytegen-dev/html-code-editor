import React from 'react'
import Head from 'next/head'
import CodeEditor from '@/components/CodeEditor'
import CodePreview from '@/components/CodePreview'
import { FaPlay } from 'react-icons/fa'

const CodePage = () => {
  return (
    <>
        <Head>
        <title>Code</title>
        </Head>
        <div className='page code'>
            <div className="top">
                <button className="button outline">
                    Run <FaPlay className='circular' />
                </button>
            </div>
            <div className="bottom">
                <CodeEditor />
                <CodePreview />
            </div>
        </div>
    </>
  )
}

export default CodePage