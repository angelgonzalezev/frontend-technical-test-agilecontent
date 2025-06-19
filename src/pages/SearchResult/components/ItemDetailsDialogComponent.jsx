import { useEffect, useRef } from "react";

const ItemDetailsDialogComponent = ({ selectedItem, setOpenDetailsDialog }) => {
	const dialogRef = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dialogRef.current && !dialogRef.current.contains(event.target)) {
				setOpenDetailsDialog(false); // your close function
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100vw",
				height: "100vh",
				position: "fixed",
				top: 0,
				left: 0,
				backgroundColor: "rgba(0, 0, 0, 0.5)",
			}}
		>
			<div
				ref={dialogRef}
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					backgroundColor: "#fff",
					padding: "20px",
					width: "100%",
					position: "relative",
					marginInline: "20px",
				}}
			>
				<img src={selectedItem.image} alt={selectedItem.title} style={{ width: "100%" }} />
				<p style={{ fontSize: "14px", color: "#666" }}>{selectedItem.url}</p>
				<p style={{ fontSize: "16px", fontWeight: "bold" }}>{selectedItem.title}</p>
				<p style={{ fontSize: "14px" }}>{selectedItem.description}</p>
			</div>
		</div>
	);
};

export default ItemDetailsDialogComponent;
