# User storyk - FaMoBase v.1.0

Jelen alkalmazás a **FaMoBase v.1.0** (**Fa**mily **Mo**vie Data**base** - családi filmadatbázis), melynek fő célja, hogy egy család (jelen esetben a Kovátsék) filmnézéseit nyilvántartsák.

A felhasználók esetében szerepkörök is vannak a profiljukhoz rendelve: a programban - alapesetben - csak az anya és az apa rendelkeznek filmlétrehozási és törlési joggal a teljes adatbázisban, a gyerekek szerkeszthetik a már meglevő NoSQL dokumentumokat (a már megnézett filmek és az összes film adatait) illetve láthatják a már felvitt dokumentumokat, míg a távolabbi rokonoknak (pl.: nagybácsi, nagynéni) csak megtekintési joguk van.

A program főbb funkciói szerint képes a már megnézett filmeket és a tervezett filmeket is számon tartani. Emellett a filmek főszereplőit és rendezőit is tárolja.

# Adminisztrátori és felhasználói persona - user story

## Főoldal

> _A főoldal egy üdvözlő képernyő a FaMoBase program logójával._

**Tervezett működés leírása:**

Egy mobiloptimalizált felületen a felhasználó megismerkedik a FaMoBase program logójával és a program alapvető designjével, majd továbbhaladhat a főbb programfelületre.

## A megnézni tervezett filmek adatbázisa

A megnézni tervezett filmek adatbázisát valamennyi felhasználó meg tudja nézni (role >=1), azonban a módosításokat csupán a szerkesztői joggal rendelkező felhasználók (role>=2) kezdeményezhetnek. Az új elemek hozzáadását csupán adminisztrátorok (role = 3) hajthatják végre.

***1. Listázás***

A főoldalról való továbbkattintás után a program megjeleníti az összes, adatbázisba rögzített filmet (ez az úgynevezett „tervezett filmek adatbázisa”), emellett a filmek utolsó oszlopában a szerkesztésre szolgáló gombok vannak, melyek lehetővé teszik az adatok módosítását.

**Tervezett működés leírása:**

A főoldalról való továbbklikkelés után az összes, adatbázisba már felvitt film listáját megjeleníti a program.

A program lapozófunkcióval van ellátva, tehát csak meghatározott számú filmet jelenít meg egyszerre. Az adatbázis tartalmazza a film külföldi és magyar címét, a rendező nevét, a kiadás évét, a hosszát percben, a műfaját, az IMDB helyezését, az IMDB átlagát, valamint linket a film IMDB-oldalára.

***2. Kulcsszó szerinti keresés***

Akármelyik kulcsszóra lehet keresni.

**Tervezett működés leírása:**

A megadott kulcsszó alapján a filmek listája automatikusan frissül, a szűrt adatok megjelennek.

***3. Rendezés különböző tulajdonságok alapján***

Az oszlopokra való kattintás különbözőképpen rendezi sorrendbe az adatokat.

**Tervezett működés leírása:**

-  A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni a filmeket.

-  A szöveges adatok alapján ABC-rend szerint és fordított ABC-sorrendben is lehet rendezni a filmeket.

***4. Lapozhatóság***

Csak meghatározott számú film jelenik meg a listázás során, a többi dokumentumot a program lapozható formában mutatja meg.

**Tervezett működés leírása:**

-  A lapok sorszámára kattintva az ott listázott adatok megnézhetőek, áttekinthetőek.

-  Van lehetőség egy „lapot” vissza és előretekerni.

***5. Adatfelvitel***

Új film adatai vihetők fel.

**Tervezett működés leírása:**

Az adatok megadásával egy új film adatait lehet felvinni, illetve az adatokban történő módosítás megjelenik a listázó oldalon – a szerkesztés közbeni adatvalidáció figyelmeztet az adatok formátumára.

-  Az oldalon lehetőség van arra, hogy az összes filmet listázó oldalra navigáljon vissza az alkalmazás.

***6. Adatszerkesztés***

A film valamennyi tárolt adata szerkeszthető (kivéve a belső ID-számot).

**Tervezett működés leírása:**

-  A filmre kattintva a választott film adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon.

-  Az oldalon lehetőség van arra, hogy az összes filmet listázó oldalra irányítson vissza az alkalmazás a sikeres vagy sikertelen szerkesztés után.

