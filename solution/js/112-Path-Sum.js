/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    function hasPathSumRec(root, sum, current) {
        if (!root) { return false; }
        current += root.val;
        if ((!root.left && !root.right) && sum === current) { return true; }
        return hasPathSumRec(root.left, sum, current) || hasPathSumRec(root.right, sum, current);
    }
    let current = 0;
    return hasPathSumRec(root, sum, current);
};