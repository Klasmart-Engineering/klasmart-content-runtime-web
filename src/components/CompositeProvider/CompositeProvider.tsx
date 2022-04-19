import CanvasCompositeProvider from "../../canvas/CompositeProvider";
import React from "react";

interface CompositeProviderProps {
}

const CompositeProvider: React.FC<CompositeProviderProps> = (props) => {
    return (
        <>
            <CanvasCompositeProvider>
                {props.children}
            </CanvasCompositeProvider>
        </>
    );
};

export default CompositeProvider;
