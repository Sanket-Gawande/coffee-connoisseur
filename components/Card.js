import Link from 'next/link'
import Image from 'next/image'
import React from 'react';
import coffeeStores from '../pages/data/data.json'
import styles from '../styles/card.module.css'

const Card = ({ stores , heading }) => {
  return (<>
  <main className={styles.main}>
  <h1>{heading}</h1>
  <section className={styles.card_grid}>
    {stores.features.map(obj => {
        return(
            <Link  key={obj.properties.place_id} href={`/coffee-shop/${obj.properties.place_id}`} >
            <a className={styles.card} >
            <h4>{obj.properties.name}</h4>
            <div className={styles.img}>
            <Image src={ obj.img } width={400} height={200}  className={styles.imgTag}/>
            </div>
            </a>
            </Link>
        )
    })}
  </section>
  </main>
  </>)
};

export default Card;
