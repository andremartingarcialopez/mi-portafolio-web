import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse al top al cambiar de ruta
  }, [pathname]); // Este efecto se ejecuta cada vez que cambia el pathname

  return null;
};


