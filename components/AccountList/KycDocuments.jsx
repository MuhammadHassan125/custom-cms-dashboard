import React, {useState, useRef} from 'react'
import CancelCountinuebtns from './CancelCountinuebtns';

const KycDocuments = () => {

    const [uploadedFiles, setUploadedFiles] = useState([]);
    const fileInputRef = useRef(null);
  
    const handleFileUpload = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click(); // Trigger the file input
      }
    };
  
    const handleFileInputChange = (event) => {
      const files = event.target.files;
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  
      const filteredFiles = Array.from(files).filter(file => allowedTypes.includes(file.type));
  
      setUploadedFiles(filteredFiles);
    };
    
  return (
    <>
        <div className='kyc-main'>

        <div className="doc-uploading-div">
            <h4>Identification Proof</h4>
            <div className='file-upload-input' onClick={handleFileUpload}>
                <p>Upload File Types: .pdf, .docx</p>
                <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx"
                multiple
                onChange={handleFileInputChange}
              />
            </div>

            <div className='file-upload-img'>
                <img src='/attach_file.png'/>
            </div>
      <p className='uploading-text'>This could be a passport, national ID card, or driver's license.</p>
      </div>

      <div className="doc-uploading-div">
            <h4>Proof of Address</h4>
            <div className='file-upload-input' onClick={handleFileUpload}>
                <p>Upload File Types: .pdf, .docx</p>
                <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx"
                multiple
                onChange={handleFileInputChange}
              />
            </div>

            <div className='file-upload-img'>
                <img src='/attach_file.png'/>
            </div>
      <p className='uploading-text'>This could be a utility bill or bank statement.</p>
      </div>
    
    <CancelCountinuebtns label={"Add Account"}/>
        </div>
        
    </>
  )
}

export default KycDocuments