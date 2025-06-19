import { Input } from "@chakra-ui/react";
import { colors } from "../constants/colors";

const InputComponent = ({ onChange, name, value, w = "100%", handleSearch }) => {
	return (
		<Input
			color={colors.GREYDARK}
			name={name}
			onChange={onChange}
			value={value}
			w={w}
			m={0}
			p={0}
			border="none"
			_focusVisible={{ border: "none", boxShadow: "none", outline: "none" }}
			onKeyDown={handleSearch}
		/>
	);
};
export default InputComponent;
