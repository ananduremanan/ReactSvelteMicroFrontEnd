import { useEffect } from "react";

const DashBoard = () => {
  useEffect(() => {
    window.header.get("./Dash").then((module: any) => {
      const AwesomeDash = module().default;
      new AwesomeDash({
        target: document.getElementById("dash"),
      });
    });
  }, []);

  return <div id="dash" className="text-xs m-4"></div>;
};

export default DashBoard;
