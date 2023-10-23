import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import estrela from "../../assets/estrela.png";
import estrelaCinza from "../../assets/estrelaCinza.png";

export default function Estrela({ 
    onPress,
    desabilitada = true,
    preenchida, 
    grande = false,
}) {
    const estilos = estilosFuncao(grande);
    const getImagem = (preenchida) => {
        if (preenchida) {
            return estrela;
        }
        return estrelaCinza;
    }
    return <TouchableOpacity 
        key={i}
        onPress={onPress}
        disabled={desabilitada}>
        <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>

};

const estilosFuncao =(grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
    },
});