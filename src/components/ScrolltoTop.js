import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  console.log(pathname);
  // console.log(window.screenX);
  // console.log(window.screenY);

  useEffect(() => {
    // window.scrollTo(0, 0);
    document.getElementsByClassName("home-main").ScrollTop = 0;
    console.log("Just Scrolled");
  }, [pathname]);

  return null;
}
