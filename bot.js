require("dotenv").config();
var ComfyJS = require("comfy.js");
var goal = ["error400", "Error 404: Goal Not Found. You Need To Set A Goal."];
var commands = {
    raid:"twitchRaid TombRaid Are you aware of the raid? Claire isn't! TombRaid twitchRaid",
    bttvraid:"PoleDoge Are you aware of the raid? Claire isn't! PoleDoge",
    commands:"You can do !raid to get the raidcall. !poke user or !boop user or !hug will poke or boop or hug the mentioned user. !robroke will let you tell Claire about an error in roboclaire. !hypu is a hype command. !goal gives you the current goal. !lurk thanks you for the lurk.",
    socials:"Go ahead and follow me on MercyWing1 IG https://www.instagram.com/claireunaware MercyWing2 bleedPurple Twitter https://twitter.com/CUnaware bleedPurple And Join The PowerUpL Discord https://discord.gg/aT7YXwW PowerUpR",
    theblackbobross:"Please go follow this great broadcaster and artist! ThaBlackBobRoss! https://www.twitch.tv/thablackbobross",
    roboclaire:"I, RoboClaire, was entirely coded by ClaireUnaware in javascript. ComfyJS was created by Instafluff.",
    instafluff:"Please go follow the comfiest streamer around! Instafluff also is the main creator and maintainer of ComfyJS which helps roboclaire run!  https://www.twitch.tv/instafluff",
    epicgames:"My epic games username is claireunaware.",
    xbox:"My Xbox account is ClairUnaware.",
    hypu:"PowerUpL TehePelo PowerUpR PowerUpL TehePelo PowerUpR PowerUpL TehePelo PowerUpR PowerUpL TehePelo PowerUpR PowerUpL TehePelo PowerUpR",
    robroke:"MaxLOL So I, roboclaire, did a goof huh? TPFufun Thank you for making sure @claireunaware knows by using !robroke .",
    scene: "@claireunaware you left it on the wrong screen.",
    hug:(user, command, message, flags, extra)=>(user + " has brought " + message + " into a big hug."),
    poke:(user, command, message, flags, extra)=>(user + " has poked " + message + " in the side!"),
    shout:(user, command, message, flags, extra)=>{
        if (flags.mod || flags.broadcaster){
           if (message.includes("@")) {
               var noatmess = message.slice(1);
               return(
                 "Please go take a look at the wonderful @" +
                   noatmess +
                   " at https://www.twitch.tv/" +
                   noatmess
               );
           } else {
               return(
                 "Please go take a look at the wonderful @" +
                   message +
                   " at https://www.twitch.tv/" +
                   message
               );
           }
        }
    },
    "goalset":(user, command, message, flags, extra)=>{
        if (flags.mod || flags.broadcaster){
            goal[1]=message;
        } else {
            ComfyJS.Say("You do not have permission to use that command.");
        }
    },
    "goal":(user, command, message, flags, extra)=>("The current FootGoal is to:" + goal[1]),
    "lurk":(user, command, message, flags, extra)=>("Thank you BegWan so much for the lurk, " + user + "! I hope you have fun! TPFufun")
}
ComfyJS.onCommand = (user, command, message, flags, extra) => {
    if(command in commands){
        if(typeof commands[command]=="string"){
            ComfyJS.say(commands[command])
        }else{
            ComfyJS.say(commands[command](user, command, message, flags, extra))
        }
    }
};
ComfyJS.Init( process.env.CHANNEL_NAME , process.env.OAUTH_TOKEN);
