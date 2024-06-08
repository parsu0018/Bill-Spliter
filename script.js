let bill_amount = document.querySelector(".bill_amount");

let splitFriend = document.querySelector(".count_of_friends");
let submit_btn = document.querySelector("#submit-btn");

let tip_value = document.querySelector(".tip-value");
let total_amount = document.querySelector(".total_amount");
let reset = document.querySelector("#reset");

let cost = document.querySelector(".cost");
let total_tip = document.querySelector(".total-tip");

// let right = document.querySelector(".right");
let lastAmount = document.querySelector(".last");

submit_btn.addEventListener("click", () => {
    let val1 = parseInt(bill_amount.value);
    let val2 = parseInt(tip_value.value);
    let val3 = parseInt(splitFriend.value);
    if (val1 && val2 && val3) {
        let preF = val1 * val2;
        let pre = preF / 100;
        const total = pre;
        let add = val1 + total;
        let final = add / val3;
        let val4 = val1 + total;

        cost.innerText = `Your Amount : ${val1}`;
        total_tip.innerText = `Tip Cost: ${total}`;
        total_amount.innerText = `Payable Amount to each one is : ${final}`;
        lastAmount.innerText = `Total Cost: ${val4}`;



    }



})


reset.addEventListener("click", () => {
    bill_amount.value = "";
    tip_value.value = "";
    splitFriend.value = "";
    cost.innerText = " Your Amount : ";
    total_tip.innerText = "Tip Cost: ";
    total_amount.innerText = "Payable Amount to each one is :";
    lastAmount.innerText = "Total Cost: ";
})
