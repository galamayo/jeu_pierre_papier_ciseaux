const choixOrdinateurDisplay = document.getElementById('choix-ordinateur')
const votreChoixDisplay = document.getElementById('choix-votre')
const resultatDisplay = document.getElementById('resultat')
const possiblesChoix = document.querySelectorAll('button')

const statChoixOrdinateurDisplay = document.getElementById('choix-pierre')
const statChoixOrdinateurDisplay1 = document.getElementById('choix-papier')
const statChoixOrdinateurDisplay2 = document.getElementById('choix-ciseaux')

const statChoixUtilisateurDisplay = document.getElementById('utilisateur-choix-pierre')
const statChoixUtilisateurDisplay1 = document.getElementById('utilisateur-choix-papier')
const statChoixUtilisateurDisplay2 = document.getElementById('utilisateur-choix-ciseaux')

const victoireOdinateur = document.getElementById('ordi-victoire')
const defaiteOdinateur = document.getElementById('ordi-defaite')
const egalite = document.getElementById('egalite-ordi')
const egalite1 = document.getElementById('egalite-user')
const victoireUtilisateur = document.getElementById('user-victoire')
const defaiteUtilisateur = document.getElementById('user-defaite')

let userChoice
let computerChoice
let result

let nbrePierre = 0
let nbrePapier = 0
let nbreCiseaux = 0

let nbrePierreUtilisateur = 0
let nbrePapierUtilisateur = 0
let nbreCiseauxUtilisateur = 0

let victOrdi = 0
let defOrdi = 0
let egal = 0
let egal1 = 0
let victUser = 0
let defUser = 0

possiblesChoix.forEach(possibleChoix => possibleChoix.addEventListener('click', (e) => {
    
    userChoice = e.target.id
    votreChoixDisplay.innerHTML = userChoice
    choixUtilisateur(userChoice)
    generateComputerChoice()
   
    getResult()
    statComputer()
    statUtilisateur()
    statJoueur()
    
   }))

   function statComputer(){
        statChoixOrdinateurDisplay.innerHTML = nbrePierre
        statChoixOrdinateurDisplay1.innerHTML = nbrePapier
        statChoixOrdinateurDisplay2.innerHTML = nbreCiseaux
    
   }
   function statUtilisateur(){
    statChoixUtilisateurDisplay.innerHTML = nbrePierreUtilisateur
    statChoixUtilisateurDisplay1.innerHTML = nbrePapierUtilisateur
    statChoixUtilisateurDisplay2.innerHTML = nbreCiseauxUtilisateur
   }
   function statJoueur(){
    victoireOdinateur.innerHTML = victOrdi
    defaiteOdinateur.innerHTML = defOrdi
    egalite.innerHTML = egal
    egalite1.innerHTML = egal1
    victoireUtilisateur.innerHTML = victUser
    defaiteUtilisateur.innerHTML = defUser
   }


   function choixUtilisateur(userChoice1){

    if(userChoice1 === 'pierre'){
        nbrePierreUtilisateur++
    }
    if(userChoice1 === 'papier'){
        nbrePapierUtilisateur++
    }
    if(userChoice1 === 'ciseaux'){
        nbreCiseauxUtilisateur++
    }
   }

  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
    
    if (randomNumber === 1) {
      computerChoice = 'pierre'
      nbrePierre++
    }
    if (randomNumber === 2) {
      computerChoice = 'ciseaux'
      nbreCiseaux++
    }
    if (randomNumber === 3) {
        nbrePapier++
      computerChoice = 'papier'
    }
    choixOrdinateurDisplay.innerHTML = computerChoice
  }

  function getResult() {
    if (computerChoice === userChoice) {
      result = 'its a draw!'
      egal++
      egal1 = egal
    }
    if (computerChoice === 'pierre' && userChoice === "papier") {
      result = 'you win!'
      victUser++
      defOrdi++
    }
    if (computerChoice === 'pierre' && userChoice === "ciseaux") {
      result = 'you lost!'
      defUser++
      victOrdi++
    }
    if (computerChoice === 'papier' && userChoice === "ciseaux") {
      result = 'you win!'
      victUser++
      defOrdi++
    }
    if (computerChoice === 'papier' && userChoice === "pierre") {
      result = 'you lose!'
      victOrdi++
      defUser++
    }
    if (computerChoice === 'ciseaux' && userChoice === "pierre") {
      result = 'you win!'
      victUser++
      defOrdi++
    }
    if (computerChoice === 'ciseaux' && userChoice === "papier") {
      result = 'you lose!'
      victOrdi++
      defUser++
    }
    resultatDisplay.innerHTML = result
  }