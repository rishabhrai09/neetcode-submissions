/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(root==null){
            return 0;
        }

        let lhieght=this.maxDepth(root.left)
        let rhieght= this.maxDepth(root.right);

        let maxHeight= Math.max(lhieght,rhieght)+1;
        return maxHeight
    }
}
