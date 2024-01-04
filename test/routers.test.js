const request = require("supertest");
const server = "http://localhost:3000";

describe("Routes", () => {
  describe("/signup", () => {
    describe("POST", () => {
      it("responds with 200 status and new user in db", () => {
        return request(server)
          .post("/signup")
          .send({
            firstname: "hi1",
            lastname: "hi1",
            username: "hi222",
            password: "hi1",
            phoneNumber: 100,
            googleId: "hi",
            email: "hii",
            watcher: "false"
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

describe("/fetchDogs/", () => {
  describe("GET", () => {
    it("responds with 200 status and data containing dog info", () => {
      const id = 1
      return request(server)
        .get(`/fetchDogs/${id}`)
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(200);
    });
  });

  describe("/addDog", () => {
    describe("POST", () => {
      it("responds with 200 status and new dog in db", () => {
        return request(server)
          .post("/addDog")
          .send({
            name: "lz",
            age: 1,
            weight: 0,
            breed: "hi",
            meals: [],
            medication: null,
            groomer: null,
            miscellaneous: [],
            owner_id: 1,
            birthday: null,
            photo: null
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
  describe("/deleteDog/:dogId", () => {
    describe('/DELETE', ()=> {
      it('deletes a dog from the database', ()=> {
        const dogId = 1
        return request(server)
          .delete(`/deleteDog/${dogId}`)
          .expect(200)
      })
    })
  })
});
