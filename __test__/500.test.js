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
  // it("testing to get 500 status", async () => {
  //   const response = await request.get("/"); // async
  //   expect(response.status).toBe(200);
  // });

  it("handles not found request", async () => {
    const response = await request.get("/wrongPath");
    expect(response.status).toBe(404);
  });
});
