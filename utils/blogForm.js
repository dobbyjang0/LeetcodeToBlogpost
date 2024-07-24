function difficultyTextMaker(difficulty) {
  switch (difficulty) {
    case "Easy":
      return "쉬움🟢";
    case "Medium":
      return "중간🟡";
    case "Hard":
      return "어려움🔴";
    default:
      return "쉬움🟢";
  }
}

function blogFormMaker(
  titleSlug,
  id,
  title,
  titleKorean,
  difficulty,
  contentList,
  contentKoreanList,
  exampleList,
  constraintList
) {
  const difficultyText = difficultyTextMaker(difficulty);
  return {
    blogTitle: `[LeetCode 해석 및 풀이] ${id}. ${title}(${titleKorean})`,
    blogContent: `
<h2 data-ke-size="size26">문제 ${id}. ${title}(${titleKorean})</h2>
<p data-ke-size="size16"><b>난이도 : ${difficultyText}&nbsp;<a href="https://leetcode.com/problems/${titleSlug}/description/" target="_blank" rel="noopener"><span style="color: #5865f2;"><u>바로가기</u></span></a></b></p>
<p data-ke-size="size16">&nbsp;</p>
<h3 data-ke-size="size23">문제 설명</h3>
<h4 data-ke-size="size20">영문</h4>
${contentList
  .map((str) => `<p data-ke-size="size16">${str}</p>`)
  .join('<p data-ke-size="size16">&nbsp;</p>')}
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">한글</h4>
${contentKoreanList
  .map((str) => `<p data-ke-size="size16">${str}</p>`)
  .join('<p data-ke-size="size16">&nbsp;</p>')}
<p data-ke-size="size16">&nbsp;</p>
<h3 data-ke-size="size23">제한조건</h3>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
${constraintList.map((str) => `<li>${str}</li>`).join("")}
</ul>
<p data-ke-size="size16">&nbsp;</p>
<h3 data-ke-size="size23">입출력 예</h3>
<table style="border-collapse: collapse; width: 99.6512%; height: 68px;" border="1" data-ke-style="style13" data-ke-align="alignLeft">
<tbody>
<tr style="height: 17px;">
<td style="width: 50%; height: 17px;">입력</td>
<td style="width: 50%; height: 17px;">출력</td>
</tr>
${exampleList
  .map(({ input, output }) => {
    return `<tr style="height: 17px;">
<td style="width: 50%; height: 17px;">${input}</td>
<td style="width: 50%; height: 17px;">${output}</td>
</tr>`;
  })
  .join("")}
</tbody>
</table>`.replaceAll("\n", ""),
  };
}

// console.log(
//   blogFormMaker(
//     "titleSlug",
//     "id",
//     "title",
//     "titleKorean",
//     "difficultyText",
//     ["contentList1", "contentList2"],
//     ["contentKoreanList1", "contentKoreanList2"],
//     [
//       { input: "input1", output: "output1" },
//       { input: "input2", output: "output2" },
//     ],
//     ["constraintList1", "constraintList2"]
//   )
// );

export { blogFormMaker };
