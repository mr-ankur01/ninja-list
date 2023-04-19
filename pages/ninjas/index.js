import styles from '../../styles/ninjas.module.css' 
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return {
        props: { ninjas: data }
    }
}

export default function Ninjas({ ninjas }) {

    return (
        <div className="ninjas">
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <div key={ninja.id}>
                    <Link href={`/ninjas/${ninja.id}`} className={styles.single}>
                        <h3> {ninja.name} </h3>
                    </Link>
                </div>
            ))}
        </div>
    )
}