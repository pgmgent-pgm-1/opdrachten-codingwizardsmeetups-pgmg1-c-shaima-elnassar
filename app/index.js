const meetups = [
  {
    title: 'Alumni Meetup 01',
  description: "Onze alumniwerking schiet uit de startblokken. Een interne meetup is een meetup waar oud-studenten van de opleiding Graduaat Programmeren samenkomen. Docenten en andere collega's kunnen hierbij aansluiten. Ook de programmingBuddies worden hierop uitgenodigd.", 
  location: 
    {
      
      address: 
        {
        street: 'Industrieweg',
        number: '232',
        postalCode: '9030',
        city: 'Mariakerke',
      }
      
      
    },
      price: 'Gratis',
      isExternalEvent: false,
      organizers:[{
      name:  'Coding Wizards',
      
      socials: {
        website:  'https://www.pgm.gent/codingwizards',
        linkedIn: 'https://www.linkedin.com/company/28878545/',
        instagram: 'https://www.instagram.com/programmeren.ahs/',
      }
    }],
    landingPageLink: 'https://www.iodigital.com/nl/insights/events/tech-she-her',
    registrationLink: 'https://www.google.com/url?q=https%3A%2F%2Fwww.iodigital.com%2Fnl%2Finsights%2Fevents%2Ftech-she-her&sa=D&sntz=1&usg=AOvVaw20L2EkTSpkHQq5fJr_naWm ',
      programme: [{
        title: 'Ontvangst',
        from: 1684341000000,
        to: 1684342800000 ,
        isKeyTalk: false, 
      },
      {
        title: 'Hello Coding Wizards',
        from: 1684342800000,
        to: 1684343400000,
        isKeyTalk: false,
        speakers:{
          name: 'Nicky Malfliet & Philippe De Pauw - Waterschoot',
          jobDescription: 'spreker',
          company: '',
        }
      
      },
      {
        title: 'Cloud Developement vs Monolithic apps',
        from: 1684343400000,
        to: 1684344900000,
        isKeyTalk: true,
        speakers: {
          name: 'Thibaut De Maerteleire',
          jobDescription: 'R&D Engineer',
          company: 'Corilus',
        },
      
        description: 'Cloud development en monolithische applicaties vertegenwoordigen twee verschillende benaderingen van softwareontwikkeling en -architectuur. Monolithische apps zijn traditionele toepassingen waarbij alle functionaliteit in één enkele codebase en uitvoerbare eenheid wordt ondergebracht. In deze aanpak is de applicatie vaak omvangrijk en complex wat kan leiden tot uitdagingen bij schaalbaarheid en onderhoud. Aan de andere kant staat cloud development waarbij applicaties zijn opgebouwd met een microservices- of serverless-architectuur en draaien in de cloud. Dit maakt het mogelijk om de applicatie op te splitsen in kleine onafhankelijke services die afzonderlijk kunnen worden ontwikkeld geschaald en onderhouden. Hoewel monolithische apps eenvoudiger kunnen lijken om te ontwikkelen biedt cloud development voordelen zoals schaalbaarheid flexibiliteit en veerkracht. De keuze tussen deze benaderingen hangt af van de specifieke behoeften en doelstellingen van een project waarbij cloud development vaak de voorkeur geniet voor moderne schaalbare en onderhoudsarme applicaties.'
      },
      
      {
        title: 'SentEMO: Blitz in production',
        from: 1684344900000,
        to: 1684346400000,
        isKeyTalk: false,
        speakers: {
          name: 'Olivier Parent',
          jobDescription: 'Lecturer | Researcher',
          company: 'Arteveldehogeschool',
        }
      
      },
      {
        title: 'Pauze',
        from: 1684346400000,
        to : 1684347000000,
        isKeyTalk: false,
        speakers: {
            name: '',
            jobDescription: '',
            company: '',
          }
        
      },
      {
        title: 'Forms in real-world React Applications',
        from: 1684347000000,
        to: 1684348500000,
        isKeyTalk: true,
        speakers: {
          name:  'Lennert De Ryck',
          jobDescription: 'Front-end developer',
          company: 'Sweet Mustard',
        },
        description:'In real-world React-applicaties spelen formulieren een cruciale rol bij het verzamelen van gegevens van gebruikers en het mogelijk maken van interactie met de applicatie. Het beheren van formulieren in React kan echter een uitdaging vormen vanwege de noodzaak om de staat van de formulierelementen te synchroniseren met de componentstaat. Dit omvat het gebruik van gecontroleerde componenten om gebruikersinvoer vast te leggen en te verwerken. Formuliervalidatie is ook een belangrijk aspect waarbij ontwikkelaars moeten zorgen voor de juiste invoervalidatie en het geven van terugkoppeling aan gebruikers bij onjuiste gegevens. Bovendien kunnen React-hooks zoals useState en useEffect worden ingezet om de staat van complexe formulieren efficiënt te beheren. In real-world React-applicaties is het begrijpen en effectief beheren van formulieren essentieel om een vlotte gebruikerservaring te bieden en nauwkeurige gegevens te verzamelen.'
      },
      {
        title: 'Ambassadeursschap / What\s Next',
        from: 1684348500000,
        to: 1684349100000,
        isKeyTalk: false,
        speakers: {
          name:  'Nicky Malfliet',
          jobDescription: '',
          company: '',
        }
      },
      {
        title: 'Chit-Chat',
        from: 1684349100000,
        to: 1684353600000,
        isKeyTalk: false,
        speakers: {
          name: '',
          jobDescription: '',
          company: '',
        }
      }
      
      ],
    
      reviews:[{
        username: 'Alice123',
        rating: '✰✰✰✰✰✰✰✰✰',
        comment: 'Geweldige talks zeer informatief!',
      },
      {
        username: 'Bob456',
        rating: '✰✰✰✰✰✰✰✰',
        comment: 'Genoten van de verscheidenheid aan besproken onderwerpen.',
      },
      {
        username: 'Charlie789',
        rating: '✰✰✰✰✰✰✰',
        comment: 'Sommige talks waren beter dan andere.',
      },
      {
        username: 'David101',
        rating: '✰✰✰✰✰✰✰✰✰✰',
        comment: 'Absoluut fantastische talks!',
      },
      {
        username: 'Eve202',
        rating: '✰✰✰✰✰✰',
        comment: 'Zou meer interactieve sessies kunnen gebruiken',
      },
      {
        username: 'Frank303',
        rating: '✰✰✰✰✰✰✰✰✰',
        comment: 'Echt informatieve presentaties.',
      },
      {
        username: 'Grace404',
        rating: '✰✰✰✰✰✰✰✰',
        comment: 'Goed georganiseerd evenement maar een paar technische problemen.',
      },
      {
        username: 'Hannah505',
        rating: '✰✰✰✰✰✰✰',
        comment: 'Degelijke talks maar had meer diepgang verwacht.',
      }
      ]

    },
    {
      title: 'Tech (she/her)',
      description: 'Tech (she/her) is een moment waar we de diversiteit in de tech scene in de kijker willen zetten. De balans moet in evenwicht zijn om naar de toekomst toe onze technologische vooruitgang inclusief te maken. Door de sterke verhalen tijdens dit event krijg je nieuwe inzichten om mee te nemen naar jouw bedrijf. Dit event is een samenwerking tussen iO en Arteveldehogeschool en voor iedereen toegankelijk uit het bedrijfsleven die ook met uitdagingen rond deze thematiek zit.',
      location: 
        {
          name: 'iO Campus Ghent',
          address: 
            {
            street: 'Raymonde de Larochelaan',
            number: '15',
            postalCode: '9051',
            city: 'Gent',
          }
          
        }
        ,
          price: 'Gratis',
          isExternalEvent: true,
          organizers: [{
          name: 'iO',
          
          socials: {
            website: 'https://www.iodigital.com/nl/home',
            linkedIn: 'https://www.linkedin.com/company/iodigital-com/',
            instagram: 'https://www.instagram.com/iodigital_com/ ',
            youtube: 'https://www.youtube.com/iOdigital-com ',
            facebook: 'https://www.facebook.com/iodigitalcom/',
            x: 'https://twitter.com/iodigital_com',
          }
          },
          
          ],
          landingPageLink: 'https://www.iodigital.com/nl/insights/events/tech-she-her ',
          registrationLink: 'https://www.google.com/url?q=https%3A%2F%2Fwww.iodigital.com%2Fnl%2Finsights%2Fevents%2Ftech-she-her&sa=D&sntz=1&usg=AOvVaw20L2EkTSpkHQq5fJr_naWm ',
        
          programme: [
            {
            title: 'Officieel ontvangst & Netwerken',
            from: 1697727600000,
            to: 1697731200000 ,
            isKeyTalk: false, 
          },
          {
            title: 'Welkomstwoord',
            from: 1697731200000,
            to: 1697731800000,
            isKeyTalk: false,
            speakers: {
              name: 'Nicky Malfliet',
              jobDescription: 'spreker',
              company: '',
            }
          
          },
          {
            title: 'Uitdagingen bij Contour Lab',
            from: 1684347000000,
            to: 1684347000000,
            isKeyTalk: true,
            speakers: {
              name: 'Christina Hadinoto',
              jobDescription: 'Founder',
              company: 'Contourlab',
            },
            description: 'Bij Contour Lab streven we ernaar modebrands te ondersteunen om inclusiever en succesvoller de online consument bij te staan in de shopping ervaring. Onze geavanceerde Digitale Styling Advisor analyseert lichaamstypes en biedt aanbevelingen voor kledingstukken die de natuurlijke schoonheid van elk individu accentueren. Als vrouwelijke oprichter van een softwarebedrijf kom ik vaak in contact met het mannelijke geslacht waaronder ontwikkelaars en investeerders. Echter de mode-industrie heeft haar eigen subtiliteiten en gevoeligheden en het winkelgedrag van vrouwen vertoont significante verschillen ten opzichte van mannen. Dit maakt het proces van development briefings en product management soms zeer uitdagend vooral wanneer het gaat om het uitleggen van aspecten specifiek gerelateerd zijn aan het vrouwelijke perspectief aan een mannelijk ontwikkelingsteam. Tijdens ons evenement delen we graag hoe Contour Lab deze uitdagingen aanpakt.'
          
          },
          {
            title: 'Strategy & Insights',
            from: 1697733600000,
            to: 1697735400000,
            isKeyTalk: false,
            speakers: {
              name: 'Nhu Nguyen',
              jobDescription: '',
              company: '',
            }
          
          },
          {
            title: 'Pauze',
            from: 1684346400000,
            to : 1684347000000,
            isKeyTalk: false,
            speakers: 
              {
                name: '',
                jobDescription: '',
                company: '',
              }
            
          },
          {
            title: 'Verhalen van vrouwelijke pioniers die een pad effenen naar een toekomst die al begonnen is',
            from: 1697736600000,
            to: 1697737800000,
            isKeyTalk: true,
            speakers: {
              name:  'Laurence Jacobs',
              jobDescription: 'Ambassador',
              company: 'Agoria',
            },
            description: 'Ontdek hoe het dynamische landschap van digitale innovaties onze wereld aan het hervormen is. Van het revolutioneren van onze dagelijkse routines tot het aanpakken van de meest urgente mondiale vraagstukken de kracht van technologie kent geen grenzen. Duik in de mogelijkheden die voor je liggen als woman in tech en leer hoe je het volledige potentieel van digitaal kunt benutten om positieve verandering teweeg te brengen. Laat je inspireren door de verhalen van vrouwelijke pioniers die een pad effenen naar een toekomst die al begonnen is'
          },
          {
            title: 'Inzichten in Customer Relationship Management processen',
            from: 1697737800000,
            to: 1697739000000,
            isKeyTalk: true,
            speakers: {
              name: 'Sara Mathijs',
              jobDescription: 'CEO',
              company: 'UPEO BV',
            },
            description: 'Sara de oudste van 2 dochters van een papa die graag een zoon had om mee te shotten. Een veelbewogen jeugd letterlijk omdat ze op regelmatige basis verhuisde van Congo naar Mauritius en Kameroen. Daardoor is ze gegroeid naar een extraverte jonge vrouw met een duidelijke mening en wat we vandaag een mannelijke energie zouden noemen hetgeen haar niet altijd windeieren heeft gelegd. Vandaag is Sara een vrouw van 46 met 3 kids nog eens 3 plus-kids en een woman in tech.\nHaar huidige bedrijf UPEO startte ze 2 jaar geleden samen met een ex-collega. Het bedrijf is gespecialiseerd in het implementeren van Customer Relationship Management processen met de technologie Salesforce. Sara deelt graag haar inzichten!'
          },
          {
            title: 'Hapje en drankje en netwerken',
            from: 1697739000000,
            to: 1697745600000,
            isKeyTalk: false,
            speakers: {
              name: '',
              jobDescription: '',
              company: '',
            }
          }
          
          ],
        
          reviews:[{
            username: 'Emma789',
            rating: '✰✰✰✰✰✰✰✰✰',
            comment: 'Interessante gesprekken zeer leerzaam!',
          },
          {
            username: 'Liam456',
            rating: '✰✰✰✰✰✰✰',
            comment: 'Genoten van de verschillende onderwerpen.',
          },
          {
            username: 'Olivia101',
            rating: '✰✰✰✰✰✰✰✰✰',
            comment: 'Fantastische presentaties zeer inspirerend!',
          },
          {
            username: 'Noah303',
            rating: '✰✰✰✰✰✰✰',
            comment: 'Goed georganiseerd evenement een paar kleine haperingen.',
          },
          {
            username: 'Ava202',
            rating: '✰✰✰✰✰✰',
            comment: 'Sommige talks konden interactiever zijn.',
          },
          {
            username: 'Mia404',
            rating: '✰✰✰✰✰✰✰✰✰',
            comment: 'Briljante talks niets dan lof!',
          },
          {
            username: 'Ethan505',
            rating: '✰✰✰✰✰✰',
            comment: 'Degelijke presentaties maar had meer diepgang verwacht.',
          },
          {
            username: 'Sophia123',
            rating: '✰✰✰✰✰✰✰✰',
            comment: 'Geweldige ervaring zeer informatief!',
          },
          ]
    
        }
        ];


