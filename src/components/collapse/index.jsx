import React, { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Collapse.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const nodeRef = useRef(null);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
return (
    <div className="collapse-box">
      <button onClick={toggleOpen} className={`collapse-button ${isOpen ? "open" : ""}`}>
        <span>{title}</span>
        <span className={`arrow ${isOpen ? "down" : "up"}`}>
          {isOpen ? "v" : ">"}
        </span>
      </button>
      <CSSTransition
        in={isOpen}
        timeout={3000}
        classNames="collapse-transition"
        nodeRef={nodeRef}
        unmountOnExit
      >
        <div className="collapse-down" ref={nodeRef}>
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Collapse;
