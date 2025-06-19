import { useNavigate, useSearchParams } from "react-router";
import { SettingIcon } from "../assets/icons";
import UserProfileImage from "../assets/images/user-profile.jpeg";
import GoogleIcon from "../assets/images/google_logo.png";
import { useEffect, useState } from "react";
import { PublicRoutes } from "../routes/routes";
import SearchBarComponent from "./SearchBarComponent";
import { colors } from "../constants/colors";

const HeaderComponent = () => {
	// Get existing search param
	const [searchParams] = useSearchParams();
	const searchParam = searchParams.get("value");

	const [searchValue, setSearchValue] = useState();
	const navigate = useNavigate();

	// Sync param state when it changes
	useEffect(() => {
		setSearchValue(searchParam);
	}, [searchParam]);

	const handleOnSearch = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();

			navigate(`${PublicRoutes.Search}?value=${searchValue}`);
		}
	};

	const handleOnChangeInput = (e) => {
		setSearchValue(e.target.value);
	};

	const handleHomeRedirection = () => {
		setSearchValue(null);
		navigate(PublicRoutes.Home);
	};

	const handleCleanSearchValue = () => {
		setSearchValue("");
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "12px",
				color: colors.GREYDARK,
				borderBottom: `1px solid ${colors.GREYLIGHT} `,
			}}
		>
			{typeof searchValue === "string" ? (
				<div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", gap: "24px" }}>
					<img src={GoogleIcon} onClick={handleHomeRedirection} style={{ maxWidth: "92px", cursor: "pointer" }} />
					<SearchBarComponent
						searchValue={searchValue}
						px="8px"
						py="4px"
						maxW="300px"
						handleOnChange={handleOnChangeInput}
						handleSearch={handleOnSearch}
						cleanSearchValue={handleCleanSearchValue}
					/>
				</div>
			) : (
				<p style={{ fontSize: "20px" }}>
					<span as="span" style={{ fontWeight: "bold" }}>
						Agile Content
					</span>{" "}
					Frontend test
				</p>
			)}
			<div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
				<img src={SettingIcon} alt="Settings" />

				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "40px",
						width: "40px",
					}}
				>
					<img src={UserProfileImage} style={{ borderRadius: "100%" }} />
				</div>
			</div>
		</div>
	);
};
export default HeaderComponent;