function generateStringForTime (programme) {
  return programme.map(timeStamp => {
   const { title, from, to } = timeStamp;
   let tmpStr = `${new Date(from).getHours()}:${new Date(from).getMinutes()} - ${new Date(to).getHours()}:${new Date(to).getMinutes()} ${title}`;
  return tmpStr;
  }).join('\n')}

const programmeString = generateStringForTime(meetups[0].programme)

      
function generateStringForTime1 (programme) {
  return programme.map(timeStamp => {
   const { title, from, to } = timeStamp;
   let tmpStr = `${new Date(from).getHours()}:${new Date(from).getMinutes()} - ${new Date(to).getHours()}:${new Date(to).getMinutes()} ${title}`;
  return tmpStr;
  }).join('\n')}

const programmeString1 = generateStringForTime(meetups[1].programme)

        
 function generatePlace(location) {
  const { street, number, postalCode, city } = location.address;
  let tmpStr = `${street}\n${number}\n${postalCode}\n${city}`;
 return tmpStr;}

 const location1 = generatePlace(meetups[0].location);


 function generatePlace2(location) {
  const { street, number, postalCode, city } = location.address;
  let tmpStr = `${street}\n${number}\n${postalCode}\n${city}`;
 return tmpStr;}

 const location2 = generatePlace2(meetups[1].location);


 
 function generateStringOrganizers (organizers) {
  return organizers.map(item => {
   const { name } = item;
   let tmpStr = `${name}\n----------------------------------------------------------------------------------------------------------------------------------------`;
  return tmpStr;
  })}

