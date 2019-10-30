const dataLists = [
  {
    title: "",
    artist: "Céline Amendola",
    mainImg: "./img/slidesImg/thumb_600_Amendola_Celine-untitled.png",
    dlPc: "",
    dlPhone: "./img/dlImg/Amendola_Céline/phone/amendola_Celine-untitled.jpg"
  },
  {
    title: "",
    artist: "Tewprai Bualoi",
    mainImg: "./img/slidesImg/thumb_600_Bualoi_Tewprai-SADESKTOP.png",
    dlPc: "./img/dlImg/Bualoi_Tewprai/pc/bualoi_Tewprai-SADESKTOP.jpg",
    dlPhone: ""
  },
  {
    title: "",
    artist: "Simon Buckley",
    mainImg: "./img/slidesImg/thumb_600_Buckley_Simon-untitled01.png",
    dlPc: "./img/dlImg/Buckley_Simon/pc/buckley_Simon-untitled01.jpg",
    dlPhone: ""
  },
  {
    title: "",
    artist: "Simon Buckley",
    mainImg: "./img/slidesImg/thumb_600_Buckley_Simon-untitled01.png",
    dlPc: "./img/dlImg/Buckley_Simon/pc/buckley_Simon-untitled01.jpg",
    dlPhone: ""
  },
  {
    title: "",
    artist: "Simon Buckley",
    mainImg: "./img/slidesImg/thumb_600_Buckley_Simon-untitled02.png",
    dlPc: "./img/dlImg/Buckley_Simon/pc/buckley_Simon-untitled02.jpg",
    dlPhone: ""
  },
  {
    title: "",
    artist: "Simon Buckley",
    mainImg: "./img/slidesImg/thumb_600_Buckley_Simon-untitled03.png",
    dlPc: "./img/dlImg/Buckley_Simon/pc/buckley_Simon-untitled03.jpg",
    dlPhone: ""
  },
  {
    title: "",
    artist: "Ronny Bulik",
    mainImg: "./img/slidesImg/thumb_600_Bulik_Ronny-untitled01.png",
    dlPc: "./img/dlImg/Bulik_Ronny/pc/bulik_Ronny-untitled01.png",
    dlPhone: ""
  },
  {
    title: "",
    artist: "Ronny Bulik",
    mainImg: "./img/slidesImg/thumb_600_Bulik_Ronny-untitled02.png",
    dlPc: "./img/dlImg/Bulik_Ronny/pc/bulik_Ronny-untitled02.png",
    dlPhone: ""
  },
  {
    title: "",
    artist: "Ronny Bulik",
    mainImg: "./img/slidesImg/thumb_600_Bulik_Ronny-untitled03.png",
    dlPc: "./img/dlImg/Bulik_Ronny/pc/bulik_Ronny-untitled03.png",
    dlPhone: ""
  },
  {
    title: "",
    artist: "CB Ella",
    mainImg: "./img/slidesImg/thumb_600_Ella_CB-untitled.png",
    dlPc: "./img/dlImg/CB_Ella/pc/ella_CB-untitled.jpg",
    dlPhone: ""
  },
  {
    title:
      "I have always seen the Nordic impression in my mind before I travel to Northern Europe!, 2019, Ni Haijian's (Dodo) photography",
    artist: "Jane Cheng",
    mainImg: "./img/slidesImg/thumb_600_Jane_Cheng-Nordic_Dreams_1920x1200.png",
    dlPc: "./img/dlImg/Cheng_Jane/Nordic/pc.zip",
    dlPhone: "./img/dlImg/Cheng_Jane/Nordic/phone.zip"
  },
  {
    title:
      "Between the pastoral areas, the Nagash River, which is curved in front of it, is like a silver snake, 2019, Ni Haijian's (Dodo) photography",
    artist: "Jane Cheng",
    mainImg: "./img/slidesImg/thumb_600_Jane_Cheng-Silver_Snake_1920x1200.png",
    dlPc: "./img/dlImg/Cheng_Jane/Between/pc.zip",
    dlPhone: "./img/dlImg/Cheng_Jane/Between/phone.zip"
  },
  {
    title: `The car seemed to enter the idyllic dream described by Tao Yuanming's "Peach Blossom Spring"`,
    artist: "Jane Cheng",
    mainImg: "./img/slidesImg/thumb_600_Jane_Cheng-Spring_1920x1200.png",
    dlPc: "./img/dlImg/Cheng_Jane/car/pc.zip",
    dlPhone: "./img/dlImg/Cheng_Jane/car/phone.zip"
  },
  {
    title: "",
    artist: "Anna Hoffmann",
    mainImg: "./img/slidesImg/Hofmann_Anna-untitled01.jpg",
    dlPc: "./img/dlImg/Hofmann_Anna/pc/Hofmann_Anna-untitled01.jpg",
    dlPhone: ""
  },
  {
    title: "Bitter Scent",
    artist: "Daniela KneipVelescu",
    mainImg: "./img/slidesImg/thumb_600_KneipVelescu_BitterScent.png",
    dlPc: "./img/dlImg/KneipVelescu_Daniela/pc.zip",
    dlPhone: "./img/dlImg/KneipVelescu_Daniela/phone.zip"
  },
  {
    title: `Wen-Ching, “1, 2, 3”..`,
    artist: "Pam Virada",
    mainImg: "./img/slidesImg/thumb_600_PamVirada-untitled.png",
    dlPc: "./img/dlImg/Virada_Pam/pc/PamVirada.jpg",
    dlPhone: ""
  },
  {
    title: "",
    artist: "PurePropaganda",
    mainImg: "./img/slidesImg/thumb_600_PurePropaganda.png",
    dlPc: "./img/dlImg/PurePropaganda/pc/PurePropaganda.jpg",
    dlPhone: ""
  },
  {
    title: "",
    artist: "Sathit Sattarasart",
    mainImg: "./img/slidesImg/thumb_600_Sattarasart_Sathit-untitled01.png",
    dlPc: "./img/dlImg/Sattarasart_Sathit/pc/Sattarasart_Sathit-untitled01.jpg",
    dlPhone: ""
  },
  {
    title: "",
    artist: "Sathit Sattarasart",
    mainImg: "./img/slidesImg/thumb_600_Sattarasart_Sathit-untitled02.png",
    dlPc: "./img/dlImg/Sattarasart_Sathit/pc/Sattarasart_Sathit-untitled02.jpg",
    dlPhone: ""
  },
  {
    title: "",
    artist: "Sathit Sattarasart",
    mainImg: "./img/slidesImg/thumb_600_Sattarasart_Sathit-untitled03.png",
    dlPc: "./img/dlImg/Sattarasart_Sathit/pc/Sattarasart_Sathit-untitled03.jpg",
    dlPhone: ""
  },
  {
    title: "Untitled (CHF 200)",
    artist: "Laura Schawelka",
    mainImg: "./img/slidesImg/thumb_600_Schawelka_Laura-untitled01.png",
    dlPc: "",
    dlPhone: "./img/dlImg/Schawelka_Laura/phone/Schawelka_Laura-untitled01.jpg"
  },
  {
    title: "Untitled (CHF 10)",
    artist: "Laura Schawelka",
    mainImg: "./img/slidesImg/thumb_600_Schawelka_Laura-untitled02.png",
    dlPc: "",
    dlPhone: "./img/dlImg"
  },
  {
    title: "",
    artist: "Stephen Suckale",
    mainImg: "./img/slidesImg/thumb_600_Stephen_Suckale.png",
    dlPc: "./img/dlImg/Suckale_Stephen/pc/Suckale_Stephen-1920x1080.jpg",
    dlPhone: ""
  },
  {
    title: "skyboxes",
    artist: "Julia Zabowska",
    mainImg: "./img/slidesImg/thumb_600_Zabowska_ Julia-untitled.png",
    dlPc: "./img/dlImg/Zabowska_ Julia/pc.zip",
    dlPhone: "./img/dlImg/Zabowska_ Julia/phone.zip"
  },
  {
    title: "all of Love and Justification as Competences",
    artist: "Nolico Taki",
    mainImg: "./img/slidesImg/slide-nolico-taki.jpg",
    dlPc: "/img/dlImg/Nolico_taki/dl-nolico-taki.jpg",
    dlPhone: ""
  }
];

