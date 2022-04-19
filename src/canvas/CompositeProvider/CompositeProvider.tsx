import WhiteboardStateProvider from "../SynchronizedState/Provider";
import WhiteboardProvider from "../Whiteboard/Provider";
import WhiteboardEventSerializer from "@kl-engineering/kidsloop-canvas/lib/domain/whiteboard/SharedEventSerializerProvider";
import React from "react";

interface Props {
}

const CanvasCompositeProvider: React.FC<Props> = (props) => {
    return (
        <WhiteboardEventSerializer>
            <WhiteboardStateProvider>
                <WhiteboardProvider>
                    {props.children}
                </WhiteboardProvider>
            </WhiteboardStateProvider>
        </WhiteboardEventSerializer>
    );
};

export default CanvasCompositeProvider;
