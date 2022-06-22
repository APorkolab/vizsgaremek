# Teljes dokumentáció és user storyk a FaMoBase v.1.0.0. nevű programhoz

## **0. Az alkalmazás célja**
- Az alkalmazás feladata, hogy egy család (jelen esetben a fiktív Kovátsék és népes rokonságuk) filmnézési adatait nyilvántartsa és kezelje. A program jelen állapotában alkalmas a megnézendő és a megnézett filmek nyilvántartására, valamint a kedvenc rendezők és főszereplők adatainak tárolására.
- Az alkalmazás megkönnyíti a filmnézés megszervezését és a családtagok kedvenc műfajai szerinti válogatást is.

# Felhasználók és rendszergazdák számára készített dokumentáció - FaMoBase v.1.0

## **1. Az alkalmazás telepítése**

1. Ha nincs telepítve a Git verziókezelő szoftver, akkor a https://git-scm.com weboldalról töltsük le és telepítsük fel a főoldalon megtalálható változatok közül az operációs rendszerünknek megfelelőt.

2. Ha nincs telepítve a NodeJS futtatókörnyezet, akkor a https://nodejs.org/en/ weboldalról töltsük le és telepítsük fel a főoldalon található, "LTS" megjelölésű változatot.

3. Ha nincs telepítve az Angular keretrendszer a rendszeren, akkor azt a PowerShell-ben kiadott `npm i -g @angular/cli` paranccsal ezt tegyük meg.

4. Ha nincs telepítve a Docker konténerizációs szoftver, akkor a https://docs.docker.com/get-docker/ weboldalról töltsük le és telepítsük fel az operációs rendszerünknek megfelelő változatot.

5. Le kell klónozni az adott GitHub repository tartalmát. Tehát a PowerShell-ben a következő parancsot kell kiadni:

   `git clone https://github.com/APorkolab/vizsgaremek.git`

6. Telepíteni kell az alkalmazás függőségeit:

   - Backend

     - A terminálon be kell lépni a /backend mappába (`cd backend`) és futtatni az `npm i` parancsot.

   - Frontend
     - A terminálon be kell lépni a /frontend mappába és futtatni az `npm install --force` VAGY a `npm install --legacy-peer-deps` parancsot.
     - **FIGYELEM! Az "angular-feather" kiegészítő miatt a _frontend mappában_ "sima" `npm install` parancs nem használható!**

7.1. Manuális telepítés esetén:

   - A terminálban ki kell adni az `ng build` parancsot.

   - A /frontend/dist/frontend mappa tartalmát be kell másolni a /backend/public mappába.

   VAGY

7.2. Automatikus telepítés esetén:

   - A terminálon be kell lépni a /backend mappába és futtatni az `npm run build` parancsot.
   - Fontos, hogy csak az egyik módszer szerint kell telepíteni.

## **2. Az alkalmazás konfigurálása**

- A _/frontend/environments_ mappában be kell állítani az API végpont elérési útvonalát:

  - _environment.ts_ állomány: http://127.0.0.1:3000/
  - _environment.prod.ts_ állomány: http://localhost:3000/

## **3. Az alkalmazás indítása**

- Mind a backend, mind a frontend az `npm start` paranccsal indítható.
- Ha telepítve van Docker alkalmazás, akkor a következőképpen is el lehet indítani a FaMoBase v.1.0.0-t:

1. El kell indítani a Docker Desktop alkalmazást.
2. A /backend mappába belépve a terminálban ki kell adni az `npm run dev` parancsot.

_Megjegyzés_:  
A belépéshez egy érvényes e-mail-cím és jelszó páros (példa):

| E-mail              | Jelszó           | Szerepkör szintje         |
| ------------------- | ---------------- | ------------------------- |
| hkubiak2f@nps.gov   | aqqwetgI6JcVnPRz | Felhasználó (1)           |
| chunting0@tiny.cc   | aqqwetvO81NT     | Archivátor/Szerkesztő (2) |
| rdurnan4@eepurl.com | aqqweHzfNxB1     | Adminisztrátor (3)        |

# User storyk - FaMoBase v.1.0

