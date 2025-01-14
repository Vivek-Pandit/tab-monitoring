import React, { useEffect, useState } from "react";

const App = () => {
  const [warningCount, setWarningCount] = useState(0);

  useEffect(() => {
    // Function to warn on tab switch
    const handleVisibilityChange = () => {
      if (document.hidden) {
        issueWarning();
      }
    };

    // Function to warn on mouse movement to top
    const handleMouseMove = (event) => {
      if (event.clientY <= 10) {
        issueWarning();
      }
    };

    // Disable right-click
    const disableRightClick = (event) => {
      event.preventDefault();
      alert("Right-click is disabled on this page.");
    };

    // Disable copy
    const disableCopy = (event) => {
      event.preventDefault();
      alert("Copy functionality is disabled on this page.");
    };

    // Issue warning and close tab after 3 warnings
    const issueWarning = () => {
      if (warningCount < 3) {
        setWarningCount((prevCount) => prevCount + 1);
        alert(`Warning ${warningCount + 1}: Please stay on the page.`);
      } else {
        alert("Closing the tab due to repeated warnings.");
        window.close();
      }
    };

    // Event listeners
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("copy", disableCopy);

    // Cleanup event listeners
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("copy", disableCopy);
    };
  }, [warningCount]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Our Website</h1>
      <p>
        Please stay on this page and do not attempt to switch tabs or copy any
        content.
      </p>
    </div>
  );
};

export default App;
