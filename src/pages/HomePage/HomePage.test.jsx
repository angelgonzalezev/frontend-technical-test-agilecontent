import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { MemoryRouter } from "react-router";
import MainLayout from "../../layout/MainLayout";
import App from "../../App";

describe("HomePage Screen", () => {
	it("should render title, google logo and search button", () => {
		render(
			<MemoryRouter>
				<MainLayout>
					<HomePage />
				</MainLayout>
			</MemoryRouter>
		);
		const title = screen.getByText("Frontend test");
		expect(title).toBeInTheDocument();
		const googleImage = screen.getByRole("img", { name: "google-logo" });
		expect(googleImage).toBeInTheDocument();
		const searchButton = screen.getByRole("button", { text: "Search" });
		expect(searchButton).toBeInTheDocument();
	});
});
