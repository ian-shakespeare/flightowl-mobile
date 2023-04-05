import { StyledView, StyledText } from "./StyledElements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FlightOffer } from "../interfaces";
import carriers from "../data/carriers.json";
import ButtonPrimary from "./UI/ButtonPrimary";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../app/_layout";

type Props = {
    flight: FlightOffer;
};

const SearchResult = ({ flight }: Props) => {
    const { jwt } = useContext(AuthContext);
    const [isSaved, setIsSaved] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getCarrierName = (code: string): string => {
        const name = (carriers as Record<string, string>)[code];
        return name ?? "Unregistered Airline";
    };

    const toTime = (t: string): string =>
        new Date(t).toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });

    const toDuration = (d: string): string =>
        d.slice(2).replace("H", " hr ").replace("M", "min");

    const handleSaveFlight = () => {
        if (isSaved) return;
        setIsLoading(true);
        axios
            .post("https://api.flightowl.app/flights/saved", flight, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            .then((res) => {
                setIsSaved(true);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    };

    return (
        <StyledView className="w-4/5 mx-auto py-6 border-b-2 border-gray-200">
            <StyledView className="flex justify-between gap-6 flex-row w-full">
                <StyledText className="text-6xl">
                    {flight.itineraries[0].segments[0].departure.iataCode}
                </StyledText>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    size={40}
                    color="#7F58E8"
                />
                <StyledText className="text-6xl">
                    {flight.itineraries[0].segments.at(-1)?.arrival.iataCode}
                </StyledText>
            </StyledView>
            <StyledText className="mt-2 text-4xl text-gray-300 text-center">
                {getCarrierName(flight.validatingAirlineCodes[0])}
            </StyledText>
            <StyledText className="text-3xl mt-4 mb-2">
                {toTime(flight.itineraries[0].segments[0].departure.at)} -{" "}
                {toTime(
                    String(flight.itineraries[0].segments.at(-1)?.arrival.at)
                )}
            </StyledText>
            <StyledView className="flex flex-row gap-1">
                <StyledText className="text-2xl text-gray-400">
                    {toDuration(flight.itineraries[0].duration)}
                </StyledText>
                <StyledText className="text-2xl text-gray-400">
                    (
                    {flight.itineraries[0].segments.length == 1
                        ? String(flight.itineraries[0].segments.length) +
                          " stop"
                        : String(flight.itineraries[0].segments.length) +
                          " stops"}
                    )
                </StyledText>
            </StyledView>
            <StyledView className="flex flex-row justify-between mt-4">
                <StyledText className="text-4xl">
                    ${flight.price.grandTotal}
                </StyledText>
                {isSaved ? (
                    <StyledText className="text-lg py-2 px-6">Saved</StyledText>
                ) : isLoading ? (
                    <StyledText className="text-lg py-2 px-6">
                        Saving...
                    </StyledText>
                ) : (
                    <ButtonPrimary label="Save" onPress={handleSaveFlight} />
                )}
            </StyledView>
        </StyledView>
    );
};

export default SearchResult;
