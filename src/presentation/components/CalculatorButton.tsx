import { Pressable, Text } from "react-native"
import { colors, styles } from "../../config/theme/app-theme"

interface Props {
    label: string;
    color?: string;
    dobleSize?: boolean;
    blackText?: boolean;

    onPress: () => void;
}

export const CalculatorButton = ({
    label,
    color = colors.darkGrey,
    dobleSize = false,
    blackText = false,
    onPress
}: Props) => {
    return (
        <Pressable 
        onPress={() => onPress()}
        style={({ pressed }) => ({
            ...styles.button,
            backgroundColor: color,
            width: dobleSize ? 150 : 70,
            opacity: pressed ? 0.8 : 1,
        })}>
            <Text style={{...styles.buttonText,
                color: blackText ? 'black' : 'white'}}>
                {label}
            </Text>
        </Pressable>
    )
}
