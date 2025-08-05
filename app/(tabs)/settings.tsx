import useTheme from '@/hooks/useTheme';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
    const { toggleDarkMode, colors } = useTheme();

    return (
        <SafeAreaView>
            <Text>SettingsScreen</Text>

            <TouchableOpacity onPress={toggleDarkMode}>
                <Text>Toggle mode</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default SettingsScreen