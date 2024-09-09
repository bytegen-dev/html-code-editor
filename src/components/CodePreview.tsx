import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { HiRefresh } from 'react-icons/hi';

const CodePreview: React.FC<{ code: { css: string; html: string; js: string } }> = ({ code }) => {
  const [showDisplay, setShowDisplay] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshIframe = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className={`side preview ${showDisplay ? "show" : ""}`}>
      <button className="button drag-up outline" onClick={() => {
        setShowDisplay(!showDisplay);
      }}>
        <FaChevronUp />
      </button>
      <button className="button outline refresh" onClick={refreshIframe}>
        Refresh <HiRefresh className='circular' />
      </button>
      {code?.html ? <div className="iframe-holder">
        <iframe
          key={refreshKey}
          title="Code Preview"
          srcDoc={`
            <html>
              <head>
                <style>${code.css}</style>
              </head>
              <body>
                ${code.html}
                <script>${code.js}</script>
              </body>
            </html>
          `}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div> :
      <p>
        ...
      </p>}
    </div>
  );
};

export default CodePreview;