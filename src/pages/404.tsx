import React from "react";

const browser = typeof window !== "undefined" && window;

const NotFoundPage = () => {
  return (
    browser && (
      <div>
        <h1>404 Not Found</h1>
      </div>
    )
  );
};

export default NotFoundPage;