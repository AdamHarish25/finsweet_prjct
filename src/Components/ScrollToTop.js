import React, { useEffect, Fragment } from "react";
import withRouter from "./WithRouter";
import { useNavigate } from "react-router-dom";

function ScrollToTop({ history, children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      navigate(0)
    });
    return () => {
      unlisten();
    };
  }, []);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);
