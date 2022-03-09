"use strict";

const server = require("../src/server");
const { expect, it, beforeAll, afterAll } = require("@jest/globals");
const supertest = require("supertest");
const request = supertest(server.app);
const { db } = require("../src/auth/models/indexmodel");

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe("testing my server", () => {
  it("handles my internal server errors", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(500);
  });

  // it("testing to get 500 status pass", async () => {
  //   const response = await request.get("/signin").auth("test", "123");
  //   expect(response.status).toBe(500);
  // });

  // it("testing to get 500 status user", async () => {
  //   const response = await request.post("/signin").auth("teeeeeest", "test123");
  //   expect(response.status).toBe(500);
  // });
});
