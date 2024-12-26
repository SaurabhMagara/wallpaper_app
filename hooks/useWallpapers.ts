//type for exported wallapaper that is shown on expore page
export interface Wallpaper {
    url: string,
    name: string
};

// Type for wallpaper
interface FullWallpaper extends Wallpaper {
    liked : boolean,
    suggested : boolean,
    library : boolean
}

// filter wallpaper that is suggested for you
export function useSuggestedWallpaper(){
    const Wallpaper = useWallpapers();
    return Wallpaper.filter(walls=> walls.suggested);
}

// filtering wallpapers that are liked
export function useLikedWallpaper(){
    const Wallpaper = useWallpapers();
    return Wallpaper.filter(walls => walls.liked);
}

// filtering wallpapers that are available in library
export function useLibraryWallpaper(){
    const Wallpaper = useWallpapers();
    return Wallpaper.filter(walls => walls.library);
}


// useWallpaper hook for exporting wallpapers in App
export default function useWallpapers(): FullWallpaper[] {
    return [
        {
            url: "https://images.pexels.com/photos/29492073/pexels-photo-29492073/free-photo-of-modern-library-bookshelves-in-ciudad-de-mexico.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Sofia",
            liked : true,
            library : true,
            suggested : true
        },
        {
            url: "https://images.pexels.com/photos/19975991/pexels-photo-19975991/free-photo-of-laughing-woman-in-fur-hat-sitting-on-mans-back-under-snowfall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Heritage",
            liked : true,
            suggested : true,
            library : true
        },
        {
            url: "https://images.pexels.com/photos/29843710/pexels-photo-29843710/free-photo-of-charming-european-townhouses-with-colorful-facades.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Late night",
            liked : false,
            suggested : false,
            library : true,
        },
        {
            url: "https://images.pexels.com/photos/22669491/pexels-photo-22669491/free-photo-of-traditional-yellow-lanterns-on-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Pumpkin",
            liked : false,
            suggested : false,
            library : true,
        },
        {
            url: "https://images.pexels.com/photos/17827718/pexels-photo-17827718/free-photo-of-closeup-of-a-waterfall-against-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Waterfall",
            liked : false,
            suggested : false,
            library : true,
        },
        {
            url: "https://images.pexels.com/photos/18715885/pexels-photo-18715885/free-photo-of-milk-pouring-into-cappuccino.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name: "Coffee",
            liked : false,
            suggested : false,
            library : true,
        },
        {
            url : "https://images.pexels.com/photos/29539121/pexels-photo-29539121/free-photo-of-dramatic-black-and-white-ocean-waves-against-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            name : "Sea Shore",
            liked : false,
            suggested : false,
            library : true,
        }
    ]
}