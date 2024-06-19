import { useEffect } from "react";

const Counter = () => {
  useEffect(() => {
    window.header.get("./Header").then((module: any) => {
      const Header = module().default;
      new Header({
        target: document.getElementById("header"),
      });
    });
  }, []);

  return <div id="header" className="text-xs m-4"></div>;
};

export default Counter;
