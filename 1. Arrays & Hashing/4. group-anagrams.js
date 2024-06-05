// 49. Group Anagrams - Medium Level - Topics: Array, Hash Table, String, Sorting

var groupAnagrams = function (strs) {
  const anagrams = {};

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    // console.log(sortedStr);

    if (!anagrams[sortedStr]) {
      anagrams[sortedStr] = [];
    }

    anagrams[sortedStr].push(str);
  }

  console.log(Object.values(anagrams));
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
