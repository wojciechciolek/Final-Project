import React from "react";
import "./Manager.css"

import Manager_column1 from "../data/manager_version/manager_column1.json";
import Manager_column2 from "../data/manager_version/manager_column2.json";
import Manager_column3 from "../data/manager_version/manager_column3.json";
import Manager_column4 from "../data/manager_version/manager_column4.json";


const Manager = () => {

    let sumArray = [];

    const randomArrayFromManagerColumn1 = Manager_column1.sort(() => Math.random() - 0.5);
    const randomArrayFromManagerColumn2 = Manager_column2.sort(() => Math.random() - 0.5);
    const randomArrayFromManagerColumn3 = Manager_column3.sort(() => Math.random() - 0.5);
    const randomArrayFromManagerColumn4 = Manager_column4.sort(() => Math.random() - 0.5);

    for (let j = 0; j < 10; j++) {
        sumArray.push(randomArrayFromManagerColumn1[j], randomArrayFromManagerColumn2[j], randomArrayFromManagerColumn3[j], randomArrayFromManagerColumn4[j])
    }
    console.log("sumArray: ", sumArray)

    document.addEventListener("keydown", function () {

        let counter;

        if (sumArray.length !== 0) {

            let source = document.getElementById('tu');
            source.innerText = source.innerText + " " + sumArray[0];
            sumArray = sumArray.splice(1)
            counter = source.innerText.length
            console.log("counter: " + counter + " , Pozostało tekstu: " + sumArray.length)

        } else {

            console.log("koniec dostępnego tekstu")
            const randomArrayFromManagerColumn1 = Manager_column1.sort(() => Math.random() - 0.5);
            const randomArrayFromManagerColumn2 = Manager_column2.sort(() => Math.random() - 0.5);
            const randomArrayFromManagerColumn3 = Manager_column3.sort(() => Math.random() - 0.5);
            const randomArrayFromManagerColumn4 = Manager_column4.sort(() => Math.random() - 0.5);

            for (let j = 0; j < 10; j++) {

                sumArray.push(randomArrayFromManagerColumn1[j], randomArrayFromManagerColumn2[j], randomArrayFromManagerColumn3[j], randomArrayFromManagerColumn4[j])
            }
            console.log("teraz od nowa tablica Manager", sumArray)
        }
    })
    return (
        <div className="managerText" id="tu"></div>
    )
}
export default Manager;