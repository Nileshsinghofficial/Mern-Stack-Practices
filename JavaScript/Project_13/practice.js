// res = [
//   {
//     "name": "Test",
//     "items": {
//       "0": ["apple", "banana"],
//       "1": ["grapes", "orange"]
//     }
//   },
//   {
//     "name": "Another",
//     "items": {
//       "0": ["cat", "dog"],
//       "1": ["lion", "tiger"]
//     }
//   }
// ]

// res.map(data => {
//     console.log(`Name: ${data.name}`)
//     Object.keys(data.items).forEach(ar => {
//         console.log(`${ar}: ${data.items[ar]}`);
//         data.items[ar].forEach(val => {
//             console.log('-',val)
//         })
//     })
// })








// res.map(data => {
//     console.log("Name", data.name);

//     Object.keys(data.items).map( key => {
//         console.log(`${key}:`, data.items[key]);
        
//         data.items[key].map(value => {
//             console.log("-", value);
//         })
//     })
// })



// res = {
//   "0": {
//     key: {
//         kind: "PornEntry",
//         id: "6618852404232192"
//         },
//     name: "Enjoy Enticing Movie Featured In The Asian Genre",
//     sourceUrl: "http://popcon.com",
//     imageKeyIds: [
//       "5729651013976064",
//       "4758236517367808"
//     ]
//   },

//   "1": {
//     key: {
//       kind: "PornEntry",
//       id: "5704297553592320"
//     },
//     name: "First Aid Blowjob for The Lifesaver",
//     sourceUrl: "http://popcon.com",
//     imageKeyIds: [
//       "5416586519248896",
//       "5648263229210624"
//     ]
//   }
// };



// Object.keys(res).map(key => {
//     console.log('Main Key', key);
//     Object.values(key).forEach(item =>{
//         console.log(res[item])
//         console.log(res[item].name)
//         res[item].imageKeyIds.forEach(img => {
//             console.log(img)
//         })
//     })
// })


// Object.keys(res).forEach(key => {
//     console.log('Main key', key);
//     console.log(res[key].key)
//     Object.values(res[key].key).forEach(keyin => {
//         console.log("key in side value", keyin)
//     })
// })


// Object.values(res).forEach(item => {
//     console.log("name :",item.name);
//     Object.values(item.key).forEach(img => {
//         console.log('inside img',img)
//     })
// })


// Practice Data
// const data = [
//     {
//         id: 1,
//         name: "Nilesh",
//         skills: {
//             frontend: ["HTML", "CSS", "JavaScript"],
//             backend: ["Node.js", "Express"]
//         }
//     },
//     {
//         id: 2,
//         name: "Ravi",
//         skills: {
//             frontend: ["React", "Vue"],
//             backend: ["Django", "Flask"]
//         }
//     },
//     {
//         id: 3,
//         name: "Priya",
//         skills: {
//             frontend: ["Angular", "Svelte"],
//             backend: ["Spring Boot", "Go"]
//         }
//     }
// ];


// data.forEach(item =>{
//     console.log(`id : ${item.id}`);
//     console.log(`Name: ${item.name}`);
    

//     Object.keys(item.skills).forEach(skillType => {
//         console.log(`SkillType : ${skillType}`);

//         item.skills[skillType].forEach(skill => {
//             console.log("-", skill)
//         })
//     })
// })



// const data = [
//     {
//         id: 1,
//         name: "Nilesh",
//         age: 25,
//         skills: {
//             frontend: ["HTML", "CSS", "JavaScript"],
//             backend: ["Node.js", "Express"],
//             database: ["MongoDB", "MySQL"]
//         },
//         experience: 2
//     },
//     {
//         id: 2,
//         name: "Ravi",
//         age: 28,
//         skills: {
//             frontend: ["React", "Vue"],
//             backend: ["Django", "Flask"],
//             database: ["PostgreSQL"]
//         },
//         experience: 4
//     },
//     {
//         id: 3,
//         name: "Priya",
//         age: 24,
//         skills: {
//             frontend: ["Angular", "Svelte"],
//             backend: ["Spring Boot", "Go"],
//             database: ["Oracle", "Firebase"]
//         },
//         experience: 3
//     },
//     {
//         id: 4,
//         name: "Amit",
//         age: 30,
//         skills: {
//             frontend: ["Next.js", "Nuxt.js"],
//             backend: ["Ruby on Rails", "Laravel"],
//             database: ["MariaDB", "Cassandra"]
//         },
//         experience: 6
//     }
// ];


 