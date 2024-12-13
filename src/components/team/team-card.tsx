import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'

type TeamMember = {
    user: {
        name: string;
        rollNo: string;
    }
}

type Team = {
    id: number;
    name: string;
    description?: string;
    members: TeamMember[];
}

export default function TeamCard(props: Team) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-lg'>{props.name}</CardTitle>
            </CardHeader>
            <CardContent>
                {props.members.map((member) => (
                    <CardDescription key={member.user.rollNo}>
                        {member.user.name} ({member.user.rollNo})
                    </CardDescription>
                ))}
            </CardContent>
        </Card>
    );
}
