export const useIsMobile = () => {
	const currentScreenWidth = window.innerWidth;

	console.log("🚀 ~ useIsMobile ~ currentScreenWidth:", currentScreenWidth);
	return currentScreenWidth < 768 ? true : false;
};
