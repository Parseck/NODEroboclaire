require("dotenv").config();
var ComfyJS = require("comfy.js");
var goal = ["error400", "Error 404: Goal Not Found. You Need To Set A Goal."];
ComfyJS.onCommand = (user, command, message, flags, extra) => {
    switch(command) {
        case "raid":
            ComfyJS.Say("twitchRaid TombRaid Are you aware of the raid? Claire isn't! TombRaid twitchRaid");
                break;
        case "bttvraid":
            ComfyJS.Say("PoleDoge Are you aware of the raid? Claire isn't! PoleDoge");
                break;
        case "commands":
            ComfyJS.Say("You can do !raid to get the raidcall. !poke user or !boop user or !hug will poke or boop or hug the mentioned user. !robroke will let you tell Claire about an error in roboclaire. !hypu is a hype command. !goal gives you the current goal. !lurk thanks you for the lurk.");
                break;
        case "socials":
            ComfyJS.Say("Go ahead and follow me on MercyWing1 IG https://www.instagram.com/claireunaware MercyWing2 bleedPurple Twitter https://twitter.com/CUnaware bleedPurple And Join The PowerUpL Discord https://discord.gg/aT7YXwW PowerUpR");
                break;
        case "thablackbobross":
            ComfyJS.Say("Please go follow this great broadcaster and artist! ThaBlackBobRoss! https://www.twitch.tv/thablackbobross");
                break;
        case "roboclaire":
            ComfyJS.Say("I, RoboClaire, was entirely coded by ClaireUnaware in javascript. ComfyJS was created by Instafluff.");
                break;
        case "instafluff":
            ComfyJS.Say("Please go follow the comfiest streamer around! Instafluff also is the main creator and maintainer of ComfyJS which helps roboclaire run!  https://www.twitch.tv/instafluff");
                break;
        case "boop":
            ComfyJS.Say(user + " has booped " + message + ".");
              break;
        case "epicgames":
            ComfyJS.Say("My epic games username is claireunaware.");
                break;
        case "xbox":
            ComfyJS.Say("My Xbox account is ClairUnaware.");
                break;
        case "hug":
            ComfyJS.Say(user + " has brought " + message + " into a big hug.");
                break;
        case "poke":
            ComfyJS.Say(user + " has poked " + message + " in the side!");
                break;
        case "shout":
            if (flags.mod || flags.broadcaster){
                if (message.includes("@")) {
                    var noatmess = message.slice(1);
                    ComfyJS.Say(
                      "Please go take a look at the wonderful @" +
                        noatmess +
                        " at https://www.twitch.tv/" +
                        noatmess
                    );
                  } else {
                    ComfyJS.Say(
                      "Please go take a look at the wonderful @" +
                        message +
                        " at https://www.twitch.tv/" +
                        message
                    );
                  }
            }
                break;
        case "goalset":
            if (flags.mod || flags.broadcaster){
                goal[1]=message;
            } else {
                ComfyJS.Say("You do not have permission to use that command.");
            }
                break;
        case "goal":
            ComfyJS.Say("The current FootGoal is to:" + goal[1]);
                break;
        case "hypu":
            ComfyJS.Say("PowerUpL TehePelo PowerUpR PowerUpL TehePelo PowerUpR PowerUpL TehePelo PowerUpR PowerUpL TehePelo PowerUpR PowerUpL TehePelo PowerUpR");
                break;
        case "robroke":
            ComfyJS.Say("MaxLOL So I, roboclaire, did a goof huh? TPFufun Thank you for making sure @claireunaware knows by using !robroke .");
                break;
        case "lurk":
            ComfyJS.Say("Thank you BegWan so much for the lurk, " + user + "! I hope you have fun! TPFufun");
                break;
        case "scene":
            ComfyJS.Say("@claireunaware you left it on the wrong screen.");
    }
};
ComfyJS.Init( process.env.CHANNEL_NAME , process.env.OAUTH_TOKEN);
