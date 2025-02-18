import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";

const ConnectionTable = ({ connections }: {
    connections: { from: string; to: string; condition: string }[];
}) => {
    return (
        <Card>
            <CardContent>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>From</TableCell>
                            <TableCell>To</TableCell>
                            <TableCell>Condition</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {connections.map((connection, index) => (
                            <TableRow key={index}>
                                <TableCell>{connection.from}</TableCell>
                                <TableCell>{connection.to}</TableCell>
                                <TableCell>{connection.condition}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};
export const ConnectionTable: React.FC = () => {
    return <div>Connection Table</div>
};

export default ConnectionTable;
