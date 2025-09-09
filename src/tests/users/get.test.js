describe("GET /users", () => {
  test("Retrieving all users", async () => {
    const response = await fetch("http://localhost:3000/users");
    expect(response.status).toBe(200);
  });
});
