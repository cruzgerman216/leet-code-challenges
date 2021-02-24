var rangeSumBST = function(root = [10,5,15,3,7,null,18], low = 7, high = 15) {
    let sum = 0;
    function range(node){
        if(node === null) return; 

        if(node.val >= low && node.val <= high){
            sum += node.val
        }
        range(node.left);
        range(node.right);
    }
    range(root);

    return sum;

};

console.log(rangeSumBST())
