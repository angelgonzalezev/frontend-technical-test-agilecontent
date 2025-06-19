import { colors } from "../constants/colors";

const InputComponent = ({ onChange, name, value, w = "100%", handleSearch }) => {
	return (
		<input
			style={{
				width: w,
				margin: 0,
				marginLeft: "8px",
				padding: 0,
				color: colors.GREYDARK,
				border: "none",

				_focus: { border: "none", boxShadow: "none", outline: "none" },
			}}
			name={name}
			onChange={onChange}
			value={value}
			onKeyDown={handleSearch}
		/>
	);
};
export default InputComponent;
