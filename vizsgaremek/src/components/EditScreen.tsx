import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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

export default EditScreen;