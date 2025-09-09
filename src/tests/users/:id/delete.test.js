describe("DELETE /users/:id", () => {
  test("With existent user id", async () => {
    const response = await fetch("http://localhost:3000/users/1", {
      method: "DELETE",
    });

    expect(response.status).toBe(204);
  });

  test("With non-existent user id", async () => {
    const response = await fetch("http://localhost:3000/users/0", {
      method: "DELETE",
    });

    expect(response.status).toBe(404);
  });
});
