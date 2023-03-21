import { Link, Slot, usePathname } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyledView } from "../components/StyledElements";
import { styled } from "nativewind";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faUser,
    faBookmark,
    faMap,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
    createContext,
    useState,
    Dispatch,
    SetStateAction,
    useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StyledSafeAreaView = styled(SafeAreaView);

export const AuthContext = createContext({
    sessionId: null as string | null,
    setSessionId: (() => {}) as Dispatch<SetStateAction<string | null>>,
});

const Layout = () => {
    const foPurple = "#7F58E8";
    const gray400 = "#9ca3af";
    const pathname = usePathname();
    const [sessionId, setSessionId] = useState<string | null>(null);
    const auth = { sessionId, setSessionId };

    const getStoredSession = async () => {
        try {
            const sid = await AsyncStorage.getItem("sessionId");
            setSessionId(sid === "" ? null : sid);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getStoredSession();
    }, []);

    return (
        <AuthContext.Provider value={auth}>
            <StyledSafeAreaView className="flex h-full justify-between">
                <Slot />
                <StyledView className="flex flex-row w-full h-20 px-12 justify-between items-center bg-gray-100 border-t-2 border-gray-200">
                    <Link href="/">
                        <FontAwesomeIcon
                            icon={faSearch}
                            size={32}
                            color={
                                ["/", "/search"].includes(pathname)
                                    ? foPurple
                                    : gray400
                            }
                        />
                    </Link>
                    <Link href="/">
                        <FontAwesomeIcon
                            icon={faMap}
                            size={32}
                            color={pathname === "/map" ? foPurple : gray400}
                        />
                    </Link>
                    <Link href="/">
                        <FontAwesomeIcon
                            icon={faBookmark}
                            size={32}
                            color={pathname === "/saved" ? foPurple : gray400}
                        />
                    </Link>
                    <Link href="/login">
                        <FontAwesomeIcon
                            icon={faUser}
                            size={32}
                            color={
                                ["/login", "/register", "/account"].includes(
                                    pathname
                                )
                                    ? foPurple
                                    : gray400
                            }
                        />
                    </Link>
                </StyledView>
            </StyledSafeAreaView>
        </AuthContext.Provider>
    );
};

export default Layout;
