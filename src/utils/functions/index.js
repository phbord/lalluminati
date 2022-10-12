export const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

export const isSlide = (isSlide, setIsSlide) => {
    setIsSlide(!isSlide);
    return isSlide;
}

export const openInNewTab = url => {
    setTimeout(() => window.open(url, '_blank', 'noopener,noreferrer'), 600);
};