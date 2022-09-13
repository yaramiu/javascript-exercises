const findTheOldest = function (peopleArray) {
  let oldestAge = 0;
  let oldestPerson;

  peopleArray.forEach((person) => {
    if ("yearOfDeath" in person) {
      age = person.yearOfDeath - person.yearOfBirth;
    } else {
      const currentYear = new Date().getFullYear();
      age = currentYear - person.yearOfBirth;
    }
    person["age"] = age;

    if (age >= oldestAge) {
      oldestAge = age;
      oldestPerson = person;
    }
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
