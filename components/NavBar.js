import Link from "next/link";
import { useRouter } from "next/router";

// 평범한 CSS를 사용할 수 있도록 해줌
// import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
            <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>About</a>
            </Link>
            <style jsx>{`
                a {
                    text-decoration: none;
                }
                .active {
                    color: tomato;
                }
            `}</style>
        </nav>
    );
}

// export default function NavBar() {
//     const router = useRouter();
//     return (
//         <nav className={styles.nav}>
//             <Link href="/">
//                 <a>Home</a>
//             </Link>
//             <Link href="/about">
//                 <a>About</a>
//             </Link>
//         </nav>
//     );
// }

// class에 이름을 추가할 때 class 이름은 텍스트로 적지 않고,
// Javascript object에서의 property 형식으로 적어줌
// 이는 NextJS에서 class 이름과 관련하여 그 어떤 충돌도 일어나지 않음
// 이는 다른 component에서도 nav라는 class 이름을 사용할 수 있도록 해줌
// 또한 모듈 내에 다른 class 이름이 존재할 경우, 유저가 브라우저에서 봤을 때,
// 모두 무작위 이름으로 작성됨

// styles를 추가하는 방법 1.
// export default function NavBar() {
//     const router = useRouter();
//     return (
//         <nav>
//             <Link href="/">
//                 <a className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}>Home</a>
//             </Link>
//             <Link href="/about">
//                 <a className={[styles.link, router.pathname === "/about" ? styles.active : "",].join(" ")}>About</a>
//             </Link>
//         </nav>
//     );
// }