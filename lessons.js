/* Ragnars skatt · lessons data. Original practice content following the topic
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
boss:'Use the room studio above. Furnish a room, then tell your partner three things about it without reading the generated descriptions.'
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

LESSONS[12]={
unit:13,title:'Doctor visit',sv:'Hos doktorn',place:'DOKTOR',
rule:'Body words, har ont i & imperative',
reference:'To say where it hurts, use har ont i + the body part in the definite form: Jag har ont i huvudet, ont i halsen, ont i magen, ont i ryggen, ont i foten. Doctors give orders with the imperative, which is the verb without -a or -r: Öppna munnen! Ta en tablett! Sitt här! Drick vatten! Modal verbs give advice and rules: Du måste vila. Du bör dricka mycket vatten. To ask for something politely, say Kan jag få en tid i morgon?',
intro:'Mikael has a sore throat and a nasty cough, so he finally visits the health centre. Describe your symptoms, understand the doctor’s orders and get well again.',
words:[
['en läkare','a doctor'],['en vårdcentral','a health centre'],['en sköterska','a nurse'],['en tid','an appointment'],
['ett huvud','a head'],['en hals','a throat / neck'],['en mage','a stomach'],['en rygg','a back'],['en arm','an arm'],['ett ben','a leg'],['en fot','a foot (plural: fötter)'],['en tand','a tooth'],
['ont','pain / sore'],['Jag har ont i …','I have a pain in … / My … hurts'],['en feber','a fever'],['en hosta','a cough'],['förkyld','having a cold'],
['en tablett','a tablet / pill'],['ett recept','a prescription'],['ett apotek','a pharmacy'],
['vila','to rest'],['Hur mår du?','How are you feeling?'],['Jag mår dåligt.','I feel bad.'],['Öppna munnen!','Open your mouth!'],['andas djupt','breathe deeply'],['Sätt dig!','Sit down!'],['Krya på dig!','Get well soon!']
],
story:{title:'Hos doktorn',lines:[
['Lena: God morgon! Har du en tid?','Lena: Good morning! Do you have an appointment?'],
['Mikael: Ja, klockan tio. Jag heter Mikael Strand.','Mikael: Yes, at ten o’clock. My name is Mikael Strand.'],
['Lena: Sätt dig där. Doktor Berg kommer snart.','Lena: Sit down over there. Doctor Berg will be here soon.'],
['Doktor Berg: Hej, Mikael! Hur mår du?','Doctor Berg: Hello, Mikael! How are you feeling?'],
['Mikael: Inte bra. Jag har ont i halsen och ont i huvudet.','Mikael: Not well. I have a sore throat and a headache.'],
['Doktor Berg: Har du feber?','Doctor Berg: Do you have a fever?'],
['Mikael: Ja, trettioåtta grader. Och jag hostar mycket.','Mikael: Yes, thirty-eight degrees. And I’m coughing a lot.'],
['Doktor Berg: Öppna munnen och säg “aaa”.','Doctor Berg: Open your mouth and say “aaa”.'],
['Mikael: Aaa! Aj, det gör ont!','Mikael: Aaa! Ouch, that hurts!'],
['Doktor Berg: Jag ser det. Din hals är röd. Du är förkyld.','Doctor Berg: I can see that. Your throat is red. You have a cold.'],
['Mikael: Kan jag gå till jobbet i morgon?','Mikael: Can I go to work tomorrow?'],
['Doktor Berg: Nej, du måste vila i tre dagar. Drick mycket vatten och ta en tablett på kvällen.','Doctor Berg: No, you have to rest for three days. Drink lots of water and take a tablet in the evening.'],
['Mikael: Behöver jag ett recept?','Mikael: Do I need a prescription?'],
['Doktor Berg: Nej, tabletterna finns på apoteket. Krya på dig!','Doctor Berg: No, the tablets are at the pharmacy. Get well soon!'],
['Mikael: Tack! Då ligger jag i soffan med katten.','Mikael: Thanks! Then I’ll lie on the sofa with the cat.'],
['Doktor Berg: Bra! Men inga mejl från jobbet!','Doctor Berg: Good! But no emails from work!']
]},
tasks:[
pick('Story check: what is wrong with Mikael?','Mikael: Jag har ont i halsen och ont i huvudet.',['He has a sore throat and a headache','He has a broken arm','He has a toothache'],0,'Ont i = pain in.','Halsen = the throat, huvudet = the head.'),
pick('Choose the right word.','Jag har ont ___ halsen.',['på','i','av'],1,'Always the same little word.','Use har ont i + the body part.'),
tile('Say: I have a stomach ache.',['Jag','har','ont','i','magen.'],'Body part is definite: magen.','Ont i + definite noun: ont i magen.'),
listen('Listen. What hurts?','Jag har ont i ryggen.',['My back hurts.','My leg hurts.','I have a headache.'],0,'Rygg = back.','Ryggen = the back.'),
type('Write the missing word (head, definite).','Jag har ont i ___.',['huvudet'],'Ett huvud → add -et.','Huvud is an ett-word, so the definite form is huvudet.'),
pick('The doctor gives an order. Choose the imperative.','___ munnen!',['Öppna','Öppnar','Öppnade'],0,'Imperative = the verb without -r.','Öppna munnen! = Open your mouth!'),
pick('Story check: how long must Mikael rest?','Doktor Berg: Du måste vila i tre dagar.',['One day','Three days','A week'],1,'Look for “tre”.','Tre dagar = three days.'),
tile('Say: I don’t feel well.',['Jag','mår','inte','bra.'],'Inte comes after the verb.','Jag mår inte bra. Inte goes right after mår.'),
listen('Listen. What does the doctor say?','Öppna munnen och andas djupt.',['Open your mouth and breathe deeply.','Open your mouth and say aaa.','Sit down and breathe.'],0,'Andas = breathe.','Andas djupt = breathe deeply.'),
pick('The doctor asks: Hur mår du? You feel terrible.','Hur mår du? – ___',['Jag mår dåligt.','Jag mår bra.','Jag har tid.'],0,'Dåligt = badly.','Jag mår dåligt = I feel bad.'),
type('The doctor says: take a tablet.','___ en tablett!',['ta'],'The imperative of ta is the same word.','Ta = take. Ta en tablett! = Take a tablet!'),
pick('Story check: where can Mikael get the tablets?','Doktor Berg: Tabletterna finns på apoteket.',['At the pharmacy','At the health centre','At the shop'],0,'Look for apotek.','Apoteket = the pharmacy.'),
listen('Listen. What does Mikael say?','Jag har feber och jag hostar.',['I have a fever and I’m coughing.','I have a cold and a sore leg.','I have a fever and a toothache.'],0,'Feber = fever.','Hostar = coughs.'),
tile('Ask: Can I get an appointment tomorrow?',['Kan','jag','få','en','tid','i','morgon?'],'Kan jag få … = Can I have …?','Kan jag få en tid i morgon? A polite way to ask for something.'),
pick('Story check: what does the doctor see in Mikael’s throat?','Doktor Berg: Din hals är röd.',['It is red','It is white','It is swollen and green'],0,'Röd = red.','Din hals är röd = Your throat is red.'),
type('Write the modal verb: You must rest today.','Du ___ vila i dag.',['måste'],'Must / have to.','Måste + infinitive: Du måste vila.'),
pick('What do you say to someone who is ill?','Krya på dig!',['Get well soon!','Good morning!','Sit down!'],0,'You hope they feel better.','Krya på dig! = Get well soon!'),
tile('Say: Drink a lot of water.',['Drick','mycket','vatten.'],'Imperative of dricka: drick.','Drick = drink (imperative).')
],
boss:'Role-play a doctor’s visit. One of you is the patient and says where it hurts (two body parts) and how you feel. The doctor gives three orders, such as Öppna munnen, Drick vatten and Du måste vila. Then swap roles.'
};
LESSONS[13]={
unit:14,title:'The phone call',sv:'Ett samtal',place:'TELEFON',
rule:'Phone phrases, spelling names & numbers',
reference:'On the phone Swedes say Det är Samir (It’s Samir), not Jag är. To ask for someone say Kan jag få tala med Eva? Ringa means to call: Jag ringer dig i morgon. Ringa upp means to call back: Hon ringer upp dig. To spell a name, say the letters one by one. Numbers: noll, ett, två, tre, fyra, fem, sex, sju, åtta, nio, tio, tjugo, trettio, fyrtio, femtio, sextio, sjuttio, åttio, nittio, hundra. Join them for 21–99: fyrtiofem = 45. Telephone numbers are often said in small groups: noll sju noll, ett två tre.',
intro:'Samir has left his car at the garage and phones to ask if it is ready. The receptionist needs his name, his number and a lot of patience.',
words:[
['en telefon','a telephone'],['en mobil','a mobile phone'],['ett telefonnummer','a phone number'],['ett nummer','a number'],
['ringa','to call / to ring'],['ringa upp','to call back'],['svara','to answer'],['ett samtal','a (phone) call'],['ett meddelande','a message'],['lämna','to leave'],
['Det är Samir.','This is Samir. (on the phone)'],['Kan jag få tala med …?','Can I speak to …?'],['Vem pratar jag med?','Who am I speaking to?'],['Ett ögonblick.','One moment.'],
['Tyvärr','Unfortunately'],['ett möte','a meeting'],['Det gäller …','It’s about …'],['stava','to spell'],['Hur stavar du det?','How do you spell that?'],['Stämmer det?','Is that right?'],
['noll','zero'],['ett, två, tre, fyra, fem','1, 2, 3, 4, 5'],['sex, sju, åtta, nio, tio','6, 7, 8, 9, 10'],['tjugo, trettio, fyrtio, femtio','20, 30, 40, 50'],['sextio, sjuttio, åttio, nittio','60, 70, 80, 90'],['ett efternamn','a surname']
],
story:{title:'Är bilen klar?',lines:[
['Karin: Bergs Bil, det är Karin.','Karin: Bergs Bil, this is Karin.'],
['Samir: Hej, det är Samir Hakimi. Kan jag få tala med Eva Lund?','Samir: Hi, this is Samir Hakimi. Can I speak to Eva Lund?'],
['Karin: Tyvärr, Eva är på möte just nu. Vill du lämna ett meddelande?','Karin: Unfortunately, Eva is in a meeting right now. Would you like to leave a message?'],
['Samir: Ja tack. Det gäller min bil. Är den klar?','Samir: Yes please. It’s about my car. Is it ready?'],
['Karin: Jag vet inte. Eva kan ringa upp dig. Vad är ditt nummer?','Karin: I don’t know. Eva can call you back. What is your number?'],
['Samir: Noll sju noll, ett två tre, fyrtiofem, sextiosju.','Samir: 070, 123, 45, 67.'],
['Karin: Noll sju noll, ett två tre, femtiofyra, sextiosju. Stämmer det?','Karin: 070, 123, 54, 67. Is that right?'],
['Samir: Nej, fyrtiofem, inte femtiofyra!','Samir: No, forty-five, not fifty-four!'],
['Karin: Förlåt! Fyrtiofem. Och hur stavar du efternamnet?','Karin: Sorry! Forty-five. And how do you spell your surname?'],
['Samir: H-A-K-I-M-I.','Samir: H-A-K-I-M-I.'],
['Karin: Tack, Samir. Eva ringer dig efter lunch.','Karin: Thanks, Samir. Eva will call you after lunch.'],
['Samir: Perfekt. Då har jag mobilen i fickan hela dagen.','Samir: Perfect. Then I’ll keep my phone in my pocket all day.'],
['Karin: Bra! Och glöm inte att svara!','Karin: Good! And don’t forget to answer!'],
['Samir: Tack så mycket. Hej då!','Samir: Thank you very much. Bye!']
]},
tasks:[
pick('Story check: why can’t Samir talk to Eva?','Karin: Tyvärr, Eva är på möte just nu.',['She is in a meeting','She is on holiday','She is at lunch'],0,'Look for möte.','På möte = in a meeting.'),
pick('Ask to speak to someone.','___ jag få tala med Eva?',['Kan','Är','Har'],0,'Can I get …?','Kan jag få tala med …? is the standard phrase.'),
tile('Say: Can I speak to Eva?',['Kan','jag','få','tala','med','Eva?'],'Start with Kan jag få.','Kan jag få tala med Eva? = Can I speak to Eva?'),
listen('Listen. What does the caller say?','Det är Samir.',['This is Samir.','Where is Samir?','Samir is busy.'],0,'The way you say who you are on the phone.','Det är … = This is … on the phone.'),
type('Complete the number series.','tjugo, trettio, ___, femtio',['fyrtio'],'After 30 comes …','Fyrtio = 40.'),
pick('Choose the number 45.','',['femtiofyra','fyrtiofem','fyrtiofyra'],1,'Say the tens first: fyrtio + fem.','Fyrtiofem = 45. Femtiofyra = 54.'),
pick('Story check: what number does Karin get wrong?','Samir: Nej, fyrtiofem, inte femtiofyra!',['45 / 54','23 / 32','67 / 76'],0,'Look at the middle of the number.','Karin says femtiofyra (54) but it is fyrtiofem (45).'),
listen('Listen. Which number is it?','Noll sju fem, tre två ett.',['075 321','057 312','075 231'],0,'Noll = 0, sju = 7, fem = 5.','Noll sju fem, tre två ett = 075 321.'),
tile('Ask: How do you spell your surname?',['Hur','stavar','du','efternamnet?'],'Hur … du …?','Hur stavar du efternamnet?'),
pick('Karin wants Samir to leave something.','Vill du ___ ett meddelande?',['lämna','ringa','svara'],0,'Leave a message.','Lämna ett meddelande = leave a message.'),
type('Write the verb: Eva will call you after lunch.','Eva ___ dig efter lunch.',['ringer'],'Ringa → present tense.','Ringer = calls (present tense of ringa).'),
pick('Story check: when will Eva call?','Karin: Eva ringer dig efter lunch.',['After lunch','Tomorrow','In ten minutes'],0,'Look for lunch.','Efter lunch = after lunch.'),
tile('Ask: Who am I speaking to?',['Vem','pratar','jag','med?'],'Vem = who.','Vem pratar jag med? is a polite phone question.'),
listen('Listen. What does Karin say?','Tyvärr, hon är upptagen.',['Unfortunately, she is busy.','Unfortunately, she is ill.','Thank you, she is here.'],0,'Tyvärr = unfortunately.','Upptagen = busy.'),
pick('You answer the phone at work.','Hej, det ___ Karin.',['är','heter','har'],0,'Use the same verb as in English “It is …”.','Det är Karin = It’s Karin.'),
type('Ask for the phone number.','Vad är ditt ___?',['nummer','telefonnummer'],'A number to call.','Nummer / telefonnummer = number / phone number.'),
tile('Say: I’ll call you tomorrow.',['Jag','ringer','dig','i','morgon.'],'Verb in second place.','Jag ringer dig i morgon.'),
pick('Story check: what is Samir calling about?','Samir: Det gäller min bil.',['His car','His phone','His job'],0,'Gäller = it concerns.','Det gäller min bil = It’s about my car.')
],
boss:'Make a pretend phone call. One of you phones a company and asks Kan jag få tala med …? The other says the person is in a meeting and asks for a message. Spell your name, say a phone number in groups and check it with Stämmer det? Then swap roles.'
};
LESSONS[14]={
unit:15,title:'Clothes shopping',sv:'I klädaffären',place:'AFFÄR',
rule:'Clothes, colours, adjective agreement & comparison',
reference:'Adjectives agree with the noun. En-word: en röd mössa. Ett-word: ett rött skärp (add -t). Plural: röda skor (add -a). Some stay the same in ett-words, like svart, vit, gul-t: ett svart skärp. After den/det/de the adjective ends in -a: den blå jackan. Prices: Vad kostar den? Den kostar fyrahundra kronor. To compare, add -are: billig – billigare, dyr – dyrare, stor – större. Bra is irregular: bra – bättre. Use än for than: Den är bättre än den gamla.',
intro:'Maja takes her grandfather Farfar shopping because his jacket has a hole in it. He loves yellow, she doesn’t, and the shop assistant has to solve it.',
words:[
['en jacka','a jacket'],['en tröja','a sweater'],['en mössa','a hat / cap'],['en skjorta','a shirt'],['en klänning','a dress'],['ett skärp','a belt'],['ett par skor','a pair of shoes'],['ett par strumpor','a pair of socks'],
['en storlek','a size'],['ett provrum','a fitting room'],['prova','to try on'],['passa','to fit / suit'],
['röd / rött / röda','red'],['blå / blått / blåa','blue'],['svart / svarta','black'],['vit / vitt / vita','white'],['grön / grönt / gröna','green'],['gul / gult / gula','yellow'],
['stor / stort / stora','big'],['liten / litet / små','small'],['för liten','too small'],
['kosta','to cost'],['Vad kostar den?','How much is it?'],['kronor','kronor (Swedish money)'],['dyr','expensive'],['billig / billigare','cheap / cheaper'],['bra / bättre','good / better'],['än','than']
],
story:{title:'Farfars nya jacka',lines:[
['Maja: Farfar, du behöver en ny jacka. Din jacka har ett hål!','Maja: Grandpa, you need a new jacket. Your jacket has a hole!'],
['Farfar: Äh, det är en bra jacka. Hålet är bara litet.','Farfar: Oh, it’s a good jacket. The hole is only small.'],
['Nils: Hej! Kan jag hjälpa er?','Nils: Hello! Can I help you?'],
['Farfar: Ja, jag vill ha en gul jacka.','Farfar: Yes, I want a yellow jacket.'],
['Maja: Gul? Då ser du ut som en banan, Farfar!','Maja: Yellow? Then you look like a banana, Farfar!'],
['Nils: Vi har också en blå jacka och en svart jacka. Den blå kostar sexhundra kronor.','Nils: We also have a blue jacket and a black jacket. The blue one costs six hundred kronor.'],
['Maja: Den svarta är billigare. Den kostar fyrahundrafemtio kronor.','Maja: The black one is cheaper. It costs four hundred and fifty kronor.'],
['Farfar: Jag provar den blå. Den är nog bättre än den svarta.','Farfar: I’ll try on the blue one. It’s probably better than the black one.'],
['Nils: Provrummet ligger där borta.','Nils: The fitting room is over there.'],
['Farfar: Den är för liten! Har ni den i större storlek?','Farfar: It’s too small! Do you have it in a bigger size?'],
['Nils: Ja, här är en större.','Nils: Yes, here is a bigger one.'],
['Farfar: Perfekt! Den passar bra. Jag tar den.','Farfar: Perfect! It fits well. I’ll take it.'],
['Maja: Den är mycket bättre än den gamla jackan!','Maja: It’s much better than the old jacket!'],
['Farfar: Jag behöver också ett blått skärp. Och du får en mössa, Maja.','Farfar: I also need a blue belt. And you can have a hat, Maja.'],
['Maja: Tack! Jag vill ha en röd mössa och ett par gröna strumpor.','Maja: Thanks! I’d like a red hat and a pair of green socks.'],
['Farfar: Rött och grönt? Då ser du ut som en julgran!','Farfar: Red and green? Then you look like a Christmas tree!']
]},
tasks:[
pick('Story check: what colour jacket does Farfar ask for first?','Farfar: Ja, jag vill ha en gul jacka.',['Blue','Yellow','Black'],1,'Maja thinks he looks like a banana.','Gul = yellow.'),
pick('Choose the right form for an ett-word.','Jag vill ha ett ___ skärp.',['blå','blått','blåa'],1,'Ett-word → add -t.','Ett skärp → ett blått skärp.'),
tile('Say: I want a red hat.',['Jag','vill','ha','en','röd','mössa.'],'En mössa → röd.','En-word: en röd mössa.'),
listen('Listen. What does the assistant say?','Vad kostar tröjan?',['What does the sweater cost?','Where is the sweater?','Do you like the sweater?'],0,'Kostar = costs.','Vad kostar …? = How much is …?'),
type('Plural adjective: I want a pair of black shoes.','Jag vill ha ett par ___ skor.',['svarta'],'Plural adds -a.','Skor is plural, so svart becomes svarta.'),
pick('Shoes are plural. Choose the adjective.','Skorna är ___.',['dyr','dyrt','dyra'],2,'Plural → -a.','Skorna är dyra = The shoes are expensive.'),
pick('Story check: what is Farfar’s problem in the fitting room?','Farfar: Den är för liten!',['The jacket is too small','The jacket is too expensive','The jacket is yellow'],0,'För liten = too small.','He asks for a större storlek (bigger size).'),
tile('Say: The black one is cheaper.',['Den','svarta','är','billigare.'],'Billig → billigare.','Add -are to compare: billigare = cheaper.'),
listen('Listen. What is the problem?','Den är för stor.',['It is too big.','It is too small.','It is too dear.'],0,'För = too.','För stor = too big.'),
pick('Compare: this one is good, that one is better.','Den här är bra, men den där är ___.',['bra','bättre','god'],1,'Irregular comparison.','Bra – bättre.'),
type('Write the money word.','Jackan kostar fyrahundra ___.',['kronor'],'Swedish currency.','Kronor = Swedish crowns.'),
pick('Choose the correct form.','Jag har en ___ mössa.',['rött','röd','röda'],1,'En-word, no ending.','En mössa → en röd mössa.'),
tile('Ask: Do you have it in a bigger size?',['Har','ni','den','i','större','storlek?'],'Större = bigger.','Har ni den i större storlek?'),
listen('Listen. How much is it?','Det kostar tvåhundra kronor.',['200 kronor','20 kronor','2 000 kronor'],0,'Två + hundra.','Tvåhundra = 200.'),
type('Compare: the blue jacket is expensive, the black one is …','Den blå jackan är dyr. Den svarta är ___.',['billigare'],'The opposite of dyrare.','Billigare = cheaper.'),
pick('Story check: what does Maja choose for herself?','Maja: Jag vill ha en röd mössa och ett par gröna strumpor.',['A red hat and green socks','A yellow jacket','A blue belt'],0,'Look at the last lines.','En röd mössa och gröna strumpor.'),
tile('Say: It fits well.',['Den','passar','bra.'],'Passa = fit.','Den passar bra.'),
pick('Say that something is better than something else.','Den är bättre ___ den gamla.',['än','som','och'],0,'Than.','Än = than.')
],
boss:'Role-play a clothes shop. One of you is the customer who asks for two items in different colours and sizes, asks Vad kostar den? and says which one is cheaper or better. The other is the assistant. Then swap roles.'
};
LESSONS[15]={
unit:16,title:'At the restaurant',sv:'På restaurang',place:'MAT',
rule:'Ordering politely & dagens rätt',
reference:'Jag vill ha … is correct but a bit direct. Jag skulle vilja ha … is more polite: Jag skulle vilja ha ett glas vatten, tack. You can also say Kan jag få …? or Jag tar …, and always add tack. At lunchtime many restaurants serve dagens rätt, the dish of the day, often with bread and salad. Ask for the bill with Kan vi få notan, tack? Before eating, say Smaklig måltid! and the answer is Tack detsamma!',
intro:'Elin and her friend Johan go out for lunch. Johan is hungry and a bit blunt, and the waitress has some bad news about hamburgers.',
words:[
['ett bord','a table'],['en meny','a menu'],['en servitris','a waitress'],['dagens rätt','the dish of the day'],['en fiskgryta','a fish stew'],['ett bröd','a bread / a roll'],
['ett glas vatten','a glass of water'],['en läsk','a soft drink'],['en hamburgare','a hamburger'],['en efterrätt','a dessert'],
['Jag vill ha …','I want …'],['Jag skulle vilja ha …','I would like …'],['Kan jag få …?','Can I have …?'],['Jag tar …','I’ll have … / I’ll take …'],
['en nota','a bill'],['Kan vi få notan?','Can we have the bill?'],['betala','to pay'],['ett kort','a card'],['en plånbok','a wallet'],
['Smaklig måltid!','Enjoy your meal!'],['Tack detsamma!','Same to you!'],['gärna','gladly / of course'],['Tyvärr','Unfortunately'],['slut','sold out / finished'],['artig','polite'],['jättegod','really tasty'],['diska','to do the dishes']
],
story:{title:'Lunch med Johan',lines:[
['Greta: Välkomna! Vill ni ha ett bord för två?','Greta: Welcome! Would you like a table for two?'],
['Elin: Ja tack. Kan vi sitta vid fönstret?','Elin: Yes please. Can we sit by the window?'],
['Greta: Gärna. Varsågod, här är menyn. Dagens rätt är fiskgryta med bröd.','Greta: Of course. Here you are, here is the menu. The dish of the day is fish stew with bread.'],
['Elin: Jag skulle vilja ha dagens rätt och ett glas vatten, tack.','Elin: I would like the dish of the day and a glass of water, please.'],
['Greta: Och vad vill du ha?','Greta: And what do you want?'],
['Johan: Jag vill ha en hamburgare.','Johan: I want a hamburger.'],
['Elin: Johan! Det är mer artigt att säga “Jag skulle vilja ha …”.','Elin: Johan! It’s more polite to say “I would like …”.'],
['Johan: Okej. Jag skulle vilja ha en hamburgare, tack.','Johan: Okay. I would like a hamburger, please.'],
['Greta: Tyvärr, hamburgarna är slut i dag. Vill du ha dagens rätt?','Greta: Unfortunately, the hamburgers are sold out today. Would you like the dish of the day?'],
['Johan: Ja, då tar jag dagens rätt också. Och en läsk, tack.','Johan: Yes, then I’ll have the dish of the day too. And a soft drink, please.'],
['Greta: Varsågod! Smaklig måltid!','Greta: Here you are! Enjoy your meal!'],
['Elin: Tack detsamma!','Elin: Same to you!'],
['Elin: Kan vi få notan, tack?','Elin: Can we have the bill, please?'],
['Greta: Naturligtvis. Det blir tvåhundrafyrtio kronor.','Greta: Of course. That will be two hundred and forty kronor.'],
['Johan: Oj! Jag har glömt plånboken!','Johan: Oops! I’ve forgotten my wallet!'],
['Elin: Då får du diska i köket!','Elin: Then you’ll have to do the dishes in the kitchen!']
]},
tasks:[
pick('Story check: why can’t Johan have a hamburger?','Greta: Tyvärr, hamburgarna är slut i dag.',['They are sold out','They are too expensive','The kitchen is closed'],0,'Slut = finished.','Slut means sold out / all gone.'),
pick('Choose the polite verb.','Jag ___ vilja ha en kopp kaffe, tack.',['skulle','vill','ska'],0,'More polite than vill.','Jag skulle vilja ha … = I would like …'),
tile('Say: I would like the dish of the day.',['Jag','skulle','vilja','ha','dagens','rätt.'],'Polite: skulle vilja.','Jag skulle vilja ha dagens rätt.'),
listen('Listen. What does Elin say?','Kan vi få notan, tack?',['Can we have the bill, please?','Can we have the menu, please?','Can we have a table, please?'],0,'Nota = bill.','Notan = the bill.'),
type('Answer the waitress.','Smaklig måltid! – Tack ___!',['detsamma'],'Same to you.','Tack detsamma! = Same to you!'),
pick('Which is the most polite way to order water?','',['Ge mig vatten!','Jag skulle vilja ha ett glas vatten, tack.','Jag vill vatten.'],1,'Look for skulle vilja and tack.','Skulle vilja ha + tack is the politest.'),
pick('Story check: what does Elin order?','Elin: Jag skulle vilja ha dagens rätt och ett glas vatten, tack.',['The dish of the day and water','A hamburger and a soft drink','Dessert and coffee'],0,'Listen to her first order.','Elin orders dagens rätt and a glass of water.'),
tile('Say: I want a hamburger.',['Jag','vill','ha','en','hamburgare.'],'Direct: vill ha.','Jag vill ha … is correct but a bit blunt.'),
listen('Listen. What does the waitress say?','Tyvärr, pastan är slut.',['Unfortunately, the pasta is sold out.','Unfortunately, the pasta is cold.','Thank you, the pasta is ready.'],0,'Slut = sold out.','Tyvärr … är slut = unfortunately … is sold out.'),
pick('The restaurant has no more fish.','Tyvärr, fisken är ___.',['slut','god','artig'],0,'Finished.','Slut = sold out.'),
type('Ask for the bill.','Kan vi få ___, tack?',['notan'],'En nota, definite.','Notan = the bill.'),
pick('What is dagens rätt?','Dagens rätt är fiskgryta.',['The dish of the day','The dessert','The drink list'],0,'Dag = day, rätt = dish.','Dagens rätt = the dish of the day.'),
tile('Ask: Can we sit by the window?',['Kan','vi','sitta','vid','fönstret?'],'Kan vi …?','Kan vi sitta vid fönstret?'),
listen('Listen. How much is the bill?','Det blir tvåhundrafyrtio kronor.',['240 kronor','204 kronor','42 kronor'],0,'Två + hundra + fyrtio.','Tvåhundrafyrtio = 240.'),
type('You are at a restaurant for two.','Vi vill ha ett ___ för två.',['bord'],'A place to sit and eat.','Ett bord för två = a table for two.'),
pick('Story check: what happens at the end?','Johan: Oj! Jag har glömt plånboken!',['Johan has forgotten his wallet','Elin has lost her card','The hamburger is ready'],0,'Plånbok = wallet.','Johan has forgotten his wallet, so he must do the dishes.'),
tile('Say: Can we have the bill, please?',['Kan','vi','få','notan,','tack?'],'Kan vi få …?','Kan vi få notan, tack? is the polite way to ask for the bill.'),
pick('When do you say Smaklig måltid?','Smaklig måltid!',['Before you eat','When you pay','When you arrive'],0,'Think “enjoy your meal”.','It wishes someone an enjoyable meal.')
],
boss:'Role-play a lunch at a restaurant. One of you is the waiter who offers dagens rätt and says one dish is slut. The other orders food and a drink using Jag skulle vilja ha …, says Smaklig måltid and asks for the bill. Then swap roles.'
};
LESSONS[16]={
unit:17,title:'Weather and seasons',sv:'Vädret',place:'VÄDER',
rule:'Weather with det, the seasons, ska vs kommer att',
reference:'Swedish weather verbs use det as the subject: Det regnar. Det snöar. Det blåser. With adjectives use det är: Det är kallt. Det är soligt. Seasons take på in the “in spring / in summer” sense and the definite form: på våren, på sommaren, på hösten, på vintern. For the future use ska + infinitive for plans and intentions (Jag ska ha paraply) and kommer att + infinitive for predictions (Det kommer att regna). Both are followed by the infinitive, and a time word in front pushes the verb into second place: I morgon kommer det att snöa.',
intro:'Elsa and her little brother Måns are going on a school trip tomorrow, and the sky looks grim. They ring Farmor in snowy Kiruna to argue about the weather and what to wear.',
words:[
['vädret','the weather (ett väder)'],['Hur är vädret?','How is the weather?'],['det regnar','it is raining'],['det snöar','it is snowing'],['det blåser','it is windy (blowing)'],
['solen skiner','the sun is shining'],['soligt','sunny'],['molnigt','cloudy'],['blåsigt','windy'],['kallt','cold'],['varmt','warm / hot'],['blöt','wet'],
['en grad / grader','a degree / degrees'],['minus tio grader','minus ten degrees'],
['våren','spring (en vår)'],['sommaren','summer (en sommar)'],['hösten','autumn (en höst)'],['vintern','winter (en vinter)'],
['en regnjacka','a raincoat'],['stövlar','boots (en stövel)'],['en mössa','a hat (woolly)'],['en halsduk','a scarf'],['vantar','mittens / gloves'],['ett paraply','an umbrella'],['shorts','shorts'],['en T-shirt','a T-shirt'],
['i morgon','tomorrow'],['ta med','to bring along']
],
story:{title:'Samtal med farmor',lines:[
['Elsa: Hej farmor! Hur är vädret hos dig?','Elsa: Hi Farmor! How is the weather at your place?'],
['Farmor: Det snöar här i Kiruna, och det är minus tio grader.','Farmor: It is snowing here in Kiruna, and it is minus ten degrees.'],
['Elsa: Här regnar det. Det blåser också.','Elsa: Here it is raining. It is windy too.'],
['Farmor: I morgon ska ni åka på utflykt, eller hur?','Farmor: Tomorrow you are going on a trip, right?'],
['Elsa: Ja, men jag tror att det kommer att regna hela dagen.','Elsa: Yes, but I think it will rain all day.'],
['Måns: Nej! Det kommer att bli soligt på eftermiddagen. Det sa de på radion.','Måns: No! It will be sunny in the afternoon. They said so on the radio.'],
['Farmor: Ni måste ha regnjacka och stövlar ändå.','Farmor: You must have a raincoat and boots anyway.'],
['Måns: Jag vill ha shorts och T-shirt! Det är ju vår.','Måns: I want shorts and a T-shirt! It is spring, after all.'],
['Elsa: Det är bara april, Måns. Det är kallt på våren.','Elsa: It is only April, Måns. It is cold in spring.'],
['Farmor: På sommaren är det varmt, men på vintern är det kallt.','Farmor: In summer it is warm, but in winter it is cold.'],
['Måns: Okej, okej. Jag ska ha mössa, men inte vantar.','Måns: Okay, okay. I am going to wear a hat, but not mittens.'],
['Elsa: Och jag ska ta med ett paraply.','Elsa: And I am going to bring an umbrella.'],
['Farmor: Bra! Då kommer ni inte att bli blöta.','Farmor: Good! Then you will not get wet.'],
['Måns: Vad ska du göra i morgon, farmor?','Måns: What are you going to do tomorrow, Farmor?'],
['Farmor: Det kommer att snöa, så jag ska dricka varm choklad.','Farmor: It will snow, so I am going to drink hot chocolate.']
]},
tasks:[
pick('Story check: what is the weather like at Farmor’s?','Farmor: Det snöar här i Kiruna, och det är minus tio grader.',['It is sunny and warm','It is snowing and very cold','It is raining and windy'],1,'Snöar = snowing.','Farmor says det snöar and minus tio grader: snowing and very cold.'),
pick('Choose the right word for the weather.','Här ___ det i dag.',['regn','regnet','regnar'],2,'You need a verb.','Det regnar = it is raining. The verb comes after det.'),
tile('Say: It is snowing here.',['Det','snöar','här.'],'Start with det.','Weather verbs use det: Det snöar här.'),
listen('Listen. What is the weather?','Det blåser mycket i dag.',['It is very sunny today.','It is very windy today.','It is very cold today.'],1,'Blåser = blows.','Det blåser = it is windy.'),
pick('Pick the best word for summer.','På sommaren är det ___.',['kallt','molnigt','varmt'],2,'Think of the beach.','På sommaren är det varmt = in summer it is warm.'),
type('Write the missing word.','Det är minus tio ___.',['grader'],'Plural of en grad.','Minus tio grader = minus ten degrees. Grad becomes grader in the plural.'),
pick('Story check: what does Måns say about the afternoon?','Måns: Det kommer att bli soligt på eftermiddagen.',['It will be sunny','It will snow','It will be cloudy'],0,'Soligt = sunny.','Måns thinks the afternoon will be soligt (sunny).'),
tile('Say: I am going to bring an umbrella.',['Jag','ska','ta','med','paraply.'],'Ska + infinitive = a plan.','Ska is used for plans: Jag ska ta med paraply.'),
pick('Make a prediction about tomorrow.','Det ___ regna i morgon.',['ska att','kommer att','kommer'],1,'Prediction = kommer att.','Kommer att + infinitive is used for predictions: Det kommer att regna.'),
tile('Say: Tomorrow it will snow.',['I','morgon','kommer','det','att','snöa.'],'The verb stays second.','After i morgon the verb comes next: I morgon kommer det att snöa.'),
listen('Listen. What will Måns wear?','Jag ska ha mössa och halsduk.',['I have lost my hat and scarf.','I want mittens and a scarf.','I am going to wear a hat and scarf.'],2,'Ska ha = going to wear.','Jag ska ha = I am going to wear / have on.'),
type('Write the season.','På ___ blir det blåsigt.',['hösten'],'Autumn, definite form.','På hösten = in autumn. Seasons use the definite form.'),
type('Write the missing verb (a plan).','I morgon ___ jag ha paraply.',['ska'],'A plan, not a prediction.','Ska + infinitive: I morgon ska jag ha paraply.'),
pick('It is pouring. What do you take?','Det regnar. Jag tar min ___.',['shorts','regnjacka','T-shirt'],1,'Rain needs a coat.','En regnjacka is a raincoat.'),
pick('Story check: why does Elsa say Måns is wrong about shorts?','Elsa: Det är bara april, Måns. Det är kallt på våren.',['Because it is still cold in spring','Because shorts are too expensive','Because it is winter'],0,'Look at what she says about våren.','Elsa says it is still cold in spring, so shorts are a bad idea.'),
listen('Listen. What will the weather be like?','Det kommer att bli soligt i morgon.',['It will be sunny tomorrow.','It was sunny yesterday.','It will be cloudy tomorrow.'],0,'Kommer att = will.','Det kommer att bli soligt i morgon = it will be sunny tomorrow.'),
pick('Story check: what is Farmor going to do tomorrow?','Farmor: Det kommer att snöa, så jag ska dricka varm choklad.',['Go on a trip','Drink hot chocolate','Buy a raincoat'],1,'She likes warm drinks.','Farmor says she is going to drink hot chocolate.'),
tile('Say: You must have a raincoat and boots.',['Ni','måste','ha','regnjacka','och','stövlar.'],'Måste + infinitive.','Ni måste ha regnjacka och stövlar. No att after måste.')
],
boss:'Pretend you are phoning a friend in another country. Ask how the weather is, say what the weather is like where you are, and tell each other what you are going to wear and what you think the weather will be like tomorrow. Then swap roles.'
};
LESSONS[17]={
unit:18,title:'Free time',sv:'På fritiden',place:'HOBBY',
rule:'Gillar / tycker om, how often, and verb-second after time words',
reference:'To say what you like use gillar or tycker om, followed by a noun or att + infinitive: Jag gillar fotboll. Jag tycker om att simma. Frequency words go right after the verb in a normal sentence: Jag spelar ofta fotboll. Hon rider ibland. Vi spelar aldrig. If you start the sentence with a time word, the verb must come next and the subject after it (verb second): På lördagar rider jag. Efter skolan går vi hem. Do not say På lördagar jag rider.',
intro:'At lunch in the school canteen, Tuva, Hamza and sleepy Ludvig compare what they do in their free time. Ludvig has a rather unusual hobby.',
words:[
['en hobby','a hobby'],['fritiden','free time'],['Vad gör du på fritiden?','What do you do in your free time?'],
['gilla','to like'],['tycker om','to like / be fond of'],['älska','to love'],
['spela fotboll','to play football'],['spela gitarr','to play the guitar'],['simma','to swim'],['rida','to ride (a horse)'],['rita','to draw'],['sova','to sleep'],['titta på','to watch / look at'],
['ofta','often'],['ibland','sometimes'],['aldrig','never'],['alltid','always'],['nästan','almost'],['varje dag','every day'],
['på måndagar','on Mondays'],['på lördagar','on Saturdays'],['på helgerna','at the weekends'],['efter skolan','after school'],['på kvällen','in the evening'],
['en träning','a training session'],['en match','a match / game'],['en häst','a horse'],['Jo','Yes (answering a negative)'],['nog','probably']
],
story:{title:'Lunch i matsalen',lines:[
['Tuva: Vad gör du på fritiden, Hamza?','Tuva: What do you do in your free time, Hamza?'],
['Hamza: Jag spelar ofta fotboll. På tisdagar och torsdagar har vi träning.','Hamza: I often play football. On Tuesdays and Thursdays we have training.'],
['Tuva: Gillar du att spela match?','Tuva: Do you like playing matches?'],
['Hamza: Ja, jag älskar det! Men ibland förlorar vi. Då är jag arg hela kvällen.','Hamza: Yes, I love it! But sometimes we lose. Then I am angry all evening.'],
['Ludvig: Jag spelar aldrig fotboll. Jag tycker om att sova.','Ludvig: I never play football. I like sleeping.'],
['Tuva: Att sova är ingen hobby, Ludvig!','Tuva: Sleeping is not a hobby, Ludvig!'],
['Ludvig: Jo, jag är ganska bra på det. På helgerna sover jag till tolv.','Ludvig: Oh yes it is, I am quite good at it. At the weekends I sleep until twelve.'],
['Hamza: Och du, Tuva? Vad gör du?','Hamza: And you, Tuva? What do you do?'],
['Tuva: Jag ritar nästan varje dag. På lördagar rider jag också.','Tuva: I draw almost every day. On Saturdays I also ride.'],
['Ludvig: Rider du? Kan jag få rida också?','Ludvig: You ride? Can I ride too?'],
['Tuva: Ja, men du måste vakna tidigt.','Tuva: Yes, but you have to wake up early.'],
['Ludvig: Tidigt? Hm. Då rider jag nog aldrig.','Ludvig: Early? Hm. Then I will probably never ride.'],
['Hamza: Kom på träning i stället! Efter skolan går vi dit tillsammans.','Hamza: Come to training instead! After school we go there together.'],
['Ludvig: Okej, jag kommer ibland. Men jag tar med en kudde!','Ludvig: Okay, I will come sometimes. But I am bringing a pillow!']
]},
tasks:[
pick('Story check: what does Ludvig like doing?','Ludvig: Jag tycker om att sova.',['Playing football','Sleeping','Drawing'],1,'Sova = sleep.','Ludvig tycker om att sova: he likes sleeping.'),
pick('Choose the right form.','Jag ___ att simma.',['gilla','gillar','gillade'],1,'Match the verb to jag.','Jag gillar att simma = I like swimming. Present tense is gillar.'),
tile('Say: I often play football.',['Jag','spelar','ofta','fotboll.'],'Ofta comes after the verb.','Frequency words follow the verb: Jag spelar ofta fotboll.'),
listen('Listen. When does the speaker read?','Jag läser ibland på kvällen.',['Sometimes in the evening','Always in the morning','Never in the evening'],0,'Ibland = sometimes.','Ibland = sometimes, på kvällen = in the evening.'),
pick('What does aldrig mean?','Jag spelar aldrig fotboll.',['Always','Often','Never'],2,'Ludvig says it.','Aldrig = never.'),
type('Write the missing word.','Jag ___ om att rita.',['tycker'],'Tycker om = like.','Tycker om means like: Jag tycker om att rita.'),
tile('Say: On Saturdays I ride.',['På','lördagar','rider','jag.'],'Verb second!','After the time phrase the verb comes first: På lördagar rider jag.'),
pick('Which sentence has the correct word order?','',['På måndagar jag spelar gitarr.','Jag på måndagar spelar gitarr.','På måndagar spelar jag gitarr.'],2,'The verb must be second.','With a time phrase first, the verb comes next: På måndagar spelar jag gitarr.'),
pick('Story check: when does Hamza have training?','Hamza: På tisdagar och torsdagar har vi träning.',['Mondays and Fridays','Tuesdays and Thursdays','Saturdays and Sundays'],1,'Tisdag and torsdag.','Hamza has training on Tuesdays and Thursdays.'),
listen('Listen. What do they watch?','På fredagar tittar vi på film.',['On Fridays we watch a film.','On Fridays we make a film.','On Saturdays we watch a film.'],0,'Titta på = watch.','På fredagar tittar vi på film = On Fridays we watch a film.'),
type('Write the verb (verb second).','Efter skolan ___ jag hem.',['går'],'Go, present tense.','After a time phrase comes the verb: Efter skolan går jag hem.'),
pick('Story check: why will Ludvig probably never ride?','Tuva: Du måste vakna tidigt.',['He is afraid of horses','He does not like Tuva','He must wake up early'],2,'He loves sleeping.','Riding means waking up early, and Ludvig loves sleep.'),
tile('Say: I like playing the guitar.',['Jag','gillar','att','spela','gitarr.'],'Gillar + att + infinitive.','Jag gillar att spela gitarr.'),
pick('Fill the gap.','___ vinner vi, men ofta förlorar vi.',['Aldrig','Ibland','Alltid'],1,'Sometimes we win.','Ibland = sometimes.'),
listen('Listen. What is the question?','Vad gör du på fritiden?',['What do you want to eat?','What did you do yesterday?','What do you do in your free time?'],2,'Fritiden = free time.','Vad gör du på fritiden? = What do you do in your free time?'),
type('Write the frequency word.','Jag har ingen boll, så jag spelar ___ fotboll.',['aldrig'],'No ball, so …','Aldrig = never.'),
pick('Story check: what does Ludvig say at the end?','Ludvig: Okej, jag kommer ibland. Men jag tar med en kudde!',['He will come sometimes and bring a pillow','He will never come','He will come every day'],0,'Ibland and kudde.','Ludvig will come sometimes, and bring a pillow to sleep on.'),
tile('Say: Sometimes we watch a film.',['Ibland','tittar','vi','på','film.'],'Ibland first, then the verb.','Time word first, then verb, then subject: Ibland tittar vi på film.')
],
boss:'Interview your partner about their free time. Ask what they do, whether they like it, and how often. Say what you do on a Saturday, what you do after school (or work), and one thing you never do. Then swap roles.'
};
LESSONS[18]={
unit:19,title:'At the library',sv:'På biblioteket',place:'BIBLIOTEK',
rule:'Perfect tense: har + supine',
reference:'The perfect tense is har + supine: Jag har läst boken. Supine is the verb form that ends in -at for most -ar verbs (lånar → lånat, hittar → hittat, lämnar → lämnat, letar → letat, börjar → börjat). Many other verbs end in -t (läser → läst, glömmer → glömt). Some are irregular: har → haft, gör → gjort, skriver → skrivit, är → varit. In a main clause inte goes after har: Jag har inte börjat än. Questions turn har around: Har du hittat något?',
intro:'Oskar has a homework project about Vikings, but his library card is at home and one old book is very late. Can the librarian Siv help him, and will Fatima finally find her pen?',
words:[
['ett bibliotek','a library'],['en bibliotekarie','a librarian'],['en bok / böcker','a book / books'],['ett lånekort','a library card'],['en hylla','a shelf'],['en läxa','homework (one task)'],['ett projekt','a project'],['en dator','a computer'],['en penna','a pen'],
['låna','to borrow'],['lämna tillbaka','to return (give back)'],['leta efter','to look for'],['hitta','to find'],['glömma','to forget'],['börja','to begin'],['läsa','to read'],['viska','to whisper'],
['har lånat','have borrowed'],['har läst','have read'],['har glömt','have forgotten'],['har hittat','have found'],['har haft','have had'],['har gjort','have done'],
['tyst','quiet'],['försenad','late (overdue)'],['i fyra veckor','for four weeks'],['tyvärr','unfortunately'],['än','yet']
],
story:{title:'Försenade vikingar',lines:[
['Siv: Hej! Kan jag hjälpa dig?','Siv: Hi! Can I help you?'],
['Oskar: Ja, jag har en läxa om vikingar. Har ni några böcker om det?','Oskar: Yes, I have homework about Vikings. Do you have any books about that?'],
['Siv: Javisst. De står på hyllan där borta. Har du ett lånekort?','Siv: Of course. They are on the shelf over there. Do you have a library card?'],
['Oskar: Ja, men jag har tyvärr glömt det hemma.','Oskar: Yes, but unfortunately I have forgotten it at home.'],
['Siv: Det går bra. Jag hittar dig i datorn. Vad heter du?','Siv: That is fine. I will find you on the computer. What is your name?'],
['Oskar: Oskar Berg. Och jag har en bok att lämna tillbaka.','Oskar: Oskar Berg. And I have a book to return.'],
['Siv: Åh, den här boken är försenad. Du har haft den i fem veckor!','Siv: Oh, this book is overdue. You have had it for five weeks!'],
['Oskar: Förlåt! Jag har läst den två gånger. Den är jättebra.','Oskar: Sorry! I have read it twice. It is really good.'],
['Siv: Det är inte farligt, men man får bara låna böcker i fyra veckor.','Siv: It is not dangerous, but you may only borrow books for four weeks.'],
['Fatima: Oskar! Har du hittat något om vikingar?','Fatima: Oskar! Have you found anything about Vikings?'],
['Oskar: Ja, jag har hittat tre böcker. Har du gjort din del av läxan?','Oskar: Yes, I have found three books. Have you done your part of the homework?'],
['Fatima: Nej, jag har inte börjat än. Jag har bara letat efter min penna.','Fatima: No, I have not started yet. I have only been looking for my pen.'],
['Siv: Sch! Det måste vara tyst på biblioteket.','Siv: Shh! It must be quiet in the library.'],
['Oskar (viskar): Förlåt. Får jag låna de här tre?','Oskar (whispering): Sorry. May I borrow these three?'],
['Siv: Javisst. Lämna tillbaka dem i tid den här gången!','Siv: Of course. Return them on time this time!']
]},
tasks:[
pick('Story check: what is the problem with Oskar’s old book?','Siv: Du har haft den i fem veckor!',['He has lost it','It is overdue','It is the wrong book'],1,'Five weeks is long.','Siv says the book is försenad (overdue): he has had it for five weeks.'),
pick('Choose the perfect tense.','Jag ___ boken.',['har läsa','har läst','har läser'],1,'Har + supine.','Perfect = har + supine: Jag har läst boken.'),
tile('Say: I have borrowed three books.',['Jag','har','lånat','tre','böcker.'],'Lånar becomes lånat.','Har + lånat: Jag har lånat tre böcker.'),
listen('Listen. What does Oskar say?','Jag har glömt mitt lånekort.',['I want a library card.','I have forgotten my library card.','I have found my library card.'],1,'Glömt = forgotten.','Jag har glömt = I have forgotten.'),
pick('What does lämna tillbaka mean?','Du måste lämna tillbaka boken.',['Borrow the book','Read the book','Return the book'],2,'Think of giving back.','Lämna tillbaka = to return something.'),
type('Write the supine.','Oskar har ___ tre böcker. (hitta)',['hittat'],'-ar verb: -at.','Hittar → hittat, so har hittat.'),
tile('Ask: Have you found anything?',['Har','du','hittat','något?'],'Har goes first in a question.','Questions turn har around: Har du hittat något?'),
pick('Which sentence has the correct word order?','',['Jag inte har börjat än.','Jag har börjat inte än.','Jag har inte börjat än.'],2,'Inte comes after har.','In a main clause inte comes right after har: Jag har inte börjat än.'),
pick('Story check: how long may you borrow books?','Siv: Man får bara låna böcker i fyra veckor.',['Four weeks','Five weeks','Two weeks'],0,'Look at what Siv says.','You may borrow books for fyra veckor (four weeks).'),
listen('Listen. What does the speaker ask?','Får jag låna den här boken?',['May I return this book?','May I read this book?','May I borrow this book?'],2,'Låna = borrow.','Får jag låna …? = May I borrow …?'),
type('Write the supine of har.','Du har ___ den i fem veckor!',['haft'],'Irregular: har → …','Har → haft is irregular: Du har haft den.'),
pick('Fill in the supine of göra.','Fatima har inte ___ läxan än.',['gör','gjort','göra'],1,'Irregular: gör → gjort.','Göra → har gjort: Fatima har inte gjort läxan än.'),
pick('Story check: how must it be at the library?','Siv: Det måste vara tyst på biblioteket.',['Quiet','Dark','Warm'],0,'Siv says Sch!','Tyst = quiet.'),
tile('Say: It must be quiet here.',['Det','måste','vara','tyst','här.'],'Måste + infinitive.','Det måste vara tyst här. No att after måste.'),
listen('Listen. What has happened?','Jag har läst boken två gånger.',['I will read the book twice.','I have read the book twice.','I read the book yesterday.'],1,'Har läst = have read.','Jag har läst = I have read.'),
type('Write the supine.','Jag har ___ efter min penna. (leta)',['letat'],'-ar verb: -at.','Letar → letat: Jag har letat efter min penna.'),
pick('Story check: what is Oskar’s homework about?','Oskar: Jag har en läxa om vikingar.',['Libraries','Vikings','Computers'],1,'Look at his first line.','His läxa (homework) is about vikingar.'),
tile('Say: We have read a book.',['Vi','har','läst','en','bok.'],'Läsa becomes läst.','Har + supine: Vi har läst en bok.')
],
boss:'Role-play at the library desk. One of you is the librarian, the other has a library card problem. Say what you have borrowed, what you have read, what you have forgotten and what you need to return. Then swap roles.'
};
LESSONS[19]={
unit:20,title:'My day',sv:'Min dag',place:'DAGEN',
rule:'Clock times, daily routine, reflexive verbs and days of the week',
reference:'Telling the time: Hur mycket är klockan? Klockan är sju. At a time you say klockan sju. Swedish counts towards the next hour for halves: halv åtta = 7:30 (half way to eight). Kvart över sex = 6:15, kvart i åtta = 7:45, tjugo över sju = 7:20, tjugo i åtta = 7:40. Some verbs take a reflexive word: jag duschar mig, du klär på dig, han klär på sig, vi klär på oss, ni klär på er, de klär på sig. Days are måndag, tisdag, onsdag, torsdag, fredag, lördag, söndag (not capitalised), and first, second, third are första, andra, tredje.',
intro:'It is Monday morning in the Lind household, and Elis has not realised it is a school day. Pappa, Maja and the clock all agree: hurry up, the bus will not wait.',
words:[
['klockan','the clock / o’clock'],['Hur mycket är klockan?','What time is it?'],['Klockan är sju.','It is seven o’clock.'],['halv åtta','7:30 (half past seven)'],['kvart över','quarter past'],['kvart i','quarter to'],['tjugo över / tjugo i','twenty past / twenty to'],['en minut','a minute'],
['vakna','to wake up'],['stiga upp','to get up'],['duscha mig','to shower (myself)'],['klä på mig','to get dressed'],['kamma mig','to comb my hair'],['borsta tänderna','to brush the teeth'],['äta frukost','to eat breakfast'],['en buss','a bus'],
['mig / dig / sig','myself / yourself / himself, herself, themselves'],['oss / er','ourselves / yourselves'],
['måndag','Monday'],['tisdag','Tuesday'],['onsdag','Wednesday'],['torsdag','Thursday'],['fredag','Friday'],['lördag','Saturday'],['söndag','Sunday'],
['första / andra / tredje','first / second / third'],['sedan','then'],['fredagsmys','cosy Friday evening']
],
story:{title:'Måndag morgon',lines:[
['Pappa: God morgon! Klockan är tjugo över sju. Nu måste ni stiga upp!','Pappa: Good morning! It is twenty past seven. You have to get up now!'],
['Elis: Vadå? Det är ju lördag!','Elis: What? It is Saturday!'],
['Pappa: Nej, det är måndag. Måndag är den första dagen i veckan.','Pappa: No, it is Monday. Monday is the first day of the week.'],
['Maja: Jag duschar mig först. Sedan klär jag på mig.','Maja: I shower first. Then I get dressed.'],
['Elis: Men skolan börjar inte nu, eller hur?','Elis: But school does not start now, does it?'],
['Maja: Jo, klockan åtta. Och bussen går kvart i åtta!','Maja: Yes, at eight o’clock. And the bus goes at a quarter to eight!'],
['Elis: Kvart i åtta?! Då måste jag duscha mig och klä på mig snabbt.','Elis: A quarter to eight?! Then I have to shower and get dressed fast.'],
['Pappa: Frukost är klar halv åtta.','Pappa: Breakfast is ready at half past seven.'],
['Maja: Ikväll har jag gitarr. På tisdag är det simning. Och på fredag är det fredagsmys!','Maja: Tonight I have guitar. On Tuesday it is swimming. And on Friday it is fredagsmys!'],
['Elis: Fredag är den bästa dagen. Borsta tänderna, kamma håret … åh nej.','Elis: Friday is the best day. Brush teeth, comb hair … oh no.'],
['Maja: Du måste borsta tänderna också, Elis!','Maja: You have to brush your teeth too, Elis!'],
['Pappa: Klockan är nu tjugo i åtta. Bussen går om fem minuter!','Pappa: It is now twenty to eight. The bus goes in five minutes!'],
['Elis: Jag är klar! Men var är min jacka?','Elis: I am ready! But where is my jacket?'],
['Maja: Du har den på dig!','Maja: You are wearing it!'],
['Pappa: Spring nu! Hej då!','Pappa: Run now! Bye!']
]},
tasks:[
pick('Story check: what day does Elis think it is?','Elis: Vadå? Det är ju lördag!',['Sunday','Saturday','Friday'],1,'Look at his first line.','Elis thinks it is lördag (Saturday), but it is Monday.'),
pick('Choose the right word.','Skolan börjar ___ åtta.',['halv','kvart','klockan'],2,'At a time = …?','Klockan åtta = at eight o’clock.'),
tile('Say: The bus goes at a quarter to eight.',['Bussen','går','kvart','i','åtta.'],'Kvart i = quarter to.','Kvart i åtta = 7:45.'),
listen('Listen. When is breakfast ready?','Frukost är klar halv åtta.',['At eight o’clock','At half past seven (7:30)','At half past eight (8:30)'],1,'Halv åtta is before eight.','Halv åtta means half way to eight: 7:30.'),
pick('What time is it?','Klockan är kvart över sex.',['6:45','5:45','6:15'],2,'Över = past.','Kvart över sex = quarter past six = 6:15.'),
type('Write the reflexive word.','Jag klär på ___.',['mig'],'Jag → mig.','Jag klär på mig = I get dressed.'),
tile('Say: Then I get dressed.',['Sedan','klär','jag','på','mig.'],'Verb second after sedan.','After sedan the verb comes next: Sedan klär jag på mig.'),
pick('Choose the reflexive word.','Pappa duschar ___ på kvällen.',['mig','dig','sig'],2,'Pappa = han → …','Han and hon use sig: Pappa duschar sig.'),
pick('Story check: when does the bus go?','Maja: Bussen går kvart i åtta!',['7:45','8:15','7:15'],0,'Kvart i = quarter to.','Kvart i åtta is 7:45.'),
listen('Listen. What does the speaker do?','Jag duschar mig varje morgon.',['I eat breakfast every morning.','I wake up every morning.','I shower every morning.'],2,'Duscha = shower.','Jag duschar mig varje morgon = I shower every morning.'),
type('Write the reflexive word.','Elis, du måste klä på ___ nu!',['dig'],'Du → dig.','Du klär på dig = you get dressed.'),
pick('Monday is the …','Måndag är den ___ dagen i veckan.',['första','andra','tredje'],0,'Number one.','Första = first. Monday is the first day of the week.'),
pick('Story check: what happens on Friday?','Maja: Och på fredag är det fredagsmys!',['Guitar','A cosy family evening','Swimming'],1,'Mys means cosy.','Fredagsmys is a cosy Friday evening, often with snacks and a film.'),
tile('Say: I brush my teeth.',['Jag','borstar','tänderna.'],'No reflexive word here.','Swedish says Jag borstar tänderna, without mig.'),
listen('Listen. What is the question?','Hur mycket är klockan?',['What time is it?','What day is it?','How much does it cost?'],0,'Klockan = the clock.','Hur mycket är klockan? = What time is it?'),
type('Write the missing word.','Klockan är tjugo ___ åtta.',['i'],'7:40 = twenty …', 'Tjugo i åtta = 7:40; tjugo över sju = 7:20.'),
pick('Story check: where is Elis’s jacket?','Maja: Du har den på dig!',['In the bus','He is wearing it','On the floor'],1,'Har den på dig.','Elis is already wearing it: Du har den på dig!'),
tile('Say: I wake up at seven o’clock.',['Jag','vaknar','klockan','sju.'],'Klockan + the hour.','Jag vaknar klockan sju = I wake up at seven.')
],
boss:'Tell your partner about your Monday. Say what time you wake up, when you shower and get dressed, when breakfast is, and when you leave. Then name your favourite day of the week and why. Swap roles and ask each other Hur mycket är klockan?'
};
LESSONS[20]={
unit:21,title:'At the market',sv:'På torget',place:'TORG',
rule:'Quantities, prices & ett paket / en burk',
reference:'Quantity words are followed directly by the thing, with no word for “of”: ett kilo äpplen, hundra gram ost, en liter mjölk, ett paket kaffe, en burk honung. Note that kilo is an ett-word and liter is an en-word. Ask the price with Vad kostar …? (Vad kostar äpplena?) and answer with Det kostar 25 kronor or, for the price per kilo, 25 kronor kilot. To order, say Jag vill ha … or Kan jag få …?, and the seller will total it up with Det blir 130 kronor.',
intro:'Selma and her morfar Folke are shopping at the Saturday market. Folke has a long list, a very short memory and, as it turns out, no wallet.',
words:[
['ett torg','a market square'],['ett kilo','a kilo'],['hundra gram','a hundred grams'],['en liter','a litre'],['ett paket','a packet'],['en burk','a jar / a tin'],
['ett äpple','an apple (pl. äpplen)'],['ett päron','a pear (pl. päron)'],['en banan','a banana (pl. bananer)'],['en gurka','a cucumber (pl. gurkor)'],['en tomat','a tomato (pl. tomater)'],['en morot','a carrot (pl. morötter)'],
['mjölk','milk'],['honung','honey'],['kaffe','coffee'],['ost','cheese'],
['en krona','a krona (pl. kronor)'],['Vad kostar …?','What does … cost?'],['Det kostar …','It costs …'],['kronor kilot','kronor per kilo'],
['Jag vill ha …','I would like …'],['Kan jag få …?','Can I have …?'],['Något mer?','Anything else?'],['Det blir …','That comes to …'],['tillsammans','altogether'],['en plånbok','a wallet'],['Varsågod.','Here you are.']
],
story:{title:'Lördag på torget',lines:[
['Berit: God morgon! Fina äpplen och päron i dag!','Berit: Good morning! Lovely apples and pears today!'],
['Selma: Hej! Vad kostar äpplena?','Selma: Hi! What do the apples cost?'],
['Berit: De kostar 25 kronor kilot.','Berit: They cost 25 kronor a kilo.'],
['Folke: Vi vill ha ett kilo äpplen, tack. Och en gurka.','Folke: We would like a kilo of apples, please. And a cucumber.'],
['Berit: Varsågod. Något mer?','Berit: Here you are. Anything else?'],
['Folke: Ja, jag vill också ha en liter mjölk och en burk honung.','Folke: Yes, I would also like a litre of milk and a jar of honey.'],
['Berit: Mjölken kostar 15 kronor och honungen kostar 60 kronor.','Berit: The milk costs 15 kronor and the honey costs 60 kronor.'],
['Selma: Morfar, vi behöver tomater också. Vad kostar de?','Selma: Grandpa, we need tomatoes too. What do they cost?'],
['Berit: Tomaterna kostar 40 kronor kilot.','Berit: The tomatoes cost 40 kronor a kilo.'],
['Folke: Då tar jag femhundra gram.','Folke: Then I’ll take five hundred grams.'],
['Berit: Det blir 130 kronor tillsammans.','Berit: That comes to 130 kronor altogether.'],
['Folke: Oj! Var är min plånbok? Den är hemma!','Folke: Oops! Where is my wallet? It’s at home!'],
['Selma: Ingen fara, morfar. Jag har pengar. Varsågod, Berit.','Selma: No worries, Grandpa. I have money. Here you are, Berit.'],
['Folke: Tack, Selma! Nästa gång betalar jag fika.','Folke: Thanks, Selma! Next time I’ll pay for the fika.']
]},
tasks:[
pick('Story check: what does Folke ask for first?','Folke: Vi vill ha ett kilo äpplen, tack. Och en gurka.',['A kilo of apples and a cucumber','A litre of milk and honey','Five hundred grams of tomatoes'],0,'Look at what comes after ett kilo.','He asks for ett kilo äpplen and en gurka before the other things.'),
pick('Choose the right measure.','Jag vill ha en ___ mjölk.',['kilo','burk','liter'],2,'Milk is a liquid.','Liquids are counted in liter: en liter mjölk.'),
tile('Say: I would like a kilo of apples.',['Jag','vill','ha','ett','kilo','äpplen.'],'Kilo is an ett-word.','Quantity + thing, with no “of”: ett kilo äpplen.'),
listen('Listen. What does Selma ask?','Vad kostar tomaterna?',['What do the tomatoes cost?','Where are the tomatoes?','How many tomatoes are there?'],0,'Vad kostar … = what does … cost.','Vad kostar tomaterna? = What do the tomatoes cost?'),
type('Write the verb for “costs”.','Honungen ___ 60 kronor.',['kostar'],'It is in the question Vad kostar …?','Kostar = costs. Use it for one thing or many.'),
pick('Which container goes with honey?','Jag vill ha en ___ honung.',['paket','kilo','burk'],2,'Think of a glass jar.','En burk = a jar or a tin. Honey comes in en burk.'),
pick('Story check: why can’t Folke pay?','Folke: Var är min plånbok? Den är hemma!',['His wallet is at home','The honey is too expensive','He has no apples'],0,'Plånbok = wallet.','He left his plånbok at home, so Selma pays.'),
tile('Say: Can I have a cucumber?',['Kan','jag','få','en','gurka?'],'Kan jag få …?','Kan jag få …? is a polite way to ask for something.'),
listen('Listen. What does Berit say?','Det blir 130 kronor tillsammans.',['It costs 30 kronor a kilo.','That comes to 130 kronor altogether.','You get 130 grams.'],1,'Tillsammans = altogether.','Det blir … = That comes to … (the total price).'),
type('Write the missing word.','Jag vill ha hundra ___ ost.',['gram'],'Hundra ___ = 100 …?','Hundra gram = a hundred grams. Gram does not change in the plural.'),
pick('Per kilo: choose the right ending.','Tomaterna kostar 40 kronor ___.',['kiloen','kilo','kilot'],2,'Kilo is an ett-word, so the ending is -t.','Kronor kilot = kronor per kilo. Kilo + t = kilot.'),
pick('Story check: what do the tomatoes cost?','Berit: Tomaterna kostar 40 kronor kilot.',['14 kronor a kilo','400 kronor a kilo','40 kronor a kilo'],2,'Read the numbers in the line carefully.','40 kronor a kilo, and Folke buys half a kilo.'),
tile('Say: What does the milk cost?',['Vad','kostar','mjölken?'],'Vad kostar …?','Vad kostar + the thing = What does it cost?'),
type('Write the missing word.','Vi vill ha ett ___ kaffe.',['paket'],'Coffee comes in a …','Ett paket kaffe = a packet of coffee. Paket is an ett-word.'),
listen('Listen. What does Berit ask?','Något mer?',['Which one do you want?','Is it for you?','Anything else?'],2,'She is waiting for more orders.','Något mer? = Anything else? A seller asks it after each order.'),
pick('Berit says: “Varsågod.” What do you answer?','Varsågod. – ___',['Tack!','Förlåt!','God morgon!'],0,'Someone hands you something.','Varsågod = here you are. Answer with Tack.'),
pick('Story check: who pays in the end?','Selma: Jag har pengar. Varsågod, Berit.',['Folke','Selma','Berit'],1,'Who has money?','Selma pays because Folke’s wallet is at home.')
],
boss:'Play a market stall with your parent. The seller names three things and their prices; the customer asks Vad kostar …?, orders with Jag vill ha … and Kan jag få …?, and then the seller says Det blir … kronor. Then swap roles.'
};
LESSONS[21]={
unit:22,title:'Moving in',sv:'Flytten',place:'FLYTT',
rule:'Place words (i, på, under, bredvid, framför) & ligger / står / sitter / hänger',
reference:'Swedish uses different verbs for where things are. Things that are lying flat use ligger (Boken ligger på bordet), upright things use står (Soffan står i vardagsrummet), things that are fixed or perched use sitter (Katten sitter på stolen), and things on a wall or from a ceiling use hänger (Spegeln hänger på väggen). Place words come before the noun: i (in), på (on), under (under), bredvid (next to) and framför (in front of). To ask where something is, say Var är …? or Var ska … stå? (Where should … stand?).',
intro:'Amir and his mum are moving into a new flat. The removal man is carrying boxes, the cat has vanished and somebody has put the coffee machine in the bathroom.',
words:[
['ett kök','a kitchen'],['ett vardagsrum','a living room'],['ett sovrum','a bedroom'],['ett badrum','a bathroom'],['en hall','a hallway'],
['en soffa','a sofa'],['ett bord','a table'],['en stol','a chair'],['en säng','a bed'],['en hylla','a shelf'],['en lampa','a lamp'],['en spegel','a mirror'],['en matta','a rug'],['ett kylskåp','a fridge'],['en kartong','a cardboard box'],
['ett fönster','a window'],['en vägg','a wall'],['ett tak','a ceiling'],
['i','in'],['på','on'],['under','under'],['bredvid','next to'],['framför','in front of'],
['ligger','lies / is (lying)'],['står','stands / is (upright)'],['sitter','sits / is (fixed or perched)'],['hänger','hangs'],
['flytta','to move (house)'],['tung','heavy'],['Var är …?','Where is …?']
],
story:{title:'Flyttdagen',lines:[
['Mamma: Nu flyttar vi in! Här är vårt nya hem.','Mum: Now we’re moving in! Here is our new home.'],
['Amir: Wow, det är stort! Var är mitt rum?','Amir: Wow, it’s big! Where is my room?'],
['Mamma: Ditt rum är bredvid badrummet. Där ska sängen stå.','Mum: Your room is next to the bathroom. The bed will stand there.'],
['Stefan: Var ska soffan stå?','Stefan: Where should the sofa stand?'],
['Mamma: I vardagsrummet, framför fönstret.','Mum: In the living room, in front of the window.'],
['Stefan: Och den här kartongen? Den är tung!','Stefan: And this box? It’s heavy!'],
['Mamma: Den ska stå i köket, bredvid kylskåpet.','Mum: It should stand in the kitchen, next to the fridge.'],
['Amir: Mamma, var är katten? Jag ser inte Måns!','Amir: Mum, where is the cat? I can’t see Måns!'],
['Mamma: Titta! Han sitter i en tom kartong under bordet.','Mum: Look! He’s sitting in an empty box under the table.'],
['Amir: Haha! Han tycker om flytten.','Amir: Haha! He likes the move.'],
['Mamma: Var är kaffekokaren? Jag behöver kaffe!','Mum: Where is the coffee maker? I need coffee!'],
['Stefan: Den ligger i en kartong i badrummet.','Stefan: It’s lying in a box in the bathroom.'],
['Mamma: I badrummet? Ha ha! Varför ligger den där?','Mum: In the bathroom? Ha ha! Why is it there?'],
['Amir: Spegeln hänger på väggen i hallen, och lampan hänger i taket.','Amir: The mirror is hanging on the wall in the hall, and the lamp is hanging from the ceiling.']
]},
tasks:[
pick('Story check: where will the sofa stand?','Mamma: I vardagsrummet, framför fönstret.',['In the living room, in front of the window','In the kitchen, next to the fridge','In Amir’s room, under the bed'],0,'Framför = in front of.','The sofa stands in the vardagsrum, framför fönstret.'),
pick('Choose the verb for an upright sofa.','Soffan ___ i vardagsrummet.',['hänger','ligger','står'],2,'A sofa is upright, on its legs.','Står is used for upright things: Soffan står …'),
pick('Choose the verb for a mirror on a wall.','Spegeln ___ på väggen.',['hänger','står','ligger'],0,'It is fixed on the wall.','Hänger = hangs. A mirror hänger på väggen.'),
tile('Say: The cat is sitting under the table.',['Katten','sitter','under','bordet.'],'Sitter + under + noun.','Katten sitter under bordet. Verb comes second.'),
listen('Listen. Where is the box?','Kartongen står bredvid kylskåpet.',['It is next to the fridge.','It is in the fridge.','It is under the fridge.'],0,'Bredvid = next to.','Bredvid = next to. Standing: står.'),
type('Write the missing place word.','Lampan hänger ___ taket.',['i'],'Hanging from the ceiling.','I taket = in the ceiling, which is how Swedish says on the ceiling.'),
type('Write the missing place word.','Boken ligger ___ bordet.',['på'],'On top of the table.','På = on. A book ligger på bordet.'),
pick('Story check: where is Måns the cat?','Mamma: Han sitter i en tom kartong under bordet.',['In a box under the table','On the new sofa','In the bathroom'],0,'Look for sitter.','Måns sitter i en tom kartong under bordet.'),
tile('Ask: Where should the sofa stand?',['Var','ska','soffan','stå?'],'Var starts the question.','Var ska … stå? = Where should … stand?'),
listen('Listen. Where is the cat?','Måns sitter på stolen.',['Måns is under the chair.','Måns is sitting on the chair.','Måns is next to the chair.'],1,'På = on.','Sitter på stolen = is sitting on the chair.'),
pick('Choose the right place word.','Stolen står ___ bordet.',['bredvid','under','på'],0,'Next to the table.','Bredvid = next to. Stolen står bredvid bordet.'),
pick('Story check: where is the coffee maker?','Stefan: Den ligger i en kartong i badrummet.',['In the kitchen','In a box in the bathroom','In the car'],1,'Look for badrummet.','The kaffekokare ligger i en kartong i badrummet.'),
tile('Say: The rug is lying in front of the sofa.',['Mattan','ligger','framför','soffan.'],'A rug lies flat.','Mattan ligger framför soffan.'),
type('Write the verb for a mirror on the wall.','Spegeln ___ på väggen.',['hänger'],'Hanging.','Hänger = hangs: Spegeln hänger på väggen.'),
pick('Choose the verb for the cat.','Katten ___ på soffan.',['hänger','står','sitter'],2,'The cat is perched there.','Sitter is used for something perched or fixed in place.'),
listen('Listen. What does Amir ask?','Var är mitt rum?',['Where is my room?','Where is my bed?','Whose room is this?'],0,'Var = where.','Var är mitt rum? = Where is my room?'),
pick('Story check: where is Amir’s room?','Mamma: Ditt rum är bredvid badrummet.',['In front of the kitchen','Next to the bathroom','Under the living room'],1,'Bredvid = next to.','Amir’s room is bredvid badrummet.'),
pick('Which word means “in front of”?','Soffan står ___ fönstret.',['under','bredvid','framför'],2,'Think of what you see first.','Framför = in front of.')
],
boss:'Pretend you are moving into a new flat with your parent. One of you is the removal person asking Var ska … stå? about five things. The other answers with i, på, under, bredvid or framför and the right verb (står, ligger, sitter, hänger). Then swap roles.'
};
LESSONS[22]={
unit:23,title:'Swedish traditions',sv:'Midsommar och Lucia',place:'FIRA',
rule:'Past tense stories & comparing (-are, än)',
reference:'To tell what happened, use the past tense. Verbs ending in -a usually take -ade: fira → firade, dansa → dansade, plocka → plockade. Many common verbs are irregular and you just learn them: är → var, har → hade, går → gick, äter → åt, dricker → drack, sjunger → sjöng, bär → bar, gör → gjorde. The past form is the same for every person: jag åt, vi åt. To compare, add -are to an adjective (varm → varmare, mörk → mörkare, ljus → ljusare) and use än for “than”: Natten är ljusare än dagen.',
intro:'In the school lunchroom Elsa tells her Spanish friend Daniel about Lucia and midsommar. They end up comparing Swedish and Spanish summer nights.',
words:[
['ett ljus','a candle / a light'],['en klänning','a dress'],['ett luciatåg','a Lucia procession'],['glögg','mulled wine (non-alcoholic for kids)'],['en lussekatt','a saffron bun'],['en pepparkaka','a ginger biscuit'],
['en midsommarstång','a maypole (midsummer pole)'],['en blomma','a flower'],['sill','pickled herring'],['nypotatis','new potatoes'],['jordgubbar','strawberries'],
['i går','yesterday'],['i somras','last summer'],['fira','to celebrate'],['firade','celebrated'],['dansade','danced'],
['sjöng','sang'],['drack','drank'],['åt','ate'],['gick','went / walked'],['bar','carried / wore'],['hade','had'],['gjorde','did / made'],['var','was / were'],
['mörk','dark'],['varm','warm'],['varmare','warmer'],['ljusare','lighter / brighter'],['än','than']
],
story:{title:'Fika i skolan',lines:[
['Daniel: Hej Elsa! Varför hade du en vit klänning i går?','Daniel: Hi Elsa! Why did you have a white dress yesterday?'],
['Elsa: Det var Lucia! Jag gick i luciatåget och bar ett ljus.','Elsa: It was Lucia! I walked in the Lucia procession and carried a candle.'],
['Daniel: Vad bra! Vad sjöng ni?','Daniel: How nice! What did you sing?'],
['Elsa: Vi sjöng om ljuset. Min bror glömde texten och sjöng fel, haha.','Elsa: We sang about the light. My brother forgot the words and sang wrong, haha.'],
['Daniel: Åt ni något gott?','Daniel: Did you eat something tasty?'],
['Elsa: Ja, vi drack glögg och åt lussekatter och pepparkakor.','Elsa: Yes, we drank glögg and ate saffron buns and ginger biscuits.'],
['Daniel: Lussekatter? Vad är det?','Daniel: Lussekatter? What are those?'],
['Elsa: Det är söta saffransbullar. De är gula.','Elsa: They are sweet saffron buns. They are yellow.'],
['Daniel: Och midsommar? Vad gjorde ni då?','Daniel: And midsummer? What did you do then?'],
['Elsa: I somras firade vi hos farmor. Vi plockade blommor och dansade runt stången.','Elsa: Last summer we celebrated at my farmor’s. We picked flowers and danced around the pole.'],
['Daniel: Vad åt ni?','Daniel: What did you eat?'],
['Elsa: Vi åt sill, nypotatis och jordgubbar. Det var en lång dag!','Elsa: We ate herring, new potatoes and strawberries. It was a long day!'],
['Daniel: I Spanien är sommarnatten varmare än här, men ni har ljusare nätter!','Daniel: In Spain the summer night is warmer than here, but you have lighter nights!'],
['Elsa: Ja, i juni är det nästan inte mörkt alls.','Elsa: Yes, in June it is almost not dark at all.']
]},
tasks:[
pick('Story check: what did Elsa carry in the Lucia procession?','Elsa: Jag gick i luciatåget och bar ett ljus.',['A flower','A candle','A cake'],1,'Ljus = candle / light.','Elsa bar ett ljus (carried a candle).'),
pick('Choose the past tense of “är”.','I går ___ det Lucia.',['är','vara','var'],2,'Yesterday = in the past.','Är → var. I går var det Lucia = Yesterday it was Lucia.'),
tile('Say: We ate saffron buns and ginger biscuits.',['Vi','åt','lussekatter','och','pepparkakor.'],'Åt = ate.','Äter → åt. Past tense is the same for every person.'),
tile('Say: I walked in the Lucia procession.',['Jag','gick','i','luciatåget.'],'Går → gick.','Gick = went / walked.'),
listen('Listen. What did they do?','Vi dansade runt stången.',['We danced around the pole.','We sat next to the pole.','We sang about the pole.'],0,'Dansade is like “dance”.','Dansa → dansade. Runt = around.'),
type('Write the past tense of “fira”.','I somras ___ vi midsommar hos farmor.',['firade'],'Fira + ade.','Verbs ending in -a usually take -ade in the past: fira → firade.'),
type('Write the past tense of “dricker”.','Jag ___ glögg i går.',['drack'],'Dricker → …','Dricker → drack is one to learn by heart.'),
pick('Story check: what are lussekatter?','Elsa: Det är söta saffransbullar. De är gula.',['Salty fish','Sweet yellow buns','Cold strawberry soup'],1,'Söta = sweet, gula = yellow.','Lussekatter are sweet saffransbullar, yellow in colour.'),
tile('Say: My brother sang wrong.',['Min','bror','sjöng','fel.'],'Sjunger → sjöng.','Sjöng = sang.'),
pick('Choose the past tense.','Vi ___ i luciatåget.',['går','gå','gick'],2,'The Lucia procession was yesterday.','Går → gick.'),
listen('Listen. What did they eat?','Vi åt sill och nypotatis.',['We ate herring and new potatoes.','We ate buns and strawberries.','We drank milk and ate fish.'],0,'Sill = herring.','Åt = ate. Sill och nypotatis are traditional midsummer food.'),
pick('Compare the nights.','Sommarnatten är ___ än vinternatten.',['ljus','ljusare','ljusast'],1,'Add -are for “more”.','Ljus → ljusare. Use än for “than”.'),
type('Write the missing word.','Spanien är varmare ___ Sverige.',['än'],'Warmer ___ Sweden.','Än = than.'),
tile('Say: The night was darker than the day.',['Natten','var','mörkare','än','dagen.'],'Mörk + are.','Mörk → mörkare. Är → var in the past.'),
pick('Story check: how dark is it in Sweden in June?','Elsa: I juni är det nästan inte mörkt alls.',['Very dark','Almost not dark at all','Dark all day'],1,'Mörkt = dark.','In June the nights are almost light.'),
listen('Listen. What does Elsa say?','Det var en lång dag!',['It was a long day!','It is a long day!','It will be a long day!'],0,'Var = past tense.','Det var … = It was …'),
pick('Choose the past tense of “har”.','Förra året ___ jag en hund.',['hade','har','haft'],0,'Har → …','Har → hade. Förra året = last year.'),
pick('Story check: where did Elsa celebrate midsommar?','Elsa: I somras firade vi hos farmor.',['At school','At her farmor’s','In Spain'],1,'Farmor = father’s mother.','They celebrated hos farmor.')
],
boss:'Tell your parent about a celebration or a special day you remember: say three things you did in the past tense (e.g. Jag åt …, Vi dansade …, Vi sjöng …). Then compare two things with -are and än, like a summer night and a winter night. Then swap roles.'
};
LESSONS[23]={
unit:24,title:'First day at work',sv:'Första dagen på jobbet',place:'JOBB',
rule:'Polite requests (Kan du …? / Skulle du kunna …?) & introducing yourself',
reference:'To ask someone for a favour, use Kan du …? or the softer Skulle du kunna …?, followed by an infinitive without att: Kan du visa mig kontoret? Skulle du kunna skicka mejlet? Say Kan jag få …? to ask for something and answer Javisst, Självklart or Gärna. To introduce yourself, say Jag heter … and Jag är ny här, and greet the other person with Trevligt att träffas.',
intro:'Maja is starting a new office job today. She has to meet her boss, find her desk, get a password and survive the morning with no coffee.',
words:[
['en kollega','a colleague'],['en chef','a boss / manager'],['ett möte','a meeting'],['ett mejl','an email'],['ett lunchrum','a lunchroom'],['ett kontor','an office'],
['en dator','a computer'],['ett lösenord','a password'],['en kaffemaskin','a coffee machine'],['en penna','a pen'],['en kopp','a cup'],
['Jag heter …','My name is …'],['Jag är ny här.','I am new here.'],['Trevligt att träffas.','Nice to meet you.'],['Välkommen!','Welcome!'],
['Kan du …?','Can you …?'],['Skulle du kunna …?','Could you …?'],['Kan jag få …?','Can I have …?'],
['Javisst.','Of course.'],['Självklart.','Of course / naturally.'],['Gärna.','Gladly / with pleasure.'],['Ingen fara.','No worries.'],
['visa','to show'],['hjälpa','to help'],['skicka','to send'],['klockan tio','at ten o’clock'],['trasig','broken'],['om en stund','in a while']
],
story:{title:'Välkommen till jobbet',lines:[
['Karin: Välkommen till oss! Jag heter Karin och jag är chef här.','Karin: Welcome! My name is Karin and I am the manager here.'],
['Maja: Hej Karin! Jag heter Maja Ek. Jag är ny här. Trevligt att träffas.','Maja: Hi Karin! My name is Maja Ek. I am new here. Nice to meet you.'],
['Karin: Trevligt att träffas också. Det här är Johan, din kollega.','Karin: Nice to meet you too. This is Johan, your colleague.'],
['Johan: Hej Maja! Kom, så visar jag dig kontoret.','Johan: Hi Maja! Come, and I’ll show you the office.'],
['Maja: Tack! Kan du visa mig var jag ska sitta?','Maja: Thanks! Can you show me where I will sit?'],
['Johan: Javisst. Du sitter där, vid fönstret. Här är din dator.','Johan: Of course. You sit there, by the window. Here is your computer.'],
['Maja: Skulle du kunna hjälpa mig med lösenordet?','Maja: Could you help me with the password?'],
['Johan: Självklart. Du får ett mejl från IT om en stund.','Johan: Of course. You’ll get an email from IT in a while.'],
['Karin: Vi har möte klockan tio. Skulle du kunna komma till rum tre?','Karin: We have a meeting at ten o’clock. Could you come to room three?'],
['Maja: Ja, gärna. Kan jag få en penna?','Maja: Yes, gladly. Can I have a pen?'],
['Johan: Varsågod, här är en penna. Vill du ha en kopp kaffe före mötet?','Johan: Here you are, here is a pen. Would you like a cup of coffee before the meeting?'],
['Maja: Ja tack, gärna!','Maja: Yes please, gladly!'],
['Johan: Oj, kaffemaskinen i lunchrummet är trasig!','Johan: Oh no, the coffee machine in the lunchroom is broken!'],
['Maja: Ingen fara. Jag tar te. Första dagen går bra!','Maja: No worries. I’ll have tea. The first day is going well!']
]},
tasks:[
pick('Story check: who is Karin?','Karin: Jag heter Karin och jag är chef här.',['Maja’s colleague','The manager','A new employee'],1,'Chef = boss.','Karin says she is chef here, so she is the manager.'),
pick('Introduce yourself.','Hej! Jag ___ Maja. Jag är ny här.',['heter','kan','vill'],0,'My name is …','Jag heter … = My name is …'),
tile('Say: Nice to meet you.',['Trevligt','att','träffas.'],'Three words.','Trevligt att träffas is the standard polite greeting at a first meeting.'),
listen('Listen. What does Maja ask?','Kan du visa mig kontoret?',['Can you show me the office?','Can you send me the email?','Do you like the office?'],0,'Visa = show.','Kan du visa mig …? = Can you show me …?'),
type('Write the missing verb.','Skulle du kunna ___ mig med lösenordet?',['hjälpa'],'Help.','Skulle du kunna + infinitive: Skulle du kunna hjälpa mig?'),
pick('Which request is the softest and most polite?','Maja wants Johan to send the email.',['Skicka mejlet!','Kan du skicka mejlet?','Skulle du kunna skicka mejlet?'],2,'Skulle = “would”.','Skulle du kunna …? is the most polite way to ask.'),
pick('Story check: where will Maja sit?','Johan: Du sitter där, vid fönstret.',['By the window','In the lunchroom','In room three'],0,'Vid = by / at.','Maja sits vid fönstret, by the window.'),
tile('Ask: Could you send the email?',['Skulle','du','kunna','skicka','mejlet?'],'Infinitive after kunna.','Skulle du kunna + infinitive (skicka).'),
listen('Listen. What does Karin say?','Vi har möte klockan tio.',['We have lunch at ten o’clock.','We have a meeting at ten o’clock.','We have a coffee break at ten o’clock.'],1,'Möte = meeting.','Möte = meeting. Klockan tio = at ten o’clock.'),
type('Write the missing word.','Jag är ___ här. Det är min första dag.',['ny'],'The opposite of gammal.','Jag är ny här = I am new here.'),
pick('Someone asks you for a favour. Say yes.','Kan du hjälpa mig? – ___',['Ingen fara.','Javisst.','Trevligt att träffas.'],1,'Of course.','Javisst = of course. Självklart and Gärna also work.'),
pick('Story check: what is wrong in the lunchroom?','Johan: Oj, kaffemaskinen i lunchrummet är trasig!',['The coffee machine is broken','There is no cup','The lunchroom is closed'],0,'Trasig = broken.','The kaffemaskin is trasig, so Maja takes tea.'),
tile('Ask: Can I have a pen?',['Kan','jag','få','en','penna?'],'Kan jag få …?','Kan jag få + the thing = Can I have …?'),
type('Write the missing word.','Vi har ett ___ klockan tio.',['möte'],'It is in room three.','Ett möte = a meeting.'),
listen('Listen. What does Johan say?','Du får ett mejl om en stund.',['You will get an email in a while.','You must send an email now.','You wrote an email yesterday.'],0,'Mejl = email.','Om en stund = in a while.'),
pick('Story check: what does Maja choose instead of coffee?','Maja: Jag tar te.',['Juice','Tea','Water'],1,'Te = tea.','The coffee machine is broken, so Maja tar te.'),
pick('Answer a thank-you with “no worries”.','Tack för hjälpen! – ___',['Ingen fara.','Skulle du kunna?','Jag heter Johan.'],0,'Say it is no trouble.','Ingen fara = no worries. A relaxed answer to tack.')
],
boss:'Role-play a first day at an office. One of you is the new employee who introduces themself (Jag heter …, Jag är ny här, Trevligt att träffas) and asks three polite favours with Kan du …? or Skulle du kunna …?; the other is the colleague who answers Javisst or Självklart. Then swap roles.'
};

/* ---- Vardag för barn: five everyday kid-life missions (original content) ---- */
LESSONS[24]={
unit:25,title:'First lesson at school',sv:'Skoldagen',place:'KLASSRUM',
rule:'Asking for help in class',
reference:'Use Kan jag få låna …? to borrow something. Use Jag förstår inte or Kan du upprepa? when you do not understand. A command uses the bare verb: Öppna boken! Sätt dig! Räck upp handen!',
intro:'Leo is new in class 4B. Help him borrow a pen, ask what a word means, and get through the first lesson.',
words:[
['en lärare','a teacher'],['en elev','a pupil'],['ett klassrum','a classroom'],['en lektion','a lesson'],['en rast','a break'],['en läxa','homework'],['ett prov','a test'],
['en penna','a pen'],['ett suddgummi','an eraser'],['en bok','a book'],['matte','maths'],['svenska','Swedish (subject)'],['idrott','PE'],
['Sätt dig!','Sit down!'],['Öppna boken.','Open the book.'],['Räck upp handen.','Raise your hand.'],['Jag förstår inte.','I do not understand.'],['Kan du upprepa?','Can you repeat that?'],
['Vad betyder …?','What does … mean?'],['Kan jag få låna …?','Can I borrow …?'],['Ursäkta, jag är sen.','Excuse me, I am late.'],['sen','late'],['tyst','quiet'],['matsalen','the canteen']
],
story:{title:'Första lektionen',lines:[
['Läraren: God morgon, klass! Sätt er, tack.','Teacher: Good morning, class! Sit down, please.'],
['Leo: Ursäkta, jag är sen.','Leo: Excuse me, I am late.'],
['Läraren: Det gör inget, Leo. Sätt dig bredvid Nora.','Teacher: That is OK, Leo. Sit next to Nora.'],
['Läraren: Öppna boken på sidan tio.','Teacher: Open the book on page ten.'],
['Leo: Nora, jag har ingen penna. Kan jag få låna en?','Leo: Nora, I have no pen. Can I borrow one?'],
['Nora: Javisst! Varsågod.','Nora: Of course! Here you are.'],
['Läraren: Er läxa till fredag är på sidan elva.','Teacher: Your homework for Friday is on page eleven.'],
['Leo: Jag förstår inte. Vad betyder läxa?','Leo: I do not understand. What does läxa mean?'],
['Nora: Det är arbete som man gör hemma.','Nora: It is work that you do at home.'],
['Läraren: Räck upp handen om ni har en fråga.','Teacher: Raise your hand if you have a question.'],
['Leo: Tack, Nora. Du är snäll.','Leo: Thanks, Nora. You are kind.']
]},
tasks:[
pick('Leo is late. What does he say?','Leo walks in after the lesson has started.',['Ursäkta, jag är sen.','Sätt dig!','Jag förstår inte.'],0,'Sen = late.','Ursäkta, jag är sen means Excuse me, I am late.'),
tile('Ask to borrow a pen.',['Kan','jag','få','låna','en','penna?'],'Can / I / get / borrow / a / pen','Kan jag få låna … is the polite way to borrow something.'),
pick('Choose the right article.','___ penna',['en','ett'],0,'Penna is an en word.','En penna: a pen.'),
pick('Choose the right article.','___ suddgummi',['en','ett'],1,'Learn it as a pair.','Ett suddgummi: an eraser.'),
listen('Listen. What does the teacher say?','Öppna boken på sidan tio.',['Open the book on page ten.','Close the book on page ten.','Open the book on page two.'],0,'Öppna = open. Sidan tio = page ten.','Öppna boken på sidan tio = Open the book on page ten.'),
tile('Tell a pupil to sit down.',['Sätt','dig!'],'Sit yourself down.','A command is the bare verb: sätt. Add dig for “yourself”.'),
pick('You do not know a word. What do you ask?','The teacher uses the word “läxa”.',['Vad betyder läxa?','Var är läxa?','Vem är läxa?'],0,'Betyder = means.','Vad betyder …? = What does … mean?'),
type('Write “homework”.','Läraren: Din ___ är på sidan elva.',['läxa'],'It is an en word ending in -a.','Läxa = homework.'),
pick('Story check: where does Leo sit?','Läraren: Sätt dig bredvid Nora.',['Next to Nora','Next to the teacher','At the back'],0,'Bredvid = next to.','Bredvid Nora = next to Nora.'),
tile('Say that you do not understand.',['Jag','förstår','inte.'],'I / understand / not','In a statement, inte comes after the verb.'),
listen('Listen. What does Leo ask?','Kan du upprepa?',['Can you repeat that?','Can you help me?','Can I borrow a pen?'],0,'Upprepa = repeat.','Kan du upprepa? = Can you repeat that?'),
pick('Nora lends Leo a pen. What does Leo say?','Nora: Varsågod.',['Tack!','Ursäkta!','Hej då!'],0,'Say thanks.','Tack! is the usual answer to varsågod.'),
type('Write “quiet”.','Läraren: Var ___, tack.',['tyst'],'It starts with t.','Var tyst = be quiet.'),
pick('Story check: what is the homework for Friday?','Läraren: Er läxa till fredag är på sidan elva.',['Page eleven','Page ten','Read a book'],0,'Fredag = Friday.','The homework is on page eleven.'),
pick('Which sentence is a command?','The teacher talks to the class.',['Räck upp handen.','Jag räcker upp handen.','Han räcker upp handen.'],0,'A command has no subject.','Räck upp handen! has no jag or han: it is a command.')
],
boss:'Role-play the first lesson. One of you is the teacher and gives three commands (Öppna boken, Sätt dig, Räck upp handen). The other is the pupil who borrows a pen, says Jag förstår inte and asks Vad betyder …? Then swap roles.'
};
LESSONS[25]={
unit:26,title:'Can I join in?',sv:'Leken',place:'LEKPARK',
rule:'Inviting and asking permission',
reference:'Use Vill du …? to invite someone: Vill du leka? After vill, kan and får the verb stays in the infinitive: Vill du spela? Får jag vara med? Turns: Det är min tur. Din tur!',
intro:'Nora and Leo meet Elias and Maja at the playground. Help them play fair, take turns and say sorry.',
words:[
['en kompis','a friend'],['en lekplats','a playground'],['en boll','a ball'],['ett spel','a game'],['ett kort','a card'],['en gunga','a swing'],
['leka','to play'],['vara med','to join in'],['vinna','to win'],['förlora','to lose'],['fuska','to cheat'],['dela','to share'],['bjuda hem','to invite home'],
['rolig','fun'],['tråkig','boring'],['snäll','kind'],
['Vill du leka?','Do you want to play?'],['Får jag vara med?','May I join in?'],['Det är min tur.','It is my turn.'],['Din tur!','Your turn!'],
['Förlåt.','Sorry.'],['Det gör inget.','Never mind.'],['Det var kul!','That was fun!'],['självklart','of course']
],
story:{title:'På lekplatsen',lines:[
['Nora: Hej, Elias! Vill du leka med oss?','Nora: Hi, Elias! Do you want to play with us?'],
['Elias: Ja gärna! Vad ska vi leka?','Elias: Yes, please! What shall we play?'],
['Leo: Vi kan spela kort. Jag har en kortlek.','Leo: We can play cards. I have a pack of cards.'],
['Maja: Hej! Får jag vara med?','Maja: Hi! May I join in?'],
['Nora: Ja, självklart! Sätt dig här.','Nora: Yes, of course! Sit here.'],
['Leo: Det är min tur.','Leo: It is my turn.'],
['Elias: Nej, det är min tur! Du fuskar!','Elias: No, it is my turn! You are cheating!'],
['Leo: Förlåt, jag glömde. Det är din tur.','Leo: Sorry, I forgot. It is your turn.'],
['Elias: Det gör inget.','Elias: Never mind.'],
['Maja: Jag vinner!','Maja: I am winning!'],
['Nora: Grattis, Maja! Det var kul!','Nora: Congratulations, Maja! That was fun!'],
['Maja: Kan ni komma hem till mig i morgon?','Maja: Can you come to my place tomorrow?']
]},
tasks:[
pick('Invite a friend to play.','At the playground you see Elias.',['Vill du leka?','Har du leka?','Är du leka?'],0,'Vill = want.','After vill, use the infinitive: leka.'),
tile('Ask to join in.',['Får','jag','vara','med?'],'May / I / be / with','Får jag vara med? = May I join in?'),
pick('It is Leo’s turn. What does Nora say?','Leo waits. Nora says:',['Din tur!','Min tur!','Hans tur!'],0,'Din = your.','Din tur! = Your turn!'),
listen('Listen. What does Leo say?','Det är min tur.',['It is my turn.','It is your turn.','It is not fun.'],0,'Min = my.','Det är min tur = It is my turn.'),
pick('Elias thinks Leo breaks the rules.','Elias: Du ___!',['fuskar','vinner','leker'],0,'Fuska = to cheat.','Du fuskar = You are cheating.'),
tile('Say sorry and that you forgot.',['Förlåt,','jag','glömde.'],'Sorry, I forgot.','Glömde is the past tense of glömma.'),
pick('Choose the kind answer to Förlåt.','Leo: Förlåt!',['Det gör inget.','Jag fuskar.','Du förlorar.'],0,'Say it is no problem.','Det gör inget = Never mind.'),
type('Write “fun”.','Det var ___!',['kul','roligt'],'Short and starts with k, or longer and starts with r.','Det var kul / roligt = That was fun.'),
pick('Story check: who asks to join in?','Maja: Får jag vara med?',['Maja','Elias','Leo'],0,'Look at who speaks.','Maja asks Får jag vara med?'),
tile('Invite a friend to your home.',['Kan','du','komma','hem','till','mig?'],'Can / you / come / home / to / me','After kan the verb is in the infinitive: komma.'),
pick('Which verb form is right?','Vill du ___ fotboll?',['spela','spelar','spelade'],0,'After vill: the infinitive.','Vill du spela fotboll? Vill + infinitive.'),
listen('Listen. What does Maja say?','Jag vinner!',['I am winning.','I am losing.','I am cheating.'],0,'Vinna = to win.','Jag vinner = I win / I am winning.'),
pick('Story check: what do Leo and Nora want to play?','Leo: Vi kan spela kort.',['Cards','Football','A video game'],0,'Kort = cards.','Vi kan spela kort = We can play cards.'),
type('Write “friend”.','Elias är min ___.',['kompis'],'It starts with k and ends in -is.','En kompis = a friend.'),
pick('Choose the nice thing to say after a game.','The game is over.',['Det var kul!','Du fuskar!','Det är min tur!'],0,'Be a good winner or loser.','Det var kul! = That was fun!')
],
boss:'Invent a game for three kids. One invites (Vill du leka?), one asks to join (Får jag vara med?) and everyone takes turns (Min tur, din tur). Say sorry once and answer with Det gör inget.'
};
LESSONS[26]={
unit:27,title:'The big match',sv:'Matchen',place:'IDROTTSHALL',
rule:'Sport words, score and past tense',
reference:'Say what you do in the present: Jag tränar på tisdagar. Say how it ended in the past: Vi vann! (vinna – vann). Read the score with mot: tre mot två = 3–2. Cheer with Heja! and praise with Bra jobbat!',
intro:'Nora and Leo play their first match for the school team. Help them pass, score and celebrate.',
words:[
['en match','a match'],['ett lag','a team'],['en spelare','a player'],['en tränare','a coach'],['en domare','a referee'],['ett mål','a goal'],['en poäng','a point'],
['fotboll','football'],['simning','swimming'],['träna','to train'],['springa','to run'],['kasta','to throw'],['fånga','to catch'],['sparka','to kick'],['vinna','to win'],['förlora','to lose'],
['oavgjort','a draw'],['heja','to cheer'],['trött','tired'],['snabb','fast'],
['Bra jobbat!','Well done!'],['Hur gick matchen?','How did the match go?'],['Vi vann med tre mot två.','We won three–two.'],['Passa!','Pass!']
],
story:{title:'Matchen',lines:[
['Tränaren: I dag spelar vi match mot Björkskolan.','Coach: Today we play a match against Björkskolan.'],
['Nora: Jag är nervös!','Nora: I am nervous!'],
['Tränaren: Lugn. Spring, passa och ha kul!','Coach: Stay calm. Run, pass and have fun!'],
['Leo: Passa, Nora!','Leo: Pass, Nora!'],
['Nora: Där är målet! Jag skjuter!','Nora: There is the goal! I shoot!'],
['Domaren: Mål! Ett–noll till Nora och Leos lag!','Referee: Goal! One–nil to Nora and Leo’s team!'],
['Leo: Bra jobbat, Nora!','Leo: Well done, Nora!'],
['Tränaren: Nu är det paus. Drick vatten!','Coach: Now it is half-time. Drink some water!'],
['Nora: Jag är jättetrött men glad.','Nora: I am really tired but happy.'],
['Domaren: Matchen är slut. Det blev tre mot två till Nora och Leos lag.','Referee: The match is over. It ended three–two to Nora and Leo’s team.'],
['Leo: Vi vann! Heja laget!','Leo: We won! Go team!']
]},
tasks:[
pick('What does the coach say about today?','Tränaren: I dag spelar vi match.',['We play a match today.','We train tomorrow.','We swim today.'],0,'I dag = today.','I dag spelar vi match = Today we play a match.'),
tile('Shout to a team mate: Pass, Nora!',['Passa,','Nora!'],'Pass, Nora!','Passa is a command: the bare verb.'),
listen('Listen. What does the referee say?','Mål!',['Goal!','Stop!','Time!'],0,'Mål = goal.','Mål! = Goal!'),
pick('Choose the right article.','___ mål',['en','ett'],1,'Mål is an ett word.','Ett mål: a goal.'),
type('Write “the team”.','Heja ___!',['laget'],'The ending -et means “the” here.','Heja laget! = Go team!'),
pick('Story check: what is the final score?','Domaren: Det blev tre mot två.',['3–2','2–3','3–3'],0,'Mot = against.','Tre mot två = 3–2.'),
tile('Say: We won!',['Vi','vann!'],'We / won','Vann is the past tense of vinna.'),
pick('Choose the past tense of vinna.','I går ___ vi matchen.',['vann','vinner','vinna'],0,'I går = yesterday, so past tense.','I går vann vi matchen.'),
listen('Listen. How does Nora feel?','Jag är jättetrött men glad.',['Very tired but happy','Very hungry','Angry and sad'],0,'Trött = tired.','Jättetrött men glad = very tired but happy.'),
pick('Which word means that nobody won?','Matchen slutade ___.',['oavgjort','snabb','trött'],0,'The score is equal.','Oavgjort = a draw.'),
tile('Ask how the match went.',['Hur','gick','matchen?'],'How / went / the match','Gick is the past tense of gå.'),
pick('Who is the referee?','Someone blows a whistle and stops the game.',['Domaren','Tränaren','Spelaren'],0,'He or she decides the rules.','Domaren is the referee.'),
type('Write “to run”.','Jag kan ___ snabbt.',['springa'],'It starts with sp.','Springa = to run.'),
pick('Story check: when do the players drink water?','Tränaren: Nu är det paus. Drick vatten!',['At half-time','Before the match','After the match'],0,'Paus = break.','Paus = a break in the game.'),
pick('Choose the nice thing to say to a team mate.','Nora scores a goal.',['Bra jobbat!','Du fuskar!','Förlåt!'],0,'Say well done.','Bra jobbat! = Well done!')
],
boss:'Commentate a short match. One of you describes what happens (Han springer! Hon skjuter! Mål!); the other is the coach who shouts Passa! and Bra jobbat! At the end say the score with mot.'
};
LESSONS[27]={
unit:28,title:'Dinner at home',sv:'Hemma',place:'HEMMA',
rule:'Rooms, chores and “the” on the end',
reference:'Put “the” on the end of the noun: ett kök → köket, en säng → sängen, ett fönster → fönstret. Ask for help with Kan du hjälpa mig? and share chores with Det är din tur att diska.',
intro:'It is evening at Nora’s home. Help set the table, wash up and get ready for bed.',
words:[
['ett kök','a kitchen'],['ett sovrum','a bedroom'],['ett badrum','a bathroom'],['ett vardagsrum','a living room'],['en säng','a bed'],['en soffa','a sofa'],['en lampa','a lamp'],['ett fönster','a window'],
['en middag','dinner'],['en tallrik','a plate'],['disk','dishes'],['duka','to set the table'],['diska','to wash up'],['torka','to dry'],['städa','to tidy up'],['bädda','to make a bed'],['laga mat','to cook'],['hjälpa till','to help out'],['sova','to sleep'],['borsta tänderna','to brush your teeth'],
['Middagen är klar!','Dinner is ready!'],['Det är din tur att diska.','It is your turn to wash up.'],['Dags att sova!','Time to sleep!'],['Kan du hjälpa mig?','Can you help me?']
],
story:{title:'Middag hemma',lines:[
['Pappa: Middagen är snart klar! Kan du duka, Nora?','Dad: Dinner is nearly ready! Can you set the table, Nora?'],
['Nora: Javisst. Var är tallrikarna?','Nora: Sure. Where are the plates?'],
['Pappa: I köket, bredvid fönstret.','Dad: In the kitchen, next to the window.'],
['Leo: Jag hjälper till. Jag tar glasen.','Leo: I will help out. I will take the glasses.'],
['Pappa: Middagen är klar! Kom och sätt er!','Dad: Dinner is ready! Come and sit down!'],
['Nora: Mmm, det luktar gott!','Nora: Mmm, it smells good!'],
['Pappa: Det är din tur att diska, Leo.','Dad: It is your turn to wash up, Leo.'],
['Leo: Okej. Kan du hjälpa mig, Nora?','Leo: OK. Can you help me, Nora?'],
['Nora: Ja, jag torkar.','Nora: Yes, I will dry.'],
['Mamma: Tack, barn! Nu är det dags att borsta tänderna.','Mum: Thanks, kids! Now it is time to brush your teeth.'],
['Leo: Och sedan sova. God natt!','Leo: And then sleep. Good night!']
]},
tasks:[
pick('Dad says dinner is ready. What does he say?','Everyone is hungry.',['Middagen är klar!','Frukosten är klar!','Disken är klar!'],0,'Middag = dinner.','Middagen är klar! = Dinner is ready!'),
pick('Add “the”: ett kök →','Köket is the kitchen.',['köket','kökt','köken'],0,'Ett words get -et.','Ett kök → köket (the kitchen).'),
pick('Add “the”: en säng →','Sängen is the bed.',['sängen','sängt','sängar'],0,'En words get -en.','En säng → sängen (the bed).'),
tile('Ask for help.',['Kan','du','hjälpa','mig?'],'Can / you / help / me','After kan the verb is in the infinitive: hjälpa.'),
listen('Listen. What does Dad say?','Det är din tur att diska.',['It is your turn to wash up.','It is my turn to cook.','It is time to sleep.'],0,'Diska = wash up.','Din tur att diska = your turn to wash up.'),
type('Write “bed”.','Jag sover i min ___.',['säng'],'It starts with s.','En säng = a bed.'),
pick('Where do you cook?','Man lagar mat …',['I köket','I badrummet','I sovrummet'],0,'Laga mat = cook.','Man lagar mat i köket.'),
pick('Where do you brush your teeth?','Man borstar tänderna …',['I badrummet','I köket','I vardagsrummet'],0,'Borsta tänderna.','I badrummet.'),
tile('Say: It is time to sleep!',['Dags','att','sova!'],'Time / to / sleep','Dags att + infinitive.'),
pick('Story check: what does Leo take?','Leo: Jag tar glasen.',['The glasses','The plates','The forks'],0,'Glas = glass.','Glasen = the glasses.'),
pick('Which sentence is a command?','Mum talks to Leo.',['Städa ditt rum!','Jag städar mitt rum.','Hon städar sitt rum.'],0,'A command has no subject.','Städa ditt rum! = Tidy your room!'),
type('Write “the window”.','Öppna ___, tack.',['fönstret'],'It is an ett word, so add -et.','Fönstret = the window.'),
listen('Listen. What is it time for?','Nu är det dags att borsta tänderna.',['Time to brush your teeth','Time to eat breakfast','Time to go to school'],0,'Tänderna = the teeth.','Dags att borsta tänderna.'),
pick('Story check: who will dry?','Nora: Ja, jag torkar.',['Nora','Dad','Mum'],0,'Look at who says it.','Nora dries while Leo washes up.'),
pick('Answer politely when asked to help.','Kan du hjälpa mig?',['Javisst!','Förlåt!','Hej då!'],0,'Say yes.','Javisst = of course.')
],
boss:'Plan a family evening. Say who cooks, who sets the table and who washes up (Det är din tur att …). Ask for help with Kan du hjälpa mig? and end the day with Dags att sova!'
};
LESSONS[28]={
unit:29,title:'Ice cream money',sv:'I affären',place:'STAN',
rule:'Prices, money and asking the way',
reference:'Ask the price with Hur mycket kostar …? Answer Den kostar tjugo kronor (en-words) or Det kostar tjugo kronor (ett-words). Inte goes after the verb: Jag har inte pengar. To ask the way say Var är …? and listen for till vänster, till höger or rakt fram.',
intro:'Nora has pocket money and Leo wants ice cream. Help them pay, count the kronor and find the way to the bus stop.',
words:[
['en glass','an ice cream'],['godis','sweets'],['en kiosk','a kiosk'],['en affär','a shop'],['pengar','money'],['en veckopeng','pocket money'],['en krona','a krona'],['en påse','a bag'],['en hållplats','a bus stop'],
['kosta','to cost'],['betala','to pay'],['köpa','to buy'],['spara','to save'],['billig','cheap'],['dyr','expensive'],
['vänster','left'],['höger','right'],['rakt fram','straight ahead'],
['Hur mycket kostar den?','How much does it cost?'],['Den kostar tjugo kronor.','It costs twenty kronor.'],['Jag har inte tillräckligt med pengar.','I do not have enough money.'],['Vill du ha en påse?','Do you want a bag?'],['Jag har gått vilse.','I have got lost.'],['Var finns toaletten?','Where is the toilet?']
],
story:{title:'Glass i staden',lines:[
['Nora: Jag har fått min veckopeng i dag! Hundra kronor.','Nora: I have got my pocket money today! A hundred kronor.'],
['Leo: Ska vi köpa glass?','Leo: Shall we buy ice cream?'],
['Nora: Ja! Kiosken ligger på hörnet, till höger.','Nora: Yes! The kiosk is on the corner, on the right.'],
['Leo: Ursäkta, hur mycket kostar glassen?','Leo: Excuse me, how much does the ice cream cost?'],
['Kioskägaren: Den kostar tjugo kronor.','Kiosk owner: It costs twenty kronor.'],
['Leo: Jag har inte tillräckligt med pengar. Jag har bara femton kronor.','Leo: I do not have enough money. I only have fifteen kronor.'],
['Nora: Jag kan bjuda dig.','Nora: I can treat you.'],
['Leo: Tack! Du är snäll.','Leo: Thanks! You are kind.'],
['Kioskägaren: Vill ni ha en påse?','Kiosk owner: Do you want a bag?'],
['Nora: Nej tack. Var är hållplatsen? Vi har gått vilse.','Nora: No thanks. Where is the bus stop? We have got lost.'],
['Kioskägaren: Gå rakt fram och sedan till vänster.','Kiosk owner: Go straight ahead and then left.'],
['Nora: Tack för hjälpen!','Nora: Thanks for the help!']
]},
tasks:[
pick('Ask the price.','You want an ice cream.',['Hur mycket kostar glassen?','Vad heter glassen?','Var är glassen?'],0,'Kostar = costs.','Hur mycket kostar …? = How much does … cost?'),
listen('Listen. How much is the ice cream?','Den kostar tjugo kronor.',['20 kronor','12 kronor','200 kronor'],0,'Tjugo = twenty.','Tjugo = 20.'),
tile('Say that you do not have enough money.',['Jag','har','inte','tillräckligt','med','pengar.'],'I / have / not / enough / with / money','Inte comes right after the verb.'),
pick('Add “the”: en glass →','Glassen is the ice cream.',['glassen','glasset','glassar'],0,'En words get -en.','En glass → glassen.'),
pick('Is it cheap or expensive?','The kiosk wants 200 kronor for one ice cream.',['dyr','billig','snäll'],0,'Dyr = expensive.','Dyr = expensive. Billig = cheap.'),
type('Write “money”.','Jag har inga ___.',['pengar'],'It starts with p.','Pengar = money.'),
listen('Listen. Where is the kiosk?','Kiosken ligger på hörnet, till höger.',['On the corner, on the right','Behind the school','Next to the bus stop'],0,'Höger = right.','Till höger = to the right.'),
pick('Which word means “left”?','Gå ___ vid hörnet.',['vänster','höger','rakt fram'],0,'Vänster = left.','Vänster = left. Höger = right.'),
tile('Say that you are lost.',['Jag','har','gått','vilse.'],'I / have / gone / astray','Har gått = have gone. Gå vilse = get lost.'),
pick('Story check: how much money does Leo have?','Leo: Jag har bara femton kronor.',['15 kronor','50 kronor','100 kronor'],0,'Femton = 15.','Femton = 15.'),
pick('Story check: who pays for Leo?','Nora: Jag kan bjuda dig.',['Nora','Leo','The kiosk owner'],0,'Bjuda = to treat.','Nora treats Leo.'),
tile('Ask for help.',['Kan','du','hjälpa','mig?'],'Can / you / help / me','Kan + infinitive.'),
pick('The kiosk owner asks about a bag. Answer “no thanks”.','Vill du ha en påse?',['Nej tack.','Ja, jag är sen.','Det var kul!'],0,'Nej tack = no thank you.','Nej tack.'),
type('Write “bus stop”.','Var är ___?',['hållplatsen','busshållplatsen'],'It starts with h.','Hållplatsen = the bus stop.'),
pick('You get 100 kronor a week and spend nothing. What do you do?','Du köper inget.',['Jag sparar.','Jag fuskar.','Jag glömmer.'],0,'Spara = to save.','Jag sparar = I save.')
],
boss:'Role-play a kiosk. One of you is the shopkeeper who says prices (Den kostar … kronor); the other asks Hur mycket kostar …?, says if it is billig or dyr, and pays. Then ask the way to the bus stop with Var är …? and answer with till vänster, till höger or rakt fram.'
};

