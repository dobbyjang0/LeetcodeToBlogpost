import { request, gql } from "graphql-request";

const LEETCODE_URL = "https://leetcode.com/graphql/";

async function getQuestionInfo(titleSlug) {
  const query = gql`
    query questionTitle($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionFrontendId
        title
        difficulty
      }
    }
  `;

  const variables = {
    titleSlug,
  };

  try {
    const data = await request(LEETCODE_URL, query, variables);
    const { questionFrontendId, title, difficulty } = data.question;

    return {
      id: +questionFrontendId,
      title,
      difficulty,
    };
  } catch (error) {
    console.error(`Error fetching problem slug: ${error}`);
  }
}

async function getQuestionContent(titleSlug) {
  const query = gql`
    query questionContent($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        content
      }
    }
  `;

  const variables = {
    titleSlug,
  };

  try {
    const data = await request(LEETCODE_URL, query, variables);

    return data.question.content;
  } catch (error) {
    console.error(`Error fetching problem slug: ${error}`);
  }
}

export { getQuestionInfo, getQuestionContent };