const organizersString = generateStringOrganizers(meetups[0].organizers)


function generateStringOrganizers2 (organizers) {
  return organizers.map(item => {
   const { name } = item;
   let tmpStr = `${name}\n----------------------------------------------------------------------------------------------------------------------------------------`;
  return tmpStr;
  })}

const organizersString1 = generateStringOrganizers2(meetups[1].organizers)


function generateStringWebsites(organizers) {
  const websites = organizers.map((organizer) => {
    const { website, linkedIn, instagram } = organizer.socials;
    return `Website:   ${website}\nLinkedIn:  ${linkedIn}\nInstagram: ${instagram}\n`;
  });

  return websites;
}
const website1 = generateStringWebsites(meetups[0].organizers)


function generateStringWebsites1(organizers) {
  const websites2 = organizers.map((organizer) => {
    const { website, linkedIn, instagram,youtube, facebook, x } = organizer.socials;
    return `Website:   ${website}\nLinkedIn:  ${linkedIn}\nInstagram: ${instagram}\nyoutube:   ${youtube}\nfacebook:  ${facebook}\nx:         ${x}`;
  });

  return websites2;
}
const website2 = generateStringWebsites1(meetups[1].organizers)



function generateOrganizer(index1, index2) {
  const speakers = meetups[index1].programme[index2].speakers;
  if (speakers) {
    const { name, jobDescription, company } = speakers;
    return `${name}, ${jobDescription} | ${company}\n----------------------------------------------------------------------------------------------------------------------------------------`;
  } else {
    return '';
  }
}

