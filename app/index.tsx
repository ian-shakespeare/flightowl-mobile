import {
  StyledView,
  StyledText,
  StyledTextInput,
  StyledScrollView,
} from "../components/StyledElements";
import Spacer from "../components/UI/Spacer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import ButtonSecondary from "../components/UI/ButtonSecondary";
import { useState } from "react";
import Fuse from "fuse.js";
import airports from "../data/airports.json";

type InputType = "origin" | "destination" | "date" | null;
type Airport = {
  item: {
    name: string;
    municipality: string;
    iata_code: string;
  };
};
type SearchParams = {
  origin: string;
  destination: string;
  date: string;
};

const Home = () => {
  const [focusedInput, setFocusedInput] = useState<InputType>(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchParams, setSearchParams] = useState<SearchParams>({
    origin: "",
    destination: "",
    date: "",
  });
  const options = {
    keys: ["name", "iata_code", "municipality"],
  };
  const fuse = new Fuse(airports, options);

  const handleSelectAirport = (airport: Airport) => {
    searchParams[focusedInput!] = airport.item.iata_code;
    setSearchParams(searchParams);
    setFocusedInput(null);
    setSearchValue("");
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
              <StyledView key={i} className="border-b-2 border-gray-200">
                <ButtonSecondary
                  label={pa.item.name}
                  onPress={() => handleSelectAirport(pa)}
                />
              </StyledView>
            ))}
        </StyledScrollView>
      ) : (
        <StyledView className="h-2/3 flex gap-4 items-center justify-center">
          <StyledText>Home page</StyledText>
          <ButtonSecondary
            label={searchParams.origin || "Where from?"}
            onPress={() => setFocusedInput("origin")}
          />
          <ButtonSecondary
            label={searchParams.destination || "Where to?"}
            onPress={() => setFocusedInput("destination")}
          />
          {/* <StyledTextInput
          onFocus={() => setFocusedInput(1)}
          inputMode="email"
          placeholder="Where from?"
          className="w-3/4 border-2 border-gray-200 rounded-lg px-4 py-2"
        />
        <StyledTextInput
          onFocus={() => setFocusedInput(2)}
          placeholder="Where to?"
          className="w-3/4 border-2 border-gray-200 rounded-lg px-4 py-2"
        /> */}
          <ButtonPrimary
            label="Show me flights"
            onPress={() => console.log(searchParams)}
          />
        </StyledView>
      )}
    </>
  );
};

export default Home;