Jelen alkalmazás a **FaMoBase v.1.0** (**Fa**mily **Mo**vie Data**base** - családi filmadatbázis), melynek fő célja, hogy egy család (jelen esetben a Kovátsék) filmnézéseit nyilvántartsák.

A felhasználók esetében szerepkörök is vannak a profiljukhoz rendelve: a programban - alapesetben - csak az anya és az apa rendelkeznek filmlétrehozási és törlési joggal a teljes adatbázisban, a gyerekek szerkeszthetik a már meglevő NoSQL dokumentumokat (a már megnézett filmek és az összes film adatait) illetve láthatják a már felvitt dokumentumokat, míg a távolabbi rokonoknak (pl.: nagybácsi, nagynéni) csak megtekintési joguk van.

A program főbb funkciói szerint képes a már megnézett filmeket és a tervezett filmeket is számon tartani. Emellett a filmek főszereplőit és rendezőit is tárolja.

|                                         | Adminisztrátori szerepkör                                                                    | Archivátor/Szerkesztő szerepkör                                                                                                        | Felhasználói szerepkör                                                                                             |
| --------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Adatbázisban rögzített értékük ("role") | 3                                                                                            | 2                                                                                                                                      | 1                                                                                                                  |
| Jogaik                                  | Minden táblázatot megtekinthet, és bármely entitást létrehozhat, szerkeszthet vagy törölhet. | A családtagok kivételével minden táblázatot megtekinthet, és bármelyiket szerkesztheti, de nem hozhat létre vagy törölhet entitásokat. | A családtagok kivételével minden táblát megtekinthet, de nem hozhat létre, szerkeszthet vagy törölhet entitásokat. |

## 1. Főoldal

| Funkció neve    | Tervezett funkció leírása:                                                                                                                  | Adminisztrátori szerepkör esetén a tervezett működés leírása | Archivátor/Szerkesztő szerepkör esetén a tervezett működés leírása | Felhasználói szerepkör esetén a tervezett működés leírása |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------ | --------------------------------------------------------- |
| Belépési form   | A felhasználó authorizációja és authentikációja megtörténik.                                                                                    | Valamennyi szerepkör esetén azonos működés.                  | Valamennyi szerepkör esetén azonos működés.                        | Valamennyi szerepkör esetén azonos működés.               |
| Üdvözlőképernyő | A felhasználó megismerkedik a FaMoBase program logójával és a program alapvető designjével, majd továbbhaladhat a főbb programfelületre.        | Valamennyi szerepkör esetén azonos működés.                  | Valamennyi szerepkör esetén azonos működés.                        | Valamennyi szerepkör esetén azonos működés.               |
| Fejléc          | Tájékoztatja a felhasználót a jogairól és megjeleníti a rögzített neve. Egy gomb segítségével lehetővé teszi a kijelentést és a bejelentkezést. | Valamennyi szerepkör esetén azonos működés.                  | Valamennyi szerepkör esetén azonos működés.                        | Valamennyi szerepkör esetén azonos működés.               |
| Oldalsáv        | A felhasználó az oldalsávon elérheti az összes oldalt.                                                                                          | Valamennyi oldal elérhető.                                   | A családtagok listáján kívül valamennyi oldal elérhető.            | A családtagok listáján kívül valamennyi oldal elérhető.   |
| Lábléc          | A felhasználók copyright információkat kaphatnak.                                                                                               | Valamennyi szerepkör esetén azonos működés.                  | Valamennyi szerepkör esetén azonos működés.                        | Valamennyi szerepkör esetén azonos működés.               |

## 2-5. A megnézni tervezett filmek adatbázisa, a megnézett filmek adatbázisa, a rendezők adatbázisa, a főszereplők adatbázisának funkciói.

