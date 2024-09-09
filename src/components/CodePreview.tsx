import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { HiRefresh } from 'react-icons/hi';

const CodePreview: React.FC<{ code: { css: string; html: string; js: string } }> = ({ code }) => {
  const [showDisplay, setShowDisplay] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [error, setError] = useState<any | null>(null);

  const refreshIframe = () => {
    setRefreshKey(prevKey => prevKey + 1);
    setError(null);
  };

  const handleError = (error:any) => {
    console.error(error)
    setError(error);
  };

  useEffect(() => {
    const handleMessage = (event:any) => {
      if (event.data.type === "errorFound") {
        console.error("Error in iframe:", event.data);
        handleError(event.data)
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const clearError = () => {
    setError(null);
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
                <script>
                  window.onerror = function(message, source, lineno, colno, error) {
                    window.parent.postMessage(
                      { type: 'errorFound', message, source, lineno, colno, error: error?.message || 'Unknown Error' },
                      '*'
                    );
                    return true;
                  };

                  window.addEventListener('error', function(event) {
                    window.parent.postMessage(
                      { type: 'errorFound', message: event.message, source: event.filename, lineno: event.lineno, colno: event.colno, error: event.error?.message || 'Unknown Error' },
                      '*'
                    );
                  });

                  try {
                    ${code.js}
                  } catch (error) {
                    window.parent.postMessage({ type: 'errorFound', error: error.message }, '*');
                  }
                </script>
              </body>
            </html>
          `}
          style={{ width: '100%', height: '100%', border: 'none' }}
          onLoad={clearError}
          onError={handleError}
          onErrorCapture={handleError}
        />


      </div> :
      <p>
        ...
      </p>}
      {error && <p className="error-message">{error?.message || "an error occured"}</p>}
    </div>
  );
};

export default CodePreview;