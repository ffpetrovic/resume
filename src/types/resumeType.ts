import {z} from "zod";

export const resumeSchema = z.object({
    myName: z.string(),
    myLocation: z.string(),
    about: z.string(),
    image: z.string(),
    links: z.array(z.object({
        text: z.string(),
        url: z.string(),
    })),
    expertise: z.object({
       technologies: z.array(z.string()),
    }),
    projects: z.array(z.object({
        name: z.string(),
        descriptionItems: z.array(z.string()),
        technologiesUsed: z.array(z.string()),
        calendarYear: z.number(),
        durationInMonths: z.number().optional(),
        teamSize: z.number().optional(),
        isOpenSource: z.boolean().optional(),
    })),
})

export type ResumeType = z.infer<typeof resumeSchema>;