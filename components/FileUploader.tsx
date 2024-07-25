"use client";
import useUpload, { StatusText } from "@/hooks/useUpload";
import { CheckCheckIcon, CircleArrowDown, HammerIcon, RocketIcon, SaveIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const FileUploader = () => {
  const { progress, status, fileId, handleUpload } = useUpload();
  const router = useRouter();

  useEffect(() => {
    if (fileId) {
      router.push(`/dashboard/files/${fileId}`);
    }
  }, [fileId, router]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // Do something with the files
    const file = acceptedFiles[0];
    if (file) {
      await handleUpload(file);
    } else {
    }
  }, []);
  const statusIcons:{
    [key in StatusText]:JSX.Element;
  }={
    [StatusText.UPLOADING]:(
        <RocketIcon className="H-20 W-20 text-indigo-600"/>
    ),
    [StatusText.UPLOADED]:(<CheckCheckIcon className="h-20 w-20"/>),
    [StatusText.SAVING]:(<SaveIcon className="h-20 w-20 "/>),
    [StatusText.GENERATING]:(
        <HammerIcon className="h-20 w-20 animate-bounce text-indigo-600"/>
    )
  }
  const { getRootProps, getInputProps, isDragActive, isFocused, isDragAccept } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      accept: {
        "application/pdf": [".pdf"],
      },
    });

  const uploadInProgress = progress != null && progress >= 0 && progress <= 100;

  return (
    <div className="flex flex-col gap-4 items-center max-w-7xl mx-auto">
      {uploadInProgress && (
        <div className="mt-32 flex flex-col justify-center items-center gap-5">
          <div className={`radial-progress bg-indigo-300 text-white border-indigo-600 border-4 ${progress===100&&"hidden"}`}
          role="progressbar"
          style={{
            //@ts-ignore
            "--value":progress,
            "--size":"12rem",
            "--thickness":"1.3rem",
          }}>{progress}%</div>
          {
            //@ts-ignore
            statusIcons[status!]
          }

          {typeof status === "string" && <p className="text-indigo-600 animate-pulse">{status}</p>}
        </div>
      )}
    { !uploadInProgress&& (<div
        {...getRootProps()}
        className={`p-10 border-indigo-600 border-2 border-dashed w-[90%] mt-10 text-indigo-600 rounded-lg h-96 flex items-center justify-center ${
          isFocused || isDragAccept ? "bg-indigo-300" : "bg-indigo-100"
        }`}
      >
        <input {...getInputProps()} />
        <div className="flex items-center justify-center flex-col">
          {isDragActive ? (
            <>
              <RocketIcon className="h-20 w-20 animate-ping" />
              <p>Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className="h-20 w-20 animate-bounce" />
              <p>Drag n drop some files here, or click to select files</p>
            </>
          )}
        </div>
      </div>
)}
    </div>
  );
};

export default FileUploader;
