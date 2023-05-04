const data = [
  {
    id: 1,
    name: "dr. martin luther king jr.",
    about: "political activist",
    image: "/images/individuals/2_martin_luther_king.png",
    background: "/images/backgrounds/1_darkblue.png",
  },

  {
    id: 2,
    name: "Steve Jobs",
    about: "Apple Computer Founder",
    image: "/images/individuals/1_steve_jobs.png",
    background: "/images/backgrounds/2_palegreen.png",
  },
  {
    id: 3,
    name: "elon musk",
    about: "space nerd",
    image: "/images/individuals/3_elon_mask.png",
    background: "/images/backgrounds/3_violet.png",
  },
];

const find = data.find((individual) => individual.id === 3);
console.log(find);
