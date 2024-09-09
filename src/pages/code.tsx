import React, { useState } from 'react'
import Head from 'next/head'
import CodeEditor from '@/components/CodeEditor'
import CodePreview from '@/components/CodePreview'
import { HiShare } from 'react-icons/hi'
import { HiOutlineRefresh } from 'react-icons/hi'
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { FaSpinner } from 'react-icons/fa'

const CodePage = () => {
  const [code, setCode] = useState({
    html: `<!DOCTYPE html>
<html>
<head>
  <title>Default Title</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div class="blur"></div>
  <h1>Hello, World!</h1>
  <button id="click-me">Click Me</button>
</body>
</html>`,
    css: `* { 
      margin: 0; 
      padding: 0; 
      box-sizing: border-box; 
      font-family: 'Poppins', sans-serif; 
    }
    body {
      background-color: #121212; 
      background-image: linear-gradient(45deg, #0000, #000);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      color: #ffffff; 
      display: flex; 
      flex-direction: column;
      gap: 10px;
      justify-content: center; 
      align-items: center; 
      height: 100vh; 
      position: relative; 
    } 
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .blur {
      position: absolute; 
      top: 50%; 
      left: 50%; 
      width: 30vw; 
      height: 30vw; 
      background-color: teal; 
      filter: blur(10vw); 
      transform: translate(-50%, -50%); 
      opacity: 0.7;
      border-radius: 10000px;
      z-index: -1; 
    }
    button {
      background-color: teal;
      color: white;
      padding: 10px 15px;
      border: none; 
      cursor: pointer;
      transition: all 0.5s ease;
      border-radius: 20px;
    }
    button:hover {
      box-shadow: 0px 0px 10px #fff5; 
      transform: scale(1.05);
    }
    .spin {
      animation: spin 1s linear infinite; 
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }`,
    js: `function clickButton() {
      alert("Hi. Follow me on Twitter @bytegen_dev")
    }

    const clickMeButton = document.getElementById("click-me");

    clickMeButton.addEventListener("click", () => {
      clickButton();
    });`,
  });

  const [isExporting, setIsExporting] = useState(false);

  const handleExport = async () => {
    setIsExporting(true);
    const zip = new JSZip();
    zip.file("index.html", code.html);
    zip.file("styles.css", code.css);
    zip.file("script.js", code.js);

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "codebase.zip");

    setTimeout(()=>{
      setIsExporting(false);
    }, 2000)
  };

  return (
    <>
      <Head>
        <title>CodE || editor.</title>
      </Head>
      <div className='page code'>
        <div className="top">
          <button className={`button outline deep-border ${isExporting ? 'spin' : ''}`} onClick={handleExport}>
            {isExporting ? 'Generating Files...' : 'Export'}
            {isExporting ? <FaSpinner className='circular' /> : <HiShare className='circular' />} 
          </button>
        </div>
        <div className="bottom">
          <CodeEditor code={code} setCode={setCode} />
          <CodePreview code={code} />
        </div>
      </div>
    </>
  );
};

export default CodePage