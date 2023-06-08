import { FC, ReactNode } from "react";
import Container from "../Container";
import Title from "../Title";
import TodoIcon from "../MainIcons/TodoIcon";
import NoteBook from "../MainIcons/Notebook";
import Suitcase from "../MainIcons/Suitcase";
import Calendar from "../MainIcons/Calendar";
import MotivationPost from "../MotivationPost";

import style from "./DontLet.module.scss";

const DontLet: FC = () => {
    const organizingPosts: [ReactNode, string][] = [
        [<TodoIcon />, "Small task"],
        [<NoteBook />, "Write it"],
        [<Suitcase />, "Do it"],
        [<Calendar />, "Repeat"],
    ];

    return (
        <div className={style.dont__let}>
            <Title text="Don’t let your day doing nothing" />
            <Container>
                {organizingPosts.map((elem: [ReactNode, string]) => {
                    return (
                        <MotivationPost key={elem[1]} text={elem[1]}>
                            {elem[0]}
                        </MotivationPost>
                    );
                })}
            </Container>
        </div>
    );
};
export default DontLet;
