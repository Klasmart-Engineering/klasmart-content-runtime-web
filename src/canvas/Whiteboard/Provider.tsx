// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useSynchronizedState } from "../SynchronizedState/Provider";
import KidsLoopCanvas from "@kl-engineering/kidsloop-canvas";
import ToolbarContextProvider from "@kl-engineering/kidsloop-canvas/lib/components/toolbar/toolbar-context-provider";
import React from "react";

interface Props {
}

const WhiteboardProvider: React.FC<Props> = (props) => {
    const { state: { permissions } } = useSynchronizedState();
    console.log({
        permissions,
    });
    return (
        <KidsLoopCanvas.WhiteboardProvider permissions={{
            allowClearAll: permissions.allowDeleteShapes.others && permissions.allowDeleteShapes.own,
            allowClearMyself: permissions.allowDeleteShapes.own,
            allowClearOthers: permissions.allowDeleteShapes.others,
        }}
        >
            <ToolbarContextProvider>
                {props.children}
            </ToolbarContextProvider>
        </KidsLoopCanvas.WhiteboardProvider>
    );
};

export default WhiteboardProvider;
