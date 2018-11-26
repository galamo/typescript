import User from "./model";
import { create, edit, NumberOfTests } from "./controller";


console.log("running tests: " + NumberOfTests);

let a = new User();
let result = create();
let result2 = edit(result);