| Funkció neve                                                              | Tervezett funkció leírása:                                                                                                                                                                                                                                                                                                                                                     | Felhasználói szerepkör esetén a tervezett működés leírása    | Archivátor/Szerkesztő szerepkör esetén a tervezett működés leírása | Adminisztrátori szerepkör esetén a tervezett működés leírása                  |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Listázás                                                                  | A bejelentkezés után, a főoldalról való továbbkattintás után a program megjeleníti az összes, adatbázisba rögzített elemet, emellett az elemek utolsó oszlopában a szerkesztésre szolgáló gombok vannak, melyek lehetővé teszik az adatok módosítását. A program lapozófunkcióval van ellátva, tehát csak meghatározott számú entitást jelenít meg egyszerre.                      | Valamennyi, belépett felhasználó meg tudja nézni (role >=1). | Valamennyi, belépett felhasználó meg tudja nézni (role >=1).       | Valamennyi, belépett felhasználó meg tudja nézni (role >=1).                  |
| Folyamatos adatvalidáció az adatszerkesztés és új elem létrehozása közben | A felvett adatok helyességének ellenőrzése automatikusan megtörténik. A program nem engedélyezi a nem megfelelő adatok adatbázisba rögzítését. Hibaüzenet jelzi, amennyiben a bevitt adatok formátuma hibás. A hibaüzenet tartalmazza azt, hogy mi a megfelelő formátum.                                                                                                           | A szerepkör nem tartalmaz szerkesztési jogot.                | Valamennyi szerepkör esetén azonos működés.                        | Valamennyi szerepkör esetén azonos működés.                                   |
| Adott elem módosítása                                                     | A listázott elemek közül a szerkesztési gombra kattintás után egy form jelenik meg, ahol (a belső ID-számot kivéve) valamennyi tulajdonság szerkeszthető. A form validálva van, tehát érvénytelen adatot nem lehet az adatbázisba küldeni. Az oldalon lehetőség van arra, hogy az összes entitást listázó oldalra navigáljon vissza az alkalmazás.                                 | Nem tud szerkeszteni.                                        | Tud módosítani (role>=2).                                          | Tud módosítani (role>=2).                                                     |
| Adott elem törlése                                                        | A listázott elemek közül a törlés gombra kattintás után egy megerősítő ablak jelenik meg, majd jóváhagyás után az adott elem törlődik. A törlés gombra kattintással megerősítő ablak ugrik fel, melyen elvethető a téves törlés. A megerősítő üzenet jóváhagyásával a film törölhető az adatbázisból. A törlést követően frissül a listaoldal, ahol a már törölt film nem látható. | Nem tud törölni.                                             | Tud törölni (role>=2) .                                            | Tud törölni (role>=2).                                                        |
| Új elem hozzáadása                                                        | A táblázat felett egy zöld, "Add a new..." feliratú gomb jelenik meg, amira rákattintva új form nyílik meg, ahol az új entitás adatai beírhatók. A form validálva van, tehát érvénytelen adatot nem lehet az adatbázisba küldeni. Az oldalon lehetőség van arra, hogy az összes elemet listázó oldalra navigáljon vissza az alkalmazás.                                            | Nem tud új elemet hozzáadni.                                 | Nem tud új elemet hozzáadni.                                       | Az új elemek hozzáadását csupán adminisztrátorok (role = 3) hajthatják végre. |
| Kulcsszó szerinti keresés                                                 | Akármelyik kulcsszóra lehet keresni. A megadott kulcsszó alapján a filmek listája automatikusan frissül, a szűrt adatok megjelennek.                                                                                                                                                                                                                                               | Valamennyi szerepkör esetén azonos működés.                  | Valamennyi szerepkör esetén azonos működés.                        | Valamennyi szerepkör esetén azonos működés.                                   |
| Rendezés különböző tulajdonságok alapján                                  | Az oszlopok melletti ikonra való kattintás különbözőképpen rendezi sorrendbe az adatokat. A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni a filmeket. A szöveges adatok alapján ABC-rend szerint és fordított ABC-sorrendben is lehet rendezni a filmeket. A rendezhetőségről egy modal tájékoztatja a felhasználót.                                    | Valamennyi szerepkör esetén azonos működés.                  | Valamennyi szerepkör esetén azonos működés.                        | Valamennyi szerepkör esetén azonos működés.                                   |
| Lapozhatóság                                                              | Csak meghatározott számú entitás jelenik meg a listázás során, a többi dokumentumot a program lapozható formában mutatja meg. A lapok sorszámára kattintva az ott listázott adatok megnézhetőek, áttekinthetőek. Van lehetőség egy „lapot” vissza és előretekerni.                                                                                                                 | Valamennyi szerepkör esetén azonos működés.                  | Valamennyi szerepkör esetén azonos működés.                        | Valamennyi szerepkör esetén azonos működés.                                   |

