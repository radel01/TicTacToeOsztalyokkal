# MVC 
### (modell-adat, view-megjelenés, controller-kommunikáció a modell és view között)

## Feladatuk a TicTacToeban
### Modell
    Csak az adatokkal foglalkozik, előállítja a program aktuális állapotát
    getList()-kontrollernek lesz szüksége rá
    lepteto(index)-beírja az aktuális elemet, megnöveli egyel
### View
    **Mezo**: egy divet jelenít meg, saját eseményt itt tudjuk generálni, hogy megtudjuk melyik elemre kattintottunk
    **Palya**: annyi a dolga, hogy az aktuális állapotot megjeleníti, csak a controlleren keresztül beszélget a modellel
### Kontroller
    Két feladata van:
        1. Pélányosítja a modellt és a viewt
        2. Feliratkozik az eseménykezelőkre