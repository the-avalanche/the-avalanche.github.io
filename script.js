// TEMPLATE FOR NEW ADDITIONS
//{
//    name: "",
//    dateAdded: "Added 06/07/20",
//    desc: "",
//    subject: "",
//    body: ``,
//    to: "",
//    cc: "",
//},



var firstName = ""
var lastName = ""
var area = ""


$(document).ready(function(){
    $("#removals").hide()
    $("#reps").hide()
    $("#justice").hide()
})

$(".submit").click(function(event){
    event.preventDefault()
    if ($("#name").val() == "" || $("#area").val() == "" || $("#extras").val() == "") {
        alert("please input your name, area of residence, and extra thoughts before clicking submit!")
    } else {
        // CREATING AND SPLITTING NAMES
//        nameArray = $("#name").val().split(" ")
//        firstName = nameArray[0]
//        lastName = nameArray[1]
        name = $("#name").val()
        area = $("#area").val()
        extras = $("#extras").val()
        
        // REMOVALS ARRAY
        var removals = [
            {
                name: "Resignation of Bob Kellar",
                dateAdded: "Added 06/06/20",
                desc: "Citizens of Santa Clarita are calling for the resignation of Bob Kellar for calling himself a \"proud racist\"",
                subject: "Resignation of Bob Kellar",
                body: `Mayor Cameron Smyth, Councilpeople Weste, Mclean, Miranda, and Kellar,\n\nMy name is ${name}, and I am writing to you calling for the dismissal or resignation of sitting councilman Bob Kellar. For far too long the people of the Santa Clarita Valley have allowed Kellar, a blatant racist, to represent our multicultural community. As our global community experiences a cultural upheaval mirroring that of the tumultuous 1960s, we are working to build a world that rejects bigotry and xenophobia, and this means rejecting within our own communities first. Bob Kellar is an icon of the very bigotry, racism, and xenophobia we aim to extinguish from positions of power. It is because of this that a recent petition calling for the Bob Kellar’s resignation has garnered over 9,300 signatures and counting (https://bit.ly/3h0w837).\n\nKellar’s infamous statement referring to himself as a proud racist at an anti-immigrant rally in 2010, in which he repeatedly referred to migrant families as illegals, is just the tip of the iceberg. In 2019 Kellar not only voted for, but brought to the table, the resolution ending SB-54 SCV’s sanctuary status that forces police officers to act as ICE agents endangering hard working immigrant families and complicating trust between citizens and law enforcement. To add insult to injury, Bob Kellar was interviewed on Fox News by Laura Ingraham using the SCV city council chambers as the backdrop. During a city council meeting regarding SB-946 Bob Kellar said “If I had it my way, we wouldn’t have em folks here” in referring to Latino vendors. Kellar also said in a recent interview conducted by West Ranch student Quynn Lubs, “I have a cleaning lady that’s Hispanic, and the first thing I said was, ‘I want to see your papers’ ”\n\nHow can the city philosophy claim to be “we treat our employees and community members fairly and equally, without prejudice or bias,” when Bob Kellar, a city councilman, has continuously exercised bias and racism against his employees and SCV citizens of color? Santa Clarita’s history is rooted in prejudice and racism: according to “Escape from Los Angeles” by Stanford Alum Jack Schneider, “a survey of Santa Clarita residents revealed that relocating families cited ‘escaping the L.A. school system’ as a primary reason for leaving the city.”, the founder of the Signal has ties to the KKK, and a cross-burning was held in 1966 on Soledad Canyon Road. It is because of all of this that we demand a change, and this change begins with the removal of Bob Kellar from the city council. With Bob Kellar still in office, how can the minorities of SCV still feel equal and safe in this city? Allowing Bob Kellar to remain in a position of authority is an endorsement of his discriminatory and intolerant behavior and puts the minority citizens of SCV at risk.\n\nI want to make myself very clear: I have never and will never have tolerance for racism and bigotry, as it has no place in diverse communities that collectively work towards social change. My goal for the current moment is for Bob Kellar to be ousted from his seat. At the same time, I hope the rest of you use this opportunity and moment in history to work towards educating yourself on how to be anti-racist. I’m sure that the majority, if not all of you, carry some racist practices, ill intentioned or otherwise. Make no mistake: if any of you are to take this moment and blatantly ignore the opportunity for change, following in the racist footsteps of your colleague Bob Kellar, you can count on our community mobilizing, yet again, for your timely removal.\n\nI look forward to hearing a public statement regarding your action on this item.\n\nWe await your response,\n\n${name}`,
                to: "csmyth@santa-clarita.com",
                cc: "bmiranda@santa-clarita.com,bkellar@santa-clarita.com,lweste@santa-clarita.com,mmclean@santa-clarita.com",
            },
            {
                name: "Remove Liberty University President",
                dateAdded: "Added 06/07/20",
                desc: "Demanding the Resignation of racist Liberty University President, Jerry Falwell Jr.",
                subject: "Liberty University President",
                body: `Hello,\n\nMy name is ${name}. I live in ${area} and I am emailing today to appeal to you to use your influence in persuading Jerry Falwell Jr. to step down as Liberty University's president. Over the years, Jerry Falwell Jr. has ridiculed staff, called a student "physically retarded", made remarks about shooting Muslims, and delayed necessary action concerning COVID-19. The latest misuse of his position came in the form of a tweet: a previously circulated image of Governor Ralph Northam and a friend in blackface and a KKK hood. Jerry Falwell’s choice to bring the photo back into public view following the killings of George Floyd, Ahmaud Arbery, Tony McDade, and Breonna Taylor was tactless, incendiary, and unequivocally racist. This thoughtless lack of concern for Liberty’s African American students and alumni clearly demonstrates that Falwell Jr. should not be leading one of the largest Christian universities in the world. I urge you to reflect on the pain of Liberty's students and alumni and to make a motion toward the resignation of Jerry Falwell Jr. Under his leadership, I cannot in good conscience recommend Liberty as a Christian university.\n"If your brother sins against you, go and tell him his fault, between you and him alone. If he listens to you, you have gained your brother" (Matt. 18:15)\n\nSincerely,\n${name}`,
                to: "pastormac@cebclive.org",
                cc: "bautry@sbcv.org,crhody@imagechurch.com,david.rhodenhizer@crbc.org,dcrain@sbcv.org,gene.mims@judsonbaptist.com,whr@rawlingscompany.com,harold.rawlings@fuse.net,ike.reighard@piedmontchurch.tv,jonathan@trbc.org,ssnyder@davissnyder.com,tim@timlee.org",
            },
            {
                name: "Removal of Christopher Columbus Monument",
                dateAdded: "Added 06/25/20",
                desc: "Citizens of Columbus are calling for the removal of Christopher Columbus Monument at Columbus City Hall.",
                subject: "Removal of Christopher Columbus Monument",
                body: `Dear Mayor Ginther and members of Columbus City Council,\n\nHello,\n\nMy name is ${name} and I am a resident of ${area}. I am writing today to demand the removal of the Christopher Columbus Monument that is located in front of the Columbus City Hall.\n\nChristopher Columbus is not a man who deserves to be displayed proudly in any city. His most famous achievement, the “discovery” of the Americas, was a lie. Before Columbus’ arrival to the New World, Native Americans had been living there for centuries. Columbus was known to be a racist. He called the indigenous people “Indians,” and treated them as less than humans, enslaving and murdering them. Furthermore, he gave Native American adults and children alike to his men to rape, at one point noting that 9- and 10-year-old girls were “in demand.” During the 11 years that Columbus was in the New World, the amount of indigenous people in the area where he landed dropped from 8 million to 100,000. Not to mention, he and his men brought diseases like smallpox to the New World, which also killed a significant number of the indigenous population. His crimes were so heinous for even his times that he was eventually brought back to Spain in chains and subsequently arrested. In the 11 years that Christopher Columbus was on American soil, he inflicted a reign of terror on the indigenous population.\n\nThis is the man that you choose to continue to honor by keeping his monument at our city hall - the very place of representation of our city. He is the absolute image of colonialism, racism, white supremacy, enslavement, and the genocide of the Native Americans. By keeping the monument in its place, you are not only condoning his crimes but also sending a message to your own citizens and to the world that that is the value that our city and government stand for.\n\nWe cannot change the past. However, we can change the future. Cities all across the country have already decided to take action after the truth was finally brought up to light. Hartford, New Haven, Middletown, and Detroit have already removed their statues of Christopher Columbus. Additionally, cities such as Chicago, Boston, and Philadelphia are considering the removal of the statues and are actively working with community members to reach a solution. Just today, Columbus State Community College announced their decision to remove the Christopher Columbus statue located on their campus.\n\nI believe that this is a unique opportunity and duty for the Mayor and City Council of our city to address systemic racism here. Our community members have consistently and patiently asked for the removal of the memorial. Now is the time. I  demand that the Christopher Columbus Monument be removed from the Columbus City Hall.\n\nSincerely,\n${name}`,
                to: "zgdavidson@columbus.gov,LMCapobianco@columbus.gov,kaellingsen@columbus.gov,jwcarmean@columbus.gov,DFriendFoster@columbus.gov,GMAmes@columbus.gov,KBMccain@columbus.gov,HNMiller@columbus.gov,tyharden@columbus.gov,cenewman@columbus.gov,jdcarter@columbus.gov,LJFrank@columbus.gov,NNHarper@columbus.gov,cgwilliams@columbus.gov",
                cc: "311@columbus.gov",
            },

        ]
        var justice = [
            {
                name: "Justice for Breonna Taylor",
                dateAdded: "Added 06/07/20",
                desc: "Demanding accountability in the Louisville Police Department following the murder of Breonna Taylor",
                subject: "Justice for the murder of Breonna Taylor",
                body: `Hello,\n\nMy name is ${name}. I am a resident of ${area} and I am emailing today to demand accountability for the racist murder of Breonna Taylor. Like thousands of people across the country, I was appalled to hear about Breonna Taylor's murder on March 13th. Echoing the requests of Louisville community organizers, the following demands must be met to ensure that the officers responsible for Breonna's death are held accountable for their brash, reprehensible actions:\n\n1. Your office and the Louisville City Council must address the use of force by the Louisville Metro Police\n2. The officers that killed Breonna must be fired, and have their pensions revoked\n3. Ensure that all necessary information is provided to a local, independent civilian community police accountability council\n4. Create policy for a transparent investigation process due to law enforcement misconduct\n5. Drop all charges for Kenneth Walker, Breonna’s boyfriend, who attempted to defend them and their home.\n\nI also demand that charges be pressed against all officers involved in this heinous killing, including Sgt. Jonathan Mattingly and officers Brett Hankison and Myles Cosgrove. They should be charged and prosecuted to the fullest extent of the law for murder.\n\nIn addition, I demand that we provide more support for community efforts and organizations that work to prevent police brutality and violence.\n\nBreonna Taylor was an ER technician, working tirelessly to help others during this global pandemic. She should be alive today. She would be alive today if it were not for the gross abuse of power and white supremacy exhibited by the Louisville Police Department. All officers involved must face consequences for this murder in order to provide her family with justice and to deter law enforcement from committing racist and brutal acts of violence against communities of color.\n\nIt is imperative that you condemn the actions of these officers. Raids cannot be performed with a shoot first, ask questions later mentality. Too many lives have been lost this way, and too often "danger" is determined deeply entrenched racial biases, not actual threat level.\n\nIt is a tragedy that Breonna Taylor is not alive today. Police must be held to a higher standard than this. I trust that your office and the involved parties will do the right thing.\n\nSincerely,\n${name}`,
                to: "greg.fischer@louisvilleky.gov",
                cc: "robert.schroeder@louisvilleky.gov,tbwine@louisvilleprosecutor.com",
            },
            {
                name: "Justice for Tony McDade",
                dateAdded: "Added 06/07/20",
                desc: "Demanding a complete and transparent, public and independent investigation into the murder of Tony McDade",
                subject: "Justice for Tony McDade",
                body: `Hello,\n\nI am writing to you after reading about the murder of Tony McDade on Holton Street in your city that took place on May 27, 2020.\n\nFirstly, I request that you use Tony’s correct name (Tony McDade) and pronouns (he/him) on the official police website and in any communication with the press. To use his birth name and female pronouns is a huge sign of disrespect.\n\nI am very upset and disturbed by the events that took place. We need answers about what exactly happened, and justice for Tony.\n\nA complete and transparent, public and independent investigation must take place. Charges must be brought against the officer involved, and all information/evidence must be made available to the public as soon as possible.\n\nThank you for your time,\n${name}`,
                to: "ContactUs@talgov.com",
                cc: "mayor@talgov.com",
            },
            {
                name: "Justice for Julius Jones",
                dateAdded: "Added 06/07/20",
                desc: "Demanding a fair trial and review of clemency application for death row inmate Julius Jones",
                subject: "Justice for Julius Jones",
                body: `Dear Oklahoma Pardon and Parole Board and Governor Stitt,\n\nJulius Jones (#270147OSP) is on Death Row for a horrific murder in 1999, despite persisting questions regarding his guilt.  The ABC Network’s three-hour documentary, The Last Defense, strengthens the case for his innocence. A worldwide audience is following the case, looking with fresh eyes at the Jones conviction, and concluding that he did not receive a fair trial.\n\nDue in part to legislation passed in the 1990s, appeals judges tend to review the specific evidence that is brought before them, and mostly avoid connecting the dots and evaluating how each mistake fits into the larger narrative. Former Florida Supreme Court Chief Justice Gerald Kogan wrote that the U. S. Supreme Court “should insist, at the very least, that Jones receives a hearing where all the evidence, including that of racial bias, can be heard.” The Court ruled that these issues should have been raised earlier, therefore, Julius' life now depends upon Oklahomans, the Pardon and Parole Board and the governor. I ask that you grant clemency, so the quest for justice is no longer derailed.\n\nA diverse group of local and international leaders, including former House Speaker Kris Steele, the Congressional Black Caucus, Sister Helen Prejean, legal scholar Bryan Stevenson and others have joined the struggle for justice for Julius Jones. If Julius were retried today, what evidence could now be considered?\n\nThe testimony of four family members on what Julius was doing at the time of the murder was not provided to the jury, neither did the jury hear statements by two inmates who said that the co-defendant bragged about the killing and the deal he made to get out of prison in 15 years. He, in fact, was released 15 years into his 30-year sentence.\n\nJulius’ inexperienced public defender acknowledged that he did a “terrible job” of cross-examining the co-defendant who repeatedly contradicted himself when fingering Julius as the murderer. The only eyewitness testified that the shooter, like the co-defendant who had cornrows, had up to an inch of hair sticking out from his cap, but the jury wasn’t shown contemporary photographs of Julius’ close-cropped hair.\n\nA juror said, “Well, they should just take that n—– out back, shoot him and bury him under the jail.” The jury foreman told ABC that, in a case like that one, you “go with your heart more than anything else.” The juror trusted “what you felt in your gut.” When delivering the verdict, the juror “felt right.”\n\nOklahoma ranks first in the country’s incarceration rates, and alarming cases of exonerations continue to persist because of the work of the Oklahoma Innocence Project. Because of the pervasive issues in Julius Jones’ case, now is the time to review his clemency application and act affirmatively.\n\nSincerely,\n${name}`,
                to: "boardmembers@ppb.ok.gov",
                cc: "boardmembers@ppb.ok.gov",
            },
            {
                name: "Justice for Dion Johnson",
                dateAdded: "Added 06/07/20",
                desc: "Demanding a complete and transparent, public and independent investigation into the murder of Dion Johnson",
                subject: "Justice for Dion Johnson",
                body: `Hello,\n\nI am writing to you from ${area} about the murder of Dion Johnson, an unarmed and asleep Black man, on Loop 101 at Tatum Boulevard in Phoenix on Monday, May 25, 2020.\n\nI am horrified and enraged by the events that took place. We require information regarding the tragedy that took place, and we demand justice for Dion Johnson and his family.\n\nA complete and transparent, public and independent investigation must take place. We demand the release of information and the arrests of the Department of Public Safety trooper involved. All information and evidence must be made available to the public as soon as possible.\n\nSincerely,\n${name}`,
                to: "pio_unit@azdps.gov",
                cc: "tamra.ingersoll@phoenix.gov,matthew.hamada@phoenix.gov,nickolas.valenzuela@phoenix.gov,annie.degraw@phoenix.gov, barton.fears@phoenix.gov,yvette.roeder@phoenix.gov,mercedes.fortune@phoenix.gov,tommy.thompson@phoenix.gov,maggie.a.cox@phoenix.gov,phoenixpd.pio@phoenix.gov",
            },
            {
                name: "Justice for David McAtee",
                dateAdded: "Added 06/07/20",
                desc: "Demanding accountability for the racist and unjust murder of David McAtee",
                subject: "Justice for David McAtee",
                body: `Hello,\nMy name is ${name}. I am a resident of ${area} and I am writing today to demand accountability for the racist and unjust murder of David McAtee.\n\nAs you know, David McAtee, a community pillar who for years fed the people and the police of Louisville, was shot down while trying to shield his niece from unwarranted police aggression. At the time of the shooting, no officers were wearing activated body cameras. Whether this was a purposeful abuse tactic or due to gross negligence, it is nonetheless unacceptable.\n\n We need the responsible officers to be arrested, charged, and tried in a court of law. Furthermore, I demand that any review of Louisville's police force's institutional failure be transparent, open to the public, and democratic. We, as Americans, will not tolerate living in fear and we ask that you join us in working to protect the people, not the police.\n\nSincerely,\n${name}`,
                to: "greg.fischer@louisvilleky.gov",
                cc: "attorney.general@ag.ky.gov",
            },
            {
                name: "Justice for James Scurlock",
                dateAdded: "Added 06/07/20",
                desc: "Demanding accountability for the racist and unjust murder of James Scurlock",
                subject: "Justice for James Scurlock",
                body: `Hello,\n\nMy name is ${name}. I am a resident of ${area} and I am emailing today to demand accountability for the racist murder of James Scurlock.\n\nI demand that charges be pressed against Jacob Gardner in this heinous and racist murder. He should be charged and prosecuted to the fullest extent of the law for murder.\nJames Scurlock would be alive today if it was not for the white supremacy exhibited by Jacob Gardner.\n\nIn addition, I demand that we start providing more support towards community efforts and organizations supporting anti-racism work outside of the police forces.\n\nSincerely,\n${name}`,
                to: "djp1977@nebraska.gov",
                cc: "jake.brennan@nebraska.gov,hotline@cityofomaha.com,don.arp@nebraska.gov,taylor.gage@nebraska.gov,justin.pinkerman@nebraska.gov,scott.d.ingalsbe.mil@mail.mil,cody.thomas@nebraska.gov,jodie.fawl@nebraska.gov,pete.festersen@cityofomaha.org,ben.gray@cityofomaha.org,vinny.palermo@cityofomaha.org,rich.pahls@cityofomaha.org,brinker.harding@cityofomaha.org,aimee.melton@cityofomaha.org",
            },
            {
                name: "Investigation for the death of Robert Fuller",
                dateAdded: "Added 06/11/20",
                desc: "Demanding accountability for the death of Robert Fuller, who was found hanging outside Palmdale City Hall and has thus far been dismissed as a suicide",
                subject: "Justice for Robert Fuller",
                body: `Hello,\n\nMy name is ${name} and I am a resident of ${area}. I am demanding accountability for the death of Robert Fuller. Local media is pointing towards this likely being a suicide, but given the current political climate, the method of death, and America’s  historical ties to lynching in hand with Fuller’s positionality as a black man, it seems remarkably more likely that this was a no accident. In addition, it is horribly ignorant for city officials to not have addressed the effect this moment in time is having on the Black Community residing in white-flight suburbs — like Palmdale — within their statements to the press. I can guarantee you this is a race issue at its core. Members of his family have also expressed discomfort with the way this case has been handled thus far, his cousin specifically stating “the city of Palmdale is remaining silent. This shit makes absolutely no sense at all. Wtf is really going on?! We need answers”. Calling this, what appears to very clearly be a lynching, a suicide this early on seems uncomfortably like a coverup. It would be grossly irresponsible to not to have a complete and transparent, public and independent investigation take place. In addition, I demand that you start providing more support towards community efforts and organizations supporting anti-racism work outside of the police forces.\n\nSincerely,\n${name}`,
                to: "shofbauer@cityofpalmdale.org,rloa@cityofpalmdale.org",
                cc: "abishop@cityofpalmdale.org,lbettencourt@cityofpalmdale.org,jcarrillo@cityofpalmdale.org",
            },
            {
                name: "Investigation for the death of Malcolm Harsch",
                dateAdded: "Added 06/13/20",
                desc: "Demanding accountability for the death of Malcolm Harsch, who was found hanging outside a library in Victorville and has thus far been dismissed as a suicide",
                subject: "Justice for Malcolm Harsch",
                body: `Hello,\n\nMy name is ${name} and I am a resident of ${area}. I am demanding accountability for the death of Malcolm Harsch. Local media is pointing towards this likely being a suicide, but given the current political climate, the method of death, and America’s racist history with lynching in hand with Harsch’s positionality as a black man, it seems remarkably more likely that this was a lynching. In addition, it is horribly ignorant for city officials to not have addressed the effect this moment in time is having on the Black Community in white-flight suburbs — like Victorville — in their statements to the press. I can guarantee you this is a race issue at its core. His family has also expressed discomfort in the way this investigation has been conducted thus far, with rightful concern that it is being conducted in a manner that will “avoid further media attention”. Calling this, what appears to very clearly be a lynching, a suicide this early on seems like a coverup. It would be grossly irresponsible to not to have a complete and transparent, public and independent investigation take place. In addition, I demand that we start providing more support towards community efforts and organizations supporting anti-racism work outside of the police forces.\n\nSincerely,\n${name}`,
                to: "ggarcia@victorvilleca.gov,rramirezdean@victorvilleca.gov",
                cc: "jcox@victorvilleca.gov,bagomez@victorvilleca.gov,dsjones@victorvilleca.gov",
            },
//            {
//                name: "Investigation for the death of Malcolm Harsch",
//                dateAdded: "Added 06/13/20",
//                desc: "Demanding accountability for the death of Malcolm Harsch, who was found hanging outside a library in Victorville and has thus far been dismissed as a suicide",
//                subject: "Justice for Elijah McClain",
//                body: `Hello,\n\nMy name is ${name} and I am a resident of ${area}. I am demanding accountability for the death of Malcolm Harsch. Local media is pointing towards this likely being a suicide, but given the current political climate, the method of death, and America’s racist history with lynching in hand with Harsch’s positionality as a black man, it seems remarkably more likely that this was a lynching. In addition, it is horribly ignorant for city officials to not have addressed the effect this moment in time is having on the Black Community in white-flight suburbs — like Victorville — in their statements to the press. I can guarantee you this is a race issue at its core. His family has also expressed discomfort in the way this investigation has been conducted thus far, with rightful concern that it is being conducted in a manner that will “avoid further media attention”. Calling this, what appears to very clearly be a lynching, a suicide this early on seems like a coverup. It would be grossly irresponsible to not to have a complete and transparent, public and independent investigation take place. In addition, I demand that we start providing more support towards community efforts and organizations supporting anti-racism work outside of the police forces.\n\nSincerely,\n${name}`,
//                to: "apdpio@auroragov.org",
//                cc: "Governorpolis@state.co.us,dyoung@da17.state.co.us,nrodgers@auroragov.org,dafna.michaelson.jenet.house@state.co.us,kevinpriola@gmail.com,mcoffman@auroragov.org,websiteemail@da17.state.co.us,firechief@auroragov.org,cmurillo@auroragov.org,njohnsto@auroragov.org,mberzins@auroragov.org,jmarcano@auroragov.org,acoombs@auroragov.org,fbergan@auroragov.org,cgardner@auroragov.org,dgruber@auroragov.org,sbarkman@auroragov.org,alawson@auroragov.org",
//            },
            {
                name: "Justice for Steven Taylor",
                dateAdded: "Added 06/25/20",
                desc: "Citizens of San Leandro are calling for the release of names and firing of the two San Leandro police officers responsible for the murder of Steven Taylor.",
                subject: "Justice for Steven Taylor",
                body: `Dear Mayor Cutter and San Leandro City Council Members,\n\nMy name is ${name} and I am a resident of ${area}. I am demanding justice for the murder of Steven Taylor that occurred on April 18 at the hands of two San Leandro police officers.\n\nThe San Leandro City Council voted to request an independent investigation by the state attorney general’s office into Steven’s murder. On Wednesday June 3rd, the San Leandro City Council was supposed to discuss the latest lawsuit at a special closed session. I am requesting more information regarding the status of the lawsuit and the multiple investigations that were discussed on the City Council meeting on June 3rd be made public.\n\nWith that being said, an investigation is not enough. We need the names of the police officers made public and we need those officers who are responsible to be fired and charged. Steven’s murder occurred exactly two months ago, and we have yet to receive the names of his murders.\n\nAt recent meetings, the SL City Council has discussed reducing the budget of the SLPD and putting that money towards other social services. They voted on and approved for $1.7 to be cut from the SLPD department budget and that it be allocated towards other services. This is a mere 4% of the entire police department budget in San Leandro. This is an unacceptable reduction and we are demanding more.\n\nA clear SLPD budget item that should be cut is the one that allows armed officers to patrol San Leandro High School. As SLHS student Rachel Arcadio stated, “They are not there to build relationships. They are there to build a culture of fear.”, a culture of fear that police officers across America perpetuate and instill.\n\nBecause of the $40 million San Leandro police department budget, there is a lack of equitable and accessible public services, like mental health services. Money taken from the police department should be put towards programs and services that people can reach out to for whatever they may be struggling with. If the police department budget was smaller and such programs and services existed, Steven might still be with us today. Unfortunately, we will never know because two, unnamed police officers ended his life rather than helping him, protecting him, and serving him.\n\nThough I am glad to see some progress in the budget re-allocation and investigations into Steven’s murder, it is nowhere near enough and we are far from where we must be.\n\nI hope that you take these demands into consideration. Steven Taylor deserves justice, but more importantly, he deserved to be here with us today. We ask you to work harder to protect the people, not the police.\n\nSincerely,\n${name}`,
                to: "pcutter@sanleandro.org,dcox@sanleandro.org,ehernandez@sanleandro.org,vaguilar@sanleandro.org,blee@sanleandro.org,clopez@sanleandro.org,pballew@sanleandro.org",
                cc: "citycouncil@sanleandro.org",
            },

        ]
        
        var reps = [
            
            {
                name: "Justice for Black Lives in America | United Nations",
                dateAdded: "Added 06/07/20",
                desc: "Presenting demands for justice for Black Lives in America, as set forth by the NAACP",
                subject: "Liberty University President",
                body: `Hello,\n\nHere is a list of demands I would like to present to you, set forth by the NAACP:\n\n• A ban on the use of knee holds and choke holds as an acceptable practice for police officers.\n• The Use of Force Continuum for any police department in the country must ensure that there are at least 6 levels of steps, with clear rules on escalation.\n• Each State’s Open Records Act must ensure officer misconduct information and disciplinary histories are not shielded from the public. Recertification credentials may be denied for police officers if determined that their use of deadly force was unwarranted by federal guidelines.\n• Implementation of Citizen’s Review Boards in municipalities to hold police departments accountable and build confidence.\nI agree with the NAACP’s “calling on the United Nations to step up and classify the mistreatment of Black people in the U.S. by the police as a human rights violation, aggressively call out the U.S. government in the process, and impose sanctions if necessary.”\n\nI strongly encourage you to take the proper actions to see that this message is relayed to the highest level of authority you are in contact with. I strongly encourage you to accept that Black people are not able to live just and freely in this country. I strongly encourage you to take the proper actions which you have the power to, to address this issue and work on fixing this issue.\n\nThank you.\n${name}`,
                to: "InfoDesk@ohchr.org",
                cc: "otp.informationdesk@icc-cpi.int,AskDOJ@usdoj.gov,simonettadipippo@gmail.com,liy@un.org,shire@un.org,kochk@un.org,ochen@un.org,rajkumar@un.org,calzada@un.org,fedorova@un.org,laplanche@un.org,lambert.hogenhout@gmail.com",
            },
//            {
//                name: "Retire Hart High School's Mascot",
//                dateAdded: "Added 06/10/20",
//                desc: "Students in Santa Clarita, CA are demanding that local high school retire their school mascot: the \"Indian\"",
//                subject: "Retire Hart High’s Mascot",
//                body: `Dear Hart District Board Members,\n\nHello, my name is ${name} and I am a community member emailing to ask that Hart High School change their mascot from the ‘Indian.’\nThe United State’s treatment of indigenous people has been abhorrent and many of the psychological, economic, and societal issues they presently face due to this treatment is perpetuated through the use of Native American mascots, whether ‘offensive’ or not. I urge Hart High School to replace their mascot.\nNative Americans are still people that are a part of a culture that still exists, this mascot disrespectfully displays them stereotypically and as a caricature. Let’s “keep it classy” and take the proper steps forward to make sure Hart is on the right side of history.\n\nSincerely,\n${name}`,
//                to: "jdautremont@hartdistrict.org,elwilson@hartdistrict.org,cpowell@hartdistrict.org,jhuhn@hartdistrict.org,kwelch@hartdistrict.org,lstorli@hartdistrict.org",
//                cc: "csmyth@santa-clarita.com,bmiranda@santa-clarita.com,bkellar@santa-clarita.com,lweste@santa-clarita.com,mmclean@santa-clarita.com",
//            },
            {
                name: "End Ties to LAPD and Divest From UCPD",
                dateAdded: "Added 06/11/20",
                desc: "UCLA students, alumni, staff, and outside community members are calling on UCLA Administration to cut ties with the LAPD and to divest from UCPD",
                subject: "End Ties to LAPD and Divest From UCPD",
                body: `Dear Chancellor Block and Executive Vice-Chancellor Carter,\n\nWe write as UCLA undergraduate students, graduate students, alumni, outside community members, and staff in solidarity with the Black Graduate Student Association and Afrikan Student Union at UCLA. We are writing in response to your May 30 email, in which you stated that UCLA believes deeply that “equity, respect and justice are central to the character of our institution” and that “Black lives DO matter” at UCLA and beyond. Yet, two days later, a UCLA-leased stadium, named after Jackie Robinson, an icon of the Black Freedom Struggle, was used as a field jail by the LAPD to hold and process protestors. These protestors, many of them UCLA students, are among the thousands who have been speaking out against white supremacy and institutional racism and, in doing so, have faced increasing levels of brutality from the LAPD and a militarized response from the US state.\n\nWe join the UCLA Faculty members who have expressed their deep concerns (t.ly/VxqN) about the decisions and events that led to this collaboration between UCLA and the LAPD and who have demanded a full public accounting of the events, including a detailed public statement, and the immediate cessation of this relationship. UCLA’s response has been inconsistent, first claiming they had no knowledge of LAPD’s use of the Jackie Robinson Stadium, which the LAPD have themselves contradicted (t.ly/OMZO), and later admitting to it being a “mistake”. We assert, along with UCLA faculty (t.ly/XP1T), that this response is deeply unsatisfactory and furthermore does not demonstrate that UCLA is taking any active steps towards ending its long-standing alliances (t.ly/DxY9) with the LAPD and police departments at the county, state and federal levels more broadly.\n\nJust as the rebellions happening nationwide and in Los Angeles County cannot be reduced to single incidents of racist police killings, the complicity of UCLA in white supremacy and institutionalized racism is not limited to the events at Jackie Robinson Stadium. For example, this past March, the UC system spent millions of dollars on riot police and military surveillance (t.ly/ZXjY) in response to graduate student organizing at UCLA and other UC campuses statewide.  Moreover, UCLA employs LAPD Police Commissioner Steven Soboroff and the architect and profiteer of a racist policing technology, anthropologist Jeffrey Brantingham.\n\nWe write to state clearly: UCLA’s message of support for racial justice is completely insufficient without immediate and concrete steps to end its existing agreements and relationships with the LAPD. We are in complete support of the visionary statement and demands put forth by Justice 4 Black Lives (t.ly/NcPW), and the BGSA and ASU at UCLA (t.ly/fbUr), who have called for divestment from policing across the entire UC system.\n\nAs members of the UCLA and Los Angeles community, we demand that UCLA follow the lead of the University of Minnesota and affirmatively declare both its intention and its plan:\n\n1. To end its relationship the Los Angeles Police Department and other county, state and federal police departments\n2. To defund UCLA PD\n3. To reinvest these funds towards underserved campus communities, including a fully funded Black Resource Center.\n\nMore than mere listening, we accept nothing less than a clear and direct commitment to address the demands outlined above. We await UCLA Chancellor Block and Executive Vice-Chancellor Carter to publicly state and to take concrete steps towards what we all need assurance of right now: the LAPD, and police more generally, have no place in a public university.\n\nSigned,\n${name}`,
                to: "chancellor@ucla.edu",
                cc: "evc@conet.ucla.edu",
            },
            

        ]
 
        
        
        $(".submit").hide()
        
        // BACK TO NORMAL LMAO
        $("#removals").show()
        $("#reps").show()
        $("#justice").show()
        for (var i = 0; i < removals.length; i++) {
            var source = removals[i]
            var newSubject = encodeURIComponent(source["subject"])
            var newBody = encodeURIComponent(`${extras}\n\n${source["body"]}`)
            var link = `mailto:${source["to"]}?cc=${source["cc"]}&subject=${newSubject}%20%7C%20${name}&body=${newBody}`

            var paragraph = `<div class="col-md-4 mb-5" ><div class="card h-100"><div class="card-body"><h4 class="card-title">${source["name"]}</h4><h6 class="card-subtitle mb-2 text-muted">${source["dateAdded"]}</h6><p class="card-text">${source["desc"]}</p></div><div class="card-footer"><a href="${link}" target="_" class="btn btn-primary">Send Email</a></div></div></div>`
            $(".removals").append(paragraph)
            
        }
        for (var i = 0; i < justice.length; i++) {
            var source = justice[i]
            var newSubject = encodeURIComponent(source["subject"])
            var newBody = encodeURIComponent(`${extras}\n\n${source["body"]}`)
            var link = `mailto:${source["to"]}?cc=${source["cc"]}&subject=${newSubject}%20%7C%20${name}&body=${newBody}`
        
            var paragraph = `<div class="col-md-4 mb-5" ><div class="card h-100"><div class="card-body"><h4 class="card-title">${source["name"]}</h4><h6 class="card-subtitle mb-2 text-muted">${source["dateAdded"]}</h6><p class="card-text">${source["desc"]}</p></div><div class="card-footer"><a href="${link}" target="_" class="btn btn-primary">Send Email</a></div></div></div>`
            $(".justice").append(paragraph)
            
        }
        for (var i = 0; i < reps.length; i++) {
            var source = reps[i]
            var newSubject = encodeURIComponent(source["subject"])
            var newBody = encodeURIComponent(`${extras}\n\n${source["body"]}`)
            var link = `mailto:${source["to"]}?cc=${source["cc"]}&subject=${newSubject}%20%7C%20${name}&body=${newBody}`
        
            var paragraph = `<div class="col-md-4 mb-5" ><div class="card h-100"><div class="card-body"><h4 class="card-title">${source["name"]}</h4><h6 class="card-subtitle mb-2 text-muted">${source["dateAdded"]}</h6><p class="card-text">${source["desc"]}</p></div><div class="card-footer"><a href="${link}" target="_" class="btn btn-primary">Send Email</a></div></div></div>`
            $(".reps").append(paragraph)
            
        }
    }
});
