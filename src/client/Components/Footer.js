import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="bg-gray-800 text-gray-200 py-6 mt-auto shadow-md">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Spencer LeBard. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
