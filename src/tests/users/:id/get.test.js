describe("GET /users/:id", () => {
  test("With existent user id", async () => {
    const response = await fetch("http://localhost:3000/users/1");
    expect(response.status).toBe(200);

    const responseBody = await response.json();

    expect(Object.keys(responseBody).length).toBe(8);
    expect(responseBody.id).toBe(1);
  });

  test("With non-existent user id", async () => {
    const response = await fetch("http://localhost:3000/users/0");
    expect(response.status).toBe(404);
  });
});
