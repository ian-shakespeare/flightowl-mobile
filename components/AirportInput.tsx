import { useEffect, useState } from "react";
import {
    StyledScrollView,
    StyledText,
    StyledTextInput,
    StyledView,
} from "./StyledElements";
import airports from "../data/airports.json";
import ButtonSecondary from "./UI/ButtonSecondary";

type Airport = {
    id: string;
    name: string;
    continent: string;
    municipality: string;
    iata_code: string;
};

type Props = {
    callback: (code: string) => void;
};

const AirportInput = ({ callback }: Props) => {
    const [selectedAirport, setSelectedAirport] = useState<Airport>({
        id: "",
        name: "",
        continent: "",
        municipality: "",
        iata_code: "",
    });
    const [possibleAirports, setPossibleAirports] = useState<Airport[]>([]);
    const [searchValue, setSearchValue] = useState("");

    const updatePossibleAirports = () => {
        setPossibleAirports(
            !searchValue
                ? []
                : airports
                      .filter(
                          (a) =>
                              a.municipality
                                  .toLowerCase()
                                  .includes(searchValue.toLowerCase()) ||
                              a.name
                                  .toLowerCase()
                                  .includes(searchValue.toLowerCase()) ||
                              a.iata_code
                                  .toLowerCase()
                                  .includes(searchValue.toLowerCase())
                      )
                      .slice(0, 8)
        );
    };

    const handleSelectAirport = (airport: Airport) => {
        setSelectedAirport(airport);
        setSearchValue(`${airport.name} (${airport.iata_code})`);
        setPossibleAirports([]);
        callback(airport.iata_code);
    };

    return (
        <StyledView className="flex">
            <StyledTextInput
                value={searchValue}
                placeholder="Airport name or city"
                onChangeText={(text: string) => {
                    setSearchValue(text);
                    updatePossibleAirports();
                }}
                className="text-lg text-center py-4 border-y-2 border-gray-200"
            />
            {possibleAirports.length >= 1 && (
                <StyledScrollView>
                    {possibleAirports.map((pa, i) => (
                        <StyledView
                            key={i}
                            className="border-b-2 border-gray-200 py-2"
                        >
                            <ButtonSecondary
                                label={`${pa.name} (${pa.iata_code})`}
                                onPress={() => handleSelectAirport(pa)}
                            />
                        </StyledView>
                    ))}
                </StyledScrollView>
            )}
        </StyledView>
    );
};

export default AirportInput;
