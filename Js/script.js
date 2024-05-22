

const team = [
    {
        name: "Wayne",
        lastName: "Barnett",
        teamRole: "Founder & CEO",
        image: "style/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela",
        lastName: "Caroll",
        teamRole: "Chief Editor",
        image: "style/img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter",
        lastName: "Gordon",
        teamRole: "Office Manager",
        image: "style/img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela",
        lastName: "Lopez",
        teamRole: "Social Media Manager",
        image: "style/img/angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott",
        lastName: "Estrada",
        teamRole: "Developer",
        image: "style/img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara",
        lastName: "Ramos",
        teamRole: "Graphic Designer",
        image: "style/img/barbara-ramos-graphic-designer.jpg"
    }
];


team.forEach(member => {
    console.log(`Nome: ${member.name} ${member.lastName}`);
    console.log(`Ruolo: ${member.teamRole}`);
    console.log(`Foto: ${member.image}`);
});

