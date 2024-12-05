import { useMessageStyles } from "@typography/Message";

export interface MessageProps {}

/**
 * Text block element to display a status message
 */
export const Message = (_props: MessageProps) => {
  const messageClasses = useMessageStyles();

  return <div className={messageClasses.root}>Message Component</div>;
};