## 6. Családtagok adatbázisa

| Funkció neve                                                              | \*_Tervezett funkció leírása:_                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Felhasználói szerepkör esetén a tervezett működés leírása | Archivátor/Szerkesztő szerepkör esetén a tervezett működés leírása | Adminisztrátori szerepkör esetén a tervezett működés leírása                  |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| Listázás                                                                  | A családtagok adatbázisához csak az adminisztrátori jogokkal rendelkező (role = 3) felhasználók férnek hozzá: tehát megtekintési, módosítási joguk is csak nekik van. A program megjeleníti az összes, adatbázisba rögzített családtagot. A felületen lehetőség van adathelyesbítésre, valamint új adat rögzítésére is. Alapesetben az összes, adatbázisba már felvitt családtag listáját megjeleníti a program. Az adatbázis tartalmazza a családtag kereszt- és vezetéknevét, a kedvenc filmes műfaját és a kedvenc filmjét. Jogosultságkezelési szempontból a táblázat tartalmazza a felhasználó jogkörét illetve a rokonság fokát is. | Nem tudja megnézni.                                       | Nem tudja megnézni.                                                | Meg tudja nézni.                                                              |
| Folyamatos adatvalidáció az adatszerkesztés és új elem létrehozása közben | A felvett adatok helyességének ellenőrzése automatikusan megtörténik. A program nem engedélyezi a nem megfelelő adatok adatbázisba rögzítését. Hibaüzenet jelzi, amennyiben a bevitt adatok formátuma hibás. A hibaüzenet tartalmazza azt, hogy mi a megfelelő formátum.                                                                                                                                                                                                                                                                                                                                                                  | A szerepkör nem tartalmaz szerkesztési jogot.             | A szerepkör nem tartalmaz szerkesztési jogot.                      | Szerkeszteni tudja.                                                           |
| Adott elem módosítása                                                     | A listázott elemek közül a szerkesztési gombra kattintás után egy form jelenik meg, ahol (a belső ID-számot kivéve) valamennyi tulajdonság szerkeszthető. A form validálva van, tehát érvénytelen adatot nem lehet az adatbázisba küldeni. Az oldalon lehetőség van arra, hogy az összes családtagot listázó oldalra navigáljon vissza az alkalmazás.                                                                                                                                                                                                                                                                                     | A szerepkör nem tartalmaz szerkesztési jogot.             | A szerepkör nem tartalmaz szerkesztési jogot.                      | Tud módosítani (role=3).                                                      |
| Adott elem törlése                                                        | A listázott családtagok közül a törlés gombra kattintás után egy megerősítő ablak jelenik meg, majd jóváhagyás után az adott elem törlődik. A törlés gombra kattintással megerősítő ablak ugrik fel, melyen elvethető a téves törlés. A megerősítő üzenet jóváhagyásával a film törölhető az adatbázisból. A törlést követően frissül a listaoldal, ahol a már törölt családtag már nem látható.                                                                                                                                                                                                                                          | A szerepkör nem tartalmaz szerkesztési jogot.             | A szerepkör nem tartalmaz szerkesztési jogot.                      | A felhasználók törlését csupán adminisztrátorok (role = 3) hajthatják végre.  |
| Új elem hozzáadása                                                        | A táblázat felett egy zöld, "Add a new..." feliratú gomb jelenik meg, amira rákattintva új form nyílik meg, ahol az új entitás adatai beírhatók. A form validálva van, tehát érvénytelen adatot nem lehet az adatbázisba küldeni. Az oldalon lehetőség van arra, hogy az összes családtagot listázó oldalra navigáljon vissza az alkalmazás.                                                                                                                                                                                                                                                                                              | Nem tud új elemet hozzáadni.                              | Nem tud új elemet hozzáadni.                                       | Az új elemek hozzáadását csupán adminisztrátorok (role = 3) hajthatják végre. |
| Kulcsszó szerinti keresés                                                 | Akármelyik kulcsszóra lehet keresni. A megadott kulcsszó alapján a lista automatikusan frissül, a szűrt adatok megjelennek.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Nem tudja megnézni.                                       | Nem tudja megnézni.                                                | Tudja használni.                                                              |
| Rendezés különböző tulajdonságok alapján                                  | Az oszlopok melletti ikonra való kattintás különbözőképpen rendezi sorrendbe az adatokat. A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni a filmeket. A szöveges adatok alapján ABC-rend szerint és fordított ABC-sorrendben is lehet rendezni a családtagokat. A rendezhetőségről egy modal tájékoztatja a felhasználót.                                                                                                                                                                                                                                                                                      | Nem tudja megnézni.                                       | Nem tudja megnézni.                                                | Tudja használni.                                                              |
| Lapozhatóság                                                              | Csak meghatározott számú családtag jelenik meg a listázás során, a többi dokumentumot a program lapozható formában mutatja meg. A lapok sorszámára kattintva az ott listázott adatok megnézhetőek, áttekinthetőek. Van lehetőség egy „lapot” vissza és előretekerni.                                                                                                                                                                                                                                                                                                                                                                      | Nem tudja megnézni.                                       | Nem tudja megnézni.                                                | Tudja használni.                                                              |

