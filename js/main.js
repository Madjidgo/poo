// function user(prenom,nom,pays,age,paiement,annee){
// this.prenom = prenom;
// this.nom = nom;
// this.pays = pays;
// this.age  = age;
// this.paiement = paiement;
// this.annee = annee;
//
//
//
//
//
// this.getName = function() {
// return(this.prenom+ " "+this.nom+" "+this.pays+" "+this.age +'ans'+" "+ "moyen de paiement "+ this.paiement);
// };
//
//
// this.getAge = function(){
//   return('Année de naissance est :' + (this.annee-this.age));
// };
//
//
//
//
// }
// var homme1 = new user('Madjid','go',['France'],40,['CB'],2017);
// alert((homme1.getName()) + " "+(homme1.getAge()));
//
//
// // exercice 1.2 Pour aller plus loin
// var comparateur = {
//   paysC: ["France","Belgique","Canada"],
//   paiementC:["visa", "mastercard","CB"],
//   ageMin: 21,
//
//   isValidAge: function (user) {
//     if(user.age>this.ageMin){
//       alert("vous êtes autorisés");
//     }
//     else{
//       alert('Refus');
//     }
//   },
//
//   isValidCountry: function(homme) {
//     for (var i = 0; i < this.paysC.length; i++) {
//       this.paysC[i];
//
//     if(homme.pays != this.paysC[i]){
//       alert("Votre pays ne figure  pas bien sur la liste autorisé ");
//
//     }
//     else{
//       alert("let's go!"+this.paysC[i]);
//       break;
//
//     }
//   }
// },
//
//   isValidPaiement : function(user){
//     for (var i = 0; i < this.paiementC.length; i++) {
//       this.paiementC[i];
//
//     if(user.paiement != this.paiementC[i]){
//       alert("moyen de paiement accepte"+  this.paiementC[i]);
//       break ;
//
//     }
//     else{
//       alert("paiement Refusé");
//
//     }
//   }
// },
// }
// comparateur.isValidAge(homme1);
// comparateur.isValidCountry(homme1);
// comparateur.isValidPaiement(homme1);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////:

// exercice 2 Constructor
function guerrier (nom,attack,sante,defense){
  this.nom = nom;
  this.attack= attack;
  this.sante = sante;
  this.defense = defense;


this.combat = function(X){
  X.sante -=  this.attack;
  alert("Mon Nom est : "+ this.nom+ "  "+ "Mon attack vaut :"+"  " +this.attack+ "Mon niveau de santé est de :"+ " " +this.sante+ " "+"Ma defense est de:"+ " "  +this.defense);

};
}
var guerrier1 = new guerrier('Mad',45,45,45);
var guerrier2 = new guerrier('Go',51,51,51);


guerrier1.combat(guerrier2);
guerrier2.combat(guerrier1);


// magicien
function magicien (nom,attack,sante,defense,mana){
  this.nom = nom;
  this.attack= attack;
  this.sante = sante;
  this.defense = defense;
  this.mana = mana;



  this.soin = function(){
  this.mana -=10;
  this.sante +=10;

  if(this.mana < 10){
    alert("mana insuffisante attaque impossible");
  }
  else{
    alert('mana suffisante pour porter un soin');
  }

  }
}
var magicien1 = new magicien('Max',80,80,80,90);
magicien1.soin();

guerrier1.combat(magicien1);
guerrier2.combat(magicien1);
