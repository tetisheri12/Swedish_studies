/* Swedish Studies · lessons data. Original practice content following the topic
   sequence of Colloquial Swedish (4th ed.). No text copied from the book. */
'use strict';
const pick=(prompt,scene,choices,correct,hint,why)=>({type:'pick',prompt,scene,choices,correct,hint,why});
const tile=(prompt,answer,hint,why)=>({type:'tiles',prompt,answer,hint,why});
const listen=(prompt,say,choices,correct,hint,why)=>({type:'listen',prompt,say,choices,correct,hint,why});
const type=(prompt,scene,answers,hint,why)=>({type:'type',prompt,scene,answers,hint,why});
window.LESSONS=[];
LESSONS[0]={
unit:1,title:'Café chaos',sv:'Hej!',place:'CAFÉ',
rule:'People, questions & en / ett',
reference:'Learn each noun with its article: en smörgås, ett glas. Present verbs do not change with the person: jag är, vi är. In a yes/no question the verb comes first: Är du hungrig? In an information question use question phrase + verb + subject: Vad heter du?',
intro:'The café is open. Help Nora order, fix the questions, and get the right drink to the counter.',
words:[
['hej','hi'],['hej då','bye'],['jag heter …','my name is …'],['Vad heter du?','What is your name?'],
['tack','thanks / please'],['varsågod','here you are / you’re welcome'],['ja','yes'],['nej','no'],
['jag','I'],['du','you (one person)'],['han','he'],['hon','she'],['vi','we'],['ni','you (more than one)'],['de','they'],
['jag är','I am'],['hungrig','hungry'],['törstig','thirsty'],
['en smörgås','a sandwich'],['en bulle','a bun'],['en kopp te','a cup of tea'],['ett glas mjölk','a glass of milk'],['ett glas vatten','a glass of water'],
['Kan jag få …?','Can I have …?']
],
story:{title:'På kaféet',lines:[
['Leo: Hej! Jag heter Leo. Vad heter du?','Leo: Hi! My name is Leo. What’s your name?'],
['Nora: Hej, Leo! Jag heter Nora.','Nora: Hi, Leo! My name is Nora.'],
['Leo: Är du hungrig?','Leo: Are you hungry?'],
['Nora: Ja, jag är jättehungrig!','Nora: Yes, I’m super hungry!'],
['Leo: Jag också. Kan jag få en bulle, tack?','Leo: Me too. Can I have a bun, please?'],
['Kassören: Varsågod. Och du?','Cashier: Here you are. And you?'],
['Nora: Kan jag få en smörgås och ett glas mjölk, tack?','Nora: Can I have a sandwich and a glass of milk, please?'],
['Kassören: Varsågod. Det blir sextio kronor.','Cashier: Here you are. That will be sixty kronor.'],
['Leo och Nora: Tack! Hej då!','Leo and Nora: Thanks! Bye!']
]},
tasks:[
pick('Nora is thirsty. What did she order?','Nora: Ett glas vatten, tack.',['A glass of water','A sandwich','A book'],0,'Glas = glass. Vatten = water.','Ett glas vatten means a glass of water.'),
tile('Introduce the customer.',['Jag','heter','Nora.'],'Start with “I”. Heter means “am called”.','Subject + present verb + name. The verb stays heter with other people too.'),
tile('Turn this into a question: Du är hungrig.',['Är','du','hungrig?'],'In a yes/no question, put the verb first.','Är moves before du. No extra “do” is needed.'),
pick('Choose the correct article.','___ glas',['en','ett'],1,'Learn the noun as a pair: ett glas.','Glas belongs to the ett group.'),
tile('Order politely.',['Kan','jag','få','en smörgås,','tack?'],'Can / I / get / a sandwich / please?','Kan comes first in the question; få is the infinitive.'),
pick('Keep the conversation going.','Nora: Tack så mycket!',['Varsågod!','Vad heter du?','Jag bor i Lund.'],0,'Choose “You’re welcome”.','Varsågod works here as “you’re welcome”.'),
listen('Listen. What does Leo say?','Jag är törstig.',['I am thirsty.','I am hungry.','I am Leo.'],0,'Törstig sounds a bit like “thirsty”.','Jag är törstig = I am thirsty.'),
pick('Leo is a boy. Choose the pronoun.','___ är hungrig.',['Hon','Han','Vi'],1,'He = han, she = hon.','Han är hungrig = he is hungry.'),
type('Nora is a girl. Write the missing word.','___ heter Nora.',['Hon'],'She = hon.','Hon heter Nora = her name is Nora.'),
pick('Give a short answer.','Är du hungrig? – Ja, ___.',['det är jag','jag är','är jag'],0,'Swedes answer “Yes, that I am.”','Ja, det är jag is the natural short answer to a question with är.'),
listen('Listen. What does the customer ask for?','Kan jag få en kopp te, tack?',['A cup of tea','A glass of milk','A bun'],0,'En kopp = a cup.','Kan jag få en kopp te, tack? = Can I have a cup of tea, please?'),
tile('Ask Amir’s name. (Use han.)',['Vad','heter','han?'],'Question word first, then the verb.','Vad heter han? = What is his name?'),
pick('Story check: what does Leo buy?','Leo: Kan jag få en bulle, tack?',['A bun','A sandwich','A glass of milk'],0,'En bulle = a bun.','Leo orders en bulle.'),
type('Write “you’re welcome” in Swedish.','Tack! – ___!',['varsågod'],'It has an å in it.','Varsågod = here you are / you’re welcome.'),
listen('Listen. How much does it cost?','Det blir sextio kronor.',['16 kronor','60 kronor','6 kronor'],1,'Sextio = six-ty.','Sextio = 60.')
],
boss:'Run a pretend café together. The customer orders two things and asks one question. Swap roles; change the order.'
};
LESSONS[1]={
unit:2,title:'The mystery neighbour',sv:'Vem är grannen?',place:'NEIGHBOUR',
rule:'Definite nouns & verb-second',
reference:'The definite article attaches to the noun: en bok → boken; ett hus → huset. After vill, use an infinitive: vill läsa. A statement keeps the finite verb in position two. A whole phrase counts as one opening: På morgonen | läser | hon | en bok.',
intro:'Three neighbours. A few clues. Find the right person, then repair their morning routine.',
words:[
['god morgon','good morning'],['god kväll','good evening'],['hej så länge','see you / bye for now'],
['Var bor du?','Where do you live?'],['Jag bor i …','I live in …'],['Var kommer du ifrån?','Where are you from?'],['Jag kommer från …','I come from …'],
['en granne','a neighbour'],['grannen','the neighbour'],['ett hus','a house'],['huset','the house'],['en bok','a book'],['boken','the book'],
['bo – bor','to live – lives'],['läsa – läser','to read – reads'],['spela – spelar','to play – plays'],['vill','want(s)'],
['på morgonen','in the morning'],['på kvällen','in the evening'],['idag','today'],['på lördag','on Saturday'],
['jo','yes (to a question with “not”)'],['Hur gammal är du?','How old are you?'],['Jag är elva år.','I am eleven.'],
['en/ett, två, tre, fyra, fem, sex','1, 2, 3, 4, 5, 6'],['sju, åtta, nio, tio, elva, tolv','7, 8, 9, 10, 11, 12']
],
story:{title:'Vem är grannen?',lines:[
['Leo: God morgon! Jag heter Leo. Jag bor i huset där borta.','Leo: Good morning! My name is Leo. I live in the house over there.'],
['Nora: Hej, Leo! Jag heter Nora. Jag är ny här.','Nora: Hi, Leo! My name is Nora. I’m new here.'],
['Leo: Var kommer du ifrån?','Leo: Where are you from?'],
['Nora: Jag kommer från Malmö. Nu bor jag i Göteborg.','Nora: I come from Malmö. Now I live in Göteborg.'],
['Leo: Spelar du fotboll?','Leo: Do you play football?'],
['Nora: Ja! På lördag spelar jag en match.','Nora: Yes! On Saturday I’m playing a match.'],
['Leo: Spelar du inte tv-spel?','Leo: Don’t you play video games?'],
['Nora: Jo, på kvällen spelar jag ofta.','Nora: Yes, I often play in the evening.'],
['Leo: Vill du spela fotboll idag?','Leo: Do you want to play football today?'],
['Nora: Ja, gärna! Klockan elva?','Nora: Yes, I’d love to! At eleven?'],
['Leo: Okej! Hej så länge!','Leo: Okay! See you!']
]},
tasks:[
pick('Who matches both clues?','Nora bor i Lund. Leo bor i Malmö. Amir bor i Lund.\nNora läser på morgonen. Amir läser på kvällen.\nFind the person who lives in Lund AND reads in the morning.',['Nora','Leo','Amir'],0,'Match both place and time, not just one.','Nora matches Lund and på morgonen.'),
pick('Find the definite form.','en bok → the book',['en boken','boket','boken'],2,'The ending means “the”. Don’t keep en.','En bok becomes boken.'),
tile('Put the morning first.',['På morgonen','läser','hon','en bok.'],'The whole time phrase is slot 1. The verb needs slot 2.','When time comes first, the subject follows the finite verb.'),
pick('Repair the second verb.','Jag vill ___ en bok.',['läser','läsa','läste'],1,'Vill needs an infinitive.','Läsa is the infinitive; läser is present tense.'),
tile('Ask about their home.',['Var','bor','du?'],'Where / live / you?','Question word + finite verb + subject.'),
pick('Which clue says “the house”?','Choose one.',['huset','ett huset','husen'],0,'Hus is an ett noun.','Ett hus → huset. Husen means the houses.'),
listen('Listen. Where does Nora come from?','Jag kommer från Malmö.',['From Malmö','From Lund','From Göteborg'],0,'Kommer från = comes from.','Jag kommer från Malmö = I come from Malmö.'),
type('Write “the neighbour”.','en granne → ___',['grannen'],'Granne ends in -e. Just add -n.','En granne → grannen.'),
tile('Put the time first: Leo spelar fotboll på lördag.',['På lördag','spelar','Leo','fotboll.'],'Time is slot 1. The verb is slot 2.','På lördag spelar Leo fotboll: the subject comes after the verb.'),
listen('Listen. How old is Amir?','Amir är elva år.',['Amir is 11.','Amir is 12.','Amir is 8.'],0,'Elva = 11. Tolv = 12.','Amir är elva år = Amir is eleven.'),
pick('Answer the question with inte.','Spelar du inte fotboll? – ___, det gör jag!',['Jo','Ja','Nej'],0,'The question has inte in it.','Jo means “yes” to a question with inte.'),
pick('Story check: where does Nora come from?','Leo: Var kommer du ifrån?',['Malmö','Göteborg','Lund'],0,'She lives in Göteborg now.','Nora: Jag kommer från Malmö.'),
type('Vill needs the infinitive. Write “play”.','Jag vill ___ fotboll.',['spela'],'The infinitive often ends in -a.','Vill + spela. Not spelar.'),
listen('Listen. What does Nora say?','På kvällen spelar jag tv-spel.',['I play video games in the evening.','I play football in the evening.','I play video games in the morning.'],0,'Kvällen = the evening.','På kvällen spelar jag tv-spel = in the evening I play video games.'),
pick('Story check: what does Leo want to do today?','Leo: Vill du spela fotboll idag?',['Play football','Play video games','Read a book'],0,'Fotboll = football.','Leo asks Nora to play football today.')
],
boss:'Invent another neighbour. Give three clues without naming them. Your partner asks questions and guesses.'
};
LESSONS[2]={
unit:3,title:'Catch the train',sv:'Tåget går snart!',place:'STATION',
rule:'Time, negatives & two verbs',
reference:'Halv nio = 8:30, halfway to nine. Kvart över åtta = 8:15; kvart i nio = 8:45. Ska, kan and vill take an infinitive without att. Put inte after the finite verb: Jag ska inte åka buss. Time first: På fredag ska jag resa.',
intro:'Your train leaves soon—but there is no countdown. Decode the board and make a clear travel plan.',
words:[
['resa','to travel'],['åka tåg','to go by train'],['åka buss','to go by bus'],['ett tåg','a train'],['tåget','the train'],
['en biljett','a ticket'],['två biljetter','two tickets'],['ett spår','a track / platform'],
['Vad är klockan?','What time is it?'],['klockan nio','at nine o’clock'],['halv nio','half past eight (8:30)'],['kvart över åtta','quarter past eight'],['kvart i nio','quarter to nine'],
['När går tåget?','When does the train leave?'],['Vad kostar …?','How much is …?'],
['ska','will / am going to'],['kan','can'],['vill','want(s)'],['inte','not'],
['vänta','to wait'],['köpa','to buy'],['snart','soon'],['mammas','mum’s'],['på fredag','on Friday'],
['en vuxen','an adult'],['ett barn','a child']
],
story:{title:'Till Stockholm',lines:[
['Pappa Johan: Leo! Tåget till Stockholm går klockan nio.','Dad Johan: Leo! The train to Stockholm leaves at nine.'],
['Leo: Vad är klockan nu?','Leo: What time is it now?'],
['Pappa: Klockan är kvart i nio. Vi ska köpa biljetter nu.','Dad: It’s quarter to nine. We’re going to buy tickets now.'],
['Pappa: Hej! Två biljetter till Stockholm, tack. En vuxen och ett barn.','Dad: Hi! Two tickets to Stockholm, please. One adult and one child.'],
['Kassören: Det blir sexhundra kronor. Tåget går från spår fyra.','Cashier: That will be six hundred kronor. The train leaves from platform four.'],
['Leo: Pappa, kan jag köpa en serietidning?','Leo: Dad, can I buy a comic?'],
['Pappa: Nej, vi kan inte vänta nu. Tåget går snart!','Dad: No, we can’t wait now. The train leaves soon!'],
['Pappa: Har du mammas smörgåsar?','Dad: Do you have Mum’s sandwiches?'],
['Leo: Ja, här är de!','Leo: Yes, here they are!'],
['Pappa: Bra. Vi vill inte missa matchen i Stockholm!','Dad: Good. We don’t want to miss the match in Stockholm!']
]},
tasks:[
pick('Which departure is halv nio?','DEPARTURES\n08:15 · Malmö\n08:30 · Lund\n08:45 · Stockholm',['Malmö at 08:15','Lund at 08:30','Stockholm at 08:45'],1,'Halfway TO nine.','Halv nio is 8:30.'),
tile('Tell your partner the Friday plan.',['På fredag','ska','jag','resa.'],'Time is slot 1. Ska is the finite verb.','På fredag ska jag resa: the verb stays second.'),
tile('Cancel the bus plan.',['Jag','ska','inte','åka','buss.'],'Put inte after ska and before the travel action.','Finite verb + inte + infinitive: ska inte åka.'),
pick('Read the next time.','kvart i nio',['08:15','09:15','08:45'],2,'A quarter TO nine.','Kvart i nio = 8:45.'),
pick('Whose ticket is this?','Nora owns the ticket.',['Nora’s biljetten','Noras biljett','Noras biljetten'],1,'No apostrophe. The noun has no definite ending here.','Noras biljett is the possessive expression.'),
tile('Ask for two tickets.',['Kan','jag','få','två biljetter,','tack?'],'Start with Kan.','The polite request uses kan + få.'),
listen('Listen. What time is it?','Klockan är halv tio.',['9:30','10:30','9:15'],0,'Halv tio = halfway to ten.','Halv tio is 9:30.'),
tile('Ask when the train leaves.',['När','går','tåget?'],'Question word + verb + subject.','När går tåget? = When does the train leave?'),
type('Leo does NOT want to wait. Write the missing word.','Leo vill ___ vänta.',['inte'],'The word for “not”.','Inte comes right after the finite verb vill.'),
pick('Story check: whose sandwiches does Leo have?','Pappa: Har du mammas smörgåsar?',['Mum’s','Dad’s','Ella’s'],0,'Mammas = mum’s.','Mamma + s = mammas.'),
listen('Listen. Which platform?','Tåget går från spår fyra.',['Platform 4','Platform 5','Platform 7'],0,'Fyra = 4. Fem = 5.','Spår fyra = platform four.'),
pick('Story check: what time is it at the station?','Leo: Vad är klockan nu?',['Quarter to nine','Half past eight','Nine o’clock'],0,'Kvart i = a quarter to.','Klockan är kvart i nio = 8:45.'),
tile('Say you can’t come today.',['Jag','kan','inte','komma idag.'],'Kan + inte + the infinitive.','Jag kan inte komma idag: inte goes after kan.'),
listen('Listen. What does Ella want?','Ella vill köpa en glass.',['Ella wants to buy an ice cream.','Ella wants to eat a bun.','Ella can buy an ice cream.'],0,'Vill = wants. Kan = can.','Vill köpa = wants to buy.'),
type('Ask the price. Write the question word.','___ kostar biljetten?',['Vad'],'“What” in Swedish.','Vad kostar biljetten? = How much is the ticket?')
],
boss:'Draw a departure board with three times. One partner sells tickets; the other asks when the train leaves. Include a changed plan.'
};
LESSONS[3]={
unit:4,title:'Hotel mix-up',sv:'Fel rum!',place:'HOTEL',
rule:'Plurals, agreement & existence',
reference:'Regular adjectives: en stor bil, ett stort rum, stora bilar. Learn noun plurals: bil/bilar, äpple/äpplen, hus/hus. Finns introduces existence or availability; ligger locates a place; är describes it. Hans, hennes and deras do not change with the owned object.',
intro:'The guests have arrived. Match the rooms to the clues without mixing up the beds or adjective endings.',
words:[
['ett hotell','a hotel'],['hotellet','the hotel'],['ett rum','a room'],['rummet','the room'],['två rum','two rooms'],
['en säng','a bed'],['två sängar','two beds'],['en stol','a chair'],['två stolar','two chairs'],['en väska','a bag'],['ett fönster','a window'],
['ett äpple – två äpplen','an apple – two apples'],
['stor – stort – stora','big'],['liten – litet','small'],['röd – rött – röda','red'],['grön – grönt – gröna','green'],
['det finns','there is / there are'],['ligger','is (located), lies'],['står','stands / is (upright)'],
['hans','his'],['hennes','her'],['deras','their'],['nära','near'],['en receptionist','a receptionist'],['Förlåt!','Sorry!']
],
story:{title:'Fel rum!',lines:[
['Leo: Titta! Hotellet är jättestort!','Leo: Look! The hotel is huge!'],
['Amir: Ja, och det ligger nära fotbollsplanen.','Amir: Yes, and it’s near the football pitch.'],
['Receptionisten: Hej! Ni har rum tolv.','Receptionist: Hi! You have room twelve.'],
['Leo öppnar dörren. I rummet finns en stor säng och två gröna stolar.','Leo opens the door. In the room there is a big bed and two green chairs.'],
['Amir: En säng? Vi är två. Vi vill ha två sängar!','Amir: One bed? There are two of us. We want two beds!'],
['Receptionisten: Förlåt! Rum tolv är Noras rum. Ni har rum elva.','Receptionist: Sorry! Room twelve is Nora’s room. You have room eleven.'],
['Leo: Rum elva är bra. Det finns två sängar och ett stort fönster.','Leo: Room eleven is good. There are two beds and a big window.'],
['Amir: Titta, här står en röd väska!','Amir: Look, there’s a red bag here!'],
['Leo: Det är Noras väska. Hennes väska är alltid röd!','Leo: It’s Nora’s bag. Her bag is always red!'],
['Nora: Tack, killar! Nu kan vi spela fotboll.','Nora: Thanks, guys! Now we can play football.']
]},
tasks:[
pick('Find a room for the two travellers.','ROOM A · en säng · ett litet rum\nROOM B · två sängar · ett stort rum\nThey need two beds and a large room.',['Room A','Room B'],1,'Två = two. Stort = large.','Room B matches both requirements.'),
pick('Repair the room sign.','ett ___ rum',['stor','stort','stora'],1,'Rum is an ett noun.','Stor becomes stort with an ett noun.'),
tile('Say that a hotel exists here.',['Det','finns','ett hotell här.'],'Use finns for “there is”.','Det finns introduces something available or existing.'),
pick('Count the fruit at breakfast.','ett äpple → två ___',['äpplen','äpplar','äpplet'],0,'An ett noun ending in an unstressed vowel often takes plural -n.','Äpple → äpplen.'),
tile('Locate the hotel. Start with Hotellet.',['Hotellet','ligger','i centrum.'],'Ligger commonly locates a building.','Hotellet ligger i centrum = the hotel is in the centre.'),
pick('Choose “her book”.','The book belongs to Nora.',['henne boken','hennes bok','hennes boken'],1,'Hennes means her as a possessive.','After hennes, use bok without the definite ending.'),
listen('Listen. What is in the room?','I rummet finns två sängar.',['There are two beds in the room.','There is one bed in the room.','There are two chairs in the room.'],0,'Sängar = beds.','I rummet finns två sängar = there are two beds in the room.'),
tile('Describe the room.',['Rummet','är','stort.'],'Rum is an ett noun.','Rummet är stort: stor gets -t with an ett noun.'),
pick('Count the beds.','en säng → två ___',['sängar','sängor','sänger'],0,'Many en words ending in a consonant take -ar.','En säng → två sängar.'),
type('Write “big” for two beds.','två ___ sängar',['stora'],'Plural adjectives end in -a.','Två stora sängar = two big beds.'),
listen('Listen. Whose bag is in the room?','Hans väska står i rummet.',['His bag is in the room.','Her bag is in the room.','His bed is in the room.'],0,'Hans = his. Hennes = her.','Hans väska = his bag.'),
pick('Story check: what is wrong with room twelve?','Amir: En säng? Vi är två.',['It has only one bed.','It has no window.','It is too small.'],0,'En säng = one bed.','Leo and Amir want two beds.'),
pick('Leo and Amir own the ball. Choose the word.','___ boll är ny.',['Deras','Hans','Hennes'],0,'Two people own it.','Deras = their. It never changes.'),
listen('Listen. Where is the hotel?','Hotellet ligger nära havet.',['The hotel is near the sea.','The hotel is near the station.','The house is near the sea.'],0,'Havet = the sea.','Ligger nära havet = is near the sea.'),
type('Story check: whose bag is it? Write the name.','Det är ___ väska.',['Noras'],'Add -s to the name.','Noras väska = Nora’s bag.')
],
boss:'Role-play reception. Ask for a room, two beds and two nights. Offer a room and describe it. Invent game prices if you need them.'
};
LESSONS[4]={
unit:5,title:'Kitchen commander',sv:'I köket',place:'KITCHEN',
rule:'Commands & object pronouns',
reference:'Commands: läsa → läs!; köpa → köp!; öppna → öppna! Negative: Gå inte! Object pronouns include mig, dig, honom, henne, oss, er, dem. Jag helps → someone helps mig. Some definite nouns contract: fönster → fönstret; cykel → cykeln.',
intro:'Dinner needs a plan. Decode the shopping list and send clear instructions to your kitchen partner.',
words:[
['laga mat','to cook'],['ett recept','a recipe'],['en skål','a bowl'],
['köp!','buy!'],['läs!','read!'],['ta!','take!'],['blanda!','mix!'],['rör om!','stir!'],['tvätta!','wash!'],['vänta!','wait!'],['öppna!','open!'],['Ät inte!','Don’t eat!'],
['hjälpa','to help'],['mig','me'],['dig','you (one person)'],['honom','him'],['henne','her'],['oss','us'],['er','you (more than one)'],['dem','them'],
['en pannkaka','a pancake'],['ett ägg','an egg'],['en tomat','a tomato'],['en lök','an onion'],['en potatis','a potato'],
['ett fönster – fönstret','a window – the window']
],
story:{title:'Pannkakor till middag',lines:[
['Pappa: Leo, kan du hjälpa mig i köket?','Dad: Leo, can you help me in the kitchen?'],
['Leo: Ja! Vad ska vi laga?','Leo: Yes! What are we going to make?'],
['Pappa: Pannkakor. Läs receptet, är du snäll.','Dad: Pancakes. Read the recipe, please.'],
['Leo: Tre ägg, mjöl, mjölk och lite salt.','Leo: Three eggs, flour, milk and a little salt.'],
['Pappa: Bra. Ta fram en stor skål och blanda allt.','Dad: Good. Get out a big bowl and mix everything.'],
['Ella: Kan jag hjälpa er?','Ella: Can I help you?'],
['Leo: Ja, rör om här. Men vänta, inte så fort!','Leo: Yes, stir here. But wait, not so fast!'],
['Sixten skäller och tittar på pappa.','Sixten barks and looks at Dad.'],
['Pappa: Nej, Sixten! Pannkakorna är inte till dig.','Dad: No, Sixten! The pancakes aren’t for you.'],
['Mamma: Mm, det luktar gott! Öppna fönstret, det är jättevarmt här inne.','Mum: Mm, it smells good! Open the window, it’s really warm in here.'],
['Ella: Ge mig en pannkaka, tack!','Ella: Give me a pancake, please!'],
['Pappa: Ring mormor! Vi bjuder henne på pannkakor.','Dad: Call Grandma! We’ll treat her to pancakes.']
]},
tasks:[
pick('Which shopping bag matches?','Köp två tomater och en lök!',['2 onions + 1 tomato','2 tomatoes + 1 onion','3 apples'],1,'Tomater = tomatoes. Lök = onion.','Två tomater och en lök means two tomatoes and one onion.'),tile('Tell your partner to read the recipe.',['Läs','receptet!'],'The command starts with Läs.','The imperative of läsa is läs.'),pick('Ask your partner for help.','Kan du hjälpa ___? (me)',['jag','mig','min'],1,'You need the object form of jag.','Mig is “me”. Jag is “I”.'),tile('Make the kitchen plan start with today.',['Idag','ska','vi','laga mat.'],'The time goes first; keep ska second.','Idag ska vi laga mat = today we are going to cook.'),pick('Choose “the window”.','ett fönster → ___',['fönsteret','fönstret','fönstern'],1,'The unstressed e drops before the ending.','Fönstret is the definite form.'),tile('Ask for help for both of you.',['Kan','du','hjälpa','oss?'],'Oss means “us”.','Kan takes infinitive hjälpa. Oss is the object pronoun.'),
listen('Listen. What should you do?','Tvätta händerna!',['Wash your hands!','Dry your hands!','Clap your hands!'],0,'Do this before you cook.','Tvätta händerna = wash your hands.'),
type('Make a command from köpa.','___ mjölk och ägg!',['Köp'],'Take away the final -a.','Köpa → köp! The command is the verb without -a.'),
pick('Leo helps Amir. Choose the pronoun.','Jag hjälper ___ med läxan.',['han','honom','hans'],1,'Amir is the object here.','Honom = him. Han is only for the subject.'),
listen('Listen. Who should you help?','Hjälp henne, är du snäll!',['Help her, please!','Help him, please!','Help them, please!'],0,'Henne = her.','Hjälp henne = help her.'),
tile('Tell your sister: don’t eat the cake!',['Ät','inte','kakan!'],'Command first, then inte.','In a command, inte comes right after the verb: Ät inte!'),
type('Leo and Ella are hungry. Write “them”.','Mamma lagar mat till ___.',['dem'],'They → them.','De is the subject form; dem is the object form.'),
listen('Listen. What does the cook need?','Ge mig en lök och två potatisar.',['One onion and two potatoes','Two onions and one potato','One egg and two tomatoes'],0,'En lök = one onion.','En lök och två potatisar = one onion and two potatoes.'),
pick('Story check: what are Leo and Dad making?','Pappa: Pannkakor. Läs receptet, är du snäll.',['Pancakes','Pizza','Meatballs'],0,'Pannkakor sounds a bit like pancakes.','They are making pannkakor = pancakes.'),
pick('Story check: why does Mum want the window open?','Mamma: Öppna fönstret, det är jättevarmt här inne.',['It is really warm.','It is really cold.','Sixten wants to go out.'],0,'Varm = warm.','Jättevarmt = really warm.')
],
boss:'Give your partner four kitchen commands using drawings or pretend ingredients. Include “help me”. No real knives or heat needed.'
};
LESSONS[5]={
unit:6,title:'Room designer',sv:'Mitt rum',place:'HOME',
rule:'Demonstratives & irregular forms',
reference:'This chair = den här stolen; this table = det här bordet; these books = de här böckerna. The noun is definite after den/det/de här. Liten/litet/små is irregular. Ny/nytt/nya and röd/rött/röda also change. Learn irregular plurals: bok/böcker, man/män; barn stays barn.',
intro:'The room is almost ready. Fix the furniture labels, then create your own room in the studio below.',
words:[
['ett rum','a room'],['en säng','a bed'],['ett bord','a table'],['en stol','a chair'],['en lampa','a lamp'],['en hylla','a shelf'],['en matta','a rug'],['en affisch','a poster'],['ett golv','a floor'],
['en bok – böcker','a book – books'],['ett barn – barn','a child – children'],['en man – män','a man – men'],
['den här','this (en word)'],['det här','this (ett word)'],['de här','these'],
['ny – nytt – nya','new'],['liten – litet – små','small'],['röd – rött – röda','red'],['mysig','cosy'],['mjuk','soft'],
['jätte-','super- / really'],['väldigt','very'],['ganska','quite'],
['på våren / på sommaren','in spring / in summer'],['på hösten / på vintern','in autumn / in winter']
],
story:{title:'Leos nya rum',lines:[
['Leos rum är ganska litet.','Leo’s room is quite small.'],
['Men det har ett stort fönster och en blå säng.','But it has a big window and a blue bed.'],
['Nu vill Leo göra rummet mysigt.','Now Leo wants to make the room cosy.'],
['Mamma: Den här lampan är jättefin. Vill du ha den?','Mum: This lamp is really nice. Do you want it?'],
['Leo: Nej, den är för gammal. Jag vill ha en grön lampa.','Leo: No, it’s too old. I want a green lamp.'],
['Ella: Titta! De här böckerna är gamla. Kan jag få dem?','Ella: Look! These books are old. Can I have them?'],
['Leo: Ja, ta dem! Nu har jag plats för spelen.','Leo: Yes, take them! Now I have room for the games.'],
['Pappa: Här är en ny matta. Den är väldigt mjuk.','Dad: Here is a new rug. It is very soft.'],
['Leo: Perfekt! På vintern är golvet kallt.','Leo: Perfect! In winter the floor is cold.'],
['Leo sätter upp en stor fotbollsaffisch på väggen.','Leo puts up a big football poster on the wall.'],
['Sixten ligger på mattan. Rummet är jättemysigt nu!','Sixten lies on the rug. The room is super cosy now!']
]},
tasks:[
pick('Choose the label for a new table.','ett ___ bord',['ny','nytt','nya'],1,'Ett needs the ett form.','Ny → nytt with an ett noun.'),tile('Point to this chair.',['Den här','stolen','är','röd.'],'Use the definite noun after den här.','Den här stolen = this chair.'),pick('Describe two small chairs.','två ___ stolar',['liten','litet','små'],2,'Liten has an irregular plural.','Plural small is små.'),pick('Choose “these books”.','Point to several books.',['de här böckerna','den här böcker','de här böcker'],0,'Plural de här needs the definite plural noun.','Bok → böcker → böckerna.'),tile('Describe the red table.',['Det här','bordet','är','rött.'],'Bord is an ett noun. Röd becomes rött.','Det här bordet är rött uses ett agreement.'),pick('Count the children.','ett barn → två ___',['barnar','barn','barnen'],1,'The indefinite plural has no added ending.','Två barn = two children. Barnen = the children.'),
pick('The room is cosy. Choose the right form.','Rummet är ___.',['mysig','mysigt','mysiga'],1,'Rummet is an ett word.','After är, the adjective agrees with the subject: rummet är mysigt.'),
listen('Listen. Which season is it?','På vintern är det kallt och mörkt.',['Winter','Summer','Spring'],0,'Vinter sounds like winter.','På vintern = in (the) winter.'),
tile('Say the lamp is really nice.',['Lampan','är','jättefin.'],'Jätte- sticks to the adjective.','Jätte + fin = jättefin, really nice.'),
type('Write the plural.','en bok → två ___',['böcker'],'The vowel changes: o → ö.','Bok → böcker is an irregular plural.'),
listen('Listen. What does Ella want?','Jag vill ha de här böckerna.',['These books','This book','These chairs'],0,'De här = these.','De här böckerna = these books.'),
type('Describe two rugs. Use stor (big).','två ___ mattor',['stora'],'Plural adjectives end in -a.','Stor → stora in the plural.'),
listen('Listen. What is the rug like?','Mattan är väldigt mjuk.',['Very soft','Quite hard','Very small'],0,'Väldigt = very.','Väldigt mjuk = very soft.'),
pick('Story check: what does Leo think of the lamp?','Leo: Nej, den är för gammal.',['It is too old.','It is too big.','It is really nice.'],0,'För gammal = too old.','Leo says no because the lamp is too old.'),
pick('Story check: why does Leo want the rug?','Leo: Perfekt! På vintern är golvet kallt.',['The floor is cold in winter.','The floor is red.','Sixten needs a bed.'],0,'Kallt = cold.','På vintern är golvet kallt = in winter the floor is cold.')
],
boss:'Use the room studio below. Furnish a room, then tell your partner three things about it without reading the generated descriptions.'
};
LESSONS[6]={
unit:7,title:'Lost in Göteborg',sv:'På stan',place:'CITY',
rule:'Directions, places & plural forms',
reference:'Place words: i parken, på torget, vid kyrkan, bredvid banken, framför kiosken, bakom stationen. Var = where something is (Var är du?); vart = where to (Vart ska du?); hit/dit = to here/to there. Definite plural: bilar → bilarna, hus → husen. Future: Jag ska åka hem (a plan) or Det kommer att regna (a guess about later). My agrees with the noun: min mobil, mitt kort, mina pengar.',
intro:'Leo and Amir are in town for a football match, but Leo’s phone is dead. Ask the way, read the signs and get to the stadium on time.',
words:[
['på stan','in town'],['en gata','a street'],['ett torg','a square'],['en spårvagn','a tram'],['en hållplats','a stop'],['en kiosk','a kiosk'],['en kyrka','a church'],['en bank','a bank'],
['i','in'],['på','on / at'],['vid','by / at'],['bredvid','next to'],['framför','in front of'],['bakom','behind'],
['Var …?','Where …? (place)'],['Vart …?','Where … to?'],['hit / dit','(to) here / (to) there'],
['Hur kommer jag till …?','How do I get to …?'],['gå rakt fram','go straight ahead'],['sväng till höger','turn right'],['sväng till vänster','turn left'],
['min / mitt / mina','my'],['ska / kommer att','will / going to'],['en krona – kronor','a krona – kronor'],['och / men / för','and / but / because']
],
story:{title:'Vilse i stan',lines:[
['Leo och Amir är på stan. De ska se en fotbollsmatch på Gamla Ullevi.','Leo and Amir are in town. They are going to watch a football match at Gamla Ullevi.'],
['Leo: Batteriet i min mobil är slut! Var är vi?','Leo: My phone battery is dead! Where are we?'],
['Amir: Jag vet inte. Vi frågar kvinnan vid kiosken.','Amir: I don’t know. Let’s ask the woman by the kiosk.'],
['Amir: Ursäkta, hur kommer vi till Gamla Ullevi?','Amir: Excuse me, how do we get to Gamla Ullevi?'],
['Kvinnan: Gå rakt fram och sväng till vänster vid kyrkan.','Woman: Go straight ahead and turn left at the church.'],
['Kvinnan: Eller ta spårvagnen. Hållplatsen ligger bakom kiosken.','Woman: Or take the tram. The stop is behind the kiosk.'],
['Leo: Vi går. Spårvagnarna är fulla idag, för alla ska till matchen.','Leo: We’ll walk. The trams are full today, because everyone is going to the match.'],
['Amir: Okej, men snabbt! Matchen börjar klockan sju.','Amir: Okay, but quickly! The match starts at seven.'],
['De springer förbi banken och svänger till vänster vid kyrkan.','They run past the bank and turn left at the church.'],
['Leo: Där är arenan! Och där står Nora framför ingången.','Leo: There’s the stadium! And there’s Nora in front of the entrance.'],
['Nora: Hej! Här är era biljetter. De kostar åttio kronor styck.','Nora: Hi! Here are your tickets. They cost eighty kronor each.'],
['Amir: Tack! Det kommer att bli en jättebra match!','Amir: Thanks! It’s going to be a great match!']
]},
tasks:[
pick('Where is the tram stop?','Hållplatsen ligger bakom kiosken.',['Behind the kiosk','In front of the kiosk','Next to the kiosk'],0,'Bakom = behind.','Bakom kiosken = behind the kiosk.'),
tile('Ask the way to the station.',['Hur','kommer','jag','till stationen?'],'How / do I get / to the station?','Question word + verb + subject, just like Vad heter du?'),
pick('Var or vart?','___ ska du? – Till parken.',['Var','Vart'],1,'The answer is a place you go TO.','Vart = where to. Var = where (no movement).'),
listen('Listen. Which way should you go?','Sväng till höger vid banken.',['Turn right at the bank.','Turn left at the bank.','Go straight past the bank.'],0,'Höger = right. Vänster = left.','Sväng till höger = turn right.'),
pick('Choose “the cars”.','en bil → två bilar → ___',['bilarna','bilena','bilar'],0,'Add -na to the plural.','Bilar + na = bilarna.'),
type('Write “the houses”.','ett hus → två hus → alla ___',['husen'],'Ett words with no plural ending add -en.','Hus → husen = the houses.'),
pick('Choose the right “my”.','___ kort (ett kort)',['Min','Mitt','Mina'],1,'Kort is an ett word.','Mitt goes with ett words: mitt kort.'),
tile('Say where Nora is. Start with Nora.',['Nora','står','framför ingången.'],'Who / stands / where.','Framför ingången = in front of the entrance.'),
listen('Listen. What is the plan?','Vi ska ta spårvagnen till stan.',['We’re taking the tram into town.','We’re walking into town.','We’re taking the bus home.'],0,'Spårvagn = tram.','Ska + infinitive tells a plan.'),
pick('Join the two sentences.','Vi tar inte spårvagnen, ___ den är full.',['för','men','och'],0,'You need “because”.','För = because. It joins two main clauses.'),
tile('Say what the weather will do.',['Det','kommer att','regna idag.'],'Kommer att + infinitive = will.','Det kommer att regna idag = it will rain today.'),
type('How much? Write the money word.','Biljetten kostar åttio ___.',['kronor'],'One krona, many …','Krona → kronor in the plural.'),
listen('Listen. What does Leo shout to Sixten?','Kom hit, Sixten!',['Come here, Sixten!','Go over there, Sixten!','Sit, Sixten!'],0,'Hit = to here.','Kom hit = come here. Dit = to there.'),
pick('Story check: why don’t Leo and Amir take the tram?','Leo: Spårvagnarna är fulla idag, för alla ska till matchen.',['The trams are full.','The trams are late.','They have no money.'],0,'Fulla = full.','Everyone is going to the match, so the trams are full.'),
pick('Story check: where do they turn left?','Kvinnan: Gå rakt fram och sväng till vänster vid kyrkan.',['At the church','At the bank','At the kiosk'],0,'Vid kyrkan = at the church.','Sväng till vänster vid kyrkan = turn left at the church.')
],
boss:'Draw a small map with four places. One of you is lost and asks “Hur kommer jag till …?”. The other gives directions with höger, vänster and rakt fram. Swap roles.'
};
LESSONS[7]={
unit:8,title:'New at school',sv:'Ny i skolan',place:'SKOLA',
rule:'Perfect tense & side clauses',
reference:'Perfect tense = har + a special verb form: jag har spelat, jag har ätit, jag har varit. It tells what has happened up to now. Att, eftersom, när and om start a side clause, and there the subject comes before the verb: att han är ny. If the side clause comes first, the main verb comes right after it: När det är rast spelar vi fotboll.',
intro:'A new boy has joined Leo’s class. Help him get through his first school day.',
words:[
['en skola','a school'],['en klass','a class'],['en lärare','a teacher'],['en elev','a pupil'],['ett klassrum','a classroom'],
['en rast','a break'],['en läxa','a homework task'],['matte','maths'],['idrott','PE'],
['har spelat','have played'],['har ätit','have eaten'],['har varit','have been'],['har gjort','have done'],['har bott','have lived'],
['att','that'],['eftersom','because / since'],['när','when'],['om','if'],
['först','first'],['sedan','then / after that'],['till sist','finally'],['ju','you know / of course'],
['Vad tycker du?','What do you think?'],['Det tycker jag också.','I think so too.'],['Nej, det tycker jag inte.','No, I don’t think so.']
],
story:{title:'En ny elev',lines:[
['Läraren: God morgon! Det här är Oskar. Han är ny i klassen.','Teacher: Good morning! This is Oskar. He is new in the class.'],
['Oskar: Hej! Jag har bott i Stockholm, men nu bor jag i Göteborg.','Oskar: Hi! I have lived in Stockholm, but now I live in Göteborg.'],
['Amir: Har du varit i Göteborg förut?','Amir: Have you been to Göteborg before?'],
['Oskar: Nej, aldrig. Allt är nytt!','Oskar: No, never. Everything is new!'],
['Leo: När det är rast spelar vi fotboll. Vill du vara med?','Leo: When it’s break time, we play football. Do you want to join?'],
['Oskar: Ja! Jag har spelat i ett lag i fem år.','Oskar: Yes! I have played in a team for five years.'],
['Amir: Bra! Först har vi matte, sedan är det rast.','Amir: Great! First we have maths, then it’s break.'],
['Oskar: Jag tycker att matte är kul.','Oskar: I think maths is fun.'],
['Leo: Det tycker jag också!','Leo: I think so too!'],
['Amir: Nej, det tycker jag inte. Idrott är ju bäst!','Amir: No, I don’t think so. PE is the best, you know!'],
['Till sist är det rast, och alla springer ut på skolgården.','Finally it’s break, and everyone runs out into the schoolyard.']
]},
tasks:[
pick('Oskar has played for years. Choose the missing word.','Jag ___ spelat fotboll i fem år.',['har','är','ska'],0,'Perfect tense uses “have”.','Har + spelat = have played.'),
tile('Say: I have eaten lunch.',['Jag','har','ätit','lunch.'],'I / have / eaten / lunch.','Har comes second, then ätit.'),
pick('Choose the correct side clause.','Jag tror ___.',['att han är ny','att är han ny','att ny han är'],0,'After att: subject, then verb.','In a side clause the subject comes before the verb: att han är ny.'),
tile('Start with “När”: When it’s break, we play football.',['När det är rast','spelar','vi','fotboll.'],'After the när part, the verb comes next.','The side clause takes first place, so spelar comes before vi.'),
listen('Listen. What does the teacher ask?','Har du gjort läxan?',['Have you done the homework?','Are you doing the homework?','Do you have the homework?'],0,'Gjort = done.','Har du gjort läxan? = Have you done the homework?'),
pick('Amir says: “Fotboll är kul!” Leo agrees.','Amir: Fotboll är kul!',['Det tycker jag också.','Nej, det tycker jag inte.','Det vet jag inte.'],0,'Också = too.','Det tycker jag också = I think so too.'),
type('Write “because”. (It starts with e.)','Jag är trött ___ jag har spelat fotboll.',['eftersom','för','för att','därför att'],'It starts with e.','Eftersom = because. För, för att and därför att also work.'),
listen('Listen. What is the plan?','Först har vi svenska, sedan har vi matte.',['First Swedish, then maths','First maths, then Swedish','Only Swedish today'],0,'Först = first. Sedan = then.','First svenska, then matte.'),
pick('Story check: where has Oskar lived before?','Oskar: Jag har bott i Stockholm, men nu bor jag i Göteborg.',['In Stockholm','In Lund','In Malmö'],0,'Har bott = has lived.','He has lived in Stockholm and now lives in Göteborg.'),
tile('Start with “Om”: If it rains, we play inside.',['Om det regnar','spelar','vi','inne.'],'After the om part, put the verb.','Side clause first, then verb, then subject.'),
type('Write the perfect form of äta (eat).','Jag har ___ frukost.',['ätit'],'It ends in -it.','Äta → har ätit.'),
listen('Listen. What is true about Amir?','Han har varit sjuk.',['He has been ill.','He is ill now.','He has never been ill.'],0,'Har varit = has been.','Han har varit sjuk = he has been ill.'),
pick('Story check: how long has Oskar played in a team?','Oskar: Jag har spelat i ett lag i fem år.',['Five years','Two years','One year'],0,'Fem = five.','I fem år = for five years.'),
pick('Fill the gap in the plan.','Först äter vi. ___ spelar vi tv-spel. Till sist går vi hem.',['Sedan','Först','Till sist'],0,'First … then … finally.','Först, sedan, till sist = first, then, finally.'),
listen('Listen. Does Amir agree?','Nej, det tycker jag inte.',['No, I don’t think so.','Yes, I think so too.','No, I don’t know.'],0,'Inte = not.','Nej, det tycker jag inte = he disagrees.')
],
boss:'Play “first day at school”. One of you is new. Ask three “Har du …?” questions (Har du varit …? Har du spelat …?). Then say what happens först, sedan and till sist. Agree or disagree once.'
};
LESSONS[8]={
unit:9,title:'Birthday party',sv:'Kalaset',place:'KALAS',
rule:'Past tense & the red balloon',
reference:'Many verbs make the past tense with -de or -te: spelar → spelade, köper → köpte, ringer → ringde, bor → bodde. After den, det or de, the adjective gets -a and the noun is in the definite form: den röda ballongen, det stora paketet, de nya spelen. Någon / något / några means some or any. Ingen / inget / inga means no or none: Det finns ingen glass.',
intro:'It’s Ella’s birthday! Help get the party ready, then find out what happened.',
words:[
['ett kalas','a (birthday) party'],['en fest','a party'],['fylla år','to have a birthday'],['en present','a present'],['ett paket','a parcel'],
['en ballong','a balloon'],['en tårta','a cake'],['en korv','a sausage'],['ett bröd','a loaf of bread'],['saft','squash (sweet fruit drink)'],
['handla','to shop'],['spelade','played'],['köpte','bought'],['ringde','called / phoned'],['bodde','lived'],['hjälpte','helped'],['i går','yesterday'],
['gilla','to like'],['tycka om','to like'],['älska','to love'],
['någon / något / några','some / any'],['ingen / inget / inga','no / none'],
['den röda ballongen','the red balloon'],['det stora paketet','the big parcel'],['de nya spelen','the new games']
],
story:{title:'Ellas kalas',lines:[
['Det är lördag, och Ella fyller nio år.','It’s Saturday, and Ella turns nine.'],
['I går handlade pappa Johan mat till kalaset.','Yesterday dad Johan bought food for the party.'],
['Han köpte korv, bröd, saft och en stor tårta.','He bought sausages, bread, squash and a big cake.'],
['Mamma Sara ringde till mormor Britt och alla Ellas kompisar.','Mum Sara called grandma Britt and all of Ella’s friends.'],
['Leo hjälpte till. Han blåste upp ballonger hela kvällen.','Leo helped. He blew up balloons all evening.'],
['Leo: Vilken ballong vill du ha, Ella?','Leo: Which balloon do you want, Ella?'],
['Ella: Den röda ballongen! Jag älskar rött.','Ella: The red balloon! I love red.'],
['Mormor ger Ella det stora paketet.','Grandma gives Ella the big parcel.'],
['Ella: Ett nytt spel! Tack, mormor!','Ella: A new game! Thank you, grandma!'],
['Leo: Kan vi spela det nya spelet sedan?','Leo: Can we play the new game later?'],
['Ella: Ja! Men först vill jag ha tårta. Finns det någon glass också?','Ella: Yes! But first I want cake. Is there any ice cream too?'],
['Pappa: Nej, tyvärr. Det finns ingen glass, men det finns mycket tårta!','Dad: No, sorry. There’s no ice cream, but there’s lots of cake!']
]},
tasks:[
pick('It happened yesterday. Choose the past tense.','I går ___ Leo fotboll.',['spelade','spelar','spela'],0,'I går = yesterday.','Spelar → spelade.'),
tile('Say: Dad bought a cake.',['Pappa','köpte','en tårta.'],'Dad / bought / a cake.','Köper → köpte.'),
listen('Listen. Who did what?','Mamma ringde till mormor.',['Mum called grandma.','Mum calls grandma.','Grandma called mum.'],0,'Ringde ends in -de: it already happened.','Mamma ringde till mormor = Mum called grandma.'),
pick('Ella wants the red one. Choose the right words.','Jag vill ha ___.',['den röda ballongen','den röd ballongen','det röda ballongen'],0,'Den + adjective with -a + noun with -en.','Den röda ballongen = the red balloon.'),
pick('There is no ice cream. Choose the word.','Det finns ___ glass.',['ingen','inget','inga'],0,'En glass → ingen.','Glass is an en word, so it is ingen glass.'),
type('Write the past tense of bo (live).','Mormor ___ i Stockholm förut.',['bodde'],'Bor → bo… + -dde.','Bor → bodde.'),
listen('Listen. How does Ella feel about cake?','Jag älskar tårta!',['I love cake!','I like cake a little.','I don’t like cake.'],0,'Älskar = love.','Jag älskar tårta = I love cake.'),
tile('Say: We played the new games.',['Vi','spelade','de nya spelen.'],'We / played / the new games.','De nya spelen = the new games.'),
pick('Story check: how did Leo help?','Leo hjälpte till. Han blåste upp ballonger hela kvällen.',['He blew up balloons.','He bought a cake.','He called grandma.'],0,'Ballonger = balloons.','Leo blew up balloons all evening.'),
pick('Choose “some” for more than one.','Vi köpte ___ ballonger.',['några','någon','något'],0,'Ballonger is plural.','Plural nouns take några.'),
type('Write the past tense of köpa (buy).','I går ___ jag en present.',['köpte'],'It ends in -te.','Köper → köpte.'),
listen('Listen. Who is the parcel for?','Det stora paketet är till Ella.',['The big parcel is for Ella.','The small parcel is for Ella.','The big parcel is from Ella.'],0,'Stora = big. Till = for / to.','Det stora paketet = the big parcel.'),
pick('Story check: what is missing at the party?','Pappa: Det finns ingen glass, men det finns mycket tårta!',['Ice cream','Cake','Balloons'],0,'Ingen = no / none.','There is no ice cream, but lots of cake.'),
tile('Say: I don’t like sausage.',['Jag tycker','inte','om','korv.'],'Inte goes between tycker and om.','Jag tycker inte om korv = I don’t like sausage.'),
listen('Listen. What did they do?','Vi lagade mat och städade huset.',['We cooked and cleaned the house.','We cook and clean the house.','We shopped and cleaned the house.'],0,'Lagade mat = cooked. Städade = cleaned.','Both verbs end in -de, so it already happened.')
],
boss:'Plan a pretend party. Say three things you did to get ready (Jag köpte …, Jag ringde …, Jag städade …). Then the other person offers food, and you answer with gillar, tycker om, tycker inte om or älskar.'
};
LESSONS[9]={
unit:10,title:'Meet the family',sv:'Familjen',place:'FAMILJ',
rule:'Strong past & family words',
reference:'Some verbs change their vowel in the past tense: springer → sprang, äter → åt, dricker → drack, skriver → skrev, ser → såg, kommer → kom, går → gick, är → var. In a side clause (after att, eftersom, när, om) inte comes before the verb: Han säger att han inte kommer. Give your opinion with Jag tycker att …: Jag tycker att mormor är rolig.',
intro:'Leo’s family visits mormor Britt. Meet the cousins and find out what happened that day.',
words:[
['en familj','a family'],['en mormor','a grandma (mum’s mum)'],['en morfar','a grandpa (mum’s dad)'],['en farmor','a grandma (dad’s mum)'],['en farfar','a grandpa (dad’s dad)'],
['en moster','an aunt (mum’s sister)'],['en faster','an aunt (dad’s sister)'],['en morbror','an uncle (mum’s brother)'],['en farbror','an uncle (dad’s brother)'],
['en kusin','a cousin'],['ett syskon','a brother or sister'],['en bror','a brother'],['en syster','a sister'],
['kom','came'],['gick','went / walked'],['sprang','ran'],['åt','ate'],['drack','drank'],['skrev','wrote'],['såg','saw'],['var','was / were'],
['förkyld','having a cold'],['Jag tycker att …','I think that …'],['att han inte kommer','that he isn’t coming']
],
story:{title:'Hos mormor',lines:[
['I söndags åkte familjen till mormor Britt.','Last Sunday the family went to grandma Britt’s.'],
['Moster Lena och kusin Maja kom också.','Aunt Lena and cousin Maja came too.'],
['Mormor bakade bullar, och alla åt och drack saft.','Grandma baked buns, and everyone ate and drank squash.'],
['Sedan gick barnen ut i trädgården.','Then the children went out into the garden.'],
['Leo och Maja sprang efter Sixten. Han var jättesnabb!','Leo and Maja ran after Sixten. He was super fast!'],
['Maja: Var är morbror Erik?','Maja: Where is uncle Erik?'],
['Mamma: Han skrev att han inte kan komma i dag. Han är förkyld.','Mum: He wrote that he can’t come today. He has a cold.'],
['Sedan såg alla på gamla foton.','Then everyone looked at old photos.'],
['Leo: Är det du på bilden, mormor?','Leo: Is that you in the picture, grandma?'],
['Mormor: Ja, där är jag nio år, precis som Ella!','Grandma: Yes, there I’m nine, just like Ella!'],
['Ella: Jag tycker att du ser ut som jag!','Ella: I think you look like me!'],
['På kvällen kom familjen hem. Alla var trötta men glada.','In the evening the family came home. Everyone was tired but happy.']
]},
tasks:[
pick('Who is your mum’s mum?','Mammas mamma är min ___.',['mormor','farmor','moster'],0,'Mor = mother. Mormor = mother’s mother.','Mammas mamma = mormor.'),
pick('Choose the past tense of äta (eat).','I går ___ vi pizza.',['åt','ätte','äter'],0,'It is a short word with å.','Äter → åt. It is a strong verb: no -de or -te.'),
listen('Listen. What happened?','Leo sprang efter Sixten.',['Leo ran after Sixten.','Leo walked with Sixten.','Leo runs after Sixten.'],0,'Sprang = ran.','Springer → sprang.'),
tile('Say: He says that he isn’t coming.',['Han säger','att','han','inte','kommer.'],'After att: subject, inte, verb.','In a side clause inte comes before the verb.'),
type('Write the past tense of dricka (drink).','Ella ___ saft.',['drack'],'Dricka → dr…ck.','Dricker → drack.'),
pick('Who is your dad’s brother?','Pappas bror är min ___.',['farbror','morbror','kusin'],0,'Far = father.','Pappas bror = farbror.'),
listen('Listen. What is Leo’s opinion?','Jag tycker att mormor är rolig.',['I think grandma is funny.','Grandma thinks I am funny.','I think grandma is tired.'],0,'Jag tycker att = I think that.','Rolig = funny.'),
tile('Start with “I går”: Yesterday we went to the cinema.',['I går','gick','vi','på bio.'],'I går first, then the verb.','The verb comes second: I går gick vi på bio.'),
pick('Story check: who couldn’t come?','Maja: Var är morbror Erik?',['Morbror Erik','Moster Lena','Kusin Maja'],0,'He has a cold.','Morbror Erik wrote that he can’t come.'),
pick('Choose the correct side clause.','Mamma säger att ___.',['Erik inte kommer','kommer Erik inte','inte Erik kommer'],0,'After att, put inte before the verb.','Att Erik inte kommer = that Erik isn’t coming.'),
type('Write the past tense of skriva (write).','Kusin Maja ___ ett kort till mormor.',['skrev'],'Skriva → skr…v.','Skriver → skrev.'),
listen('Listen. When did they come home?','Vi kom hem sent.',['We came home late.','We come home late.','We went out late.'],0,'Kom = came.','Kommer → kom.'),
pick('Story check: what did grandma bake?','Mormor bakade bullar, och alla åt och drack saft.',['Buns','A cake','Bread'],0,'Bullar = buns.','Mormor bakade bullar.'),
tile('Say: I think that Amir is funny.',['Jag tycker','att','Amir','är','rolig.'],'I think / that / Amir / is / funny.','Jag tycker att … gives your opinion.'),
listen('Listen. What does Maja ask?','Har du några syskon?',['Do you have any brothers or sisters?','Do you have any cousins?','Are you a big sister?'],0,'Syskon = brothers and sisters.','Har du några syskon? = Do you have any brothers or sisters?')
],
boss:'Draw a small family tree together. Point and ask: Vem är det? Answer with mormor, farbror, kusin … Then tell one thing someone did last weekend (Mormor bakade …, Vi gick …). End with one opinion: Jag tycker att …'
};
LESSONS[10]={
unit:11,title:'Team mates',sv:'Lagkamrater',place:'STADIUM',
rule:'Describing people & s-verbs',
reference:'After den/det/de or a possessive (min, din, hans …), the adjective gets -a: den långa killen, min nya boll. Liten becomes lilla: den lilla. Some adjectives work as nouns: en vuxen (an adult), den lilla (the little one). S-verbs always end in -s: vi ses, de träffas, jag hoppas, det finns. To ask who does something, you can say: Vem är det som står i mål?',
intro:'A new player joins Leo’s football team. Find out who is who, describe your team mates and get ready for Saturday’s match.',
words:[
['lång','tall'],['kort','short'],['snabb','fast'],['rolig','fun / funny'],['snäll','kind'],['blyg','shy'],['stark','strong'],
['ett lag','a team'],['en lagkamrat','a team mate'],['en tränare','a coach'],['en spelare','a player'],['en match','a match'],
['ett mål','a goal'],['stå i mål','to play in goal'],['en vuxen','an adult'],['den lilla','the little one'],
['min nya boll','my new ball'],['den långa killen','the tall boy'],
['vi ses','see you'],['träffas','to meet (each other)'],['hoppas','to hope'],['det finns','there is / there are'],
['vem','who'],['Vem är det som …?','Who is it that …?']
],
story:{title:'Det nya laget',lines:[
['Tränaren: Hej allihop! Vi har en ny spelare i dag.','Coach: Hi everyone! We have a new player today.'],
['Tränaren: Hon heter Saga. Hon är lite blyg.','Coach: Her name is Saga. She is a bit shy.'],
['Leo: Hej, Saga! Jag heter Leo. Vem känner du här?','Leo: Hi, Saga! My name is Leo. Who do you know here?'],
['Saga: Jag känner Nora. Vi går i samma skola.','Saga: I know Nora. We go to the same school.'],
['Nora: Saga är jättesnabb. Och hon är väldigt snäll.','Nora: Saga is super fast. And she is very kind.'],
['Amir: Vem är det som står i mål i dag?','Amir: Who is in goal today?'],
['Leo: Det är jag! Jag har mina nya handskar.','Leo: It’s me! I have my new gloves.'],
['Amir: Och vem är den långa killen där borta?','Amir: And who is the tall boy over there?'],
['Nora: Det är min kusin Omar. Han hjälper tränaren.','Nora: That’s my cousin Omar. He helps the coach.'],
['Saga: Jag hoppas att vi vinner på lördag!','Saga: I hope we win on Saturday!'],
['Tränaren: Det hoppas jag också. Vi träffas här igen på torsdag.','Coach: So do I. We meet here again on Thursday.'],
['Alla: Vi ses!','Everyone: See you!']
]},
tasks:[
pick('Story check: what is Saga like?','Tränaren: Hon heter Saga. Hon är lite blyg.',['A bit shy','Very tall','A bit angry'],0,'Blyg = shy.','Lite blyg = a bit shy.'),
pick('Choose the right form.','Det här är min ___ boll.',['ny','nytt','nya'],2,'After min, din, hans … the adjective gets -a.','After a possessive the adjective takes -a: min nya boll.'),
tile('Say: The tall boy is fast.',['Den','långa','killen','är','snabb.'],'Den + adjective with -a + noun.','Den långa killen = the tall boy. Den + -a + definite noun.'),
listen('Listen. What does Nora say?','Vi ses i morgon!',['See you tomorrow!','We meet today!','See you on Saturday!'],0,'I morgon = tomorrow.','Vi ses = see you. It’s an s-verb.'),
pick('Ask who someone is.','___ är din tränare?',['Vem','Vad','Var'],0,'Who = vem.','Vem är din tränare? = Who is your coach?'),
type('Write the missing word: I hope we win.','Jag ___ att vi vinner.',['hoppas'],'It ends in -s.','Hoppas is an s-verb: it always ends in -s.'),
pick('Mamma Sara is 40. What is she?','Sara är en ___.',['vuxen','vuxna','vuxet'],0,'One grown-up = en vuxen.','En vuxen = an adult. More than one: vuxna.'),
tile('Ask: Who is in goal?',['Vem','är det','som','står','i mål?'],'Vem är det som …?','In a “Vem är det som …?” question, som comes before the verb.'),
listen('Listen. Who is in goal?','Det är Leo som står i mål.',['Leo is in goal.','Leo is the coach.','Leo is on the bench.'],0,'Står i mål = plays in goal.','Det är Leo som står i mål = Leo is in goal.'),
pick('Story check: when does the team meet again?','Tränaren: Vi träffas här igen på torsdag.',['On Thursday','On Saturday','On Tuesday'],0,'Torsdag = Thursday.','They meet again på torsdag. The match is på lördag.'),
type('They meet every day. Write the verb.','De ___ varje dag.',['träffas','ses','möts'],'Träffa + s.','Träffas = meet each other. The -s shows they do it together.'),
tile('Say: My new shoes are blue.',['Mina','nya','skor','är','blå.'],'Mina + nya + noun.','After mina the adjective gets -a: mina nya skor.'),
listen('Listen. What is Amir like?','Amir är lång och väldigt rolig.',['Tall and very funny','Short and very kind','Tall and a bit shy'],0,'Rolig = funny, väldigt = very.','Lång = tall, rolig = funny.'),
pick('Choose the opposite of lång.','Leo är inte lång. Han är ___.',['kort','snabb','stark'],0,'Not tall = …?','Kort is the opposite of lång.'),
pick('Choose the right verb.','Det ___ tre bollar i väskan.',['finns','har','heter'],0,'There are = det finns.','Det finns = there is / there are. It’s an s-verb too.')
],
boss:'Describe three people you know (a friend, a team mate, a grown-up) with two adjectives each. Your parent guesses who it is. Swap roles, and finish with “Vi ses!”'
};
LESSONS[11]={
unit:12,title:'Road trip',sv:'Bilresan',place:'ROAD',
rule:'Modal verbs, ingen & själv',
reference:'Modal verbs are followed by an infinitive without att: Vi måste tanka. Får jag spela? Du bör inte köra fort. Behöver works the same way: Vi behöver inte stanna. Ingen (inget, inga) means the same as inte någon (något, några): Jag har ingen mobil = Jag har inte någon mobil. Use själv for one person and själva for more: Ella gör det själv. De gör det själva.',
intro:'The family is driving to mormor’s house in Jönköping. Keep everyone happy in the car, say sorry nicely and plan the perfect fika stop.',
words:[
['en bil','a car'],['köra','to drive'],['en bilresa','a road trip'],['ett bälte','a belt (in a car: seat belt)'],['tanka','to fill up (the car)'],['en mack','a petrol station'],
['måste','must / have to'],['får','may / am allowed to'],['kan','can'],['vill','want to'],['ska','will / am going to'],['bör','should'],['behöver','need to'],
['Förlåt!','Sorry!'],['Ursäkta!','Excuse me!'],['Det gör inget.','It doesn’t matter.'],
['själv','by myself / by yourself'],['själva','by ourselves / by themselves'],
['ingen / inget / inga','no / none'],['inte någon','not any'],
['fika','to have a coffee break'],['en kanelbulle','a cinnamon bun'],['köttbullar','meatballs'],['en smörgåstårta','a sandwich cake'],
['Är vi framme snart?','Are we there soon?']
],
story:{title:'Till mormor',lines:[
['Pappa: Nu åker vi till mormor i Jönköping. Glöm inte bältet!','Dad: Now we’re off to mormor’s in Jönköping. Don’t forget your seat belt!'],
['Ella: Får jag spela på din mobil, Leo?','Ella: Can I play on your phone, Leo?'],
['Leo: Nej, det får du inte. Batteriet är nästan slut.','Leo: No, you can’t. The battery is almost dead.'],
['Ella: Men jag har inget att göra!','Ella: But I have nothing to do!'],
['Leo: Är vi framme snart? Jag är jättehungrig.','Leo: Are we there soon? I’m super hungry.'],
['Pappa: Vi måste tanka. Vi stannar vid macken och fikar.','Dad: We have to fill up. We’ll stop at the petrol station and have a fika.'],
['Leo: Kan jag få en kanelbulle?','Leo: Can I have a cinnamon bun?'],
['Ella: Oj! Förlåt, pappa! Jag spillde saft på sätet.','Ella: Oops! Sorry, Dad! I spilled juice on the seat.'],
['Pappa: Det gör inget. Du kan torka upp det själv.','Dad: It doesn’t matter. You can wipe it up yourself.'],
['Mamma: Mormor har gjort köttbullar och smörgåstårta till oss.','Mum: Mormor has made meatballs and sandwich cake for us.'],
['Pappa: Mums! Då bör ni inte äta för många bullar.','Dad: Yum! Then you shouldn’t eat too many buns.'],
['Ella: Jag kan äta både bullar och köttbullar!','Ella: I can eat both buns and meatballs!']
]},
tasks:[
pick('Story check: why do they stop at the petrol station?','Pappa: Vi måste tanka. Vi stannar vid macken och fikar.',['To fill up and have a fika','To buy a new phone','To meet mormor'],0,'Tanka = fill up the car.','They must tanka (fill up), and then they fika.'),
pick('Ella asks for permission. Choose the verb.','___ jag spela på din mobil?',['Får','Måste','Bör'],0,'Asking “May I …?” = får.','Får jag …? = May I …? / Can I …?'),
tile('Say: We have to fill up the car.',['Vi','måste','tanka bilen.'],'Modal verb + infinitive.','Måste + infinitive, no att: Vi måste tanka bilen.'),
listen('Listen. What does Ella say?','Förlåt! Jag spillde saft.',['Sorry! I spilled juice.','Excuse me! Where is the juice?','Sorry! I want juice.'],0,'Förlåt = sorry.','Förlåt = sorry. Spillde = spilled.'),
pick('Ella says sorry. Answer kindly.','Förlåt! – ___',['Det gör inget.','Ursäkta!','Varsågod.'],0,'It doesn’t matter = …?','Det gör inget = it doesn’t matter / no problem.'),
pick('You want to ask a stranger something.','___, var ligger macken?',['Ursäkta','Det gör inget','Varsågod'],0,'Excuse me = ursäkta.','Ursäkta = excuse me. Use it to get someone’s attention.'),
type('Ella does it with no help. Write the missing word.','Ella torkar upp det ___.',['själv'],'One person, no help.','One person = själv. More than one = själva.'),
pick('Leo and Ella do it with no help.','Leo och Ella packar väskorna ___.',['själva','själv','självt'],0,'Two people → -a.','Själva is for more than one person.'),
tile('Say: I have no phone.',['Jag','har','ingen','mobil.'],'Ingen goes before the noun.','Jag har ingen mobil = I have no phone.'),
type('Same meaning as “Jag har ingen mobil”.','Jag har inte ___ mobil.',['någon'],'Inte + …? = ingen.','Ingen = inte någon. Both are correct.'),
listen('Listen. What does pappa say?','Vi måste stanna nu.',['We have to stop now.','We want to stop now.','We can stop now.'],0,'Måste = must / have to.','Vi måste stanna nu = We have to stop now.'),
listen('Listen. What does Leo ask?','Ska vi fika nu?',['Shall we have a fika now?','Do we have to drive now?','Do you want a bun now?'],0,'Fika = have a coffee break.','Ska vi …? = Shall we …?'),
pick('Story check: what has mormor made?','Mamma: Mormor har gjort köttbullar och smörgåstårta till oss.',['Meatballs and sandwich cake','Pancakes and ice cream','Cinnamon buns and juice'],0,'Köttbullar = meatballs.','Mormor has made köttbullar and smörgåstårta.'),
tile('Say: We don’t need to stop.',['Vi','behöver','inte','stanna.'],'Inte comes after behöver.','Behöver + inte + infinitive: Vi behöver inte stanna.'),
pick('What is a Swedish fika?','Nu fikar vi!',['Juice or coffee with a cinnamon bun','Meatballs and potatoes','A big plate of pasta'],0,'Think bullar!','A fika is a break with a drink and something sweet, like a kanelbulle.')
],
boss:'Plan a pretend car trip with your parent. Say three things you must, can or want to do on the way, say sorry for one small accident, and order a fika at the stop. Then swap roles.'
};
