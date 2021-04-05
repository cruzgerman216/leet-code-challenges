/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function( items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone") {
    let count = 0;
    for(let i = 0; i < items.length; i++){
        if(ruleKey == "color" && items[i][1] == ruleValue){
            count++;
        }else if(ruleKey == "type" && items[i][0] == ruleValue){
            count++;

        }else if(ruleKey == "name" && items[i][2] == ruleValue){
            count++;
        }
    }
    return count;
};

console.log(countMatches());
