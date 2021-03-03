// ================================== METODA RĘCZNA =========================================

// 🐼 Najprostszym sposobem na debugowanie może okazać się przenalizowanie błędu cypressa - są bardzo opisowe
// i "cofanie się w czasie" klikająć po krokach i sprawdzając ich rezultaty

// ================================== METODA DEBUG =========================================

// 🐼 Jeżeli potrzebujesz zatrzymać test w danym miejscu i sprawdzić, co aktualnie robił cypress
// możesz użyć metody .debug() Pamiętaj żeby otworzyć devtoolsy z przeglądarki za pomocą przycisku F12
// pozwoli ci to na podglądnięcie szczegółów dotyczących kroku

cy.get('button').click().debug() // wyświetli kliknięcie w button jako subject w konsoli

// ================================== METODA PAUSE =========================================

// 🐼 Żeby zatrzymać test i sprawdzić jaki jest w danej chwili stan aplikacji, możesz użyć .pause()
// cypress przejdzie wtedy w tryb krokowy - będziesz w stanie przechodzić kolejno po krokach
// lub wznowić test. Może się to okazać przydatne szczególnie podczas testowania requestów, ponieważ
// można monitorować sprawdzić zakładkę network

cy.pause() // wpisane w jakiekolwiek miejsce spowoduje przejście w tryb krokowy

// ================================== METODA NATYWNA - DEBUGGER =========================================

// 🐼 Ostatni sposób na debuggowanie może okazać się być "tricky". Możesz dodać słowo kluczowe debugger
// w konkretnym miejscu w teście, ale musisz pamiętać o tym, że cypress działa asynchronicznie. Dodaj
// debugger po "wyczekaniu" komendy dzięki methodzie then()

cy.get('.my-item').then(item => {
    debugger;
})
