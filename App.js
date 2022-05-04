import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { KeyboardAvoidingView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
    ScriptsScreen,
    CatalogScreen,
    ScannerScreen,
    SettingsScreen,
} from "./src/screens";
const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: "#bd93f9",
        accent: "#ff79c6",
        background: "#282a36",
        surface: "#44475a",
    },
};

const TabStack = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <PaperProvider theme={Theme}>
            <StatusBar style="auto" />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <NavigationContainer>
                    <TabStack.Navigator
                        initialRouteName="Scanner"
                        barStyle={{ backgroundColor: "#282a36" }}
                        activeColor={Theme.colors.primary}
                        inactiveColor={Theme.colors.surface}
                    >
                        <TabStack.Screen
                            name="Scanner"
                            component={ScannerScreen}
                            options={{
                                tabBarLabel: "Home",
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons
                                        name="home"
                                        color={color}
                                        size={26}
                                    />
                                ),
                            }}
                        />
                        <TabStack.Screen
                            name="Settings"
                            component={SettingsScreen}
                            options={{
                                tabBarLabel: "Settings",
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons
                                        name="cog"
                                        color={color}
                                        size={26}
                                    />
                                ),
                            }}
                        />
                        <TabStack.Screen
                            name="Catalog"
                            component={CatalogScreen}
                            options={{
                                tabBarLabel: "Catalog",
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons
                                        name="file"
                                        color={color}
                                        size={26}
                                    />
                                ),
                            }}
                        />
                        <TabStack.Screen
                            name="Scripts"
                            component={ScriptsScreen}
                            options={{
                                tabBarLabel: "Scripts",
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons
                                        name="script"
                                        color={color}
                                        size={26}
                                    />
                                ),
                            }}
                        />
                    </TabStack.Navigator>
                </NavigationContainer>
            </KeyboardAvoidingView>
        </PaperProvider>
    );
}
