import { Text, StyleSheet } from 'react-native';

export default function DefaultText({ children }) {
    return (
        <Text style={styles.appName}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
});