import React from "react";

interface ProgressBarProps {
  progress: number;
  currentPage: number;
  totalPages: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  currentPage,
  totalPages,
}) => {
  return (
    <div id="prog">
      <div>
        <div
          id="progress-line"
          style={{
            width: `${progress}%`,
            height: "3px",
            background: "rgb(38, 133, 243)",
            transition: "width 0.2s",
            borderRadius: "7px",
          }}
        />
      </div>

      <div className="pages">{`Page ${currentPage} of ${totalPages}`}</div>
    </div>
  );
};

export default ProgressBar;
