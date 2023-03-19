import { StyledView, StyledText } from "./StyledElements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FlightOffer } from "../interfaces";
import carriers from "../data/carriers.json";
import ButtonPrimary from "./UI/ButtonPrimary";

type Props = {
    flight: FlightOffer;
};

const SearchResult = ({ flight }: Props) => {
    const [isSaved, setIsSaved] = useState(false);

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

    return (
        <StyledView className="w-4/5 mx-auto py-8 border-b-2 border-gray-200">
            <StyledView className="flex justify-center gap-6 flex-row w-full">
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
            <StyledText className="text-4xl text-gray-300">
                {getCarrierName(flight.validatingAirlineCodes[0])}
            </StyledText>
            <StyledText className="text-3xl mt-4">
                {toTime(flight.itineraries[0].segments[0].departure.at)} -{" "}
                {toTime(
                    String(flight.itineraries[0].segments.at(-1)?.arrival.at)
                )}
            </StyledText>
            <StyledView className="flex flex-row gap-1">
                <StyledText className="text-2xl text-gray-300">
                    {toDuration(flight.itineraries[0].duration)}
                </StyledText>
                <StyledText className="text-2xl text-gray-300">
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
                ) : (
                    <ButtonPrimary
                        label="Save"
                        onPress={() => setIsSaved(true)}
                    />
                )}
            </StyledView>
        </StyledView>
    );
};

export default SearchResult;
