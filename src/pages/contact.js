import React from "react";
import Contact from "../components/Contact";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

const ContactPage = () => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggle = () => {
  //     setIsOpen(!isOpen);
  //   };

  return (
    <div>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}
      <Contact />
    </div>
  );
};

export default ContactPage;
