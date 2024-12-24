# Muistiinpanosovellus

Tämä on muistiinpanosovellus, jonka avulla käyttäjä voi hallita kurssikohtaisia muistiinpanoja. Sovellus tarjoaa mahdollisuuden lisätä, poistaa ja tarkastella muistiinpanoja.

## Ohjelman toiminta

- Käyttäjä voi valita kurssin ja lisätä siihen liittyviä muistiinpanoja.
- Istuntokohtaiset muistiinpanot näkyvät erikseen ja tyhjentyvät aina, kun aloitetaan uusi istunto.
- Muistiinpanoja voi poistaa yksitellen.
- Sovellus käyttää **Zustand**-kirjastoa tilanhallintaan ja **Reactia** käyttöliittymän toteuttamiseen.

## Kehitysversion käynnistäminen

1. **Asennus:**
   Lataa riippuvuudet suorittamalla seuraava komento projektin juurikansiossa:

   - npm install

2. **Käynnistä kehityspalvelin**
   Aja seuraava komento:

   - npm run dev

3. **Käyttö**
   Avaa selain ja siirry osoitteeseen:
   - http://localhost:5173

### NodeJS-versio

Sovellus on kehitetty ja testattu NodeJS-versiolla 23.4.0

## Keinoälyn käyttö projektissa

Projektin aikana käytettiin keinoälyä seuraavilla tavoilla:

- **Suunnittelu:** Hyödynsin keinoälyä ehdotusten saamisessa sovelluksen rakenteesta ja ominaisuuksien toteutuksesta.
- **Koodi:** Käytin keinoälyä apuna koodin kirjoittamisessa, erityisesti komponenttien uudelleenjärjestämisessä, tilanhallinnan suunnittelussa ja käyttöliittymän optimoinnissa.
- **Oppiminen:** Opin Reactin ja Zustandin käytön osittain keinoälyn tarjoamien esimerkkien ja ohjeiden avulla.
- **Lopputulos:** Suurin osa koodista on kirjoitettu itse, mutta keinoäly tarjosi ohjeita ja nopeutti oppimisprosessia.

### Esimerkkejä keinoälyn käytöstä

- **Yleinen suunnittelu:** Keinoäly auttoi suunnittelussa ja neuvoi miten komponentit kannattaisi jakaa.
- **Tilanhallinta:** Sain tukea Zustand-kirjaston käyttöönotossa ja sen ominaisuuksien hyödyntämisessä.
- **Bugit:** Keinoäly auttoi tunnistamaan ja korjaamaan virheitä, kuten tekstin katkaiseminen `NoteItem`-komponentissa.

## Lisenssi

Mikäli haluat käyttää tätä projektia tai sen osia, pyydä käyttölupaa projektin tekijältä.
