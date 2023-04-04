import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { StyledText, StyledView } from "../components/StyledElements";
import ButtonPrimary from "../components/UI/ButtonPrimary";
import { Account } from "../interfaces";
import { AuthContext } from "./_layout";

const AccountPage = () => {
    const router = useRouter();
    const { jwt, setJwt } = useContext(AuthContext);
    const [user, setUser] = useState<Account | null>(null);

    useEffect(() => {
        axios
            .request({
                method: "GET",
                url: "https://api.flightowl.app/user",
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            .then((res) => {
                if (res.status === 200) {
                    setUser(res.data);
                } else if (res.status === 401) {
                    setJwt(null);
                    AsyncStorage.setItem("jwt", "");
                }
            })
            .catch((err) => {
                setJwt(null);
                AsyncStorage.setItem("jwt", "");
                console.error(err);
            });
    }, []);

    return (
        <StyledView className="h-2/3 flex gap-2 items-center justify-center">
            <StyledText>
                Name: {user ? `${user.firstName} ${user.lastName}` : "Unknown"}
            </StyledText>
            <StyledText>Account page. Token: {jwt}</StyledText>
            <ButtonPrimary
                label="Logout"
                onPress={() => {
                    setJwt(null);
                    AsyncStorage.setItem("sessionId", "");
                    router.push("/login");
                }}
            />
        </StyledView>
    );
};

export default AccountPage;
