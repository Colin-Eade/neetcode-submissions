class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> anagramMap = new HashMap<>();

        for (int i = 0; i < strs.length; i++) {
            String str = strs[i];
            int[] letterCounts = new int[26];

            for (char letter : str.toCharArray()) {
                letterCounts[letter - 'a']++;
            }
            String key = Arrays.toString(letterCounts);
            
            if (!anagramMap.containsKey(key)) {
                anagramMap.put(key, new ArrayList<>());
            }
            anagramMap.get(key).add(str);
        }
        return new ArrayList<>(anagramMap.values());
    }
}
