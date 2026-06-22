class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        
  nums.sort((a, b) => a - b);
  let res= [];
  let quad =[];
  const ksum=(k,start,target)=>{
    if(k ===2 ){
     let l= start;
     let r= nums.length-1
     while(l <r){
        if(nums[l] + nums[r] <target){
            l++
        }else if( nums[l] + nums[r] > target){
            r--
        }else {
            res.push([...quad,[nums[l],nums[r]]])
                l++
                r--
            
        while ( l <r &&nums[l]== nums[l-1]){
            l ++
            
        }

        while ( l >r && nums[r]===nums[r-1]){
            r--
        }
        }
     }
    return;
     }
     for(let i =start ;i <nums.length-k+1;i++ ){
            if (i > start && nums[i]===nums[i-1]) continue
             quad.push(nums[i])
      ksum(k-1,i+1,target-nums[i])
             quad.pop()
            
            

        }
     }
     ksum(4,0,target)    
     return res 
       
    }

}
