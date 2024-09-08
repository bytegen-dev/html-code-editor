import React, { useState } from 'react'
import { FaCss3, FaHtml5, FaJs } from 'react-icons/fa'

const CodeEditor = () => {
  const tabs = [
    {
      title: "index.html",
      id: "html",
    },
    {
      title: "style.css",
      id: "css",
    },
    {
      title: "script.js",
      id: "js",
    },
  ]

  const [currentTab, setCurrentTab] = useState("html")

  return (
    <>
        <div className="side editor">
          <div className="head">
            {
              tabs?.map((tab)=>{
                return (
                  <div className={`tab ${currentTab === tab?.id ? "active" : ""}`} key={tab.id} id={tab.id} onClick={()=>{
                    setCurrentTab(tab.id)
                  }}>
                    {tab.id === "html" && <FaHtml5 />}
                    {tab.id === "css" && <FaCss3 />}
                    {tab.id === "js" && <FaJs />}
                    {tab.title}
                  </div>
                )
              })
            }
          </div>
        </div>
    </>
  )
}

export default CodeEditor