import React from "react";


import Manager_column5 from "../data/manager_version/manager_column5.json";
import Manager_column6 from "../data/manager_version/manager_column6.json";
import Manager_column7 from "../data/manager_version/manager_column7.json";
import Manager_column8 from "../data/manager_version/manager_column8.json";


const Manager = () => {

    // const [counter, setCounter] = useState(0);



    let sumArray = [];

    const randomArrayFromManagerColumn5 = Manager_column5.sort(() => Math.random() - 0.5);
    const randomArrayFromManagerColumn6 = Manager_column6.sort(() => Math.random() - 0.5);
    const randomArrayFromManagerColumn7 = Manager_column7.sort(() => Math.random() - 0.5);
    const randomArrayFromManagerColumn8 = Manager_column8.sort(() => Math.random() - 0.5);

    for (let j = 0; j < 10; j++) {
        sumArray.push(randomArrayFromManagerColumn5[j], randomArrayFromManagerColumn6[j], randomArrayFromManagerColumn7[j], randomArrayFromManagerColumn8[j])
    }

    console.log("sumArray: ", sumArray)


    document.addEventListener("keydown", function () {
        // console.log("SIE ZADZIEWA EVENT MANAGER")

        let counter;

        if (sumArray.length !== 0) {

            let source = document.getElementById('tu');

            source.innerText = source.innerText + " " + sumArray[0];

            sumArray = sumArray.splice(1)

            counter = source.innerText.length

            // setCounter(source.innerText.length)

            console.log("counter: " + counter + " , Pozostało tekstu: " + sumArray.length)

        } else {

            console.log("koniec dostępnego tekstu")

            const randomArrayFromManagerColumn5 = Manager_column5.sort(() => Math.random() - 0.5);
            const randomArrayFromManagerColumn6 = Manager_column6.sort(() => Math.random() - 0.5);
            const randomArrayFromManagerColumn7 = Manager_column7.sort(() => Math.random() - 0.5);
            const randomArrayFromManagerColumn8 = Manager_column8.sort(() => Math.random() - 0.5);

            for (let j = 0; j < 10; j++) {

                sumArray.push(randomArrayFromManagerColumn5[j], randomArrayFromManagerColumn6[j], randomArrayFromManagerColumn7[j], randomArrayFromManagerColumn8[j])
            }
            console.log("teraz od nowa tablica Manager", sumArray)
        }

        console.log(counter)


        
        return counter

    },
    )


    return (

        <>

            {/* <h4>Licznik: {document.getElementById("tu").innerText.length}</h4> */}
            <div id="tu"></div>

        </>
    )
}

export default Manager;