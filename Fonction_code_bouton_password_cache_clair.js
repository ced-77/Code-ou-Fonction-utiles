/**
 * Cette partie de code permet de mettre à coté d'une balise INPUT 
 * ayant une class "password", une balise BUTTON et de gérer son action
 * Lorque le texte du bouton est en clair et que le type "password" de la 
 * balise INPUT est actif, en appuyant sur le bouton celui-ci fait passer
 * le type de la balise INPUT de "password" à "text" pour mettre le texte en clair
 * et fait changer sur la balise BUTTON le texte de En clair à Caché.
 * En rappuyant sur le bouton on obtient l'état inverse.
 * 
 * Cette partie de code à été créer pour respecter les Bonnes pratique du web 
 * afin de le client puisse avoir le choix entre une saisie de mot de passe cachée
 * ou en clair.
 *                
 */
 
  // creation du bouton pour cacher ou mettre en claire la saisie de l'input password
  
     $('input.password').after('<button class="password">En clair</button>'); 
        
  // Creation de la fonction sur le click du bouton pour afficher ou non le txt en clair
  
    $('button.password').on('click', function(event){ 
    	// annulation du comportement par defautl
    	event.preventDefault(); 
    
    	var attribumotDePasse = $('input.password' ).attr('type');
     console.log(attribumotDePasse);
    
    		// controle de l'attribue
    			if (attribumotDePasse == 'password'){
    				$('input.password').attr('type',"text");
    				$('button.password' ).text('Caché');	
    
    			} else { 
    				$('input.password' ).attr('type',"password");
    				$('button.password' ).text('En clair');
           // fin de la condition 
    			}
    // fin de la fonction click sur l'input password	
    });
