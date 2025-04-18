import React from "react";

const DownloadButton = ({ enhanced, loading }) => {
  if (!enhanced || loading) return null;

  return (
    <div className="text-center mt-6">
      <a
        href={enhanced}
        download="enhanced-image.jpg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
          Download Enhanced Image
        </button>
      </a>
    </div>
  );
};

export default DownloadButton;
