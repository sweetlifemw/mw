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

 const fakeComments = [
  "maona ngati zaboza kani ma sugar alipo",
  "This is amazing!",
  "wanditumiziradi ndalama!",
  "ambuye akudalitseni maona nagti besa!",
  "Best site ever!",
  "So interesting!",
  "mwandipulumusa ku ngongole",
  "zoonadi guys!",
  "mwabwera inuyo zili khenge.",
  "amalora kukwatira ngati",
  "Already deposited!",
  "musaphwekese zikuthekadi",
  "napeza yanga mu 2 days",
  "ndalowa lero nde zili tight",
  "ndatuma ndalama pano",
  "mulibe zokweza apa",
  "sugar mom ananditenga ku Area 18",
  "Koma site iyi ndiye yagwira",
  "ma sugar alipo enieni!",
  "Thanks to the admins!",
  "Kugwira ntchito koma ndalama zikutuluka",
  "This is real guys!",
  "I was shocked she called me!",
  "Blesser wangayo ndimufuna daily",
  "Zandisangalatsa kwambiri!",
  "Mulungu akudalitseni team sweetlife",
  "Yakhala bwenzi langa",
  "Ndipanga top-up soon",
  "pano tikudya bwino",
  "Ndilibe mawu pa site iyi",
  "Depo yokha basi",
  "Guys osadikira chonde",
  "Ndatumiza kale airtel",
  "Blesser wangayo amanditumizira daily",
  "Sugar mom wanga ali ku BT",
  "Tiyeni tichulukitse ma depo",
  "Mukufuna kusintha moyo?",
  "Zikomo sweetlife",
  "Ndapeza blesser ku mzuzu",
  "Ananditenga from TikTok",
  "Mpamba code ndayika kale",
  "Kodi ma sugar akupereka ndalama zenizeni?",
  "Ndangokwatira ndi sugar mom!",
  "Site iyi ndi ya ma serious",
  "Ndakhala ndi blesser for 3 weeks",
  "She gave me 60,000!",
  "Kudabwa ndimene amandikonda",
  "Ndikuthokoza kwambiri",
  "Munthu wake sangamve!",
  "Achita top up mawa",
  "Ndapereka details kale",
  "Ma sugar mom ambiri pa site",
  "So easy to use",
  "Munthu akugula phone yanga",
  "Anandiitana ku Blantyre",
  "Blesser wake amangopanga gift",
  "Zandichitikira nde sindinamvepo",
  "Guys ndinu ochepa pa site iyi",
  "Ali serious kwambiri",
  "Mukafuna ndipemphe nambala",
  "Ndikufuna ndikachitenso deposit",
  "Ndalowa pa group yake ya WhatsApp",
  "Amakonda anthu osachedwa",
  "Ndasintha moyo pano",
  "Zikumveka ngati movie koma ndizowona",
  "Anandiuza kuti sakufuna wandale",
  "Basi top-up ndi moyo wasintha",
  "Ndatha kusukulu chifukwa cha blesser",
  "Munthu wake amandisamalira",
  "Amakonda kukhala busy ndi ine daily",
  "Amalimbikitsa pa biz",
  "Amagula zinthu za school",
  "She’s real and rich!",
  "Blesser wanga wa Lilongwe",
  "Ndagula shoe latsopano lero",
  "She paid rent yanga",
  "Oti ndiyambe deposit mawa",
  "Koma ma sugar alipo eni",
  "Ndimalandila weekly",
  "Alipo osankha",
  "Ndine happy",
  "Muli serious people",
  "Zikomo pa guidance yanu",
  "Kufuna ndidziwe zambiri",
  "Simunatisiye pa site iyi",
  "Amayi ake andikonda kwambiri",
  "Ndakhala ndi blesser 1 month",
  "Depo yachitika",
  "She’s older but caring",
  "Blesser wake amakonda kupanga dinner",
  "Tikukondani guys",
  "Ndipeza 11k daily pano",
  "Blesser wanga akunditumizira yaitali",
  "Ndachita deactivate sugar yanga",
  "Zoonadi!",
  "Akunyenga koma ndalama akugwira",
  "Ma sugar mom akumva bwino",
  "Ndapezapo lero",
  "Pano ndikumwa Fanta ya sugar",
  "She loves privacy",
  "Blesser sanamvepo zambiri koma akutuma",
  "Zamveka bwino pano",
  "Ndikufuna kudziwa kuti blesser alipo",
  "Ndathokoza kwambiri",
  "Ndakondwa kwambiri",
  "Amakonda kukambirana daily",
  "Blesser wake amanditengera shopping",
  "She paid my fees!",
  "Sangakufune osagwiritsa ntchito site iyi",
  "Anandipasa TV!",
  "Zili bwino kwambiri!",
  "This site saved me",
  "She’s mature and generous",
  "Blesser samafuna drama",
  "Ndimangokhalabe mu love",
  "Chonde tiyeni ticheze pa group",
  "Ndapanga verify kale",
  "Admin akufunika ndalama ndithu",
  "Koma site iyi imandikhudza",
  "She checks on me daily",
  "Blesser wanga ndi civil servant",
  "He’s serious and supportive",
  "Amakonda business ideas",
  "I feel safe here",
  "Site ili smart",
  "Mukandithandiza ndikhale verified",
  "Ndagula kapu new",
  "Akamapanga top up ndiye ayankhula",
  "Sweetlife mwandipatsa chiyembekezo",
  "Blesser amanditengera ku lake",
  "Akundigulira sim card",
  "Ma blessing daily!",
  "Ndinampeza mwa nthawi",
  "Zidachitika mwachangu",
  "Ndazindikira zambiri",
  "Blesser akufuna ndikhale naye forever",
  "This app is too good",
  "Kodi sugar mom sangachoke?",
  "Ndangochita download app",
  "Pa deposit ndiye ndiyambilepo",
  "Akufuna munthu serious",
  "Blesser akufuna tikwatirane",
  "She sent 20k first day",
  "Ndayamba kupanga savings",
  "She’s a nurse",
  "Ndapemphedwa ndipatse details",
  "Zikomo sweetlife!",
  "Admin ndikufuna verify",
  "Munthu wake anditumizira daily",
  "Koma tikufunika ma tips ochulukira",
  "Blesser akufuna mwana",
  "Ma sugar mom ali pa 10 pano",
  "Amayankha fast",
  "Wangayo amandikonda ngati mwana",
  "Zosadabwitsa ndikulandira 50k",
  "Ndasintha from mzimayi wina",
  "She’s now my bae",
  "Koma chat yao yatikhuza",
  "Blesser akugula mphatso",
  "Zomwe ndikufuna pano ndi deposit",
  "Ndimamva bwino pano",
  "Pano ndikumwa tea ya sugar",
  "She asked me for shopping list",
  "Mwanayu ndi serious",
  "Akufuna story yathu ikhale real",
  "Ma sugar mom ndi osavuta pa site",
  "Ndipatseni options zina",
  "Zili pa chat yanga tsopano",
  "Admin thank you",
  "Ndimamva ngati ndikudziwa kale site iyi",
  "Ma blessers okhaokha pa site",
  "Sugar mom wanga ali ku Mzuzu",
  "Amayi ake amandikonda",
  "Zosangalatsa kwambiri!",
  "Ndasintha sim",
  "Blesser akufuna ticket",
  "Ndayamba kupanga ndalama",
  "Akuyankha bwino bwino",
  "Akundikonda kwambiri",
  "Tikupempha extension",
  "Ndipeza ndalama zambiri",
  "Akunditengera pa outing",
  "Ndachoka ku ngongole",
  "She wants serious relationship",
  "Akugula zinthu ngati palibe",
  "Anandiitana ku Joburg",
  "Akufuna ndikhale naye pa birthday",
  "Blesser wanga sangayankhe late",
  "Pano tikupanga honeymoon",
  "Zikomo, sweetlife mwatipatsa chance",
  "Blesser amandikumbutsa daily",
  "Ma sugar mom andipatsa lunch money",
  "Amakonda anthu okonda moyo",
  "Wakhala naye 3 weeks tsopano",
  "Deposit ndichita lero",
  "Site iyi ndi ya ndithu",
  "Amakoma nthawi ya usiku",
  "Blesser wanga ndiye real",
  "Zikomo kwambiri guys"
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
