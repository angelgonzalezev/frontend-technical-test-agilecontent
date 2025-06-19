const NoResultResponseComponent = ({ searchParam, types }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "90%",
				alignItems: "start",
			}}
		>
			{searchParam.trim() !== "" && (
				<p>
					No results for
					<span style={{ fontWeight: "bold" }}> '{searchParam}'.</span>
				</p>
			)}
			<p>
				Try looking for:
				{types.map((item, index) => (
					<span key={index} style={{ fontWeight: "bold" }}>
						{" "}
						{item}
					</span>
				))}
				.
			</p>
		</div>
	);
};
export default NoResultResponseComponent;
