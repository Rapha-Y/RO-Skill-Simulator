export default [
    {
        id: 2,
        name: 'Sword Mastery',
        icon: require('../icons/002.png'),

        level: 0,
        maxLevel: 10,

        preReq: [],
        dependent: [[3, 1]],
    },
    {
        id: 3,
        name: 'Two Handed Sword Mastery',
        icon: require('../icons/003.png'),

        level: 0,
        maxLevel: 10,

        preReq: [[2, 1]],
        dependent: [],
    },
    {
        id: 4,
        name: 'Increase HP Recovery',
        icon: require('../icons/004.png'),

        level: 0,
        maxLevel: 10,

        preReq: [],
        dependent: [],
    },
    {
        id: 5,
        name: 'Bash',
        icon: require('../icons/005.png'),

        level: 0,
        maxLevel: 10,
        
        preReq: [],
        dependent: [[7, 5]],
    },
    {
        id: 6,
        name: 'Provoke',
        icon: require('../icons/006.png'),

        level: 0,
        maxLevel: 10,

        preReq: [],
        dependent: [[8, 5]],
    },
    {
        id: 7,
        name: 'Magnum Break',
        icon: require('../icons/007.png'),

        level: 0,
        maxLevel: 10,

        preReq: [[5, 5]],
        dependent: [],
    },
    {
        id: 8,
        name: 'Endure',
        icon: require('../icons/008.png'),

        level: 0,
        maxLevel: 10,
        
        preReq: [[6, 5]],
        dependent: [],
    },
]