**7. Folyamatos adatvalidáció az adatszerkesztés és új elem létrehozása közben**

A felvett adatok helyességének ellenőrzése automatikusan megtörténik.

**Tervezett működés leírása:**

-  A program nem engedélyezi a nem megfelelő adatok adatbázisba rögzítését.

-  Hibaüzenet jelzi, amennyiben a bevitt adatok formátuma hibás.

-  A hibaüzenet tartalmazza azt, hogy mi a megfelelő formátum.

***8. Törlés***

A kiválasztott film – a megerősítő üzenet jóváhagyásával - törölhető.

**Tervezett működés leírása:**

-  A törlés gombra kattintással megerősítő ablak ugrik fel, melyen elvethető a téves törlés.

-  A megerősítő üzenet jóváhagyásával a film törölhető az adatbázisból.

-  A törlést követően frissül a listaoldal, ahol a már törölt film nem látható.

## A megnézett filmek adatbázisa

A megnézett filmek adatbázisát valamennyi felhasználó meg tudja nézni (role >=1), azonban a módosításokat csupán a szerkesztői joggal rendelkező felhasználók (role>=2) kezdeményezhetnek. Az új elemek hozzáadását csupán adminisztrátorok (role = 3) hajthatják végre.

***1. Listázás***

A főoldalról való továbbkattintás után a program megjeleníti az összes, adatbázisba rögzített filmet (ez az úgynevezett „tervezett filmek adatbázisa”), emellett a filmek utolsó oszlopában a szerkesztésre szolgáló gombok vannak, melyek lehetővé teszik az adatok módosítását.

**Tervezett működés leírása:**

A főoldalról való továbbklikkelés után az összes, adatbázisba már felvitt film listáját megjeleníti a program.

A program lapozófunkcióval van ellátva, tehát csak meghatározott számú filmet jelenít meg egyszerre. Az adatbázis tartalmazza a film külföldi és magyar címét, a rendező nevét, a kiadás évét, a hosszát percben, a műfaját, az IMDB helyezését, az IMDB átlagát, valamint linket a film IMDB-oldalára.

***2. Kulcsszó szerinti keresés***

Akármelyik kulcsszóra lehet keresni.

**Tervezett működés leírása:**

A megadott kulcsszó alapján a filmek listája automatikusan frissül, a szűrt adatok megjelennek.

***3. Rendezés különböző tulajdonságok alapján***

Az oszlopokra való kattintás különbözőképpen rendezi sorrendbe az adatokat.

**Tervezett működés leírása:**

-  A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni a filmeket.

-  A szöveges adatok alapján ABC-rend szerint és fordított ABC-sorrendben is lehet rendezni a filmeket.

***4. Lapozhatóság***

Csak meghatározott számú film jelenik meg a listázás során, a többi dokumentumot a program lapozható formában mutatja meg.

**Tervezett működés leírása:**

-  A lapok sorszámára kattintva az ott listázott adatok megnézhetőek, áttekinthetőek.

-  Van lehetőség egy „lapot” vissza és előretekerni.

***5. Adatfelvitel***

Új film adatai vihetők fel.

**Tervezett működés leírása:**

Az adatok megadásával egy új film adatait lehet felvinni, illetve az adatokban történő módosítás megjelenik a listázó oldalon – a szerkesztés közbeni adatvalidáció figyelmeztet az adatok formátumára.

-  Az oldalon lehetőség van arra, hogy az összes filmet listázó oldalra navigáljon vissza az alkalmazás.

***6. Adatszerkesztés***

A film valamennyi tárolt adata szerkeszthető (kivéve a belső ID-számot).

**Tervezett működés leírása:**

-  A filmre kattintva a választott film adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon.

-  Az oldalon lehetőség van arra, hogy az összes filmet listázó oldalra irányítson vissza az alkalmazás a sikeres vagy sikertelen szerkesztés után.

**7. Folyamatos adatvalidáció az adatszerkesztés és új elem létrehozása közben**

A felvett adatok helyességének ellenőrzése automatikusan megtörténik.

**Tervezett működés leírása:**

-  A program nem engedélyezi a nem megfelelő adatok adatbázisba rögzítését.

