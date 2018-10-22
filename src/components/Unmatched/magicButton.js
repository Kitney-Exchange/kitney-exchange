import React, { Component } from 'react';

class MagicButton extends Component {
  constructor(props) {
    super(props)
    
    this.state = { 

    }
    this.ageArrayFinder = this.ageArrayFinder.bind(this);
  }

  // Handle age limit within 10 years apart
  ageArrayFinder(userData, age) {
    let notAgeRangeMatch = []
    let ageRangeMatch = []
    console.log(userData)

    return userData.map((element, index) => 
    Math.abs(element.donor_age - age) <= 10 ? element.donor_age : null)
    .filter(element => element !== null)
  }

//   const donor2 =     [ 'b', 'a', 'ab', 'a', 'o', 'o']
// const recipient2 = [ 'b', 'a', 'ab', 'ab', 'o', 'a' ]
// const possibleMatchPair = []

// function findMatchPair(array1, array2) {
//   console.log('donor2: ', array1);
//   console.log('recipient2: ', array2);
//   console.log('')

//   for(let i = 0; i < array1.length; i++) {
//     console.log('');

//     for(let j = 0; j < array2.length; j++) {
//       console.log(`donor2[${i}]`, array1[i], `recipient2[${j}]`, array2[j])
//       console.log('Compare: ',array1[i],  array2[j] )

//         if(array1[i] === 'a' && array2[j] === 'a') {
//           console.log('Match A for A : ', array1[i], array2[j] )
//           possibleMatchPair.push([i, j])
//         } else if(array1[i] === 'a' && array2[j] !== 'b' && array2[j] !== 'ab' && array2[j] !== 'o') {
//           console.log('Compare A for A: ',array1[i],  array2[j] )
//           possibleMatchPair.push([i, j])

//         } else if(array1[i] === 'a' && array2[j] === 'ab' && array2[j] !== 'b') {
//           console.log('Match A for AB: ', array1[i], array2[j] )
//           possibleMatchPair.push([i, j])
//         }

//         if(array1[i] === 'b' && array2[j] === 'b') {
//           console.log('Match B for B : ', array1[i], array2[j] )
//           possibleMatchPair.push([i, j])
//         } else if(array1[i] === 'b' && array2[j] !== 'a' && array2[j] !== 'ab' && array2[j] !== 'o') {
//           console.log('Compare B for B: ',array1[i],  array2[j] )
//           possibleMatchPair.push([i, j])
//         } else if(array1[i] === 'b' && array2[j] === 'ab' && array2[j] !== 'a') {
//           console.log('Match B for AB : ', array1[i], array2[j] )
//           possibleMatchPair.push([i, j])
//         }

//         if(array1[i] === 'ab' && array2[j] === 'ab' || array1[i] !== 'a' && array2[j] !== 'a' && array1[i] !== 'b' && array2[j] !== 'b'  && array1[i] !== 'o' && array2[j] !== 'o') {
//           console.log('Match AB for AB : ', array1[i], array2[j] )
//           possibleMatchPair.push([i, j])
//         }

//         if(array1[i] === 'o' && array2[j] === 'o') {
//           console.log('Match o for o : ', array1[i], array2[j] )
//           possibleMatchPair.push([i, j])
//         } else if(array1[i] === 'o' && array2[j] === 'a' || array1[i] === 'o' && array2[j] === 'b' || array1[i] === 'o' && array2[j] === 'ab') {
//           console.log('Match o for a, b, ab, o : ', array1[i], array2[j] )
//           possibleMatchPair.push([i, j])
//       }
//     }
//   }
// }

// // findMatchPair(donor2, recipient2)
// // console.log('possibleMatchPair: ', possibleMatchPair)


  render() { 
    let profileList = this.props
    console.log(this.ageArrayFinder(profileList.data, 18))
    console.log(this.ageArrayFinder(profileList.data, 28))
    console.log(this.ageArrayFinder(profileList.data, 38))
    console.log(this.ageArrayFinder(profileList.data, 48))
    this.ageArrayFinder(profileList.data, 18)
    
    return ( 
      <div></div>
     );
  }
}
 
export default MagicButton;