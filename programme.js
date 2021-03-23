
// On va créer un programme qui calcule le salaire des heures
// supplémentaires par majoration et on peut le convertir en heure de récupération.


// fonctions
clickHeure = function(){
    nbHeure = parseFloat(document.getElementById('nbHeure').value);
    salaireHorraire = parseFloat(document.getElementById('salaireHorraire').value);
    main();
}

main = function(){
    nbHeureSup();
    majoration();
}

nbHeureSup = function(){
    if (nbHeure > 35){
        nbHeure -= 35;
        return nbHeure;
    }else {
        document.getElementById("resultat").innerHTML = ('Vous n\'avez pas d\'heures supplémentaires');
        nbHeure = 0; 
    }
}

majoration = function(){
    if ( nbHeure > 7 ){
        h50 = nbHeure - 7 ;
        h25 = 7;
        h50MajH = h50 * salaireHorraire * 1.5;
        h25MajH = h25 * salaireHorraire * 1.25;
        h50MajR = h50 * 1.5;
        h25MajR = h25 * 1.25;

    } else if (nbHeure > 0 && nbHeure <= 7 ){
        h25 = nbHeure ;
        h50MajH = 0;
        h25MajH = h25 * salaireHorraire * 1.25;
        h50MajR = 0;
        h25MajR = h25 * 1.25;
    }
    combienArgent = h50MajH + h25MajH;
    combien = combienArgent.toFixed(2);
    combienRecup = h50MajR + h25MajR;
    combienRecupH = parseInt(combienRecup);
    combienRecupM = combienRecup % 1 * 60;
    document.getElementById("resultat").innerHTML = ("Vous avez gagné " + combien + " euros.");
    document.getElementById("resultat2").innerHTML = (" Vous pouvez récupérer " + combienRecupH + " heures " + combienRecupM + " minutes.");
}
