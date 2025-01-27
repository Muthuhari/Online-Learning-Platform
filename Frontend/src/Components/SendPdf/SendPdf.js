import React from 'react';
import Nav from '../Nav/Nav';
import axios from "axios";
import { useState, useEffect} from "react";
import PdfComp from "./PdfComp"

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function SendPdf() {
    const [title, setTitle] = useState("");
    const [file, saveFile] = useState("");
    const [allPdf, setAllPdf] = useState("");
    const [pdfFile, setPDFFile]= useState(null)

  
    useEffect(() => {
      getpdf();
    }, []);
  
    const getpdf = async () => {
      const result = await axios.get("http://localhost:5000/getFile");
      console.log(result.data.data);
      setAllPdf(result.data.data);
    };
  
    const submitPdf = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("title", title);
      formData.append("file", file);
      console.log(title, file);
  
      try {
        const result = await axios.post(
          "http://localhost:5000/uplodefile",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
  
        console.log(result);
        if (result.data.status === 200) {
          alert("Upload Success");
          getpdf();
        } else {
          alert("Upload Error");
        }
      } catch (error) {
        console.error("Error Uploading:", error.message);
        alert("Error Uploading: " + error.message);
      }
    };
  const showPdf =(pdf) => {
    setPDFFile(`http://localhost:5000/file/${pdf}`)
  }
    return (
      <div>
        <Nav />
        <h1>Send Pdf</h1>
        <form onSubmit={submitPdf}> {/* Fixed the typo from <from> to <form> */}
          <label>Pdf Title</label>
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <br></br>
          <label>Select Pdf Title</label>
          <br></br>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => saveFile(e.target.files[0])}
            required
          ></input>
          <button type="submit">Submit</button> {/* Added type="submit" for clarity */}
        </form>
        <div>
  <h4>PDF Details</h4>
  {allPdf.length === 0 ? (
    <p>No PDFs available</p>
  ) : (
    allPdf.map((data) => (
      <div key={data._id}>
        <h1>Title: {data.title}</h1>
        <button onClick={() => showPdf(data.pdf)}>Show Pdf</button>
      </div>
    ))
  )}
</div>

        <PdfComp pdfFile={pdfFile}/>
      </div>
    );
  }
  
  export default SendPdf;