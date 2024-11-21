import React from 'react';

interface IconsProps {
    name: string;
}

const Icons: React.FC<IconsProps> = ({ name }) => {
    const iconPaths: Record<string, React.JSX.Element> = {
        East: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z"/></svg>
    };

    return (
        <div className="flex items-center justify-center">
            {iconPaths[name]}
        </div>
    );
};

export default Icons;
