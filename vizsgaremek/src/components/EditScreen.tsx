import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const EditScreen = ({ title, content, setTitle, setContent, onSave }: {
    title: string;
    content: string;
    setTitle: (value: string) => void;
    setContent: (value: string) => void;
    onSave: () => void;
}) => {
    return (
        <Card>
            <CardContent className="space-y-4">
                <Input
                    placeholder="Screen Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea
                    placeholder="Screen Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button onClick={onSave}>Save</Button>
            </CardContent>
        </Card>
    );
};
export const EditScreen: React.FC = () => {
    return <div>Edit Screen</div>
};

export default EditScreen;

const ItemTypes = {
  ELEMENT: 'element',
};
 
const DragItem = ({ id, content }: { id: string; content: string }) => {
  const [, drag] = useDrag(() => ({
    type: ItemTypes.ELEMENT,
    item: { id },
  }));
  return (
    <div ref={drag} className="p-2 border rounded shadow">
      {content}
    </div>
  );
};
 
const DropZone = ({ onDrop }: { onDrop: (id: string) => void }) => {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.ELEMENT,
drop: (item: { id: string }) => onDrop(item.id),
  }));
  return <div ref={drop} className="p-4 border-2 border-dashed border-gray-400 h-64"></div>;
};
 
const DragAndDropEditor = () => {
  const [elements, setElements] = useState([
    { id: '1', content: 'Text Block' },
    { id: '2', content: 'Image Block' },
    { id: '3', content: 'Button' },
  ]);
 
  const [screenContent, setScreenContent] = useState<string[]>([]);
 
  const handleDrop = (id: string) => {
const element = elements.find((el) => el.id === id);
    if (element) setScreenContent((prev) => [...prev, element.content]);
  };
 
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex space-x-4">
        <div className="w-1/3">
          <h2>Elements</h2>
          {elements.map((el) => (
el.id} id={el.id} content={el.content} />
          ))}
        </div>
        <div className="w-2/3">
          <h2>Screen</h2>
          <DropZone onDrop={handleDrop} />
          <div className="mt-4">
            {screenContent.map((content, idx) => (
              <div key={idx} className="p-2 border rounded shadow">
                {content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};
 
export default DragAndDropEditor;
