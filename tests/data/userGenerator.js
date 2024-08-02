const { faker } = require('@faker-js/faker');

function generateUser() {
    return {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        day: faker.datatype.number({ min: 1, max: 28 }).toString(),
        month: faker.datatype.number({ min: 1, max: 12 }).toString(),
        year: faker.datatype.number({ min: 1950, max: 2000 }).toString(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        company: faker.company.name(),  // Corrected function name
        address: faker.address.streetAddress(),
        country: 'Canada', // Faker does not have a select option method, so keeping it static
        state: faker.address.state(),
        city: faker.address.city(),
        zipcode: faker.address.zipCode(),
        mobileNumber: faker.phone.number('###########')
    };
}

module.exports = {
    generateUser
};
