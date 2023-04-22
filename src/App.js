import "./App.scss";
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
                fourthBubbleContent="Basic web development trio - (HTML, CSS, JS), React, Redux, Node.js, databases - (mySQL, mongoDB), VBA."
                fourthBubbleContentCZ="Základní trio pro vývoj webových stránek - (HTML, CSS, JS), React, Redux, Node.js, databáze - (mySQL, mongoDB), VBA."
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
                firstBubbleTitle="Wormhole Media"
                firstBubbleTitleCZ="Wormhole Media"
                firstBubbleContent="My most recent and most advanced project yet. My own social media - full-stack application with a lot of functionality. You need to create an account to proceed, after logging in you are able to CRUD posts, comments and messages, like/dislike posts, add/remove friends, as well as block other users."
                firstBubbleContentCZ="Můj zatím nejaktuálnější a nejsložitější projekt. Vlastní sociální síť - full-stack aplikace bohatá na funkcionalitu. Musíte si založit vlastní účet, než vás aplikace pustí dál. Po přihlášení máte možnost vytvářet/upravovat/mazat příspěvky, komentáře a soukromé zprávy, pozitivně/negativně hodnotit příspěvky, přidávat/mazat přátele, stejně jako blokovat ostatní uživatele."
                secondBubbleTitle="Chulak Bazaar"
                secondBubbleTitleCZ="Chulak Bazaar"
                secondBubbleContent="Own e-shop. Most of its functionality is explained in the app."
                secondBubbleContentCZ="Vlastní e-shop. Většina funkcionality je vysvětlena v samotné aplikaci."
                thirdBubbleTitle="Man, don't get angry!"
                thirdBubbleTitleCZ="Člověče, nezlob se!"
                thirdBubbleContent="Board game, rules can be looked up online, although there are different variants. In this one, player has to choose if he wants to move with an active piece or add a new one before rolling the dice."
                thirdBubbleContentCZ="Desková hra, kterou asi všichni znají, pravidla se dají najít online, ačkoliv má hra více variant. V této variantě se hráč musí rozhodnout, jestli bude hrát s nasazenou figurkou, nebo si nasadí novou figurku, předtím, než hodí kostkou."
                fourthBubbleTitle="Matrix banking"
                fourthBubbleTitleCZ="Matrix banking"
                fourthBubbleContent="Fictional I-banking. Enables you to send money to other users or borrow money from the bank. It was one of my first apps, it's only frontend without DB, so refreshing the page will reset the state to default value."
                fourthBubbleContentCZ="Fiktivní internetové bankovnictví. Zde můžete posílat peníze ostatním uživatelům nebo si půjčit peníze od banky. Jedná se o jednu z mých prvních aplikací vůbec, obsahuje pouze frontend bez databáze, takže obnovení stránky aplikaci resetuje do výchozího stavu."
                fifthBubbleTitle="Old website"
                fifthBubbleTitleCZ="Stará webovka"
                fifthBubbleContent="This is how my website was supposed to look, but I decided to choose a minimalistic design as I wanted it to look more professional."
                fifthBubbleContentCZ="Takhle měla moje webovka původně vypadat, ale nakonec jsem se rozhodl pro minimalistický design, jelikož jsem chtěl, aby vypadala profesionálněji."
                firstLink="https://wormholemedia.jancesenek.dev"
                secondLink="https://chulakbazaar.jancesenek.dev"
                thirdLink="https://clobrdo.jancesenek.dev"
                fourthLink="https://matrix-banking.jancesenek.dev"
                fifthLink="https://old-website.jancesenek.dev"
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
