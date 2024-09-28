const guests = [
  { names: ["John Doe"], side: "Groom", table: 5 },
  { names: ["Yina", "Yina Chow"], side: "Bride", table: "Table 3 (T3)" },
  { names: ["Phyllis"], side: "Bride", table: "the VIP table" },
  { names: ["Eileen", "Swee Lian", "Tan Swee Lian", "Eileen Tan"], side: "Bride", table: "the VIP table" },
  { names: ["Derek", "Beng Ngiap", "Derek Tay"], side: "Bride", table: "the VIP table" },
  { names: ["Eugene Tay"], side: "Bride", table: "the VIP table" },
  { names: ["Pamela", "Pam"], side: "Bride", table: "the VIP table" },
  { names: ["Duncan", "Duncan Tan"], side: "Bride", table: "the VIP table" },
  { names: ["Vivien", "Vivien Tan"], side: "Bride", table: "the VIP table" },
  { names: ["Ivy", "Ivy Tan"], side: "Bride", table: "the VIP table" },
  { names: ["Kumar", "Uthaia Kumaran", "Uthaia"], side: "Bride", table: "the VIP table" },
  { names: ["Bok Lan", "Tay Bok Lan"], side: "Bride", table: "the VIP table" }
];

// Step 1: User selects Bride or Groom
const toppers = document.querySelectorAll('.topper');
let selectedSide = null;

toppers.forEach(topper => {
  topper.addEventListener('click', function () {
    // Highlight the selected topper
    toppers.forEach(t => t.style.borderColor = 'transparent');
    this.style.borderColor = '#008CBA';
    selectedSide = this.dataset.side;  // Using data-side attribute

    // Move to Step 2 (Enter Name)
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
  });
});

// Step 2: User submits name
document.getElementById('submitName').addEventListener('click', function() {
  const name = document.getElementById('guestName').value.trim().toLowerCase();

  if (name === "") {
    alert('Please enter your name');
    return;
  }

  // Find guest by name (match with any name in the array) and side
  const guest = guests.find(guest => guest.names.some(guestName => guestName.toLowerCase() === name) && guest.side === selectedSide);
  const tableNumberDiv = document.getElementById('tableNumber');

  if (guest) {
    tableNumberDiv.innerHTML = `You are seated at ${guest.table}`;
  } else {
    tableNumberDiv.innerHTML = 'Oops we can\'t find your records...<br>Maybe try with another name we know you by? <br><br>Else, find your seating at the registration table :)';
  }

  document.getElementById('titleImage').style.display = 'none';

  // Move to Step 3 (Display Table and Map)
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step3').classList.remove('hidden');

});
