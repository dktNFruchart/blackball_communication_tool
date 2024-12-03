"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import des icônes

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function CodeSportif() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="flex overflow-hidden"
        style={{ height: "75vh", width: "100%", maxWidth: "1000px" }}
      >
        <div className="overflow-y-auto flex-1">
          <Document
            file="pdf/code_sportif_2024-25.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>

        <div
          className="flex flex-col justify-center text-white items-center p-4 "
          style={{ textShadow: "2px 2px 4px #000000" }}
        >
          <button
            onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
            disabled={pageNumber <= 1}
            className="p-3 bg-[#114378] text-white rounded mb-2 disabled:bg-gray-400"
          >
            <FaArrowLeft size={20} />
          </button>

          <p className="text-center mb-2">
            Page {pageNumber} of {numPages}
          </p>

          <button
            onClick={() =>
              setPageNumber((prev) => Math.min(prev + 1, numPages))
            }
            disabled={pageNumber >= numPages}
            className="p-3 bg-[#114378] text-white rounded disabled:bg-gray-400"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
