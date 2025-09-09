describe("POST /users", () => {
  test("With name and email", async () => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Name and Email",
        email: "nameandemail@test.com",
      }),
    });

    expect(response.status).toBe(201);

    const responseBody = await response.json();

    expect(responseBody).toEqual({
      name: "Name and Email",
      email: "nameandemail@test.com",
    });
  });

  test("With name and without email", async () => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Only With Name",
      }),
    });

    expect(response.status).toBe(400);
  });
});
