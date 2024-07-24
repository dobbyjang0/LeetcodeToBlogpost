import { request, gql } from "graphql-request";

const LEETCODE_URL = "https://leetcode.com/graphql/";

async function getQuestionInfo(titleSlug) {
  const query = gql`
    query questionTitle($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionFrontendId
        title
        difficulty
        content
      }
    }
  `;

  const variables = {
    titleSlug,
  };

  try {
    const data = await request(LEETCODE_URL, query, variables);
    const { questionFrontendId, title, difficulty, content } = data.question;

    return {
      id: +questionFrontendId,
      title,
      difficulty,
      contentRaw: content,
    };
  } catch (error) {
    console.error(`Error fetching problem slug: ${error}`);
  }
}

export { getQuestionInfo };
