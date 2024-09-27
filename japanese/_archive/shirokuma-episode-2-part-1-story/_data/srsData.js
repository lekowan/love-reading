// Configuration
const localStorageKey = "japanese" + "Episode2Part1" + "Story";
const languageTitle = "Japanese";
const srsTitle = "Shirokuma Cafe Ep2 Part 1 Story";

// Speech Synthesis
const language = "ja-JP";
const activateSpeech = true;

// Gradient
const loadergradientBackground = "purple-loader-background";

// Exercise Type (character, vocabulary )
const exerciseType = "vocabulary";

const welcomeIntro = "In this spaced-repetition practice (SRS), you will study Japanese expressions from Shirokuma Episode 1 Part 1. \n \n After your first session, you will also revise learned characters from previous sessions";

const allSyllableMap =  {
    '1': {
        'character': 'みんなのカフェ',
        'letter': "Everyone's Cafe",
        'pinyin': 'みんなのかふぇ',
        'definition': 'みんな の カフェ',
        'pinyinSpace': 'みんな の カフェ'
    },
    '2': {
        'character': '僕の家の朝は早いです',
        'letter': 'Morning comes early in my house.',
        'pinyin': 'ぼくのいえのあさははやいです',
        'definition': '僕 の 家 の 朝 は 早いです',
        'pinyinSpace': 'ぼく の いえ/うち の あさ は はやいです'
    },
    '3': {
        'character': '朝起きて一番に中庭に集まって家族みんなで太極拳をします',
        'letter': 'The first thing we do when we get up in the morning is to gather in the courtyard and do tai chi with the whole family.',
        'pinyin': 'あさおきていちばんになかにわにあつまってかぞくみんなでたいきょくけんをします',
        'definition': '朝起き て 一番 に 中庭 に 集まって 家族 みんな で 太極拳 を します',
        'pinyinSpace': 'あさおき て いちばん に なかにわ に あつまって かぞく みんな で たいきょくけん を します'
    },
    '4': {
        'character': 'お爺ちゃんが中国拳法の達人だからです',
        'letter': 'Because my grandfather is a master of Chinese martial arts.',
        'pinyin': 'おじいちゃんがちゅうごくけんぽうのたつじんだ',
        'definition': 'お 爺ちゃん が 中国拳法 の 達人 だから です',
        'pinyinSpace': 'お じいちゃん が ちゅうごくけんぽう の たつじん だ から です'
    },
    '5': {
        'character': '太極拳が終わったら朝ごはんを食べます',
        'letter': 'After tai chi, we eat breakfast.',
        'pinyin': 'たいきょくけんがおわったらあさごはんをたべます',
        'definition': '太極拳 が 終わったら 朝ごはん を 食べます',
        'pinyinSpace': 'たいきょくけん が おわったら あさごはん を たべます'
    },
    '6': {
        'character': 'いつまで寝てるの',
        'letter': 'How long are you going to sleep?',
        'pinyin': 'いつまでねてるの',
        'definition': 'いつまで 寝てる の',
        'pinyinSpace': 'いつまで ねてる の'
    },
    '7': {
        'character': '今日動物園休みなんだから寝かせて',
        'letter': 'The zoo is closed today, so let me sleep',
        'pinyin': 'きょうどうぶつえんやすみなんだからねかせて',
        'definition': '今日 動物園 休み な ん だから 寝かせて',
        'pinyinSpace': 'きょう どうぶつえん やすみ な ん だ から ねかせて'
    },
    '8': {
        'character': 'みんなとっくに起きて太極拳やって朝ごはん食べてるわよ',
        'letter': "Everyone's already up, doing tai chi and eating breakfast.",
        'pinyin': 'みんなとっくにおきてたいきょくけんやってあさごはんたべてるわよ',
        'definition': 'みんな とっくに 起きて 太極拳 やって 朝ごはん 食べてる わよ',
        'pinyinSpace': 'みんな とっく おきて たいきょくけん やって あさごはん たべてる わよ'
    },
    '9': {
        'character': '太極拳でしょうベッドの上でやる',
        'letter': "I'm sure it's tai chi, but I'm going to do it on the bed.",
        'pinyin': 'たいきょくけんでしょうべっどのうえでやるの',
        'definition': '太極拳 でしょう ベッド の 上 で やる',
        'pinyinSpace': 'たいきょくけん でしょう ベッド の うえ/かみ/じょう で やる'
    },
    '10': {
        'character': 'まったくもう',
        'letter': 'Oh, my God.',
        'pinyin': 'まったくもう',
        'definition': 'まったくもう',
        'pinyinSpace': 'まったくもう'
    },
    '11': {
        'character': 'お疲れですか',
        'letter': 'Are you tired?',
        'pinyin': 'おつかれですか',
        'definition': 'お疲れ です か',
        'pinyinSpace': 'おつかれ です か'
    },
    '12': {
        'character': '最近運動不足だから肩こちゃって',
        'letter': "I haven't been getting enough exercise lately, so my shoulders are stiff.",
        'pinyin': 'さいきんうんどうぶそくだからかたこちゃって',
        'definition': '最近 運動不足 だから 肩 こちゃって',
        'pinyinSpace': 'さいきん うんどうぶそく だ から かた こちゃって'
    },
    '13': {
        'character': '笹子さんちょっと肩もんでくれない',
        'letter': 'Sasago-san, can you give me a shoulder rub?',
        'pinyin': 'ささごさんちょっとかたもんでくれない',
        'definition': '笹 子 さん ちょっと 肩 もんでくれない',
        'pinyinSpace': 'ささ こ さん ちょっと かた もんで くれない'
    },
    '14': {
        'character': 'どうしたの',
        'letter': "What's wrong?",
        'pinyin': 'どうしたの',
        'definition': 'どうしたの',
        'pinyinSpace': 'どうしたの'
    },
    '15': {
        'character': 'ちょっと肩が見つからなくて',
        'letter': "I just couldn't find your shoulders.",
        'pinyin': 'ちょっとかたがみつからなくて',
        'definition': 'ちょっと 肩 が 見つからなくて',
        'pinyinSpace': 'ちょっと かた が みつからなくて'
    },
    '16': {
        'character': 'ペンギンさんの肩ってどこにあるんですか',
        'letter': "Where is Penguin's shoulder?",
        'pinyin': 'ぺんぎんさんのかたってどこにあるんですか',
        'definition': 'ペンギン さん の 肩 って どこ に  ん です か',
        'pinyinSpace': 'ペンギン さん の かた って どこ に ある ん です か'
    },
    '17': {
        'character': 'えここだよわかるでしょう',
        'letter': "Here... you know what I'm talking about.",
        'pinyin': 'えここだよわかるでしょう',
        'definition': 'え ここ だ よ わかる でしょう',
        'pinyinSpace': 'え ここ だ よ わかる でしょう'
    },
    '18': {
        'character': 'わかりません',
        'letter': "I don't know.",
        'pinyin': 'わかりません',
        'definition': 'わかりません',
        'pinyinSpace': 'わかりません'
    },
    '19': {
        'character': 'じゃ白熊君肩揉んでくれる',
        'letter': 'Okay, polar bear, will you rub my shoulders?',
        'pinyin': 'じゃしろくまくんかたもんでくれる',
        'definition': 'じゃ 白熊 君 肩 揉んでくれる',
        'pinyinSpace': 'じゃ しろくま/はぐま きみ/くん かた もんで くれる'
    },
    '20': {
        'character': 'いいよ',
        'letter': 'Okay.',
        'pinyin': 'いいよ',
        'definition': ' よ',
        'pinyinSpace': 'いい よ'
    },
    '21': {
        'character': '刺さってる刺さってる',
        'letter': "It's stuck, it's stuck, it's stuck.",
        'pinyin': 'ささってるささってる',
        'definition': '刺さってる 刺さってる',
        'pinyinSpace': 'ささってる ささってる'
    },
    '22': {
        'character': 'いらっしゃいませ',
        'letter': 'Welcome.',
        'pinyin': 'いらっしゃいませ',
        'definition': 'いらっしゃいませ',
        'pinyinSpace': 'いらっしゃいませ'
    },
    '23': {
        'character': 'いらっしゃい',
        'letter': 'Welcome to the house.',
        'pinyin': 'いらっしゃい',
        'definition': '',
        'pinyinSpace': 'いらっしゃい'
    },
    '24': {
        'character': 'やパンダ君',
        'letter': 'Hey, panda.',
        'pinyin': 'やぱんだくん',
        'definition': 'や パンダ 君',
        'pinyinSpace': 'や パンダ きみ/くん'
    },
    '25': {
        'character': 'ペンギンさん来てたの',
        'letter': 'Oh, Mr. Penguin was here.',
        'pinyin': 'ぺんぎんさんこてたの',
        'definition': 'ペンギン さん 来てた の',
        'pinyinSpace': 'ペンギン さん きてた の'
    },
    '26': {
        'character': '動物園のバイト今日は休み',
        'letter': "I'm not working at the zoo today.",
        'pinyin': 'どうぶつえんのばいときょうはやすみ',
        'definition': '動物園 の バイト 今日 は 休み',
        'pinyinSpace': 'どうぶつえん の バイト きょう は やすみ'
    },
    '27': {
        'character': 'うん笹子さんいつもの',
        'letter': 'Sasago-san, the usual.',
        'pinyin': 'うんさ',
        'definition': 'うん 笹 子 さんいつ もの',
        'pinyinSpace': 'うん ささ こ さんいつ もの'
    },
    '28': {
        'character': 'はい竹大盛りね',
        'letter': 'A big bowl of bamboo.',
        'pinyin': 'はいたけおおもりね',
        'definition': 'はい 竹 大盛り ね',
        'pinyinSpace': 'はい たけ おおもり ね'
    },
    '29': {
        'character': '白熊君のお店今日も人いっぱいだね',
        'letter': 'Your store is full of people today, Polar Bear!',
        'pinyin': 'しろくまくんのおみせきょうもひといっぱいだね',
        'definition': '白熊 君 の お店 今日 も 人 いっぱい だ ね',
        'pinyinSpace': 'しろくま/はぐま きみ/くん の おみせ きょう も じん/ひと/にん いっぱい だ ね'
    },
    '30': {
        'character': 'コーヒーも食べ物も美味しいよね',
        'letter': "I'm sure the coffee and food are delicious.",
        'pinyin': 'こーひーもたべものもおいしいよね',
        'definition': 'コーヒー も 食べ物 も 美味しい よね',
        'pinyinSpace': 'コーヒー も たべもの も おいしい よね'
    },
    '31': {
        'character': 'おしゃれだしね',
        'letter': "It's stylish.",
        'pinyin': 'おしゃれだしね',
        'definition': 'おしゃれ だ しね',
        'pinyinSpace': 'おしゃれ だ しね'
    },
    '32': {
        'character': 'そうだね',
        'letter': 'Yeah, I guess so.',
        'pinyin': 'そうだね',
        'definition': 'そうだね',
        'pinyinSpace': 'そうだね'
    },
    '33': {
        'character': 'おしゃれな女の子がいっぱいだね',
        'letter': 'Lots of fashionable girls.',
        'pinyin': 'おしゃれなおんなのこがいっぱいだね',
        'definition': 'おしゃれ な 女の子 が いっぱい だ ね',
        'pinyinSpace': 'おしゃれ な おんなのこ が いっぱい だ ね'
    },
    '34': {
        'character': 'そうだ',
        'letter': "Yes, you're right.",
        'pinyin': 'そうだね',
        'definition': 'そうだね',
        'pinyinSpace': 'そうだね'
    },
    '35': {
        'character': '珍しい動物も来てるよね',
        'letter': "I've seen some rare animals here.",
        'pinyin': 'めずらしいどうぶつもきてるよね',
        'definition': '珍しい 動物 も 来てる よね',
        'pinyinSpace': 'めずらしい どうぶつ も きてる よね'
    },
    '36': {
        'character': 'そう',
        'letter': 'Yeah, I guess so.',
        'pinyin': 'そうだね',
        'definition': 'そうだね',
        'pinyinSpace': 'そうだね'
    },
    '37': {
        'character': 'カフェやってる白熊 君って格好よくない',
        'letter': "Isn't it cool to be a polar bear running a café?",
        'pinyin': 'かふぇやってるしろくまくんってかっこよくない',
        'definition': 'カフェ やってる 白熊 君 って 格好よくない',
        'pinyinSpace': 'カフェ やってる しろくま/はぐま きみ/くん っ かっこよくない'
    },
    '38': {
        'character': 'そう',
        'letter': 'Yeah.',
        'pinyin': 'そう',
        'definition': 'そう',
        'pinyinSpace': 'そう'
    },
    '39': {
        'character': 'まあお客でダラダラしてるペンギンさんは',
        'letter': 'Well, the penguins that are lounging around with the customers...',
        'pinyin': 'まあおきゃくでだらだらしてるぺんぎんさんは',
        'definition': 'まあ お 客 で ダラダラしてる ペンギン さん は',
        'pinyinSpace': 'まあ お きゃく で ダラダラ してる ペンギン さん は'
    },
    '40': {
        'character': 'とくには格好よくないね',
        'letter': 'Not particularly good-looking.',
        'pinyin': 'とくにはかっこよくないね',
        'definition': 'とくに は 格好よくない ね',
        'pinyinSpace': 'とくに は かっこよくない ね'
    },
    '41': {
        'character': '僕と比べるのはやめてくれない',
        'letter': 'Can you stop comparing yourself to me?',
        'pinyin': 'ぼくとくらべるのはやめてくれない',
        'definition': '僕 と 比べる の は やめて くれない',
        'pinyinSpace': 'ぼく と くらべる の は やめてくれない'
    },
    '42': {
        'character': 'あ白熊君カフェモカ頂戴',
        'letter': 'Hey, polar bear, can I have a cafe mocha?',
        'pinyin': 'あしろくまくんかふぇもかちょうだい',
        'definition': 'あ 白熊 君 カフェ モカ 頂戴',
        'pinyinSpace': 'あ しろくま/はぐま きみ/くん カフェ モカ ちょうだい'
    },
    '43': {
        'character': 'それは卓袱台',
        'letter': "That's a tabletop.",
        'pinyin': 'それはちゃぶだい',
        'definition': 'それは 卓袱台',
        'pinyinSpace': 'それは ちゃぶだい'
    },
    '44': {
        'character': 'それは宿題',
        'letter': "That's homework.",
        'pinyin': 'それはしゅくだい',
        'definition': 'それは 宿題',
        'pinyinSpace': 'それは しゅくだい'
    },
    '45': {
        'character': 'それは兄弟',
        'letter': "That's a brother.",
        'pinyin': 'それはきょうだい',
        'definition': 'それは 兄弟',
        'pinyinSpace': 'それは きょうだい'
    },
    '46': {
        'character': '「頂戴～」ね',
        'letter': 'Give me that.',
        'pinyin': '「ちょうだい～」ね',
        'definition': '頂戴 ね',
        'pinyinSpace': '「 ちょうだい ～」 ね'
    },
    '47': {
        'character': 'はいカフェモカ',
        'letter': 'Yes, Cafe Mocha.',
        'pinyin': 'はいかふぇもか',
        'definition': 'はい カフェ モカ',
        'pinyinSpace': 'はい カフェ モカ'
    },
    '48': {
        'character': '普通にやってよね',
        'letter': 'Just do what you normally do.',
        'pinyin': 'ふつうにやってよね',
        'definition': '普通に やって よね',
        'pinyinSpace': 'ふつうに やって よね'
    },
    '49': {
        'character': 'どうぞごゆっくり',
        'letter': 'Please, take your time.',
        'pinyin': 'どうぞごゆっくり',
        'definition': 'どうぞ ごゆっくり',
        'pinyinSpace': 'どうぞ ごゆっくり'
    },
    '50': {
        'character': '笹子さんちょっと出てくるね',
        'letter': "Sasago, I'm going out for a bit.",
        'pinyin': 'ささこさんちょっとでてくるね',
        'definition': '笹 子 さん ちょっと 出てくる ね',
        'pinyinSpace': 'ささ こ さん ちょっと でてくる ね'
    },
    '51': {
        'character': 'うんはい白熊さんいってらっしゃい',
        'letter': 'Yes, yes, go ahead, polar bear.',
        'pinyin': 'うんはいしろくまさん',
        'definition': 'うん はい 白熊 さん いってらっしゃい',
        'pinyinSpace': 'うん はい しろくま/はぐま さん いってらっしゃい'
    },
    '52': {
        'character': 'そうだ僕もカフェを開いてみたらどうかな',
        'letter': 'I think I should open a café too.',
        'pinyin': 'そうだぼくもかふぇをひらいてみたらどうかな',
        'definition': 'そう だ 僕 も カフェ を 開いて みたら どうかな',
        'pinyinSpace': 'そう だ ぼく も カフェ を ひらいて/あいて みたら どうかな'
    },
    '53': {
        'character': 'パンダ君が',
        'letter': 'Mr. Panda.',
        'pinyin': 'ぱんだくんが',
        'definition': 'パンダ 君 が',
        'pinyinSpace': 'パンダ きみ/くん が'
    },
    '54': {
        'character': 'パンダカフェ',
        'letter': 'Panda Cafe',
        'pinyin': 'ぱんだかふぇ',
        'definition': 'パンダ カフェ',
        'pinyinSpace': ' カフェ'
    },
    '55': {
        'character': 'そのまんまだね',
        'letter': 'Just like that.',
        'pinyin': 'そのまんまだね',
        'definition': 'そのまんま だ ね',
        'pinyinSpace': 'そのまんま だ ね'
    },
    '56': {
        'character': 'どんなカフェにしようかなぁ',
        'letter': 'What kind of café should I make?',
        'pinyin': 'どんなかふぇにしようかなぁ',
        'definition': 'どんな カフェ に しよう か なぁ',
        'pinyinSpace': 'どんな カフェ に しよう か なぁ'
    },
    '57': {
        'character': 'まったりできるレトロなカフェがいいな',
        'letter': 'I want a retro café where people can relax.',
        'pinyin': 'まったりできるれとろなかふぇがいいな',
        'definition': 'まったりできる レトロ な カフェ が いい な',
        'pinyinSpace': 'まったり できる レトロ な カフェ が いい な'
    },
    '58': {
        'character': 'うんコンセプトは悪くないね',
        'letter': "Yeah, it's not a bad concept.",
        'pinyin': 'うんこんせぷとはわるくないね',
        'definition': 'うん コンセプト は 悪くない ね',
        'pinyinSpace': 'うん コンセプト は わるくない ね'
    },
    '59': {
        'character': '',
        'letter': 'Welcome!',
        'pinyin': 'いらっしゃいませ',
        'definition': 'いらっしゃいませ',
        'pinyinSpace': 'いらっしゃいませ'
    },
    '60': {
        'character': '可愛いな僕',
        'letter': "I'm so cute",
        'pinyin': 'かわいいなぼく',
        'definition': '可愛い な 僕',
        'pinyinSpace': 'かわ な ぼく'
    },
    '61': {
        'character': '自分で言わないで',
        'letter': "Don't tell me yourself.",
        'pinyin': 'じぶんでいわないで',
        'definition': '自分で 言わないで',
        'pinyinSpace': 'じぶんで いわないで'
    },
    '62': {
        'character': 'それでね',
        'letter': 'So, you know what?',
        'pinyin': 'それでね',
        'definition': 'それで ね',
        'pinyinSpace': 'それで ね'
    },
    '63': {
        'character': 'お店に中にね僕のコレクションも飾ろうかな',
        'letter': "I'm thinking of displaying my collection in the store.",
        'pinyin': 'おみせになかにねぼくのこ',
        'definition': 'お店 に 中 に ね 僕 の コレクション も 飾ろう かな',
        'pinyinSpace': 'おみせ に なか/ちゅう に ね ぼく の コレクション も かざろう かな'
    },
    '64': {
        'character': 'パンダ君のコレクションってパンダグッヅ',
        'letter': "Panda's collection is called Panda Goods.",
        'pinyin': 'ぱんだくんのこれくしょんってぱんだぐっづ',
        'definition': 'パンダ 君 の コレクション って パンダ グッヅ',
        'pinyinSpace': 'パンダ きみ/くん の コレクション って パンダ グッヅ'
    },
    '65': {
        'character': 'そうだよ可愛いよ',
        'letter': "Yes, it's adorable.",
        'pinyin': 'そうだよかわいいよ',
        'definition': 'そうだ よ 可愛い よ',
        'pinyinSpace': 'そうだ よ かわいい よ'
    },
    '66': {
        'character': '何',
        'letter': 'What?',
        'pinyin': 'なに',
        'definition': '何',
        'pinyinSpace': 'なに/なん'
    },
    '67': {
        'character': 'パンダ推しだね',
        'letter': "You're a panda pusher.",
        'pinyin': 'ぱんだおしだね',
        'definition': 'パンダ 推し だ ね',
        'pinyinSpace': 'パンダ おし だ ね'
    },
    '68': {
        'character': '何か問題ある',
        'letter': "What's the problem?",
        'pinyin': 'なにかもんだいある',
        'definition': '何か 問題 ある',
        'pinyinSpace': 'なにか もんだい ある'
    },
    '69': {
        'character': 'いやいいけどそれから',
        'letter': "No, it's fine, but then...",
        'pinyin': 'いやいいけどそれから',
        'definition': 'いや いい けど それから',
        'pinyinSpace': 'いや いい けど それから'
    },
    '70': {
        'character': '当店のおすすめは日替わり竹ランチです',
        'letter': 'Our recommendation is the daily bamboo lunch!',
        'pinyin': 'とうてんのおすすめはひがわりたけらんちです',
        'definition': '当店 の おすすめ は 日替わり 竹 ランチ です',
        'pinyinSpace': 'とうてん の おすすめ は ひがわり たけ ランチ です'
    },
    '71': {
        'character': 'お品書きはこちらです',
        'letter': 'Here is the menu',
        'pinyin': 'おしながきはこちらです',
        'definition': 'お 品書き は こちら です',
        'pinyinSpace': 'お しながき は こちら です'
    },
    '72': {
        'character': '竹特上',
        'letter': 'Bamboo Special Top',
        'pinyin': 'たけとくじょう',
        'definition': '竹 特上',
        'pinyinSpace': 'たけ とくじょう'
    },
    '73': {
        'character': '竹上',
        'letter': 'Bamboo Top',
        'pinyin': 'たけがみ',
        'definition': '竹 上',
        'pinyinSpace': 'たけ うえ/かみ/じょう'
    },
    '74': {
        'character': '竹並',
        'letter': 'Bamboo',
        'pinyin': 'たけ',
        'definition': '竹 並',
        'pinyinSpace': 'たけ なみ'
    },
    '75': {
        'character': '若竹煮',
        'letter': 'Simmered wakatake mushrooms',
        'pinyin': 'わかたけに',
        'definition': '若 竹 煮',
        'pinyinSpace': 'わか たけ に'
    },
    '76': {
        'character': '竹ずし',
        'letter': 'Bamboo Sushi',
        'pinyin': 'たけずし',
        'definition': '竹 ずし',
        'pinyinSpace': 'たけ ずし'
    },
    '77': {
        'character': '竹かまぼこ……',
        'letter': 'Bamboo fish cake ......',
        'pinyin': 'たけかまぼこ……',
        'definition': '竹 かまぼこ',
        'pinyinSpace': 'たけ かまぼこ ……'
    },
    '78': {
        'character': '……竹定食松竹梅',
        'letter': '...... bamboo-teishoku-matsutake-ume',
        'pinyin': '……たけていしょくまつたけうめ',
        'definition': '竹 定食 松竹梅',
        'pinyinSpace': '…… たけ ていしょく しょうちくばい'
    },
    '79': {
        'character': 'ちょっとちょっと',
        'letter': 'Hey, hey, hey, hey.',
        'pinyin': 'ちょっとちょっと',
        'definition': 'ちょっと ちょっと',
        'pinyinSpace': 'ちょっと ちょっと'
    },
    '80': {
        'character': 'パンダ君の好物しかおいてないじゃないそのカフェ',
        'letter': 'Panda, that café only serves your favorite food.',
        'pinyin': 'ぱんだくんのこうぶつしかおいてないじゃないそのかふぇ',
        'definition': 'パンダ 君 の 好物 しか おいてないじゃ な いそ の カフェ',
        'pinyinSpace': 'パンダ きみ/くん の こうぶつ しか おいてないじゃ な  の カフェ'
    },
    '81': {
        'character': '僕の好きなものは皆もきっと好きだよ',
        'letter': "If I like it, I'm sure everyone else will too.",
        'pinyin': 'ぼくのすきなものはみんなもきっとすきだよ',
        'definition': '僕 の 好き な もの は 皆 も きっと 好き だ よ',
        'pinyinSpace': 'ぼく の すき な もの は みんな も きっと すき だ よ'
    },
    '82': {
        'character': '美味しいよ竹',
        'letter': "It's delicious.",
        'pinyin': 'おいしいよたけ',
        'definition': '美味しい よ 竹',
        'pinyinSpace': 'おいしい よ たけ'
    },
    '83': {
        'character': '生魚はおいてないの',
        'letter': "We don't have any raw fish.",
        'pinyin': 'せいぎょはおいてないの',
        'definition': '生魚 は おいてない の',
        'pinyinSpace': 'なまざかな/せいぎょ は おいてない の'
    },
    '84': {
        'character': 'カフェに生魚はおいてないでしょう',
        'letter': "You don't serve raw fish in a cafe.",
        'pinyin': 'かふぇにせいぎょ',
        'definition': 'カフェ に 生魚 は おいてないでしょう',
        'pinyinSpace': 'カフェ に なまざかな/せいぎょ は おいてない でしょう'
    },
    '85': {
        'character': 'カフェに竹なんておいてないでしょう',
        'letter': "You don't have bamboo in your café.",
        'pinyin': 'かふぇにたけなんておいてないでしょう',
        'definition': 'カフェ に 竹 なんて おいてないでしょう',
        'pinyinSpace': 'カフェ に たけ なんて おいてない でしょう'
    },
    '86': {
        'character': 'しろくまカフェにはおいてあるよ',
        'letter': 'We have them at the Polar Bear Cafe.',
        'pinyin': 'しろくまかふぇにはおいてあるよ',
        'definition': 'しろくま カフェ には おいて ある よ',
        'pinyinSpace': 'しろくま カフェ には おいて ある よ'
    },
    '87': {
        'character': '頼むのパンダ君だけでしょう',
        'letter': "You're the only one who asks.",
        'pinyin': 'たのむのぱんだきみだけでしょう',
        'definition': '頼む の パンダ 君 だけ でしょう',
        'pinyinSpace': 'たのむ の パンダ きみ/くん だけ でしょう'
    },
    '88': {
        'character': '僕はやっぱり生魚おいて欲しいね',
        'letter': "I'd still like to see some raw fish.",
        'pinyin': 'ぼくはやっぱりせいぎょおいてほしいね',
        'definition': '僕 は やっぱり  おいて 欲しい ね',
        'pinyinSpace': 'ぼく は やっぱり なまざかな/せいぎょ おいて ほしい ね'
    },
    '89': {
        'character': 'そう若竹煮ならあるよ',
        'letter': 'Yes, we have wakatake stew.',
        'pinyin': 'そうわかたけにならあるよ',
        'definition': 'そう 若 竹 煮 なら ある よ',
        'pinyinSpace': 'そう わか たけ に なら ある よ'
    },
    '90': {
        'character': '全',
        'letter': "That's a whole different genre.",
        'pinyin': 'ぜんぜんちがうじゃんるですね',
        'definition': '全然 違う ジャンル です ね',
        'pinyinSpace': 'ぜんぜん ちがう ジャンル です ね'
    },
    '91': {
        'character': 'だよね',
        'letter': 'Right.',
        'pinyin': 'だよね',
        'definition': 'だよね',
        'pinyinSpace': 'だよね'
    },
    '92': {
        'character': 'だいたいその竹定食の松竹梅って紛らわしいよ',
        'letter': 'Besides, that bamboo set meal is confusingly named pine, bamboo, and plum.',
        'pinyin': 'だいたいそのたけていしょくのまつたけうめってまぎらわしいよ',
        'definition': 'だいたい その 竹 定食 の 松竹梅 って 紛らわしい よ',
        'pinyinSpace': 'だいたい その たけ ていしょく の しょうちくばい って まぎらわしい よ'
    },
    '93': {
        'character': 'そうかな',
        'letter': "I don't know.",
        'pinyin': 'そうかな',
        'definition': 'そうか な',
        'pinyinSpace': 'そうか な'
    },
    '94': {
        'character': 'まあ竹',
        'letter': "Well, if you have a bamboo-centered menu, you won't get many customers.",
        'pinyin': 'まあたけちゅうしんのめにゅーだと',
        'definition': 'まあ 竹 中心 の メニュー だ と お客さん は あんまり こない よ',
        'pinyinSpace': 'まあ たけ ちゅうしん の メニュー だ と おきゃくさん は あんまり こない よ'
    },
    '95': {
        'character': 'え絶対来るよ',
        'letter': "Yes, they wil definitely come.",
        'pinyin': 'えぜったいくるよの',
        'definition': 'え 絶対 来る よ',
        'pinyinSpace': 'え ぜったい くる よ'
    },
    '96': {
        'character': 'なんでそう思えるの',
        'letter': 'What makes you think that?',
        'pinyin': 'なんでそうおもえるの',
        'definition': 'なんで そう 思える の',
        'pinyinSpace': 'なんで そう おもえる の'
    },
    '97': {
        'character': 'ラマさんはパンダカフェ来てくれるよね',
        'letter': "Llama-san comes to the Panda Cafe, doesn't he?",
        'pinyin': 'らまさんはぱんだかふぇきてくれるよね',
        'definition': 'ラマ さん は パンダ カフェ 来てくれる よね',
        'pinyinSpace': 'ラマ さん は パンダ カフェ きて くれる よね'
    },
    '98': {
        'character': '僕竹食べるとお腹痛くなっちゃうんです',
        'letter': 'I get a stomach ache when I eat bamboo.',
        'pinyin': 'ぼくたけたべるとおなかいたくなっちゃうんです',
        'definition': '僕 竹 食べる と  痛くなっちゃう ん です',
        'pinyinSpace': 'ぼく たけ たべる と おなか いたくなっちゃう ん です'
    },
    '99': {
        'character': 'どうしようペンギンさん',
        'letter': 'What should I do, Mr. Penguin?',
        'pinyin': 'どうしようぺんぎんさん',
        'definition': 'どうしよう ペンギン さん',
        'pinyinSpace': 'どうしよう ペンギン さん'
    },
    '100': {
        'character': '普通の料理も出したら',
        'letter': 'You should serve some regular food.',
        'pinyin': 'ふつうのりょうりもだしたら',
        'definition': '普通 の 料理 も 出したら',
        'pinyinSpace': 'ふつう の りょうり も だしたら'
    },
    '101': {
        'character': 'ほらパスタとかさあ',
        'letter': 'You know, pasta.',
        'pinyin': 'ほらぱすたとかさあ',
        'definition': 'ほら パスタ とか さあ',
        'pinyinSpace': 'ほら パスタ とか さあ'
    },
    '102': {
        'character': 'いいね竹パスタ',
        'letter': 'Nice bamboo pasta',
        'pinyin': 'いいねたけぱすた',
        'definition': 'い 竹 パスタ',
        'pinyinSpace': 'いいね たけ パスタ'
    },
    '103': {
        'character': 'いや竹忘れよう',
        'letter': "No, let's forget bamboo.",
        'pinyin': 'いやたけわすれよう',
        'definition': 'いや 竹 忘れよう',
        'pinyinSpace': 'いや たけ わすれよう'
    },
    '104': {
        'character': 'やってみたいなあパンダカフェ',
        'letter': 'I would like to try the Panda Cafe.',
        'pinyin': 'やってみたいなあぱんだかふo￣▽￣)～o',
        'definition': 'やって みたい な あ パンダ カフェ',
        'pinyinSpace': 'やって みたい な あ パンダ カフェ'
    },
    '105': {
        'character': '悪い予感がするね',
        'letter': 'I have a bad feeling about this.',
        'pinyin': 'わるいよかんがするね',
        'definition': '悪い 予感 が する ね',
        'pinyinSpace': 'わるい よかん が する ね'
    },
    '106': {
        'character': 'いらっ',
        'letter': 'welcome (in shops, etc.)',
        'pinyin': 'いらっしゃい',
        'definition': 'いらっしゃい',
        'pinyinSpace': 'いらっしゃい'
    },
    '107': {
        'character': '戻してね',
        'letter': 'Put it back.',
        'pinyin': 'もどしてね',
        'definition': '戻して ね',
        'pinyinSpace': 'もどして ね'
    },
    '108': {
        'character': 'はい竹いっちょう',
        'letter': 'Yes, one bamboo shoot',
        'pinyin': 'はいたけいっちょう',
        'definition': 'はい 竹 いっちょう',
        'pinyinSpace': 'はい たけ いっちょう'
    },
    '109': {
        'character': '大盛りもできますよどうしますか',
        'letter': 'We can make a large serving.',
        'pinyin': 'おおもりもできますよどうしますか',
        'definition': '大盛り も できます よ どうし',
        'pinyinSpace': 'おおもり も できます よ どうしますか'
    },
    '110': {
        'character': '戻してね',
        'letter': 'Put it back.',
        'pinyin': 'もどしてね',
        'definition': '戻して ね',
        'pinyinSpace': 'もどして ね'
    },
    '111': {
        'character': 'パンダ君じゃダメだね僕がカフェやるよ',
        'letter': "I'll run the café.",
        'pinyin': 'ぱんだくんじゃだめだねぼくがかふぇやるよ',
        'definition': 'パンダ 君 じゃ ダメ だ ね 僕 が カフェ やる よ',
        'pinyinSpace': 'パンダ きみ/くん じゃ ダメ だ ね ぼく が カフェ やる よ'
    },
    '112': {
        'character': 'どんなカフェなの',
        'letter': 'What kind of cafe?',
        'pinyin': 'どんなかふ',
        'definition': 'どんな カフェ なの',
        'pinyinSpace': 'どんな カフェ なの'
    },
    '113': {
        'character': 'そうだねペンギンカフェ',
        'letter': 'Yes, the Penguin Cafe.',
        'pinyin': 'そうだねぺんぎんかふぇ',
        'definition': 'そうだね ペンギン カフェ',
        'pinyinSpace': 'そうだね ペンギン カフェ'
    },
    '114': {
        'character': 'そのまんまだね',
        'letter': 'Just like that.',
        'pinyin': 'そのまんまだ',
        'definition': 'そのまんま だ ね',
        'pinyinSpace': 'そのまんま だ ね'
    },
    '115': {
        'character': 'いやいや和風のカフェなんだ',
        'letter': "No, no, no. It's a Japanese-style cafe.",
        'pinyin': 'いやいやわふうのかふぇなんだよ',
        'definition': 'いやいや 和風 の カフェ なんだ よ',
        'pinyinSpace': 'いやいや わふう の カフェ なんだ よ'
    },
    '116': {
        'character': 'メニューはそうだな',
        'letter': 'The menu is like that.',
        'pinyin': 'めにゅーはそうだな',
        'definition': 'メニュー は そうだ な',
        'pinyinSpace': 'メニュー は そうだ な'
    },
    '117': {
        'character': '生魚とアルコールが中心から',
        'letter': 'We mostly serve raw fish and alcohol.',
        'pinyin': 'せいぎょとあるこーるがちゅうしんから',
        'definition': '生魚 と アルコール が 中心 から',
        'pinyinSpace': 'なまざかな/せいぎょ と アルコール が ちゅうしん から'
    },
    '118': {
        'character': '和風カフェっていうよりお寿司屋さんみたいなメニューだね',
        'letter': 'The menu looks more like a sushi restaurant than a Japanese-style cafe.',
        'pinyin': 'わふうかふぇっていうよりおすしやさんみたいなめにゅーだね',
        'definition': '和風 カフェ っていう より お 寿司屋 さん みたい な メニュー だ ね',
        'pinyinSpace': 'わふう カフェ っていう より お すしや さん みたい な メニュー だ ね'
    },
    '119': {
        'character': 'コンセプトは四季おり売りの新鮮な海の幸を',
        'letter': 'The concept is to serve fresh seafood from the four seasons.',
        'pinyin': 'こんせぷとはしきおりうりのしんせんなうみのさちを',
        'definition': 'コンセプト は 四季 おり 売り の 新鮮 な 海の幸 を',
        'pinyinSpace': 'コンセプト は しき おり うり の しんせん な うみのさち を'
    },
    '120': {
        'character': '店主が選んだこだわりのお酒でいただけるカフェ',
        'letter': "The café is a place where you can enjoy the owner's choice of special drinks.",
        'pinyin': 'てんしゅがえらんだこだわりのおさけでいただけるかふぇ',
        'definition': '店主 が 選んだ こだわり の お酒 で いただける カフェ',
        'pinyinSpace': 'てんしゅ が えらんだ こだわり の おさけ で いただける カフェ'
    },
    '121': {
        'character': 'それカフェじゃなくてお寿司屋さんじゃない',
        'letter': "That's not a café. That's a sushi restaurant.",
        'pinyin': 'それかふぇじゃなくておすしやさんじゃない',
        'definition': 'それ カフェ じゃなくて お 寿司屋 さん じゃない',
        'pinyinSpace': 'それ カフェ じゃなくて お すしや さん じゃない'
    },
    '122': {
        'character': '違うよでね',
        'letter': "No, it's not.",
        'pinyin': 'ちがうよでね',
        'definition': '違う よ で ね',
        'pinyinSpace': 'ちがう よ で ね'
    },
    '123': {
        'character': 'カフェの真ん中には水槽おいてね',
        'letter': 'In the middle of the cafe is an aquarium.',
        'pinyin': 'かふぇのまんなかにはすいそうおいてね',
        'definition': 'カフェ の 真ん中 には 水槽 おいて ね',
        'pinyinSpace': 'カフェ の まんなか には すいそう おいて ね'
    },
    '124': {
        'character': '水槽の中では魚が泳いでいて',
        'letter': 'Fish swim in the tank.',
        'pinyin': 'すいそうのなかではさかながおよいでいて',
        'definition': '水槽 の 中 では 魚 が 泳いでいて',
        'pinyinSpace': 'すいそう の なか/ちゅう で は さかな が およいでいて'
    },
    '125': {
        'character': 'お客さんは自分の選',
        'letter': 'Customers can eat the fish of their choice.',
        'pinyin': 'おきゃくさんはじぶんのえらんださかなをしょくられるの',
        'definition': 'お客さん は 自分 の 選んだ 魚 を 食 られる の',
        'pinyinSpace': 'おきゃくさん は じぶん の えらんだ さかな を しょく られる の'
    },
    '126': {
        'character': '生け簀があるカフェなんてないよ',
        'letter': 'No cafe has a fish tank.',
        'pinyin': 'いけすがあるかふぇなんてないよ',
        'definition': '生け簀 が ある カフェ なんて ない よ',
        'pinyinSpace': 'い が ある カフェ なんて ない よ'
    },
    '127': {
        'character': 'カフェっぽさも入れてよ',
        'letter': 'You have to make it look like a café.',
        'pinyin': 'かふぇっぽさもいれてよ',
        'definition': 'カフェ っぽさ も 入れて よ',
        'pinyinSpace': 'カフ っぽさ も いれて/はいれて よ'
    },
    '128': {
        'character': 'カフェっぽさ入ってない',
        'letter': "It doesn't look like a cafe.",
        'pinyin': 'かふぇっぽさはいってない',
        'definition': 'カフェ っぽさ 入ってない',
        'pinyinSpace': 'カフェ っぽさ /いってない'
    },
    '129': {
        'character': 'ペンギンカフェだよ',
        'letter': "It's a penguin café.",
        'pinyin': 'ぺんぎんかふぇだよ',
        'definition': 'ペンギン カフェ だ よ',
        'pinyinSpace': 'ペンギン カフェ だ よ'
    },
    '130': {
        'character': '名前だけでしょう',
        'letter': "It's just a name.",
        'pinyin': 'なまえだけでしょう',
        'definition': '名前だけ でしょう',
        'pinyinSpace': 'なまえだけ でしょう'
    },
    '131': {
        'character': 'だったらコーヒー出したりしたらどうですか',
        'letter': "Then why don't you serve coffee or something?",
        'pinyin': 'だったらこーひーだしたりしたらどうですか',
        'definition': 'だったら コーヒー 出したり したら どう です か',
        'pinyinSpace': 'だったら コーヒー だしたり したら どう です か'
    },
    '132': {
        'character': 'でも市場まで魚の仕入れが',
        'letter': "But I don't know if I can make it to the market to buy fish.",
        'pinyin': 'でもしじょうまでさかなのしいれがあるかな',
        'definition': 'でも 市場 まで 魚 の 仕入れ が ある かな',
        'pinyinSpace': 'でも しじょう/いちば まで さかな の しいれ が ある かな'
    },
    '133': {
        'character': 'そこまで手が回るかな',
        'letter': "I don't know if I can handle that much.",
        'pinyin': 'そこまでてがまわるかな',
        'definition': 'そこまで 手が回る かな',
        'pinyinSpace': 'そこまで てがまわる '
    },
    '134': {
        'character': 'やめちゃえばカフェ',
        'letter': 'Stop it, cafe.',
        'pinyin': 'やめちゃえばかふぇ',
        'definition': 'やめちゃえば カフェ',
        'pinyinSpace': 'やめちゃえば カフェ'
    },
    '135': {
        'character': '何言ってるのやるよ僕は',
        'letter': 'What are you talking about?',
        'pinyin': 'なにいってるのやるよぼくは',
        'definition': '何 言ってる の やる よ 僕 は',
        'pinyinSpace': 'なに いってる の やる よ ぼく は'
    },
    '136': {
        'character': 'へいらっしゃいoツ',
        'letter': 'Welcome to the restaurant!',
        'pinyin': 'へいらっしゃいoつ',
        'definition': 'へ いらっしゃい ツ',
        'pinyinSpace': 'へ いらっしゃい o ツ'
    },
    '137': {
        'character': '旦那何しやしょうか',
        'letter': 'What did you do to my husband?',
        'pinyin': 'だんななにしやしょうか',
        'definition': '旦那 何 し しょうか',
        'pinyinSpace': 'だんな なに しや しょうか'
    },
    '138': {
        'character': '戻してね',
        'letter': 'Put it back in back in.',
        'pinyin': 'もどしてね',
        'definition': '戻して ね',
        'pinyinSpace': 'もどして ね'
    },
    '139': {
        'character': 'ラマカフェはどうですか',
        'letter': 'How about Llama Cafe?',
        'pinyin': 'らまかふぇはどうですか',
        'definition': 'ラマ カフェ は どう です か',
        'pinyinSpace': 'ラマ カフェ は どう です か'
    },
    '140': {
        'character': 'どんなカフェ',
        'letter': 'What kind of cafe?',
        'pinyin': 'どんなかふぇ',
        'definition': 'どんな カフェ',
        'pinyinSpace': 'どんな カフェ'
    },
    '141': {
        'character': 'ラマがいるカフェなんですけど',
        'letter': "It's a cafe with llamas.",
        'pinyin': 'らまがいるかふぇなんですけど',
        'definition': 'ラマ が い カフェ なんです けど',
        'pinyinSpace': 'ラマ が いる カフェ なんです けど'
    },
    '142': {
        'character': 'そのまんまだね',
        'letter': 'Just like that.',
        'pinyin': 'そのまんまだね',
        'definition': 'そのまんま だ ね',
        'pinyinSpace': 'そのまんま だ ね'
    },
    '143': {
        'character': 'コーヒー運べるの',
        'letter': 'I can carry coffee.',
        'pinyin': 'こーひーはこべるの',
        'definition': 'コーヒー 運べる の',
        'pinyinSpace': 'コーヒー はこべる の'
    },
    '144': {
        'character': 'バランス次第です',
        'letter': 'Depends on the balance.',
        'pinyin': 'ばらんすしだいです',
        'definition': 'バランス 次第 です',
        'pinyinSpace': 'バランス しだい です'
    },
    '145': {
        'character': 'コンセプトとしては店内のラマに草をあげたり',
        'letter': 'The concept is to feed grass to the llamas in the store.',
        'pinyin': 'こんせぷととしてはてんないのらまにくさをあげたり',
        'definition': 'コンセプト として は 店内 の ラマ に  を あげたり',
        'pinyinSpace': 'コンセプト として は てんない の ラマ に くさ を あげた'
    },
    '146': {
        'character': '毛繕いしたり自由にかわいがっていいカフェなんです',
        'letter': 'You are free to groom and take care of them.',
        'pinyin': 'けづくろいしたりじゆうにかわいがっていいかふぇなんです',
        'definition': '毛繕いしたり 自由に かわいがっていい カフェ ',
        'pinyinSpace': 'けづくろい したり じゆうに かわいがって いい カフェ なんです'
    },
    '147': {
        'character': '猫カフ',
        'letter': 'Sounds like a cat cafe.',
        'pinyin': 'ねこかふぇみたいだね',
        'definition': '猫カフェ みたい だ ね',
        'pinyinSpace': 'ね みたい だ ね'
    },
    '148': {
        'character': 'なんだって毛繕いできるんですよすごくないですか',
        'letter': 'You can groom anything you want.',
        'pinyin': 'なんだってけづくろいできるんですよすごくないですか',
        'definition': 'なんだって 毛繕いできる ん です よ すごくないです か',
        'pinyinSpace': 'なんだって けづくろい できる ん です よ すごくないです か'
    },
    '149': {
        'character': 'そうかな楽しいのそれ',
        'letter': "I don't know, it's fun.",
        'pinyin': 'そうかなたのしいのそれ',
        'definition': 'そうか な 楽しい の それ',
        'pinyinSpace': 'そうか な たのしい の それ'
    },
    '150': {
        'character': 'しかもですね',
        'letter': "What's more...",
        'pinyin': 'しかもですね',
        'definition': 'しかも です ね',
        'pinyinSpace': 'しかも です ね'
    },
    '151': {
        'character': '好きなラマを選んで一緒に外でお散歩できたりするんです',
        'letter': 'You can even choose your favorite llama and walk outside with it!',
        'pinyin': 'すきならまをえらんでいっしょにそとでおさんぽできたりするんです',
        'definition': '好き な ラマ を 選 一緒に 外 で お 散歩 できたり する ん です',
        'pinyinSpace': 'すき な ラマ を えらんで いっしょに そと で お さんぽ できたり する ん です'
    },
    '152': {
        'character': 'じゃこのラマ',
        'letter': 'Then this llama.',
        'pinyin': 'じゃこのらま',
        'definition': 'じゃ この ラマ',
        'pinyinSpace': 'じゃ この ラマ'
    },
    '153': {
        'character': 'ありがとうございま～～す',
        'letter': 'Thank you very much.',
        'pinyin': 'ありがとうございま～～す',
        'definition': 'ありがとう ご いま す',
        'pinyinSpace': 'ありがとう ござ いま ～～ す'
    },
    '154': {
        'character': 'ちょっと草食べってかない',
        'letter': "I don't know if he's eating grass.",
        'pinyin': 'ちょっとくさたべってかない',
        'definition': 'ちょっと 草 食べ って かない',
        'pinyinSpace': 'ちょっと くさ たべ って かない'
    },
    '155': {
        'character': '少し塩気が足りないね',
        'letter': 'A little less salty.',
        'pinyin': 'すこししおけがたりないね',
        'definition': '少し 塩気 が 足りない ね',
        'pinyinSpace': 'すこし しおけ が たりない ね'
    },
    '156': {
        'character': '素敵でしょう',
        'letter': "Isn't it nice?",
        'pinyin': 'すてきでしょう',
        'definition': '素敵 でしょう',
        'pinyinSpace': 'すてき でしょう'
    },
    '157': {
        'character': '楽しいかなそれ',
        'letter': "You think that's fun?",
        'pinyin': 'たのしいかなそれ',
        'definition': '楽しい かな それ',
        'pinyinSpace': 'たのしい かな それ'
    },
    '158': {
        'character': 'やっぱりパンダカフェが一番だよ',
        'letter': 'Panda Cafe is the best.',
        'pinyin': 'やっぱりぱんだかふぇがいちばんだよ',
        'definition': 'やっぱり パンダ カフェ が 一番 だ よ',
        'pinyinSpace': 'やっぱり パンダ カフェ が いちばん だ よ'
    },
    '159': {
        'character': 'ペンギンカフェじゃない',
        'letter': 'Not the Penguin Cafe.',
        'pinyin': 'ぺんぎんかふぇじゃない',
        'definition': 'ペンギン カフェ じゃない',
        'pinyinSpace': 'ペンギン カフェ じゃない'
    },
    '160': {
        'character': 'ねえ白熊君はどう思う',
        'letter': 'Hey, what do you think, polar bear?',
        'pinyin': 'ねえしろくまくんはどうおもう',
        'definition': 'ね え 白熊 君 は どう 思',
        'pinyinSpace': 'ね え しろくま/はぐま きみ/くん は どう おもう'
    },
    '161': {
        'character': 'うんラマカ',
        'letter': 'Yeah. Llama Cafe.',
        'pinyin': 'うんらまかふぇ',
        'definition': 'うん ラマ カフェ',
        'pinyinSpace': 'うん ラマ カフェ'
    },
    '162': {
        'character': 'ほらね',
        'letter': 'You see?',
        'pinyin': 'ほらね',
        'definition': 'ほら ね',
        'pinyinSpace': 'ほら ね'
    },
    '163': {
        'character': '笹子さんは',
        'letter': 'Sasago-san...',
        'pinyin': 'ささごさんは',
        'definition': '笹 子 さん は',
        'pinyinSpace': 'ささ こ さん は'
    },
    '164': {
        'character': 'はい',
        'letter': "Yes, ma'am.",
        'pinyin': 'はい',
        'definition': 'はい',
        'pinyinSpace': 'はい'
    },
    '165': {
        'character': 'どのカフェがいいと思う',
        'letter': 'Which café do you think is better?',
        'pinyin': 'どのかふぇがいいとおもう',
        'definition': 'どの カフェ が いい と 思う',
        'pinyinSpace': 'どの カフェ が いい と おもう'
    },
    '166': {
        'character': 'うんそうですね',
        'letter': 'Yeah, right.',
        'pinyin': 'うんそうですね',
        'definition': 'うん そうですね',
        'pinyinSpace': 'うん そうですね'
    },
    '167': {
        'character': '笹子カフェ',
        'letter': 'Sasago Cafe',
        'pinyin': '',
        'definition': '笹 子 カフェ',
        'pinyinSpace': 'ささ こ カフェ'
    },
    '168': {
        'character': 'やっぱりパンダカフェだよね',
        'letter': "I knew it. It's the Panda Cafe.",
        'pinyin': 'やっぱりぱんだかふぇだよね',
        'definition': 'やっぱり パンダ カフェ だよね',
        'pinyinSpace': 'やっぱり パンダ カフェ だよね'
    },
    '169': {
        'character': 'えペンギンカフェでしょう',
        'letter': 'Penguin Cafe, right?',
        'pinyin': 'えぺんぎんかふぇでしょう',
        'definition': 'え ペンギン カフェ でしょう',
        'pinyinSpace': 'え ペンギン カフェ でしょう'
    },
    '170': {
        'character': 'いえいえラマカフェですよ',
        'letter': 'No, no, no. Llama Cafe.',
        'pinyin': 'いえい',
        'definition': 'いえいえ ラマ カフェ です よ',
        'pinyinSpace': 'いえいえ ラマ カフェ です よ'
    },
    '171': {
        'character': 'ちょちょっと聞いてくださいよ',
        'letter': 'Hey, hey, hey! Listen to me!',
        'pinyin': 'ちょちょっときいてくださいよ',
        'definition': 'ちょ ちょっと 聞いてください よ',
        'pinyinSpace': 'ちょ ちょっと きいて ください よ'
    },
    '172': {
        'character': 'うんどんなの',
        'letter': 'Yeah, what kind?',
        'pinyin': 'うんどんなの',
        'definition': 'うん どんな の',
        'pinyinSpace': 'うん どんな の'
    },
    '173': {
        'character': 'えーとそうですね',
        'letter': "Let's see.",
        'pinyin': 'えーとそうですね',
        'definition': 'えー と そうですね',
        'pinyinSpace': 'えー と そうですね'
    },
    '174': {
        'character': 'パンダっぽい笹子さんがいるんでしょう',
        'letter': "You have a panda-like Sasago-san, don't you?",
        'pinyin': 'ぱんだっぽいささごさんがいるんでしょう',
        'definition': 'パンダ っぽい 笹 子 さん が いる ん でしょう',
        'pinyinSpace': 'パンダ っぽい ささ こ さん が いる ん でしょう'
    },
    '175': {
        'character': 'えそれじゃパンダカフェと変わらないじゃない',
        'letter': "Oh, that's no different than the Panda Cafe.",
        'pinyin': 'えそれじゃぱんだかふぇとかわらないじゃない',
        'definition': 'え それ じゃ パンダ カフェ と 変わらない じゃない',
        'pinyinSpace': 'え それ じゃ パンダ カフェ と かわらない じゃない'
    },
    '176': {
        'character': 'いえいえラ',
        'letter': "No, no, no, it's the llama-like Sasago-san.",
        'pinyin': 'いえいえらまっぽいささごさんが',
        'definition': 'いえいえ ラマ っぽい 笹 子 さん が',
        'pinyinSpace': 'いえいえ ラマ っぽい ささ こ さん が'
    }
}


function getCharacter(n) {
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