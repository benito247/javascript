//TEXT ADVENTURE GAME//

//BY BENITO HYLTON, CEDRIC MIKA, IZZY BROWN//

//IT,S GONNA BE A TEXT BASED GAME - WE WILL HAVE MUSIC FOR THE WINNER-**POSSIBLY**
//IN EACH THREE SCENARIOS QUESTIONS WILL BE BASED ON IF ELSE STATEMENTS-//
//THE RIGHT CHOICE YOU GET MUSIC TO LISTEN TO FOR THE PARTY SCENARIO-// 
//THE WRONG CHOICE YOU SPEND STAYING AT HOME LISTENING TO CLASSICAL MUSIC-//

//STORY//

//Friday night at home, just started enjoying some music when the phone rings-//

//the game asks what is your name?//

//the game ask "before we begin what music do you want to play at home on the radio?" reggae, techno, classical,
//or none above//

//CHOICE ONE//

//1.Reggae - Bob Marley Three Little Birds//
//2.Techno - R3hab A Touch Of Class All Around The World//
//3.Classical - Vivaldi Spring The Jobcentre Hold Song// 
//4.None above - **END OF GAME**//

//the game ask 1.2.3.4 - i.e Bob Marley Three Little Birds is playing on the radio//

//THE STORY CONTINUES//

//"Your phone pings you pick it up and see who it is, you notice three whatsapp messages from your friends//

//X = Fozzy "(playerName) there is a Reggae party tonight at Deansgate Locks I'm DJ'ing there tonight,
//later on at my mates house we are having an after party do you want to come?"//

//Y = Tilly "(playerName) underground rave happening tonight reply YES for address see you later-//

//Z = Oscar "(playerName) It's Friday, can I come to your house and relax and chill for abit I'm bored?")//

//N = None "End Of Game too bad you missed out tonight there's always next weekend"//

//the game ask which whatsapp message are you going to reply to?//

//CHOICE TWO//

//TYPE = FOZZY - "Yeah man I could do with a night out",//
//TYPE = TILLY - "Yeah man I can't wait, this night is gonna be epic!"//
//TYPE = OSCAR - "Yeah man I'm not going out tonight, just chilling come round when your ready!"//
//TYPE = NONE - "Too bad you missed out tonight End Of Game//

//THE STORY CONTINUES REGGAE NIGHT OUT//

//You're on your way to Deansgate Locks by Uber, you forgot to bring your ID tonight as you left your house
//in a hurry, do you tell the taxi driver to turn around and go back or do you risk it?"//

//CHOICE THREE//
//The game ask Y/N?

//YES = "Driver take me home I need to go back I forgot summat!"//
//NO  = "Driver turn that tune up, it's a banging tune!"// 

//THE STORY CONTINUES//
//You arrive at the venue the doorman is having none of it tonight, you casually walk over to line up//
//to get into the venue when it is your turn to enter the premises the doorman ask you 
//"do you have any ID?"//

//CHOICE FOUR//
//the game ask Y/N?//

//YES = "Yeah man brought it with me just in case someone asked me for ID"//
//NO = "I'm Dj'ing here tonight I did'nt bring ID because I'm the DJ"//

//THE STORY CONTINUES//
//The music is good everybody is enjoying themselves the atmosphere is lively, DJ Fozzy set has finished now//
//he is ready to go to his mates house party he is looking for you, where are you?

//CHOICE FIVE//
//the game ask where are you? 

//NUMBER = 0 - At the Bar getting drunk with mates chatting people up
//NUMBER = 1 - On the dancefloor dancing chatting people up
//NUMBER = 2 - Gone somewhere to chill for abit
//NUMBER = 3 - Toilet

//THE ENDING//
//It's time to find Fozzy and leave now, you notice by chance//
//the doorman just bit the head off a stranger stood next to the sound system no one else seemed to have//
//noticed this.  The next thing the lights go out, theres panic everywhere, then after a few moments the//
//lights are back on Fozzy runs over and he says "(playerName) I saw that let's get out of here"//

//CHOICE SIX// IF ELSE//




const startGame = () => {
    
    let name = prompt('Enter your name:')

    alert(`Hello, ${name}.  Welcome to the Game`);

let playGame = prompt('Ready to play? [Yes or No]');
     
if (playGame == 'Yes') {
    alert('Great!  Get ready for an unforgettable night')

pickMusic();
}

else if (playGame == "No") {
alert(`Come back later`)
}
else {
alert('Yes or No exactly only accepted - try again')
}
}