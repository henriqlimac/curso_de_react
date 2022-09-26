import React from "react";
import Item from "./Item";
import styles from './Styles.module.css'

export default function List(){
    return(
        <>
            <h1>MY LIST</h1>
            <ul className={styles.listStyleTypes}>
                <Item marca="FIAT" ano={1990}/>
                <Item marca="VW" ano={1991}/>
            </ul>
        </>
    )
}