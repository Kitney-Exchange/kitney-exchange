import React, { Component } from 'react';

class MagicButton extends Component {
  constructor(props) {
    super(props)
    
    this.state = { 
      age: '',
      agesArray: [],
      possibleMatchPair: []
    }
    this.ageArrayFinder = this.ageArrayFinder.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState: ', prevState);

    if(prevState.agesArray !== this.state.agesArray) {
      this.findMatchPair(this.state.agesArray, this.state.agesArray)
      console.log(this.finalBatcher(this.state.possibleMatchPair))

    }
  }

  // Handle age limit within 10 years apart
  ageArrayFinder(userData, age) {
    console.log(userData)

    return this.setState({agesArray: userData.map((element, index) => 
    Math.abs(element.donor_age - age) <= 10 ? {age: element.donor_age, pair_id: element.pair_id, donor_blood_type: element.donor_blood_type, recipient_blood_type: element.recipient_blood_type} : null)
    .filter(element => element !== null)})
  }

  changeHandler = (e) => {
    this.setState({age: e.target.value})
  }

 findMatchPair(array1, array2) {
   let { possibleMatchPair } = this.state
  // console.log('donor2: ', array1);
  // console.log('recipient2: ', array2);
  // console.log('')
  // const possibleMatchPair = []

  for(let i = 0; i < array1.length; i++) {
    // console.log('');

    for(let j = 0; j < array2.length; j++) {
      // console.log(`donor2[${i}]`, array1[i].donor_blood_type, `recipient2[${j}]`, array2[j].recipient_blood_type)
      // console.log('Compare: ',array1[i].donor_blood_type,  array2[j].recipient_blood_type )

        if(array1[i].donor_blood_type === 'A' && array2[j].recipient_blood_type === 'A') {
          // console.log('Match a for a : ', array1[i].donor_blood_type, array2[j].recipient_blood_type )
          // console.log('Match a for a : ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])

        } else if(array1[i].donor_blood_type === 'A' && array2[j].recipient_blood_type !== 'B' && array2[j].recipient_blood_type !== 'AB' && array2[j].recipient_blood_type !== 'O') {
          // console.log('Compare a for a: ',array1[i].donor_blood_type,  array2[j].recipient_blood_type )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    

        } else if(array1[i].donor_blood_type === 'A' && array2[j].recipient_blood_type === 'AB' && array2[j].recipient_blood_type !== 'B') {
          // console.log('Match a for ab: ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
        }

        if(array1[i].donor_blood_type === 'B' && array2[j].recipient_blood_type === 'B') {
          // console.log('Compare b for b : ', array1[i].pair_id, array2[j].pair_id )
          // console.log('Match b for b : ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
        } else if(array1[i].donor_blood_type === 'B' && array2[j].recipient_blood_type !== 'A' && array2[j].recipient_blood_type !== 'AB' && array2[j].recipient_blood_type !== 'O') {
          // console.log('Compare b for b: ',array1[i].donor_blood_type,  array2[j].recipient_blood_type )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
        } else if(array1[i].donor_blood_type === 'B' && array2[j].recipient_blood_type === 'AB' && array2[j].recipient_blood_type !== 'A') {
          // console.log('Match b for ab : ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
        }

        if(array1[i].donor_blood_type === 'AB' && array2[j].recipient_blood_type === 'AB' || array1[i].donor_blood_type !== 'A' && array2[j].recipient_blood_type !== 'A' && array1[i].donor_blood_type !== 'B' && array2[j].recipient_blood_type !== 'B'  && array1[i].donor_blood_type !== 'O' && array2[j].recipient_blood_type !== 'O') {
          // console.log('Match ab for ab : ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
        }

        if(array1[i].donor_blood_type === 'O' && array2[j].recipient_blood_type === 'O') {
          // console.log('Match o for o : ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
        } else if(array1[i].donor_blood_type === 'O' && array2[j].recipient_blood_type === 'A' || array1[i].donor_blood_type === 'O' && array2[j].recipient_blood_type === 'B' || array1[i].donor_blood_type === 'O' && array2[j].recipient_blood_type === 'AB') {
          // console.log('Match o for a, b, ab, o : ', array1[i], array2[j] )
          possibleMatchPair.push([array1[i].pair_id, array2[j].pair_id, array1[i], array2[j]])    
      }
    }
  }
}

