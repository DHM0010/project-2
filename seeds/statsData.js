const { Stats } = require('../models');

const statsdata =  [
    {
        name: "Potions",
        level: 5,
        profile_id: 1
    },
    {
        name: "Dark Arts",
        level: 14,
        profile_id: 1
    },
    {
        name: "Herbology",
        level: 2,
        profile_id: 1
    },
    {
        name: "Divination",
        level: 0,
        profile_id: 1
    },
    {
        name: "Transfiguration",
        level: 4,
        profile_id: 1
    },
    {
        name: "Astrology",
        level: 7,
        profile_id: 1
    },
    {
        name: "Charms",
        level: 12,
        profile_id: 2
    },
    {
        name: "Defense Against the Dark Arts",
        level: 10,
        profile_id: 2
    },
    {
        name: "Potions",
        level: 3,
        profile_id: 2
    },
    {
        name: "Astrology",
        level: 8,
        profile_id: 2
    },
    {
        name: "Herbology",
        level: 5,
        profile_id: 2
    },
    {
        name: "Transfiguration",
        level: 6,
        profile_id: 2
    }
]

const statsData = () => Stats.bulkCreate(statsdata);

module.exports = statsData;