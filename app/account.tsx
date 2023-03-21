import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyledText, StyledView } from "../components/StyledElements";
import { Account } from "../interfaces";
import { AuthContext } from "./_layout";

const AccountPage = () => {
    const { sessionId, setSessionId } = useContext(AuthContext);
    const [user, setUser] = useState<Account | null>(null);

    useEffect(() => {
        axios
            .request({
                method: "GET",
                url: "https://api.flightowl.app/user",
                headers: {
                    Cookie: `sessionId=${sessionId}`,
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    setUser(res.data);
                } else if (res.status === 401) {
                    setSessionId(null);
                    AsyncStorage.setItem("sessionId", "");
                }
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <StyledView className="h-2/3 flex gap-2 items-center justify-center">
            <StyledText>
                Name: {user ? `${user.firstName} ${user.lastName}` : "Unknown"}
            </StyledText>
            <StyledText>Account page. Id: {sessionId}</StyledText>
        </StyledView>
    );
};

export default AccountPage;
