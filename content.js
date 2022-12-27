// console.log("this is extension");


// let msg = {
//     txt: "Mohsin"
// }

// chrome.runtime.sendMessage(msg);


// //******************************* */

// let sndMsg = {
//     containr: "i am container"
// }
// chrome.runtime.sendMessage(sndMsg);

// //****************************** */



// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse) {
//     console.log(message);
// }

// //********************************** */

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse) {
//     console.log(message);
// }



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {

    // if (message && message.type === 'userValue') {
    //     name();
    // }
    // let paragraph = document.getElementsByTagName("p");
   




    // for (elt of paragraph) {
    //     if (paragraph.length > 0) {
    //         message.txt.map((item, index) => {
    //             elt.innerText = elt.innerText.replace(item, message.reptxt);
              
    //         });
    //     }
    // }
  
    let h1tag = document.getElementsByTagName("h1");
    let h2tag = document.getElementsByTagName("h2");
    let h3tag = document.getElementsByTagName("h3");
    let h4tag = document.getElementsByTagName("h4");
    let ancher = document.getElementsByTagName("a");
    // let h6tag = document.getElementsByTagName("h5");
    let paragraphs = document.getElementsByTagName("p");

  for (para of paragraphs) {
    if (paragraphs.length > 0) {
      message.searchingArray.map((item) => {
        para.innerText = para.innerText.replace(item, message.reptxt);
      });
    }
  }



  for (h1 of h1tag) {
    if (h1tag.length > 0) {
      message.searchingArray.map((item) => {
        h1.innerText = h1.innerText.replace(item, message.reptxt);
      });
    }
  }

  for (h2 of h2tag) {
    if (h2tag.length > 0) {
      message.searchingArray.map((item) => {
        h2.innerText = h2.innerText.replace(item, message.reptxt);
      });
    }
  }

  for (h3 of h3tag) {
    if (h3tag.length > 0) {
      message.searchingArray.map((item) => {
        h3.innerText = h3.innerText.replace(item, message.reptxt);
      });
    }
  }


  for (h4 of h4tag) {
    if (h4tag.length > 0) {
      message.searchingArray.map((item) => {
        h4.innerText = h4.innerText.replace(item, message.reptxt);
      });
    }
  }

  for (atag of ancher) {
    if (ancher.length > 0) {
      message.searchingArray.map((item) => {
        atag.innerText = atag.innerText.replace(item, message.reptxt);
      });
    }
  }



  








}

// function name(params) {

// }



