//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<176.232.59.222>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
const myIp = axios.get("https://apis.ergineer.com/ipgeoapi/95.12.126.189");
console.log(myIp);
//   <div class="card">
//   <img src={ülke bayrağı url} />
//   <div class="card-info">
// 	  <h3 class="ip">{ip adresi}</h3>
// 	  <p class="ulke">{ülke bilgisi (ülke kodu)}</p>
// 	  <p>Enlem: {enlem} Boylam: {boylam}</p>
// 	  <p>Şehir: {şehir}</p>
// 	  <p>Saat dilimi: {saat dilimi}</p>
// 	  <p>Para birimi: {para birimi}</p>
// 	  <p>ISP: {isp}</p>
//   </div>
//   </div>
const cardsElement = document.querySelector(".cards");
const ipBilgileri = (object) => {
  const cardElement = document.createElement("div");
  const imgElement = document.createElement("img");
  const cardInfoElement = document.createElement("div");
  const h3Element = document.createElement("h3");
  const ulkeElement = document.createElement("p");
  const enlemElement = document.createElement("p");
  const sehirElement = document.createElement("p");
  const saatElement = document.createElement("p");
  const paraElement = document.createElement("p");
  const ispElement = document.createElement("p");
  cardElement.setAttribute("class", "card");
  cardInfoElement.setAttribute("class", "card-info");
  h3Element.setAttribute("class", "ip");
  ulkeElement.setAttribute("class", "ulke");
  cardElement.appendChild(imgElement);
  cardElement.appendChild(cardInfoElement);
  cardInfoElement.append(
    h3Element,
    ulkeElement,
    enlemElement,
    sehirElement,
    saatElement,
    paraElement,
    ispElement
  );
  imgElement.src = object.ülkebayrağı;

  h3Element.textContent = `${object.sorgu}`;
  ulkeElement.textContent = `${object?.ülke} ${object.ülkeKodu}`;
  enlemElement.textContent = `Enlem: ${object.enlem}  Boylam: ${object.boylam}`;
  sehirElement.textContent = `Şehir ${object.şehir}`;
  saatElement.textContent = `Saat Dilimi: ${object.saatdilimi}`;
  paraElement.textContent = `Para Birimi: ${object.parabirimi}`;
  ispElement.textContent = `Isp: ${object.isp}`;
  return cardElement;
};

const ipInfo = async function () {
  await ipAdresimiAl();
  axios
    .get("https://apis.ergineer.com/ipgeoapi/" + benimIP)

    .then(function (response) {
      cardsElement.appendChild(ipBilgileri(response.data));
    })
    .catch(function () {
      console.log("error");
    });
};
ipInfo();
