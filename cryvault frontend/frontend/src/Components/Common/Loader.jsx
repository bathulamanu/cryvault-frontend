import React from 'react'
const Loader = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="spinner-container">
            <div id="edublink-preloader">
              <div className="loading-spinner">
                <div className="preloader-spin-1"></div>
                <div className="preloader-spin-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
