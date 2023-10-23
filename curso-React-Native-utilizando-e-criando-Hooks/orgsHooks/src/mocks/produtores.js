import green from "../../assets/produtores/green.png";
import grow from "../../assets/produtores/grow.png";
import jennyJack from "../../assets/produtores/jenny-jack.png";
import potager from "../../assets/produtores/potager.png";
import salad from "../../assets/produtores/salad.png";

const gerarNumeroAleatório = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
} ;

const produtores = {
    titulo: 'Produtores',
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: `${gerarNumeroAleatório(1,500)}m`,
            estrelas: gerarNumeroAleatório(1,5),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `${gerarNumeroAleatório(1,500)}m`,
            estrelas: gerarNumeroAleatório(1,5),
        },
        {
            nome: "Jenny Jack",
            imagem: jennyJack,
            distancia: `${gerarNumeroAleatório(1,500)}m`,
            estrelas: gerarNumeroAleatório(1,5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: `${gerarNumeroAleatório(1,500)}m`,
            estrelas: gerarNumeroAleatório(1,5),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: `${gerarNumeroAleatório(1,500)}m`,
            estrelas: gerarNumeroAleatório(1,5),
        },
    ]
};

export default produtores;