-  Hibaüzenet jelzi, amennyiben a bevitt adatok formátuma hibás.

-  A hibaüzenet tartalmazza azt, hogy mi a megfelelő formátum.

***8. Törlés***

A kiválasztott film – a megerősítő üzenet jóváhagyásával - törölhető.

**Tervezett működés leírása:**

-  A törlés gombra kattintással megerősítő ablak ugrik fel, melyen elvethető a téves törlés.

-  A megerősítő üzenet jóváhagyásával a film törölhető az adatbázisból.

-  A törlést követően frissül a listaoldal, ahol a már törölt film nem látható.

## Főszereplők adatbázisa

A főszereplők adatbázisát a szerkesztők és az adminisztrátorok érhetik el (role >=2).  Módosításokat csupán szerkesztői joggal rendelkező felhasználók (role>=2) kezdeményezhetnek. Az új elemek hozzáadását csupán adminisztrátorok (role = 3) hajthatják végre.

***1. Listázás***

A főoldalról való továbbkattintás után a program megjeleníti az összes, adatbázisba rögzített főszereplőt, emellett az utolsó oszlopban a szerkesztésre szolgáló gombok vannak, melyek lehetővé teszik az adatok módosítását.

**Tervezett működés leírása:**

A főoldalról való továbbklikkelés után az összes, adatbázisba már felvitt főszereplők listáját megjeleníti a program.

A program lapozófunkcióval van ellátva, tehát csak meghatározott számú főszereplőt jelenít meg egyszerre. Az adatbázis tartalmazza a főszereplő teljes nevét, nemzetiségét, születési dátumát és a leghíresebb filmet, melyben szerepelt.

***2. Kulcsszó szerinti keresés***

Akármelyik kulcsszóra lehet keresni.

**Tervezett működés leírása:**

A megadott kulcsszó alapján a főszereplők listája automatikusan frissül, a szűrt adatok megjelennek.

***3. Rendezés különböző tulajdonságok alapján***

Az oszlopokra való kattintás különbözőképpen rendezi sorrendbe az adatokat.

**Tervezett működés leírása:**

-  A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni a főszereplőket.

-  A szöveges adatok alapján ABC-rend szerint és fordított ABC-sorrendben is lehet rendezni a főszereplőket.

***4. Lapozhatóság***

Csak meghatározott számú film jelenik meg a listázás során, a többi dokumentumot a program lapozható formában mutatja meg.

**Tervezett működés leírása:**

-  A lapok sorszámára kattintva az ott listázott adatok megnézhetőek, áttekinthetőek.

-  Van lehetőség egy „lapot” vissza és előretekerni.

***5. Adatfelvitel***

Új főszereplő adatai vihetők fel.

**Tervezett működés leírása:**

Az adatok megadásával egy új főszereplő adatait lehet felvinni, illetve az adatokban történő módosítás megjelenik a listázó oldalon – a szerkesztés közbeni adatvalidáció figyelmeztet az adatok formátumára.

-  Az oldalon lehetőség van arra, hogy az összes főszereplőt listázó oldalra navigáljon vissza az alkalmazás.

***6. Adatszerkesztés***

A főszereplő valamennyi tárolt adata szerkeszthető (kivéve a belső ID-számot).

**Tervezett működés leírása:**

-  A filmre kattintva a választott főszereplő adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon.

-  Az oldalon lehetőség van arra, hogy az összes főszereplőt listázó oldalra irányítson vissza az alkalmazás a sikeres vagy sikertelen szerkesztés után.

**7. Folyamatos adatvalidáció az adatszerkesztés és új elem létrehozása közben**

A felvett adatok helyességének ellenőrzése automatikusan megtörténik.

**Tervezett működés leírása:**

-  A program nem engedélyezi a nem megfelelő adatok adatbázisba rögzítését.

-  Hibaüzenet jelzi, amennyiben a bevitt adatok formátuma hibás.

-  A hibaüzenet tartalmazza azt, hogy mi a megfelelő formátum.

***8. Törlés***

A kiválasztott főszereplő – a megerősítő üzenet jóváhagyásával - törölhető.

**Tervezett működés leírása:**

-  A törlés gombra kattintással megerősítő ablak ugrik fel, melyen elvethető a téves törlés.

