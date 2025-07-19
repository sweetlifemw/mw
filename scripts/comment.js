document.addEventListener("DOMContentLoaded", () => {
  const names = [
  "Chikondi", "Thokozani", "Blessings", "Tamara", "Limbani", "Mphatso", "Tiwonge", "Chimwemwe", "Yamikani", "Fatsani",
  "Zione", "Precious", "Dalitso", "Tadala", "Mayeso", "Alinafe", "Wiza", "Chifundo", "Memory", "Pilirani",
  "Hope", "Inno", "Madalitso", "Bright", "Misheck", "Thandiwe", "Modester", "Watipaso", "Tisungane", "Gloria",
  "Aubrey", "Tapiwa", "Levison", "Tiyamike", "Linda", "Shadreck", "Esnart", "Julita", "Charles", "Prisca",
  "Patience", "Lyness", "Hopewell", "Mirriam", "Martha", "Catherine", "Felix", "Kennedy", "Bertha", "Florence",
  "Agnes", "Beatrice", "Harrison", "Doreen", "Benedicto", "Kelvin", "Zebron", "Eunice", "Isaac", "Lovemore",
  "Joseph", "Rodrick", "Gift", "Jonathan", "Greystone", "Happy", "Vinjeru", "Chikumbutso", "Mercy", "Kondwani",
  "Bentry", "Tawonga", "Fanny", "Elina", "Ruth", "Gladys", "Raphael", "Godfrey", "Moses", "Jennipher",
  "Esau", "Edward", "Steven", "Lilian", "Victoria", "Benedict", "Dan", "Luka", "Elias", "Madalena",
  "Peter", "Nicollete", "Elijah", "Enock", "Samson", "Gerald", "Esther", "Judith", "Brenda", "Daniel"
];

const comments = [
  "Maona ngati zaboza, koma zachitika", "This is real!", "Wanditumizira ndalama!", "Zikomo kwambiri!", "Ndikudabwa nazo",
  "Ambuye akudalitseni", "Basi zili khenge pano", "Ndapeza zomwe ndimafuna", "Sindingachitire underestimate", "Zoonadi zimayenda",
  "Ndangodabwa, osayiwala!", "Zikomo kwa inu!", "Ndangopanga deposit lero", "Mwaitha guys!", "Zimayenda izi",
  "Ndikuyamika kwambiri", "Kodi anthu amakwaniradi izi?", "Zikomo chifukwa cha platform iyi", "Mwandipatsa hope", "Ndapeza mtendere",
  "Ndakhutira nazo", "Sindinganame, zili bho", "Kodi ndilota?", "Zikuchitika chenicheni", "Ndimangoyang'ana ndi chikhulupiliro",
  "Ndakhutira mpaka pano", "Inu nde simunama", "Ndapeza zomwe ndimafuna", "Wandipatsa moyo watsopano", "Chikondi chenicheni ichi",
  "Amalora kupanga zinthu bwino", "Zoonadi zimachitika", "Sindinachite regret", "Zangodabwitsa", "Ndilibe mawu",
  "Ndikukonda zimenezi", "Zingakhale bwanji", "Wow, inu nde zoona", "Ndimva bwino kwambiri", "Ndalandira chithandizo",
  "Ndazindikira zambiri", "Ndazungulitsidwa mtima", "Ndine wokondwa kwambiri", "Sizabodza izi", "Zikuyenda bwino",
  "Ndaganiza bwino kudalira", "Ndatha kukhulupirira", "Ndikudziwa pano kuti zonse zili bwino", "Ndapeza anzanga", "Simunamedi",
  "Zabwino zonse", "Ndikupemphera zizayendere", "Zikomo kwambiri", "Ndapeza support", "Kodi ndimalota?",
  "Ndakhutira!", "Ndikufuna kupitiliza kugwiritsa ntchito izi", "Mwapangitsa moyo wanga kukhala bwino", "Zili bwino",
  "Ndi bwino kwambiri", "Wow, simukamba zabodza", "Ndimakukondani!", "Zomwe ndimafuna ndiyezi", "Koma mwachita bwino",
  "Sindingakwanitse kuyamika mokwanira", "Zinthu zabwino zimachitika", "Ndine wokondwa", "Yambani nazo", "Zakhala bwino kwambiri",
  "Chabwino chonse", "Izi nde zamveka", "Ndiwathokoza kwambiri", "Ndakondwa", "Sindinamvepo zambiri ngati izi",
  "Ndikupita patsogolo", "Ndakhala bwino", "Ndine wokhulupirira kwambiri", "Ndine wokoma mtima chifukwa cha izi", "Mwaitha",
  "Ndine wokondwa kuposa kale", "Zabwino zonse kwa inu", "Moyo wanga wasintha", "Ndamva bwino kwambiri", "Ziliko bwino kwambiri",
  "Ndapeza zomwe ndimakhumbira", "Simunalephere", "Ndakhala osiyana", "Ndikuyembekezera zambiri", "Zikomo kwambiri mwa inu",
  "Ndakhala wokwanira", "Pano zinthu zatheka", "Simunachite manyazi", "Ndakondwa nazo", "Ndi ntchito yabwino kwambiri",
  "Ndikufuna kuzitsatira nthawi zonse", "Ndikuthokoza", "Ndine wosangalala", "Ndakhala wopambana", "Mwaitha kwambiri",
  "Ndalandira zambiri", "Zimandisangalatsa", "Ndimveradi bwino", "Mwaika mphamvu zambiri", "Zili bwino kwambiri",
  "Zandipindulitsa", "Sindinachite manyazi", "Ndaganiza bwino", "Zandilimbikitsa", "Ndakhala wosiyana",
  "Moyo wanga wasintha kwambiri", "Sindingakane", "Ndakondwa kwambiri", "Zikomo ambuye", "Ndikupempha nditani",
  "Ndatha kulankhula", "Zabwino izi", "Ndine wokoma mtima", "Mwaika zonse bwino", "Ndine wokondwa kwambiri",
  "Mwandikumbutsa zomwe ndinali nazo", "Ndakhala ndi chisomo", "Simukamba zabodza", "Ndimadabwa nazo", "Ndili bwino",
  "Mwaonetseradi chikondi", "Ndapeza mtendere weniweni", "Ndipo mwandithandiza", "Simunachite manyazi", "Ndakhala m'gulu labwino",
  "Ndikufuna kuyambiranso", "Ndikufuna kuwonjezera", "Ndine watsopano", "Ndazindikira zinthu zambiri", "Ndapita patsogolo",
  "Ndiyamika kwambiri", "Kodi mwaziwona zimenezi", "Ndakhala ndi mphamvu", "Ndakonda kwambiri", "Ndimadziwa kuti zikuyenda",
  "Ndikukhulupirira", "Mwaitha mwaamba", "Ndili bwino pano", "Ndiyamika kwambiri inu", "Ndagwira ntchito",
  "Ndakhala m'moyo watsopano", "Ndine mwana wabwino", "Ndikufuna kuchita zambiri", "Ndapeza anthu abwino", "Ndine wa m'tsogolo",
  "Ndakhala ndi chidaliro", "Zabwino zonse!", "Zindithandiza kwambiri", "Sindinachite manyazi nazo", "Zakhala bwino kwambili",
  "Zomwe ndikuyembekezera zatheka", "Ndikupemphani mupitirize", "Ndakhala bwino kuposa kale", "Mwaitha kwambiri!",
  "Ndachita bwino kuzimvera", "Ndikuyamika", "Zikomo komanso zikomo", "Zikuyenda bwino kwambiri", "Zandikwanira",
  "Zomwe ndinali nazo, mwazipangitsa kukhala bwino", "Ndine wa m'mawa", "Ndikufunirani zabwino zonse", "Ndakondwa nazo", "Zandisangalatsa",
  "Ndikufuna kugwiritsa ntchito izi nthawi zonse", "Ndakhala munthu watsopano", "Ndazindikira mphamvu", "Ndakhala osiyana ndi kale",
  "Mwandikwaniritsa", "Ndikufuna kugwiritsa ntchito izi tsiku ndi tsiku", "Zandithandiza kwambiri", "Ndikufuna kuyamba lero",
  "Ndakondwa kuposa kale", "Ndine wa m'tsogolo", "Ndikufuna kutsatira izi nthawi zonse", "Ndakhala wabwino", "Zili bwino",
  "Ndakhala bwino kuposa kale", "Zinthu zitheka", "Ndikufuna kuyamika", "Ndine osiyana", "Ndakhala ndi mtendere"
];


  const timeOptions = ["Now", "1 min ago", "2 mins ago", "3 mins ago", "5 mins ago", "Just now"];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function generateComments() {
    const container = document.getElementById("commentSection");
    if (!container) return;
    container.innerHTML = "";

    for (let i = 0; i < 10; i++) {
      const name = names[getRandomInt(names.length)];
      const comment = fakeComments[getRandomInt(fakeComments.length)];
      const time = timeOptions[getRandomInt(timeOptions.length)];

      const commentElement = document.createElement("div");
      commentElement.className = "testimony";
      commentElement.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="comment-icon" alt="icon" />
        <div class="comment-content">
          <div class="comment-left">
            <div class="comment-name">${name}</div>
            <div class="comment-text">${comment}</div>
          </div>
          <div class="comment-time">${time}</div>
        </div>
      `;

      container.appendChild(commentElement);
    }
  }

  generateComments();

  // Popup logic
  window.showMoneyPopup = function () {
    const popup = document.getElementById("moneyPopup");
    if (popup) popup.style.display = "flex";
  };

  window.closePopup = function () {
    const popup = document.getElementById("moneyPopup");
    if (popup) popup.style.display = "none";
  };

  window.goToAccount = function () {
    window.location.href = "./account.html";
  };
});
