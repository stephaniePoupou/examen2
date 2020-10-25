let logo = document.getElementById('logo');
let ctx = logo.getContext('2d');

ctx.fillStyle = "black";
ctx.fillRect(0,0,483,393);

let radial = ctx.createRadialGradient(241,191,53,241,191,200);
radial.addColorStop(0,"#fe9104");
radial.addColorStop(1,"#000000");
ctx.fillStyle = radial;

ctx.beginPath()
ctx.arc(241, 191, 115, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.fillStyle = "#000000";
ctx.font = "24px Arial Black";
ctx.fillText("MARS", 203, 202);

ctx.fillStyle = "#FFFFFF";
ctx.beginPath();
ctx.arc(20, 200, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(190, 310, 1, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(300, 70, 1, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(400, 20, 1.7, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(50, 300, 1.8, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(190, 30, 1.1, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(200, 340, 1.3, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(150, 60, 2.1, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(400, 300, 1.3, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(75, 50, 1, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(128, 10, 1.6, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(450, 280, 2.5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(470, 70, 1.9, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(410, 121, 1.5, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(330, 90, 2, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(410, 191, 3, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

// Valider formulaire

function validate(){
    let name = document.forms['apply']['name'].value;
    let prenom = document.forms['apply']['prenom'].value;
    let birthday = document.forms['apply']['birthday'].value;
    let code = document.forms['apply']['code'].value;
    let number = document.forms['apply']['number'].value;
    let email = document.forms['apply']['email'].value;
    let door_num = document.forms['apply']['door-num'].value;
    let city = document.forms['apply']['city'].value;
    let province = document.forms['apply']['province'].value;
    let zip = document.forms['apply']['zip'].value;
    let job = document.forms['apply']['job'].value;


    if (name == ""){
        alert("Veuillez remplir le champ Nom");
        return false;
    }

    else if (prenom == ""){
         alert("Veuillez remplir le champ Prénom");
        return false;
    }

    else if (code == ""){
         alert("Veuillez entrer le code régionnal");
        return false;
    }

    else if (number == ""){
         alert("Veuillez entrer votre numéro de téléphone");
        return false;
    }

    else if (email == ""){
         alert("Veuillez entrer votre adresse courriel");
        return false;
    }

    else if (door_num == ""){
         alert("Veuillez entrer votre numéro de porte");
        return false;
    }

     else if (city == ""){
         alert("Veuillez entrer la ville");
        return false;
    }

    else if (province == ""){
         alert("Veuillez inscrire la province ou l'état");
        return false;
    }

     else if (zip == ""){
         alert("Veuillez entrer votre code postale");
        return false;
    }

     else if (job == ""){
         alert("Veuillez inscrire votre métier");
        return false;
    }

     alert("Formulaire envoyé avec succès!");
}

 function initPayPalButton() {
                        paypal.Buttons({
                            style: {
                                shape: 'rect',
                                color: 'gold',
                                layout: 'vertical',
                                label: 'paypal',

                            },

                            createOrder: function(data, actions) {
                                return actions.order.create({
                                    purchase_units: [{"amount":{"currency_code":"CAD","value":1}}]
                                });
                            },

                            onApprove: function(data, actions) {
                                return actions.order.capture().then(function(details) {
                                    alert('Transaction completed by ' + details.payer.name.given_name + '!');
                                });
                            },

                            onError: function(err) {
                                console.log(err);
                            }
                        }).render('#paypal-button-container');
                    }

                    initPayPalButton();


