import {ResumeType} from "../types/resumeType.ts";
import {HTMLProps} from "../types/common.ts";
import {Pill} from "./Pill.tsx";
import {convertMonthsToYears} from "../utils/convertMonthsToYears.ts";
import {AppMarkdown} from "./AppMarkdown";

type ProjectsProps = Pick<ResumeType, 'projects'> & HTMLProps<'div'>

export const Projects = ({
     projects,
     ...props
 }: ProjectsProps) => {
    const renderProjectDurationAndTeamSize = ({ teamSize, durationInMonths }: (typeof projects)[number]) => {
        if(!teamSize && !durationInMonths) return;

        const renderedDurationInMonths = durationInMonths && convertMonthsToYears(durationInMonths);
        const renderedTeamSize = (() => {
            if(!teamSize) return;
            if(teamSize === 1) return 'Solo';

            return `${teamSize} people`
        })();

        return <Pill color={"emerald"}>
            {
                [renderedDurationInMonths, renderedTeamSize].filter(item => !!item).join(', ')
            }
        </Pill>
    }

    return <div {...props}>
        <h3 className={"text-lg font-bold mb-2"}>👣 Experience</h3>
        <div className={"flex flex-col gap-6"}>
            {projects.map((project) => {
                const {
                    name,
                    descriptionItems,
                    technologiesUsed,
                    calendarYear,
                    isOpenSource,
                } = project;

                return (
                    <div key={name} className={"break-inside-avoid"}>
                        <div className={"flex items-center gap-x-2 mb-0.5"}>
                            <h4 className={"text-stone-600 text-sm"}>
                                {calendarYear && <span
                                    className={"text-stone-500 inline-block mr-2 font-medium"}>{calendarYear}.</span>}
                                <AppMarkdown className={"inline"}>{name}</AppMarkdown>
                            </h4>
                            {renderProjectDurationAndTeamSize(project)}
                            {isOpenSource && <Pill className={"bg-indigo-100 text-indigo-600"}>Open Source</Pill>}
                        </div>
                        <h4 className={"font-mono text-xs uppercase font-semibold flex"}>
                            {technologiesUsed.map((technology, index, array) => {
                                return <span key={technology}>
                                    <AppMarkdown className={"inline"}>{technology}</AppMarkdown>
                                    {index !== array.length - 1 && <span className={"inline-block mr-2"}>, </span>}
                                </span>;
                            })}
                        </h4>
                        <ul className={"list-disc pl-4 mt-1"}>
                            {descriptionItems.map((descriptionItem) => (
                                <li key={descriptionItem} className={"text-sm"}>
                                    <AppMarkdown>{descriptionItem}</AppMarkdown>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    </div>
}