function partitionArray(nums: number[], k: number): boolean {
  if (nums.length === 0) return true;
  if (nums.length % k !== 0) return false;

  // Count frequencies of each element
  const freqMap = new Map<number, number>();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1); // Set frequency of num, if not present set to 0 else increment
  }

  // Num of groups = total distinct elements / k;
  const numGroups = nums.length / k;

  const freqs = Array.from(freqMap.values()).sort((a, b) => b - a); // Get frequencies of each element

  // Each element must appear in exactly one group => freq <= numGroups
  if (freqs.some((freq) => freq > numGroups)) return false;

  return true;
}
