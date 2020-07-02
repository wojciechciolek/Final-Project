import React from 'react';

import King_column1 from "../data/king_version/king_column1.json";
import King_column2 from "../data/king_version/king_column2.json";
import King_column3 from "../data/king_version/king_column3.json";
import King_column4 from "../data/king_version/king_column4.json";
import King_column5 from "../data/king_version/king_column5.json";
import King_column6 from "../data/king_version/king_column6.json";


const King = () => {

    

    const randomArrayFromKingColumn1 = King_column1.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn5)

    const randomArrayFromKingColumn2 = King_column2.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn6)

    const randomArrayFromKingColumn3 = King_column3.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn7)

    const randomArrayFromKingColumn4 = King_column4.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn8)

    const randomArrayFromKingColumn5 = King_column5.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn8)

    const randomArrayFromKingColumn6 = King_column6.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn8)

    let sumArray = []

    for (let j = 0; j < 22; j++) {

        sumArray.push(randomArrayFromKingColumn1[j], randomArrayFromKingColumn2[j], randomArrayFromKingColumn3[j], randomArrayFromKingColumn4[j], randomArrayFromKingColumn5[j], randomArrayFromKingColumn6[j],)
    }

    console.log(sumArray)


    document.addEventListener("keydown", function () {

        if (sumArray.length !== 0) {

            let source = document.getElementById('tu');

            source.innerText = source.innerText + " " + sumArray[0];

            sumArray = sumArray.splice(1);

            // console.log(sumKingArray)

            let counter = source.innerText.length

            console.log(counter, sumArray.length)

        } else {

            console.log("koniec dostępnego tekstu")

            const randomArrayFromKingColumn1 = King_column1.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn5)

            const randomArrayFromKingColumn2 = King_column2.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn6)

            const randomArrayFromKingColumn3 = King_column3.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn7)

            const randomArrayFromKingColumn4 = King_column4.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn8)

            const randomArrayFromKingColumn5 = King_column5.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn8)

            const randomArrayFromKingColumn6 = King_column6.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn8)

            for (let j = 0; j < 22; j++) {

                sumArray.push(randomArrayFromKingColumn1[j], randomArrayFromKingColumn2[j], randomArrayFromKingColumn3[j], randomArrayFromKingColumn4[j], randomArrayFromKingColumn5[j], randomArrayFromKingColumn6[j])
            }
            console.log(sumArray)
        }
    })

    return (

        <>
                      
            <div id="tu"></div>

        </>
    )
}

export default King;