# Fejlesztői dokumentáció - FaMoBase v.1.0

## **Fejlesztési követelmények, melynek a program megfelelt:**

### Backend:

- [x] MongoDB alapú aladatbázis-->MongoDB Atlas felhőalapú tárolás.
- [x] Legalább 5 féle entitás legyen: megtekintendő filmek, megtekintett filmek, rendezők, főszereplők, családtagok listája.
- [x] A backend NodeJS (Express) alapú legyen, saját API szolgálja ki a frontendet - legalább 10 különböző végpont legyen.

### Frontend:

- [x] A frontend Angular alapú legyen, legalább 5 külön oldal legyen, model-service-component architektúrába szervezve.
- [x] Bootstrap használata engedélyezett, reszponzív legyen.
- [x] Authetikáció és authorizáció: a felület bizonyos oldalai csak belépés után legyenek elérhetőek (JWT-autentikáció).
- [x] Clean kód elveit kövesse az alkalmazás összes eleme.

### Tesztelés:

- [x] Minden API útvonalhoz legalább egy tesztet kell írni: legyen legalább 1-1 unit vagy integrációs teszt.

### Dokumentáció:

- [x] Legyen Swagger alapú dokumentáció az API-hoz.
- [x] Legyen egy markdown dokumentáció a repository-ban (ez az :), amely informál az alkalmazás telepítéséről, konfigurálásáról, céljáról.
- [x] Dockerizálva legyen a kész alkalmazás, konténerből legyen futtatható.

## Továbbfejlesztési lehetőségek:

- A felhasználók személyre szabott ajánlásokat kaphatnának a preferált, kedvenc műfajaik alapján.

- A filmek plakátjainak hozzáadása a tárolt adatok közé (copyright!).

- Filmek nyelvének hozzáadása, az adatbázisba rögzített filmek nyelvének statisztikájára.

- IMDB API (vagy egyéb ehhez hasonló) integráció a teljes, IMDB-n rögzített adatszinkronhoz.

- Adatbázis bővítése.

- Rögzített kategóriák rögzítése.

- A legnagyobb streaming platformok linkelése az adott filmhez (közvetlen elérés).

- A trailerek linkjének csatolása a tárolt adatokhoz (copyright!).

## **A végpontok dokumentációjának elérhetősége**

- A végpontok dokumentációja a Swagger nevű fejlesztőeszköz segítségével valósul meg.
- A dokumentációban láthatjuk a különböző entitások modelljét, a meghívható végpontokat és a meghívás módját is.
- A dokumentációt https://localhost:3000/api-docs lehet megtalálni, amíg a backend fut.
