import { SavedFlightOffer, FlightOffer } from "../interfaces";
import { StyledView, StyledText } from "./StyledElements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import carriers from "../data/carriers.json";
import ButtonPrimary from "./UI/ButtonPrimary";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../app/_layout";

type Props = {
    flight: SavedFlightOffer;
};

const SavedFlightResult = ({ flight }: Props) => {
    const { jwt } = useContext(AuthContext);
    const [newOffer, setNewOffer] = useState<FlightOffer | null>(null);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getCarrierName = (code: string): string => {
        const name = (carriers as Record<string, string>)[code];
        return name ?? "Unregistered Airline";
    };

    const toDateTime = (t: string): string =>
        new Date(t).toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });

    const handleCheckFlight = () => {
        const offerId = flight.offer_id;
        setIsLoading(true);
        axios
            .post(
                "https://api.flightowl.app/flights/check",
                { offerId },
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            )
            .then((res) => {
                setNewOffer(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setHasError(true);
                setIsLoading(false);
            });
    };

    return (
        <StyledView className="flex w-4/5 mx-auto py-6 border-b-2 border-gray-200 gap-y-2">
            <StyledView className="flex justify-between gap-6 flex-row w-full">
                <StyledText className="text-6xl">
                    {flight.offer.itineraries[0].segments[0].departure.iataCode}
                </StyledText>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    size={40}
                    color="#7F58E8"
                />
                <StyledText className="text-6xl">
                    {
                        flight.offer.itineraries[0].segments.at(-1)?.arrival
                            .iataCode
                    }
                </StyledText>
            </StyledView>
            <StyledText className="text-4xl text-gray-300 mb-2">
                {getCarrierName(flight.offer.validatingAirlineCodes[0])}
            </StyledText>
            <StyledText className="text-2xl text-fo-magenta">
                {toDateTime(
                    flight.offer.itineraries[0].segments[0].departure.at
                )}
            </StyledText>
            <StyledText className="text-xl text-gray-400">
                Saved on {toDateTime(flight.date_saved)}
            </StyledText>
            {newOffer && (
                <StyledText className="text-3xl text-center pt-2">
                    Price:{" "}
                    <StyledText className="text-fo-blue">
                        ${newOffer.price.grandTotal}
                    </StyledText>
                </StyledText>
            )}
            {new Date(flight.offer.lastTicketingDate) < new Date() ? (
                <StyledText className="text-lg text-center text-fo-pink">
                    This flight no longer offers tickets
                </StyledText>
            ) : isLoading ? (
                <StyledText className="text-lg text-center">
                    Loading...
                </StyledText>
            ) : hasError ? (
                <StyledText className="text-lg text-center text-fo-pink">
                    We couldn't update this flight
                </StyledText>
            ) : !newOffer ? (
                <StyledView className="mt-4">
                    <ButtonPrimary
                        label="Get updated info"
                        onPress={handleCheckFlight}
                    />
                </StyledView>
            ) : (
                <StyledText className="text-lg text-center text-gray-300">
                    Up-to-date
                </StyledText>
            )}
        </StyledView>
    );
};

export default SavedFlightResult;
