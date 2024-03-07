



const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
      borderColor: "red",
      fill: true
    }, {
      data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
      borderColor: "green",
      fill: true
    }, {
      data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 8000],
      borderColor: "blue",
      fill: true
    }]
  },
  options: {
    legend: { display: false }
  }
});




let lists = document.querySelectorAll('.navigation li');

function activeLink() {
    lists.forEach((item) => {
        item.classList.remove("hovered");
    })
    this.classList.add("hovered")
}

lists.forEach(item => item.addEventListener("amouseover", activeLink));








let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let header = document.querySelector('.header');

toggle.onclick = function () {
    navigation.classList.toggle ('active');
    main.classList.toggle ('active');
    second.classList.toggle ('active');
    header.classList.toggle ('active');
}



const tableauDeBord = document.getElementById("tableauDeBord");
const container = document.getElementById("main");
tableauDeBord.onclick = function () {
  main.style.display = "block";
  second.style.display = "none";
  document.getElementsByClassName("active") = "true";

}





const achats = document.getElementById("achats");
const second = document.getElementById("second");
achats.onclick = function () {
  second.style.display = "block";
  main.style.display = "none";
  document.getElementsByClassName("active") = "true";

}


/*const Graphique = document.getElementById("Graphique");
const graphique = document.getElementById("graphique");
Graphique.onclick = function () {
  graphique.style.display = "block";
  main.style.display = "none";
  achats.style.display = "none";
  document.getElementsByClassName("active") = "true";

}*/






// let montantTotal = document.getElementById("montant-total");
// let montantUtilisateur = document.getElementById("montant-utilisateur");
// const boutonVerifMontant = document.getElementById("verifier-montant");
// const boutonMontantTotal = document.getElementById("bouton-montant-total");
// const titreProduit = document.getElementById("titre-produit");
// const erreurBudget = document.getElementById("erreur-budget");
// const erreurTitreProduit = document.getElementById("erreur-titre-produit");
// const erreurCoutProduit = document.getElementById("erreur-cout-produit");
// const montant = document.getElementById("montant");
// const valeurDepenses = document.getElementById("valeur-depenses");
// const montantSolde = document.getElementById("montant-solde");
// const liste = document.getElementById("liste");
// let montantTemp = 0;

// // Partie de définition du budget
// boutonMontantTotal.addEventListener("click", () => {
//   montantTemp = montantTotal.value;
//   // Entrée vide ou négative
//   if (montantTemp === "" || montantTemp < 0) {
//     erreurBudget.classList.remove("hide");
//   } else {
//     erreurBudget.classList.add("hide");
//     // Définir le budget
//     montant.innerHTML = montantTemp;
//     // Définir le solde
//     montantSolde.innerText = montantTemp - valeurDepenses.innerText;
//     // Vider la zone de saisie
//     montantTotal.value = "";
//   }
// });

// // Fonction pour désactiver les boutons Modifier et Supprimer
// const desactiverBoutons = (bool) => {
//   let boutonsModif = document.getElementsByClassName("edit");
//   Array.from(boutonsModif).forEach((element) => {
//     element.disabled = bool;
//   });
// };

// // Fonction pour modifier les éléments de la liste
// const modifierElement = (element, modif = false) => {
//   let divParent = element.parentElement;
//   let soldeCourant = montantSolde.innerText;
//   let depenseCourante = valeurDepenses.innerText;
//   let montantParent = divParent.querySelector(".montant").innerText;
//   if (modif) {
//     let texteParent = divParent.querySelector(".produit").innerText;
//     titreProduit.value = texteParent;
//     montantUtilisateur.value = montantParent;
//     desactiverBoutons(true);
//   }
//   montantSolde.innerText = parseInt(soldeCourant) + parseInt(montantParent);
//   valeurDepenses.innerText =
//     parseInt(depenseCourante) - parseInt(montantParent);
//   divParent.remove();
// };

// // Fonction pour créer la liste
// const creerListe = (nomDepense, valeurDepense) => {
//   let contenuSousListe = document.createElement("div");
//   contenuSousListe.classList.add("sublist-content", "flex-space");
//   liste.appendChild(contenuSousListe);
//   contenuSousListe.innerHTML = `<p class="produit">${nomDepense}</p><p class="montant">${valeurDepense}</p>`;
//   let boutonModif = document.createElement("button");
//   boutonModif.classList.add("fa-solid", "fa-pen-to-square", "edit");
//   boutonModif.style.fontSize = "1.2em";
//   boutonModif.addEventListener("click", () => {
//     modifierElement(boutonModif, true);
//   });
//   let boutonSuppr = document.createElement("button");
//   boutonSuppr.classList.add("fa-solid", "fa-trash-can", "delete");
//   boutonSuppr.style.fontSize = "1.2em";
//   boutonSuppr.addEventListener("click", () => {
//     modifierElement(boutonSuppr);
//   });
//   contenuSousListe.appendChild(boutonModif);
//   contenuSousListe.appendChild(boutonSuppr);
//   document.getElementById("liste").appendChild(contenuSousListe);
// };

// // Fonction pour ajouter des dépenses
// boutonVerifMontant.addEventListener("click", () => {
//   // Vérification des champs vides
//   if (!montantUtilisateur.value || !titreProduit.value) {
//     erreurTitreProduit.classList.remove("hide");
//     return false;
//   }
//   // Activer les boutons
//   desactiverBoutons(false);
//   // Dépense
//   let depense = parseInt(montantUtilisateur.value);
//   // Dépense totale (existante + nouvelle)
//   let somme = parseInt(valeurDepenses.innerText) + depense;
//   valeurDepenses.innerText = somme;
//   // Solde total (budget - dépense totale)
//   const soldeTotal = montantTemp - somme;
//   montantSolde.innerText = soldeTotal;
//   // Créer la liste
//   creerListe(titreProduit.value, montantUtilisateur.value);
//   // Vider les champs de saisie
//   titreProduit.value = "";
//   montantUtilisateur.value = "";
// });







let nav = document.getElementById("navigation");
let title = nav.getElementsByTagName("li");
for (let i = 0; i < title.length; i++) {
  title[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



//Activer le modal 
const modal = document.getElementById("modal");
const btn = document.getElementById("mybtn");
btn.onclick = function () {
  modal.style.display = "block";
};

//Desactiver le modal
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});



// const modale = document.getElementById("modale");
// const print = document.getElementById("print");
// print.onclick = function () {
//   modale.style.display = "block";
// };

// //Desactiver le modal
// window.addEventListener("click", function (event) {
//   if (event.target == modale) {
//     modale.style.display = "none";
//   }
// });







function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}





const d = new Date();
document.getElementById("date").innerHTML = d;





 var price;
 var quantity;
 var amount;
 var prod_name
 var ids;
 var tax = 50;

 function calculate() {
   ids = document.getElementById("Ids").value;
   price = document.getElementById("prc").value;
   quantity = document.getElementById("qty").value;
   amount = price * quantity;
   document.getElementById("amnt").value = amount;
 }

 function addData() {
   prod_name = document.getElementById("product").value;
   document.getElementById("newtr").innerHTML += '<tr><td>' + ids + '</td><td>' + prod_name +
    '</td><td>' + price + '</td><td>' + quantity + '</td><td>' + amount + '</td><tr>'
    document.getElementById("Ids").value = "";
    document.getElementById("product").value = "";
    document.getElementById("prc").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("amnt").value = "";
    document.getElementById("subtotal-amount").innerHTML = price * quantity;
    // document.getElementById("total-amount").innerHTML = price * quantity - tax;
    document.getElementById("total").innerHTML = price * quantity - tax;
 }
