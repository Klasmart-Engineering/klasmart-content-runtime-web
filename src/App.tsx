import './App.css';
import { useSynchronizedState } from './canvas/SynchronizedState';
import { WhiteboardCanvas } from "@kl-engineering/kidsloop-canvas/lib/domain/whiteboard/WhiteboardCanvas";
import React from 'react';

interface Props {
}

const App: React.FC<Props> = (props) => {
    const {
        state: {
            permissions,
            display,
            localDisplay,
        },
    } = useSynchronizedState();

    console.log({
        woop: permissions.allowCreateShapes,
    });

    return (
        <div
            style={{
                width: `100%`,
                height: `100%`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                position: `relative`,
            }}
        >
            <WhiteboardCanvas
                pointerEvents={permissions.allowCreateShapes}
                instanceId="321"
                pixelHeight={400}
                pixelWidth={400}
                userId="123"
                scaleMode="ScaleToFill"
                display={true ?? localDisplay ?? display}
            />
        </div>
    );
};

export default App;
