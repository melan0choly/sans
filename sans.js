const discord = require ('discord.js');

var client = new discord.Client();

const token = "ODgxODgwNjU4MzU0NTE1OTc4.YSzRXQ.4rRTAuLfZoocaTOQX3raLdv4tv4";

client.on ("ready", () => {
    console.log ("sans 已啟動");

    client.user.setGame ("bone puns");
});

const prefix = "sans";

client.on ("message", (message) => {
    if (message.content.toLowerCase().includes('累')) {
        let number = 3;
        var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send ('老天，你真該好好歇歇\n我們這兒可沒人要求你硬撐 *pat'); break;
            case 2: message.channel.send ('你已經睡了兩天了，如果再不清醒的話，就要變成"懶骨頭"了 *wink'); break;
            case 3: message.channel.send ('或許你需要跟回聲花聊聊天？'); break;
        }
    }
});

client.on ("message", (message) => {
    if (message.content.toLowerCase().includes('天氣')) {
        number = 2;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random){
            case 1: message.channel.send ("huh，你知道的，雪町村萬年都在下雪"); break;
            case 2: message.channel.send ("今天會是個很酷的一天\n(It's a cool day)"); break;
        }
    }
});

client.on ("message", (message) => {
    if(message.content.includes("我是誰")){
        message.channel.send ('huh，你又忘了嗎？');
        message.channel.send ("你的名字是 " + message.author.username);
        message.channel.send ("ID是 " + message.author.id);
        message.channel.send ("忘了也沒關係，我會一直記得你");
        return;
    }
});

//client.on ("message", (message) => {
//    if (message.content.includes (prefix)){
//    if(message.content.includes("我是誰")){
//        message.reply ('huh，你又忘了嗎？');
//        message.channel.send ("你的名字是 " + message.author.username);
//        message.channel.send ("ID是 " + message.author.id);
//        message.channel.send ("忘了也沒關係，我會一直記得你");
//        return;
//    }else{
//        return;
//    }
//}});

client.on ("message", (message) => {
    if (message.content.toLowerCase().includes('剪刀石頭布')) {
        let number = 3;
        var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send (':v:'); break;
            case 2: message.channel.send (':fist:'); break;
            case 3: message.channel.send (':hand_splayed:'); break;
        }
    }
});

client.login (token)