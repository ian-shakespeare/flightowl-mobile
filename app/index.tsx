import {
    StyledView,
    StyledText,
    StyledTextInput,
    StyledScrollView,
} from "../components/StyledElements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import ButtonSecondary from "../components/UI/ButtonSecondary";
import { useState } from "react";
import Fuse from "fuse.js";
import airports from "../data/airports.json";
import { View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { Link } from "expo-router";

type SearchParameter = "origin" | "destination" | "date";
type Airport = {
    item: {
        name: string;
        municipality: string;
        iata_code: string;
    };
};

const Home = () => {
    const [focusedInput, setFocusedInput] = useState<SearchParameter | null>(
        null
    );
    const [searchValue, setSearchValue] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");

    const options = {
        keys: ["name", "iata_code", "municipality"],
    };
    const fuse = new Fuse(airports, options);
    const emptyAirport: Airport = {
        item: { name: "", municipality: "", iata_code: "" },
    };

    const updateSearchParam = (param: SearchParameter, value: string) => {
        switch (param) {
            case "origin":
                setOrigin(value);
                break;
            case "destination":
                setDestination(value);
                break;
            case "date":
                setDate(value);
                break;
        }
    };

    return (
        <>
            {focusedInput ? (
                <StyledScrollView className="h-full">
                    <StyledTextInput
                        onChangeText={setSearchValue}
                        className="py-3 border-y-2 border-gray-200 text-fo-magenta text-center text-lg"
                        placeholder="Airport Name"
                    />
                    {fuse
                        .search(searchValue)
                        .slice(0, 15)
                        .map((pa, i) => (
                            <StyledView
                                key={i}
                                className="py-2 border-b-2 border-gray-200"
                            >
                                <ButtonSecondary
                                    label={pa.item.name}
                                    onPress={() => {
                                        updateSearchParam(
                                            focusedInput,
                                            pa.item.iata_code
                                        );
                                        setFocusedInput(null);
                                    }}
                                />
                            </StyledView>
                        ))}
                </StyledScrollView>
            ) : (
                <StyledView className="h-2/3 flex gap-4 items-center justify-center">
                    <StyledText className="text-fo-purple text-3xl">
                        Welcome back
                    </StyledText>
                    <StyledView className="w-3/4 py-2 px-4 flex flex-row justify-between items-center border-2 border-gray-200 rounded-md">
                        <ButtonSecondary
                            label={origin || "Where from?"}
                            onPress={() => setFocusedInput("origin")}
                        />
                        {origin !== "" && (
                            <IconButton
                                icon={faXmark}
                                color="#e5e7eb"
                                size={24}
                                onPress={() => updateSearchParam("origin", "")}
                            />
                        )}
                    </StyledView>
                    <StyledView className="w-3/4 py-2 px-4 flex flex-row justify-between items-center border-2 border-gray-200 rounded-md">
                        <ButtonSecondary
                            label={destination || "Where to?"}
                            onPress={() => setFocusedInput("destination")}
                        />
                        {destination !== "" && (
                            <IconButton
                                icon={faXmark}
                                color="#e5e7eb"
                                size={24}
                                onPress={() =>
                                    updateSearchParam("destination", "")
                                }
                            />
                        )}
                    </StyledView>
                    <StyledTextInput
                        onChangeText={setDate}
                        placeholder="Date mm/dd/yyyy"
                        className="w-3/4 px-4 py-2 border-2 border-gray-200 rounded-md text-lg"
                    />
                    {origin !== "" && destination !== "" && date !== "" && (
                        <ButtonPrimary
                            label="Show me flights"
                            onPress={() =>
                                console.log(origin, destination, date)
                            }
                        />
                    )}
                    <Link href="/search">Search</Link>
                </StyledView>
            )}
        </>
    );
};

export default Home;
