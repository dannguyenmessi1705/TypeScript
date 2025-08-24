function maxValue(nums: number[]): number[] {
  const n = nums.length;
  const result = [...nums];

  let hasUpdate = true;
  while (hasUpdate) {
    hasUpdate = false;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j) continue;

        let canJump = false;
        if (j > i && nums[j] < nums[i]) {
          canJump = true;
        } else if (j < i && nums[j] > nums[i]) {
          canJump = true;
        }

        if (canJump && result[j] > result[i]) {
          result[i] = result[j];
          hasUpdate = true;
        }
      }
    }
  }
  return result;
}
