/* Implémentation 1 :
   avec une librairie externe : underscorejs */
 function cartSum1(cart) {
   if (!_.isArray(cart) && !_.isObject(cart)) {
     // ici cart n'est ni un tableau ni un objet...
     return null;
   // ... donc à partir d'ici cart est soit un tableau soit un objet
   } else if (_.isEmpty(cart)) {
     // ici cart est vide...
     return 0;
   // ... donc à partir d'ici cart est un tableau ou objet non vie
   } else if (_.isArray(cart)) {
     // si cart est un tableau on va itérer
     var total = 0;
     cart.forEach(function(item) {
       var q = _.isNumber(item.q) ? item.q : 1;
       total += item.price * q;
     });
     return total;
   } else {
     // si cart est un objet on accède directement à ses propriétés q et price, c'est l'équivalent de item dans la condition précédente
     var q = 1;
     if (typeof cart.q !== "undefined") {
       q = cart.q;
     }
     return cart.price * q;
   }
 }

/* Implémentation 2 :
   toujours avec underscorejs,
   mais plus concis (début de la fonction), et donc plus lisible ? */
function cartSum2(cart) {
  // on teste les arguments
  if (!_.isArray(cart) && !_.isObject(cart)) return null;
  if (_.isEmpty(cart)) return 0;
  // si on est ici, les deux tests précédents n'ont pas "retourné"
  // donc on a soit un tableau non vide, soit un objet non vide

  // si cart est un tableau on itère sur ses items
  if (_.isArray(cart)) {
    var total = 0;
    cart.forEach(function(item) {
      var q = _.isNumber(item.q) ? item.q : 1;
      total += item.price * q;
    });
    return total;
  // si cart est un objet, cart est l'item
  } else {
    var q = 1;
    if (typeof cart.q !== "undefined") {
      q = cart.q;
    }
    return cart.price * q;
  }
}

/* Implémentation 3 :
   toujours avec underscorejs, plus concis,
   et où on définit une sous fonction pour factoriser le code */
function cartSum3(cart) {
 // on teste les arguments
 if (!_.isArray(cart) && !_.isObject(cart)) return null;
 if (_.isEmpty(cart)) return 0;
 // à partir d'ici, cart est un tableau non vide ou un objet non vide

 // on définit une fonction (dans cartSum3 et qui ne sera donc visible que par elle) pour factoriser le code
 // itemSum renvoie le prix par la quantité, et si la quantité n'est pas présente on suppose qu'elle vaut 1
 var itemSum = function(price, q) {
   // on donne une valeur par défaut à quantity
   var quantity = 1;
   // mais si q (en entrée) est un nombre, on remplace quantity par q
   if (typeof q === 'number') quantity = q;

   return price * quantity;
 }
 // à partir d'ici on va pouvoir utiliser itemSum

 // si cart est un tableau on itère sur ses items
 if (_.isArray(cart)) {
   var total = 0;
   cart.forEach(function(item) {
     total += itemSum(item.price, item.q);
   });
   return total;
 // si cart est un objet, cart est l'item
 } else {
   return itemSum(cart.price, cart.q);
 }
}

/* Implémentation 4 :
   toujours avec underscorejs,
   avec une sous fonction et des commentaires plus concis */
 function cartSum4(cart) {
  // on sort si cart n'est ni un tableau, ni un objet, ou qu'il est vide
  if (!_.isArray(cart) && !_.isObject(cart)) return null;
  if (_.isEmpty(cart)) return 0;

  // itemSum est utilisée deux fois par la suite
  // itemSum définit une quantité par défaut à 1
  var itemSum = function(price, q) {
    // quantity voit q si q est définie, 1 sinon
    var quantity = _.isNumber(q) ? q : 1;
    return price * quantity;
  }

  // si cart est un tableau on itère sur ses items
  if (_.isArray(cart)) {
    var total = 0;
    cart.forEach(function(item) {
      total += itemSum(item.price, item.q);
    });
    return total;
  // si cart est un objet, cart est l'item
  } else {
    return itemSum(cart.price, cart.q);
  }
}

/* Implémentation 5 :
   on abandonne underscorejs */
function cartSum5(cart) {
  // premier test : on retourne si cart n'est ni un tableau ni un objet
  if (!Array.isArray(cart) && typeof cart !== 'object') return null;
  // on retourne si cart est un tableau, et qu'il est vide
  if (Array.isArray(cart) && cart.length === 0) return 0;
  // on retourne si cart un objet (on test que ce n'est pas un tableau...) et qu'il est vide
  if (!Array.isArray(cart) && Object.keys(cart).length === 0) return 0;
  // à partir d'ici, cart est un tableau non vide ou un objet non vide

  // itemSum est utilisée deux fois par la suite
  // itemSum définit une quantité par défaut à 1
  var itemSum = function(price, q) {
    // quantity voit q si q est définie, 1 sinon
    var quantity = _.isNumber(q) ? q : 1;
    return price * quantity;
  }

  // si cart est un tableau on itère sur ses items
  if (_.isArray(cart)) {
    var total = 0;
    cart.forEach(function(item) {
      total += itemSum(item.price, item.q);
    });
    return total;
  // si cart est un objet, cart est l'item
  } else {
    return itemSum(cart.price, cart.q);
  }
}

/* autres variantes possibles :
   - itérer sur un tableau différemment
   - utiliser les paramètres par défaut d'une fonction (ES6) pour simplifier itemSum
*/
