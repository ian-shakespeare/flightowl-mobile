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

    const toDateTime = (t: string): string =>
        new Date(t).toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        });

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
        <StyledView className="h-2/3 w-4/5 flex gap-4 mx-auto content-center justify-center">
            <StyledText className="text-2xl">
                Name:{" "}
                <StyledText className="text-fo-pink">
                    {user ? `${user.firstName} ${user.lastName}` : "Unknown"}
                </StyledText>
            </StyledText>
            <StyledText className="text-2xl">
                Email:{" "}
                <StyledText className="text-fo-magenta">
                    {user ? `${user.email}` : "Unknown"}
                </StyledText>
            </StyledText>
            <StyledText className="text-2xl">
                Joined:{" "}
                <StyledText className="text-fo-purple">
                    {user ? `${toDateTime(user.dateJoined)}` : "Unknown"}
                </StyledText>
            </StyledText>
            <StyledView className="mt-4">
                <ButtonPrimary
                    label="Logout"
                    onPress={() => {
                        setJwt(null);
                        AsyncStorage.setItem("sessionId", "");
                        router.push("/login");
                    }}
                />
            </StyledView>
        </StyledView>
    );
};

export default AccountPage;
