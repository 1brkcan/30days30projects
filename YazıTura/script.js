//! Tura ve Yazı sayılarını oluşturma

let tura = 0;
let yazi = 0;

//! Coin, Flip ve reset butonu seçme

let coin = document.querySelector('#coin');
let flipBtn = document.querySelector('#flip-button');
let resetBtn = document.querySelector('#reset-button');

//! Flip butonuna tıklanıldığında

flipBtn.addEventListener('click', () => {
    //? rastgele 0 ve 1 sayisini secer
    let i = Math.floor(Math.random() * 2);

    //? Coin animasyonunu gecici olarak kapat
    coin.style.animation = 'none';

    if(i){
        //? Eger i 1 ise (yazi) 100 ms sonra coin'e flip-tura animasyonunu uygula

        setTimeout(() => {
            coin.style.animation = 'spin-tura 3s forwards';
        }, 100)
        tura++;
    }else{
        //? Eger i 0 ise (tura) 100 ms sonra coin'e spin-yazi animasyonunu uygula
        setTimeout(() => {
            coin.style.animation = 'spin-yazi 3s forwards';
        }, 100);
        yazi++;
    }

    //? Istatistikleri guncelle ve butonu devre disi birak

    setTimeout(updatesStats, 3000);
    disableButton();

});

//! Istatistikleri guncelleme fonksiyonu

function updatesStats(){
    document.querySelector('#tura-count').textContent = `Tura = ${tura}`;
    document.querySelector('#yazi-count').textContent = `Yazı = ${yazi}`;

};

//! Firlat butonu gecici olarak devre disi birakilir

function disableButton(){
    flipBtn.disabled = true;
    setTimeout(() => {
        flipBtn.disabled = false;
    }, 3000);
};

//! Reset butonuna tiklama
resetBtn.addEventListener('click', () => {
    //? Coin animasyonunu kapat, tura ve yazi sayilarini sifirla ve istatistikleri guncelle

    coin.style.animation = 'none';
    tura = 0;
    yazi = 0;

    updatesStats();

})










