import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from '../../components/Assets/Mr_kaja_YANG_CV.pdf';

// Fix version compatibility - use the same version for both API and Worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);
  const [pdfError, setPdfError] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateScale = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      // Use container width to calculate scale for full screen
      const maxWidth = Math.min(containerWidth - 40, 1200); // 40px for padding
      return maxWidth / 595; // 595 is standard PDF width in points
    }
    return width > 786 ? 1.4 : 0.8;
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPdfError(null);
  };

  const onDocumentLoadError = (error) => {
    console.error('PDF Load Error:', error);
    setPdfError(error);
  };

  return (
    <div>
      <style>
        {`
          .resume-section {
            width: 100%;
            min-height: 100vh;
            padding: 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f5f5f5;
          }
          .resume {
            width: 100%;
            max-width: 1200px;
            display: flex;
            justify-content: center;
            margin: 20px 0;
            flex-direction: column;
            align-items: center;
          }
          .resume-section .btn-primary {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 16px;
            padding: 12px 24px;
            border-radius: 8px;
            background-color: #007bff;
            border: none;
            transition: all 0.3s;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .resume-section .btn-primary:hover {
            background-color: #0056b3;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          }
          .react-pdf__Page {
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            margin: 10px 0;
          }
          .react-pdf__Page__canvas {
            width: 100% !important;
            height: auto !important;
            max-width: 100%;
          }
          .error-message {
            color: #dc3545;
            text-align: center;
            margin: 20px;
            font-size: 16px;
            padding: 20px;
            background-color: #f8d7da;
            border: 1px solid #f5c6cb;
            border-radius: 8px;
            max-width: 600px;
          }
          .pdf-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .page-controls {
            margin: 20px 0;
            display: flex;
            align-items: center;
            gap: 15px;
          }
          .page-info {
            font-size: 16px;
            color: #495057;
            font-weight: 500;
          }
          .page-btn {
            padding: 8px 16px;
            border: 1px solid #007bff;
            background-color: white;
            color: #007bff;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s;
          }
          .page-btn:hover:not(:disabled) {
            background-color: #007bff;
            color: white;
          }
          .page-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          @media (max-width: 786px) {
            .resume {
              margin: 10px 0;
            }
            .resume-section .btn-primary {
              font-size: 14px;
              padding: 10px 20px;
            }
            .resume-section {
              padding: 15px;
            }
          }
        `}
      </style>
      <Container fluid className="resume-section" ref={containerRef}>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> Download CV
          </Button>
        </Row>

        <Row className="resume">
          {pdfError ? (
            <div className="error-message">
              <h4>Failed to load PDF</h4>
              <p><strong>Error:</strong> {pdfError.message}</p>
              <p><strong>Troubleshooting steps:</strong></p>
              <ul style={{ textAlign: 'left', marginTop: '10px' }}>
                <li>Check if the PDF file exists at the specified path</li>
                <li>Ensure the PDF file is not corrupted</li>
                <li>Try updating react-pdf and pdfjs-dist to the latest versions</li>
                <li>Check browser console for additional error details</li>
              </ul>
            </div>
          ) : (
            <div className="pdf-container">
              <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '50px', 
                    fontSize: '16px',
                    color: '#6c757d'
                  }}>
                    Loading PDF...
                  </div>
                }
              >
                <Page 
                  pageNumber={pageNumber} 
                  scale={calculateScale()}
                  loading={
                    <div style={{ 
                      textAlign: 'center', 
                      padding: '50px', 
                      fontSize: '16px',
                      color: '#6c757d'
                    }}>
                      Loading page...
                    </div>
                  }
                />
              </Document>
              
              {numPages && numPages > 1 && (
                <div className="page-controls">
                  <button 
                    className="page-btn"
                    onClick={() => setPageNumber(page => Math.max(1, page - 1))}
                    disabled={pageNumber <= 1}
                  >
                    Previous
                  </button>
                  <span className="page-info">
                    Page {pageNumber} of {numPages}
                  </span>
                  <button 
                    className="page-btn"
                    onClick={() => setPageNumber(page => Math.min(numPages, page + 1))}
                    disabled={pageNumber >= numPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;