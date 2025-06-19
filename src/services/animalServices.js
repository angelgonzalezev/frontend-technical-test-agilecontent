import { faker } from "@faker-js/faker";

const getImage = () => faker.image.urlLoremFlickr({ width: 644, height: 362, category: "animals" });
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = (type) => faker.animal[type]();

// Simulate delay
const delay = () => new Promise((resolve) => setTimeout(resolve, 2000));

export const getAllFakeAnimalTypes = async () => {
	const animalKeys = Object.keys(faker.animal).filter((key) => typeof faker.animal[key] === "function");
	return animalKeys.filter((key) => key !== "type" && key !== "petName");
};

export const getFakeDataService = async ({ search, animals, types }) => {
	if (types.includes(search)) {
		const data = [...new Array(50)].map((_, index) => {
			return {
				type: search,
				id: index + 1,
				url: getUrl(),
				title: getTitle(search),
				description: getText(),
				image: getImage(),
			};
		});
		await delay();
		return { success: true, data };
	}
	const filteredAnimal = animals.filter((animal) => animal.title.toLowerCase().includes(search.toLowerCase()));
	await delay();

	if (filteredAnimal.length > 0) {
		return { success: true, data: filteredAnimal };
	} else {
		return { success: false, data: [] };
	}
};
