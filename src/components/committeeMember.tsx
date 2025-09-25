interface CommitteeMemberProps {
    name: string;
    role: string;
    bio: string;
}

export default function CommitteeMember({name, role, bio }: CommitteeMemberProps) {
    return (
        <>
        <b>{role}</b> {name}<br/>
    <p><em>{bio}</em></p>
    <br/>
        </>
    )
}