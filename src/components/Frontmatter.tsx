import {ResumeType} from "../types/resumeType.ts";
import {HTMLProps} from "../types/common.ts";
import {Link} from "./Link.tsx";
import {AppMarkdown} from "./AppMarkdown";

export const Frontmatter = ({
    image,
    links,
    myName,
    myLocation,
    about,
    ...props
}: Pick<ResumeType, 'myName' | 'image' | 'about' | 'links' | 'myLocation'> & HTMLProps<'div'>) => {
    return <div {...props}>
        <div className="flex gap-x-8 items-start">
            <img src={image} className={"w-[120px] aspect-square rounded-xl"} />
            <div>
                <div>
                    <h1 className={"inline-block mr-4 text-2xl font-bold"}>{myName}</h1>
                    <span className={"text-stone-500"}>📍{myLocation}</span>
                </div>
                <div><AppMarkdown>{about}</AppMarkdown></div>
                <div className={"flex gap-x-2 mt-2 underline"}>{links.map((link) =>
                    <Link key={link.url} target={"_blank"} href={link.url}>{link.text}</Link>
                )}</div>
            </div>
        </div>
    </div>
}