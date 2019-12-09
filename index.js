const dataLists = [
  {
    title: "",
    artist: 'Céline Amendola',
    mainImg: './img/slidesImg/thumb_600_Amendola_Celine-untitled.png',
    dl: './img/dlImg/Amendola_Céline/phone/amendola_Celine-untitled.jpg',
  },
  {
    title: '',
    artist: 'Tewprai Bualoi',
    mainImg: './img/slidesImg/thumb_600_Bualoi_Tewprai-SADESKTOP.png',
    dl: './img/dlImg/Bualoi_Tewprai/pc/bualoi_Tewprai-SADESKTOP.jpg',
  },
  {
    title: '',
    artist: 'Simon Buckley',
    mainImg: './img/slidesImg/thumb_600_Buckley_Simon-untitled01.png',
    dl: './img/dlImg/Buckley_Simon/pc/buckley_Simon-untitled01.jpg',
  },
  {
    title: '',
    artist: 'Simon Buckley',
    mainImg: './img/slidesImg/thumb_600_Buckley_Simon-untitled01.png',
    dl: './img/dlImg/Buckley_Simon/pc/buckley_Simon-untitled01.jpg',
  },
  {
    title: '',
    artist: 'Simon Buckley',
    mainImg: './img/slidesImg/thumb_600_Buckley_Simon-untitled02.png',
    dl: './img/dlImg/Buckley_Simon/pc/buckley_Simon-untitled02.jpg',
  },
  {
    title: '',
    artist: 'Simon Buckley',
    mainImg: './img/slidesImg/thumb_600_Buckley_Simon-untitled03.png',
    dl: './img/dlImg/Buckley_Simon/pc/buckley_Simon-untitled03.jpg',
  },
  {
    title: '',
    artist: 'Ronny Bulik',
    mainImg: './img/slidesImg/thumb_600_Bulik_Ronny-untitled01.png',
    dl: './img/dlImg/Bulik_Ronny/pc/bulik_Ronny-untitled01.png',
  },
  {
    title: '',
    artist: 'Ronny Bulik',
    mainImg: './img/slidesImg/thumb_600_Bulik_Ronny-untitled02.png',
    dl: './img/dlImg/Bulik_Ronny/pc/bulik_Ronny-untitled02.png',
  },
  {
    title: '',
    artist: 'Ronny Bulik',
    mainImg: './img/slidesImg/thumb_600_Bulik_Ronny-untitled03.png',
    dl: './img/dlImg/Bulik_Ronny/pc/bulik_Ronny-untitled03.png',
  },
  {
    title: '',
    artist: 'CB Ella',
    mainImg: './img/slidesImg/thumb_600_Ella_CB-untitled.png',
    dl: './img/dlImg/CB_Ella/pc/ella_CB-untitled.jpg',
  },
  {
    title:
      "I have always seen the Nordic impression in my mind before I travel to Northern Europe!, 2019, Ni Haijian's (Dodo) photography",
    artist: 'Jane Cheng',
    mainImg: './img/slidesImg/thumb_600_Jane_Cheng-Nordic_Dreams_1920x1200.png',
    dl: './img/dlImg/Cheng_Jane/Nordic/img.zip',
  },
  {
    title:
      "Between the pastoral areas, the Nagash River, which is curved in front of it, is like a silver snake, 2019, Ni Haijian's (Dodo) photography",
    artist: 'Jane Cheng',
    mainImg: './img/slidesImg/thumb_600_Jane_Cheng-Silver_Snake_1920x1200.png',
    dl: './img/dlImg/Cheng_Jane/Between/img.zip',
  },
  {
    title: `The car seemed to enter the idyllic dream described by Tao Yuanming's "Peach Blossom Spring"`,
    artist: 'Jane Cheng',
    mainImg: './img/slidesImg/thumb_600_Jane_Cheng-Spring_1920x1200.png',
    dl: './img/dlImg/Cheng_Jane/car/img.zip',
  },
  {
    title: '',
    artist: 'Anna Hoffmann',
    mainImg: './img/slidesImg/Hofmann_Anna-untitled01.jpg',
    dl: './img/dlImg/Hofmann_Anna/pc/Hofmann_Anna-untitled01.jpg',
  },
  {
    title: 'Bitter Scent',
    artist: 'Daniela KneipVelescu',
    mainImg: './img/slidesImg/thumb_600_KneipVelescu_BitterScent.png',
    dl: './img/dlImg/KneipVelescu_Daniela/img.zip',
  },
  {
    title: `Wen-Ching, “1, 2, 3”..`,
    artist: 'Pam Virada',
    mainImg: './img/slidesImg/thumb_600_PamVirada-untitled.png',
    dl: './img/dlImg/Virada_Pam/pc/PamVirada.jpg',
  },
  {
    title: '',
    artist: 'PurePropaganda',
    mainImg: './img/slidesImg/thumb_600_PurePropaganda.png',
    dl: './img/dlImg/PurePropaganda/pc/PurePropaganda.jpg',
  },
  {
    title: '',
    artist: 'Sathit Sattarasart',
    mainImg: './img/slidesImg/thumb_600_Sattarasart_Sathit-untitled01.png',
    dl: './img/dlImg/Sattarasart_Sathit/pc/Sattarasart_Sathit-untitled01.jpg',
  },
  {
    title: '',
    artist: 'Sathit Sattarasart',
    mainImg: './img/slidesImg/thumb_600_Sattarasart_Sathit-untitled02.png',
    dl: './img/dlImg/Sattarasart_Sathit/pc/Sattarasart_Sathit-untitled02.jpg',
  },
  {
    title: '',
    artist: 'Sathit Sattarasart',
    mainImg: './img/slidesImg/thumb_600_Sattarasart_Sathit-untitled03.png',
    dl: './img/dlImg/Sattarasart_Sathit/pc/Sattarasart_Sathit-untitled03.jpg',
  },
  {
    title: 'Untitled (CHF 200)',
    artist: 'Laura Schawelka',
    mainImg: './img/slidesImg/thumb_600_Schawelka_Laura-untitled01.png',
    dl: './img/dlImg/Schawelka_Laura/phone/Schawelka_Laura-untitled01.jpg',
  },
  {
    title: 'Untitled (CHF 10)',
    artist: 'Laura Schawelka',
    mainImg: './img/slidesImg/thumb_600_Schawelka_Laura-untitled02.png',
    dl: './img/dlImg',
  },
  {
    title: "",
    artist: 'Stephen Suckale',
    mainImg: './img/slidesImg/thumb_600_Stephen_Suckale.png',
    dl: './img/dlImg/Suckale_Stephen/pc/Suckale_Stephen-1920x1080.jpg',
  },
  {
    title: 'skyboxes',
    artist: 'Julia Zabowska',
    mainImg: './img/slidesImg/thumb_600_Zabowska_ Julia-untitled.png',
    dl: './img/dlImg/Zabowska_ Julia/img.zip'
  },
  {
    title: 'all of Love and Justification as Competences',
    artist: 'Nolico Taki',
    mainImg: './img/slidesImg/slide-nolico-taki.jpg',
    dl: '/img/dlImg/Nolico_taki/dl-nolico-taki.jpg',
  },
  {
    title: "",
    artist: 'Punch Viratmalee',
    mainImg: './img/slidesImg/thumb_600_Viratmalee_Punch-untitled_01.png',
    dl: '/img/dlImg/punchViratmalee/img01.jpg'
  },
  {
    title: "",
    artist: 'Punch Viratmalee',
    mainImg: './img/slidesImg/thumb_600_Viratmalee_Punch-untitled_02.png',
    dl: '/img/dlImg/punchViratmalee/img02.jpg'
  }
];

