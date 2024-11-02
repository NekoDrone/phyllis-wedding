const guests = [

  /*VIP*/
  { names: ["Yam Huo"], side: "Groom", table: "the VIP table" },
  { names: ["David", "David Ow"], side: "Groom", table: "the VIP table" },
  { names: ["Yam Tai", "Ow Yam Tai"], side: "Groom", table: "the VIP table" },
  { names: ["Keng Kwai", "Ow Keng Kwai"], side: "Groom", table: "the VIP table" },
  { names: ["Yok Fong", "Liew Yok Fong"], side: "Groom", table: "the VIP table" },
  { names: ["Serene", "Xiao Jing"], side: "Groom", table: "the VIP table" },
  { names: ["Angela", "Angela Ow"], side: "Groom", table: "the VIP table" },
  { names: ["Leila", "Leila Ow", "Jia Yi"], side: "Groom", table: "the VIP table" },
  { names: ["Phyllis"], side: "Bride", table: "the VIP table" },
  { names: ["Eileen", "Swee Lian", "Tan Swee Lian", "Eileen Tan"], side: "Bride", table: "the VIP table" },
  { names: ["Derek", "Beng Ngiap", "Derek Tay"], side: "Bride", table: "the VIP table" },
  { names: ["Eugene Tay"], side: "Bride", table: "the VIP table" },
  { names: ["Duncan", "Duncan Tan"], side: "Bride", table: "the VIP table" },
  { names: ["Vivien", "Vivien Tan"], side: "Bride", table: "the VIP table" },
  { names: ["Ivy", "Ivy Tan"], side: "Bride", table: "the VIP table" },
  { names: ["Kumar", "Uthaia Kumaran", "Uthaia"], side: "Bride", table: "the VIP table" },
  { names: ["Bok Lan", "Tay Bok Lan"], side: "Bride", table: "the VIP table" },

  /*Table 1*/
  { names: ["Jun Ming", "Tay Jun Ming"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Philip", "Philip Tay"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Jennifer", "Jennifer Tan"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Michelle", "Michelle Tay"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Daniel", "Tay Beng Tat", "Beng Tat"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Susan", "Hoon Bee Choo", "Bee Choo"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Li Chan"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Paul Tiong", "Tay Paul Tiong", "Paul"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Francis", "Francis Goh"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Judy", "Judy Ong"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Kenneth", "Kenneth Tay"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Heng Jing"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Geok Hong"], side: "Bride", table: "Table 1 (T1)" },
  { names: ["Wan Xuan"], side: "Bride", table: "Table 1 (T1)" },

  /*Table 2*/
  { names: ["Jennifer", "Jennifer Han"], side: "Groom", table: "Table 2 (T2)"},
  { names: ["Keng Fong", "Ow Keng Fong"], side: "Groom", table: "Table 2 (T2)" },
  { names: ["Keng Luen", "Ow Keng Luen"], side: "Groom", table: "Table 2 (T2)" },
  { names: ["Tyler", "Tyler Ow"], side: "Groom", table: "Table 2 (T2)" },
  { names: ["Syl"], side: "Groom", table: "Table 2 (T2)" },
  { names: ["Tony", "Tony Yap"], side: "Groom", table: "Table 2 (T2)" },
  { names: ["Michelle", "Michelle Koh"], side: "Groom", table: "Table 2 (T2)" },
  { names: ["Jon Kit", "Ow Jon Kit"], side: "Groom", table: "Table 2 (T2)" },
  { names: ["Shermin", "Shermin Ow"], side: "Groom", table: "Table 2 (T2)" },
  { names: ["Rachel", "Rachel Ow"], side: "Groom", table: "Table 2 (T2)" },
  { names: ["Edmond", "Edmond Ow"], side: "Groom", table: "Table 2 (T2)" },
  { names: ["Scott Liu"], side: "Groom", table: "Table 2 (T2)" },
  { names: ["Jamie", "Jamie Wong"], side: "Groom", table: "Table 2 (T2)" },

  /*Table 3*/
  { names: ["Agnes", "Agnes Tay"], side: "Bride", table: "Table 3 (T3)" },
  { names: ["Zi Hao"], side: "Bride", table: "Table 3 (T3)" },
  { names: ["Zi Qi"], side: "Bride", table: "Table 3 (T3)" },
  { names: ["Melvyn", "Melvyn Chan"], side: "Bride", table: "Table 3 (T3)" },

  /*Table 4*/
  { names: ["Zhan Xiang", "Tay Zhan Xiang"], side: "Bride", table: "Table 4 (T4)" },
  { names: ["Zhan An", "Tay Zhan An"], side: "Bride", table: "Table 4 (T4)" },
  { names: ["Desmond", "Desmond Tay"], side: "Bride", table: "Table 4 (T4)" },
  { names: ["Shi Hui", "Ng Shi Hui"], side: "Bride", table: "Table 4 (T4)" },
  { names: ["Pauline", "Pauline Kwek"], side: "Bride", table: "Table 4 (T4)" },

  /*Table 5 SKIP*/

  /*Table 6*/
  { names: ["Raenen", "Raenen Tan"], side: "Bride", table: "Table 6 (T6)" },
  { names: ["Raemus", "Raemus Tan"], side: "Bride", table: "Table 6 (T6)" },
  { names: ["Raeann", "Raeann Tan"], side: "Bride", table: "Table 6 (T6)" },
  { names: ["Daisah"], side: "Bride", table: "Table 6 (T6)" },
  { names: ["Sylfr", "Sylfr Tan", "John"], side: "Bride", table: "Table 6 (T6)" },
  { names: ["Aaron", "Aaron Tan"], side: "Bride", table: "Table 6 (T6)" },

  /*Table 7*/
  { names: ["Kelvin"], side: "Bride", table: "Table 7 (T7)" },
  { names: ["Si Ling", "Siling"], side: "Bride", table: "Table 7 (T7)" },
  { names: ["Yi Tong", "Tan Yi Tong", "Yitong"], side: "Bride", table: "Table 7 (T7)" },
  { names: ["Boon Heng", "SB"], side: "Bride", table: "Table 7 (T7)" },
  { names: ["Evonica"], side: "Bride", table: "Table 7 (T7)" },
  { names: ["Wilson"], side: "Bride", table: "Table 7 (T7)" },

  /*Table 8*/
  { names: ["Wen Hsin", "Lau Wen Hsin"], side: "Groom", table: "Table 8 (T8)" },
  { names: ["Darrell", "Darrell Teo"], side: "Groom", table: "Table 8 (T8)" },
  { names: ["Wai Yong", "Mak Wai Yong"], side: "Groom", table: "Table 8 (T8)" },
  { names: ["Jared", "Jared Ying"], side: "Groom", table: "Table 8 (T8)" },
  { names: ["Alex", "Alex Soong"], side: "Groom", table: "Table 8 (T8)" },
  { names: ["Zhong Ying", "Chia Zhong Ying"], side: "Groom", table: "Table 8 (T8)" },
  { names: ["Sarah", "Sarah Mao"], side: "Groom", table: "Table 8 (T8)" },
  { names: ["Lauren", "Lauren Goh"], side: "Groom", table: "Table 8 (T8)" },
  { names: ["Jonathan Heng"], side: "Groom", table: "Table 8 (T8)" },
  { names: ["Jia Sheng", "Lau Jia Sheng"], side: "Groom", table: "Table 8 (T8)" },
  { names: ["Eden", "Eden Lau"], side: "Groom", table: "Table 8 (T8)" },
  { names: ["Bao Jun", "Ang Bao Jun"], side: "Groom", table: "Table 8 (T8)" },

  /*Table 9*/
  { names: ["Joash"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Sarah"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Victor"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Jonathan Goh"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Kelly"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Pern Jie"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Tricia", "Yin Siang"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Xin Yi"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Renee"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Eugene Chua"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Zhen Hao"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Cliff"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Louis"], side: "Bride", table: "Table 9 (T9)" },
  { names: ["Aloysius"], side: "Bride", table: "Table 9 (T9)" },

  /*Table 10*/
  { names: ["Jamie"], side: "Bride", table: "Table 10 (T10)" },
  { names: ["Yi Jun"], side: "Bride", table: "Table 10 (T10)" },
  { names: ["Minghan"], side: "Bride", table: "Table 10 (T10)" },
  { names: ["Jin Hao"], side: "Bride", table: "Table 10 (T10)" },
  { names: ["Catherine", "Cat"], side: "Bride", table: "Table 10 (T10)" },
  { names: ["Stanley"], side: "Bride", table: "Table 10 (T10)" },
  { names: ["James"], side: "Bride", table: "Table 10 (T10)" },
  { names: ["Woon Chuan"], side: "Bride", table: "Table 10 (T10)" },
  { names: ["Yina"], side: "Bride", table: "Table 10 (T10)" },
  { names: ["Gary"], side: "Bride", table: "Table 10 (T10)" },
  { names: ["Stephanie"], side: "Bride", table: "Table 10 (T10)" },


  /*Table 11*/
  { names: ["Carly", "Carly Wong"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Yu En", "Nah Yu En"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Shuo Han", "Tan Shuo Han"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Fiona", "Fiona Tan"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Wenqiang", "Liu Wenqiang"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Albert", "Albert Ng"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Kai Meng", "Goh Kai Meng"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Jin Yang", "Ang Jin Yang"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Jun Shan", "Ang Jun Shan"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Zhaorui", "Rong Zhaorui"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Scott Wong"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Ashley", "Ashley Ng"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Esther", "Esther Chan"], side: "Groom", table: "Table 11 (T11)" },
  { names: ["Jonathan Ng", "Jonathan James Ng"], side: "Groom", table: "Table 11 (T11)" },

  /*Table 12*/
  { names: ["Yong Zhuo", "Liew Yong Zhuo"], side: "Groom", table: "Table 12 (T12)" },
  { names: ["Li Bing", "Liew Li Bing"], side: "Groom", table: "Table 12 (T12)" },
  { names: ["Li Hui", "Liew Li Hui"], side: "Groom", table: "Table 12 (T12)" },
  { names: ["S. S.", "Liew S. S."], side: "Groom", table: "Table 12 (T12)" },
  { names: ["Lisnawati"], side: "Groom", table: "Table 12 (T12)" },
  { names: ["Jin Zhou", "Liew Jin Zhou"], side: "Groom", table: "Table 12 (T12)" },
  { names: ["Xin Kai", "Liew Xin Kai"], side: "Groom", table: "Table 12 (T12)" },
  { names: ["Cynthia", "Cynthia Liew"], side: "Groom", table: "Table 12 (T12)" },
  { names: ["Julia", "Julia Liew"], side: "Groom", table: "Table 12 (T12)" },
  { names: ["Klaire", "Klaire Liew"], side: "Groom", table: "Table 12 (T12)" },
  { names: ["Zhi Wei", "Liew Zhi Wei"], side: "Groom", table: "Table 12 (T12)" },

  /*Table 13*/
  { names: ["Jie Bin", "Wong Jie Bin"], side: "Groom", table: "Table 13 (T13)" },
  { names: ["Jia Yang", "Wong Jia Yang"], side: "Groom", table: "Table 13 (T13)" },
  { names: ["Jie Yun", "Wong Jie Yun"], side: "Groom", table: "Table 13 (T13)" },
  { names: ["Jenyne", "Jenyne Lum"], side: "Groom", table: "Table 13 (T13)" },
  { names: ["Raphaelle", "Raphaelle Lum"], side: "Groom", table: "Table 13 (T13)" },
  { names: ["Dwayne", "Dwayne Lum"], side: "Groom", table: "Table 13 (T13)" },
  { names: ["Moe Aye", "Moe"], side: "Groom", table: "Table 13 (T13)" },
  { names: ["Zong Guang", "Wong Zong Guang"], side: "Groom", table: "Table 13 (T13)" },
  { names: ["大姨丈", "dayizhang"], side: "Groom", table: "Table 13 (T13)" },

  /*Table 14*/
  { names: ["Hui Qin", "Yang Hui Qin"], side: "Groom", table: "Table 14 (T14)" },
  { names: ["Valerie", "Valerie Zhang", "Xiaowen"], side: "Groom", table: "Table 14 (T14)" },
  { names: ["Tan Xuan You", "Xuan You"], side: "Groom", table: "Table 14 (T14)" },
  { names: ["Tan Sejay", "Sejay"], side: "Groom", table: "Table 14 (T14)" },
  { names: ["Ho Liting", "Liting", "Li Ting"], side: "Groom", table: "Table 14 (T14)" },
  { names: ["Andrew", "Andrew Tan", "Yirong"], side: "Groom", table: "Table 14 (T14)" },
  { names: ["Vic", "Vic Zhuang"], side: "Groom", table: "Table 14 (T14)" },
  { names: ["Alvin", "Alvin Tan"], side: "Groom", table: "Table 14 (T14)" },
  { names: ["Atlas", "Atlas Zhuang"], side: "Groom", table: "Table 14 (T14)" },
  { names: ["Ta", "Ta Ong"], side: "Groom", table: "Table 14 (T14)" },
  { names: ["Hui Xian", "Hung Hui Xian"], side: "Groom", table: "Table 14 (T14)" },
  { names: ["Noah", "Noah Tan"], side: "Groom", table: "Table 14 (T14)" },

  /*Table 15*/
  { names: ["Han Teng", "Wong Han Teng"], side: "Groom", table: "Table 15 (T15)" },
  { names: ["Pinchuan", "Ong Pinchuan"], side: "Groom", table: "Table 15 (T15)" },
  { names: ["Yingjie", "Chan Ying Jie", "Ying Jie"], side: "Groom", table: "Table 15 (T15)" },
  { names: ["Keith", "Keith Chia"], side: "Groom", table: "Table 15 (T15)" },
  { names: ["Andrey"], side: "Groom", table: "Table 15 (T15)" },
  { names: ["Liwei", "Liu Liwei"], side: "Groom", table: "Table 15 (T15)" },
  { names: ["Gen", "Genevieve", "Genevieve Soh", "Genevieve Joan Soh"], side: "Groom", table: "Table 15 (T15)" },
  { names: ["Matthew", "Matthew Ling"], side: "Groom", table: "Table 15 (T15)" },
  { names: ["Keeran", "Keeran S"], side: "Groom", table: "Table 15 (T15)" },
  { names: ["Linxi", "Lin Xi"], side: "Groom", table: "Table 15 (T15)" }

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
  const goBackButton = document.getElementById('goBack');

  if (guest) {
    tableNumberDiv.innerHTML = `You are seated at <strong>${guest.table}</strong>`;
    goBackButton.classList.add('hidden');  // Hide the Go Back button if name is valid

  } else {
    tableNumberDiv.innerHTML = 'Oops we can\'t find your records...<br>Maybe add / remove your last name? <br><br>Else, find your seating at the registration table :)';
    goBackButton.classList.remove('hidden');  // Show the Go Back button
  }

  document.getElementById('titleImage').style.display = 'none';

  // Move to Step 3 (Display Table and Map)
  document.getElementById('step2').classList.add('hidden');
  document.getElementById('step3').classList.remove('hidden');

});

// Add an event listener to the Go Back button
document.getElementById('goBack').addEventListener('click', function() {
  // Hide Step 3 and show Step 1
  document.getElementById('step3').classList.add('hidden');
  document.getElementById('step1').classList.remove('hidden');
  document.getElementById('titleImage').style.display = 'block';

  // Optionally clear the input fields or reset other variables if needed
  document.getElementById('guestName').value = '';  // Clear the name input field
});
