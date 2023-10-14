const lazyLoading = () => {
  const lazyImgs = document.querySelectorAll(".lazy");

  // intersection observer api from js to detect when an
  // image enters the viewport

  //
  const observer = new IntersectionObserver(
    (entries, observer) => {
      // console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.dataset.src;

          img.classList.remove("loading");
          img.classList.add("loaded");

          // console.log(img);
          // this is so that the images dont reload again after loading in once when they enter the viewport
          // the observer parameter is actually just a reference to the intersectionObserver itself which
          // gives us access to the unobserve method
          observer.unobserve(img);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    }
  );
  lazyImgs.forEach((img) => {
    // observe is a method from out observer
    observer.observe(img);
  });
};
export default lazyLoading;
