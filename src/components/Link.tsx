import {HTMLProps} from "../types/common.ts";

type LinkProps = HTMLProps<'a'>;

export const Link = (props: LinkProps) => {
    return <a className={"text-sky-600"} {...props}></a>
}