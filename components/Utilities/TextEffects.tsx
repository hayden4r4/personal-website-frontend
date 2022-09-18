import styles from "../../public/static/styles/utilities/_constants.module.scss";
export default function textShadowGenerator(start: number, end: number, increment: number) : string {
    let shadowString: string = "";
    for (let i: number = start; i <= end; i += increment) {
        shadowString += `${i}em ${i}em ${styles.marsPink}, `;
    }
    return (
        shadowString.slice(0, -2)
    );
}