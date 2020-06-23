import React from 'react';
import Manager_column5 from "../data/manager_version/manager_column5.json";
import Manager_column6 from "../data/manager_version/manager_column6.json";
import Manager_column7 from "../data/manager_version/manager_column7.json";
import Manager_column8 from "../data/manager_version/manager_column8.json";

const Test = () => {

    const randomArrayFromManagerColumn5 = Manager_column5.sort(() => Math.random() - 0.5);
    console.log(randomArrayFromManagerColumn5)

    const randomArrayFromManagerColumn6 = Manager_column6.sort(() => Math.random() - 0.5);
    console.log(randomArrayFromManagerColumn6)

    const randomArrayFromManagerColumn7 = Manager_column7.sort(() => Math.random() - 0.5);
    console.log(randomArrayFromManagerColumn7)

    const randomArrayFromManagerColumn8 = Manager_column8.sort(() => Math.random() - 0.5);
    console.log(randomArrayFromManagerColumn8)

    const sumArray = []

    for (let j = 0; j < 10; j++) {

        sumArray.push(randomArrayFromManagerColumn5[j], randomArrayFromManagerColumn6[j], randomArrayFromManagerColumn7[j], randomArrayFromManagerColumn8[j])

    }


    console.log(sumArray)

    const sumString = sumArray.join("")

    console.log(sumString)


    //     const numberOfColumn = 4
    //     const numberOfRows = 10;


    //     const a = [];
    //     for (let i = 0; i < numberOfColumn; i++) {
    //         a[i] = []
    //         for (let j = 0; j < numberOfRows; j++) {
    //             a[i][j] = Manager_column5[j]
    //         }
    //     }

    //     for (let i = 0; i < numberOfColumn; i++) {
    //         a[i].sort(() => Math.random() - 0.5);
    //     }

    // const bb = ["Ala ", "ma ", "kota "]


    // console.log(a)
    //     // console.log(a[0][0])
    //     console.log(Manager_column5)


    // console.log(bb[0] + bb[1])




    // const a = new Array(4)
    // for (let i = 0; i < 4; i++) {
    //     a[i] = new Array(4)
    //     for (let j = 0; j < 10; j++) {
    //         a[i][j] = "[" + i + "," + j + "]"
    //     }
    // }

    // for (let i = 0; i < 4; i++) {
    //     a[i].sort(() => Math.random() - 0.5);
    // }

    // console.log(a)



    return (
        <>
            
            <p>{sumString}</p>
        </>
    )
}

export default Test;