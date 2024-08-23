import { useEffect, useRef } from "react";

// This custom hook is used to observe when an element intersects with the viewport.
// When the element becomes visible in the viewport, a "visible" class is added to it.
const useIntersectionObserver = (options) => {
  const ref = useRef(null); 
  // useRef is used to create a reference to the element that will be observed.

  useEffect(() => {
    // Creating an IntersectionObserver instance with a callback that is triggered 
    // when the observed element intersects with the viewport.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the element is intersecting (visible in the viewport), 
        // the "visible" class is added to the element.
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options); // options parameter allows configuration of the observer (e.g., root, rootMargin, threshold).

    // Start observing the element referenced by ref.current if it exists.
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup function to unobserve the element when the component using this hook is unmounted.
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]); 
  // The effect depends on the options array, so it re-runs if the options change.

  return ref; 
  // Returning the ref so that it can be attached to the element that needs to be observed.
};

export default useIntersectionObserver; 
// Exporting the custom hook for use in other components.
