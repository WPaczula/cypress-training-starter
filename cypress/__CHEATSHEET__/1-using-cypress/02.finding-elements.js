// 🐼 Aby znaleźć element cypress wykorzystuje cssowe selektory i przechodzenie pomiędzy elementami na różne sposoby
// poniżej opisane są metody, które mogą ci się przydać do realizacji ćwiczeń. Jeżeli czujesz, że selektor jest niepewny
// możesz go przetestować w przeglądarce. Otwóz devtoolsy na stronie (F11), przejdź do konsoli i wpisz $(TWOJ_SELEKTOR).
// Metoda ta zwróci ci rezultat twojego selektora.

// ============================ METODA GET ============================

// 🐼 Metoda get pozwala na odnalezienie elementu za pomocą cssów
// znaczy to, że możesz szukać za pomocą klas, id czy atrybutów dodanych do htmla
// poniżej znajduje się parę przykładów

cy.get("button");                               // znajdź element button
cy.get("#my-id");                               // znajdź element o id my-id
cy.get('[name="email"]');                       // znajdź element o atrybucie name równym "email"

// ===== WAŻNA SPRAWA =====
// Cypress nie ma wsparcia dla XPathów. Nie jest to jednak do końca wada
// CSSowe selektory są szybsze
// Zespół cypressa poleca odizolowanie od stylowania i struktury HTMLa:

cy.get('button')                                // niestabilny selektor, przestanie działać po dodaniu kolejnego przycisku
cy.get('.button')                               // równiez przestanie działać po dodaniu innego przycisku
cy.get('#submit-button')                        // lepiej, ale dalej połączony ze stylami albo jsowymi listenerami
cy.get('[name=email]')                          // mniej podatne na zmianę, ale połączony ze semantyką HTMLa
cy.contains('Submit')                           // userzy szukają elementów po tekście, w niektórych projektach tekst nie jest zmienny
cy.get('[data-cy=submit]')                      // odizolowane od CSSa i HTMLa, ale wymaga wprowadzenia zmian do aplikacji

// ============================ METODA FIND ============================

// 🐼 Metoda find pozwala wyszukać element na wybranej części dokumentu
// zazwyczaj możesz jej użyć po tym, jak wyszukasz już coś za pomocą metody get

cy.get("#container").find(".toast");            // znajdź element o id "container" i wewnątrz niego szukaj elementu z klasą .toast

// ============================ METODA CONTAINS ============================

// 🐼 Metoda contains pozwoli ci na wyszukanie za pomocą tekstu
// Możesz w niej również określić cssowy selektor, który dokładniej pozwoli
// zidentyfikować wyszukiwany element. Można ją również łączyć tak jak metodę find

cy.contains("Save");                            // znajdź element z tekstem "Save"
cy.contains("/regex/");                         // znajdź element z tekstem spełniającym reges
cy.contains('.button[type="submit"]', "Save");  // znajdź submit button z tekstem "Save"

// ============================ METODA NEXT ============================

// 🐼 Metoda next pozwala na wybranie kolejnego elementu "poniżej". Bazuje ona na hierarchii więc trzeba korzystać z niej z rozwagą

// <label>Email</label>
// <input name="email"/>
cy.contains("Email").next();                    // metoda pozwoliłaby wybrać input powyżej

// ============================ METODY CHILDREN I PARENT ============================

// 🐼 Metody children i parent pozwalają na przechodzenie pomiędzy elementami "wgląb". Podobnie jak next bazuje jednak na hierarchii
// więc testy z jej użyciem mogą okazać się kruche

// <ol class="list">
//    <li>Uno</li>
//    <li>Dos</li>
//    <li>Tres</li>
// </ol>
cy.get(".list").children();                     // metoda zwróci tablicę elementów li

// ============================ METODA EQ ============================

// 🐼 Jezeli bedziesz operować na liście elementów mozesz wybrac jeden o konkretnym indexie
cy.get('#element').children().eq(1) // metoda zwróci drugi element

// ============================ METODA AS ============================

// 🐼 Czasem może się zdarzyć, że będziesz chciał zapisać element "na potem". Aby to zrobić możesz zapisać go za pomocą metody as(ALIAS),
// a "potem" pobrać jego wartość za pomocą funkcji get(@ALIAS) - pamiętaj o znaku małpy, dzięki temu cypress wie, że ma szukać w aliasach

cy.get(".use-later")
  .as("later");

// ...

cy.get("@later").then((myVariable) => {
    // 🐼 myVariable będzie zawierał to co zapisaliśmy poprzez "as"
}); 
