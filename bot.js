require("dotenv").config();
const tmi = require("tmi.js");
var ComfyJS = require("comfy.js");

// Define configuration options
const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: [process.env.CHANNEL_NAME],
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler(target, context, msg, self) {
  if (self) {
    return;
  } // Ignore messages from the bot
}

ComfyJS.onCommand = (user, command, message, flags, extra) => {
  var goal = ["error400", "Error 404: Goal Not Found. You Need To Set A Goal."];
  if (command === "raid") {
    ComfyJS.Say(
      "twitchRaid TombRaid Are you aware of the raid? Claire isn't! TombRaid twitchRaid"
    );
  } else if (command === "bttvraid") {
    ComfyJS.Say("PoleDoge Are you aware of the raid? Claire isn't! PoleDoge");
  } else if (command === "commands") {
    ComfyJS.Say(
      "You can do !raid to get the raidcall. !poke user or !boop user or !hug will poke or boop or hug the mentioned user. !robroke will let you tell Claire about an error in roboclaire. !hypu is a hype command. !goal gives you the current goal. !lurk thanks you for the lurk."
    );
  } else if (command === "socials") {
    ComfyJS.Say(
      "Go ahead and follow me on MercyWing1 IG https://www.instagram.com/claireunaware MercyWing2 bleedPurple Twitter https://twitter.com/CUnaware bleedPurple And Join The PowerUpL Discord https://discord.gg/aT7YXwW PowerUpR"
    );
  } else if (command === "thablackbobross") {
    ComfyJS.Say(
      "Please go follow this great broadcaster and artist! ThaBlackBobRoss! https://www.twitch.tv/thablackbobross"
    );
  } else if (command === "roboclaire") {
    ComfyJS.Say(
      "I, RoboClaire, was entirely coded by ClaireUnaware in javascript. All of RoboClaire's code (not including ComfyJS or tmiJS or twitch API) is proprietary. ComfyJS was created by Instafluff."
    );
  } else if (command === "instafluff") {
    ComfyJS.Say(
      "Please go follow the comfiest streamer around! Instafluff also is the main creator and maintainer of ComfyJS which helps roboclaire run!  https://www.twitch.tv/instafluff"
    );
  } else if (command === "boop") {
    ComfyJS.Say(user + " has booped " + message + ".");
  } else if (command === "epicgames") {
    ComfyJS.Say("My epic games username is claireunaware.");
  } else if (command === "xbox") {
    ComfyJS.Say("My Xbox account is ClairUnaware.");
  } else if (command === "hug") {
    ComfyJS.Say(user + " has brought " + message + " into a big hug.");
  } else if (command === "poke") {
    ComfyJS.Say(user + " has poked " + message + " in the side!");
  } else if ((flags.mod || flags.broadcaster) && command === "shout") {
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
  } else if (command === "robocop") {
    ComfyJS.Say(
      "RoboClaire has ItsBoshyTime automod ItsBoshyTime properties. RoboClaire has a ZERO tolerance policy on forbidden words."
    );
  } else if ((flags.mod || flags.broadcaster) && command === "goalset") {
    goal[1] = message;
  } else if (command === "goal") {
    ComfyJS.Say("The current FootGoal is to:" + goal[1]);
  } else if (command === "hypu") {
    ComfyJS.Say(
      "PowerUpL TehePelo PowerUpR PowerUpL TehePelo PowerUpR PowerUpL TehePelo PowerUpR PowerUpL TehePelo PowerUpR PowerUpL TehePelo PowerUpR"
    );
  } else if (command === "robroke") {
    ComfyJS.Say(
      "MaxLOL So I, roboclaire, did a goof huh? TPFufun Thank you for making sure @claireunaware knows by using !robroke ."
    );
  } else if (command === "lurk") {
    ComfyJS.Say(
      "Thank you BegWan so much for the lurk, " +
        user +
        "! I hope you have fun! TPFufun"
    );
  } else if (command === "hoi") {
    ComfyJS.Say("Well KonCha to you too,  " + user + "! TPFufun");
  } else if (command === "scene") {
    ComfyJS.Say("@claireunaware you left it on the wrong screen.");
  } else if (command === "info") {
    ComfyJS.Say(
      "ClaireUnaware is a young adult streamer, coder, author, artist, and gamer. Claire wrote the code to Keppa and RoboClaire, and drew their own overlays. Claire usually streams games, but streams whatever she feels like. It's encouraged to join the discord for off stream interactions. (to get the link use !socials)"
    );
  }
};

ComfyJS.Init("claireunaware", process.env.OAUTH_TOKEN);

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}