import {HTMLProps} from "../types/common.ts";

type ExpertiseProps = {
    technologies: string[]
} & HTMLProps<'div'>

export const Expertise = ({
    technologies,
    ...props
}: ExpertiseProps) => {
    return <div {...props}>
        <h3 className={"text-lg font-bold"}>🧠 Expertise</h3>
        <p>{technologies.join(', ')}</p>
    </div>
}