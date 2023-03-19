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
import { createContext, useState, Dispatch, SetStateAction } from "react";
import { Account } from "../interfaces";

const StyledSafeAreaView = styled(SafeAreaView);

export const AuthContext = createContext({
    account: null as Account | null,
    setAccount: (() => {}) as Dispatch<SetStateAction<Account | null>>,
});

const Layout = () => {
    const foPurple = "#7F58E8";
    const gray400 = "#9ca3af";
    const pathname = usePathname();
    const [account, setAccount] = useState<Account | null>(null);
    const auth = { account, setAccount };
    return (
        <AuthContext.Provider value={auth}>
            <StyledSafeAreaView className="flex h-full justify-between">
                <Slot />
                <StyledView className="flex flex-row w-full h-20 px-12 justify-between items-center bg-white border-t-2 border-gray-200">
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
