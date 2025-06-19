import { colors } from "../../../constants/colors";

const ItemDetailsComponent = ({ item }) => {
	const { url, title, description, id } = item;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				border: `1px solid ${colors.GREYLIGHT}`,
				borderRadius: "4px",
				padding: "0.5rem",
				gap: "8px",
			}}
			key={id}
		>
			<img src={item.image} width="100%" />
			<p style={{ fontSize: "10px" }}>{url}</p>
			<p style={{ fontSize: "18px", fontWeight: "bold" }}>{title}</p>
			<p style={{ fontSize: "12px" }}>{description}</p>
		</div>
	);
};
export default ItemDetailsComponent;