const speaker1 = generateOrganizer(0, 2);


function generateOrganizer2(index1, index2) {
  const speakers = meetups[index1].programme[index2].speakers;
  if (speakers) {
    const { name, jobDescription, company } = speakers;
    return `----------------------------------------------------------------------------------------------------------------------------------------\n${name}, ${jobDescription} | ${company}\n----------------------------------------------------------------------------------------------------------------------------------------`;
  } else {
    return '';
  }
}

const speaker2 = generateOrganizer2(0, 5);


function generateReview1(meetups) {
  return meetups.map(review => {
    const { username, comment, rating } = review;
    return `${rating} ${username} - ${comment}`;
  }).join('\n-----------------------------------------------------------------------------------------------------------------------------------------\n');
}
const review1 = generateReview1(meetups[0].reviews)


function generateOrganizer3(index1, index2) {
  const speakers = meetups[index1].programme[index2].speakers;
  if (speakers) {
    const { name, jobDescription, company } = speakers;
    return `${name}, ${jobDescription} | ${company}\n----------------------------------------------------------------------------------------------------------------------------------------`;
  } else {
    return '';
  }
}

const speaker3 = generateOrganizer3(1, 2);

function generateOrganizer4(index1, index2) {
  const speakers = meetups[index1].programme[index2].speakers;
  if (speakers) {
    const { name, jobDescription, company } = speakers;
    return `----------------------------------------------------------------------------------------------------------------------------------------\n${name}, ${jobDescription} | ${company}\n----------------------------------------------------------------------------------------------------------------------------------------`;
  } else {
    return '';
  }
}

