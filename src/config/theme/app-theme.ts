import { StyleSheet } from "react-native";

export const colors = {
    darkGrey: '#2D2D2D',
    lightGrey: '#9B9B9B',
    orange: '#FF9427',

    textPrimary: 'white',
    textSecondary: '#666666',
    backgroundColor: '#000000'
};

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },

    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },

    mainResult: {
        fontSize: 70,
        color: colors.textPrimary,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300'
    },
    
    subResult: {
        fontSize: 40,
        color: colors.textSecondary,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },

    button: {
        height: 70,
        width: 70,
        backgroundColor: colors.darkGrey,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 30,
        color: colors.textPrimary,
        fontWeight: '400'
    }
});