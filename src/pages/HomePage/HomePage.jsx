import { useState } from "react";
import GoogleIcon from "../../assets/images/google_logo.png";
import { colors } from "../../constants/colors";
import { useNavigate } from "react-router";
import { PublicRoutes } from "../../routes/routes";
import SearchBarComponent from "../../components/SearchBarComponent";

const HomePage = () => {
	const navigate = useNavigate();

	const [searchValue, setSearchValue] = useState("");

	const handleSearch = () => {
		navigate(`${PublicRoutes.Search}?value=${searchValue}`);
	};

	const handleKeyDown = (e) => {
		if (searchValue && e.key === "Enter") {
			e.preventDefault();
			handleSearch();
		}
	};

	const handleClick = (e) => {
		if (e.target.name === "search" && searchValue.trim() !== "") {
			handleSearch();
		}
	};

	const handleOnChangeInput = (e) => {
		setSearchValue(e.target.value);
	};

	const handleCleanSearchValue = () => {
		setSearchValue("");
	};

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				flex: 1,
				paddingInline: "20px",
				gap: "18px",
			}}
		>
			<img src={GoogleIcon} style={{ maxWidth: "272px" }} />
			<SearchBarComponent
				maxW="720px"
				handleOnChange={handleOnChangeInput}
				handleSearch={handleKeyDown}
				searchValue={searchValue}
				cleanSearchValue={handleCleanSearchValue}
			/>

			<button
				style={{ backgroundColor: colors.GREYLIGHT, color: colors.GREYDARK, disabled: !searchValue }}
				onClick={handleClick}
				name="search"
			>
				Search
			</button>
		</div>
	);
};
export default HomePage;
