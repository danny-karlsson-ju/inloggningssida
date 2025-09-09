GitHub repo: https://github.com/danny-karlsson-ju/inloggningssida

GitHub Pages: https://danny-karlsson-ju.github.io/inloggningssida/

1. TODO: Förklara hur jag har tänkt.

Reflekterande text:
Jag började med att skapa issues för alla steg i uppgiften och milestones för G och VG, vilket gjorde det lätt att bocka av allt.

Istället för att läsa igenom alla steg började jag bara från toppen. Senare upptäckte jag att endast en HTML-fil fick används och att alla vyer ska ritas ut på index, vilket gjorde att jag fick göra om lite. För övrigt har jag två divs i HTML, men de skulle även kunna skapas i JS.

Jag kunde nog ha börjat uppgiften med att skriva lite pseudokod för att planera ett bättre flöde för vad jag ville implementera, men det var en enkel uppgift, så det blev bra ändå.

createAllElements()
Skapar alla element till sidan och appendar dem till rätt div, så att jag sedan kan visa eller dölja de olika divarna. Allt är beroende av att denna funktion kallas först, vilket är den största nackdelen.

validateAccountDetails()
Kontrollerar att inputfältens values matchar de angivna konstanterna. Om de matchar kallar vi på show_and_hide(). Om inte visas ett meddelande om att någon av dem inte matchar.

signOutButtonID.addEventListener("click", function())
Tömmer localStorage och kallar på show_and_hide().

function check_checkbox_checked()
Kollar om checkboxen är ikryssad och uppdaterar localStorage-key "remember me" för att matcha detta.

function show_and_hide()
Hantera tre olika states:
1. Om man loggar in kollar den localStorage key rememeber me. Om värdet är true visas välkomstsidan, och sidan kommer ihåg valet så att man är inloggad även efter att sidan laddas om.
2. Om man loggar in och checkboxen inte är ikryssad: samma som ovan, men vid omladdning måste man logga in igen.
3. Om det är första gången man besöker sidan (ingen localStorage) eller om man loggar ut: vi rensar localStorage och visar login-sidan.
Om jag inte hade remember me checkbox så skulle det kunna vara 2 states ist för tre annars funkar den

Överlag tycker jag att uppgiften gick bra och var enkel att slutföra, särskilt efter plugga tech uppgifterna från förra veckan. Uppgiftskraven var något otydliga, vilket gjorde att jag missade vissa steg, men va också lite slarvig med att läsa igenom dem gjorde att jag fick göra om vissa delar.
Annars tror jag att allt fungerar bra. Jag har även lagt många kommentarer i koden eftersom vi skulle granska den och gjort den lätt att förstå för andra. Jag har bokat en handledningstid för att dubbelkolla att allt ser bra ut innan inlämning och fick feedback om ändringar jag kan göra.
Jag tycker också att jag arbetade bra med GitHub flow, med issues och branches, och hittade hur man stänger issues via PR, vilket gjorde det smidigt.
