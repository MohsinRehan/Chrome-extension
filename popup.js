// console.log("this is chrome js");

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse) {
//     console.log(message);
// }



// let params = {
//     active: true,
//     currentWindow: true,
// };

// chrome.tabs.query(params, gotTab);

// function gotTab(tabs) {
//     let msg = {
//         txt: "Ar soft",

//     };
//     chrome.tabs.sendMessage(tabs[0].id, msg);
// }



// let abc = {
//     active: true,
//     currentWindow: true,
// };

// chrome.tabs.query(abc, sndData)

// function sndData(tabs) {
//     let mes = {
//         clrtext: "me hu aik groot color"
//     }

//     chrome.tabs.sendMessage(tabs[0].id, mes);
// }



// clickBtn.addEventListener('click', function () {
//     let para = document.getElementById("paragraph");

//     para.innerText = "i am a frontend developer";
// })

// chrome.runtime.onMessage.addListener(getData)


// function getData(mesg, sender, sendResponse) {
//     console.log(mesg);
// }


//  send data to browser


////////////    Extesion to Search test and replace text in browser ///////////////////////////

// let clickBtn = document.getElementById("btn");

// let userinput = document.getElementById("userinput");

// let repInput =document.getElementById("repinput");



//    clickBtn.addEventListener('click' , changeText )


//     function changeText() {

//         let params = {
//             active: true,
//             currentWindow: true,
//         };

//         chrome.tabs.query(params , gotTab)

//         function gotTab(tabs) {
//             console.log("got tabs");
//             console.log(tabs);

//             let userValue = userinput.value;
//             let userText=repInput.value;

           
            
//             let msg = {
//                 // type: "userValue",
//                 txt: userValue,
//                 reptxt : userText,
                
//             }
//              //  send a message to content js 


//            chrome.tabs.sendMessage(tabs[0].id, msg);

//         }   
       

//     }



//                 End           ////////////////////////



let clickBtn = document.getElementById("btn");


let repInput =document.getElementById("repinput");



   clickBtn.addEventListener('click' , changeText )

   const searchingArr = [
    "JavaScript",
    "JAVASCRIPT",
    "HTML",
    "CSS",
    "programming",
  ];
    function changeText() {

        let params = {
            active: true,
            currentWindow: true,
        };

        chrome.tabs.query(params , gotTab)

        function gotTab(tabs) {

           
            let userText=repInput.value;
   
           
            
            let msg = {
                // type: "userValue",
                searchingArray: searchingArr,
                reptxt : userText,
                
            }
             //  send a message to content js 


           chrome.tabs.sendMessage(tabs[0].id, msg);

        }   
       

    }