const randomCards = () => {
  const rdmIdx = Math.floor(Math.random() * dataLists.length);
  const rdmEl = dataLists[rdmIdx];

  const card = document.getElementById("cardSet");
  const cardCopy = card.cloneNode(true);
  const title = cardCopy.querySelector("#artistName");
  const img = cardCopy.querySelector("#slideImg");
  const dllist = cardCopy.querySelector("#dlLink");
  const body1 = cardCopy.querySelector("#body1");
  const body2 = cardCopy.querySelector("#body2");

  // adding title and artist name
  rdmEl.title !== ""
    ? (title.innerHTML = `<h1> ${rdmEl.artist}  </h1><p/>  <h2>${rdmEl.title}  </h2>`)
    : (title.innerHTML = `<h1>${rdmEl.artist}</h1>`);

  // adding images
  img.setAttribute("src", `${rdmEl.mainImg}`);
  // adding dl images
  rdmEl.dlPc !== "" && rdmEl.dlPhone !== ""
    ? (dllist.innerHTML = `<h1><a href=${rdmEl.dlPc} download>DL(PC)</a> <a href=${rdmEl.dlPhone} download>DL(smartPhone)</a></h1>`)
    : rdmEl.dlPc === ""
    ? (dllist.innerHTML = `<h1><a href=${rdmEl.dlPhone} download>DL(smartPhone)</a></h1>`)
    : (dllist.innerHTML = `<h1><a href=${rdmEl.dlPc} download>DL(PC)</a></h1>`);

  body1.appendChild(title);
  body1.appendChild(img);
  body2.appendChild(dllist);

  const carousel = document.querySelector(".carousel-inner");
  carousel.insertBefore(cardCopy, carousel.children[]);
};

const button = document.querySelector("#click");
button.onclick = randomCards;

