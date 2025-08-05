import { createHomeStyles } from "@/assets/styles/home.styles";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from 'expo-linear-gradient';
import React from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";

export default function Index() {
    const { toggleDarkMode, colors } = useTheme();
    const homeStyles = createHomeStyles(colors);

    return (
        <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
            <StatusBar barStyle={colors.statusBarStyle} />
            <SafeAreaView style={homeStyles.safeArea}>
                <Header />
                <TodoInput />
                <TouchableOpacity onPress={toggleDarkMode}>
                    <Text>Toggle mode</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </LinearGradient>
    );
}


