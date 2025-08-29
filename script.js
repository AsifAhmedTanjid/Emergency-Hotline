// console.log("connected");

// heart increase functionality

let heartCount = parseInt(document.getElementById("heart-count").innerText);

const heartIcons = document.getElementsByClassName("fa-heart");
for (const heart of heartIcons) {
  heart.addEventListener("click", function (e) {
    heartCount += 1;
    document.getElementById("heart-count").innerText = heartCount;
  });
}

// call functionality

const callBtns = document.getElementsByClassName("call-btn");
// const callHistory = [];


for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function (e) {
    const serviceName =
      e.currentTarget.parentNode.parentNode.getElementsByClassName(
        "service-name"
      )[0].innerText;

    const serviceNumber =
      e.currentTarget.parentNode.parentNode.getElementsByClassName(
        "service-number"
      )[0].innerText;

    let availableCoin = parseInt(
      document.getElementById("coin-count").innerText
    );
    if (availableCoin >= 20) {
      alert("Calling " + serviceName + " : " + serviceNumber);
      availableCoin -= 20;
      document.getElementById("coin-count").innerText = availableCoin;

    //   const history = {
    //     historyTitle: serviceName,
    //     historyNumber: serviceNumber,
    //     date: new Date().toLocaleTimeString(),
    //   };
    

    //   callHistory.push(history);

      // showing history
      const historyList = document.getElementById("history-list");
    //   historyList.innerText = "";
    //   for (const item of callHistory) {
        const div = document.createElement("div");
        div.innerHTML = `              <div
                class="flex justify-between items-center mx-[24px] mt-[24px] p-[16px] bg-[#FAFAFA] rounded-[8px]"
              >
                <div>
                  <h1 class="font-semibold text-[18px] inter-font">${serviceName}</h1>
                  <p class="text-gray-500 hind-madurai">${serviceNumber}</p>
                </div>
                <div>
                  <p class="text-[18px] font-normal hind-madurai">${new Date().toLocaleTimeString()}</p>
                </div>
              </div>`;
        historyList.appendChild(div);
    //   }
    } else {
      alert(
        "You do not have sufficient Balance. You need minimum 20 coins to make a call"
      );
    }
  });
}

//call history clear

document.getElementById('clear-history').addEventListener('click', function(e){
    document.getElementById("history-list").innerText='';
    
})


// copy the service number

let copyCount = parseInt(document.getElementById("copy-count").innerText);
const copyBtns = document.getElementsByClassName("copy-btn");

for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function (e) {
    // const serviceName =
    //   e.currentTarget.parentNode.parentNode.getElementsByClassName(
    //     "service-name"
    //   )[0].innerText;

    const serviceNumber =
      e.currentTarget.parentNode.parentNode.getElementsByClassName(
        "service-number"
      )[0].innerText;
    //   console.log(serviceNumber);
      
    
      navigator.clipboard.writeText(serviceNumber);
      alert('Number Copied : '+serviceNumber);
        copyCount++;
        document.getElementById("copy-count").innerText = copyCount;

    }
)
}