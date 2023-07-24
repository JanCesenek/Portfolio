import "./App.scss";
import Description from "./components/Description/Description";
import Page from "./components/Page/Page";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Align">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Page
                type="Five"
                default
                link="My projects"
                linkCZ="Moje projekty"
                title="Johnny Garlic - Websites tailored for your needs"
                titleCZ="Jan Česenek - Webovky šité na míru"
                firstBubbleTitle="What is the purpose of this website?"
                firstBubbleTitleCZ="Jaký je účel této webovky?"
                firstBubbleContent="The current purpose is to showcase my IT skills I have built over the period of studying on my own. This website is still in progress since I keep working on new projects."
                firstBubbleContentCZ="Současný účel je ukázat moje dovednosti v IT, které jsem získal během období svého samostudia. Tato stránka se neustále aktualizuje, jelikož pořád pracuji na nových projektech."
                secondBubbleTitle="Why should you hire me?"
                secondBubbleTitleCZ="Proč byste mě měli zaměstnat?"
                secondBubbleContent="Although I don't have an IT degree, I have started from scratch learning from online courses.
                With zero guidance from university professors, I had to make an additional effort looking for various resources as well as making a plan how to gain new skills and prioritize them by importance.
                Just the fact that I'm doing this on my own, shows that I'm clearly passionate about programming, I'm a quick learner, I'm creative (since I have to come up with new ideas on how to demonstrate my knowledge) and I'm ready to keep learning new things once getting a job."
                secondBubbleContentCZ="Ačkoliv nemám titul v oboru, začal jsem se od začátku vzdělávat sám přes online kurzy.
                Jelikož jsem neměl žádnou podporu univerzitního prostředí, musel jsem vyvinout dodatečnou snahu hledáním různých zdrojů stejně jako plánováním jak získat nové dovednosti a kterým dát přednost podle důležitosti.
                Už pouze skutečnost, že se programování věnuji sám, dokazuje, že jsem do toho zapálený, rychle se učím, jsem kreativní (jelikož jsem musel přijít s novými nápady, jak demonstrovat svoje znalosti) a také, že jsem připraven učit se nové věci, jakmile získám práci v oboru."
                thirdBubbleTitle="How can you contact me?"
                thirdBubbleTitleCZ="Jak mě můžete kontaktovat?"
                fourthBubbleTitle="What programming languages and technologies have I already worked with?"
                fourthBubbleTitleCZ="S jakými programovacími jazyky a technologiemi jsem už pracoval?"
                fourthBubbleContent="Basic web development trio - (HTML, CSS, JS), React, TailwindCSS, TypeScript, Next.js, Redux, Express.js, Node.js, databases - (mySQL, mongoDB), VBA."
                fourthBubbleContentCZ="Základní trio pro vývoj webových stránek - (HTML, CSS, JS), React, TailwindCSS, TypeScript, Next.js, Redux, Node.js, databáze - (mySQL, mongoDB), VBA."
                fifthBubbleTitle="Where is the proof of my knowledge?"
                fifthBubbleTitleCZ="Kde je důkaz mých znalostí?"
                fifthBubbleContent="Just click on the next page to see some of my finished projects."
                fifthBubbleContentCZ="Stačí kliknout na další stránku, kde mám odkazy na svoje dokončené projekty."
                contact
              />
            }
          />
          <Route
            path="/projects"
            element={
              <Page
                type="Six"
                link="Back"
                linkCZ="Zpět"
                title="My projects"
                titleCZ="Moje projekty"
                firstBubbleTitle="Voyapp"
                firstBubbleTitleCZ="Voyapp"
                firstBubbleContent="My original project idea and by far the most advanced app yet."
                firstBubbleContentCZ="Můj originální nápad a zatím zdaleka nejpokročilejší aplikace."
                secondBubbleTitle="Chulak Bazaar"
                secondBubbleTitleCZ="Chulak Bazaar"
                secondBubbleContent="Own e-shop."
                secondBubbleContentCZ="Vlastní e-shop."
                thirdBubbleTitle="Wormhole Media"
                thirdBubbleTitleCZ="Wormhole Media"
                thirdBubbleContent="My own social media."
                thirdBubbleContentCZ="Vlastní sociální síť."
                fourthBubbleTitle="Man, don't get angry!"
                fourthBubbleTitleCZ="Člověče, nezlob se!"
                fourthBubbleContent="Board game, rules can be looked up online, although there are different variants. In this one, player has to choose if he wants to move with an active piece or add a new one before rolling the dice."
                fourthBubbleContentCZ="Desková hra, kterou asi všichni znají, pravidla se dají najít online, ačkoliv má hra více variant. V této variantě se hráč musí rozhodnout, jestli bude hrát s nasazenou figurkou, nebo si nasadí novou figurku, předtím, než hodí kostkou."
                fifthBubbleTitle="Old website"
                fifthBubbleTitleCZ="Stará webovka"
                fifthBubbleContent="This is how my website was supposed to look, but I decided to choose a minimalistic design as I wanted it to look more professional."
                fifthBubbleContentCZ="Takhle měla moje webovka původně vypadat, ale nakonec jsem se rozhodl pro minimalistický design, jelikož jsem chtěl, aby vypadala profesionálněji."
                firstFunctionality="/projects/voyapp"
                firstLink="https://voyapp.jancesenek.dev"
                secondFunctionality="/projects/chulakbazaar"
                secondLink="https://chulakbazaar.jancesenek.dev"
                thirdFunctionality="/projects/wormholemedia"
                thirdLink="https://wormholemedia.jancesenek.dev"
                fourthLink="https://clobrdo.jancesenek.dev"
                fifthLink="https://old-website.jancesenek.dev"
              />
            }
          />
          <Route
            path="/projects/voyapp"
            element={
              <Description
                tech="React/Vite.js, TailwindCSS, Leaflet, Express.js, Prisma, SQL database (Supabase)"
                contentCZ="Tato aplikace je něco jako mix mezi cestovatelskou seznamkou a ubytovací aplikací typu Airbnb.
          Sekce 'Profile' je přístupná pouze pro přihlášené uživatele, tzn. je nutné vytvořit si účet v sekci 'Auth'.
          Zde je možné vytvořit nový cestovatelský inzerát, nebo ubytování, stejně jako zobrazit si veškerá svoje data tj. vlastní cestovatelské inzeráty/ubytování a také rezervace, v této sekci se vše dá buď upravit nebo smazat.
          Pokud si někdo vytvoří rezervaci u jakéhokoliv vašeho inzerátu, nebo ji zruší, bude vám v profilu blikat upozornění, dokud na něj nekliknete, čímž potvrdíte jeho přečtení a pak zmizí.
          V sekci 'Destinations' vidíte všechny dostupné cestovatelské inzeráty. Pokud jste přihlášeni, můžete na ně reagovat ('lajkovat', 'dislajkovat', komentovat příspěvek, nebo pokud jsou volná místa, tak si udělat rezervaci). V případě velkého množství dat jsem přidal také filtr, jednotlivé inzeráty se dají filtrovat podle názvu, inzerující osoby, popularity ('lajky' - 'dislajky') a také vzdálenosti.
          Výchozí vzdálenost je od vaší polohy, ale můžete si nastavit libovolně po světě (např. hledáte někoho, kdo se chystá do jihovýchodní Asie, tak si na mapě kliknete do Thajska a vyberete okruh 2000km).
          Sekce 'Accommodations' je velmi podobná, liší se pouze tím, že místo 'lajků', 'dislajků' a komentářů má recenze, a rezervace se musí vybrat na určité datum. Filtr je v této sekci skoro stejný.
          Poslední poznámka vhodná zmínky: na mapě se dynamicky ukazují polohy všech cestovatelských inzerátů/ubytování - cestovatelské inzeráty žlutě a ubytování fialově."
                content="This app is something like a mixture between traveling app and accommodation website similar to Airbnb.
          Section 'Profile' is accessible only for registered users, meaning you need to create an account in 'Auth' section.
          In your profile, you can create a new traveling ad/accommodation, as well as view all of your data - own traveling ads/accommodation and also your reservations, you can either edit or delete those.
          If anyone creates/cancels their reservation at any of your posts, you'll get a blinking notification until you click on it, confirming you've read it, then it disappears.
          In 'Destinations' section, you can see all traveling ads. You can react to it as long as you're logged in (like, dislike, comment post, or make a reservation if there are enough spots left). In case of bigger amount of data, I added a filter, all ads can be filtered by name, post owner, popularity (likes - dislikes) and also distance.
          Default distance is from your location, but you can set it anywhere in the world (eg. you're looking for someone traveling to Southeast Asia, so you click on Thailand and set distance to 2000km).
          Section 'Accommodation' is very similar, the only difference is that it has reviews instead of likes, dislikes and comments and you need to select a date range to make a reservation. Filter is almost the same in this section.
          Last info worth noting: you can dynamically see locations of all traveling ads/accommodation on the map - traveling ads are yellow and accommodation is purple."
                back="/projects"
              />
            }
          />
          <Route
            path="/projects/chulakbazaar"
            element={
              <Description
                tech="React/Vite.js, TailwindCSS, Express.js, Prisma, SQL database (Supabase)"
                contentCZ="Tato aplikace je něco jako e-shop bez platební brány. V sekci 'Items' je vidět jednotlivé zboží buď na prodej, nebo k vydražení v aukci.
                Zboží na prodej může mít libovolný počet kusů. Pokud chcete koupit jakékoliv zboží, musíte být přihlášeni, tzn. musíte si vytvořit účet v sekci 'Auth'. Samozřejmě musíte mít na účtě dostatek financí (každý uživatel začíná s 100000 fiktivními mincemi).
                Pokud úspěšně koupíte/prodáte zboží nebo vás někdo v aukcí přehodí, dostanete zprávu od systému s veškerými informacemi.
                V sekci 'Users' máte možnost zobrazit si svůj profil, pokud jste přihlášeni, kde máte možnost přidat/upravit/doplnit zboží, nebo také prodat zboží v aukci, pokud na něj už někdo přihodil.
                Z profilu se dá také navigovat na seznam všech uživatel a je možné si také zobrazit cizí profily. Jména všech uživatel jsou barevně označena podle jejich recenzí od červené (nejhorší recenze) až po zelenou (nejlepší recenze). Bílá barva znamená, že uživatel ještě žádné recenze nemá.
                Na cizím profilu je možné pouze napsat danému uživateli recenzi, pokud od vás žádnou ještě nemá.
                V sekci 'Messages' je možné psát všem uživatelům. Je zde také speciální konverzace nazvaná 'System', zde dostáváte veškeré systémové oznámení o vašich transakcích. Pokud vás jakýkoliv uživatel v soukromých zprávách obtěžuje, je možné chat 'zmrazit', čímž znemožníte posílání zpráv mezi vámi dvěma, dokud ho opět neobnovíte."
                content="This app is something like an e-shop without payment gateway. In section 'Items', you can view particular items for sale/auction. Items for sale can have unlimited pieces. If you wanna buy any items, you need to be logged in - create an account in 'Auth' section.
                You obviously also need to have enough money on your account (every user starts with 100000 fictional coins). If you successfully buy/sell any item, or someone outbids you in an auction, you'll get a system message with all information.
                In 'Users' section, you can view your profile, if you're logged in, you can add/edit/replenish your items, or sell your items in an auction, if there's any bid.
                You can also navigate to a list of all users and view other profiles. Names of all users are colored by their reviews from red (worst reviews) to green (best reviews). White color means the user doesn't have any reviews yet.
                You can make a review for other users on their profiles as long as they don't have any from you yet.
                In 'Messages' section, you can text any user. There is also a special conversation called 'System' where you receive all system info about your transactions. If any user bothers you in DMs, you can freeze the chat disallowing any communication between the two of you until you unfreeze it."
                back="/projects"
              />
            }
          />
          <Route
            path="/projects/wormholemedia"
            element={
              <Description
                tech="React/Vite.js, TailwindCSS, Express.js, Prisma, SQL database (Supabase)"
                contentCZ="Vlastní sociální síť, která funguje jako zjednodušená verze např. Facebooku.
                Je nutné vytvořit si vlastní účet, aby vás aplikace pustila dál. Po zaregistrování vás aplikace přesměruje na váš profil (Profile), kde vidíte svoje informace (máte možnost změnit část svých údajů - svoji profilovou fotku, zaměstnání a planetu/zemi původu) a svoje příspěvky, které se na profilu dají vytvořit, upravit nebo smazat.
                Zde vidíte také nevyřízené žádosti o přátelství, dokud máte nevyřízené žádosti, v menu v sekci Profile bude blikat upozornění. Dále sekce News Feed, kde vidíte příspěvky všech uživatelů na síti kromě těch, které si buď zablokujete, nebo kteří si zablokují vás.
                Tyto příspěvky lze 'lajkovat/dislajkovat' nebo komentovat. V sekci Users vidíte seznam všech uživatelů na síti, zde je možnost vyhledat uživatele podle jména, v případě, že by se sociální síť rozrostla.
                Uživatelé se zobrazují barevně podle toho, jaký s nimi máte vztah (bílá - žádný, žlutá - přátelé, šedá - vy jste si zablokovali daného uživatele, průhledná s červenou ikonou, cursor: not-allowed - daný uživatel si zablokoval vás, nebo se jedná o admina, který není ve vašem seznamu přátel).
                Po kliknutí na uživatele se vám zobrazí jeho profil a všechny jeho příspěvky. Zde máte možnost poslat žádost o přátelství/odstranit ze seznamu přátel, nebo si daného uživatele zablokovat.
                V sekci Messages vidíte seznam všech uživatelů, s kterými si můžete psát. Máte povoleno psát pouze sobě nebo svým přátelům. Dokud máte nepřečtené zprávy, bude vám v menu v sekci Messages blikat upozornění, které se zobrazí i u ikon vašich konverzací s přáteli, od kterých máte nepřečtené zprávy.
                U všech příspěvků/komentářů/soukromých zpráv je kromě textu možnost nahrát i obrázkové soubory."
                content="Own social media, which works as a simplified version of eg. Facebook.
                It's necessary to create your own account to be let in. After signing up, app redirects you to your profile, where you can see your info (you can edit some of your data - profile picture, occupation, planet/country of origin) and your own posts, which can be created/updated or deleted on the profile.
                In this section, you also see any unhandled friend requests, as long as you have any, you'll see a blinking circle in the menu.
                In 'News Feed' section, you see posts of all social media users except those who've blocked you, or whom you blocked. You can like/dislike/comment those posts.
                In 'Users' section, you see a list of all users on social media, it's possible to filter them by name in case the social media grows. Users appear colored according to your relationship with them (white - none, yellow - friends, grey - you blocked the user, transparent with red icon, cursor: not-allowed - user has either blocked you, or it's an admin not in your friendlist).
                After clicking on a user, you can see his profile with all of his posts. You can send friend request/remove a user from friends, or block/unblock a user.
                In 'Messages' section, you can see a list of all users you can text. You are allowed to text yourself or your friends. If you have unread messages, you'll have a notification in 'Messages' menu, which also appears on icons your conversations with friends, where you have unread messages.
                You can also upload image files in all posts, comments and DMs."
                back="/projects"
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
