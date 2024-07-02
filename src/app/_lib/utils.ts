import { faker } from "@faker-js/faker";

export async function generateRandomStudent() {
  faker.seed(200);
  const tasks = [];
  for (let i = 0; i < 200; i++) {
    tasks.push({
      id: faker.string.uuid(),
      firstName: faker.person.firstName(),
      middleName: faker.person.middleName(),
      lastName: faker.person.lastName(),
      image: faker.image.avatar(),
      dateOfBirth: faker.date.between({
        from: "2000-01-01T00:00:00.000Z",
        to: "2023-01-01T00:00:00.000Z",
      }),
      gender: faker.helpers.arrayElement(["female", "male"]),
      grade: faker.helpers.arrayElement([1, 2, 3, 4, 5, 6, 7, 8]),
      parent: {
        firstName: faker.person.firstName(),
        middleName: faker.person.middleName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
      },
    });
  }
  return tasks;
}

export const isNull = (value: unknown) => {
  return value === undefined || value === "" || value === null;
};

export const calculateAge = (dob: Date) => {
  const today = new Date();
  const birthDate = new Date(dob);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // if (
  //   monthDifference < 0 ||
  //   (monthDifference === 0 && today.getDate() < birthDate.getDate())
  // ) {
  //   age--;
  // }
  return age;
};
