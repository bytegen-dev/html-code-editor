import React from 'react'
import Head from 'next/head'
import CodeEditor from '@/components/CodeEditor'
import CodePreview from '@/components/CodePreview'
import { FaPlay } from 'react-icons/fa'
import { HiPlay, HiRefresh } from 'react-icons/hi'
import { HiOutlinePlay } from 'react-icons/hi2'

const CodePage = () => {
  return (
    <>
        <Head>
        <title>Code</title>
        </Head>
        <div className='page code'>
            <div className="top">
                <button className="button outline deep-border">
                    Run <HiOutlinePlay className='circular' />
                </button>
                {/* <button className="button outline">
                    Reload <HiRefresh className='circular' />
                </button> */}
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