import { useRef, useState, useEffect } from "react"

const useOnScroll = (options) => {
    const scrollRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const scrollCallBack = (entries) => {
    console.log(entries)
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(scrollCallBack, options);
    if (scrollRef.current) observer.observe(scrollRef.current);

    return () => {
      if (scrollRef.current) observer.unobserve(scrollRef.current);
    };
  }, [scrollRef, options]);
  return [scrollRef, isVisible]
}

export default useOnScroll