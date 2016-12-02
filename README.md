# Code-ou-Fonction-utiles
Répertoir des bout de code ou des fonctions qui peuvent être utiles au développement

  # Fonction_code_bouton_password_cache_clair.js 

        * Cette partie de code permet de mettre à coté d'une balise INPUT 
        ayant une class "password", une balise BUTTON et de gérer son action.
        Lorque le texte du bouton est en clair et que le type "password" de la 
        balise INPUT est actif, en appuyant sur le bouton celui-ci fait passer
        le type de la balise INPUT de "password" à "text" pour mettre le texte en clair
        et fait changer sur la balise BUTTON le texte de En clair à Caché.
        En rappuyant sur le bouton on obtient l'état inverse.
        Cette partie de code à été créer pour respecter les Bonnes pratique du web 
        afin de le client puisse avoir le choix entre une saisie de mot de passe cachée
        ou en clair.

 
 
   # Fonction maintenant_imaha()

        * Fonction javaScript qui permet de retourner la date et l'heure
        sous forme de tableau objet. Elle retourne le tableau avec 
        les valeurs jour et mois en fonction du pays entrée en paramettre
        Ainsi que la date complete sous format du pays

        pays : us = USA, fr = france*(par defaut), jp = 日本, cn = 中国,   

        @param string, var pays (code http du pay )

        @return array, tableau objet 
