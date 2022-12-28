import HamburgerMenu from "hamburger-react";
import { useEffect, useState } from "react";
import "./Hamburger.css"


const Hamburger = (props: {className: string}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={props.className}>
      <HamburgerMenu
        toggled={isOpen}
        toggle={setOpen}
        />

      <div className={"absolute w-full left-0 right-0 top-28 rounded-bl-3xl rounded-br-3xl shadow-lg transition-all z-50 px-10 bg-white dark:bg-zinc-600 overflow-y-hidden " + (isOpen ? "max-h-96" : "max-h-0")}>
        {props.children}
      </div>

    </div>
  );
};

export default Hamburger;
