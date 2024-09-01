export const PRODUCTS = [
    {
        id: 1,
        name: "Singapore",
        imgLink: "https://www.holidify.com/images/bgImages/SINGAPORE.jpg",
        desc: "Explore Singapore's vibrant city and rich culture.",
        date: formatDate("06/10/24 09:00 AM"),
        author: "Alice",
        price: "120000"
    },
    {
        id: 2,
        name: "Hong Kong",
        imgLink: "https://www.holidify.com/images/bgImages/HONG-KONG.jpg",
        desc: "Discover Hong Kong's bustling streets and skyline.",
        date: formatDate("07/05/24 09:00 AM"),
        author: "Michael",
        price: "110000"
    },
    {
        id: 3,
        name: "Scotland",
        imgLink: "https://www.holidify.com/images/bgImages/EDINBURGH.jpg",
        desc: "Immerse in Scotland's scenic landscapes and history.",
        date: formatDate("08/12/24 09:00 AM"),
        author: "Emily",
        price: "250000"
    },
    {
        id: 4,
        name: "Japan",
        imgLink: "https://www.holidify.com/images/foreign/compressed/overview_1596.jpg",
        desc: "Experience Japan's unique blend of tradition.",
        date: formatDate("09/15/24 09:00 AM"),
        author: "David",
        price: "200000"
    },
    {
        id: 5,
        name: "New Zealand",
        imgLink: "https://www.holidify.com/images/compressed/dest_pixa_19279.jpg",
        desc: "Witness New Zealand's breathtaking landscapes.",
        date: formatDate("10/22/24 09:00 AM"),
        author: "Sophie",
        price: "220000"
    },
    {
        id: 6,
        name: "Switzerland",
        imgLink: "https://www.holidify.com/images/cmsuploads/compressed/SBB_RABe_514_DTZ_Rheinfall_20220610172006.jpg",
        desc: "Explore Switzerland's Alps and tranquil lakes.",
        date: formatDate("11/03/24 09:00 AM"),
        author: "James",
        price: "240000"
    },
    {
        id: 7,
        name: "India",
        imgLink: "https://www.holidify.com/images/cmsuploads/compressed/1421489794NandaDeviandValleyofFlowersNationalParks_20201109134832.jpg",
        desc: "Discover India's diverse culture and vibrant history.",
        date: formatDate("12/19/24 09:00 AM"),
        author: "Priya",
        price: "80000"
    },
    {
        id: 8,
        name: "Amsterdam",
        imgLink: "https://www.holidify.com/images/compressed/dest_pixa_989.jpg",
        desc: "Enjoy Amsterdam's charming canals and artistic heritage.",
        date: formatDate("01/14/25 09:00 AM"),
        author: "Liam",
        price: "150000"
    },
];

// Function to format the date
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    return date.toLocaleDateString('en-US', options).replace(',', '').toUpperCase();
}
