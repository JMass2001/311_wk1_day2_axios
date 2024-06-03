const { discoverMovie, getMovieById, getMovieByIdFailure } = require("../src");

describe("API protocol practice", () => {
  test("It should make a request to the discover endpoint", async () => {
    const result = await discoverMovie();
    expect(result).toHaveProperty("data.results");
    expect(result).toHaveProperty("status");
    expect(result).toHaveProperty("headers");
  });

  test("It should get a movie by it's id", async () => {
    const data = await getMovieById(500);
    expect(data.original_title).toBe("Reservoir Dogs");
  });

  test("It should FAIL to get a movie by it's id and return a 404", async () => {
    const status = await getMovieByIdFailure();
    expect(status).toEqual(404);
  });
});