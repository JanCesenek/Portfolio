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
                pageNumber="One"
                leftArrow="/apps"
                rightArrow="/designs"
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
                In my opinion, just the fact that I'm doing this on my own, shows that I'm clearly passionate about programming, I'm a quick learner, I'm creative (since I have to come up with new ideas on how to demonstrate my knowledge) and I'm ready to keep learning new things once getting a job."
                secondBubbleContentCZ="Ačkoliv nemám titul v oboru, začal jsem se od začátku vzdělávat sám přes online kurzy.
                Jelikož jsem neměl žádnou podporu univerzitního prostředí, musel jsem vyvinout dodatečnou snahu hledáním různých zdrojů stejně jako plánováním jak získat nové dovednosti a kterým dát přednost podle důležitosti.
                Dle mého názoru už pouze skutečnost, že se programování věnuji sám, dokazuje, že jsem do toho zapálený, rychle se učím, jsem kreativní (jelikož jsem musel přijít s novými nápady, jak demonstrovat svoje znalosti) a také, že jsem připraven učit se nové věci, jakmile získám práci v oboru."
                thirdBubbleTitle="How can you contact me?"
                thirdBubbleTitleCZ="Jak mě můžete kontaktovat?"
                fourthBubbleTitle="What programming languages and technologies have I already worked with?"
                fourthBubbleTitleCZ="S jakými programovacími jazyky a technologiemi jsem už pracoval?"
                fourthBubbleContent="Basic web development trio - (HTML, CSS, JS), React, Redux, Node.js, databases - (mySQL, mongoDB), VBA."
                fourthBubbleContentCZ="Základní trio pro vývoj webových stránek - (HTML, CSS, JS), React, Redux, Node.js, databáze - (mySQL, mongoDB), VBA."
                fifthBubbleTitle="Where is the proof of my knowledge?"
                fifthBubbleTitleCZ="Kde je důkaz mých znalostí?"
                fifthBubbleContent="Navigate to other pages by clicking on arrows where you can see some of my finished projects with short description and links."
                fifthBubbleContentCZ="Pomocí šipek se dostanete na další stránky, kde můžete vidět některé z mých dokončených projektů s krátkým popisem a odkazy."
                contact
              />
            }
          />
          <Route
            path="/designs"
            element={
              <Page
                type="Six"
                pageNumber="Two"
                leftArrow="/"
                rightArrow="/apps"
                title="My projects - web designs"
                titleCZ="Moje projekty - design webových stránek"
                firstBubbleTitle="Travelling blog &#10004;"
                firstBubbleTitleCZ="Cestovatelský blog &#10004;"
                firstBubbleContent="My first website ever. Simple blog about studying abroad, especially focused on
                  the UK. As it was previously aimed to be individually deployed, but eventually left unfinished,
                  this is the only website without lorem ipsum (randomly generated text).
                  Note: The only thing unfinished about the project is the content, which is not
                    important for design purposes, therefore some information may not be entirely verified!"
                firstBubbleContentCZ="Moje první webovka vůbec. Jenoduchý blog o studiu v zahraničí, speciálně zaměřený na UK. Jelikož původní záměr byl stránku samostatně publikovat, ale nakonec zůstala nedokončena, toto je jediná stránka bez lorem ipsum (náhodně generovaný text).
                Poznámka autora: Jediná nedokončená věc na projektu je obsah, který není důležitý z hlediska designu, takže nějaké informace nemusí být úplně ověřené!"
                secondBubbleTitle="Chulak junk shop &#10004;"
                secondBubbleTitleCZ="Vetešnictví Chulak &#10004;"
                secondBubbleContent="A toy project - fictional junk shop based on my most favourite TV show Stargate.
                  Uninitiated will probably not understand the content, but it's the design that
                  matters, right?"
                secondBubbleContentCZ="Tohle jsem zrovna dělal čistě pro zábavu - fiktivní vetešnictví založené na mém oblíbeném seriálu Hvězdná Brána.
                Nezasvěcení pravděpodobně neporozumí obsahu, ale záleží přece jen na designu, nebo ne?"
                thirdBubbleTitle="Old website &#10004;"
                thirdBubbleTitleCZ="Stará webovka &#10004;"
                thirdBubbleContent="This is how my website was supposed to look, but I decided to choose a minimalistic design as I wanted it to look more professional."
                thirdBubbleContentCZ="Takhle měla moje webovka původně vypadat, ale nakonec jsem se rozhodl pro minimalistický design, jelikož jsem chtěl, aby vypadala profesionálněji."
                fourthBubbleTitle="Design 4"
                fourthBubbleTitleCZ="Design 4"
                fourthBubbleContent="Answer 4"
                fourthBubbleContentCZ="Answer 4"
                fifthBubbleTitle="Design 5"
                fifthBubbleTitleCZ="Design 5"
                fifthBubbleContent="Answer 5"
                fifthBubbleContentCZ="Answer 5"
                sixthBubbleTitle="Design 6"
                sixthBubbleTitleCZ="Design 6"
                sixthBubbleContent="Answer 6"
                sixthBubbleContentCZ="Answer 6"
                firstLink="https://blog.jancesenek.dev"
                secondLink="https://chulak-junk-shop.jancesenek.dev"
                thirdLink="https://old-website.jancesenek.dev"
              />
            }
          />
          <Route
            path="/apps"
            element={
              <Page
                type="Six"
                pageNumber="Three"
                leftArrow="/designs"
                rightArrow="/"
                title="My projects - apps and games"
                titleCZ="Moje projekty - aplikace a hry"
                firstBubbleTitle="Matrix banking &#10004;"
                firstBubbleTitleCZ="Matrix banking &#10004;"
                firstBubbleContent="Futuristic I-banking. I added some spice so it doesn't look too boring.
                Passwords for default users: ZT44-3333, SS188-2222, JD105-1111.
                Note: For every 10 dollars you borrow from Matrix you have 30 seconds to repay. What happens if you don't? You'll have to find out yourself."
                firstBubbleContentCZ="Futuristické internetové bankovnictví. Rozhodl jsem se to trochu okořenit, aby to nevypadalo úplně nudně.
                Hesla pro výchozí uživatele: ZT44-3333, SS188-2222, JD105-1111.
                Poznámka autora: Za každých 10 dolarů, které si půjčíte od Matrixu, máte 30 sekund na splacení. Co se stane, když nezaplatíte? Na to si musíte přijít sami."
                secondBubbleTitle="App 2"
                secondBubbleTitleCZ="App 2"
                secondBubbleContent="Answer 2"
                secondBubbleContentCZ="Answer 2"
                thirdBubbleTitle="App 3"
                thirdBubbleTitleCZ="App 3"
                thirdBubbleContent="Answer 3"
                thirdBubbleContentCZ="Answer 3"
                fourthBubbleTitle="App 4"
                fourthBubbleTitleCZ="App 4"
                fourthBubbleContent="Answer 4"
                fourthBubbleContentCZ="Answer 4"
                fifthBubbleTitle="App 5"
                fifthBubbleTitleCZ="App 5"
                fifthBubbleContent="Answer 5"
                fifthBubbleContentCZ="Answer 5"
                sixthBubbleTitle="App 6"
                sixthBubbleTitleCZ="App 6"
                sixthBubbleContent="Answer 6"
                sixthBubbleContentCZ="Answer 6"
                firstLink="https://matrix-banking.jancesenek.dev"
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
