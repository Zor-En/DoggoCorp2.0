const request = require("supertest");
const fs = require("fs");
const server = "http://localhost:3000";

describe("Routes", () => {
  describe("/fetchDogs/", () => {
    describe("GET", () => {
      it("responds with 200 status and text containing users", () => {
        return request(server)
          .get("/fetchDogs/")
          .expect("Content-Type", "application/json; charset=utf-8")
          .expect(200);
      });
    });

    describe("/signin/:googleId", ()=>{
        describe("GET", ()=>{
            it("response with 200", ()=> {
                return request(server)
                    .get('/signin/:googleId')
                    .expect()
            })
        })
    })


    describe("/addDog", () => {
      describe("POST", () => {
        it("responds with 200 status and text containing dog info", () => {
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
        it("responds with 500 status when there is an incorrect input", ()=>{
            return request(server)
            .post('/addDog')
            .send({name: "Shadow",
            age: "nan",
            weight: "nan",
            owner_id: 2})
            .expect("Content-Type", "application/json; charset=utf-8")
            .expect(500); //internal server error
        })
      });
    });
  });
});
