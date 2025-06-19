import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { getAllFakeAnimalTypes } from "../services/animalServices";

const getImage = () => faker.image.urlLoremFlickr({ width: 644, height: 362, category: "animals" });
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = (type) => faker.animal[type]();

export const useAllFakeAnimals = () => {
	const [animalData, setAnimalData] = useState([]);
	const [animalTypes, setAnimalTypes] = useState([]);

	useEffect(() => {
		const generateData = async () => {
			const types = await getAllFakeAnimalTypes();
			setAnimalTypes(types);

			let result = [];

			types.forEach((type) => {
				const items = [...Array(50)].map((_, index) => ({
					id: `${type}-${index + 1}`,
					type,
					title: getTitle(type),
					description: getText(),
					url: getUrl(),
					image: getImage(),
				}));

				result = result.concat(items);
			});

			setAnimalData(result);
		};

		generateData();
	}, []);

	return { animalData, animalTypes };
};
