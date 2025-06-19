import { faker } from "@faker-js/faker";

export const animalTypes = Object.keys(faker.animal).filter((key) => typeof faker.animal[key] === "function");
