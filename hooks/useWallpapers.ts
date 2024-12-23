export interface Wallpaper {
    url: string,
    name: string
};

export default function useWallpapers(): Wallpaper[] {
    return [
        {
            url: "https://images.pexels.com/photos/29492073/pexels-photo-29492073/free-photo-of-modern-library-bookshelves-in-ciudad-de-mexico.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Sofia"
        },
        {
            url: "https://images.pexels.com/photos/19975991/pexels-photo-19975991/free-photo-of-laughing-woman-in-fur-hat-sitting-on-mans-back-under-snowfall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Heritage"
        },
        {
            url: "https://images.pexels.com/photos/29843710/pexels-photo-29843710/free-photo-of-charming-european-townhouses-with-colorful-facades.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Late night"
        },
        {
            url: "https://images.pexels.com/photos/22669491/pexels-photo-22669491/free-photo-of-traditional-yellow-lanterns-on-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Pumpkin"
        },
        {
            url: "https://images.pexels.com/photos/17827718/pexels-photo-17827718/free-photo-of-closeup-of-a-waterfall-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Waterfall"
        },
        {
            url: "https://images.pexels.com/photos/18715885/pexels-photo-18715885/free-photo-of-milk-pouring-into-cappuccino.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Coffee"
        },
        {
            url : "https://images.pexels.com/photos/29539121/pexels-photo-29539121/free-photo-of-dramatic-black-and-white-ocean-waves-against-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name : "Sea Shore"
        }
    ]
}