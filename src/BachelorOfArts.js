import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import testPdf from "./PDFs/Bachelorurkunde.pdf";
import './index.css';


// More examples here
// https://github.com/wojtekmaj/react-pdf/wiki/Recipes

const Bachelor = () => {
  // PDFjs worker from an external cdn
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  return (
    <>
    <div style={{width:'100%', display:'flex', justifyContent:'center',}}>
      <div style={{border:'1px solid lightgrey'}}>
        <Document className={"PDFDocument"} width='200' file={testPdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page className={"PDFPage PDFPageOne"} key={`page_${index + 1}`} pageNumber={index + 1} scale={2} />
          ))}
        </Document>
      </div> 
      </div>
    </>
  );
};

export default Bachelor;