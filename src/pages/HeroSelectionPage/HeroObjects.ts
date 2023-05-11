import { ThorFacts, HulkFacts, CaptainAmericaFacts } from "../../components/HeroFacts/HeroFacts";
import { Hero } from "../../components/Interface/Interface";

export const captainAmerica: Hero = {
    id: "149",
    name: "Captain America",
    powerstats: {
        intelligence: "69",
        strength: "19",
        speed: "38",
        durability: "55",
        power: "60",
        combat: "100"
    },
    biography: {
        facts: CaptainAmericaFacts,
        fullName: "Steve Rogers",
        alterEgos: "No alter egos found.",
        aliases: [
            "Nomad",
            "The Captain"
        ],
        placeOfBirth: "Manhattan, New York City, New York",
        firstAppearance: "Captain America Comics #1 (March 1941)",
        publisher: "Marvel Comics",
        alignment: "good"
    },
    appearance: {
        gender: "Male",
        race: "Human",
        height: [
            "6'2",
            "188 cm"
        ],
        weight: [
            "240 lb",
            "108 kg"
        ],
        eyeColor: "blue",
        hairColor: "blond"
    },
    work: {
        occupation: "Adventurer, federal official, intelligence operative; former soldier, Hydra agent, liaison between S.H.I.E.L.D. and the Avengers, police officer, teacher, sparring partner.",
        base: "New York City"
    },
    connections: {
        groupAffiliation: "Secret Avengers (Black OPS Unit Formerly,The Avengers, Secret Avengers (Civil War), New Avengers, formerly The Invaders, Secret Defenders The Redeemers; formerly partner of Bucky, Golden Girl, Rick Jones, Falcon, Demolition-Man and Nomad (Jack Monroe)",
        relatives: "Joseph (father, deceased), Sara (mother, deceased), Ian Zola (Nomad) (adopted son)"
    },
    image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg"
    }
}

export const hulk: Hero = {
    id: "332",
    name: "Hulk",
    powerstats: {
        intelligence: "88",
        strength: "100",
        speed: "63",
        durability: "100",
        power: "98",
        combat: "85"
    },
    biography: {
        facts: HulkFacts,
        fullName: "Bruce Banner",
        alterEgos: "No alter egos found.",
        aliases: [
            "Annihilator",
            "Captain Universe",
            "Joe Fixit",
            "Mr. Fixit",
            "Mechano",
            "Professor",
            "Jade Jaws",
            "Golly Green Giant"
        ],
        placeOfBirth: "Dayton, Ohio",
        firstAppearance: "Incredible Hulk #1 (May, 1962)",
        publisher: "Marvel Comics",
        alignment: "good"
    },
    appearance: {
        gender: "Male",
        race: "Human / Radiation",
        height: [
            "8'0",
            "244 cm"
        ],
        weight: [
            "1400 lb",
            "630 kg"
        ],
        eyeColor: "Green",
        hairColor: "Green"
    },
    work: {
        occupation: "Nuclear physicist, Agent of S.H.I.E.L.D.",
        base: "(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico"
    },
    connections: {
        groupAffiliation: "Defenders, former leader of the new Hulkbusters, member of the Avengers, Pantheon, Titans Three, the Order, Hulkbusters of Counter-Earth-Franklin, alternate Fantastic Four",
        relatives: "Betty Ross Talbot Banner (wife), Brian Banner (father, apparently deceased), Rebecca Banner (mother, deceased), Morris Walters (uncle), Elaine Banner Walters (aunt, deceased), Jennifer Walters (She-Hulk, cousin), Thaddeus E. 'Thunderbolt' Ross (father"
    },
    image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"
    }
}

export const thor: Hero = {
    id: "659",
    name: "Thor",
    powerstats: {
        intelligence: "69",
        strength: "100",
        speed: "83",
        durability: "100",
        power: "100",
        combat: "100"
    },
    biography: {
        facts: ThorFacts,
        fullName: "Thor Odinson",
        alterEgos: "Rune King Thor",
        aliases: [
            "Donald Blake",
            "Sigurd Jarlson",
            "Jake Olsen",
            "Donar the Mighty"
        ],
        placeOfBirth: "Asgard",
        firstAppearance: "Journey into Mystery #83 (August, 1962)",
        publisher: "Rune King Thor",
        alignment: "good"
    },
    appearance: {
        gender: "Male",
        race: "Asgardian",
        height: [
            "6'6",
            "198 cm"
        ],
        weight: [
            "640 lb",
            "288 kg"
        ],
        eyeColor: "Blue",
        hairColor: "Blond"
    },
    work: {
        occupation: "King of Asgard; formerly EMS Technician; Physician",
        base: "New York, New York"
    },
    connections: {
        groupAffiliation: "Avengers",
        relatives: "Odin (father), Gaea (mother), Frigga (step-mother), Loki (step-brother), Vidar (half-brother), Buri (paternal great-grandfather), Bolthorn (maternal great grandfather), Bor (grandfather), Bestla (grandmother), Vili (uncle), Ve (uncle), Sigyn (former sister-in-law), Hela (alleged niece), Jormungand (alleged nephew), Fernis Wolf (alleged nephew)"
    },
    image: {
        url: "https://www.superherodb.com/pictures2/portraits/10/100/140.jpg"
    }
}
