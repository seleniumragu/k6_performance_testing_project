import http from "k6/http";
import { check, sleep, fail } from "k6";

export let options = {
 stages: [
    { duration: "10s", target: 100 }, //  100 users in 10s
  ]
};

export default function() {
  // Create an Object containing the data

  // Send
  let res = http.get("http://bing.com");
  // console.log(res.body);
  // Verify that we ended up on the user page
  check(res, {
    "status was 200": (r) => r.status === 200
  });
}