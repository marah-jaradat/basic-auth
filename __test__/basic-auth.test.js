"use strict";

const server = require("../src/server");
const { expect, it } = require("@jest/globals");
const supertest = require("supertest");
const request = supertest(server.app);
const { db } = require("../src/auth/models/indexmodel");
// const basic = require("../src/auth/middleware/basic");

beforeAll(async () => {
  await db.sync();
});
afterAll(async () => {
  await db.drop();
});

describe("testing basic-auth", () => {
  it("test wrong username", async () => {
    const response = await await request
      .post("/signin")
      .auth("teeeeeest", "test123");
    expect(response.status).toBe(500);
  });
  it("test wrong password", async () => {
    const response = await request.post("/signin").auth("test", "teeeeest1234");
    expect(response.status).toBe(500);
  });
  it("handles not found request", async () => {
    const response = await request.get("/wrongPath");
    expect(response.status).toBe(404);
  });

  it("404 found request", async () => {
    const response = await request.post("/");
    expect(response.status).toBe(404);
  });
});
