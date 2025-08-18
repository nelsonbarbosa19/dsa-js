/**
 * Given an array of people objects with name and age,
 * groups the names by age categories: child, teen, adult.
 *
 * @param {Array<{name: string, age: number}>} people
 * @returns {{child: string[], teen: string[], adult: string[]}}
 */
function groupByAge(people) {
  return people.reduce(
    (acc, person) => {
      if (person.age < 13) {
        acc.child.push(person.name);
      } else if (person.age < 20) {
        acc.teen.push(person.name);
      } else {
        acc.adult.push(person.name);
      }

      return acc;
    },
    { child: [], teen: [], adult: [] }
  );
}

module.exports = groupByAge;

// --------------------------
// Tests (using Jest)

describe("groupByAge function", () => {
  test("groups people correctly by age", () => {
    const input = [
      { name: "Alice", age: 10 },
      { name: "Bob", age: 16 },
      { name: "Carol", age: 25 },
      { name: "Dave", age: 13 },
      { name: "Eve", age: 8 },
    ];

    const expected = {
      child: ["Alice", "Eve"],
      teen: ["Bob", "Dave"],
      adult: ["Carol"],
    };

    expect(groupByAge(input)).toEqual(expected);
  });

  test("returns empty arrays if input is empty", () => {
    expect(groupByAge([])).toEqual({ child: [], teen: [], adult: [] });
  });

  test("handles edge ages correctly", () => {
    const input = [
      { name: "Tom", age: 12 },
      { name: "Jerry", age: 13 },
      { name: "Spike", age: 19 },
      { name: "Tyke", age: 20 },
    ];

    const expected = {
      child: ["Tom"],
      teen: ["Jerry", "Spike"],
      adult: ["Tyke"],
    };

    expect(groupByAge(input)).toEqual(expected);
  });
});
