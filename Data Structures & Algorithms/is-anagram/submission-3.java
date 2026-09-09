class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        Hashtable<Character, Integer> chars = new Hashtable<>();

        for (int i = 0; i < s.length(); i++) {
            if (!chars.containsKey(s.charAt(i))) {
                chars.put(s.charAt(i), 0);
            }
            chars.put(s.charAt(i), chars.get(s.charAt(i)) + 1);

            if (!chars.containsKey(t.charAt(i))) {
                chars.put(t.charAt(i), 0);
            }
            chars.put(t.charAt(i), chars.get(t.charAt(i)) - 1);
        }

        for (int value : chars.values()) {
            if (value != 0) {
                return false;
            }
        }
        return true;
    }
}
