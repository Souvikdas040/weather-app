import { WeatherData } from "@/api/types"
import { useFavorite } from "@/hooks/use-favorite";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { toast } from "sonner";

interface FavouriteButtonProps {
    data: WeatherData;
}
const FavoriteButton = ({data}: FavouriteButtonProps) => {

    const {addFavorite, isFavourite, removeFavorite} = useFavorite();
    const isCurrentFavourite = isFavourite(data.coord.lat, data.coord.lon);

    const handleToggleFavorite = () => {
        if(isCurrentFavourite) {
            removeFavorite.mutate(`${data.coord.lat}-${data.coord.lon}`);
            toast.error(`Removed ${data.name} from Favorites`);
        }
        else {
            addFavorite.mutate({
                name: data.name,
                lat: data.coord.lat,
                lon: data.coord.lon,
                country: data.sys.country,
            });
            toast.success(`Added ${data.name} to Favorites`);
        }
    };

  return (
    <Button 
        variant={isCurrentFavourite ? "default" : "outline"}
        size={"icon"}
        onClick={handleToggleFavorite}
        className={isCurrentFavourite ? "bg-yellow-500 hover:bg-yellow-600" : ""}
    >
        <Star
            className={`h-4 w-4 ${isCurrentFavourite ? "fill-current" : ""}`}
        >
        </Star>
    </Button>
  )
}

export default FavoriteButton
