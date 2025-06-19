import { Input } from "@chakra-ui/react";
import { colors } from "../constants/colors";

const InputComponent = ({ onChange, name, value }) => {
	return (
		<Input
			color={colors.GREYDARK}
			name={name}
			onChange={onChange}
			value={value}
			w="100%"
			m={0}
			p={0}
			border="none"
			_focusVisible={{ border: "none", boxShadow: "none", outline: "none" }}
		/>
	);
};
export default InputComponent;
