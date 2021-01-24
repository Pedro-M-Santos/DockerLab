import { check } from "k6";
import http from 'k6/http';

// Script to test NGINX load-balancing protocols
export default function() {
  var url = "http://localhost/api/";
  let res = http.get(url);
  check(res, {
    "is status 200": (r) => r.status === 200
  },{ my_tag: res.body },);
}