"use client";
import { CircleArrowDown, RocketIcon } from "lucide-react";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log(acceptedFiles);
    
  }, []);
  const { getRootProps, getInputProps, isDragActive, isFocused ,isDragAccept} = useDropzone({
    onDrop,
  });

  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
      <div
        {...getRootProps()}
        className={`p-10 border-indigo-600 border-2 border-dashed w-[90%] mt-10 text-indigo-600 rounded-lg h-96 flex items-center justify-center ${isFocused||isDragAccept?"bg-indigo-300":"bg-indigo-100"}`}
      >
        <input {...getInputProps()} />
        <div className="flex items-center justify-center flex-col">
          {isDragActive ? (
            <>
            <RocketIcon className="h-20 w-20 animate-ping"/>
            <p>Drop the files here ...</p>
            </>
          ) : (
            <>
            <CircleArrowDown className="h-20 w-20 animate-bounce"/>
            <p>Drag n drop some files here, or click to select files</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