-  A megerősítő üzenet jóváhagyásával a főszereplő törölhető az adatbázisból.

-  A törlést követően frissül a listaoldal, ahol a már törölt főszereplő nem látható.

## Rendezők adatbázisa

A rendezők adatbázisát a szerkesztők és az adminisztrátorok érhetik el (role >=2).  Módosításokat csupán szerkesztői joggal rendelkező felhasználók (role>=2) kezdeményezhetnek. Az új elemek hozzáadását csupán adminisztrátorok (role = 3) hajthatják végre.

***1. Listázás***

A főoldalról való továbbkattintás után a program megjeleníti az összes, adatbázisba rögzített rendezőt, emellett az utolsó oszlopban a szerkesztésre szolgáló gombok vannak, melyek lehetővé teszik az adatok módosítását.

**Tervezett működés leírása:**

A főoldalról való továbbklikkelés után az összes, adatbázisba már felvitt filmrendezőt megjeleníti a program.

A program lapozófunkcióval van ellátva, tehát csak meghatározott számú rendezőt jelenít meg egyszerre. Az adatbázis tartalmazza a rendező teljes nevét, nemzetiségét, születési dátumát és leghíresebb filmjének nevét.

***2. Kulcsszó szerinti keresés***

Akármelyik kulcsszóra lehet keresni.

**Tervezett működés leírása:**

A megadott kulcsszó alapján a rendezők listája automatikusan frissül, a szűrt adatok megjelennek.

***3. Rendezés különböző tulajdonságok alapján***

Az oszlopokra való kattintás különbözőképpen rendezi sorrendbe az adatokat.

**Tervezett működés leírása:**

-  A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni a rendezőket.

-  A szöveges adatok alapján ABC-rend szerint és fordított ABC-sorrendben is lehet rendezni a rendezőket.

***4. Lapozhatóság***

Csak meghatározott számú rendező jelenik meg a listázás során, a többi adatot a program lapozható formában mutatja meg.

**Tervezett működés leírása:**

-  A lapok sorszámára kattintva az ott listázott adatok megnézhetőek, áttekinthetőek.

-  Van lehetőség egy „lapot” vissza és előretekerni.

***5. Adatfelvitel***

Új rendező adatai vihetők fel.

**Tervezett működés leírása:**

Az adatok megadásával egy új rendező adatait lehet felvinni, illetve az adatokban történő módosítás megjelenik a listázó oldalon – a szerkesztés közbeni adatvalidáció figyelmeztet az adatok formátumára.

-  Az oldalon lehetőség van arra, hogy az összes rendezőt listázó oldalra navigáljon vissza az alkalmazás.

***6. Adatszerkesztés***

A rendező valamennyi tárolt adata szerkeszthető (kivéve a belső ID-számot).

**Tervezett működés leírása:**

-  A választott rendező adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon.

-  Az oldalon lehetőség van arra, hogy az összes rendezőt listázó oldalra irányítson vissza az alkalmazás a sikeres vagy sikertelen szerkesztés után.

**7. Folyamatos adatvalidáció az adatszerkesztés és új elem létrehozása közben**

A felvett adatok helyességének ellenőrzése automatikusan megtörténik.

**Tervezett működés leírása:**

-  A program nem engedélyezi a nem megfelelő adatok adatbázisba rögzítését.

-  Hibaüzenet jelzi, amennyiben a bevitt adatok formátuma hibás.

-  A hibaüzenet tartalmazza azt, hogy mi a megfelelő formátum.

***8. Törlés***

A kiválasztott rendező – a megerősítő üzenet jóváhagyásával - törölhető.

**Tervezett működés leírása:**

-  A törlés gombra kattintással megerősítő ablak ugrik fel, melyen elvethető a téves törlés.

-  A megerősítő üzenet jóváhagyásával a rendező törölhető az adatbázisból.

-  A törlést követően frissül a listaoldal, ahol a már törölt rendező nem látható.

## Családtagok adatbázisa

A családtagok adatbázisához csak az adminisztrátori jogokkal rendelkező (role = 1) felhasználók férnek hozzá: tehát megtekintési, módosítási joguk is csak nekik van.

***1. Listázás***

