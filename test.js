import { getQuestionInfo } from "./api/leetcodeApi.js";
import { contentReform } from "./utils/contentReform.js";

getQuestionInfo("count-good-nodes-in-binary-tree")
  .then(({ contentRaw }) => contentReform(contentRaw))
  .then((json) => console.log(json));
