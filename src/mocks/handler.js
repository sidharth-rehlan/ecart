import { rest } from "msw";

export const handler = [
  rest.get(
    "https://ecart-c1e4a-default-rtdb.firebaseio.com/users.json",
    (req, res, ctx) => {
      console.log("**1111************request:", req);

      let response = res(
        ctx.status(200),
        ctx.json({
          sidharth: {
            1: {
              firstname: "sidharth",
              lastname: "rehlan",
              age: 23,
              location: "chandigarh",
            },
          },
          karan: {
            2: {
              firstname: "karan",
              lastname: "sharma",
              age: 23,
              location: "karnal",
            },
          },
        })
      );

      console.log("response in handler...", response);
      return response;
    }
  ),
  rest.get(
    "https://ecart-c1e4a-default-rtdb.firebaseio.com/us.json",
    (req, res, ctx) => {
      console.log("***22222***********request:", req);

      let response = res(
        ctx.status(200),
        ctx.json({
          sidharth: {
            1: {
              firstname: "sidharth",
              lastname: "rehlan",
              age: 23,
              location: "chandigarh",
            },
          },
          karan: {
            2: {
              firstname: "karan",
              lastname: "sharma",
              age: 23,
              location: "karnal",
            },
          },
        })
      );

      console.log("response in handler...", response);
      return response;
    }
  ),
];
