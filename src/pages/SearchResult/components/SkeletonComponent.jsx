import { colors } from "../../../constants/colors";

const SkeletonComponent = ({ borderRadius = "4px" }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column", gap: "4px", marginBottom: "24px" }}>
			<div
				className="skeleton"
				style={{
					width: "30%",
					height: "24px",
					borderRadius,
					backgroundColor: colors.GREYLIGHT,
				}}
			/>
			<div
				className="skeleton"
				style={{
					width: "50%",
					height: "24px",
					borderRadius,
					backgroundColor: colors.GREYLIGHT,
				}}
			/>
			<div
				className="skeleton"
				style={{
					width: "70%",
					height: "24px",
					borderRadius,
					backgroundColor: colors.GREYLIGHT,
				}}
			/>
		</div>
	);
};
export default SkeletonComponent;