A főoldalról való továbbkattintás után a program megjeleníti az összes, adatbázisba rögzített családtagot. A felületen lehetőség van adathelyesbítésre, valamint új adat rögzítésére is.

**Tervezett működés leírása:**

Alapesetben az összes, adatbázisba már felvitt családtag listáját megjeleníti a program.

A program lapozófunkcióval van ellátva, tehát csak meghatározott számú családtagot jelenít meg egyszerre. Az adatbázis tartalmazza a családtag kereszt- és vezetéknevét, a kedvenc filmes műfaját és a kedvenc filmjét. Jogosultságkezelési szempontból a táblázat tartalmazza a felhasználó jogkörét illetve a rokonság fokát is.

***2. Kulcsszó szerinti keresés***

Akármelyik kulcsszóra lehet keresni.

**Tervezett működés leírása:**

A megadott kulcsszó alapján a családtagok listája automatikusan frissül, a szűrt adatok megjelennek.

***3. Rendezés különböző tulajdonságok alapján***

Az oszlopokra való kattintás különbözőképpen rendezi sorrendbe az adatokat.

**Tervezett működés leírása:**

-  A szám típusú adatok alapján növekvő és csökkenő sorrendben lehet rendezni a filmeket.

-  A szöveges adatok alapján ABC-rend szerint és fordított ABC-sorrendben is lehet rendezni a filmeket.

***4. Lapozhatóság***

Csak meghatározott számú családtag jelenik meg a listázás során, a többi adatot a program lapozható formában mutatja meg.

**Tervezett működés leírása:**

-  A lapok sorszámára kattintva az ott listázott adatok megnézhetőek, áttekinthetőek.

-  Van lehetőség egy „lapot” vissza és előretekerni.

***5. Adatfelvitel***

Új családtag adatai vihetők fel.

**Tervezett működés leírása:**

Az adatok megadásával egy új családtag adatait lehet felvinni, illetve az adatokban történő módosítás megjelenik a listázó oldalon – a szerkesztés közbeni adatvalidáció figyelmeztet az adatok formátumára.

-  Az oldalon lehetőség van arra, hogy az összes családtagot listázó oldalra navigáljon vissza az alkalmazás.

***6. Adatszerkesztés***

Az adott családtag valamennyi tárolt adata szerkeszthető (kivéve a belső ID-számot).

**Tervezett működés leírása:**

-  A választott családtag adatait lehet szerkeszteni, a módosítás megjelenik a listázó oldalon.

-  Az oldalon lehetőség van arra, hogy az összes családtagotlistázó oldalra irányítson vissza az alkalmazás a sikeres vagy sikertelen szerkesztés után.

**7. Folyamatos adatvalidáció az adatszerkesztés és új elem létrehozása közben**

A felvett adatok helyességének ellenőrzése automatikusan megtörténik.

**Tervezett működés leírása:**

-  A program nem engedélyezi a nem megfelelő adatok adatbázisba rögzítését.

-  Hibaüzenet jelzi, amennyiben a bevitt adatok formátuma hibás.

-  A hibaüzenet tartalmazza azt, hogy mi a megfelelő formátum.

***8. Törlés***

A kiválasztott családtag – a megerősítő üzenet jóváhagyásával - törölhető.

**Tervezett működés leírása:**

-  A törlés gombra kattintással megerősítő ablak ugrik fel, melyen elvethető a téves törlés.

-  A megerősítő üzenet jóváhagyásával a családtag törölhető az adatbázisból.

-  A törlést követően frissül a listaoldal, ahol a már törölt családtag nem látható.

## Továbbfejlesztési lehetőségek:

- A felhasználók személyre szabott ajánlásokat kaphatnának a preferált, kedvenc műfajaik alapján.

- A  filmek plakátjainak hozzáadása a tárolt adatok közé (copyright!).

- Filmek nyelvének hozzáadása, az adatbázisba rögzített filmek nyelvének statisztikájára.

- IMDB API (vagy egyéb ehhez hasonló) integráció a teljes, IMDB-n rögzített adatszinkronhoz.

- Adatbázis bővítése.

- Rögzített kategóriák rögzítése.

- A legnagyobb streaming platformok linkelése az adott filmhez (közvetlen elérés).

- A trailerek linkjének csatolása a tárolt adatokhoz (copyright!).
