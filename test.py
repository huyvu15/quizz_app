def isMonotonic(nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        a = nums
        if nums.sort() == a:
            return True
        return False
    
nums = [1,2,2,3]

print(isMonotonic(nums))