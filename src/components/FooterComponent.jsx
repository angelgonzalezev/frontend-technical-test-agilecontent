import { colors } from "../constants/colors";

const FooterComponent = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "18px",
				backgroundColor: colors.GREYLIGHT,
				color: colors.GREYDARK,
				marginTop: "20px",
			}}
		>
			<p>@ Google 2021</p>
			<p>version: 0.1.0</p>
		</div>
	);
};
export default FooterComponent;
