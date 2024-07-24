function contentReform(text) {
  let textList = text
    .replaceAll("&nbsp;", " ")
    .split(/<p>|<\/p>/)
    .map((s) => s.trim())
    .filter((s) => s !== "");

  let i = 0;
  let resultJson = {
    contentList: [],
    exampleList: [],
    constraintList: [],
  };

  while (i < textList.length) {
    if (textList[i].includes(`class="example"`)) {
      while (!textList[i].includes("Input:")) {
        i++;
      }
      let input = (
        /(?<=<strong>Input:<\/strong>\s)[^(\n)]+?(?=\n)/.exec(textList[i]) + ""
      ).trim();
      let output = (
        /(?<=<strong>Output:<\/strong>\s)[^(\n)]+?(?=\n)/.exec(textList[i]) + ""
      ).trim();
      resultJson.exampleList.push({ input, output });
    } else if (textList[i].includes(`Constraints:`)) {
      i++;
      let constraintstList = textList[i]
        .match(/(?<=<li>).+?(?=<\/li>)/g)
        .map((s) => s.replaceAll(/<\/?code[^>]*>/g, ""));
      resultJson.constraintList.push(...constraintstList);
    } else {
      resultJson.contentList.push(
        textList[i].replaceAll(/<\/?font[^>]*>/g, "")
      );
    }
    i++;
  }
  return resultJson;
}

export { contentReform };

// contentReform(`<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

// <p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

// <p>You can return the answer in any order.</p>

// <p>&nbsp;</p>
// <p><strong class="example">Example 1:</strong></p>

// <pre>
// <strong>Input:</strong> nums = [2,7,11,15], target = 9
// <strong>Output:</strong> [0,1]
// <strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
// </pre>

// <p><strong class="example">Example 2:</strong></p>

// <pre>
// <strong>Input:</strong> nums = [3,2,4], target = 6
// <strong>Output:</strong> [1,2]
// </pre>

// <p><strong class="example">Example 3:</strong></p>

// <pre>
// <strong>Input:</strong> nums = [3,3], target = 6
// <strong>Output:</strong> [0,1]
// </pre>

// <p>&nbsp;</p>
// <p><strong>Constraints:</strong></p>

// <ul>
// 	<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
// 	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
// 	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
// 	<li><strong>Only one valid answer exists.</strong></li>
// </ul>

// <p>&nbsp;</p>
// <strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?`);
