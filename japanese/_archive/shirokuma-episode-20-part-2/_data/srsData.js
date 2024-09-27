// Configuration
const localStorageKey = "japanese" + "Episode20Part2" + "Srs";
const srsTitle = "Shirokuma Cafe Ep20 Part 2";
const languageTitle = "Japanese";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 20. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap =  {
    "1": {
        "character": "夏のお祭り",
        "letter": "Summer Festival",
        "pinyin": "なつのおまつり"
    },
    "2": {
        "character": "今日はしろくまカフェとグリズリーバーのジョイント企画で",
        "letter": "Today is the joint project of Shirokuma Cafe and Grizzly Bar.",
        "pinyin": "きょうはしろくまかふぇとぐりずりーばーのじょいんときかくで"
    },
    "3": {
        "character": "屋台をやりま～す！",
        "letter": "We're having a food stall today!",
        "pinyin": "やたいをやりま～す！"
    },
    "4": {
        "character": "いいね",
        "letter": "Sounds great!",
        "pinyin": "いいね"
    },
    "5": {
        "character": "楽しみ！",
        "letter": "I'm looking forward to it!",
        "pinyin": "たのしみ！"
    },
    "6": {
        "character": "似合ってるね笹子さん",
        "letter": "You look great, Sasako-san!",
        "pinyin": "にあってるねささごさん"
    },
    "7": {
        "character": "みんなで盛り上げましょう！",
        "letter": "Let's make it a success!",
        "pinyin": "みんなでもりあげましょう！"
    },
    "8": {
        "character": "は～い！",
        "letter": "Yes!",
        "pinyin": "は～い！"
    },
    "9": {
        "character": "祭りなら任せろ！",
        "letter": "I'll take care of the festival!",
        "pinyin": "まつりならまかせろ！"
    },
    "10": {
        "character": "炎上炎上！",
        "letter": "Flame on, flame on!",
        "pinyin": "えんじょうえんじょう！"
    },
    "11": {
        "character": "かっこいい！",
        "letter": "It's so cool!",
        "pinyin": "かっこいい！"
    },
    "12": {
        "character": "グリズリーくんは焼そばを作ってね",
        "letter": "Grizzly, make some fried noodles.",
        "pinyin": "ぐりずりーくんはやきそばをつくってね"
    },
    "13": {
        "character": "おうガンガン作ってやるぜ",
        "letter": "I'll do my best.",
        "pinyin": "おうがんがんつくってやるぜ"
    },
    "14": {
        "character": "パンダくんはソースを塗ったりする担当",
        "letter": "Panda is in charge of spreading the sauce.",
        "pinyin": "ぱんだくんはそーすをぬったりするたんとう"
    },
    "15": {
        "character": "任せて！",
        "letter": "I'll take care of it!",
        "pinyin": "まかせて！"
    },
    "16": {
        "character": "ペンギンさんは呼び込みで",
        "letter": "Penguin, you're in charge of inviting people in.",
        "pinyin": "ぺんぎんさんはよびこみで"
    },
    "17": {
        "character": "了解！",
        "letter": "Got it!",
        "pinyin": "りょうかい！"
    },
    "18": {
        "character": "あの僕も何かお手伝いしましょうか？",
        "letter": "Can I help with anything?",
        "pinyin": "あのぼくもなにかおてつだいしましょうか？"
    },
    "19": {
        "character": "ああお久しぶり！",
        "letter": "Long time no see!",
        "pinyin": "ああおひさしぶり！"
    },
    "20": {
        "character": "パンダくんの知り合い？",
        "letter": "You know the panda?",
        "pinyin": "ぱんだくんのしりあい？"
    },
    "21": {
        "character": "うんお兄さん！",
        "letter": "Yeah, he's my brother.",
        "pinyin": "うんおにいさん！"
    },
    "22": {
        "character": "お兄さん？",
        "letter": "Big brother?",
        "pinyin": "おにいさん？"
    },
    "23": {
        "character": "みたいな",
        "letter": "Sort of.",
        "pinyin": "みたいな"
    },
    "24": {
        "character": "ど…どういう関係？",
        "letter": "What's the connection?",
        "pinyin": "ど…どういうかんけい？"
    },
    "25": {
        "character": "名前は同じだけど",
        "letter": "We share the same name.",
        "pinyin": "なまえはおなじだけど"
    },
    "26": {
        "character": "種属違いの親戚",
        "letter": "But we're related by a different species.",
        "pinyin": "たねぞくちがいのしんせき"
    },
    "27": {
        "character": "うん？",
        "letter": "What?",
        "pinyin": "うん？"
    },
    "28": {
        "character": "もともとパンダって呼ばれてたのは僕たちだったんですよ",
        "letter": "We're the ones who were originally called pandas.",
        "pinyin": "もともとぱんだってよばれてたのはぼくたちだったんですよ"
    },
    "29": {
        "character": "へぇ～そうだったんですか",
        "letter": "Oh, I didn't know that.",
        "pinyin": "へぇ～そうだったんですか"
    },
    "30": {
        "character": "でもジャイアントパンダくんが出てきてから",
        "letter": "But after the giant panda came out.",
        "pinyin": "でもじゃいあんとぱんだくんがでてきてから"
    },
    "31": {
        "character": "僕たちは小さいほうのパンダレッサーパンダって呼ばれるようになったんです",
        "letter": "We came to be called the smaller panda, the red panda.",
        "pinyin": "ぼくたちはちいさいほうのぱんだれっさーぱんだってよばれるようになったんです"
    },
    "32": {
        "character": "へぇ～",
        "letter": "Wow!",
        "pinyin": "へぇ～"
    },
    "33": {
        "character": "今も笹情報まわしたりとか",
        "letter": "Do you still pass around information about bamboo grass?",
        "pinyin": "いまもささじょうほうまわしたりとか"
    },
    "34": {
        "character": "親戚づきあいは続いてるんだよね",
        "letter": "We still keep in touch with our relatives, right?",
        "pinyin": "しんせきづきあいはつづいてるんだよね"
    },
    "35": {
        "character": "笹情報って？",
        "letter": "What's bamboo information?",
        "pinyin": "ささじょうほうって？"
    },
    "36": {
        "character": "はいどこの笹がおいしいとか調べたり",
        "letter": "Yes, like finding out which bamboo is good.",
        "pinyin": "はいどこのささがおいしいとかしらべたり"
    },
    "37": {
        "character": "僕たちも笹大好きなんで",
        "letter": "We love bamboo, too.",
        "pinyin": "ぼくたちもささだいすきなんで"
    },
    "38": {
        "character": "こまめに動くタイプなんです",
        "letter": "We like bamboo, too, so we're very active.",
        "pinyin": "こまめにうごくたいぷなんです"
    },
    "39": {
        "character": "へぇ～！",
        "letter": "Oh, really?",
        "pinyin": "へぇ～！"
    },
    "40": {
        "character": "じゃあ私は注文やお客さんをさばいたりするから",
        "letter": "Then I'll be taking orders and dealing with customers.",
        "pinyin": "じゃあわたしはちゅうもんやおきゃくさんをさばいたりするから"
    },
    "41": {
        "character": "お勘定係お願いしてもいいかな？",
        "letter": "May I ask you to take care of the check?",
        "pinyin": "おかんじょうかかりおねがいしてもいいかな？"
    },
    "42": {
        "character": "はい！",
        "letter": "Yes!",
        "pinyin": "はい！"
    },
    "43": {
        "character": "すげぇ！",
        "letter": "That's great!",
        "pinyin": "すげぇ！"
    },
    "44": {
        "character": "これがいい！",
        "letter": "I love this!",
        "pinyin": "これがいい！"
    },
    "45": {
        "character": "きれい！",
        "letter": "Beautiful!",
        "pinyin": "きれい！"
    },
    "46": {
        "character": "そうそう…これを立てておこう",
        "letter": "Oh, yeah... let's get this up.",
        "pinyin": "そうそう…これをたてておこう"
    },
    "47": {
        "character": "タイムサービス？",
        "letter": "Time service?",
        "pinyin": "たいむさーびす？"
    },
    "48": {
        "character": "どんなサービスするんだ？",
        "letter": "What kind of service do you do?",
        "pinyin": "どんなさーびすするんだ？"
    },
    "49": {
        "character": "増量か？値引きか？",
        "letter": "Extra volume? A discount?",
        "pinyin": "ぞうりょうか？ねびきか？"
    },
    "50": {
        "character": "別に何も",
        "letter": "Nothing.",
        "pinyin": "べつになにも"
    },
    "51": {
        "character": "あぁ？",
        "letter": "What?",
        "pinyin": "あぁ？"
    },
    "52": {
        "character": "でもこれを見たら",
        "letter": "But when I see this.",
        "pinyin": "でもこれをみたら"
    },
    "53": {
        "character": "今買わなきゃって思う",
        "letter": "I'm gonna have to buy it now.",
        "pinyin": "いまかわなきゃっておもう"
    },
    "54": {
        "character": "正々堂々とやれ！",
        "letter": "Do it fair and square!",
        "pinyin": "せいせいどうどうとやれ！"
    },
    "55": {
        "character": "いらっしゃいいらっしゃい！",
        "letter": "Welcome, welcome, welcome!",
        "pinyin": "いらっしゃいいらっしゃい！"
    },
    "56": {
        "character": "シロクマ風お好み焼とグリズリー焼そばだよ",
        "letter": "Polar bear style okonomiyaki and grizzly yakisoba.",
        "pinyin": "しろくまふうおこのみやきとぐりずりーやきそばだよ"
    },
    "57": {
        "character": "一度食べたら忘れられない味",
        "letter": "Once you try them, you'll never forget the taste.",
        "pinyin": "いちどたべたらわすれられないあじ"
    },
    "58": {
        "character": "しかもめったに食べられないよ",
        "letter": "And you don't get to eat them often.",
        "pinyin": "しかもめったにたべられないよ"
    },
    "59": {
        "character": "え～い！まどろっこしい！！",
        "letter": "Oh, no! It's so sloppy!",
        "pinyin": "え～い！まどろっこしい！！"
    },
    "60": {
        "character": "おりゃ～！オラオラ！！",
        "letter": "Oh, no! Oh, no!",
        "pinyin": "おりゃ～！おらおら！！"
    },
    "61": {
        "character": "グリズリー焼そばの激うまさに驚け！",
        "letter": "You'll be amazed at how delicious this grizzly yakisoba is!",
        "pinyin": "ぐりずりーやきそばのげきうまさにおどろけ！"
    },
    "62": {
        "character": "グリズリーくん勢いよすぎ",
        "letter": "You're too good to be a grizzly.",
        "pinyin": "ぐりずりーくんいきおいよすぎ"
    },
    "63": {
        "character": "焼そば２つ！",
        "letter": "Two yakisoba!",
        "pinyin": "やきそば２つ！"
    },
    "64": {
        "character": "お好み焼１つと焼そば１つ！",
        "letter": "One okonomiyaki and one yakisoba!",
        "pinyin": "おこのみやき１つとやきそば１つ！"
    },
    "65": {
        "character": "焼そば３つとお好み焼１つ",
        "letter": "Three yakisoba and one okonomiyaki.",
        "pinyin": "やきそば３つとおこのみやき１つ"
    },
    "66": {
        "character": "モダン焼できる？",
        "letter": "Can you make modern-yaki?",
        "pinyin": "もだんやきできる？"
    },
    "67": {
        "character": "はいできますよ",
        "letter": "Yes, we can.",
        "pinyin": "はいできますよ"
    },
    "68": {
        "character": "パンダくん早くお好み焼お願い！",
        "letter": "Hurry up, panda, okonomiyaki!",
        "pinyin": "ぱんだくんはやくおこのみやきおねがい！"
    },
    "69": {
        "character": "う…うん今…",
        "letter": "Now...",
        "pinyin": "う…うんいま…"
    },
    "70": {
        "character": "あっ！自分にソース塗っちゃった",
        "letter": "Oh! I put sauce on myself.",
        "pinyin": "あっ！じぶんにそーすぬっちゃった"
    },
    "71": {
        "character": "パンダ急げ！",
        "letter": "Hurry up, panda!",
        "pinyin": "ぱんだいそげ！"
    },
    "72": {
        "character": "ぐわっ！何しやがる！？",
        "letter": "Oh, no! What are you doing?",
        "pinyin": "ぐわっ！なにしやがる！？"
    },
    "73": {
        "character": "あっ！逆だった",
        "letter": "Oh! It's the other way.",
        "pinyin": "あっ！ぎゃくだった"
    },
    "74": {
        "character": "笹子に代われ！",
        "letter": "Put Sasago on!",
        "pinyin": "ささこにかわれ！"
    },
    "75": {
        "character": "はいどうぞ",
        "letter": "Here you go.",
        "pinyin": "はいどうぞ"
    },
    "76": {
        "character": "やった～！",
        "letter": "Yes!",
        "pinyin": "やった～！"
    },
    "77": {
        "character": "よかったわね",
        "letter": "Good for you.",
        "pinyin": "よかったわね"
    },
    "78": {
        "character": "ありがとうございました",
        "letter": "Thank you very much.",
        "pinyin": "ありがとうございました"
    },
    "79": {
        "character": "うりきれ！店じまいです",
        "letter": "Sold out! We're closing up.",
        "pinyin": "うりきれ！みせじまいです"
    },
    "80": {
        "character": "お疲れさまでした",
        "letter": "Thank you for your hard work.",
        "pinyin": "おつかれさまでした"
    },
    "81": {
        "character": "ふぅ…お疲れ！",
        "letter": "Good night!",
        "pinyin": "ふぅ…おつかれ！"
    },
    "82": {
        "character": "お疲れさま",
        "letter": "Good work.",
        "pinyin": "おつかれさま"
    },
    "83": {
        "character": "あぁ…疲れた！",
        "letter": "I'm so tired!",
        "pinyin": "あぁ…つかれた！"
    },
    "84": {
        "character": "働くのって大変",
        "letter": "Working is hard.",
        "pinyin": "はたらくのってたいへん"
    },
    "85": {
        "character": "パンダくんは途中でクビになったでしょ",
        "letter": "You got fired in the middle of the day.",
        "pinyin": "ぱんだくんはとちゅうでくびになったでしょ"
    },
    "86": {
        "character": "他の屋台回ってみようよ",
        "letter": "Let's go to the other stalls.",
        "pinyin": "ほかのやたいまわってみようよ"
    },
    "87": {
        "character": "おっ！いいね",
        "letter": "Whoa! Nice.",
        "pinyin": "おっ！いいね"
    },
    "88": {
        "character": "わぁ～！たくさんあるね",
        "letter": "Wow! There's so many.",
        "pinyin": "わぁ～！たくさんあるね"
    },
    "89": {
        "character": "僕これにする",
        "letter": "I'll take this one.",
        "pinyin": "ぼくこれにする"
    },
    "90": {
        "character": "パンダインパンダ！",
        "letter": "Panda in panda!",
        "pinyin": "ぱんだいんぱんだ！"
    },
    "91": {
        "character": "変だよそれ…",
        "letter": "That's weird...",
        "pinyin": "へんだよそれ…"
    },
    "92": {
        "character": "じゃあ…",
        "letter": "Well, then...",
        "pinyin": "じゃあ…"
    },
    "93": {
        "character": "パンダアンドパンダ",
        "letter": "Panda and panda.",
        "pinyin": "ぱんだあんどぱんだ"
    },
    "94": {
        "character": "なんか怖いよ…",
        "letter": "I'm scared...",
        "pinyin": "なんかこわいよ…"
    },
    "95": {
        "character": "あれおもしろそうやってみたい！",
        "letter": "I want to try that!",
        "pinyin": "あれおもしろそうやってみたい！"
    },
    "96": {
        "character": "またそんなご迷惑なことを…",
        "letter": "You are such a pain in the ass.",
        "pinyin": "またそんなごめいわくなことを…"
    },
    "97": {
        "character": "いいよやってみるかい？",
        "letter": "Do you want to try it?",
        "pinyin": "いいよやってみるかい？"
    },
    "98": {
        "character": "やるやる！",
        "letter": "I'm in!",
        "pinyin": "やるやる！"
    },
    "99": {
        "character": "別の生きものになっちゃってるよ",
        "letter": "You're turning into something else.",
        "pinyin": "べつのいきものになっちゃってるよ"
    },
    "100": {
        "character": "う～ん…ベロが届かないよ！",
        "letter": "I can't reach my tongue!",
        "pinyin": "う～ん…べろがとどかないよ！"
    },
    "101": {
        "character": "あぁ～！惜しい…",
        "letter": "Oh, no! That was close.",
        "pinyin": "あぁ～！おしい…"
    },
    "102": {
        "character": "もう１回もう１回！",
        "letter": "One more time, one more time!",
        "pinyin": "もう１かいもう１かい！"
    },
    "103": {
        "character": "あっ今…",
        "letter": "Oh, now...",
        "pinyin": "あっいま…"
    },
    "104": {
        "character": "銃がよくないよおじさん交換して",
        "letter": "The gun's not good, Uncle.",
        "pinyin": "じゅうがよくないよおじさんこうかんして"
    },
    "105": {
        "character": "またそんなワガママ言って",
        "letter": "You're being so selfish again.",
        "pinyin": "またそんなわがままいって"
    },
    "106": {
        "character": "やった！ねぇほら！",
        "letter": "I did it! Hey, come on!",
        "pinyin": "やった！ねぇほら！"
    },
    "107": {
        "character": "貸してみろ",
        "letter": "Give it to me.",
        "pinyin": "かしてみろ"
    },
    "108": {
        "character": "おらぁっ！",
        "letter": "Hey!",
        "pinyin": "おらぁっ！"
    },
    "109": {
        "character": "どうだ！",
        "letter": "Look at that!",
        "pinyin": "どうだ！"
    },
    "110": {
        "character": "俺にかかりゃこんなもんよ",
        "letter": "That's what I'm talking about.",
        "pinyin": "おれにかかりゃこんなもんよ"
    },
    "111": {
        "character": "あ…ほらよ",
        "letter": "Here you go.",
        "pinyin": "あ…ほらよ"
    },
    "112": {
        "character": "あ…ありがとうございます",
        "letter": "Thank you...",
        "pinyin": "あ…ありがとうございます"
    },
    "113": {
        "character": "細かすぎんだよ",
        "letter": "You're too detailed!",
        "pinyin": "こまかすぎんだよ"
    },
    "114": {
        "character": "コイツら！サケやマスなら一発なのによ！",
        "letter": "These guys! Salmon and trout are easy!",
        "pinyin": "こいつら！さけやますならいちはつなのによ！"
    },
    "115": {
        "character": "シロクマさんすご～い",
        "letter": "Polar bears are amazing!",
        "pinyin": "しろくまさんすご～い"
    },
    "116": {
        "character": "もう２０匹目ですよ",
        "letter": "You've already caught 20!",
        "pinyin": "もう２０ひきめですよ"
    },
    "117": {
        "character": "さすがだね",
        "letter": "That's impressive.",
        "pinyin": "さすがだね"
    },
    "118": {
        "character": "いっそのこと直に…",
        "letter": "Maybe we should just...",
        "pinyin": "いっそのことじかに…"
    },
    "119": {
        "character": "お客さん困ります",
        "letter": "We've got a problem.",
        "pinyin": "おきゃくさんこまります"
    },
    "120": {
        "character": "あれ？半田さん",
        "letter": "What? Handa-san.",
        "pinyin": "あれ？はんでんさん"
    },
    "121": {
        "character": "あっパンダくん",
        "letter": "Panda-kun.",
        "pinyin": "あっぱんだくん"
    },
    "122": {
        "character": "仕事終わって今来たところなんだ",
        "letter": "I just got off work.",
        "pinyin": "しごとおわっていまきたところなんだ"
    },
    "123": {
        "character": "笹子さん…あいや屋台は？",
        "letter": "Sasago-san... where's the stall?",
        "pinyin": "ささごさん…あいややたいは？"
    },
    "124": {
        "character": "うん完売でもうみんな遊んでるよ",
        "letter": "It's sold out and everyone's already playing.",
        "pinyin": "うんかんばいでもうみんなあそんでるよ"
    },
    "125": {
        "character": "そ…そう",
        "letter": "I see.",
        "pinyin": "そ…そう"
    },
    "126": {
        "character": "何？それ…",
        "letter": "What? That...",
        "pinyin": "なに？それ…"
    },
    "127": {
        "character": "笹子さ…あいや！みんなに差し入れをと思って…",
        "letter": "Sasago-san... no! I thought I'd bring something for everyone...",
        "pinyin": "ささこさ…あいや！みんなにさしいれをとおもって…"
    },
    "128": {
        "character": "お茶とかジュース",
        "letter": "Tea, juice...",
        "pinyin": "おちゃとかじゅーす"
    },
    "129": {
        "character": "笹子さんならあっちにいるよ",
        "letter": "Sasago-san's over there.",
        "pinyin": "ささごさんならあっちにいるよ"
    },
    "130": {
        "character": "え？あ～そう…",
        "letter": "What? Oh, right...",
        "pinyin": "え？あ～そう…"
    },
    "131": {
        "character": "渡しにいこうよ",
        "letter": "Let's go give it to her.",
        "pinyin": "わたりしにいこうよ"
    },
    "132": {
        "character": "えっ！",
        "letter": "What?",
        "pinyin": "えっ！"
    },
    "133": {
        "character": "みんなじゃなくて２人で飲めばいいと思うよ",
        "letter": "I think it's better if we drink together.",
        "pinyin": "みんなじゃなくて２にんでのめばいいとおもうよ"
    },
    "134": {
        "character": "いやいや…",
        "letter": "No, no...",
        "pinyin": "いやいや…"
    },
    "135": {
        "character": "あれ？半田さん？",
        "letter": "Huh? Handa-san?",
        "pinyin": "あれ？はんでんさん？"
    },
    "136": {
        "character": "さ…笹子さん",
        "letter": "Sasago-san.",
        "pinyin": "さ…ささごさん"
    },
    "137": {
        "character": "こんばんは",
        "letter": "Good evening.",
        "pinyin": "こんばんは"
    },
    "138": {
        "character": "ど…ど…どうも",
        "letter": "Do you...do you...hi.",
        "pinyin": "ど…ど…どうも"
    },
    "139": {
        "character": "半田さんが差し入れにきてくれたよ",
        "letter": "Handa-san brought you some food.",
        "pinyin": "はんでんさんがさしいれにきてくれたよ"
    },
    "140": {
        "character": "ど…どうぞ",
        "letter": "Here you go.",
        "pinyin": "ど…どうぞ"
    },
    "141": {
        "character": "あら…ありがとうございます",
        "letter": "Oh...thank you.",
        "pinyin": "あら…ありがとうございます"
    },
    "142": {
        "character": "いやいやつまらないものだから",
        "letter": "No, it's just boring stuff.",
        "pinyin": "いやいやつまらないものだから"
    },
    "143": {
        "character": "ちょっと…パンダくん",
        "letter": "Hey, panda.",
        "pinyin": "ちょっと…ぱんだくん"
    },
    "144": {
        "character": "おう半田ありがたくもらうぜ",
        "letter": "Oh, Handa, thank you very much.",
        "pinyin": "おうはんでんありがたくもらうぜ"
    },
    "145": {
        "character": "僕も飲む～！",
        "letter": "I'll have some too!",
        "pinyin": "ぼくものむ～！"
    },
    "146": {
        "character": "僕ももらおうかな",
        "letter": "I think I'll have one too.",
        "pinyin": "ぼくももらおうかな"
    },
    "147": {
        "character": "もう一本！",
        "letter": "One more!",
        "pinyin": "もういっぽん！"
    },
    "148": {
        "character": "せっかくなんでいただきます",
        "letter": "I'll take it for what it's worth.",
        "pinyin": "せっかくなんでいただきます"
    },
    "149": {
        "character": "あ…どうぞどうぞ",
        "letter": "Here you go.",
        "pinyin": "あ…どうぞどうぞ"
    },
    "150": {
        "character": "半田さん…間が悪いなぁ",
        "letter": "Handa-san... your timing is terrible.",
        "pinyin": "はんでんさん…まがわるいなぁ"
    },
    "151": {
        "character": "わぁ…花火",
        "letter": "Wow... fireworks.",
        "pinyin": "わぁ…はなび"
    },
    "152": {
        "character": "始まったみたいですね",
        "letter": "It looks like they've started.",
        "pinyin": "はじまったみたいですね"
    },
    "153": {
        "character": "わぁ…きれい",
        "letter": "wow...beautiful.",
        "pinyin": "わぁ…きれい"
    },
    "154": {
        "character": "私花火大好きなんですよ",
        "letter": "I love fireworks.",
        "pinyin": "わたしはなびだいすきなんですよ"
    },
    "155": {
        "character": "僕も…僕も大好きです",
        "letter": "Me too... me too.",
        "pinyin": "ぼくも…ぼくもだいすきです"
    },
    "156": {
        "character": "いいですよね花火",
        "letter": "Fireworks are good, aren't they?",
        "pinyin": "いいですよねはなび"
    },
    "157": {
        "character": "は…はい",
        "letter": "Yes...",
        "pinyin": "は…はい"
    },
    "158": {
        "character": "笹子さんは座ってください",
        "letter": "Sasago-san, please sit down.",
        "pinyin": "ささごさんはすわってください"
    },
    "159": {
        "character": "あ…すみません",
        "letter": "I'm sorry.",
        "pinyin": "あ…すみません"
    },
    "160": {
        "character": "ダメだよ半田さん遠慮してちゃ",
        "letter": "Don't be shy, Mr. Handa.",
        "pinyin": "だめだよはんでんさんえんりょしてちゃ"
    },
    "161": {
        "character": "でもこれで一緒に並んで座れたでしょ？",
        "letter": "But now we can sit together in a row, right?",
        "pinyin": "でもこれでいっしょにならんですわれたでしょ？"
    },
    "162": {
        "character": "あ…あの…最後の１本になっちゃいましたが",
        "letter": "Well... it's the last one, but...",
        "pinyin": "あ…あの…さいごの１ぽんになっちゃいましたが"
    },
    "163": {
        "character": "お茶どうぞ",
        "letter": "Here's your tea.",
        "pinyin": "おちゃどうぞ"
    },
    "164": {
        "character": "ありがとうございます",
        "letter": "Thank you very much.",
        "pinyin": "ありがとうございます"
    },
    "165": {
        "character": "すごくノドが渇いてたんですよ",
        "letter": "I was really thirsty.",
        "pinyin": "すごくのどがかわいてたんですよ"
    },
    "166": {
        "character": "冷たくて気持いい",
        "letter": "It's nice and cold.",
        "pinyin": "つめたくてきもちいい"
    },
    "167": {
        "character": "きれ～い！",
        "letter": "It's beautiful!",
        "pinyin": "きれ～い！"
    },
    "168": {
        "character": "おぉ～！炎上炎上！",
        "letter": "Ooh! Fire, fire, fire!",
        "pinyin": "おぉ～！えんじょうえんじょう！"
    },
    "169": {
        "character": "グリズリーくんそれ違うから",
        "letter": "That's not right, Mr. Grizzly.",
        "pinyin": "ぐりずりーくんそれちがうから"
    },
    "170": {
        "character": "きらめいてます！",
        "letter": "It's sparkling.",
        "pinyin": "きらめいてます！"
    },
    "171": {
        "character": "もう…みんな空気読まないんだから",
        "letter": "Oh, my... you guys are so airheaded.",
        "pinyin": "もう…みんなくうきよまないんだから"
    },
    "172": {
        "character": "ペンギンさんペンギンさん",
        "letter": "Mr. Penguin. Mr. Penguin.",
        "pinyin": "ぺんぎんさんぺんぎんさん"
    },
    "173": {
        "character": "何",
        "letter": "What?",
        "pinyin": "なに"
    },
    "174": {
        "character": "ぺんぎんさんって十回言うと呪われるっていう噂",
        "letter": "Rumor has it that if you say Mr. Penguin ten times, you'll be cursed.",
        "pinyin": "ぺんぎんさんってじゅっかいいうとのろわれるっていううわさ"
    },
    "175": {
        "character": "流していい",
        "letter": "You can spread it.",
        "pinyin": "ながしていい"
    },
    "176": {
        "character": "ダメ",
        "letter": "No!",
        "pinyin": "だめ"
    },
    "177": {
        "character": "そう簡単に呪われたら大忙しだよ",
        "letter": "If it's that easy to get cursed, we'll be busy.",
        "pinyin": "そうかんたんにのろわれたらおおいそがしだよ"
    },
    "178": {
        "character": "じゃペンギンさんが考えた",
        "letter": "So, Mr. Penguin, what's your idea?",
        "pinyin": "じゃぺんぎんさんがかんがえた"
    },
    "179": {
        "character": "せこく思われないように割り勘って言い出す方法を聞かせてよ",
        "letter": "So, penguins, tell us what you've come up with so we don't feel so guilty about splitting the bill.",
        "pinyin": "せこくおもわれないようにわりかんっていいだすほうほうをきかせてよ"
    },
    "180": {
        "character": "海でする話じゃないだな",
        "letter": "I don't think we're supposed to be talking about this at sea.",
        "pinyin": "うみでするはなしじゃないだな"
    },
    "181": {
        "character": "ていうか終わろ",
        "letter": "I mean, end of story.",
        "pinyin": "ていうかおわろ"
    },
    "182": {
        "character": "来週のしろくまカフェは急ぎ足でお送りします",
        "letter": "Next week's Shirokuma Cafe will be rushed!",
        "pinyin": "らいしゅうのしろくまかふぇはいそぎあしでおおくりします"
    },
    "183": {
        "character": "一歩一歩行こう",
        "letter": "Let's go step by step.",
        "pinyin": "いっぽいっぽいこう"
    },
    "184": {
        "character": "お楽しみに",
        "letter": "Enjoy!",
        "pinyin": "おたのしみに"
    }
}


function getCharacter(n){
  if (!n) {
    n = this;
  }
  let obj = allSyllableMap[n];
  return obj["character"];   
}

function translation(n) {
  if (!n) {
    n = this;
  }
  let obj = allSyllableMap[n];
  return obj["letter"];
}

String.prototype.romanize = translation;
String.prototype.original = getCharacter;