// Configuration
const localStorageKey = "japanese" + "Episode1Part2" + "Srs";
const languageTitle = "Japanese";
const srsTitle = "Shirokuma Cafe Ep1 Part 2";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 1 Part 2. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap =  {
    "1": {
        "character": "パンダ君の就職",
        "letter": "Mr. Panda's employment",
        "pinyin": "ぱんだくんのしゅうしょく"
    },
    "2": {
        "character": "はい、しろくまカフェです",
        "letter": "Yes, this is Shirokuma Cafe.",
        "pinyin": "はい、しろくまかふぇです"
    },
    "3": {
        "character": "あこんにちは先日面接にいった、パンダですよ",
        "letter": "Hi, I'm Panda, I had an interview the other day.",
        "pinyin": "あこんにちはせんじつめんせつにいった、ぱんだですよ"
    },
    "4": {
        "character": "ああ不合格の～",
        "letter": "Oh, no, I didn't get in.",
        "pinyin": "ああふごうかくの～"
    },
    "5": {
        "character": "出前をお願いしたいんです",
        "letter": "I'd like to order delivery.",
        "pinyin": "でまえをおねがいしたいんです"
    },
    "6": {
        "character": "出前はやってないですが",
        "letter": "I don't do delivery.",
        "pinyin": "でまえはやってないですが"
    },
    "7": {
        "character": "え？！となりなのに",
        "letter": "What? I'm right next to you.",
        "pinyin": "え？！となりなのに"
    },
    "8": {
        "character": "今忙しいし",
        "letter": "I'm busy.",
        "pinyin": "いまいそがしいし"
    },
    "9": {
        "character": "どうすれば出前してくれるの？",
        "letter": "How can I get a delivery?",
        "pinyin": "どうすればでまえしてくれるの？"
    },
    "10": {
        "character": "ちょっと",
        "letter": "Excuse me.",
        "pinyin": "ちょっと"
    },
    "11": {
        "character": "お母さん",
        "letter": "Mother.",
        "pinyin": "おかあさん"
    },
    "12": {
        "character": "今仕事探してたの",
        "letter": "I'm looking for a job right now.",
        "pinyin": "いましごとさがしてたの"
    },
    "13": {
        "character": "ねえねえ家近いんだから、出前してよ",
        "letter": "Hey, hey, hey, you live close by. You should deliver.",
        "pinyin": "ねえねえいえちかいんだから、でまえしてよ"
    },
    "14": {
        "character": "お願い～～～",
        "letter": "Please! Please!",
        "pinyin": "おねがい～～～"
    },
    "15": {
        "character": "あああ～～～～吸わないで～～～",
        "letter": "Ohhhh ～～～～ don't smoke~~",
        "pinyin": "あああ～～～～すわないで～～～"
    },
    "16": {
        "character": "こんにちは",
        "letter": "Hello. - Hello.",
        "pinyin": "こんにちは"
    },
    "17": {
        "character": "何しますか？",
        "letter": "What can I do for you?",
        "pinyin": "なにしますか？"
    },
    "18": {
        "character": "ペンギンさん、何にする？",
        "letter": "What can I get you, Penguin?",
        "pinyin": "ぺんぎんさん、なににする？"
    },
    "19": {
        "character": "そうだね",
        "letter": "Yeah.",
        "pinyin": "そうだね"
    },
    "20": {
        "character": "いつものやつ",
        "letter": "The usual.",
        "pinyin": "いつものやつ"
    },
    "21": {
        "character": "えっ？！いつものやつって言われたんですけど",
        "letter": "What? I was told it was the usual one.",
        "pinyin": "えっ？！いつものやつっていわれたんですけど"
    },
    "22": {
        "character": "任せて",
        "letter": "Got it.",
        "pinyin": "まかせて"
    },
    "23": {
        "character": "カレーライスです。。。。",
        "letter": "Curry and rice. 。。。。",
        "pinyin": "かれーらいすです。。。。"
    },
    "24": {
        "character": "違ったみたいですよ",
        "letter": "I don't think it's the same.",
        "pinyin": "ちがったみたいですよ"
    },
    "25": {
        "character": "やっぱりね",
        "letter": "I knew it.",
        "pinyin": "やっぱりね"
    },
    "26": {
        "character": "あの、竹か笹はないんですか",
        "letter": "Um, do you have any bamboo or bamboo grass?",
        "pinyin": "あの、たけかささはないんですか"
    },
    "27": {
        "character": "ないです",
        "letter": "I don't have any.",
        "pinyin": "ないです"
    },
    "28": {
        "character": "じゃ～アイスコーヒー",
        "letter": "Okay, iced coffee.",
        "pinyin": "じゃ～あいすこーひー"
    },
    "29": {
        "character": "あ、君バイト探してたよね",
        "letter": "Oh, you were looking for a part-time job.",
        "pinyin": "あ、きみばいとさがしてたよね"
    },
    "30": {
        "character": "こんなのあるよ",
        "letter": "Here's one.",
        "pinyin": "こんなのあるよ"
    },
    "31": {
        "character": "マグロ船船員大募集",
        "letter": "Tuna Boat Crew Wanted!",
        "pinyin": "まぐろせんせんいんだいぼしゅう"
    },
    "32": {
        "character": "経験者大歓迎、激しく重労働",
        "letter": "Experienced people are welcome. Intensely hard work.",
        "pinyin": "けいけんしゃだいかんげい、はげしくじゅうろうどう"
    },
    "33": {
        "character": "どう？",
        "letter": "What do you think?",
        "pinyin": "どう？"
    },
    "34": {
        "character": "嫌だよ、僕泳げないし",
        "letter": "I don't like it. I can't swim.",
        "pinyin": "いやだよ、ぼくおよげないし"
    },
    "35": {
        "character": "こっちのがいいじやない？",
        "letter": "This is better.",
        "pinyin": "こっちのがいいじやない？"
    },
    "36": {
        "character": "動物園未経験者歓迎",
        "letter": "No zoo experience welcome",
        "pinyin": "どうぶつえんみけいけんしゃかんげい"
    },
    "37": {
        "character": "呼び相談におします",
        "letter": "I will call you for advice.",
        "pinyin": "よびそうだんにおします"
    },
    "38": {
        "character": "先ずはお電話くださいフリアイ動物園",
        "letter": "Call us first, Friday Zoo.",
        "pinyin": "まずはおでんわくださいふりあいどうぶつえん"
    },
    "39": {
        "character": "マグロ船にしなよ",
        "letter": "You should take the tuna boat.",
        "pinyin": "まぐろせんにしなよ"
    },
    "40": {
        "character": "しろくまさん",
        "letter": "polar bear (Ursus maritimus)",
        "pinyin": "しろくまさん"
    },
    "41": {
        "character": "動物園か面白そう",
        "letter": "A zoo. Sounds interesting.",
        "pinyin": "どうぶつえんかおもしろそう"
    },
    "42": {
        "character": "えっと週二日の勤務希望ですか？",
        "letter": "Well, do you want to work two days a week?",
        "pinyin": "えっとしゅうふつかのきんむきぼうですか？"
    },
    "43": {
        "character": "では、パンダの仕事はどうでしょう？",
        "letter": "So how about a panda job?",
        "pinyin": "では、ぱんだのしごとはどうでしょう？"
    },
    "44": {
        "character": "常勤パンダさんが一頭いるですが",
        "letter": "We have one full-time panda.",
        "pinyin": "じょうきんぱんださんがいっとういるですが"
    },
    "45": {
        "character": "非常勤でもう一頭募集してるんです",
        "letter": "We're looking for another one on a part-time basis.",
        "pinyin": "ひじょうきんでもういっとうぼしゅうしてるんです"
    },
    "46": {
        "character": "パンダってあのパンダですよね",
        "letter": "Panda. That panda, right?",
        "pinyin": "ぱんだってあのぱんだですよね"
    },
    "47": {
        "character": "気が進みませんか？",
        "letter": "Wouldn't you like to be a part of it?",
        "pinyin": "きがすすみませんか？"
    },
    "48": {
        "character": "でしたら月の輪熊とゴリラも募集していますよ",
        "letter": "If so, we are also looking for a moon bear and a gorilla!",
        "pinyin": "でしたらつきのわぐまとごりらもぼしゅうしていますよ"
    },
    "49": {
        "character": "パンダでいいです",
        "letter": "I'm fine with pandas.",
        "pinyin": "ぱんだでいいです"
    },
    "50": {
        "character": "そうですか、では、来週から来てください",
        "letter": "Okay, well, come back next week.",
        "pinyin": "そうですか、では、らいしゅうからきてください"
    },
    "51": {
        "character": "僕、バイト決まったよ",
        "letter": "I got a part-time job.",
        "pinyin": "ぼく、ばいときまったよ"
    },
    "52": {
        "character": "良かったですね",
        "letter": "Good for you.",
        "pinyin": "よかったですね"
    },
    "53": {
        "character": "まぐろ船？",
        "letter": "Tuna boat?",
        "pinyin": "まぐろせん？"
    },
    "54": {
        "character": "違うよ動物園～",
        "letter": "No, the zoo.",
        "pinyin": "ちがうよどうぶつえん～"
    },
    "55": {
        "character": "動物園のバイトって、何やるんですか",
        "letter": "What kind of work do you do at the zoo?",
        "pinyin": "どうぶつえんのばいとって、なにやるんですか"
    },
    "56": {
        "character": "えへへまだ内緒",
        "letter": "Don't tell me yet.",
        "pinyin": "えへへまだないしょ"
    },
    "57": {
        "character": "なんで照れてんの",
        "letter": "Why are you so shy?",
        "pinyin": "なんでてれてんの"
    },
    "58": {
        "character": "いよいよ今日からバイトかドキドキしちゃうなぁ",
        "letter": "I'm so excited to finally start working today!",
        "pinyin": "いよいよきょうからばいとかどきどきしちゃうなぁ"
    },
    "59": {
        "character": "改めまして、半田と申します",
        "letter": "Hello again, my name is Handa.",
        "pinyin": "あらためまして、はんでんともうします"
    },
    "60": {
        "character": "今日は幼稚園から園児たちが来ます",
        "letter": "Today we have children from a kindergarten coming to visit us.",
        "pinyin": "きょうはようちえんからえんじたちがきます"
    },
    "61": {
        "character": "少しサービスしてあげてください",
        "letter": "Give him a little service.",
        "pinyin": "すこしさーびすしてあげてください"
    },
    "62": {
        "character": "はい～～～～～",
        "letter": "Yes. ～～～～～",
        "pinyin": "はい～～～～～"
    },
    "63": {
        "character": "サービスですね分かりました",
        "letter": "Service.",
        "pinyin": "さーびすですねわかりました"
    },
    "64": {
        "character": "それ以外の時間はどんな感じで？",
        "letter": "What about the rest of the time?",
        "pinyin": "それいがいのじかんはどんなかんじで？"
    },
    "65": {
        "character": "自然態でいいです",
        "letter": "Just be spontaneous.",
        "pinyin": "しぜんざまでいいです"
    },
    "66": {
        "character": "ねしろくま君",
        "letter": "Hey, polar bear.",
        "pinyin": "ねしろくまくん"
    },
    "67": {
        "character": "パンダ君うまくやってるかなぁ～",
        "letter": "I hope you're doing well, panda!",
        "pinyin": "ぱんだくんうまくやってるかなぁ～"
    },
    "68": {
        "character": "きっと大漁だよ、まぐろ船",
        "letter": "You're gonna catch a lot of fish, tuna boat.",
        "pinyin": "きっとたいりょうだよ、まぐろせん"
    },
    "69": {
        "character": "引っ張るねぇ～",
        "letter": "You're pulling my leg!",
        "pinyin": "ひっぱるねぇ～"
    },
    "70": {
        "character": "あっ、カフェモカちょうだい",
        "letter": "Oh, give me a café mocha.",
        "pinyin": "あっ、かふぇもかちょうだい"
    },
    "71": {
        "character": "って、それは影武者、いいから、そういうの",
        "letter": "That's a shadow warrior.",
        "pinyin": "って、それはかげむしゃ、いいから、そういうの"
    },
    "72": {
        "character": "え一週七日も",
        "letter": "Seven days a week.",
        "pinyin": "えいっしゅうなのかも"
    },
    "73": {
        "character": "休みはないんですか？",
        "letter": "You don't have any time off?",
        "pinyin": "やすみはないんですか？"
    },
    "74": {
        "character": "あたしは常勤パンダですからね",
        "letter": "I'm a full-time panda.",
        "pinyin": "あたしはじょうきんぱんだですからね"
    },
    "75": {
        "character": "でも月に二日くらいは休みますよ",
        "letter": "But I do take a couple of days off a month.",
        "pinyin": "でもつきにふつかくらいはやすみますよ"
    },
    "76": {
        "character": "非常勤でよかった",
        "letter": "I'm glad I'm part-time.",
        "pinyin": "ひじょうきんでよかった"
    },
    "77": {
        "character": "ハハハハまぁ今日からよろしくお願いします",
        "letter": "Hahahahaha well, I'm looking forward to working with you starting today.",
        "pinyin": "ははははまぁきょうからよろしくおねがいします"
    },
    "78": {
        "character": "はい～！",
        "letter": "Yes~!",
        "pinyin": "はい～！"
    },
    "79": {
        "character": "あっそういえば",
        "letter": "Oh, by the way...",
        "pinyin": "あっそういえば"
    },
    "80": {
        "character": "どうしました？",
        "letter": "What's wrong?",
        "pinyin": "どうしました？"
    },
    "81": {
        "character": "半田さんから",
        "letter": "From Mr. Handa.",
        "pinyin": "はんでんさんから"
    },
    "82": {
        "character": "自然態でって言われたんです",
        "letter": "I was told to be natural.",
        "pinyin": "しぜんざまでっていわれたんです"
    },
    "83": {
        "character": "こんな感じでしょうか？自然と一体的な？",
        "letter": "Like this? At one with nature?",
        "pinyin": "こんなかんじでしょうか？しぜんといったいてきな？"
    },
    "84": {
        "character": "多分違うと思うというかすごく不自然",
        "letter": "Maybe not, or maybe it's just very unnatural.",
        "pinyin": "たぶんちがうとおもうというかすごくふしぜん"
    },
    "85": {
        "character": "まぁ～難しく考えずに普通にしてれば大丈夫ですよ",
        "letter": "Well~ don't think too hard, just act normally and you'll be fine.",
        "pinyin": "まぁ～むずかしくかんがえずにふつうにしてればだいじょうぶですよ"
    },
    "86": {
        "character": "あ～～パンダさん～～～",
        "letter": "Ah~~ Mr. Panda~!",
        "pinyin": "あ～～ぱんださん～～～"
    },
    "87": {
        "character": "はい皆パンダさんですよ",
        "letter": "Yes, we're all pandas.",
        "pinyin": "はいみんなぱんださんですよ"
    },
    "88": {
        "character": "あ園児が来ましたね",
        "letter": "Oh, here come the preschoolers.",
        "pinyin": "あえんじがきましたね"
    },
    "89": {
        "character": "さ～頑張りましょう",
        "letter": "Come on, let's go for it.",
        "pinyin": "さ～がんばりましょう"
    },
    "90": {
        "character": "はい！",
        "letter": "Yes, sir!",
        "pinyin": "はい！"
    },
    "91": {
        "character": "パンダさんは食べているよ",
        "letter": "Panda is eating.",
        "pinyin": "ぱんださんはたべているよ"
    },
    "92": {
        "character": "そうね～",
        "letter": "That's right.",
        "pinyin": "そうね～"
    },
    "93": {
        "character": "はは～パンダさんは滑り台滑ってるの",
        "letter": "Ha-ha~ Panda is sliding down the slide.",
        "pinyin": "はは～ぱんださんはすべりだいすべってるの"
    },
    "94": {
        "character": "パンダさんが転がってるよ",
        "letter": "Panda is rolling.",
        "pinyin": "ぱんださんがころがってるよ"
    },
    "95": {
        "character": "これでサービスになってるんですか？",
        "letter": "Is this supposed to be a service?",
        "pinyin": "これでさーびすになってるんですか？"
    },
    "96": {
        "character": "もうちょっとの辛抱ですよ～",
        "letter": "Just a little more patience.",
        "pinyin": "もうちょっとのしんぼうですよ～"
    },
    "97": {
        "character": "あ～もう一サービスしましょう",
        "letter": "Oh, let's have another service!",
        "pinyin": "あ～もういちさーびすしましょう"
    },
    "98": {
        "character": "は、はい！",
        "letter": "Ha, yes!",
        "pinyin": "は、はい！"
    },
    "99": {
        "character": "サービス～サービス～～",
        "letter": "Service~Service~Service~Service",
        "pinyin": "さーびす～さーびす～～"
    },
    "100": {
        "character": "皆、次はキリンさんを見ましょう",
        "letter": "Okay, everybody, let's see Mr. Giraffe next.",
        "pinyin": "みんな、つぎはきりんさんをみましょう"
    },
    "101": {
        "character": "はい～～～",
        "letter": "Yes~~~",
        "pinyin": "はい～～～"
    },
    "102": {
        "character": "こっちにしよう",
        "letter": "Let's go this way.",
        "pinyin": "こっちにしよう"
    },
    "103": {
        "character": "サービス～サー～ビス～",
        "letter": "Service~service~service",
        "pinyin": "さーびす～さー～びす～"
    },
    "104": {
        "character": "は！爆睡してた！",
        "letter": "Ha! I was sleeping like a bomb!",
        "pinyin": "は！ばくすいしてた！"
    },
    "105": {
        "character": "なんで起こしてくれないんですか、常勤パンダさん、え！",
        "letter": "Why don't you wake me up, full-time panda?",
        "pinyin": "なんでおこしてくれないんですか、じょうきんぱんださん、え！"
    },
    "106": {
        "character": "閉園の時間になりましたまたのご来園をお待ちしております",
        "letter": "It is now time to close the park, and we look forward to seeing you again.",
        "pinyin": "へいえんのじかんになりましたまたのごらいえんをおまちしております"
    },
    "107": {
        "character": "お疲れ様でした",
        "letter": "Thank you for your hard work.",
        "pinyin": "おつかれさまでした"
    },
    "108": {
        "character": "お先です",
        "letter": "After you.",
        "pinyin": "おさきです"
    },
    "109": {
        "character": "あ～パンダ君",
        "letter": "Oh, Mr. Panda.",
        "pinyin": "あ～ぱんだくん"
    },
    "110": {
        "character": "あれ皆来てたの",
        "letter": "Oh, my God, they're all here.",
        "pinyin": "あれみんなこてたの"
    },
    "111": {
        "character": "お知り合いなんですか",
        "letter": "You know each other?",
        "pinyin": "おしりあいなんですか"
    },
    "112": {
        "character": "僕たちも動物園でバイトしてるんですよ",
        "letter": "We work part-time at the zoo, too.",
        "pinyin": "ぼくたちもどうぶつえんでばいとしてるんですよ"
    },
    "113": {
        "character": "パンダ君こっちこっち",
        "letter": "Hey, panda, over here, over here.",
        "pinyin": "ぱんだくんこっちこっち"
    },
    "114": {
        "character": "今日は園児が可愛かったね",
        "letter": "The kids were so cute today.",
        "pinyin": "きょうはえんじがかわいかったね"
    },
    "115": {
        "character": "僕張り切り過ぎでて途中でばてちゃった",
        "letter": "I was working too hard, and I got tired halfway through.",
        "pinyin": "ぼくはりきりすぎでてとちゅうでばてちゃった"
    },
    "116": {
        "character": "わかりますわかります",
        "letter": "I know, I know.",
        "pinyin": "わかりますわかります"
    },
    "117": {
        "character": "今日は一日真面目に働いたなぁ",
        "letter": "I've worked hard all day.",
        "pinyin": "きょうはいちにちまじめにはたらいたなぁ"
    },
    "118": {
        "character": "そうですね",
        "letter": "Yes, it is.",
        "pinyin": "そうですね"
    },
    "119": {
        "character": "すごいやりきった顔だけどパンダ君途中からずっと寝てたらしいよ",
        "letter": "You look like you've done all you can do, but I heard you've been sleeping through the whole thing.",
        "pinyin": "すごいやりきったかおだけどぱんだくんとちゅうからずっとねてたらしいよ"
    },
    "120": {
        "character": "パンダ君の自然態なんだねぇきっと",
        "letter": "I guess it's just your natural state.",
        "pinyin": "ぱんだくんのしぜんざまなんだねぇきっと"
    },
    "121": {
        "character": "パンダ君って割りと図々しいよね",
        "letter": "Pandas are rather brazen, aren't they?",
        "pinyin": "ぱんだくんってわりとずうずうしいよね"
    },
    "122": {
        "character": "パンダ君一先何か頼みませんか？",
        "letter": "Panda, would you like to order something first?",
        "pinyin": "ぱんだくんひとまずなにかたのみませんか？"
    },
    "123": {
        "character": "どうしようかな～～～",
        "letter": "I don't know what to do~~~",
        "pinyin": "どうしようかな～～～"
    },
    "124": {
        "character": "何にする？",
        "letter": "What do you want?",
        "pinyin": "なににする？"
    },
    "125": {
        "character": "竹！大盛りで",
        "letter": "Bamboo! A big one.",
        "pinyin": "たけ！おおもりで"
    },
    "126": {
        "character": "しろくま君それは守宮！",
        "letter": "Shikuma-kun, that's Morimiya!",
        "pinyin": "しろくまくんそれはやもり！"
    },
    "127": {
        "character": "オーよちよち～",
        "letter": "O-Yo-chi-chi~!",
        "pinyin": "おーよちよち～"
    },
    "128": {
        "character": "それは子守！",
        "letter": "That's a babysitter!",
        "pinyin": "それはこもり！"
    },
    "129": {
        "character": "笹子さんが突っ込みを！",
        "letter": "Sasago-san rushes in!",
        "pinyin": "ささごさんがつっこみを！"
    },
    "130": {
        "character": "それはハモリ",
        "letter": "It's a hummingbird",
        "pinyin": "それははもり"
    },
    "131": {
        "character": "ね～早く頂戴～",
        "letter": "Give it to me quickly!",
        "pinyin": "ね～はやくちょうだい～"
    },
    "132": {
        "character": "ペンギンさんペンギンさん",
        "letter": "Penguin, penguin, penguin.",
        "pinyin": "ぺんぎんさんぺんぎんさん"
    },
    "133": {
        "character": "僕が全部毛を剃るとどうなってると思う？",
        "letter": "What do you think happens when I shave it all off?",
        "pinyin": "ぼくがぜんぶけをそるとどうなってるとおもう？"
    },
    "134": {
        "character": "今はいいかな予告しなきゃいけないから",
        "letter": "Not now, because I have to give you a warning.",
        "pinyin": "いまはいいかなよこくしなきゃいけないから"
    },
    "135": {
        "character": "じゃ～さペンギンさんのだめな部分三つ教えて",
        "letter": "Okay, now tell me three things that are wrong with you, Penguin.",
        "pinyin": "じゃ～さぺんぎんさんのだめなぶぶんみっつおしえて"
    },
    "136": {
        "character": "それもいいかなテンション下がっちゃうから",
        "letter": "Well, that's okay, too, 'cause it's kind of depressing.",
        "pinyin": "それもいいかなてんしょんさがっちゃうから"
    },
    "137": {
        "character": "しろくま君しゃべろう",
        "letter": "Come on, polar bear, let's talk.",
        "pinyin": "しろくまくんしゃべろう"
    },
    "138": {
        "character": "ペンギンさんのダメなところはお金にだらしないところ",
        "letter": "The only thing wrong with Mr. Penguin is that he's sloppy with his money.",
        "pinyin": "ぺんぎんさんのだめなところはおかねにだらしないところ"
    },
    "139": {
        "character": "やめて！もう終わって！",
        "letter": "Stop it! That's enough!",
        "pinyin": "やめて！もうおわって！"
    },
    "140": {
        "character": "はい！次回しろくまカフェ最終回お楽しみに",
        "letter": "Yes, sir! Please look forward to the next and final installment of Shirokuma Cafe!",
        "pinyin": "はい！じかいしろくまかふぇさいしゅうかいおたのしみに"
    },
    "141": {
        "character": "終わらせないよしろくまカフェ第二話お楽しみに",
        "letter": "We won't let you finish... enjoy the second episode of Shirokuma Cafe!",
        "pinyin": "おわらせないよしろくまかふぇだいにばなしおたのしみに"
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