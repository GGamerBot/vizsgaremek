import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ViewScreen = ({ title, content }: { title: string; content: string }) => {
    return (
        <Card>
            <CardContent>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p>{content}</p>
            </CardContent>
        </Card>
    );
};
export const ViewScreen: React.FC = () => {
    return <div>View Screen</div>
};

export default ViewScreen;
