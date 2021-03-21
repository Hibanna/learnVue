import  {test,flag} from "./part1.js";
import part2 from "./part2.js"
test("part1");
if (flag === true) {
  console.log("执行part1");
}
part2("part2");

import  * as info from "./part1.js";
console.log(info.test);
console.log(info.flag);