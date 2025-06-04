import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from "react";

const PageTransition = () => {
    const location = useLocation();
    const prevPathname = useRef(location.pathname);
    const [shouldAnimate, setShouldAnimate] = useState(false);


    useEffect(() => {
        if (prevPathname.current !== location.pathname) {
          setShouldAnimate(true);
          prevPathname.current = location.pathname;
        }
      }, [location.pathname]);

    return (
        <AnimatePresence >
            {shouldAnimate && (
                <motion.div
                    key={location.pathname}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    exit={{ 
                        y: "-100%", 
                        transition: { delay: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "black",
                        zIndex: 1000,
                        transformOrigin: "bottom", 
                    }}
                    onAnimationComplete={() => setShouldAnimate(false)}
                />
            )}
        </AnimatePresence>
    );
};

export default PageTransition;
