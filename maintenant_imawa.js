// JavaScript Document


/**
 *            maintenant_imawa()
 *   Fonction javaScript qui permet de retourner la date et l'heure
 *   sous forme de tableau. Elle retourne le tableau avec 
 *   les valeurs jour et mois en fonction du pays entrée en paramettre
 *   
 *   pays : us = anglais, fr = france, ja = japon   
 *   
 *   @param string, var pays (code http du pay )
 *   
 *   @return array, tableau 
 */
 
             function maintenant_imawa ( pays = 'fr' ) {
             
                      // initialisation de l'objet date
                         var date_maintenant = new Date();
                         
                      // recuperation des données de l'objet date
                         // heure - time - 時
                            var heure = date_maintenant.getHours();
                            if ( heure < 10 ) { heure = '0' + heure }
                            
                         // minites - minutes - 分
                            var minutes = date_maintenant.getMinutes();
                            if (minutes < 10 ) { minutes = '0' + minutes }
                            
                         // secondes - seconds - 
                            var secondes = date_maintenant.getSeconds();
                            if (secondes < 10 ) { secondes = '0' +secondes }
                            
                         // creaton du format heure 
                            var heure_maintenant = heure+':'+minutes+':'+secondes;
                            
                      // recuperation de la date
                         // annee - year - 年
                            var annee = date_maintenant.getYear()+1900;
                            
                         // mois en chiffre
                         // on rajoute +1 car le tableau commence à 0 ezt non 1 pour janvier 
                            var mois_chiffre = date_maintenant.getMonth()+1;
                            if (mois_chiffre < 10 ) { mois_chiffre = '0'+mois-chiffre}
                            
                         // numéro du jour
                            var numero_jour = date_maintenant.getDate();
                            if (numero_jour < 10 ) { numero_jour = '0' + numero_jour }
                            
                         // Chiffre du nom du jour
                            var chiffre_nom_jour = date_maintenant.getDay();
                            
                      // verification du pays entré en parametre
                         if ( pays == 'fr' ) {
                                  // condition pour le jour
                                     if ( parseInt(chiffre_nom_jour) === 0 ) { nom_jour = 'Dimanche'}
                                     else if ( parseInt(chiffre_nom_jour) == 1 ) { nom_jour = 'Lundi'}
                                     else if ( parseInt(chiffre_nom_jour) == 2 ) { nom_jour = 'Mardi'}
                                     else if ( parseInt(chiffre_nom_jour) == 3 ) { nom_jour = 'Mercredi'}
                                     else if ( parseInt(chiffre_nom_jour) == 4 ) { nom_jour = 'Jeudi'}
                                     else if ( parseInt(chiffre_nom_jour) == 5 ) { nom_jour = 'Vendredi'}
                                     else if ( parseInt(chiffre_nom_jour) == 6 ) { nom_jour = 'Samedi'}
                                     else { nom_jour = false; }
                                     
                                  // condition pour le nom du mois
                                     if ( parseInt(mois_chiffre) === 1 ) { nom_mois = 'Janvier'}
                                     else if ( parseInt(mois_chiffre) == 2 ) { nom_mois = 'Fevrier'}
                                     else if ( parseInt(mois_chiffre) == 3 ) { nom_mois = 'Mars'}
                                     else if ( parseInt(mois_chiffre) == 4 ) { nom_mois = 'Avril'}
                                     else if ( parseInt(mois_chiffre) == 5 ) { nom_mois = 'Mai'}
                                     else if ( parseInt(mois_chiffre) == 6 ) { nom_mois = 'Juin'}
                                     else if ( parseInt(mois_chiffre) == 7 ) { nom_mois = 'Juillet'}
                                     else if ( parseInt(mois_chiffre) == 8 ) { nom_mois = 'Août'}
                                     else if ( parseInt(mois_chiffre) == 9 ) { nom_mois = 'Septembre'}
                                     else if ( parseInt(mois_chiffre) == 10 ) { nom_mois = 'Octobre'}
                                     else if ( parseInt(mois_chiffre) == 11 ) { nom_mois = 'Novrembre'}
                                     else if ( parseInt(mois_chiffre) == 12 ) { nom_mois = 'Decembre'}
                                     else { nom_mois = false; }
                                     
                         // fin de la condition france
                         } else if (pays == 'us' ) {
                                // condition pour le jour
                                     if ( parseInt(chiffre_nom_jour) === 0 ) { nom_jour = 'Sunday'}
                                     else if ( parseInt(chiffre_nom_jour) == 1 ) { nom_jour = 'Monday'}
                                     else if ( parseInt(chiffre_nom_jour) == 2 ) { nom_jour = 'Tuesday'}
                                     else if ( parseInt(chiffre_nom_jour) == 3 ) { nom_jour = 'Wednesday'}
                                     else if ( parseInt(chiffre_nom_jour) == 4 ) { nom_jour = 'Thursday'}
                                     else if ( parseInt(chiffre_nom_jour) == 5 ) { nom_jour = 'Friday'}
                                     else if ( parseInt(chiffre_nom_jour) == 6 ) { nom_jour = 'Saturday'}
                                     else { nom_jour = false; }
                                     
                                  // condition pour le nom du mois
                                     if ( parseInt(mois_chiffre) === 1 ) { nom_mois = 'January'}
                                     else if ( parseInt(mois_chiffre) == 2 ) { nom_mois = 'February'}
                                     else if ( parseInt(mois_chiffre) == 3 ) { nom_mois = 'March'}
                                     else if ( parseInt(mois_chiffre) == 4 ) { nom_mois = 'April'}
                                     else if ( parseInt(mois_chiffre) == 5 ) { nom_mois = 'May'}
                                     else if ( parseInt(mois_chiffre) == 6 ) { nom_mois = 'June'}
                                     else if ( parseInt(mois_chiffre) == 7 ) { nom_mois = 'July'}
                                     else if ( parseInt(mois_chiffre) == 8 ) { nom_mois = 'August'}
                                     else if ( parseInt(mois_chiffre) == 9 ) { nom_mois = 'September'}
                                     else if ( parseInt(mois_chiffre) == 10 ) { nom_mois = 'October'}
                                     else if ( parseInt(mois_chiffre) == 11 ) { nom_mois = 'November'}
                                     else if ( parseInt(mois_chiffre) == 12 ) { nom_mois = 'December'}
                                     else { nom_mois = false; }
                         
                         
                         
                         // end of condition us
                         } else if (pays == 'ja') {
                                   // condition pour le jour
                                   // 日の書き方
                                     if ( parseInt(chiffre_nom_jour) === 0 ) { nom_jour = '日曜日'}
                                     else if ( parseInt(chiffre_nom_jour) == 1 ) { nom_jour = '月曜日'}
                                     else if ( parseInt(chiffre_nom_jour) == 2 ) { nom_jour = '火曜日'}
                                     else if ( parseInt(chiffre_nom_jour) == 3 ) { nom_jour = '水曜日'}
                                     else if ( parseInt(chiffre_nom_jour) == 4 ) { nom_jour = '木曜日'}
                                     else if ( parseInt(chiffre_nom_jour) == 5 ) { nom_jour = '金曜日'}
                                     else if ( parseInt(chiffre_nom_jour) == 6 ) { nom_jour = '土曜日'}
                                     else { nom_jour = false; }
                                     
                                   // condition pour le nom du mois
                                   // 月の書き方
                                     if ( parseInt(mois_chiffre) === 1 ) { nom_mois = '一月'}
                                     else if ( parseInt(mois_chiffre) == 2 ) { nom_mois = '二月'}
                                     else if ( parseInt(mois_chiffre) == 3 ) { nom_mois = '三月'}
                                     else if ( parseInt(mois_chiffre) == 4 ) { nom_mois = '四月'}
                                     else if ( parseInt(mois_chiffre) == 5 ) { nom_mois = '五月'}
                                     else if ( parseInt(mois_chiffre) == 6 ) { nom_mois = '六月'}
                                     else if ( parseInt(mois_chiffre) == 7 ) { nom_mois = '七月'}
                                     else if ( parseInt(mois_chiffre) == 8 ) { nom_mois = '八月'}
                                     else if ( parseInt(mois_chiffre) == 9 ) { nom_mois = '九月'}
                                     else if ( parseInt(mois_chiffre) == 10 ) { nom_mois = '十月'}
                                     else if ( parseInt(mois_chiffre) == 11 ) { nom_mois = '十一月'}
                                     else if ( parseInt(mois_chiffre) == 12 ) { nom_mois = '十二月'}
                                     else { nom_mois = false; }
                         
                         // .. on orawri - 何か　の　終わり
                         }
                         
                         
             // controle affichage
                console.log('il est  : '+heure_maintenant);
                console.log('annees : '+annee);
                console.log('mois en chiffre : '+mois_chiffre);
                console.log('nous somme le : '+numero_jour);
                console.log('Nous somme : '+nom_jour);
                console.log('Nous somme en : '+nom_mois);
                if (pays == 'fr' ) {console.log('La date en français est : '+nom_jour+' '+numero_jour+' '+nom_mois+' '+annee+' et il est : '+heure_maintenant);}
                if (pays == 'ja') {console.log( '日本語で　今は '+annee+'年 '+nom_mois+' '+numero_jour+' '+nom_jour+' 時です：'+heure_maintenant );}
                if (pays == 'us') {console.log('English USA : '+nom_jour+' '+nom_mois+' '+numero_jour+' '+annee+' the time is : '+heure_maintenant); } 
                
                      
                      
                      
             
             
             
             // fin de la fonction maintenant_imawa()
             }
             
             
             // execution de la fonction
             maintenant_imawa('ja');     
