function CompageSort(A, B)
{

  return A.age - B.age
}

function CompOE( a ,b)
{

  if(a%2 === 0 && b%2 ===1) return 1

  if(a%2 === 1 && b%2 === 0 ) return -1;

  return(a - b);
}

function ComStr(a,b)
{

  return a.charCodeAt(0) - b.charCodeAt(0)
}


//let myMap = {};

function CompFreq(a,b)
{
  if(myMap[a] === myMap[b]) return b-a;

  return myMap[a] - myMap[b];
}


function ageSort(users) {

  users.sort(CompageSort);

  return(users);
  // Your code here
}

function oddEvenSort(arr) {

  arr.sort(CompOE);

  return(arr);
  // Your code here
}

function validAnagrams(s, t) {

  let S=s.split('');
  let T=t.split('');

  if(S.length != T.length) return false;

  S.sort(ComStr);
  T.sort(ComStr);


  for(let i=0;i<S.length ;i++)
  {
    if(S[i]!=T[i]) return false;
  }


  return true;

  // Your code here
}

function reverseBaseSort(A) {

  function Comp(a, b) {
    // Function to extract the base (leftmost digit) of a number.
    function getBase(num) {
      return parseInt(num.toString()[0]);
    }

    // Compare the bases of the two numbers.
    const bA = getBase(a);
    const bB = getBase(b);

    // If bases are the same, sort in ascending order.
    if (bA === bB) {
      return a - b;
    }

    // Otherwise, sort in descending order based on base.
    return bB - bA;
  }

  A.sort(Comp);

  return A;


  // Your code here
}


/*

function frequencySort(arr) {

  for(const c of arr)
  {
    if(!myMap[c]) myMap[c]  = 1;
    else myMap[c]++;

  }

  arr.sort(CompFreq);
  return arr;
  // Your code here
}*/


function frequencySort(A) {
  // Create a frequency map to count the occurrences of each element.

  let myMap={};

  for(const c of A)
  {
    if(!myMap[c])
    {
      myMap[c]=1;
    }
    else
    {
      myMap[c]++;
    }
  }


  // Custom comparison function to sort based on frequency and tie-breakers.
  function compare(a, b) {
    const freqA = myMap[a];
    const freqB = myMap[b];

    if (freqA !== freqB) {
      // Sort by increasing frequency.
      return freqA - freqB;
    } else {
      // If frequencies are the same, sort by decreasing value.
      return b - a;
    }
  }

  // Sort the array using the custom comparison function.
  A.sort(compare);

  return A;
}

/*
function frequencySort(arr) {

  // Create a frequency map to count the occurrences of each element.
  const frequencyMap = new Map();
  arr.forEach((num) => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });

  // Custom comparison function to sort based on frequency and tie-breakers.
  function compare(a, b) {
    const freqA = frequencyMap.get(a);
    const freqB = frequencyMap.get(b);

    if (freqA !== freqB) {
      // Sort by increasing frequency.
      return freqA - freqB;
    } else {
      // If frequencies are the same, sort by decreasing value.
      return b - a;
    }
  }

  // Sort the array using the custom comparison function.
  arr.sort(compare);

  return arr;
}*/

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
