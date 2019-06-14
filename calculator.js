var answer = parseInt(prompt("How much do you want to donate?"))
var input = answer/(4)
var x = 'You can donate ${input} dollars to the organization: The Hunger Project by clicking this link: https://www.thp.org/'
console.log(`You can donate ${input} dollars to the organization: Water.org by clicking this link: https://water.org/donate/`)
console.log(`You can donate ${input} dollars to the organization: Project Hope by clicking this link: https://secure.projecthope.org/site/Donation2?df_id=7546&7546.donation=form1&autologin=true&s_src=evwb&s_subsrc=CT`)
console.log(`You can donate ${input} dollars to the organization Climate Action Network by clicking this link: https://www.usclimatenetwork.org/donate`)
var myText = document.querySelector('.print');
var myText2  = document.querySelector(".print2")
var myText3 = document.querySelector(".print3")
var myText4 = document.querySelector(".print4")



myText.innerText = "You can donate " + input + " dollars to the organization: The Hunger Project by going to this link: https://www.thp.org/"
myText2.innerText = "You can donate " + input + " dollars to the organization: Water.org by going to this link: https://water.org/donate/"
myText3.innerText = "You can donate " + input + " dollars to the organization: Project Hope by going to this link: https://secure.projecthope.org/site/Donation2?df_id=7546&7546.donation=form1&autologin=true&s_src=evwb&s_subsrc=CT"
myText4.innerText = "You can donate " + input + " dollars to the organization Climate Action Network by going to this link: https://www.usclimatenetwork.org/donate"
