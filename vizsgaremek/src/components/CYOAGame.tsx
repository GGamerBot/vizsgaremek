import React, { useState } from 'react';
import ViewScreen from './Viewscreen';
import EditScreen from './EditScreen';
import ConnectionTable from './Connectiontable';
import { Button } from "@/components/ui/button";

const CYOAGame = () => {
    const [currentScreen, setCurrentScreen] = useState<'View' | 'Edit' | 'Connection'>('View');
    const [screenData, setScreenData] = useState({
        title: 'Sample Screen',
        content: 'Welcome to this adventure!',
    });
    const [connections, setConnections] = useState([
        { from: 'Screen 1', to: 'Screen 2', condition: 'Key required' },
        { from: 'Screen 2', to: 'Screen 3', condition: 'No condition' },
    ]);

    const handleSaveScreen = () => {
        alert('Screen saved!');
    };

    return (
        <div className="p-4 space-y-4">
            <div className="flex space-x-4">
                <Button onClick={() => setCurrentScreen('View')}>View Screen</Button>
                <Button onClick={() => setCurrentScreen('Edit')}>Edit Screen</Button>
                <Button onClick={() => setCurrentScreen('Connection')}>Connection Table</Button>
            </div>

            {currentScreen === 'View' && <ViewScreen title={screenData.title} content={screenData.content} />}
            {currentScreen === 'Edit' && (
                <EditScreen
                    title={screenData.title}
                    content={screenData.content}
                    setTitle={(title) => setScreenData({ ...screenData, title })}
                    setContent={(content) => setScreenData({ ...screenData, content })}
                    onSave={handleSaveScreen}
                />
            )}
            {currentScreen === 'Connection' && <ConnectionTable connections={connections} />}
        </div>
    );
};

export default CYOAGame;
