import {
    StyledView,
    StyledText,
    StyledTextInput,
    StyledPressable,
} from "../components/StyledElements";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import ButtonSecondary from "../components/UI/ButtonSecondary";
import { useState } from "react";
import { useRouter } from "expo-router";
import moment from "moment";
import AirportInput from "../components/AirportInput";

const Home = () => {
    const router = useRouter();
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [selectedInput, setSelectedInput] = useState<string | null>(null);

    return (
        <>
            {selectedInput ? (
                <StyledView>
                    <AirportInput
                        callback={(s: string) => {
                            selectedInput === "origin"
                                ? setOrigin(s)
                                : setDestination(s);
                            setSelectedInput(null);
                        }}
                    />
                </StyledView>
            ) : (
                <StyledView className="h-2/3 flex gap-4 items-center justify-center">
                    <StyledText className="text-fo-purple text-3xl">
                        Welcome back
                    </StyledText>
                    <StyledView className="flex flex-row items-center justify-between w-3/4 px-4 py-2 border-2 border-gray-200 rounded-md">
                        {origin === "" ? (
                            <ButtonSecondary
                                label="Where from?"
                                onPress={() => {
                                    setSelectedInput("origin");
                                }}
                            />
                        ) : (
                            <>
                                <StyledText className="text-lg">
                                    {origin}
                                </StyledText>
                                <StyledPressable onPress={() => setOrigin("")}>
                                    <FontAwesomeIcon icon={faXmark} size={20} />
                                </StyledPressable>
                            </>
                        )}
                    </StyledView>
                    <StyledView className="flex flex-row items-center justify-between w-3/4 px-4 py-2 border-2 border-gray-200 rounded-md">
                        {destination === "" ? (
                            <ButtonSecondary
                                label="Where to?"
                                onPress={() => {
                                    setSelectedInput("destination");
                                }}
                            />
                        ) : (
                            <>
                                <StyledText className="text-lg">
                                    {destination}
                                </StyledText>
                                <StyledPressable
                                    onPress={() => setDestination("")}
                                >
                                    <FontAwesomeIcon icon={faXmark} size={20} />
                                </StyledPressable>
                            </>
                        )}
                    </StyledView>
                    <StyledTextInput
                        value={date}
                        onChangeText={setDate}
                        placeholder="Date mm/dd/yyyy"
                        className="w-3/4 px-4 py-2 border-2 border-gray-200 rounded-md text-lg"
                    />
                    {origin !== "" &&
                        destination !== "" &&
                        moment(date, "MM/DD/YYYY").format("YYYY-MM-DD") !==
                            "" && (
                            <StyledView className="mt-4">
                                <ButtonPrimary
                                    label="Show me flights"
                                    onPress={() => {
                                        router.push(
                                            `search?origin=${origin}&destination=${destination}&date=${moment(
                                                date,
                                                "MM/DD/YYYY"
                                            ).format("YYYY-MM-DD")}`
                                        );
                                    }}
                                />
                            </StyledView>
                        )}
                </StyledView>
            )}
        </>
    );
};

export default Home;
