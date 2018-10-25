import React, { Component } from "react";

class MagicButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: "",
      agesArray: [],
      possibleMatchPair: []
    };
    this.ageArrayFinder = this.ageArrayFinder.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.agesArray !== this.state.agesArray) {
      this.findMatchPair(this.state.agesArray, this.state.agesArray);
      //     console.log(this.finalBatcher(this.state.possibleMatchPair));
    }
  }

  changeHandler = e => {
    this.setState({ age: e.target.value });
  };

  //// Handle age limit within 10 years apart. Part 1 function for magic button ////

  ageArrayFinder(userData, age) {
    console.log("All users in database:", userData);

    return this.setState({
      agesArray: userData
        .map(
          (element, index) =>
            Math.abs(element.donor_age - age) <= 5 ||
            age + 5 <= Math.abs(element.donor_age)
              ? {
                  age: element.donor_age,
                  pair_id: element.pair_id,
                  donor_blood_type: element.donor_blood_type,
                  recipient_blood_type: element.recipient_blood_type
                }
              : null
        )
        .filter(element => element !== null)
    });
  }

  //// Take in possibleMatchPair array, filter out matching blood Type. Part 2 function for magic button ////

  findMatchPair(array1, array2) {
    let { possibleMatchPair } = this.state;

    for (let i = 0; i < array1.length; i++) {
      // console.log('');

      for (let j = 0; j < array2.length; j++) {
        // console.log(`donor2[${i}]`, array1[i].donor_blood_type, `recipient2[${j}]`, array2[j].recipient_blood_type)
        // console.log('Compare: ',array1[i].donor_blood_type,  array2[j].recipient_blood_type )

        if (
          array1[i].donor_blood_type === "A" &&
          array2[j].recipient_blood_type === "A"
        ) {
          // console.log('Match a for a : ', array1[i].donor_blood_type, array2[j].recipient_blood_type )
          // console.log('Match a for a : ', array1[i], array2[j] )
          possibleMatchPair.push([
            array1[i].pair_id,
            array2[j].pair_id,
            array1[i],
            array2[j]
          ]);
        } else if (
          array1[i].donor_blood_type === "A" &&
          array2[j].recipient_blood_type !== "B" &&
          array2[j].recipient_blood_type !== "AB" &&
          array2[j].recipient_blood_type !== "O"
        ) {
          // console.log('Compare a for a: ',array1[i].donor_blood_type,  array2[j].recipient_blood_type )
          possibleMatchPair.push([
            array1[i].pair_id,
            array2[j].pair_id,
            array1[i],
            array2[j]
          ]);
        } else if (
          array1[i].donor_blood_type === "A" &&
          array2[j].recipient_blood_type === "AB" &&
          array2[j].recipient_blood_type !== "B"
        ) {
          // console.log('Match a for ab: ', array1[i], array2[j] )
          possibleMatchPair.push([
            array1[i].pair_id,
            array2[j].pair_id,
            array1[i],
            array2[j]
          ]);
        }

        if (
          array1[i].donor_blood_type === "B" &&
          array2[j].recipient_blood_type === "B"
        ) {
          // console.log('Compare b for b : ', array1[i].pair_id, array2[j].pair_id )
          // console.log('Match b for b : ', array1[i], array2[j] )
          possibleMatchPair.push([
            array1[i].pair_id,
            array2[j].pair_id,
            array1[i],
            array2[j]
          ]);
        } else if (
          array1[i].donor_blood_type === "B" &&
          array2[j].recipient_blood_type !== "A" &&
          array2[j].recipient_blood_type !== "AB" &&
          array2[j].recipient_blood_type !== "O"
        ) {
          // console.log('Compare b for b: ',array1[i].donor_blood_type,  array2[j].recipient_blood_type )
          possibleMatchPair.push([
            array1[i].pair_id,
            array2[j].pair_id,
            array1[i],
            array2[j]
          ]);
        } else if (
          array1[i].donor_blood_type === "B" &&
          array2[j].recipient_blood_type === "AB" &&
          array2[j].recipient_blood_type !== "A"
        ) {
          // console.log('Match b for ab : ', array1[i], array2[j] )
          possibleMatchPair.push([
            array1[i].pair_id,
            array2[j].pair_id,
            array1[i],
            array2[j]
          ]);
        }

        if (
          (array1[i].donor_blood_type === "AB" &&
            array2[j].recipient_blood_type === "AB") ||
          (array1[i].donor_blood_type !== "A" &&
            array2[j].recipient_blood_type !== "A" &&
            array1[i].donor_blood_type !== "B" &&
            array2[j].recipient_blood_type !== "B" &&
            array1[i].donor_blood_type !== "O" &&
            array2[j].recipient_blood_type !== "O")
        ) {
          // console.log('Match ab for ab : ', array1[i], array2[j] )
          possibleMatchPair.push([
            array1[i].pair_id,
            array2[j].pair_id,
            array1[i],
            array2[j]
          ]);
        }

        if (
          array1[i].donor_blood_type === "O" &&
          array2[j].recipient_blood_type === "O"
        ) {
          // console.log('Match o for o : ', array1[i], array2[j] )
          possibleMatchPair.push([
            array1[i].pair_id,
            array2[j].pair_id,
            array1[i],
            array2[j]
          ]);
        } else if (
          (array1[i].donor_blood_type === "O" &&
            array2[j].recipient_blood_type === "A") ||
          (array1[i].donor_blood_type === "O" &&
            array2[j].recipient_blood_type === "B") ||
          (array1[i].donor_blood_type === "O" &&
            array2[j].recipient_blood_type === "AB")
        ) {
          // console.log('Match o for a, b, ab, o : ', array1[i], array2[j] )
          possibleMatchPair.push([
            array1[i].pair_id,
            array2[j].pair_id,
            array1[i],
            array2[j]
          ]);
        }
      }
    }
  }

  //// This will take possibleMatchPair array and pair donor and recipient in order. Part 3 function for magic button ////

  finalMatch = array => {
    console.log("array: ", array);
    let oldArray = [];
    let finalArray = [];

    for (let t = 0; t < array.length; t++) {
      oldArray.push([array[t][0], array[t][1]]);
    }

    finalArray.push(oldArray[0]);
    console.log("finalArray:", finalArray);

    for (let i = 0; i < oldArray.length; i++) {
      // console.log('')
      for (let j = 0; j < finalArray.length; j++) {
        // console.log(`finalArray[${i}]:`, finalArray[j], `finalArray[${i}]:`, finalArray[j], `oldArray[${i}]`, oldArray[i]);
        // console.log(`oldArray[${i}][1] === finalArray[${j}][1]`, oldArray[i][0] ,  finalArray[j][1])
        // console.log(`oldArray[${i}][1] === finalArray[${j}][1]`, oldArray[i][0] , oldArray[i][1] ,  finalArray[j][1])
        if (
          oldArray[i][0] === finalArray[j][1] &&
          oldArray[i][1] !== finalArray[j][1]
        ) {
          finalArray.push(oldArray[i]);
        }
      }
    }

    for (let a = 0; a < oldArray.length; a++) {
      // console.log('')
      for (let b = 0; b < finalArray.length; b++) {
        // console.log(`finalArray[${b}]:`, finalArray[b], `finalArray[${b}]:`, finalArray[0], `oldArray[${a}]`, oldArray[a]);
        // console.log('oldArray[a][0] === finalArray[b][1]::', oldArray[a][0] , oldArray[a][1], finalArray[b][1])
        if (
          oldArray[a][0] === finalArray[b][1] &&
          oldArray[a][1] !== finalArray[b][1] &&
          oldArray[a][1] !== finalArray[0][1] &&
          oldArray[a][0] !== finalArray[0][1]
        ) {
          finalArray.push(oldArray[a]);
        }
      }
    }
  };

  finalBatcher = array1 => {
    console.log(array1);
    const donorArr = idFinder(0);
    const RecipArr = idFinder(1);
    const finalResult = [];
    let testFinal = [];

    const initialArr = array1.filter((e, i) => e[i]);

    const idFinder = a => {
      const newArr = [];

      for (let i = 0; i < initialArr.length; i++) {
        newArr.push(initialArr[i][a]);
      }
      return newArr;
    };
    // console.log(donorArr, RecipArr);
    // console.log("testFinal:", testFinal);
    // console.log("finalResult:", finalResult);
  };

  render() {
    let profileList = this.props;
    console.log("group of donors in the selected age range:", this.state);

    return (
      <div>
        <button
          onClick={() => this.ageArrayFinder(profileList.data, this.state.age)}
        >
          Magic Button!
        </button>
        <select onChange={this.changeHandler}>
          <option> Age </option>
          <option value="18">18</option>
          <option value="28">28</option>
          <option value="38">38</option>
          <option value="48">48</option>
        </select>
        <button onClick={() => this.finalMatch(this.state.possibleMatchPair)}>
          Final button??
        </button>
      </div>
    );
  }
}

export default MagicButton;
