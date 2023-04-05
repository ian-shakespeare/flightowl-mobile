import { useEffect, useState, useContext } from "react";
import { StyledScrollView, StyledText } from "../components/StyledElements";
import { AuthContext } from "./_layout";
import { SavedFlightOffer } from "../interfaces";
import SavedFlightResult from "../components/SavedFlightResult";
import axios from "axios";

const SavedFlightsPage = () => {
    const { jwt } = useContext(AuthContext);
    const [flights, setFlights] = useState<SavedFlightOffer[]>([]);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        axios
            .request({
                method: "GET",
                url: "https://api.flightowl.app/flights/saved",
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            .then((res) => {
                setFlights(
                    res.data.sort(
                        (a: SavedFlightOffer, b: SavedFlightOffer) =>
                            new Date(b.date_saved).getTime() -
                            new Date(a.date_saved).getTime()
                    )
                );
                setIsloading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <StyledScrollView>
            {isLoading ? (
                <StyledText className="text-xl text-center pt-4">
                    Loading...
                </StyledText>
            ) : (
                <>
                    {flights.slice(0, 5).map((f, i) => (
                        <SavedFlightResult key={i} flight={f} />
                    ))}
                </>
            )}
        </StyledScrollView>
    );
};

export default SavedFlightsPage;
