"use strict";

const server = require("../src/server");
const { expect, it } = require("@jest/globals");
const supertest = require("supertest");
const request = supertest(server.app);

describe("testing basic-auth", () => {
  it("signup", async () => {
    const response = await request.post("/signup").send({
      username: "test",
      password: "test123",
    });
    expect(response.status).toBe(200);
  });
});
