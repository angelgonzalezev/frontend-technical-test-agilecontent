import ItemDetailsComponent from "./ItemDetailsComponent";
import SearchItemComponent from "./SearchItemComponent";

const ResultResonseComponent = ({ searchList, handleSelectItem, selectedItem, isMobile }) => {
	return (
		<div style={{ display: "grid", gridTemplateColumns: "0.7fr 0.3fr", gap: "10px", width: "90%" }}>
			<div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
				{searchList.map((item, index) => (
					<SearchItemComponent key={index} item={item} handleSelectItem={(item) => handleSelectItem(item)} />
				))}
			</div>
			<div style={{ display: isMobile ? "none" : "block" }}>
				{selectedItem ? <ItemDetailsComponent item={selectedItem} /> : null}
			</div>
		</div>
	);
};
export default ResultResonseComponent;