dataLists.map((el, idx, arr) => {
  const card = document.getElementById("cardSet");
  const cardCopy = card.cloneNode(true);
  const title = cardCopy.querySelector("#artistName");
  const img = cardCopy.querySelector("#slideImg");
  const dllist = cardCopy.querySelector("#dlLink");
  const body1 = cardCopy.querySelector("#body1");
  const body2 = cardCopy.querySelector("#body2");

  let rdmIdx = Math.floor(Math.random() * arr.length);
  const rdmEl = arr[rdmIdx];
  // console.log(rdmEl);

  // adding title and artist name
  rdmEl.title !== ""
    ? (title.innerHTML = `<h1> ${rdmEl.artist}  </h1><p/>  <h2>${rdmEl.title}  </h2>`)
    : (title.innerHTML = `<h1>${rdmEl.artist}</h1>`);

  // adding images
  img.setAttribute("src", `${rdmEl.mainImg}`);
  // adding dl images
    dllist.innerHTML = `<h1><a href=${rdmEl.dl} download >download</a></h1>`;

  body1.appendChild(title);
  body1.appendChild(img);
  body2.appendChild(dllist);

  const carousel = document.querySelector(".carousel-inner");
  // document.body.appendChild(cardCopy)
  // console.log(carousel);

  carousel.insertBefore(cardCopy, carousel.children[2]);
});
