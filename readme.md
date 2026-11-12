# Projektin nimi

**Tekijä(t):** Henrik Heiskanen / Jani Skogster

## Projektisuunnitelma

### Projektin idea

Musiikki Info on verkkosovellus, jonka avulla käyttäjä voi hakea tietoa eri artisteista ja heidän albumeistaan. Sovellus käyttää Last.fm API tiedon hakemiseen ja näyttää käyttäjälle artistien albumit, albumikuvat sekä albumien kappaleet.

Sovellus on tarkoitettu musiikista kiinnostuneille käyttäjille, jotka haluavat helposti löytää tietoa artisteista ja heidän musiikistaan.

### Suunnitellut toiminnot

Listaa vähintään kolme sovellukseesi suunniteltua toimintoa:

- Käyttäjä voi hakea artisteja hakukentän avulla.
- Sovellus näyttää artistin albumit, albumikuvat ja perustiedot.
- Käyttäjä voi avata albumin ja nähdä sen kappalelistan.


### Rautalankamalli / luonnos

Lisää tähän kuva käsin piirtämästäsi tai digitaalisesti tehdystä sovelluksen luonnoksesta. Luonnoksessa tulee näkyä sovelluksen pääasiallinen näkymä ja tärkeimmät elementit.

Esimerkki kuvan lisäämisestä:

![Rautalankamalli](img/Rautalankamalli0.png)

## Verkkolinkit

- **Julkaistu sovellus:** [Lisää tähän GitHub Pages -osoite](https://henrikh0.github.io/Projekti_2a_Ajax_sovellus/)
- **GitHub-repositorio:** [Lisää tähän repositorion osoite](https://github.com/HenrikH0/Projekti_2a_Ajax_sovellus)
- **Netlifly sovellus** https://projekti-2a-musiikkisivu0.netlify.app

## Tietoja sovelluksesta

Musiikki Info on verkkosovellus, joka tarjoaa käyttäjälle tietoa artisteista ja heidän albumeistaan. Käyttäjä voi kirjoittaa artistin nimen hakukenttään, jonka jälkeen sovellus hakee tiedot Last.fm API avulla.

Sovellus näyttää artistin albumit korttimuodossa sisältäen albumin nimen, kuvan ja artistin tiedot. Käyttäjä voi myös avata albumin kappaleet ja nähdä sen sisältämät biisit.

Sovelluksen tavoitteena on tarjota helppo tapa tutkia musiikkia selkeän käyttöliittymän avulla.

## Teknologiat

- HTML – sivun rakenne ja sovelluksen elementit.
- CSS – käyttöliittymän ulkoasu, responsiivinen asettelu ja albumikorttien suunnittelu.
- JavaScript – sovelluksen toiminnallisuus, API-kutsut, JSON-datan käsittely ja DOM-elementtien luominen.
- Last.fm API – artistien, albumien ja kappaleiden tietojen hakeminen JSON-muodossa.

## Sovelluksen käyttö

1. Avaa julkaistu sovellus yllä olevasta linkistä.
2. Kirjoita hakukenttään haluamasi artistin nimi.
3. Paina Search-painiketta.
4. Tarkastele artistin albumeita ja albumikuvia.
5. Paina "Show songs" -painiketta nähdäksesi albumin kappaleet.

## Sovelluksen käynnistäminen paikallisesti

1. Kloonaa tai lataa projektin repositorio omalle koneellesi.
2. Avaa projektikansio Visual Studio Codessa.
3. Avaa index.html selaimessa tai käytä Live Server -laajennusta.
4. Sovellus hakee musiikkitiedot Last.fm API kautta.

## Kuvakaappaukset

Esimerkki kuvan lisäämisestä:

![Kuvakaappaus sovelluksen etusivusta](img/Etusivu.png)
![Kuvakaappaus sovelluksen Albumeista](img/Albumit.png)

## Tunnetut virheet / puutteet

**Ei tunnettuja virheitä.**

## Työn jakautuminen

- Henrik Heiskanen 1: CSS, Rautalankamallin tekeminen. README.md tiedostoa yhdessä tehtiin.
- Jani Skogster 2: HTML, JavaScriptin tekeminen. README.md tiedostoa yhdessä.

## Oma arvio ja oppimisen reflektointi

Projektin aikana opimme paremmin käyttämään JavaScriptiä API-datan hakemiseen ja käsittelemiseen.
Onnistuimme mielestämme hyvin sovelluksen perustoimintojen toteuttamisessa. Haastavinta oli API käyttö, koska datan rakenne ja mahdolliset virheet piti huomioida koodissa.
Oma arvio projektista: **6/10 pistettä**

## Lähteet ja kiitokset

- Last.fm API Documentation
https://www.last.fm/api
- Last.fm API käyttäminen JSON-datan hakemiseen
- Käytetty tekoälytyökalu: ChatGPT
- Tekoälyä käytettiin ongelmanratkaisussa, JavaScript-koodin tarkistamisessa sekä API-toimintojen suunnittelun tukena.

  ## Lisenssi

Tämä projekti on lisensoitu MIT-lisenssillä.

Lisätietoa lisenssin lisäämisestä GitHub-projektiin:
https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository