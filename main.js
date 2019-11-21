//----------------------------//
//     APPLICATION            //
//----------------------------//
// Calculate tip
function calculateTip () {
    const billAmount = document.getElementById('bill-amount').value;
    const serviceQuality = document.getElementById('service-quality').value;
    let numPeople = document.getElementById('people-num').value;

    // validate input
    if (billAmount == 0) {
        alert("Wow, you're so funny!");
        return;
    }
    else if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter a valid amount!");
        return;
    }

    //check whether or not to display "each"
    if (numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //calculations
    var result = (billAmount * serviceQuality) / numPeople;

    //round to 2 decimal places
    result = Math.round(result * 100) / 100;
    result = result.toFixed(2);

    //display result
    document.getElementById('totalTip').style.display = "block";
    document.getElementById('tip').innerHTML = result;
}

//toggle theme
function changeTheme () {
    document.body.classList.toggle('light-theme');
}

const calculateButton = document.querySelector('.calc');
calculateButton.addEventListener('click', calculateTip);

const changeThemeButton = document.getElementById('change-theme-btn');
changeThemeButton.addEventListener('click', changeTheme)

//-----------------------------
//           MODALS
//-----------------------------

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

const modal = document.getElementById('about-modal');

const aboutButton = document.getElementById('about');
aboutButton.addEventListener('click', openModal);

const okButton = document.getElementById('ok');
okButton.addEventListener('click', closeModal);

