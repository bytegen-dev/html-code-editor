import React, { useEffect, useState } from 'react'
import { FaCss3, FaHtml5, FaJs } from 'react-icons/fa'

interface CodeEditorProps {
  setCode: React.Dispatch<React.SetStateAction<{ html: string; css: string; js: string; }>>;
  code: { html: string; css: string; js: string; }; // Added code property
}

const CodeEditor: React.FC<CodeEditorProps> = ({ setCode: propsSetCode, code }) => {
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

  const [currentTab, setCurrentTab] = useState<"html" | "css" | "js">("html");
  const [codeState, setCodeState] = useState({
    html: '',
    css: '',
    js: ''
  });

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = { ...codeState, [currentTab]: e.target.value };
    propsSetCode(newCode); // Update parent state
    setCodeState(newCode)
  };

  useEffect(()=>{
    setCodeState(code)
  },[])

  return (
    <div className="side editor">
      <div className="head">
        {tabs.map((tab:any) => (
          <div
            className={`tab ${currentTab === tab.id ? "active" : ""}`}
            key={tab.id}
            id={tab.id}
            onClick={() => setCurrentTab(tab?.id)}
          >
            {tab.id === "html" && <FaHtml5 />}
            {tab.id === "css" && <FaCss3 />}
            {tab.id === "js" && <FaJs />}
            {tab.title}
          </div>
        ))}
      </div>
      <div className="code-holder">
        <textarea
          value={codeState[currentTab as keyof typeof codeState]} // Cast currentTab to the correct type
          onChange={handleCodeChange}
          rows={10}
          style={{ width: '100%' }}
          placeholder='Hello world_'
        />
      </div>
    </div>
  );
};

export default CodeEditor