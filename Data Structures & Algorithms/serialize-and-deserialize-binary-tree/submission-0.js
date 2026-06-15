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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let res= [];

        function dfs(root){
        if(!root){
            return res.push("N")
        }

        res.push(root.val);
        dfs(root.left)
        dfs(root.right)
        }

        dfs(root)
        return res.join(",")
        
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let vals= data.split(",");

        let i = {val:0};
        

        function dfs(vals,i){
            if(vals[i.val]==="N"){
                i.val++
                return null
            }

            const node = new TreeNode(parseInt(vals[i.val]));

            i.val++
            node.left= dfs(vals,i)
            node.right= dfs(vals,i)
            return node


        }

        return dfs(vals,i)
        
    }
}
