import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    console.log(location)
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
      console.log("scroll")
    }
  }, [location]);

  return null;
}