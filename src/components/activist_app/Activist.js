import React from 'react';

import Activist_column1 from "../data/activist_version/activist_column1.json";
import Activist_column2 from "../data/activist_version/activist_column2.json";
import Activist_column3 from "../data/activist_version/activist_column3.json";
import Activist_column4 from "../data/activist_version/activist_column4.json";


const Activist = () => {

    const randomArrayFromActivistColumn1 = Activist_column1.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn5)

    const randomArrayFromActivistColumn2 = Activist_column2.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn6)

    const randomArrayFromActivistColumn3 = Activist_column3.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn7)

    const randomArrayFromActivistColumn4 = Activist_column4.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn8)

    let sumArray = []

    for (let j = 0; j < 10; j++) {

        sumArray.push(randomArrayFromActivistColumn1[j], randomArrayFromActivistColumn2[j], randomArrayFromActivistColumn3[j], randomArrayFromActivistColumn4[j])
    }

    console.log(sumArray)


    document.addEventListener("keydown", function () {

        if (sumArray.length !== 0) {

            let source = document.getElementById('tu');

            source.innerText = source.innerText + " " + sumArray[0];

            sumArray = sumArray.splice(1);

            // console.log(sumArray)

            let counter = source.innerText.length

            console.log(counter, sumArray.length)

        } else {

            console.log("koniec dostępnego tekstu")

            const randomArrayFromActivistColumn1 = Activist_column1.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn5)

            const randomArrayFromActivistColumn2 = Activist_column2.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn6)

            const randomArrayFromActivistColumn3 = Activist_column3.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn7)

            const randomArrayFromActivistColumn4 = Activist_column4.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn8)

            for (let j = 0; j < 10; j++) {

                sumArray.push(randomArrayFromActivistColumn1[j], randomArrayFromActivistColumn2[j], randomArrayFromActivistColumn3[j], randomArrayFromActivistColumn4[j])
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

export default Activist;