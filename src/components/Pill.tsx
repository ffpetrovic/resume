import {HTMLProps} from "../types/common.ts";
import {classNames} from "../utils/classNames.ts";

type PillProps = HTMLProps<'div'>;

export const Pill = ({
    className,
    ...props
}: PillProps) => {
    const rootClassName = classNames("rounded-lg bg-emerald-100 text-emerald-600 text-[10px] items-center inline-block h-4 px-2 font-medium", className)

    return <div
        className={rootClassName}
        {...props}/>
}