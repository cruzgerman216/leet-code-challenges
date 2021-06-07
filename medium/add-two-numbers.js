// My Solution
// we can store the values in an array, reverse them, join them
// add both and then reverse, and then split them

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let ll1 = new ListNode(0),
  ll2 = new ListNode(0);
let i = 0;

while (i < 31) {
  insertLast(ll1, i);
  insertLast(ll2, i);
  i++;
}

function insertLast(ll, val) {
  current = ll;

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
  console.log(result);
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
