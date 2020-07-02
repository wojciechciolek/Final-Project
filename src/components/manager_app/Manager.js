import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Reload,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';

import Manager_column5 from "../data/manager_version/manager_column5.json";
import Manager_column6 from "../data/manager_version/manager_column6.json";
import Manager_column7 from "../data/manager_version/manager_column7.json";
import Manager_column8 from "../data/manager_version/manager_column8.json";


const Manager = () => {

   

    const randomArrayFromManagerColumn5 = Manager_column5.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn5)

    const randomArrayFromManagerColumn6 = Manager_column6.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn6)

    const randomArrayFromManagerColumn7 = Manager_column7.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn7)

    const randomArrayFromManagerColumn8 = Manager_column8.sort(() => Math.random() - 0.5);
    // console.log(randomArrayFromManagerColumn8)

    let sumArray = []

    for (let j = 0; j < 10; j++) {

        sumArray.push(randomArrayFromManagerColumn5[j], randomArrayFromManagerColumn6[j], randomArrayFromManagerColumn7[j], randomArrayFromManagerColumn8[j])
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

            const randomArrayFromManagerColumn5 = Manager_column5.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn5)

            const randomArrayFromManagerColumn6 = Manager_column6.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn6)

            const randomArrayFromManagerColumn7 = Manager_column7.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn7)

            const randomArrayFromManagerColumn8 = Manager_column8.sort(() => Math.random() - 0.5);
            // console.log(randomArrayFromManagerColumn8)

            for (let j = 0; j < 10; j++) {

                sumArray.push(randomArrayFromManagerColumn5[j], randomArrayFromManagerColumn6[j], randomArrayFromManagerColumn7[j], randomArrayFromManagerColumn8[j])
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

export default Manager;