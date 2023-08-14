import ReactMarkdown from "react-markdown";
import {ComponentProps} from "react";

type AppMarkdownProps = ComponentProps<ReactMarkdown>;

export const AppMarkdown = (props: AppMarkdownProps) => {
    return <ReactMarkdown
        {...props}
        components={{
            ...props.components,
            p: ({node, ...props}) => <p {...props} style={{ ...props.style, display: 'inline'}} />,
            a: ({node, ...props}) => <a  {...props} target={"_blank"} style={{ ...props.style, display: 'inline'}} />
        }}
    />
}