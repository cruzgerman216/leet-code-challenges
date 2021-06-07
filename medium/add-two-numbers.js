// My Solution
// we can store the values in an array, reverse them, join them
// add both and then reverse, and then split them

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// let ll1 = new ListNode(2),
//   ll2 = new ListNode(5);
// ll1.next = new ListNode(4);
// ll1.next.next = new ListNode(3);
// ll2.next = new ListNode(6);
// ll2.next.next = new ListNode(4);

let ll1 = new ListNode(0);
let ll2 = new ListNode(0);
let i = 0;

// while (i < 31) {
//   insertLast(ll1, i);
//   insertLast(ll2, i);
//   i++;
// }

function insertLast(ll, val) {
  let current = ll;

  while (current.next) {
    current = current.next;
  }
  current.next = new ListNode(val);
  return ll;
}

var addTwoNumbers = function (l1, l2) {
  let arr1 = [];
  let arr2 = [];
  let result;
  while (l1) {
    arr1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    arr2.push(l2.val);
    l2 = l2.next;
  }
  arr1 = BigInt(arr1.reverse().join(""));
  arr2 = BigInt(arr2.reverse().join(""));
  result = (arr1 + arr2).toString().split("").reverse();
  let output = null;
  let node;
  for (let i = 0; i < result.length; i++) {
    if (output == null) {
      output = new ListNode(parseInt(result[i]), null);
      node = output;
    } else {
      node.next = new ListNode(parseInt(result[i]), null);
      node = node.next;
    }
  }

  return output;
};

addTwoNumbers(ll1, ll2);

// Solution 2

var addTwoNumbers = function(l1,l2){
    var list = new ListNode(0);
    var head = list;
    var sum = 0;
    var carry = 0;

    while(l1 !== null || l2 !== null || sum > 0){
        if(l1 !== null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            sum = sum + l2.val;
            l2 = l2.next;
        }

        if(sum >= 10){
            carry = 1;
            sum = sum - 10;
        }
        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }
    return list.next;
}