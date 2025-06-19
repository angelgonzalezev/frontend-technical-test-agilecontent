export const useIsMobile = () => {
	const currentScreenWidth = window.innerWidth;
	return currentScreenWidth < 768 ? true : false;
};
