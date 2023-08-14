import {createContainer} from "unstated-next";
import {useEffect, useState} from "react";
import {resumeSchema, ResumeType} from "../types/resumeType.ts";

const useResumeDataState = () => {
    const [resumeData, setResumeData] = useState<ResumeType>();

    useEffect(() => {
        /*
         * Type the resume data inline, or
         * let it be fetched from
         * public/resumeData.json.
         */
        fetch('./resumeData.json')
            .then(res => res.json())
            .then((resumeDataResponse) => {
                setResumeData(resumeSchema.parse(resumeDataResponse));
            })
    }, []);

    return {
        resumeData,
    }
}

export const ResumeDataContainer = createContainer(useResumeDataState)
export const useResumeData = ResumeDataContainer.useContainer;
