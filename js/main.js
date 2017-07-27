function user(prenom,nom,pays,age,paiement,anneDeNaissance){
this.prenom = prenom;
this.nom = nom;
this.pays = pays;
this.age  = age;
this.paiement = paiement;

this.anneDeNaissance = anneDeNaissance;





this.getName = function() {
return(this.prenom+ " "+this.nom+" "+this.pays+" "+this.age +'ans'+" "+ "moyen de paiement "+ this.paiement);
};


this.getAge = function(){
  return('Année de naissance est :' + (this.anneDeNaissance-this.age));
};


}
var homme1 = new user('Madjid','go','France',40,['CB'],2017);
alert((homme1.getName()) + (homme1.getAge()));
