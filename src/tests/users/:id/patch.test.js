describe("PATCH /users/:id", () => {
  test("With new name", async () => {
    const response = await fetch("http://localhost:3000/users/1", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "New Name",
      }),
    });

    expect(response.status).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.name).toBe("New Name");
  });

  test("With non-existent user", async () => {
    const response = await fetch("http://localhost:3000/users/0", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Non Existent",
      }),
    });

    expect(response.status).toBe(404);
  });
});