  finalBatcher = (array1) => {
  console.log(array1)
    

  const initialArr= array1.filter((e, i)=> e[i]);
    
  const idFinder = (a) => {
    const newArr = [];

    for (let i = 0; i < initialArr.length; i++){    
      newArr.push(initialArr[i][a])
    }
      return newArr;
  }

  const donorArr = idFinder(0);
  const RecipArr = idFinder(1);
  const finalResult = [];
  let testFinal = []

  console.log(donorArr, RecipArr);
  // console.log();
  testFinal.push(donorArr.shift(), RecipArr.shift())
  console.log('testFinal:', testFinal)
  console.log(RecipArr.filter(testFinal[1]))
  // finalResult.push(donorArr.shift(), RecipArr.shift())
  // console.log(donorArr, RecipArr);
  // console.log(donorArr.shift(), RecipArr.shift());
  // console.log(donorArr, RecipArr);

  console.log('finalResult:', finalResult[1])
  
  // // finalResult.push([donorArr[0], RecipArr[0]]);

  
  // return finalResult;


    console.log('finalResult:', finalResult)
  }

      // /////////// This is from test for final function and mybe part of finalBatcher function?  /////////
      // let donor =     [4, 3, 2, 1]
      // let recipient = [1, 2, 4, 3]
  
      // let matchPair = [ [1,3], [2, 3], [3, 1], [7, 3] ]
      
      // function me(donorArray, recipientArray ) {
      //   console.log(donorArray, recipientArray)
      //   let newArray = []
      //   let indexOfDonor = ''
      //   let nextIndex = [0]
              
      //   console.log('newArray:', newArray)
      //   newArray.push(donorArray.shift(), recipientArray.shift())
      //   console.log(donorArray, recipientArray)
  
        
      //   for(let i = 0; i < newArray.length; i++) {
      //     console.log(newArray);
      //     console.log();
      //     // indexOfDonor.push()
      //     // function nextIndexForNewArray(newArray) {
      //     //   return indexOfDonor = i * 6
      //     // }
  
      //     // console.log('indexOfDonor:', indexOfDonor);
  
      //     // console.log(nextIndexForNewArray(newArray))
      //     // nextIndexForNewArray(newArray)
      //   }
      //   // console.log('indexOfDonor:', indexOfDonor);
  
        
      //   // if(donorArray[2] !== null) {
      //     // function findValueOfIndexOf(donorArray) {
      //       // console.log(donorArray.indexOf(newArray[indexOfDonor]))
      //     //   indexOfDonor = donorArray.indexOf(newArray[indexOfDonor])
      //     //   // return indexOfDonor
      //     // }
      //     // findValueOfIndexOf(donorArray)
      //   // }
         
      //   // if(indexOfDonor !== 0) {
      //     console.log(_.nth(donorArray, indexOfDonor), _.nth(recipientArray, indexOfDonor));
      //     // newArray.push(_.nth(donorArray, indexOfDonor), _.nth(recipientArray, indexOfDonor))
      //   // }
       
      // }
      // me(donor, recipient)
  
  render() { 
    let profileList = this.props
    console.log(this.state)
    
    return ( 
      <div><button onClick={()=>this.ageArrayFinder(profileList.data, this.state.age)}>Magic Button!</button>
      <select onChange={this.changeHandler}>
        <option> Age </option>
        <option value="18">18</option>
        <option value="28">28</option>
        <option value="38">38</option>
        <option value="48">48</option>
      </select>
      </div>
     );
  }
}
 
export default MagicButton;