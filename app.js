import readline from "readline";

import { getQuestionInfo, getQuestionContent } from "./api/leetcodeApi.js";
import { translateText } from "./api/translate.js";
import { blogFormMaker } from "./utils/blogForm.js";
import { contentReform } from "./utils/contentReform.js";
import { inputTitle } from "./utils/inputTitle.js";
import { tagCodeToStrong } from "./utils/textEdit.js";

main();

async function main() {
  const titleSlug = await inputTitle();
  const { id, title, difficulty } = await getQuestionInfo(titleSlug);
  const contentRaw = await getQuestionContent(titleSlug);

  let { contentList, exampleList, constraintList } = contentReform(contentRaw);
  let contentKoreanList = await Promise.all(
    contentList.map((line) => translateText(line))
  );
  const titleKorean = await translateText(title);

  contentList = contentList.map(tagCodeToStrong);
  contentKoreanList = contentKoreanList.map(tagCodeToStrong);
  constraintList = constraintList.map(tagCodeToStrong);

  const { blogTitle, blogContent } = blogFormMaker(
    titleSlug,
    id,
    title,
    titleKorean,
    difficulty,
    contentList,
    contentKoreanList,
    exampleList,
    constraintList
  );

  console.log(blogTitle)
  console.log(blogContent)
}
