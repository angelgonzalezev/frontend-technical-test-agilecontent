import { faker } from "@faker-js/faker";
import { animalTypes } from "../constants/animals";

const getImage = () => faker.image.urlLoremFlickr({ width: 644, height: 362, category: "animals" });
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = (type) => faker.animal[type]();

// Simulate delay
const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));

export const getFakeDataService = async (type) => {
	if (animalTypes.includes(type)) {
		const data = [...new Array(8)].map((_, index) => {
			return {
				type,
				id: index + 1,
				url: getUrl(),
				title: getTitle(type),
				description: getText(),
				image: getImage(),
			};
		});
		await delay();
		return { success: true, data };
	} else {
		return { success: false, data: [] };
	}
};
