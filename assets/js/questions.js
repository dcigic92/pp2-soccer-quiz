// Array with questions and answers

const questionsList = [
    {
        q: "./assets/images/logo/albania.png",
        a: [ 
            { option: "A: Serbia", correct: false },
            { option: "B: Albania", correct: true },
            { option: "C: Kosovo", correct: false },
            { option: "D: Turkey", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/algeria.png",
        a: [ 
            { option: "A: Tunisia", correct: false },
            { option: "B: Turkey", correct: false },
            { option: "C: Morocco", correct: false },
            { option: "D: Algeria", correct: true },
        ],
    },
    {
        q: "./assets/images/logo/argentina.png",
        a: [ 
            { option: "A: Argetina", correct: true },
            { option: "B: Uruguay", correct: false },
            { option: "C: Australia", correct: false },
            { option: "D: Paraguay", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/austria.png",
        a: [ 
            { option: "A: Switzerland", correct: false },
            { option: "B: Austria", correct: true },
            { option: "C: Morocco", correct: false },
            { option: "D: Algeria", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/brazil.png",
        a: [ 
            { option: "A: South Africa", correct: false },
            { option: "B: Jamaica", correct: false },
            { option: "C: Cameroon", correct: false },
            { option: "D: Brazil", correct: true },
        ],
    },
    {
        q: "./assets/images/logo/colombia.png",
        a: [ 
            { option: "A: Ecuador", correct: false },
            { option: "B: Venezuela", correct: false },
            { option: "C: Peru", correct: false },
            { option: "D: Colombia", correct: true },
        ],
    },
    {
        q: "./assets/images/logo/costa_rica.png",
        a: [ 
            { option: "A: Costa Rica", correct: true },
            { option: "B: Croatia", correct: false },
            { option: "C: Cameroon", correct: false },
            { option: "D: Chile", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/croatia.png",
        a: [ 
            { option: "A: Serbia", correct: false },
            { option: "B: Croatia", correct: true },
            { option: "C: Hungary", correct: false },
            { option: "D: Poland", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/czech_republic.png",
        a: [ 
            { option: "A: Wales", correct: false },
            { option: "B: England", correct: false },
            { option: "C: Czech Republic", correct: true },
            { option: "D: Slovakia", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/england.png",
        a: [ 
            { option: "A: England", correct: true },
            { option: "B: Wales", correct: false },
            { option: "C: Denmark", correct: false },
            { option: "D: Norway", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/finland.png",
        a: [ 
            { option: "A: Denmark", correct: false },
            { option: "B: Estonia", correct: false },
            { option: "C: Finland", correct: true },
            { option: "D: Sweden", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/france.png",
        a: [ 
            { option: "A: Wales", correct: false },
            { option: "B: Belgium", correct: false },
            { option: "C: France", correct: true },
            { option: "D: England", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/germany.png",
        a: [ 
            { option: "A: Germany", correct: true },
            { option: "B: Austria", correct: false },
            { option: "C: Switzerland", correct: true },
            { option: "D: Netherlands", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/greece.png",
        a: [ 
            { option: "A: Montenegro", correct: false },
            { option: "B: Bulgaria", correct: false },
            { option: "C: Cyprus", correct: false },
            { option: "D: Greece", correct: true },
        ],
    },
    {
        q: "./assets/images/logo/iceland.png",
        a: [ 
            { option: "A: Norway", correct: false },
            { option: "B: Greece", correct: false },
            { option: "C: Scotland", correct: false },
            { option: "D: Iceland", correct: true },
        ],
    },
    {
        q: "./assets/images/logo/morocco.png",
        a: [ 
            { option: "A: Morocco", correct: true },
            { option: "B: Algeria", correct: false },
            { option: "C: Libya", correct: false },
            { option: "D: Egypt", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/netherlands.png",
        a: [ 
            { option: "A: Netherlands", correct: true },
            { option: "B: Spain", correct: false },
            { option: "C: Portugal", correct: false },
            { option: "D: Germany", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/norway.png",
        a: [ 
            { option: "A: Finland", correct: false },
            { option: "B: Denmark", correct: false },
            { option: "C: North Macedonia", correct: false },
            { option: "D: Norway", correct: true },
        ],
    },
    {
        q: "./assets/images/logo/peru.png",
        a: [ 
            { option: "A: Bolivia", correct: false },
            { option: "B: Poland", correct: false },
            { option: "C: Portugal", correct: false },
            { option: "D: Peru", correct: true },
        ],
    },
    {
        q: "./assets/images/logo/poland.png",
        a: [ 
            { option: "A: Albania", correct: false },
            { option: "B: Serbia", correct: false },
            { option: "C: Poland", correct: true },
            { option: "D: Slovakia", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/portugal.png",
        a: [ 
            { option: "A: Peru", correct: false },
            { option: "B: France", correct: false },
            { option: "C: Portugal", correct: true },
            { option: "D: Spain", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/serbia.png",
        a: [ 
            { option: "A: Poland", correct: false },
            { option: "B: Montenegro", correct: false },
            { option: "C: Serbia", correct: true },
            { option: "D: Albania", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/slovakia.png",
        a: [ 
            { option: "A: Slovenia", correct: false },
            { option: "B: Czech Republic", correct: false },
            { option: "C: Slovakia", correct: true },
            { option: "D: Russia", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/south_korea.png",
        a: [ 
            { option: "A: South Korea", correct: true },
            { option: "B: North Korea", correct: false },
            { option: "C: Thailand", correct: false },
            { option: "D: Indonesia", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/spain.png",
        a: [ 
            { option: "A: Spain", correct: true },
            { option: "B: Belgium", correct: false },
            { option: "C: Germany", correct: false },
            { option: "D: Netherlands", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/sweden.png",
        a: [ 
            { option: "A: Slovenia", correct: false },
            { option: "B: Switzerland", correct: false },
            { option: "C: Spain", correct: false },
            { option: "D: Sweden", correct: true },
        ],
    },
    {
        q: "./assets/images/logo/switzerland.png",
        a: [ 
            { option: "A: Slovenia", correct: false },
            { option: "B: Switzerland", correct: true },
            { option: "C: Denmark", correct: false },
            { option: "D: Austria", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/turkey.png",
        a: [ 
            { option: "A: Tunisia", correct: false },
            { option: "B: Turkey", correct: true },
            { option: "C: Algeria", correct: false },
            { option: "D: Iran", correct: false },
        ],
    },
    {
        q: "./assets/images/logo/uruguay.png",
        a: [ 
            { option: "A: Argentina", correct: false },
            { option: "B: Bolivia", correct: false },
            { option: "C: Chile", correct: false },
            { option: "D: Uruguay", correct: true },
        ],
    },
    {
        q: "./assets/images/logo/wales.png",
        a: [ 
            { option: "A: Wales", correct: true },
            { option: "B: England", correct: false },
            { option: "C: Czech Republic", correct: false },
            { option: "D: Ireland", correct: false },
        ],
    },
]