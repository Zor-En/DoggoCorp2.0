const request = require("supertest");
const fs = require("fs");
const server = "http://localhost:3000";

describe("Routes", () => {
  describe("/fetchDogs/", () => {
    describe("GET", () => {
      it("responds with 200 status and data containing dog info", () => {
        return request(server)
          .get("/fetchDogs/")
          .expect("Content-Type", "application/json; charset=utf-8")
          .expect(200);
      });
    });

    describe("/signup", () => {
      describe("POST", () => {
        it("responds with 200 status and new user in db", () => {
          return request(server)
            .post("/signup")
            .send({
              username: "123",
              password: "test",
              is_owner: false
            })
            .expect(200); //this creates a user every time
        });

        it("responds with 500 if username or password is not inputed", () => {
          return request(server)
            .post("/signup")
            .send({
              username: null,
              password: null,
            })
            .expect(500); //needed to alter columns in database for this to work
        });
      });
    });

    describe("/login/no-oauth", () => {
      describe("POST", () => {
        it("responds with 200 status and successful login", () => {
          return request(server)
            .post("/login/no-oauth")
            .send({
              username: "test",
              password: "test",
            })
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(200);
        });
      });
    });
  });

  describe("/addDog", () => {
    describe("POST", () => {
      it("responds with 200 status and new dog in db", () => {
        return request(server)
          .post("/addDog")
          .send({
            name: "Shadow",
            age: 2,
            owner_id: 2,
          })
          .expect("Content-Type", "application/json; charset=utf-8")
          .expect(200);
      });
      it("responds with 500 status when there is an incorrect input", () => {
        return request(server)
          .post("/addDog")
          .send({ name: "Shadow", age: "nan", weight: "nan", owner_id: 2 })
          .expect("Content-Type", "application/json; charset=utf-8")
          .expect(500); //internal server error
      });
    });
  });
});
