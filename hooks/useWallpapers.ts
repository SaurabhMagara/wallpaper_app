export interface Wallpaper {
    url: string,
    name: string
};

export default function useWallpapers(): Wallpaper[] {
    return [{
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
    }]
}