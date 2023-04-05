import { StyledScrollView, StyledText } from "../components/StyledElements";
import SearchResult from "../components/SearchResult";
import { FlightOffer } from "../interfaces";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "expo-router";
import { AuthContext } from "./_layout";

const SearchPage = () => {
    const { origin, destination, date } = useSearchParams();
    const { jwt } = useContext(AuthContext);
    const [results, setResults] = useState<FlightOffer[] | null>(null);

    useEffect(() => {
        const body = {
            originLocationCode: origin,
            destinationLocationCode: destination,
            departureDate: date,
            adults: 1,
        };
        fetch("https://api.flightowl.app/flights", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${jwt};`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((data) => {
                setResults(data);
            })
            .catch((err) => {
                console.log(origin, destination, date);
                console.error(err);
            });
    }, []);

    return (
        <StyledScrollView className="mt-4">
            {results === null ? (
                <StyledText className="text-xl text-center pt-4">
                    Loading...
                </StyledText>
            ) : (
                <>
                    {results.slice(0, 5).map((f, i) => (
                        <SearchResult key={i} flight={f} />
                    ))}
                </>
            )}
            {results !== null && results.length === 0 && (
                <StyledText>
                    We couldn't find any flights that matched your search.
                </StyledText>
            )}
        </StyledScrollView>
    );
};

export default SearchPage;
