"use strict";

const server = require("../src/server");
const { expect, it } = require("@jest/globals");
const supertest = require("supertest");
const request = supertest(server.app);
const { db } = require("../src/auth/models/indexmodel");

describe("testing basic-auth routers", () => {
  // jest.setTimeout(5000);
  it("test signup route", async () => {
    const response = await request.post("/signup").send({
      username: "test",
      password: "test123",
    });
    expect(response.status).toBe(201);
    // expect(response.body.username).toEqual("test");
  });

  it("signin", async () => {
    const response = await request.post("/signin").auth("test", "test123");
    expect(response.status).toBe(200);
  });
});