/* ---- B/C missions: original drills matched to each station's grammar focus ---- */
LESSONS[29]={
unit:30,title:'Free-time interests',sv:'Fritiden',place:'FRITID',
rule:'Prepositions with free-time words',
reference:'Swedish prepositions often differ from English, so learn each verb or adjective with its preposition: intresserad av, bra på, glad över, prata om, vara med i, ägna sig åt. Times: på kvällen, på måndag, i helgen.',
intro:'A member of a photography club tells you about her free time. Practise the small words that glue the sentences together.',
words:[['en fritid','free time'],['ett intresse','an interest'],['en förening','a club'],['intresserad av','interested in'],['bra på','good at'],['glad över','happy about'],['vara med i','to be a member of'],['ägna sig åt','to devote yourself to'],['träffas','to meet'],['regelbundet','regularly'],['redigera','to edit'],['en utställning','an exhibition']],
story:{title:'Min fritid',lines:[
['På fritiden är jag mycket intresserad av fotografi.','In my free time I am very interested in photography.'],
['Jag är med i en förening som träffas varje torsdag.','I belong to a club that meets every Thursday.'],
['Vi ägnar oss åt både landskap och porträtt.','We devote ourselves to both landscapes and portraits.'],
['Förra veckan var jag på en utställning och blev glad över att så många kom.','Last week I went to an exhibition and was happy that so many came.'],
['Jag är inte särskilt bra på att redigera bilder, men jag lär mig av de andra.','I am not especially good at editing pictures, but I learn from the others.'],
['Det bästa med hobbyn är att man träffar människor som man annars aldrig skulle ha träffat.','The best thing about the hobby is that you meet people you would never otherwise have met.']]},
tasks:[
pick('Choose the correct preposition.','Jag är intresserad ___ historia.',['av','på','för'],0,'Intresserad av is a fixed pair.','Intresserad av = interested in.'),
pick('Choose the correct preposition.','Hon är bra ___ att teckna.',['på','av','i'],0,'Bra på = good at.','Bra på = good at.'),
pick('Choose the correct preposition.','Vi träffas ___ kvällen.',['på','i','vid'],0,'Parts of the day take på.','På kvällen = in the evening.'),
pick('Choose the correct preposition.','Vi ses ___ måndag.',['på','av','för'],0,'Days of the week take på.','På måndag = on Monday.'),
type('Write the preposition.','Han är med ___ en simklubb.',['i'],'Vara med i = be a member of.','Vara med i en klubb.'),
tile('Put the words in order.',['Jag','ägnar','mig','åt','trädgården','på','fritiden.'],'I devote myself to the garden in my free time.','Ägna sig åt + noun.'),
pick('Which sentence is correct?','Choose the natural Swedish.',['Jag tycker om att vandra.','Jag tycker att vandra om.','Jag tycker vandra.'],0,'Tycka om = like.','Tycka om att + infinitive.'),
type('Write the missing word.','Hon blev glad ___ presenten.',['över'],'Glad över + noun.','Glad över = happy about.'),
listen('Listen. What does the club talk about?','Föreningen träffas varje torsdag och pratar om fotografi.',['Photography','Football','Cooking'],0,'Fotografi = photography.','The club talks about photography.'),
pick('Story check: what is the writer not so good at?','Jag är inte särskilt bra på att redigera bilder.',['Editing pictures','Taking pictures','Meeting people'],0,'Redigera = edit.','She is not good at editing pictures.'),
pick('Choose the right preposition.','Vi pratade ___ filmen hela kvällen.',['om','av','på'],0,'Prata om = talk about.','Prata om något.'),
tile('Say: I am interested in music.',['Jag','är','intresserad','av','musik.'],'Interested in = intresserad av.','Intresserad av.')
],
boss:'Tell a partner about your free time using five prepositions (på, i, av, om, åt). Your partner asks two follow-up questions with Vad …? and Hur länge har du …?'
};
LESSONS[30]={
unit:31,title:'Friends and fall-outs',sv:'Vänner',place:'VÄNNER',
rule:'Word order in subordinate clauses',
reference:'In a main clause the verb is second: Hon kommer inte. In a subordinate clause (after att, som, eftersom, när, om, att) the subject comes first and inte or aldrig goes before the verb: …att hon inte kommer. If a subordinate clause starts the sentence, the main clause verb follows right after it: Eftersom hon var sjuk, kom hon inte.',
intro:'A friend explains how a quarrel started and ended. Practise where inte, aldrig and the verb go.',
words:[['en vän','a friend'],['en vänskap','a friendship'],['lita på','to trust'],['bry sig om','to care about'],['sakna','to miss'],['bråka','to quarrel'],['förlåta','to forgive'],['ärlig','honest'],['pålitlig','reliable'],['eftersom','because'],['en hemlighet','a secret'],['be om ursäkt','to apologise']],
story:{title:'Min bästa vän',lines:[
['Jag har en vän som alltid lyssnar när jag har det svårt.','I have a friend who always listens when I am having a hard time.'],
['Hon säger att hon inte bryr sig om vad andra tycker.','She says that she does not care what others think.'],
['Vi bråkade förra året eftersom jag inte hade ringt henne.','We quarrelled last year because I had not called her.'],
['Efter en vecka bad jag om ursäkt, och hon sa att hon redan hade förlåtit mig.','After a week I apologised, and she said she had already forgiven me.'],
['Nu vet jag att man måste vara ärlig om man vill behålla en vän.','Now I know that you have to be honest if you want to keep a friend.'],
['Jag litar på henne för att hon aldrig har berättat mina hemligheter.','I trust her because she has never told my secrets.']]},
tasks:[
pick('Choose the correct sentence.','Which word order is right?',['Jag vet att hon inte kommer.','Jag vet att hon kommer inte.','Jag vet hon inte kommer att.'],0,'In a subordinate clause inte comes before the verb.','…att hon inte kommer.'),
pick('Choose the correct sentence.','Which word order is right?',['Hon sa att han aldrig ringer.','Hon sa att han ringer aldrig.','Hon sa han aldrig att ringer.'],0,'Aldrig goes before the verb in a subordinate clause.','…att han aldrig ringer.'),
tile('Put the words in order.',['Jag','mår','dåligt','eftersom','jag','inte','har','sovit.'],'I feel bad because I have not slept.','Inte comes before the verb har in the subordinate clause.'),
type('Write the missing word.','Hon undrar om han ___ har tid.',['inte'],'Inte comes before the verb in a subordinate clause.','…om han inte har tid.'),
pick('Choose the correct sentence.','The sentence starts with a subordinate clause.',['Eftersom hon var sjuk kom hon inte.','Eftersom hon var sjuk hon kom inte.','Eftersom hon var sjuk inte kom hon.'],0,'After a subordinate clause the main clause verb comes right away.','Eftersom hon var sjuk, kom hon inte.'),
tile('Put the words in order.',['Om','du','har','tid,','kan','vi','ses','i','morgon.'],'If you have time, we can meet tomorrow.','Subordinate clause first, then the verb kan.'),
listen('Listen. Why did they quarrel?','Vi bråkade eftersom jag inte hade ringt henne.',['I had not called her','She was late','It was about money'],0,'Ringa = call.','They quarrelled because I had not called her.'),
pick('Story check: what did the friend say after the apology?','Hon sa att hon redan hade förlåtit mig.',['She had already forgiven me','She would forgive me later','She did not want to talk'],0,'Förlåta = forgive.','She had already forgiven the writer.'),
type('Write the missing word.','Jag är glad ___ du kom.',['att'],'Which word starts the subordinate clause?','Glad att du kom.'),
pick('Choose the right word.','Hon är en vän ___ alltid hjälper mig.',['som','att','om'],0,'Som refers back to en vän.','En vän som … = a friend who …'),
tile('Put the words in order.',['Hon','sa','att','hon','inte','ville','komma.'],'She said that she did not want to come.','Inte before the verb ville.'),
pick('Story check: why does she trust her friend?','Hon har aldrig berättat mina hemligheter.',['She never told her secrets','She is older','She is rich'],0,'Hemlighet = secret.','Because she has never told her secrets.')
],
boss:'Tell a partner about a disagreement with a friend. Use eftersom, att and när, and put inte or aldrig before the verb in each subordinate clause. Your partner asks Varför …? twice.'
};
LESSONS[31]={
unit:32,title:'Money and happiness',sv:'Pengar och lycka',place:'LYCKA',
rule:'Conjunctions: men, utan, eller, så att',
reference:'Use men for contrast and utan after a negative: Jag är inte rik, utan glad. Så att introduces a result: Han sparade så att han kunde resa. Både … och = both … and. Antingen … eller = either … or. Varken … eller = neither … nor.',
intro:'Two people discuss whether money makes you happy. Practise the little words that join ideas.',
words:[['en lön','a salary'],['spara','to save'],['ha råd med','to afford'],['en dröm','a dream'],['lycklig','happy (lasting)'],['nöjd','satisfied'],['en skuld','a debt'],['både … och','both … and'],['antingen … eller','either … or'],['varken … eller','neither … nor'],['utan','but (after a negative)'],['trots att','even though']],
story:{title:'Räcker pengarna?',lines:[
['Mia: Jag tjänar inte särskilt mycket, men jag är ändå nöjd.','Mia: I do not earn very much, but I am still satisfied.'],
['Jonas: Jag är inte nöjd, utan jag drömmer om att byta jobb.','Jonas: I am not satisfied; I dream of changing jobs.'],
['Mia: Har du råd att sluta?','Mia: Can you afford to quit?'],
['Jonas: Antingen sparar jag i ett år, eller så tar jag ett lån.','Jonas: Either I save for a year, or I take a loan.'],
['Mia: Ta inget lån! Varken du eller jag behöver fler skulder.','Mia: Do not take a loan! Neither you nor I need more debts.'],
['Jonas: Du har rätt. Jag sparar så att jag kan välja själv.','Jonas: You are right. I will save so that I can choose myself.']]},
tasks:[
pick('Choose the right word.','Jag är inte trött, ___ hungrig.',['utan','men','eller'],0,'After a negative, use utan.','Inte trött, utan hungrig.'),
pick('Choose the right word.','Hon tjänar lite, ___ hon är nöjd.',['men','utan','så att'],0,'Contrast after a positive statement.','Men = but.'),
type('Write the missing word.','Han sparar ___ han kan resa i sommar.',['så att'],'Two words that introduce a result.','Så att = so that.'),
pick('Choose the correct pair.','___ jag ___ min syster har råd med bilen.',['Varken … eller','Både … eller','Antingen … och'],0,'Neither … nor.','Varken … eller = neither … nor.'),
tile('Put the words in order.',['Antingen','sparar','jag,','eller','så','lånar','jag.'],'Either I save, or I borrow.','After antingen the verb comes second; after eller så too.'),
listen('Listen. What does Jonas dream about?','Jag drömmer om att byta jobb.',['Changing jobs','Buying a house','Moving abroad'],0,'Byta jobb = change jobs.','He dreams of changing jobs.'),
pick('Story check: what does Mia advise?','Ta inget lån!',['Not to take a loan','To take a big loan','To quit at once'],0,'Lån = loan.','She says: do not take a loan.'),
type('Write the missing word.','Han har både en bil ___ en cykel.',['och'],'Både … och.','Både … och = both … and.'),
pick('Choose the better word.','___ att det regnade, gick vi ut.',['Trots','Därför','Eftersom'],0,'Despite the rain.','Trots att = even though.'),
tile('Say: I do not want a loan, but I want to save.',['Jag','vill','inte','ha','ett','lån,','utan','jag','vill','spara.'],'Utan after a negative.','Utan follows a negative clause.'),
pick('Choose the correct word.','Du kan få kaffe ___ te.',['eller','utan','trots'],0,'A choice between two things.','Eller = or.'),
pick('Story check: why does Jonas save?','Jag sparar så att jag kan välja själv.',['To be free to choose','To buy a car','To pay his debts'],0,'Välja = choose.','So that he can choose for himself.')
],
boss:'Debate with a partner: Does money make you happy? Use men, utan, både … och and trots att at least once each, and finish with your own dream in one sentence.'
};
LESSONS[32]={
unit:33,title:'Animals and verbs with particles',sv:'Djur',place:'DJURPARK',
rule:'Particle verbs',
reference:'Many Swedish verbs combine with a small word that changes the meaning: ta upp (bring up), ge sig av (set off), komma på (think of), hålla med (agree), titta på (look at). The particle is stressed and stays after the verb: Jag tar med hunden. In a subordinate clause: …att jag tog med hunden.',
intro:'A vet and a dog owner meet at a park. Practise common particle verbs.',
words:[['ta med','to bring along'],['släppa lös','to let loose'],['ge upp','to give up'],['komma på','to think of'],['hålla med','to agree'],['titta på','to look at'],['ta hand om','to look after'],['vänja sig vid','to get used to'],['springa ifatt','to catch up with'],['ett koppel','a lead'],['skälla','to bark'],['en veterinär','a vet']],
story:{title:'I hundparken',lines:[
['Vi tar alltid med hunden till parken.','We always bring the dog to the park.'],
['Först hade han svårt att vänja sig vid de andra hundarna.','At first he found it hard to get used to the other dogs.'],
['Jag tänkte ge upp, men veterinären kom på ett bra tips.','I thought of giving up, but the vet came up with a good tip.'],
['Hon sa att man ska släppa lös hunden i små steg.','She said you should let the dog loose in small steps.'],
['Nu springer han ifatt alla och jag tar hand om honom på kvällarna.','Now he catches up with everyone and I look after him in the evenings.'],
['Alla håller med om att han är en glad hund.','Everyone agrees that he is a happy dog.']]},
tasks:[
pick('Choose the right particle.','Vi tar ___ hunden till parken.',['med','upp','av'],0,'Ta med = bring along.','Ta med = bring along.'),
pick('Choose the right particle.','Jag håller ___ dig.',['med','på','om'],0,'Hålla med = agree.','Hålla med = agree.'),
type('Write the particle.','Hon kom ___ en bra idé.',['på'],'Komma på = think of.','Komma på en idé.'),
tile('Put the words in order.',['Han','vänjer','sig','vid','de','andra','hundarna.'],'He gets used to the other dogs.','Vänja sig vid.'),
pick('Choose the correct word order.','In a subordinate clause.',['…att jag tog med hunden.','…att jag med tog hunden.','…att tog jag med hunden.'],0,'The particle follows the verb.','…att jag tog med hunden.'),
listen('Listen. Who takes care of the dog in the evening?','Jag tar hand om honom på kvällarna.',['The writer','The vet','The neighbour'],0,'Ta hand om = look after.','The writer looks after the dog.'),
pick('Story check: what did the vet advise?','Man ska släppa lös hunden i små steg.',['Let the dog loose in small steps','Keep the dog on the lead','Move away'],0,'Steg = step.','Little by little.'),
type('Write the missing word.','Titta ___ den lilla hunden!',['på'],'Titta på = look at.','Titta på = look at.'),
pick('Choose the correct meaning.','Jag ger inte upp.',['I do not give up.','I do not look up.','I do not wake up.'],0,'Ge upp = give up.','Ge upp = give up.'),
tile('Say: She catches up with the dog.',['Hon','springer','ifatt','hunden.'],'Springa ifatt.','Springa ifatt = catch up with.'),
pick('Choose the right word.','Hon ___ hand om tre katter.',['tar','ger','sätter'],0,'Ta hand om.','Ta hand om = look after.'),
pick('Story check: how does the dog feel now?','Alla håller med om att han är en glad hund.',['Happy','Afraid','Tired'],0,'Glad = happy.','Everyone agrees he is a happy dog.')
],
boss:'Describe a day with a pet or an animal you know. Use at least five particle verbs (ta med, titta på, ge upp, komma på, ta hand om). Your partner asks Vad hände sedan?'
};
LESSONS[33]={
unit:34,title:'Everyday life and the weekend',sv:'Vardag och helg',place:'HELGEN',
rule:'Tricky small words: man/en, lite/litet, annan/andra',
reference:'Man is the general “you”: Man kan alltid fråga. Lite means a little (lite socker); litet is the neuter of liten (ett litet hus). Annan (en), annat (ett), andra (plural). Vilken, vilket, vilka follow the noun’s gender.',
intro:'A weekend in a Swedish family: practise choosing the right small word.',
words:[['en vardag','a weekday'],['en helg','a weekend'],['lite','a little'],['litet','small (ett-word)'],['en annan','another (en)'],['ett annat','another (ett)'],['andra','other (plural)'],['vilken/vilket/vilka','which'],['ändå','still, anyway'],['bara','only'],['hinna','to have time to'],['slappna av','to relax']],
story:{title:'Helg hos familjen',lines:[
['På vardagarna hinner vi bara äta lite frukost och springa.','On weekdays we only have time for a little breakfast before running out.'],
['På helgen vill man slappna av och göra något annat.','At the weekend you want to relax and do something different.'],
['Vi har ett litet hus med en stor trädgård.','We have a small house with a big garden.'],
['Vilken dag gillar du bäst, lördag eller söndag?','Which day do you like best, Saturday or Sunday?'],
['Jag tycker om söndagar, för då kommer andra släktingar på middag.','I like Sundays, because then other relatives come to dinner.'],
['Ibland är jag trött, men jag är ändå glad att vi ses.','Sometimes I am tired, but I am still glad we meet.']]},
tasks:[
pick('Choose the right word.','Jag vill ha ___ socker i kaffet.',['lite','litet','liten'],0,'A little sugar: lite.','Lite = a little.'),
pick('Choose the right word.','Det är ett ___ hus.',['litet','lite','liten'],0,'Hus is an ett-word.','Ett litet hus.'),
pick('Choose the right word.','Vi tar en ___ buss.',['annan','annat','andra'],0,'En buss → annan.','En annan buss.'),
pick('Choose the right word.','Har du ett ___ förslag?',['annat','annan','andra'],0,'Ett förslag → annat.','Ett annat förslag.'),
type('Write the missing word.','___ bil är din?',['vilken'],'En bil → vilken.','Vilken bil? = Which car?'),
type('Write the missing word.','___ hus bor du i?',['vilket'],'Ett hus → vilket.','Vilket hus? = Which house?'),
tile('Put the words in order.',['På','helgen','kan','man','slappna','av.'],'At the weekend you can relax.','Man = people in general.'),
listen('Listen. When do the relatives come?','På söndagar kommer släktingarna på middag.',['On Sundays','On Fridays','Every morning'],0,'Söndag = Sunday.','The relatives come on Sundays.'),
pick('Story check: what do they have time for on weekdays?','Vi hinner bara äta lite frukost.',['A little breakfast','A long lunch','A big dinner'],0,'Hinna = have time.','Only a little breakfast.'),
pick('Choose the right word.','Det finns många ___ möjligheter.',['andra','annan','annat'],0,'Plural: andra.','Andra möjligheter.'),
tile('Say: I am tired but still happy.',['Jag','är','trött','men','ändå','glad.'],'Ändå = still.','Ändå = still, anyway.'),
pick('Choose the correct sentence.','What does man mean here?',['Man kan alltid fråga.','Man alltid kan fråga.','Alltid man kan fråga.'],0,'Verb second in a main clause.','Man kan alltid fråga.')
],
boss:'Describe your ideal weekend with a partner. Use lite, litet, annan/annat/andra and vilken/vilket/vilka at least once each. Your partner asks Vilken dag gillar du bäst?'
};
LESSONS[34]={
unit:35,title:'Politics and the state',sv:'Statsskick',place:'RIKSDAG',
rule:'Conditional with om … skulle',
reference:'Use skulle + infinitive for what would happen: Om jag var statsminister skulle jag sänka skatten. For an impossible past: Om jag hade vetat, hade jag röstat annorlunda. Note: in the om-clause you use past tense (var, hade), not skulle.',
intro:'A civics class talks about how Sweden is governed and what they would do in power.',
words:[['ett val','an election'],['rösta','to vote'],['en riksdag','a parliament'],['en regering','a government'],['en statsminister','a prime minister'],['ett parti','a party'],['en skatt','a tax'],['sänka','to lower'],['höja','to raise'],['ett förslag','a proposal'],['besluta','to decide'],['demokrati','democracy']],
story:{title:'Samhällskunskap',lines:[
['Läraren: I Sverige väljer vi riksdagen vart fjärde år.','Teacher: In Sweden we elect parliament every four years.'],
['Ali: Om jag var statsminister skulle jag sänka skatten.','Ali: If I were prime minister I would lower taxes.'],
['Eva: Då skulle vi få sämre skolor, om du inte sparade någon annanstans.','Eva: Then we would get worse schools, unless you saved elsewhere.'],
['Läraren: Om ni var riksdagsledamöter skulle ni bli tvungna att samarbeta.','Teacher: If you were MPs you would have to cooperate.'],
['Ali: Om jag hade vetat det, hade jag valt ett annat parti.','Ali: If I had known that, I would have chosen another party.'],
['Läraren: Det är demokrati – man diskuterar och sedan röstar man.','Teacher: That is democracy – you discuss and then you vote.']]},
tasks:[
pick('Choose the correct form.','Om jag ___ rik, skulle jag resa mycket.',['var','skulle vara','är'],0,'Past tense in the om-clause.','Om jag var rik, skulle jag resa.'),
pick('Choose the correct form.','Om jag var statsminister ___ jag sänka skatten.',['skulle','ska','sänkte'],0,'Skulle + infinitive in the result clause.','Skulle sänka.'),
type('Write the missing verb.','Om han hade tid, ___ han hjälpa oss.',['skulle'],'Result clause: skulle.','Om han hade tid, skulle han hjälpa oss.'),
tile('Put the words in order.',['Om','jag','hade','vetat,','hade','jag','röstat','annorlunda.'],'If I had known, I would have voted differently.','Hade vetat … hade röstat.'),
pick('Choose the correct sentence.','Impossible past.',['Om jag hade vetat det, hade jag stannat hemma.','Om jag skulle ha vetat det, hade jag stannat hemma.','Om jag vet det, hade jag stannat hemma.'],0,'Hade + supine in both clauses.','Om jag hade vetat … hade jag stannat.'),
listen('Listen. How often do Swedes elect parliament?','Vi väljer riksdagen vart fjärde år.',['Every four years','Every year','Every second year'],0,'Vart fjärde år = every fourth year.','Every four years.'),
pick('Story check: what would Ali do as prime minister?','Om jag var statsminister skulle jag sänka skatten.',['Lower taxes','Raise taxes','Close schools'],0,'Sänka = lower.','He would lower taxes.'),
type('Write the missing word.','De får ___ på söndag.',['rösta'],'A verb after får.','Rösta = vote.'),
pick('Choose the right word.','Regeringen vill ___ skatten.',['höja','dricka','sova'],0,'What does a government do to taxes?','Höja = raise.'),
tile('Say: If I were rich, I would travel.',['Om','jag','var','rik,','skulle','jag','resa.'],'Om + past, skulle + infinitive.','Conditional.'),
pick('Choose the correct sentence.','Which is right?',['Om det regnade, skulle vi stanna hemma.','Om det skulle regna, vi stannade hemma.','Om det regnar, skulle vi stanna hemma.'],0,'Om + past, skulle + infinitive.','Om det regnade, skulle vi stanna hemma.'),
pick('Story check: what is democracy, according to the teacher?','Man diskuterar och sedan röstar man.',['Discuss, then vote','Obey the king','Avoid parties'],0,'Diskutera = discuss.','You discuss and then vote.')
],
boss:'Imagine you are prime minister for a day. Say five things you would do with Om jag var statsminister, skulle jag … Your partner reacts with Då skulle det bli … or Men om du hade …'
};
LESSONS[35]={
unit:36,title:'Favourite places and local food',sv:'Smultronstället',place:'SMULTRON',
rule:'Relative clauses: som, där, vars',
reference:'Som links a noun to more information: Det är en plats som jag älskar. When som is the object you may leave it out: Det är en plats jag älskar. Där = where: Caféet där vi fikade. Vars = whose: Mannen, vars bil stod där, var sen.',
intro:'A writer describes a favourite island in the archipelago. Practise som, där and vars.',
words:[['ett smultronställe','a favourite spot'],['en skärgård','an archipelago'],['en rätt','a dish'],['en specialitet','a speciality'],['en brygga','a jetty'],['hembakad','home-baked'],['ägaren','the owner'],['en tradition','a tradition'],['känd för','known for'],['äkta','genuine'],['besöka','to visit'],['stolt över','proud of']],
story:{title:'Mitt smultronställe',lines:[
['Mitt smultronställe är en liten ö som ligger i skärgården.','My favourite spot is a small island in the archipelago.'],
['Det är en plats som jag har åkt till varje sommar sedan barndomen.','It is a place I have gone to every summer since childhood.'],
['På ön finns ett café där man säljer hembakat bröd.','On the island there is a café where they sell home-baked bread.'],
['Ägaren, vars familj har bott där i hundra år, bakar fortfarande efter gamla recept.','The owner, whose family has lived there for a hundred years, still bakes from old recipes.'],
['Det bästa jag vet är att sitta på bryggan och äta en kanelbulle.','The best thing I know is to sit on the jetty and eat a cinnamon bun.'],
['Den rätt som lokalborna är mest stolta över är böckling.','The dish the locals are proudest of is smoked herring.']]},
tasks:[
pick('Choose the right word.','Det är en ö ___ jag älskar.',['som','där','vars'],0,'Som = that / which.','Det är en ö som jag älskar.'),
pick('Choose the right word.','Platsen ___ vi badade var vacker.',['där','som','vars'],0,'A place where something happened.','Där = where.'),
pick('Choose the right word.','Mannen, ___ bil stod utanför, var sen.',['vars','som','där'],0,'Whose = vars.','Vars = whose.'),
type('Write the missing word.','Det är boken ___ jag läste.',['som'],'Som = that.','Det är boken som jag läste.'),
tile('Put the words in order.',['Caféet','där','vi','fikade','har','stängt.'],'The café where we had coffee has closed.','Där starts the relative clause.'),
pick('Which sentence is correct?','Choose the right word order.',['Det är en rätt som jag älskar.','Det är en rätt som älskar jag.','Det är en rätt jag som älskar.'],0,'Subject then verb inside the relative clause.','Som jag älskar.'),
listen('Listen. What does the café sell?','Vi säljer hembakat bröd och kanelbullar.',['Home-baked bread','Pizza','Sushi'],0,'Hembakat = home-baked.','They sell home-baked bread and buns.'),
pick('Story check: whose family has lived there for a hundred years?','Ägaren, vars familj har bott där i hundra år …',['The owner','The writer','The locals'],0,'Vars familj = whose family.','The café owner’s family.'),
type('Write the missing word.','Hon bor i en stad ___ många turister besöker.',['som'],'The city is the object of besöker.','Staden som många besöker.'),
pick('Choose the right word.','Det här är ett land ___ språk jag älskar.',['vars','där','som'],0,'Whose language.','Vars = whose.'),
tile('Put the words in order.',['Det','bästa','jag','vet','är','kanelbullar.'],'The best thing I know is cinnamon buns.','Som is left out here.'),
pick('Story check: where does the writer like to sit?','Det bästa jag vet är att sitta på bryggan.',['On the jetty','In the café','In a boat'],0,'Brygga = jetty.','On the jetty.')
],
boss:'Describe your favourite place to a partner. Use som, där and vars at least once each, and name one local dish with Den rätt som … Your partner asks Vad är det bästa med …?'
};
LESSONS[36]={
unit:37,title:'The Nordic countries',sv:'Norden',place:'NORDEN',
rule:'Prepositions of place and time',
reference:'Countries and cities take i: i Sverige, i Finland, i Stockholm. Islands usually take på: på Island, på Gotland, på Åland. Time in history: på 1800-talet, under medeltiden, i början av 1900-talet, sedan 1995, i tre år.',
intro:'A short tour of the Nordic countries and their languages. Choose the right preposition.',
words:[['Norden','the Nordic countries'],['ett kungarike','a kingdom'],['en union','a union'],['en gräns','a border'],['ett grannland','a neighbouring country'],['medeltiden','the Middle Ages'],['förr i tiden','in the old days'],['släkt med','related to'],['officiell','official'],['påverka','to influence'],['utvecklas','to develop'],['ett folk','a people']],
story:{title:'Norden förr och nu',lines:[
['På medeltiden var Norden uppdelat i flera kungariken.','In the Middle Ages the Nordic region was divided into several kingdoms.'],
['Under 1300-talet bildade några av dem en union.','During the 14th century some of them formed a union.'],
['Danmark, Norge och Sverige är grannländer, och många förstår varandras språk.','Denmark, Norway and Sweden are neighbours, and many understand each other’s languages.'],
['På Island pratar man ett språk som ligger nära fornnordiskan.','In Iceland they speak a language that is close to Old Norse.'],
['Finska är släkt med estniska, inte med svenska.','Finnish is related to Estonian, not to Swedish.'],
['I Finland är svenska ett av två officiella språk.','In Finland Swedish is one of two official languages.']]},
tasks:[
pick('Choose the right preposition.','Det hände ___ början av 1900-talet.',['i','på','vid'],0,'Början av = the beginning of.','I början av.'),
pick('Choose the right preposition.','Jag bor ___ Island.',['på','i','vid'],0,'Islands often take på.','På Island.'),
pick('Choose the right preposition.','Min vän bor ___ Finland.',['i','på','vid'],0,'Countries take i.','I Finland.'),
type('Write the missing word.','Hon reste ___ Danmark förra året.',['till'],'Travelling to a country.','Resa till Danmark.'),
pick('Choose the right word.','Han kommer ___ Norge.',['från','av','ur'],0,'Origin: från.','Från Norge.'),
tile('Put the words in order.',['Under','medeltiden','var','Norden','uppdelat','i','flera','riken.'],'During the Middle Ages the Nordic region was divided into several kingdoms.','Under + a period.'),
listen('Listen. What is Finnish related to?','Finska är släkt med estniska.',['Estonian','Swedish','Danish'],0,'Estniska = Estonian.','Finnish is related to Estonian.'),
pick('Story check: which language is official in Finland besides Finnish?','I Finland är svenska ett av två officiella språk.',['Swedish','Norwegian','Russian'],0,'Officiell = official.','Swedish.'),
type('Write the missing word.','Svenska är släkt ___ norska.',['med'],'Related to = släkt med.','Släkt med.'),
pick('Choose the correct sentence.','Since 2015.',['Hon har bott här sedan 2015.','Hon har bott här från 2015.','Hon har bott här av 2015.'],0,'Sedan + a starting point.','Sedan 2015.'),
pick('Choose the right word.','Vi har studerat ___ tre år.',['i','vid','på'],0,'A duration: i tre år.','I tre år.'),
tile('Say: The Nordic region consists of five countries.',['Norden','består','av','fem','länder.'],'Bestå av = consist of.','Består av.')
],
boss:'Tell a partner about three Nordic places or periods, using i, på, under, sedan and från. Your partner asks Var ligger …? and När var det?'
};
LESSONS[37]={
unit:38,title:'Truth and lies',sv:'Sanning och lögn',place:'SANNING',
rule:'Tänka, tycka, tro and veta',
reference:'Tycka = opinion: Jag tycker att filmen var bra. Tro = belief or guess: Jag tror att det blir regn. Tänka = think about, or intend: Jag tänker på dig; Jag tänker åka. Veta = know a fact: Jag vet att Stockholm är huvudstad. Tänka på = think about.',
intro:'Someone suspects a friend of lying. Practise the verbs of thinking, believing and knowing.',
words:[['en sanning','a truth'],['en lögn','a lie'],['ljuga','to lie'],['påstå','to claim'],['misstänka','to suspect'],['ett bevis','proof'],['avslöja','to reveal'],['ärlig','honest'],['stämma','to be correct'],['rakt ut','straight out'],['tänka på','to think about'],['komma fram','to come out']],
story:{title:'Vem säger sanningen?',lines:[
['Jag tycker att han ljuger.','I think he is lying.'],
['Han påstår att han var hemma hela kvällen, men jag tror att det inte stämmer.','He claims he was at home all evening, but I believe that is not true.'],
['Jag vet att bilen stod utanför huset, så jag misstänker att han har ljugit.','I know the car was outside the house, so I suspect he has lied.'],
['Vad tänker du göra? – Jag tänker fråga honom rakt ut.','What are you going to do? – I intend to ask him straight out.'],
['Om han är ärlig kommer han att berätta sanningen.','If he is honest he will tell the truth.'],
['Jag tänker på vad min mormor brukade säga: ”Sanningen kommer alltid fram.”','I think of what my grandmother used to say: “The truth always comes out.”']]},
tasks:[
pick('Choose the right verb.','Vad ___ du om filmen?',['tycker','tror','vet'],0,'You ask for an opinion.','Tycka = opinion.'),
pick('Choose the right verb.','Jag ___ att det blir regn imorgon.',['tror','tycker','tänker'],0,'A guess about the future.','Tro = believe, guess.'),
pick('Choose the right verb.','Jag ___ åka till Göteborg i helgen.',['tänker','tycker','vet'],0,'An intention.','Tänka + infinitive = intend.'),
pick('Choose the right verb.','Jag ___ att Stockholm är Sveriges huvudstad.',['vet','tycker','tänker'],0,'A fact.','Veta = know a fact.'),
type('Write the missing verb.','Hon ___ på sin mormor.',['tänker'],'Think about someone.','Tänka på.'),
tile('Put the words in order.',['Han','påstår','att','han','var','hemma.'],'He claims he was at home.','Att starts the subordinate clause.'),
listen('Listen. What does the writer suspect?','Jag misstänker att han har ljugit.',['He has lied','He is ill','He is late'],0,'Ljuga = lie.','The writer suspects he has lied.'),
pick('Story check: what does the writer intend to do?','Jag tänker fråga honom rakt ut.',['Ask him directly','Call the police','Do nothing'],0,'Rakt ut = straight out.','Ask him directly.'),
pick('Choose the right form.','Jag har ___ på det i flera dagar.',['tänkt','trott','tyckt'],0,'Think about = tänka på.','Har tänkt på.'),
type('Write the missing verb.','Man ska inte ___ för sina vänner.',['ljuga'],'After ska the verb is in the infinitive.','Ljuga = to lie.'),
tile('Say: I think that the truth is important.',['Jag','tycker','att','sanningen','är','viktig.'],'Tycker att = opinion.','Tycker att.'),
pick('Which verb means to claim something?','Choose one.',['påstå','dricka','springa'],0,'He ___ that he was at home.','Påstå = claim.')
],
boss:'Make five sentences about something you think, believe, know or plan, using tycker, tror, vet and tänker once each. Your partner says Det tycker jag också or Det tror jag inte.'
};
LESSONS[38]={
unit:39,title:'How milk gets to the shop',sv:'Mjölkens väg',place:'MJÖLK',
rule:'The passive voice',
reference:'The s-passive: add -s to the verb: Mjölken säljs i butiken. Stems in -a: stoppa → stoppas; verbs in -r: lagar → lagas. With the supine: Huset har sålts. The doer is introduced by av: Brödet bakas av bagaren.',
intro:'Follow a carton of milk from the farm to the shop and practise the passive.',
words:[['mjölk','milk'],['ett mejeri','a dairy'],['en bonde','a farmer'],['pastörisera','to pasteurise'],['producera','to produce'],['transportera','to transport'],['förpacka','to pack'],['kyla','to chill'],['en kartong','a carton'],['sälja','to sell'],['servera','to serve'],['hållbarhet','shelf life']],
story:{title:'Mjölkens väg',lines:[
['Mjölken mjölkas på gården tidigt på morgonen.','The milk is milked on the farm early in the morning.'],
['Därefter körs den till ett mejeri där den pastöriseras.','Then it is driven to a dairy where it is pasteurised.'],
['På mejeriet fylls mjölken på kartonger och kyls ned.','At the dairy the milk is filled into cartons and chilled.'],
['Kartongerna transporteras till affärerna.','The cartons are transported to the shops.'],
['I Sverige har mjölk drickits i många hundra år.','In Sweden milk has been drunk for many hundreds of years.'],
['I dag säljs även havredryck och sojadryck.','Today oat drink and soy drink are also sold.']]},
tasks:[
pick('Choose the passive form.','Mjölken ___ i affären.',['säljs','säljer','sålde'],0,'Passive: add -s.','Mjölken säljs.'),
pick('Choose the passive form.','Brödet ___ av bagaren.',['bakas','bakar','bakat'],0,'Passive with av.','Brödet bakas av bagaren.'),
type('Write the passive form of transportera.','Kartongerna ___ till affärerna.',['transporteras'],'Add -s to the verb.','Transporteras.'),
tile('Put the words in order.',['Mjölken','pastöriseras','på','mejeriet.'],'The milk is pasteurised at the dairy.','Passive: -s.'),
pick('Which sentence is passive?','Choose one.',['Boken skrevs av en lärare.','Läraren skrev boken.','Läraren har skrivit boken.'],0,'The book is the subject.','Skrevs = was written.'),
pick('Choose the passive supine.','Huset har ___ för flera år sedan.',['sålts','sålde','sålt'],0,'Har + supine with -s.','Har sålts.'),
listen('Listen. Where is the milk pasteurised?','Mjölken pastöriseras på mejeriet.',['At the dairy','At the farm','In the shop'],0,'Mejeri = dairy.','At the dairy.'),
pick('Story check: when is the milk milked?','Mjölken mjölkas tidigt på morgonen.',['Early in the morning','At night','At lunch'],0,'Tidigt = early.','Early in the morning.'),
type('Write the passive form of servera.','Frukosten ___ klockan åtta.',['serveras'],'Add -s.','Serveras.'),
pick('Which sentence is passive?','Choose one.',['Dörren stängs klockan tio.','Jag stänger dörren.','Hon stängde dörren.'],0,'Dörren does not act.','Stängs = is closed.'),
tile('Put the words in order.',['Havredryck','säljs','i','nästan','alla','butiker.'],'Oat drink is sold in almost all shops.','Säljs = is sold.'),
pick('Choose the correct form.','Kaffet ___ varmt.',['serveras','serverar','serverade'],0,'Coffee does not serve.','Kaffet serveras varmt.')
],
boss:'Describe how something is made, for example bread, a car or a film, with at least six passive verbs (görs, säljs, transporteras …). Your partner asks Av vem? or Var? after each step.'
};
LESSONS[39]={
unit:40,title:'Crime and punishment',sv:'Brott och straff',place:'BROTT',
rule:'Sin, sitt, sina or hans/hennes?',
reference:'Use sin (en), sitt (ett), sina (plural) when the owner is the subject of the same clause: Anna tog sin väska. Use hans, hennes, deras when the owner is somebody else: Anna tog hennes väska (another woman’s). Compare: Han ringde sin mamma (his own) / Han ringde hans mamma (someone else’s).',
intro:'A burglary and its aftermath. Practise who owns what.',
words:[['ett brott','a crime'],['en tjuv','a thief'],['stjäla','to steal'],['anmäla','to report'],['en misstänkt','a suspect'],['ett vittne','a witness'],['ett straff','a punishment'],['böter','a fine'],['erkänna','to confess'],['undersöka','to investigate'],['ett inbrott','a burglary'],['låsa','to lock']],
story:{title:'Inbrottet',lines:[
['Anna anmälde inbrottet och gav polisen sin adress.','Anna reported the burglary and gave the police her address.'],
['Polisen undersökte huset tillsammans med sina kollegor.','The police examined the house together with their colleagues.'],
['Tjuven hade lämnat sin cykel utanför.','The thief had left his bike outside.'],
['Han erkände och fick betala böter.','He confessed and had to pay a fine.'],
['Anna tog sina nycklar och låste dörren.','Anna took her keys and locked the door.'],
['Hon bad sin granne hålla ett öga på huset.','She asked her neighbour to keep an eye on the house.']]},
tasks:[
pick('Choose the right word.','Anna tog ___ väska.',['sin','hennes','hans'],0,'Her own bag.','Sin väska.'),
pick('Choose the right word.','Anna lånade ___ väska. (The bag belongs to Eva.)',['Evas','sin','sitt'],0,'The bag is Eva’s, not Anna’s own.','Evas väska.'),
pick('Choose the right word.','Han älskar ___ barn.',['sina','hans','dess'],0,'His own children.','Sina barn.'),
pick('Choose the right word.','Hon tog ___ nycklar.',['sina','hennes','deras'],0,'Her own keys.','Sina nycklar.'),
type('Write the missing word.','De älskar ___ hund.',['sin'],'En hund, own.','Sin hund.'),
type('Write the missing word.','Barnet lekte med ___ leksak.',['sin'],'En leksak, own.','Sin leksak.'),
tile('Put the words in order.',['Polisen','undersökte','huset','med','sina','kollegor.'],'The police examined the house with their colleagues.','Sina = their own.'),
listen('Listen. What did the thief have to pay?','Tjuven fick betala böter.',['A fine','Nothing','The bag'],0,'Böter = a fine.','He paid a fine.'),
pick('Story check: who reported the burglary?','Anna anmälde inbrottet.',['Anna','The neighbour','The police'],0,'Anmäla = report.','Anna.'),
pick('Choose the correct sentence.','He called his own mother.',['Han ringde sin mamma.','Han ringde hans mamma.','Han ringde hennes mamma.'],0,'Own mother = sin.','Sin mamma.'),
pick('Choose the correct sentence.','He called another man’s mother.',['Han ringde hans mamma.','Han ringde sin mamma.','Han ringde sitt mamma.'],0,'Someone else’s = hans.','Hans mamma.'),
tile('Put the words in order.',['Anna','låste','sin','dörr','och','tog','sina','nycklar.'],'Anna locked her door and took her keys.','Sin dörr, sina nycklar.')
],
boss:'Tell a short story about a lost bag or a stolen bike. Use sin, sitt and sina when the owner is the subject, and hans or hennes for somebody else’s things. Your partner asks Vems … är det?'
};
LESSONS[40]={
unit:41,title:'Daring to speak up',sv:'Att våga',place:'MOD',
rule:'Sentence adverbs: inte, nog, faktiskt, redan, ju',
reference:'Sentence adverbs (inte, aldrig, nog, faktiskt, redan, ju, kanske) stand after the verb in a main clause: Hon är faktiskt modig. In a subordinate clause they stand before the verb: …att hon faktiskt är modig. Ju means “as you know” and makes a sentence feel natural.',
intro:'A teenager talks about hate online and learning to speak up. Place each little adverb correctly.',
words:[['våga','to dare'],['mod','courage'],['en utmaning','a challenge'],['näthat','online hate'],['en kommentar','a comment'],['blockera','to block'],['anmäla','to report'],['ignorera','to ignore'],['rädd','afraid'],['säga ifrån','to speak up'],['självförtroende','self-confidence'],['redan','already']],
story:{title:'Att säga ifrån',lines:[
['Jag är faktiskt ganska rädd för att skriva på nätet.','I am actually quite afraid of writing online.'],
['Jag tror att många faktiskt skäms efteråt.','I think many people actually feel ashamed afterwards.'],
['Hon blockerade dem som skrev elaka kommentarer och anmälde dem.','She blocked those who wrote nasty comments and reported them.'],
['Det är ju inte lätt att ignorera hat.','It is not easy to ignore hate, after all.'],
['Men jag har redan lärt mig att man inte behöver svara.','But I have already learned that you do not have to answer.'],
['Nu vågar jag faktiskt säga ifrån.','Now I actually dare to speak up.']]},
tasks:[
pick('Choose the correct sentence.','Main clause.',['Hon är faktiskt modig.','Hon faktiskt är modig.','Faktiskt hon är modig.'],0,'Adverb after the verb in a main clause.','Är faktiskt.'),
pick('Choose the correct sentence.','Subordinate clause.',['Jag tror att hon faktiskt är modig.','Jag tror att hon är faktiskt modig.','Jag tror hon att faktiskt är modig.'],0,'Adverb before the verb in a subordinate clause.','…att hon faktiskt är modig.'),
tile('Put the words in order.',['Han','kommer','nog','inte','i','kväll.'],'He probably will not come tonight.','Nog + inte after the verb.'),
tile('Put the words in order.',['Jag','vet','att','han','redan','har','gått.'],'I know he has already left.','Redan before the verb har.'),
type('Write the missing word.','Det är ___ inte så svårt, eller hur?',['ju'],'A word meaning “as you know”.','Ju.'),
pick('Which word means “already”?','Choose one.',['redan','nog','ju'],0,'Time.','Redan = already.'),
listen('Listen. What did she do with the mean comments?','Hon blockerade dem och anmälde dem.',['Blocked and reported them','Answered them','Deleted her account'],0,'Blockera = block.','She blocked and reported them.'),
pick('Story check: what has the writer learned?','Man behöver inte svara.',['You do not have to answer','You must always answer','You must delete everything'],0,'Behöva = need.','You need not answer.'),
pick('Choose the correct sentence.','Subordinate clause.',['Jag är glad att du inte har gett upp.','Jag är glad att du har inte gett upp.','Jag är glad att inte du har gett upp.'],0,'Inte before the verb.','…att du inte har gett upp.'),
type('Write the missing word.','Hon har ___ lärt sig att säga ifrån.',['redan'],'Already.','Redan.'),
tile('Put the words in order.',['Nu','vågar','jag','faktiskt','säga','ifrån.'],'Now I actually dare to speak up.','Faktiskt after the verb.'),
pick('Story check: how does the writer feel now?','Nu vågar jag faktiskt säga ifrån.',['Brave enough to speak up','Afraid','Angry'],0,'Våga = dare.','Brave.')
],
boss:'Talk with a partner about a time you had to speak up. Use faktiskt, redan, nog, ju and inte in both main and subordinate clauses, and explain where each goes.'
};
LESSONS[41]={
unit:42,title:'Midsummer and the seasons',sv:'Midsommar',place:'HÖGTID',
rule:'Real and unreal conditions, ifall and annars',
reference:'A real condition uses the present: Om vädret blir fint, firar vi ute. An unreal present uses the past: Om det var sommar, skulle vi bada. An unreal past uses hade: Om det hade regnat, hade vi firat inne. Ifall = in case. Annars = otherwise.',
intro:'A Swedish midsummer, with its weather worries and traditions. Choose the right kind of if-sentence.',
words:[['en högtid','a holiday'],['midsommar','midsummer'],['en midsommarstång','a maypole'],['en tradition','a tradition'],['en årstid','a season'],['fira','to celebrate'],['dansa','to dance'],['plocka','to pick'],['sill','herring'],['ifall','in case'],['annars','otherwise'],['en jordgubbe','a strawberry']],
story:{title:'Midsommar',lines:[
['Om vädret blir fint, firar vi midsommar ute i trädgården.','If the weather is nice we celebrate midsummer outside in the garden.'],
['Vi reser midsommarstången, och barnen dansar runt den.','We raise the maypole and the children dance around it.'],
['Om jag hade bott utomlands skulle jag ha saknat just den dagen.','If I had lived abroad I would have missed precisely that day.'],
['Ta med en tröja ifall det blir kallt på kvällen.','Bring a sweater in case it gets cold in the evening.'],
['Annars fryser du, för kvällarna kan vara svala.','Otherwise you will freeze, because the evenings can be cool.'],
['Efter maten plockar vi sju sorters blommor och lägger dem under kudden.','After the meal we pick seven kinds of flowers and put them under the pillow.']]},
tasks:[
pick('Choose the right form.','Om det ___ fint väder, firar vi ute.',['blir','skulle bli','blev'],0,'A real condition uses the present.','Om det blir fint väder.'),
pick('Choose the right form.','Om det ___ sommar, skulle vi bada.',['var','blir','är'],0,'An unreal present uses the past.','Om det var sommar, skulle vi bada.'),
pick('Choose the right word.','Om det hade regnat, ___ vi firat inne.',['hade','har','blir'],0,'Unreal past: hade … hade.','Hade vi firat inne.'),
type('Write the missing word.','Ta med en jacka ___ det blir kallt.',['ifall'],'In case.','Ifall.'),
type('Write the missing word.','Klä på dig, ___ fryser du.',['annars'],'Otherwise.','Annars.'),
tile('Put the words in order.',['Om','vädret','blir','fint,','firar','vi','ute.'],'If the weather is nice we celebrate outside.','Real condition.'),
tile('Put the words in order.',['Om','jag','hade','haft','tid,','hade','jag','kommit.'],'If I had had time, I would have come.','Hade + supine in both parts.'),
listen('Listen. What do the children do?','Barnen dansar runt midsommarstången.',['Dance around the maypole','Sleep','Swim'],0,'Dansa = dance.','They dance around the maypole.'),
pick('Story check: what goes under the pillow?','Vi plockar sju sorters blommor och lägger dem under kudden.',['Seven kinds of flowers','Strawberries','A coin'],0,'Blommor = flowers.','Seven kinds of flowers.'),
pick('Choose the correct sentence.','Unreal present.',['Om jag hade pengar, skulle jag köpa en cykel.','Om jag har pengar, skulle jag köpa en cykel.','Om jag skulle ha pengar, köpte jag cyklar.'],0,'Hade in the om-clause, skulle in the result.','Om jag hade pengar, skulle jag köpa en cykel.'),
pick('What does ifall mean?','Ta med en tröja ifall det blir kallt.',['in case','but','because'],0,'Think of a precaution.','Ifall = in case.'),
pick('Choose the right word.','Du måste sova, ___ blir du trött.',['annars','eftersom','ifall'],0,'Otherwise.','Annars = otherwise.')
],
boss:'Plan a celebration with a partner. Use one real condition (Om det blir …), one unreal condition (Om vi hade …, skulle vi …) and ifall and annars once each.'
};
LESSONS[42]={
unit:43,title:'Complaints and broken things',sv:'Klagomål',place:'KUNDTJÄNST',
rule:'Cleft sentences: det är … som …',
reference:'Put the important word in focus with Det är/var … som …: Det var cykeln som gick sönder. Det är du som har ansvar. Negative: Det var inte kunden som gjorde fel. A time can also be in focus: Det var i går som jag ringde.',
intro:'A customer phones a help desk about a washing machine that stopped working. Practise stressing the important word.',
words:[['gå sönder','to break'],['ett fel','a fault, a mistake'],['laga','to repair'],['klaga','to complain'],['missnöjd','dissatisfied'],['kräva','to demand'],['en garanti','a guarantee'],['ett kvitto','a receipt'],['byta','to exchange'],['en återbetalning','a refund'],['ett klagomål','a complaint'],['en tillverkare','a manufacturer']],
story:{title:'På kundtjänst',lines:[
['Det var tvättmaskinen som gick sönder redan efter en vecka.','It was the washing machine that broke after only a week.'],
['Det är jag som har kvittot, och det är ni som har garantin.','I am the one with the receipt, and you are the ones with the guarantee.'],
['Det var inte kunden som gjorde fel, utan tillverkaren.','It was not the customer who did wrong, but the manufacturer.'],
['Det är först nu som de svarar på mina mejl.','It is only now that they answer my emails.'],
['Vi vill byta maskinen eller få pengarna tillbaka.','We want to exchange the machine or get our money back.'],
['Det är därför jag ringer i dag.','That is why I am calling today.']]},
tasks:[
pick('Choose the cleft sentence.','Which one puts bilen in focus?',['Det var bilen som gick sönder.','Bilen var det som gick sönder.','Som det var bilen gick sönder.'],0,'Det är/var … som …','Det var bilen som gick sönder.'),
tile('Put the words in order.',['Det','är','jag','som','har','kvittot.'],'I am the one who has the receipt.','Det är + focus + som.'),
tile('Put the words in order.',['Det','var','inte','du','som','hade','fel.'],'It was not you who was wrong.','Negative cleft.'),
type('Write the missing word.','Det var Anna ___ hittade nycklarna.',['som'],'The word that follows the focused word.','Det var Anna som hittade nycklarna.'),
type('Write the missing word.','Det var i går ___ jag ringde.',['som'],'Time in focus.','Det var i går som jag ringde.'),
pick('Which sentence puts Maria in focus?','Choose one.',['Det var Maria som städade.','Maria städade.','Städade Maria.'],0,'Cleft = det är/var … som.','Det var Maria som städade.'),
listen('Listen. What broke?','Det var tvättmaskinen som gick sönder.',['The washing machine','The car','The phone'],0,'Tvättmaskin = washing machine.','The washing machine.'),
pick('Story check: what does the customer want?','Vi vill byta maskinen eller få pengarna tillbaka.',['A new machine or the money back','An apology only','A discount'],0,'Byta = exchange.','Exchange it or get a refund.'),
pick('Choose the right word.','Det är först nu ___ de svarar.',['som','att','där'],0,'Cleft: som.','Det är först nu som de svarar.'),
pick('Choose the meaning.','Vi klagar på servicen.',['We complain about the service.','We pay for the service.','We repair the service.'],0,'Klaga = complain.','Klaga på = complain about.'),
tile('Put the words in order.',['Det','var','på','torsdagen','som','det','hände.'],'It was on Thursday that it happened.','A time in focus.'),
pick('Choose the correct sentence.','It is the teacher who decides.',['Det är läraren som bestämmer.','Läraren det är som bestämmer.','Det läraren är som bestämmer.'],0,'Start with Det är.','Det är läraren som bestämmer.')
],
boss:'Role-play a call to customer service. The customer stresses what went wrong with Det var … som …; the agent answers Det är … som … and offers a solution.'
};
LESSONS[43]={
unit:44,title:'Applying for a job',sv:'Jobbansökan',place:'JOBBET',
rule:'Den som, allt som, det som, vad',
reference:'Den som = the person who: Den som söker ska skicka ett CV. De som = those who. Allt som = everything that: Allt som du behöver finns här. Det som = what (the thing that): Det som är viktigt är erfarenhet. Vad = what in indirect questions: Jag vet inte vad du menar.',
intro:'A job advert, an interview and a happy ending. Practise the relative expressions.',
words:[['en ansökan','an application'],['ett CV','a CV'],['en intervju','an interview'],['erfarenhet','experience'],['en arbetsgivare','an employer'],['en anställning','a job (position)'],['en kompetens','a skill'],['en referens','a reference'],['anställa','to hire'],['bidra med','to contribute'],['kalla till','to call in'],['en lön','a salary']],
story:{title:'Att söka jobb',lines:[
['Den som söker jobbet ska skicka in ett CV och ett personligt brev.','Anyone who applies for the job should send a CV and a cover letter.'],
['Allt som arbetsgivaren behöver veta finns i ansökan.','Everything the employer needs to know is in the application.'],
['Det som är viktigast är erfarenhet av liknande arbete.','What matters most is experience of similar work.'],
['På intervjun frågade de vad jag kunde bidra med.','At the interview they asked what I could contribute.'],
['De som blev kallade fick träffa chefen.','Those who were called in got to meet the manager.'],
['Jag fick jobbet, och det som gjorde mig gladast var att de ringde själva.','I got the job, and what made me happiest was that they phoned themselves.']]},
tasks:[
pick('Choose the right words.','___ söker jobbet ska skriva ett brev.',['Den som','Det som','Vad som'],0,'A person who.','Den som = the person who.'),
pick('Choose the right word.','Allt ___ du behöver finns här.',['som','vad','att'],0,'Everything that.','Allt som.'),
pick('Choose the right word.','Jag vet inte ___ du menar.',['vad','som','den'],0,'An indirect question.','Vad = what.'),
type('Write the missing word.','___ som är viktigast är erfarenhet.',['det'],'The thing that.','Det som.'),
type('Write the missing word.','De ___ blev kallade fick träffa chefen.',['som'],'Those who.','De som.'),
tile('Put the words in order.',['Den','som','söker','jobbet','ska','skicka','ett','CV.'],'Anyone who applies should send a CV.','Den som … ska.'),
tile('Put the words in order.',['Allt','som','du','behöver','finns','på','hemsidan.'],'Everything you need is on the website.','Allt som.'),
listen('Listen. What should the applicant send?','Skicka ett CV och ett personligt brev.',['A CV and a letter','A photo','Only a diploma'],0,'Personligt brev = cover letter.','A CV and a cover letter.'),
pick('Story check: what made the writer happiest?','Det som gjorde mig gladast var att de ringde själva.',['They phoned themselves','The salary','The office'],0,'Ringa = phone.','That they phoned themselves.'),
pick('Which sentence is correct?','Choose one.',['Jag förstår inte vad du säger.','Jag förstår inte som du säger.','Jag förstår inte det du vad säger.'],0,'What = vad.','Vad du säger.'),
pick('Choose the right word.','___ som vill kan anmäla sig.',['De','Det','Vad'],0,'Those who.','De som vill.'),
type('Write the missing word.','Hon berättade ___ hon hade gjort.',['vad'],'Indirect question.','Vad hon hade gjort.')
],
boss:'Role-play a job interview. The interviewer asks Vad kan du bidra med? and Vad är du mest stolt över? The candidate answers with Det som … and Allt som …'
};
LESSONS[44]={
unit:45,title:'Alone, by yourself, together',sv:'Ensam eller tillsammans',place:'SOFFAN',
rule:'Lägga/ligga, sätta/sitta, ställa/stå',
reference:'Putting something somewhere: lägga (lägger, la, lagt), sätta (sätter, satte, satt), ställa (ställer, ställde, ställt). Being somewhere: ligga (ligger, låg, legat), sitta (sitter, satt, suttit), stå (står, stod, stått). Själv = on one’s own; ensam = lonely or alone.',
intro:'Someone who lives alone describes the evening. Practise verbs of putting and being.',
words:[['ensam','lonely, alone'],['själv','by oneself'],['tillsammans','together'],['ensamhet','loneliness'],['ett sällskap','company'],['vänta','to wait'],['lägga','to put (lying)'],['ligga','to lie, be located'],['sätta','to put (sitting)'],['sitta','to sit'],['ställa','to put (standing)'],['stå','to stand']],
story:{title:'Ensam eller själv?',lines:[
['Jag bor själv, men jag känner mig sällan ensam.','I live on my own, but I rarely feel lonely.'],
['På kvällen lägger jag mobilen på bordet och sätter mig i soffan.','In the evening I put the phone on the table and sit down on the sofa.'],
['Boken ligger kvar där jag la den i går.','The book is still lying where I put it yesterday.'],
['Min granne ställde en kruka vid dörren, och nu står den där.','My neighbour put a plant by the door, and now it stands there.'],
['Vi sitter ofta tillsammans på balkongen.','We often sit together on the balcony.'],
['Jag har satt upp en lapp: ”Kom in och fika!”','I have put up a note: “Come in for coffee!”']]},
tasks:[
pick('Choose the right verb.','Jag ___ boken på bordet.',['lägger','ligger','lagt'],0,'You put it there.','Lägger = put.'),
pick('Choose the right verb.','Boken ___ på bordet.',['ligger','lägger','la'],0,'It is located there.','Ligger = lies.'),
pick('Choose the right verb.','Hon ___ sig i soffan.',['sätter','sitter','står'],0,'She sits down.','Sätter sig = sits down.'),
pick('Choose the right form.','Han ___ i soffan hela kvällen.',['satt','satte','sätter'],0,'Past tense of sitta.','Satt.'),
type('Write the past tense of ställa.','Vi ___ glaset på hyllan.',['ställde'],'Regular verb.','Ställde.'),
type('Write the present tense of stå.','Glaset ___ på hyllan.',['står'],'Present of stå.','Står.'),
tile('Put the words in order.',['Jag','la','mobilen','på','bordet.'],'I put the phone on the table.','La = past of lägga.'),
tile('Put the words in order.',['Boken','har','legat','där','i','en','vecka.'],'The book has lain there for a week.','Legat = supine of ligga.'),
listen('Listen. Where does the writer sit in the evening?','På kvällen sätter jag mig i soffan.',['On the sofa','On the balcony','In the kitchen'],0,'Soffa = sofa.','On the sofa.'),
pick('Story check: what does the note say?','Kom in och fika!',['Come in for coffee','Be quiet','Gone out'],0,'Fika = coffee break.','Come in for coffee.'),
pick('Which word means lonely?','Jag känner mig ___ ibland.',['ensam','själv','tillsammans'],0,'Feeling alone.','Ensam.'),
pick('Choose the correct form.','Hon har ___ nycklarna på bordet.',['lagt','legat','låg'],0,'Put = lagt.','Har lagt.')
],
boss:'Describe your room or kitchen to a partner. Say where things are (ligger, står, sitter) and where you put them yesterday (la, ställde, satte). The partner draws it.'
};
LESSONS[45]={
unit:46,title:'Vikings and belief',sv:'Vikingarnas tro',place:'VIKING',
rule:'Particle verbs, part 2',
reference:'Common particle verbs: ge sig av (set off), ta över (take over), gå under (perish), bryta ut (break out), sprida sig (spread), hålla på med (be busy with), sätta på (switch on), lägga ner (shut down). The particle keeps its place after the verb.',
intro:'Vikings, gods and old customs. Practise particle verbs in history and everyday life.',
words:[['en viking','a Viking'],['en gud','a god'],['en sed','a custom'],['segla','to sail'],['begrava','to bury'],['ge sig av','to set off'],['ta över','to take over'],['gå under','to perish'],['bryta ut','to break out'],['sprida sig','to spread'],['hålla på med','to be busy with'],['tro på','to believe in']],
story:{title:'Vikingarnas värld',lines:[
['Vikingarna gav sig av i långskepp och seglade över havet.','The Vikings set off in longships and sailed across the sea.'],
['Många trodde på gudar som Oden och Tor.','Many believed in gods like Odin and Thor.'],
['Man begravde de döda tillsammans med sina saker.','They buried the dead together with their belongings.'],
['Kristendomen tog långsamt över, och gamla seder gick under.','Christianity slowly took over, and old customs perished.'],
['Efter hand spred sig tron, och de gamla gudarna glömdes bort.','Gradually the faith spread and the old gods were forgotten.'],
['Vi håller fortfarande på med vissa seder, som valborgsbrasor.','We still keep some customs, such as Walpurgis bonfires.']]},
tasks:[
pick('Choose the right particle.','Karavanen gav sig ___ tidigt på morgonen.',['av','in','ner'],0,'Ge sig av = set off.','Gav sig av.'),
pick('Choose the right particle.','Nya ledare tog ___ makten.',['över','ut','av'],0,'Take over.','Tog över.'),
pick('Choose the right particle.','Gamla seder gick ___.',['under','upp','på'],0,'Perished.','Gå under.'),
type('Write the particle.','Kriget bröt ___ 1914.',['ut'],'Break out.','Bryta ut.'),
type('Write the missing word.','Tron spred ___ över Norden.',['sig'],'Sprida sig = spread.','Spred sig.'),
tile('Put the words in order.',['De','håller','fortfarande','på','med','gamla','seder.'],'They still keep old customs.','Hålla på med.'),
tile('Put the words in order.',['Vikingarna','gav','sig','av','i','långskepp.'],'The Vikings set off in longships.','Gav sig av.'),
listen('Listen. Who did many believe in?','Många trodde på Oden och Tor.',['Odin and Thor','Zeus','Only the sun'],0,'Tro på = believe in.','Odin and Thor.'),
pick('Story check: what are valborgsbrasor?','Vi håller fortfarande på med vissa seder, som valborgsbrasor.',['Spring bonfires','Christmas markets','Boat races'],0,'Brasa = bonfire.','Spring bonfires on Walpurgis night.'),
pick('Choose the meaning.','Allt höll på att gå under.',['Everything was about to perish.','Everything was growing.','Everything was starting.'],0,'Gå under = perish.','About to perish.'),
pick('Choose the correct word order.','Subordinate clause.',['…att de gav sig av tidigt.','…att de sig gav av tidigt.','…att gav de sig av tidigt.'],0,'Subject, verb, reflexive, particle.','…att de gav sig av tidigt.'),
pick('Choose the right particle.','Hon satte ___ en ny film.',['på','upp','ut'],0,'Switch on.','Sätta på.')
],
boss:'Tell a short story about an old tradition. Use at least five particle verbs (gav sig av, tog över, gick under, bröt ut, höll på med). Your partner asks Varför …?'
};
LESSONS[46]={
unit:47,title:'Culture and the workplace',sv:'Arbetsliv',place:'KONTORET',
rule:'Linking words and word order',
reference:'After därför, dessutom, dock, alltså, ändå the verb comes second: Därför pratar vi engelska. Use medan, trots att, eftersom, så att as subordinate conjunctions: Medan några föredrar möten, vill andra skriva. Å ena sidan … å andra sidan = on the one hand … on the other.',
intro:'A multicultural workplace: practise the words that connect ideas and the word order they bring.',
words:[['dessutom','besides'],['därför','therefore'],['dock','however'],['alltså','so, thus'],['ändå','nevertheless'],['medan','while'],['å ena sidan','on the one hand'],['å andra sidan','on the other hand'],['i stället','instead'],['en kollega','a colleague'],['mångkulturell','multicultural'],['en arbetsplats','a workplace']],
story:{title:'På arbetsplatsen',lines:[
['Vår arbetsplats är mångkulturell, och därför pratar vi både svenska och engelska.','Our workplace is multicultural, and therefore we speak both Swedish and English.'],
['Medan några kollegor föredrar möten, vill andra skriva mejl.','While some colleagues prefer meetings, others want to write emails.'],
['Dessutom har vi olika syn på fika.','Besides, we have different views on coffee breaks.'],
['Fikat är dock viktigt för alla.','The coffee break is, however, important to everyone.'],
['Å ena sidan kan det vara svårt att förstå varandra, å andra sidan lär man sig mycket.','On the one hand it can be hard to understand each other, on the other hand you learn a lot.'],
['Vi har alltså mycket att vinna på att vara öppna.','We have a lot to gain, then, from being open.']]},
tasks:[
pick('Choose the correct word order.','After därför comes the verb.',['Därför kom han inte.','Därför han kom inte.','Därför inte kom han.'],0,'Verb second.','Därför kom han inte.'),
pick('Choose the correct word order.','After dessutom comes the verb.',['Dessutom är hon snäll.','Dessutom hon är snäll.','Dessutom snäll är hon.'],0,'Verb second.','Dessutom är hon snäll.'),
pick('Choose the right word.','___ några gillar möten, vill andra skriva mejl.',['Medan','Därför','Dock'],0,'While.','Medan.'),
pick('Choose the right word.','___ att det regnade, gick vi ut.',['Trots','Dock','Därför'],0,'Despite.','Trots att.'),
type('Write the missing word.','Vi hade ingen tid. ___ gick vi på bio.',['ändå'],'Nevertheless.','Ändå.'),
type('Write the missing word.','Han glömde nycklarna. ___ kom han inte in.',['därför'],'Therefore.','Därför.'),
tile('Put the words in order.',['Därför','pratar','vi','både','svenska','och','engelska.'],'Therefore we speak both Swedish and English.','Verb second after därför.'),
tile('Put the words in order.',['Medan','vissa','vill','prata,','vill','andra','skriva.'],'While some want to talk, others want to write.','Medan starts a subordinate clause.'),
listen('Listen. Which languages does the workplace use?','Vi pratar både svenska och engelska.',['Swedish and English','Only Swedish','Swedish and German'],0,'Både … och.','Swedish and English.'),
pick('Story check: what is important to everyone?','Fikat är viktigt för alla.',['The coffee break','Meetings','Email'],0,'Fika = coffee break.','The coffee break.'),
pick('Which means “on the other hand”?','Choose one.',['å andra sidan','dessutom','alltså'],0,'Opposite of å ena sidan.','Å andra sidan.'),
pick('Choose the right word.','Han var sjuk, ___ han kom ändå.',['men','eftersom','så att'],0,'Contrast.','Men.')
],
boss:'Give a short opinion about working in a team. Use därför, dessutom, dock, medan and å ena sidan … å andra sidan, and keep the verb second after each linking adverb.'
};
LESSONS[47]={
unit:48,title:'Language and words',sv:'Språk och ord',place:'ORDBOKEN',
rule:'Word building and word families',
reference:'Swedish builds new words from old ones: tala → ett tal, talare, uttal, tal­språk. Prefixes: o- (opposite), miss-, för-. Suffixes: -het, -ning, -are, -else. Compound nouns take the gender of the last part.',
intro:'How a language grows. Practise building words from a common stem and noticing their families.',
words:[['ett uttal','a pronunciation'],['en betydelse','a meaning'],['ett ordförråd','a vocabulary'],['en översättning','a translation'],['en talare','a speaker'],['ett modersmål','a mother tongue'],['missförstå','to misunderstand'],['otydlig','unclear'],['en nyhet','a piece of news'],['en möjlighet','a possibility'],['en förklaring','an explanation'],['ett språkbruk','language use']],
story:{title:'Ett språk växer',lines:[
['Ett språk förändras hela tiden, och nya ord kommer till varje år.','A language changes all the time, and new words appear every year.'],
['Många ord byggs av delar vi redan känner, till exempel uttal och översättning.','Many words are built from parts we already know, for example pronunciation and translation.'],
['Den som missförstår ett ord ber ofta om en förklaring.','Someone who misunderstands a word often asks for an explanation.'],
['Modersmålet är det språk man lärde sig först.','The mother tongue is the language one learned first.'],
['Ett rikt ordförråd ger fler möjligheter att uttrycka sig.','A rich vocabulary gives more possibilities of expressing oneself.'],
['Därför är det bra att läsa mycket, även när texten är otydlig.','That is why it is good to read a lot, even when the text is unclear.']]},
tasks:[
pick('Which word means “a speaker”?','Choose one.',['en talare','ett tal','ett uttal'],0,'-are makes a person.','En talare.'),
pick('Choose the right prefix.','Texten är ___tydlig, jag förstår den inte.',['o','miss','för'],0,'O- = not.','Otydlig.'),
pick('Choose the right word.','Jag har ___ vad du sa.',['missförstått','förstått ej','otydligt'],0,'Miss- = wrongly.','Missförstått.'),
type('Write the noun made from förklara.','Kan du ge mig en ___?',['förklaring'],'-ning.','Förklaring.'),
type('Write the noun made from möjlig.','Det finns en ___ att komma.',['möjlighet'],'-het.','Möjlighet.'),
tile('Put the words in order.',['Ett','rikt','ordförråd','ger','fler','möjligheter.'],'A rich vocabulary gives more possibilities.','Subject, verb, object.'),
tile('Put the words in order.',['Nya','ord','kommer','till','varje','år.'],'New words appear every year.','Plain main clause.'),
listen('Listen. What is the mother tongue?','Modersmålet är det språk man lärde sig först.',['The language learned first','The language at work','A foreign language'],0,'Först = first.','The language learned first.'),
pick('Story check: why is reading good?','Det är bra att läsa mycket för att utöka ordförrådet.',['It widens your vocabulary','It is quiet','It is cheap'],0,'Ordförråd = vocabulary.','It widens your vocabulary.'),
pick('Which gender does uttal have?','Ett uttal.',['ett','en','either'],0,'Tal is an ett-word.','Ett uttal.'),
pick('Choose the correct compound.','A book with words explained.',['ordbok','bokord','ordsbok'],0,'Order: first part describes.','Ordbok.'),
pick('Choose the right word.','Hon har en fin ___ av romanen.',['översättning','översätta','översatt'],0,'A noun after fin.','En översättning.')
],
boss:'Take three words from one family (for example tala – talare – uttal) and make a sentence with each. Your partner guesses the meaning of a fourth member of the family.'
};
LESSONS[48]={
unit:49,title:'The year around',sv:'Året runt',place:'KALENDERN',
rule:'Particle verbs, part 3 and time phrases',
reference:'Frequent particle verbs about time and events: gå ut (end up, go out), komma fram (arrive), ta slut (run out), dra igång (get going), skjuta upp (postpone), ställa in (cancel), hinna med (manage to). Time: under sommaren, i början av, i slutet av, vid jul, om några veckor.',
intro:'A year of seasons and plans, and what happens to the plans. Practise particle verbs with time expressions.',
words:[['skjuta upp','to postpone'],['ställa in','to cancel'],['dra igång','to get going'],['ta slut','to run out'],['hinna med','to manage in time'],['komma fram','to arrive'],['i början av','at the start of'],['i slutet av','at the end of'],['under sommaren','during summer'],['vid jul','at Christmas'],['en säsong','a season'],['en semester','a holiday (leave)']],
story:{title:'Planer och ändringar',lines:[
['I början av året drar vi igång ett nytt projekt.','At the start of the year we get a new project going.'],
['Under våren hinner vi med mycket, men sommaren ställer in det mesta.','In spring we manage a lot, but summer cancels most things.'],
['Mötet i juni måste skjutas upp eftersom många har semester.','The June meeting must be postponed because many are on holiday.'],
['Vid jul brukar kassan ta slut, och därför spar vi i förväg.','At Christmas the money often runs out, and so we save in advance.'],
['I slutet av december kommer alla fram till släkten.','At the end of December everyone arrives at the relatives.'],
['Hinner du med allt innan nyår?','Will you manage everything before New Year?']]},
tasks:[
pick('Choose the right particle.','Mötet måste skjutas ___.',['upp','ut','av'],0,'Postponed.','Skjuta upp.'),
pick('Choose the right particle.','De ställde ___ konserten på grund av regnet.',['in','på','av'],0,'Cancelled.','Ställa in.'),
pick('Choose the right particle.','Pengarna tog ___ före månadens slut.',['slut','upp','fram'],0,'Ran out.','Ta slut.'),
type('Write the particle.','Vi drar ___ projektet i januari.',['igång'],'Get going.','Dra igång.'),
type('Write the particle.','Hinner du ___ allt före jul?',['med'],'Hinna med.','Hinna med.'),
pick('Choose the right time phrase.','___ sommaren reser vi till kusten.',['Under','Vid','Mellan'],0,'During.','Under sommaren.'),
tile('Put the words in order.',['I','slutet','av','året','kommer','alla','fram.'],'At the end of the year everyone arrives.','Verb second after the time phrase.'),
tile('Put the words in order.',['Mötet','måste','skjutas','upp','till','nästa','vecka.'],'The meeting must be postponed until next week.','Passive with -s.'),
listen('Listen. When does the money run out?','Vid jul tar pengarna ofta slut.',['At Christmas','In summer','In spring'],0,'Vid jul = at Christmas.','At Christmas.'),
pick('Story check: why is the June meeting postponed?','Många har semester i juni.',['Many are on holiday','It is raining','The room is full'],0,'Semester = holiday.','Many are on holiday.'),
pick('Choose the meaning.','Vi hinner med tåget.',['We make it in time for the train.','We miss the train.','We buy the train.'],0,'Hinna med = manage in time.','Make it in time.'),
pick('Choose the correct sentence.','At the start of the year.',['I början av året','På början av året','Vid början på året'],0,'Fixed phrase.','I början av året.')
],
boss:'Plan a year in six sentences with a partner. Use skjuta upp, ställa in, dra igång, ta slut and hinna med at least once each, plus i början/slutet av.'
};
LESSONS[49]={
unit:50,title:'Body and mind',sv:'Kropp och själ',place:'VÅRDCENTRALEN',
rule:'Connectors for cause, concession and purpose',
reference:'Cause: eftersom, på grund av. Concession: trots att, även om, fastän. Purpose: för att, så att. Result: så … att. Compare: Han gick till jobbet trots att han var sjuk. Hon vilar för att bli frisk. After on the subordinate conjunction, inte goes before the verb.',
intro:'Staying well, resting, and the reasons people give. Practise connectors that explain why.',
words:[['hälsa','health'],['en kropp','a body'],['vila','to rest'],['stressa','to stress'],['en vana','a habit'],['träna','to exercise'],['sömn','sleep'],['orka','to have the energy'],['må bra','to feel well'],['en läkare','a doctor'],['en kur','a treatment'],['förebygga','to prevent']],
story:{title:'Må bra',lines:[
['Hon tränar tre gånger i veckan för att hon vill må bra.','She exercises three times a week because she wants to feel well.'],
['Även om hon är trött går hon ut en sväng.','Even if she is tired she goes out for a walk.'],
['Trots att jobbet är stressigt försöker hon sova åtta timmar.','Despite the job being stressful she tries to sleep eight hours.'],
['Eftersom hon inte vill bli sjuk äter hon regelbundet.','Because she does not want to fall ill she eats regularly.'],
['Hon vilar så att kroppen orkar nästa dag.','She rests so that her body has the energy next day.'],
['En god vana kan förebygga många problem.','A good habit can prevent many problems.']]},
tasks:[
pick('Choose the right word.','Hon vilar ___ hon ska orka.',['för att','trots att','även om'],0,'Purpose.','För att.'),
pick('Choose the right word.','___ att det regnade gick vi ut.',['Trots','Eftersom','Så'],0,'Despite.','Trots att.'),
pick('Choose the right word.','___ han var trött, tränade han.',['Även om','Så att','Därför'],0,'Even if/though.','Även om.'),
type('Write the missing word.','Han stannade hemma ___ han var sjuk.',['eftersom'],'Because.','Eftersom.'),
type('Write the missing word.','Sov mer, ___ att du orkar.',['så'],'So that.','Så att.'),
pick('Choose the correct word order.','Subordinate clause with inte.',['…eftersom hon inte vill bli sjuk.','…eftersom hon vill inte bli sjuk.','…eftersom inte hon vill bli sjuk.'],0,'Inte before the verb.','…eftersom hon inte vill bli sjuk.'),
tile('Put the words in order.',['Även','om','jag','är','trött,','går','jag','ut.'],'Even if I am tired I go out.','Subclause then verb-subject.'),
tile('Put the words in order.',['Hon','äter','regelbundet','för','att','må','bra.'],'She eats regularly in order to feel well.','För att + infinitive.'),
listen('Listen. How often does she train?','Hon tränar tre gånger i veckan.',['Three times a week','Every day','Once a month'],0,'Tre gånger.','Three times a week.'),
pick('Story check: why does she rest?','Hon vilar så att kroppen orkar nästa dag.',['So the body has energy next day','Because she is bored','To miss work'],0,'Orka = have energy.','So her body can cope.'),
pick('Choose the meaning.','Förebygga sjukdomar.',['To prevent illness','To cause illness','To cure illness'],0,'Före = before.','Prevent.'),
pick('Which expresses concession?','Choose one.',['fastän','eftersom','så att'],0,'Although.','Fastän.')
],
boss:'Explain your own routine for feeling well. Use för att, eftersom, trots att, även om and så att once each. Your partner challenges one reason.'
};
LESSONS[50]={
unit:51,title:'Society and rules',sv:'Samhälle och regler',place:'KOMMUNHUSET',
rule:'Formal and informal register',
reference:'Formal Swedish uses longer words and passive: Ärendet har behandlats. Vi ber er inkomma med handlingar. Everyday speech is shorter: Vi har kollat det. Skicka in papperen. Match the register to the situation: a letter to an authority, a message to a friend.',
intro:'The same message in a letter and in a chat. Practise choosing formal or informal wording.',
words:[['ett ärende','a case, errand'],['en handling','a document'],['inkomma med','to submit'],['behandla','to process'],['en myndighet','an authority'],['en ansökan','an application'],['ett beslut','a decision'],['överklaga','to appeal'],['en blankett','a form'],['kontrollera','to check'],['en handläggare','a case officer'],['ett svar','an answer']],
story:{title:'Brev och kompis',lines:[
['Myndigheten skickar ett brev: Ert ärende har behandlats.','The authority sends a letter: Your case has been processed.'],
['Vi ber er inkomma med kompletterande handlingar senast den 15 mars.','We ask you to submit supplementary documents by 15 March at the latest.'],
['Du kan överklaga beslutet inom tre veckor.','You can appeal the decision within three weeks.'],
['Till en kompis skriver man: Hej! Jag har fått svar nu.','To a friend you write: Hi! I have got an answer now.'],
['Jag måste skicka in några papper, kan du hjälpa mig?','I must send in some papers, can you help me?'],
['Båda sätten är rätt, men bara i rätt situation.','Both ways are right, but only in the right situation.']]},
tasks:[
pick('Which sentence is formal?','Choose one.',['Ert ärende har behandlats.','Vi har fixat saken.','Det är klart nu.'],0,'Passive, polished.','Ert ärende har behandlats.'),
pick('Which sentence is informal?','Choose one.',['Skicka in papperen!','Vi ber er inkomma med handlingar.','Beslutet kan överklagas.'],0,'Short imperative.','Skicka in papperen.'),
pick('Choose the formal word.','Vi ber er ___ med handlingar.',['inkomma','kolla','fixa'],0,'Official verb.','Inkomma.'),
type('Write the missing word.','Du kan ___ beslutet inom tre veckor.',['överklaga'],'Appeal.','Överklaga.'),
type('Write the missing word.','Fyll i en ___ och skicka den.',['blankett'],'A form.','Blankett.'),
pick('Which opens a letter to an authority?','Choose one.',['Bäste herr Persson,','Tjena!','Hallå där!'],0,'Polite start.','Bäste herr Persson.'),
tile('Put the words in order.',['Ert','ärende','har','behandlats.'],'Your case has been processed.','Passive perfect.'),
tile('Put the words in order.',['Kan','du','hjälpa','mig','med','blanketten?'],'Can you help me with the form?','Question with kan first.'),
listen('Listen. What can you do within three weeks?','Du kan överklaga beslutet inom tre veckor.',['Appeal the decision','Move','Apply again'],0,'Inom = within.','Appeal the decision.'),
pick('Story check: when are the documents due?','Senast den 15 mars.',['By 15 March','On 5 March','After 15 March'],0,'Senast = at the latest.','By 15 March.'),
pick('Choose the register.','“Jag har kollat med chefen.”',['Informal','Formal','Legal'],0,'Kolla is casual.','Informal.'),
pick('Choose the formal alternative to “fixa”.','Choose one.',['ordna','kolla','dra'],0,'More neutral/formal.','Ordna.')
],
boss:'Write two short messages about the same thing: one formal letter to an authority and one chat message to a friend. Your partner marks each word that changed.'
};
LESSONS[51]={
unit:52,title:'Relationships',sv:'Relationer',place:'FIKAT',
rule:'Verbs with prepositions',
reference:'Many Swedish verbs take a fixed preposition: bero på, tänka på, träffas på, vara rädd för, bry sig om, tycka om, hålla med om, förlita sig på, skratta åt, tacka för, tro på. Learn the verb with its preposition as one unit.',
intro:'Talking about friends, family and feelings with the right small word after the verb.',
words:[['bero på','to depend on'],['bry sig om','to care about'],['hålla med om','to agree about'],['förlita sig på','to rely on'],['skratta åt','to laugh at'],['tacka för','to thank for'],['vara rädd för','to be afraid of'],['tycka om','to like'],['sakna','to miss'],['en vän','a friend'],['ett förtroende','trust'],['en konflikt','a conflict']],
story:{title:'Vänner och familj',lines:[
['Min bästa vän bryr sig om mig och jag förlitar mig på henne.','My best friend cares about me and I rely on her.'],
['Vi skrattar åt samma saker och håller med om det mesta.','We laugh at the same things and agree about most things.'],
['Det beror på dagen om vi träffas hemma eller på café.','It depends on the day whether we meet at home or at a café.'],
['Ibland är jag rädd för konflikter, men vi pratar alltid till slut.','Sometimes I am afraid of conflicts, but we always talk in the end.'],
['Jag tackar henne för stödet.','I thank her for the support.'],
['När hon reser saknar jag henne mycket.','When she travels I miss her a lot.']]},
tasks:[
pick('Choose the right preposition.','Jag förlitar mig ___ dig.',['på','om','för'],0,'Rely on.','Förlita sig på.'),
pick('Choose the right preposition.','Hon bryr sig ___ sina vänner.',['om','på','åt'],0,'Care about.','Bry sig om.'),
pick('Choose the right preposition.','Vi skrattar ___ skämtet.',['åt','för','med'],0,'Laugh at.','Skratta åt.'),
type('Write the preposition.','Det beror ___ vädret.',['på'],'Depends on.','Bero på.'),
type('Write the preposition.','Tack ___ hjälpen!',['för'],'Thank for.','Tacka för.'),
pick('Choose the right preposition.','Jag håller med dig ___ det här.',['om','på','åt'],0,'Agree about.','Hålla med om.'),
tile('Put the words in order.',['Jag','är','rädd','för','konflikter.'],'I am afraid of conflicts.','Vara rädd för.'),
tile('Put the words in order.',['Hon','bryr','sig','om','sina','vänner.'],'She cares about her friends.','Bry sig om.'),
listen('Listen. What does the writer miss?','När hon reser saknar jag henne.',['The friend','The job','The city'],0,'Sakna = miss.','The friend.'),
pick('Story check: what do the friends do together?','Vi skrattar åt samma saker.',['Laugh at the same things','Travel every week','Work together'],0,'Skratta åt.','Laugh at the same things.'),
pick('Choose the meaning.','Vi litar på varandra.',['We trust each other.','We leave each other.','We call each other.'],0,'Lita på = trust.','Trust each other.'),
pick('Choose the correct sentence.','Believe in.',['Jag tror på dig.','Jag tror för dig.','Jag tror om dig.'],0,'Tro på.','Jag tror på dig.')
],
boss:'Tell a partner about a good friend using at least five verbs with prepositions (bry sig om, lita på, skratta åt, tacka för, hålla med om). The partner repeats one in a new sentence.'
};
LESSONS[52]={
unit:53,title:'Working life',sv:'Arbetslivet',place:'ARBETSPLATSEN',
rule:'Register at work: emails, meetings, small talk',
reference:'Work Swedish mixes polite and relaxed. Email: Hej Anna, / Hälsningar, Erik. Meeting: Jag vill gärna lägga till … Kan vi ta det i nästa punkt? Small talk: Hur var helgen? Everyone says du, even to the manager.',
intro:'The three voices of a Swedish office: the email, the meeting and the coffee break.',
words:[['ett möte','a meeting'],['en punkt','an item'],['lägga till','to add'],['en deadline','a deadline'],['en chef','a manager'],['en uppgift','a task'],['ett mejl','an email'],['bifoga','to attach'],['en hälsning','a greeting'],['återkomma','to get back'],['en kollega','a colleague'],['ta upp','to bring up']],
story:{title:'På kontoret',lines:[
['Mejlet börjar med Hej Anna, och slutar med Hälsningar, Erik.','The email begins with Hej Anna, and ends with Hälsningar, Erik.'],
['Jag bifogar protokollet och återkommer i morgon.','I attach the minutes and will get back to you tomorrow.'],
['På mötet säger jag: Jag vill gärna lägga till en punkt.','At the meeting I say: I would like to add an item.'],
['Chefen svarar: Kan vi ta det sist?','The manager answers: Can we take it last?'],
['I fikarummet frågar kollegan: Hur var helgen?','In the coffee room the colleague asks: How was the weekend?'],
['Alla säger du, även till chefen.','Everyone says du, even to the manager.']]},
tasks:[
pick('Choose the right greeting.','To a colleague by email.',['Hej Anna,','Högaktade fru Andersson,','Hallå där,'],0,'Hej + name.','Hej Anna.'),
pick('Choose the right closing.','End of an email.',['Hälsningar, Erik','Din Erik!!!','Adjö.'],0,'Neutral.','Hälsningar.'),
pick('Choose the right phrase.','At a meeting.',['Jag vill gärna lägga till en punkt.','Ge mig ordet!','Tyst nu.'],0,'Polite.','Jag vill gärna lägga till en punkt.'),
type('Write the missing word.','Jag ___ protokollet till mejlet.',['bifogar'],'Attach.','Bifogar.'),
type('Write the missing word.','Jag ___ i morgon med ett svar.',['återkommer'],'Get back.','Återkommer.'),
pick('Choose the small talk.','In the coffee room.',['Hur var helgen?','Skicka rapporten.','Beslutet överklagas.'],0,'Friendly question.','Hur var helgen?'),
tile('Put the words in order.',['Kan','vi','ta','det','i','nästa','punkt?'],'Can we take it in the next item?','Question order.'),
tile('Put the words in order.',['Jag','återkommer','med','ett','svar','i','morgon.'],'I will get back with an answer tomorrow.','Verb second.'),
listen('Listen. How does the email end?','Mejlet slutar med Hälsningar, Erik.',['Hälsningar, Erik','Hej då','Kram'],0,'Hälsningar.','Hälsningar, Erik.'),
pick('Story check: what do people say to the manager?','Alla säger du, även till chefen.',['du','ni','herr'],0,'Du-reformen.','Everyone says du.'),
pick('Choose the meaning.','Ta upp en fråga.',['Bring up a question','Drop a question','Hide a question'],0,'Ta upp.','Bring up.'),
pick('Choose the right register for a deadline reminder.','Choose one.',['Kom ihåg att deadline är på fredag.','Du är sen, din slarver.','Ursäkta mig, högtärade.'],0,'Neutral and clear.','Kom ihåg att deadline är på fredag.')
],
boss:'Act a short office scene: write the email subject and first line, make a point in a meeting, and start small talk at coffee. Partner gives one comment on the register.'
};
LESSONS[53]={
unit:54,title:'Sweden and the world',sv:'Sverige och världen',place:'VÄRLDSKARTAN',
rule:'Relative clauses: som, vars, där, vilket',
reference:'Som = who/which/that: Landet som jag bor i. Vars = whose: En kvinna vars bok jag läste. Där/dit/dit = place: Staden där jag föddes. Vilket = which (referring to a whole sentence): Han kom sent, vilket irriterade alla. Preposition may go before: Landet i vilket jag bor (formal).',
intro:'Countries, trade and travel. Practise relative clauses to add detail in one sentence.',
words:[['ett land','a country'],['en gräns','a border'],['en handel','trade'],['en export','export'],['en import','import'],['ett medlemskap','membership'],['en flykting','a refugee'],['en kultur','a culture'],['en utlandsresa','a trip abroad'],['påverka','to affect'],['en union','a union'],['en nation','a nation']],
story:{title:'Landet och världen',lines:[
['Sverige är ett land som har exporterat stål och trä i hundratals år.','Sweden is a country that has exported steel and timber for hundreds of years.'],
['Det finns städer där människor från många kulturer bor sida vid sida.','There are cities where people from many cultures live side by side.'],
['Jag känner en man vars föräldrar kom som flyktingar.','I know a man whose parents came as refugees.'],
['Handeln med omvärlden påverkar oss mycket, vilket syns i priserna.','Trade with the world affects us a lot, which shows in the prices.'],
['Landet i vilket vi bor är medlem i EU.','The country in which we live is a member of the EU.'],
['Allt som händer utomlands kan snabbt påverka oss.','Everything that happens abroad can quickly affect us.']]},
tasks:[
pick('Choose the right word.','Det är staden ___ jag föddes.',['där','som','vars'],0,'Place.','Där.'),
pick('Choose the right word.','Hon är en författare ___ böcker jag älskar.',['vars','som','vilket'],0,'Whose.','Vars.'),
pick('Choose the right word.','Han kom sent, ___ irriterade mig.',['vilket','som','vars'],0,'Refers to the whole clause.','Vilket.'),
type('Write the missing word.','Det är ett land ___ exporterar stål.',['som'],'Who/which/that.','Som.'),
type('Write the missing word.','Boken, ___ jag läste i går, var bra.',['som'],'Which.','Som.'),
pick('Choose the correct sentence.','A refugee whose family lives here.',['En flykting vars familj bor här.','En flykting som vars familj bor här.','En flykting där familj bor här.'],0,'Vars alone.','Vars familj.'),
tile('Put the words in order.',['Sverige','är','ett','land','som','exporterar','stål.'],'Sweden is a country that exports steel.','Relative som.'),
tile('Put the words in order.',['Staden','där','jag','bor','är','liten.'],'The town where I live is small.','Där = where.'),
listen('Listen. What did Sweden export?','Sverige exporterade stål och trä.',['Steel and timber','Cars only','Fish'],0,'Stål = steel.','Steel and timber.'),
pick('Story check: what shows in prices?','Handeln med omvärlden syns i priserna.',['Trade with the world','The weather','Holidays'],0,'Handel = trade.','Trade with the world.'),
pick('Choose the right word.','Allt ___ du ser här är nytt.',['som','vilket','där'],0,'Everything that.','Allt som.'),
pick('Choose the meaning.','Hon blev sjuk, vilket oroade oss.',['She fell ill, which worried us.','She worried us, who was ill.','She was ill, where we worried.'],0,'Vilket = which.','Which worried us.')
],
boss:'Describe your home country in three sentences, each with a different relative word (som, där, vars or vilket). The partner asks a follow-up on one of them.'
};
LESSONS[54]={
unit:55,title:'Technology and progress',sv:'Teknik och utveckling',place:'LABBET',
rule:'Linking words for comparison and argument',
reference:'Argument words: å ena sidan … å andra sidan, till skillnad från, jämfört med, däremot, tvärtom, visserligen … men, i och med att, med hänsyn till, trots detta. Use däremot and tvärtom to contrast. Visserligen introduces a concession, then men.',
intro:'New inventions bring pros and cons. Practise connecting arguments cleanly.',
words:[['en uppfinning','an invention'],['en utveckling','a development'],['en fördel','an advantage'],['en nackdel','a disadvantage'],['däremot','on the other hand'],['tvärtom','on the contrary'],['visserligen','admittedly'],['jämfört med','compared with'],['till skillnad från','unlike'],['en risk','a risk'],['tillgänglig','accessible'],['effektiv','efficient']],
story:{title:'För och emot',lines:[
['Visserligen är tekniken effektiv, men den har också nackdelar.','Admittedly the technology is efficient, but it also has disadvantages.'],
['Jämfört med förr kan fler människor arbeta hemifrån.','Compared with the past more people can work from home.'],
['Till skillnad från brev kommer ett mejl fram direkt.','Unlike a letter, an email arrives directly.'],
['Många tror att det blir tråkigt; tvärtom blir det ofta enklare att träffas.','Many think it will be dull; on the contrary it often gets easier to meet.'],
['Äldre har ibland svårt med appar. Däremot lär sig barn snabbt.','Older people sometimes find apps hard. Children, on the other hand, learn fast.'],
['Å ena sidan sparar vi tid, å andra sidan finns det risker.','On the one hand we save time, on the other hand there are risks.']]},
tasks:[
pick('Choose the right word.','Han gillar kaffe. ___ dricker hon te.',['Däremot','Eftersom','Så att'],0,'Contrast.','Däremot.'),
pick('Choose the right word.','Det blir inte svårare; ___, det blir enklare.',['tvärtom','visserligen','alltså'],0,'On the contrary.','Tvärtom.'),
pick('Choose the right phrase.','___ förr är det enklare nu.',['Jämfört med','Trots att','Efter det'],0,'Compared with.','Jämfört med.'),
type('Write the missing word.','___ är telefonen dyr, men den är bra.',['visserligen'],'Admittedly.','Visserligen.'),
type('Write the missing word.','Mejl är snabba. Brev ___ tar tid.',['däremot'],'On the other hand.','Däremot.'),
pick('Choose the correct word order.','After däremot.',['Däremot lär sig barn snabbt.','Däremot barn lär sig snabbt.','Däremot snabbt lär barn sig.'],0,'Verb second.','Däremot lär sig barn snabbt.'),
tile('Put the words in order.',['Till','skillnad','från','brev','kommer','mejl','fram','direkt.'],'Unlike letters, emails arrive directly.','Verb second.'),
tile('Put the words in order.',['Å','ena','sidan','sparar','vi','tid.'],'On the one hand we save time.','Verb second after å ena sidan.'),
listen('Listen. What is easier?','Tvärtom blir det enklare att träffas.',['Meeting','Walking','Writing letters'],0,'Träffas.','Meeting.'),
pick('Story check: who learns fast?','Däremot lär sig barn snabbt.',['Children','Pensioners','Teachers'],0,'Barn = children.','Children.'),
pick('Choose the meaning.','Visserligen dyrt, men värt det.',['Admittedly expensive, but worth it.','Not expensive, not worth it.','Expensive because of it.'],0,'Concession.','Admittedly expensive but worth it.'),
pick('Choose the right word.','Det är en ___ att den är dyr.',['nackdel','fördel','uppfinning'],0,'Disadvantage.','Nackdel.')
],
boss:'Debate with a partner: is a new technology (phone, car, AI) a good thing? Use visserligen … men, däremot, tvärtom, jämfört med and till skillnad från.'
};
LESSONS[55]={
unit:56,title:'Communication',sv:'Kommunikation',place:'RADIOHUSET',
rule:'Idioms and set phrases',
reference:'Idioms are learned whole: ta ton (speak up), rakt på sak (straight to the point), hålla med någon (agree), lägga band på sig (hold back), dra sitt strå till stacken (do one’s part), få grepp om (get a grip of), säga ifrån (speak out), prata i nattmössan (talk nonsense), läsa mellan raderna (read between the lines).',
intro:'Talk about talking: set phrases that make Swedish sound natural.',
words:[['rakt på sak','straight to the point'],['säga ifrån','to speak up'],['läsa mellan raderna','to read between the lines'],['dra sitt strå till stacken','to do one’s part'],['lägga band på sig','to hold back'],['prata i nattmössan','to talk nonsense'],['få grepp om','to get a grip of'],['gå i taket','to hit the roof'],['hålla sams','to stay on good terms'],['ta i med hårdhandskarna','to be firm'],['slå an en ton','to strike a tone'],['komma överens','to agree']],
story:{title:'Prata och förstå',lines:[
['Jag gillar när folk kommer rakt på sak.','I like it when people get straight to the point.'],
['Ibland måste man säga ifrån, även om det är obehagligt.','Sometimes you must speak up, even if it is unpleasant.'],
['Läs mellan raderna: ibland betyder ett nej ett kanske.','Read between the lines: sometimes a no means a maybe.'],
['Alla ska dra sitt strå till stacken på mötet.','Everyone should do their part at the meeting.'],
['När chefen hörde det gick hon i taket.','When the manager heard that she hit the roof.'],
['Det är bättre att hålla sams än att gräla.','It is better to stay on good terms than to quarrel.']]},
tasks:[
pick('Choose the idiom.','Come straight to the point.',['Kom rakt på sak.','Kom i taket.','Kom i nattmössan.'],0,'Rakt på sak.','Kom rakt på sak.'),
pick('Choose the meaning.','Han pratar i nattmössan.',['He talks nonsense.','He sleeps at night.','He is quiet.'],0,'Nonsense.','Talks nonsense.'),
pick('Choose the meaning.','Läs mellan raderna.',['Read what is implied.','Read slowly.','Skip the text.'],0,'Hidden meaning.','Read between the lines.'),
type('Write the missing word.','Du måste säga ___ om du inte håller med.',['ifrån'],'Speak up.','Säga ifrån.'),
type('Write the missing word.','Alla ska dra sitt ___ till stacken.',['strå'],'A straw.','Strå.'),
pick('Choose the meaning.','Hon gick i taket.',['She got very angry.','She went up to the roof.','She fixed the roof.'],0,'Idiom.','She got very angry.'),
tile('Put the words in order.',['Det','är','bättre','att','hålla','sams.'],'It is better to stay on good terms.','Idiom hålla sams.'),
tile('Put the words in order.',['Kom','rakt','på','sak','och','var','kort.'],'Come straight to the point and be brief.','Imperative.'),
listen('Listen. What happened when the boss heard?','När chefen hörde det gick hon i taket.',['She got very angry','She laughed','She left'],0,'Idiom.','She got very angry.'),
pick('Story check: what can a no mean?','Ibland betyder ett nej ett kanske.',['A maybe','A yes','A promise'],0,'Kanske = maybe.','A maybe.'),
pick('Choose the idiom for “do your part”.','Choose one.',['dra sitt strå till stacken','gå i taket','prata i nattmössan'],0,'Teamwork.','Dra sitt strå till stacken.'),
pick('Choose the meaning.','Vi kom överens.',['We reached an agreement.','We came over.','We overslept.'],0,'Komma överens.','We agreed.')
],
boss:'Tell a short anecdote that uses at least four idioms from this mission. Your partner asks what each idiom means and replaces it with a plain phrase.'
};
LESSONS[56]={
unit:57,title:'Environment',sv:'Miljö och klimat',place:'KLIMATET',
rule:'Passive forms: -s passive, bli-passive, vara + participle',
reference:'-s passive: Avfallet sorteras. Bli-passive (event): Huset blev sålt. Vara + participle (state): Huset är sålt. Past participles agree: en sorterad sopa, ett sorterat glas, sorterade flaskor. By whom = av: Rapporten skrevs av forskarna.',
intro:'Climate, recycling and responsibility. Practise saying what is done without saying who does it.',
words:[['ett avfall','waste'],['sortera','to sort'],['återvinna','to recycle'],['ett utsläpp','an emission'],['en förnybar källa','a renewable source'],['minska','to reduce'],['skydda','to protect'],['en skog','a forest'],['en klimatförändring','climate change'],['en energi','energy'],['förorena','to pollute'],['ett beslut','a decision']],
story:{title:'Miljön',lines:[
['Avfallet sorteras i flera kärl, och glas återvinns varje vecka.','Waste is sorted into several bins, and glass is recycled every week.'],
['Utsläppen har minskats i många städer.','Emissions have been reduced in many cities.'],
['Skogen blev skyddad av en ny lag förra året.','The forest was protected by a new law last year.'],
['Rapporten skrevs av forskare, och beslutet fattades i går.','The report was written by researchers, and the decision was made yesterday.'],
['Energin från vind är förnybar, men elen måste ändå transporteras.','Wind energy is renewable, but the electricity must still be transported.'],
['Nu är flaskorna sorterade, och sopbilen kan komma.','Now the bottles are sorted and the bin lorry can come.']]},
tasks:[
pick('Choose the right passive.','Avfallet ___ i kärl.',['sorteras','sorterar','sorterat'],0,'-s passive.','Sorteras.'),
pick('Choose the right passive.','Rapporten ___ av forskare.',['skrevs','skriver','skrivit'],0,'Past -s.','Skrevs.'),
pick('Choose the right participle.','Huset är ___.',['sålt','sålda','sålde'],0,'Neuter.','Sålt.'),
type('Write the missing word.','Skogen blev ___ av en ny lag. (protect)',['skyddad'],'En-word participle.','Skyddad.'),
type('Write the missing word.','Utsläppen har ___ i många städer. (reduce, -s)',['minskats'],'Passive perfect.','Minskats.'),
pick('Choose the correct sentence.','Passive.',['Glas återvinns varje vecka.','Glas återvinner varje vecka.','Glas återvunnit varje vecka.'],0,'Återvinns.','Glas återvinns.'),
tile('Put the words in order.',['Rapporten','skrevs','av','forskare.'],'The report was written by researchers.','Av = by.'),
tile('Put the words in order.',['Nu','är','flaskorna','sorterade.'],'Now the bottles are sorted.','Plural participle.'),
listen('Listen. What is recycled weekly?','Glas återvinns varje vecka.',['Glass','Paper','Plastic'],0,'Glas = glass.','Glass.'),
pick('Story check: what protected the forest?','En ny lag skyddade skogen.',['A new law','A fence','The weather'],0,'Lag = law.','A new law.'),
pick('Choose the passive meaning.','Beslutet fattades i går.',['The decision was made yesterday.','They decide yesterday.','The decision fatta.'],0,'Fattas.','Was made yesterday.'),
pick('Which is a state, not an event?','Choose one.',['Flaskorna är sorterade.','Flaskorna sorteras.','Flaskorna blev sorterade.'],0,'Vara + participle.','Är sorterade.')
],
boss:'Describe how waste is handled in your town using only passive forms (sorteras, återvinns, hämtas, transporteras). The partner asks who does it, and you answer with av.'
};
LESSONS[57]={
unit:58,title:'City and country',sv:'Stad och land',place:'LANDSBYGDEN',
rule:'More verbs with prepositions and place phrases',
reference:'Verbs: bo i, flytta till/från, vara uppvuxen i, trivas med/i, sakna, längta efter/till, vänja sig vid, pendla till. Place phrases: på landet, i staden, ute på landsbygden, i storstan. Trivas = feel at home.',
intro:'Living in the city or the countryside, and what you long for. Practise verbs of living and place phrases.',
words:[['pendla','to commute'],['trivas','to feel at home'],['längta efter','to long for'],['vänja sig vid','to get used to'],['en storstad','a big city'],['landsbygd','countryside'],['en förort','a suburb'],['grannskap','neighbourhood'],['ett lugn','calm'],['en trafik','traffic'],['flytta till','to move to'],['vara uppvuxen','to have grown up']],
story:{title:'Stad eller land?',lines:[
['Jag är uppvuxen på landsbygden, men flyttade till storstan som vuxen.','I grew up in the countryside but moved to the big city as an adult.'],
['Jag trivs med energin här, men längtar efter lugnet hemma.','I enjoy the energy here but long for the calm at home.'],
['Det tog tid att vänja sig vid trafiken.','It took time to get used to the traffic.'],
['Många pendlar in från förorten varje morgon.','Many commute in from the suburb every morning.'],
['I grannskapet känner alla varandra.','In the neighbourhood everyone knows each other.'],
['På landet bor vi, men på semestern reser vi till staden.','In the country we live, but on holiday we go to the city.']]},
tasks:[
pick('Choose the right preposition.','Jag längtar ___ lugnet.',['efter','på','om'],0,'Long for.','Längta efter.'),
pick('Choose the right preposition.','Han har vant sig ___ trafiken.',['vid','på','med'],0,'Get used to.','Vänja sig vid.'),
pick('Choose the right preposition.','Vi flyttade ___ Göteborg.',['till','på','i'],0,'Move to.','Flytta till.'),
type('Write the missing word.','Hon trivs ___ staden.',['i','med'],'Feel at home in.','Trivs i staden.'),
type('Write the missing word.','Många ___ in från förorten.',['pendlar'],'Commute.','Pendlar.'),
pick('Choose the right place phrase.','Hon bor ___ landet.',['på','i','vid'],0,'På landet.','På landet.'),
tile('Put the words in order.',['Jag','är','uppvuxen','på','landsbygden.'],'I grew up in the countryside.','Uppvuxen = brought up.'),
tile('Put the words in order.',['Det','tog','tid','att','vänja','sig','vid','trafiken.'],'It took time to get used to the traffic.','Vänja sig vid.'),
listen('Listen. Where does the speaker long to be?','Jag längtar efter lugnet hemma.',['At home in the calm','At work','In the city centre'],0,'Lugn = calm.','At home in the calm.'),
pick('Story check: who commutes?','Många pendlar in från förorten.',['Many from the suburb','Only students','No one'],0,'Förort.','Many from the suburb.'),
pick('Choose the meaning.','Jag trivs bra här.',['I feel at home here.','I travel here.','I tire here.'],0,'Trivas.','I feel at home.'),
pick('Choose the correct sentence.','They moved from the city to the countryside.',['De flyttade från staden till landsbygden.','De flyttade av staden på landsbygden.','De flyttade till staden från landsbygden.'],0,'Från … till.','Från staden till landsbygden.')
],
boss:'Compare city life and country life with a partner. Use trivas, längta efter, vänja sig vid, pendla and flytta till. Decide together where each of you would like to live.'
};
LESSONS[58]={
unit:59,title:'A life in Swedish',sv:'Livet',place:'LIVET',
rule:'Review: idioms, particles, passive, linking words',
reference:'A mixed review of the C-level toolkit: set phrases (rakt på sak, i och för sig), particle verbs (ta över, ge sig av), passive (sorteras, blev skriven), linking words (därför, dessutom, däremot, visserligen) and relative clauses (som, vars, vilket).',
intro:'A story about life choices: practise everything together.',
words:[['i och för sig','in itself, admittedly'],['mer eller mindre','more or less'],['i längden','in the long run'],['på sikt','in the long term'],['hur som helst','anyhow'],['över lag','generally'],['enligt','according to'],['trots allt','after all'],['en vändpunkt','a turning point'],['ett val','a choice'],['en erfarenhet','an experience'],['sammanfatta','to sum up']],
story:{title:'Vändpunkten',lines:[
['Hon fick ett erbjudande som blev en vändpunkt.','She got an offer that became a turning point.'],
['I och för sig var jobbet bra, men hon längtade efter något nytt.','In itself the job was good, but she longed for something new.'],
['Därför gav hon sig av, och staden där hon flyttade blev hennes nya hem.','Therefore she set off, and the city where she moved became her new home.'],
['Enligt henne själv var valet svårt, men inte fel.','According to herself the choice was hard but not wrong.'],
['På sikt har det gett henne erfarenheter som hon aldrig hade fått annars.','In the long run it has given her experiences she would never have had otherwise.'],
['Hur som helst, trots allt är hon glad i dag.','Anyhow, after all she is happy today.']]},
tasks:[
pick('Choose the right phrase.','___ var jobbet bra, men hon ville något annat.',['I och för sig','På sikt','Hur som helst'],0,'Admittedly.','I och för sig.'),
pick('Choose the right word.','Staden ___ hon bor är stor.',['där','som','vars'],0,'Place.','Där.'),
pick('Choose the right verb form.','Beslutet ___ av styrelsen.',['fattades','fattar','fattat'],0,'Passive.','Fattades.'),
type('Write the particle.','Hon gav sig ___ tidigt.',['av'],'Set off.','Gav sig av.'),
type('Write the missing word.','Den ___ vågar vinner.',['som'],'Who.','Den som.'),
pick('Choose the right linking word.','Det var dyrt. ___ köpte vi den.',['Ändå','Eftersom','Så att'],0,'Nevertheless.','Ändå.'),
tile('Put the words in order.',['På','sikt','blir','det','bättre.'],'In the long term it gets better.','Verb second.'),
tile('Put the words in order.',['Hon','blev','glad,','trots','att','det','var','svårt.'],'She became happy, even though it was hard.','Trots att.'),
listen('Listen. What became a turning point?','Erbjudandet blev en vändpunkt.',['The offer','The holiday','The exam'],0,'Erbjudande.','The offer.'),
pick('Story check: how does she feel today?','Hon är glad i dag.',['Happy','Angry','Tired'],0,'Glad.','Happy.'),
pick('Choose the meaning.','Hur som helst.',['Anyhow','Next to him','How often'],0,'Set phrase.','Anyhow.'),
pick('Choose the meaning.','Sammanfatta texten.',['Sum up the text.','Copy the text.','Print the text.'],0,'Sammanfatta.','Sum up.')
],
boss:'Tell the story of an important choice in your life in about eight sentences. Use at least one idiom, one particle verb, one passive, one relative clause and two linking words.'
};
