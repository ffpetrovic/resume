import {Frontmatter} from "./components/Frontmatter.tsx";
import {Expertise} from "./components/Expertise.tsx";
import {Projects} from "./components/Projects.tsx";
import {Helmet} from 'react-helmet';
import {useResumeData} from "./context/resumeData.ts";

function App() {
  const { resumeData } = useResumeData();

  if(!resumeData) return;

  return (
    <div className="w-[210mm] mx-auto text-stone-800 p-16 flex flex-col gap-y-8">
        <Helmet>
            <title>{resumeData.myName} CV</title>
            <link id="favicon" rel="icon" href={resumeData.image} type="image/x-icon" data-react-helmet="true" />
        </Helmet>
        <Frontmatter
            myName={resumeData.myName}
            myLocation={resumeData.myLocation}
            about={resumeData.about}
            links={resumeData.links}
            image={resumeData.image}
        />
        <Expertise technologies={resumeData.expertise.technologies} />
        <Projects projects={resumeData.projects} />
    </div>
  )
}

export default App