const speaker4 = generateOrganizer4(1, 5);

function generateOrganizer5(index1, index2) {
  const speakers = meetups[index1].programme[index2].speakers;
  if (speakers) {
    const { name, jobDescription, company } = speakers;
    return `----------------------------------------------------------------------------------------------------------------------------------------\n${name}, ${jobDescription} | ${company}\n----------------------------------------------------------------------------------------------------------------------------------------`;
  } else {
    return '';
  }
}

const speaker5 = generateOrganizer4(1, 6);


function generateReview2(meetups) {
  return meetups.map(review => {
    const { username, comment, rating } = review;
    return `${rating} ${username} - ${comment}`;
  }).join('\n-----------------------------------------------------------------------------------------------------------------------------------------\n');
}
const review2 = generateReview2(meetups[1].reviews)

function generateStringForMeetup (meetups) {
  return `
╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Meetup 01 | ${meetups[0].title}                                                                                                          ║
╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
Datum: 17-05-2023
Locatie: Campus Mariakerke
Prijs: Gratis
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
${meetups[0].description}
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
PROGRAMMA
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
${programmeString}
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
${location1}
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
ORGANIZERS
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
${organizersString}

${website1}
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Lees alvast meer over onze sprekers
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
${speaker1}
${meetups[0].programme[2].description}
${speaker2}
${meetups[0].programme[5].description}
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
RECENSIES 8.0 ✰
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
${review1}


╔═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Meetup 02 | ${meetups[1].title}                                                                                                            ║ 
╚═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
Datum: 19-10-2023
Locatie: iO Campus Ghent
Prijs: Gratis
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
${meetups[1].description}
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
PROGRAMMA
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
${programmeString1}
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
LOCATIE
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
${location2}
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
ORGANIZERS
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
${organizersString1}

${website2}
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Lees alvast meer over onze sprekers
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
${speaker3}
${meetups[1].programme[2].description}
${speaker4}
${meetups[1].programme[5].description}
${speaker5}
${meetups[1].programme[6].description}
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
RECENSIES 7.6 ✰
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
${review2}
`
}



console.log(generateStringForMeetup(meetups));