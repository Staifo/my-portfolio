import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import testPdf from "./PDFs/CV.pdf";
import './index.css'


// More examples here
// https://github.com/wojtekmaj/react-pdf/wiki/Recipes

const CV = () => {
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
      <div id="ResumeContainer" style={{border: '1px solid lightgrey', zIndex: '0'}}>
        <Document className={"PDFDocument"} width='200' file={testPdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page className={"PDFPage PDFPageOne"} key={`page_${index + 1}`} pageNumber={index + 1} scale={2} />
          ))}
        </Document>
      </div>
    </>
  );
};

export default CV;

// import React from 'react'
// import {
//   Magnifier,
//   GlassMagnifier,
//   SideBySideMagnifier,
//   PictureInPictureMagnifier,
//   MOUSE_ACTIVATION,
//   TOUCH_ACTIVATION
// } from "react-image-magnifiers";

// import tests from './images/tests.jpg'



// const CV = () => {
//   return (
//     <div style={{width: '50%'}}>
//       <SideBySideMagnifier
//   imageSrc={tests}
//   imageAlt="Example"
//   // largeImageSrc="./large-image.jpg" // Optional
// />
//     </div>)
// }

// export default CV