import { useState, useEffect, useRef } from 'react';

const useAnimatedUnmount = (visible) => {
  const [shouldRender, setShouldRender] = useState(visible);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    const handleAnimationEnd = () => {
      setShouldRender(false);
    };

    if (!visible && animatedElementRef.current) {
      animatedElementRef.current.addEventListener(
        'animationend',
        handleAnimationEnd,
      );
    }

    return () => {
      if (animatedElementRef.current) {
        animatedElementRef.current.removeEventListener(
          'animationend',
          handleAnimationEnd,
        );
      }
    };
  }, [visible]);

  return { shouldRender, animatedElementRef };
};

export default useAnimatedUnmount;
